/**
 * Secure Storage Service using React Native Keychain
 * Replaces insecure localStorage for sensitive data
 * Includes fallback for when Keychain is unavailable
 */

// Web localStorage for secure storage fallback

// Dynamic import with fallback
let Keychain: any = null;
try {
  Keychain = require('react-native-keychain');
} catch (error) {
  console.warn('react-native-keychain not available, using fallback storage');
}

const STORAGE_KEYS = {
  AUTH_TOKEN: 'ceili_auth_token',
  USER_CREDENTIALS: 'ceili_user_credentials',
  REFRESH_TOKEN: 'ceili_refresh_token',
};

export class SecureStorageService {
  /**
   * Check if secure storage is available
   */
  private static isKeychainAvailable(): boolean {
    return Keychain !== null;
  }

  /**
   * Store authentication token securely
   */
  static async storeAuthToken(token: string): Promise<void> {
    try {
      if (this.isKeychainAvailable()) {
        await Keychain.setInternetCredentials(
          STORAGE_KEYS.AUTH_TOKEN,
          'auth_token',
          token
        );
      } else {
        // Fallback to localStorage with warning
        console.warn('Using insecure storage for auth token - Keychain unavailable');
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      }
    } catch (error) {
      console.error(__DEV__ && 'Failed to store auth token securely:', error);
      throw new Error('Failed to store authentication token');
    }
  }

  /**
   * Retrieve authentication token securely
   */
  static async getAuthToken(): Promise<string | null> {
    try {
      if (this.isKeychainAvailable()) {
        const credentials = await Keychain.getInternetCredentials(STORAGE_KEYS.AUTH_TOKEN);
        if (credentials && credentials.password) {
          return credentials.password;
        }
        return null;
      } else {
        // Fallback to localStorage
        return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      }
    } catch (error) {
      console.error(__DEV__ && 'Failed to retrieve auth token:', error);
      return null;
    }
  }

  /**
   * Store user data securely (non-sensitive parts can stay in localStorage)
   */
  static async storeUserCredentials(username: string, encryptedData: string): Promise<void> {
    try {
      await Keychain.setInternetCredentials(
        STORAGE_KEYS.USER_CREDENTIALS,
        username,
        encryptedData
      );
    } catch (error) {
      console.error(__DEV__ && 'Failed to store user credentials:', error);
      throw new Error('Failed to store user credentials');
    }
  }

  /**
   * Retrieve user credentials securely
   */
  static async getUserCredentials(): Promise<{username: string; data: string} | null> {
    try {
      const credentials = await Keychain.getInternetCredentials(STORAGE_KEYS.USER_CREDENTIALS);
      if (credentials) {
        return {
          username: credentials.username,
          data: credentials.password,
        };
      }
      return null;
    } catch (error) {
      console.error(__DEV__ && 'Failed to retrieve user credentials:', error);
      return null;
    }
  }

  /**
   * Store refresh token securely
   */
  static async storeRefreshToken(token: string): Promise<void> {
    try {
      await Keychain.setInternetCredentials(
        STORAGE_KEYS.REFRESH_TOKEN,
        'refresh_token',
        token
      );
    } catch (error) {
      console.error(__DEV__ && 'Failed to store refresh token:', error);
      throw new Error('Failed to store refresh token');
    }
  }

  /**
   * Retrieve refresh token securely
   */
  static async getRefreshToken(): Promise<string | null> {
    try {
      const credentials = await Keychain.getInternetCredentials(STORAGE_KEYS.REFRESH_TOKEN);
      if (credentials && credentials.password) {
        return credentials.password;
      }
      return null;
    } catch (error) {
      console.error(__DEV__ && 'Failed to retrieve refresh token:', error);
      return null;
    }
  }

  /**
   * Clear all stored secure data (logout)
   */
  static async clearAll(): Promise<void> {
    try {
      await Promise.all([
        Keychain.resetInternetCredentials(STORAGE_KEYS.AUTH_TOKEN),
        Keychain.resetInternetCredentials(STORAGE_KEYS.USER_CREDENTIALS),
        Keychain.resetInternetCredentials(STORAGE_KEYS.REFRESH_TOKEN),
      ]);
    } catch (error) {
      console.error(__DEV__ && 'Failed to clear secure storage:', error);
      // Don't throw error on logout cleanup
    }
  }

  /**
   * Check if biometric authentication is available
   */
  static async isBiometricAvailable(): Promise<boolean> {
    try {
      const biometryType = await Keychain.getSupportedBiometryType();
      return biometryType !== null;
    } catch {
      return false;
    }
  }

  /**
   * Store data with biometric protection
   */
  static async storeWithBiometric(key: string, username: string, data: string): Promise<void> {
    try {
      await Keychain.setInternetCredentials(key, username, data, {
        accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET,
        authenticationType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
      });
    } catch (error) {
      console.error(__DEV__ && 'Failed to store with biometric protection:', error);
      throw new Error('Biometric storage failed');
    }
  }
}