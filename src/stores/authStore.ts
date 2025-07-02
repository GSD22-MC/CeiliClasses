import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      // TODO: Replace with actual API call
      const response = await fetch('http://localhost:3001/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      
      await AsyncStorage.setItem('authToken', data.authToken);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));

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
      // TODO: Replace with actual API call
      const response = await fetch('http://localhost:3001/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, culturalProfile }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      
      await AsyncStorage.setItem('authToken', data.authToken);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));

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
    await AsyncStorage.removeItem('authToken');
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
      const authToken = await AsyncStorage.getItem('authToken');
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
      console.error('Failed to load auth state:', error);
    }
  },

  clearError: () => set({ error: null }),
}));