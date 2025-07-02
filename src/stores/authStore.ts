import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { secureApiCall } from '../config/api';
import { SecureStorageService } from '../services/SecureStorageService';

export interface User {
  id: string;
  email: string;
  culturalProfile: {
    irishConnectionLevel: number;
    learningMotivations: string[];
    culturalInterestDepth: 'surface' | 'moderate' | 'deep';
    familyTraditions?: string;
  };
  hasCompletedOnboarding: boolean;
  pronunciationProgress: Record<string, number>;
  culturalConfidenceScore: number;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  authToken: string | null;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, culturalProfile: User['culturalProfile']) => Promise<void>;
  logout: () => Promise<void>;
  completeOnboarding: () => void;
  updatePronunciationProgress: (term: string, score: number) => void;
  updateCulturalConfidence: (score: number) => void;
  loadAuthState: () => Promise<void>;
  clearError: () => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>((set, get) => ({
  // Initial state
  user: null,
  isAuthenticated: false,
  hasCompletedOnboarding: false,
  authToken: null,
  isLoading: false,
  error: null,

  // Actions
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await secureApiCall('/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      // Store sensitive data securely
      await SecureStorageService.storeAuthToken(data.authToken);
      if (data.refreshToken) {
        await SecureStorageService.storeRefreshToken(data.refreshToken);
      }
      
      // Store non-sensitive user data in AsyncStorage
      const publicUserData = { ...data.user };
      delete publicUserData.sensitiveData; // Remove any sensitive fields
      await AsyncStorage.setItem('user', JSON.stringify(publicUserData));

      set({
        user: data.user,
        authToken: data.authToken,
        isAuthenticated: true,
        hasCompletedOnboarding: data.user.hasCompletedOnboarding,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Login failed',
        isLoading: false,
      });
    }
  },

  register: async (email: string, password: string, culturalProfile: User['culturalProfile']) => {
    set({ isLoading: true, error: null });
    try {
      const response = await secureApiCall('/api/v1/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, culturalProfile }),
      });

      const data = await response.json();
      
      // Store sensitive data securely
      await SecureStorageService.storeAuthToken(data.authToken);
      if (data.refreshToken) {
        await SecureStorageService.storeRefreshToken(data.refreshToken);
      }
      
      // Store non-sensitive user data in AsyncStorage
      const publicUserData = { ...data.user };
      delete publicUserData.sensitiveData; // Remove any sensitive fields
      await AsyncStorage.setItem('user', JSON.stringify(publicUserData));

      set({
        user: data.user,
        authToken: data.authToken,
        isAuthenticated: true,
        hasCompletedOnboarding: false,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Registration failed',
        isLoading: false,
      });
    }
  },

  logout: async () => {
    // Clear all secure storage
    await SecureStorageService.clearAll();
    await AsyncStorage.removeItem('user');
    
    set({
      user: null,
      authToken: null,
      isAuthenticated: false,
      hasCompletedOnboarding: false,
    });
  },

  completeOnboarding: () => {
    const { user } = get();
    if (user) {
      const updatedUser = { ...user, hasCompletedOnboarding: true };
      AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      set({ 
        user: updatedUser,
        hasCompletedOnboarding: true 
      });
    }
  },

  updatePronunciationProgress: (term: string, score: number) => {
    const { user } = get();
    if (user) {
      const updatedUser = {
        ...user,
        pronunciationProgress: {
          ...user.pronunciationProgress,
          [term]: score,
        },
      };
      AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      set({ user: updatedUser });
    }
  },

  updateCulturalConfidence: (score: number) => {
    const { user } = get();
    if (user) {
      const updatedUser = {
        ...user,
        culturalConfidenceScore: score,
      };
      AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      set({ user: updatedUser });
    }
  },

  loadAuthState: async () => {
    try {
      const authToken = await SecureStorageService.getAuthToken();
      const userString = await AsyncStorage.getItem('user');
      
      if (authToken && userString) {
        const user = JSON.parse(userString);
        set({
          user,
          authToken,
          isAuthenticated: true,
          hasCompletedOnboarding: user.hasCompletedOnboarding,
        });
      }
    } catch (error) {
      console.error(__DEV__ && 'Failed to load auth state:', error);
      // Clear potentially corrupted data
      await SecureStorageService.clearAll();
      await AsyncStorage.removeItem('user');
    }
  },

  clearError: () => set({ error: null }),
}));