/**
 * Web Storage API wrapper that maintains async compatibility with AsyncStorage
 * for seamless React Native to Web conversion
 */

export class WebStorage {
  /**
   * Store data in localStorage with async interface
   */
  static async setItem(key: string, value: string): Promise<void> {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Failed to store item in localStorage:', error);
      throw error;
    }
  }

  /**
   * Get data from localStorage with async interface
   */
  static async getItem(key: string): Promise<string | null> {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Failed to get item from localStorage:', error);
      throw error;
    }
  }

  /**
   * Remove data from localStorage with async interface
   */
  static async removeItem(key: string): Promise<void> {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove item from localStorage:', error);
      throw error;
    }
  }

  /**
   * Clear all data from localStorage with async interface
   */
  static async clear(): Promise<void> {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Failed to clear localStorage:', error);
      throw error;
    }
  }

  /**
   * Get all keys from localStorage with async interface
   */
  static async getAllKeys(): Promise<string[]> {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) keys.push(key);
      }
      return keys;
    } catch (error) {
      console.error('Failed to get all keys from localStorage:', error);
      throw error;
    }
  }

  /**
   * Check if localStorage is available
   */
  static isAvailable(): boolean {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, 'test');
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      console.warn('localStorage is not available, falling back to memory storage');
      return false;
    }
  }
}

// Fallback memory storage for environments where localStorage isn't available
class MemoryStorage {
  private storage: Map<string, string> = new Map();

  async setItem(key: string, value: string): Promise<void> {
    this.storage.set(key, value);
  }

  async getItem(key: string): Promise<string | null> {
    return this.storage.get(key) || null;
  }

  async removeItem(key: string): Promise<void> {
    this.storage.delete(key);
  }

  async clear(): Promise<void> {
    this.storage.clear();
  }

  async getAllKeys(): Promise<string[]> {
    return Array.from(this.storage.keys());
  }
}

// Export the appropriate storage based on availability
export const AsyncStorage = WebStorage.isAvailable() ? WebStorage : new MemoryStorage();