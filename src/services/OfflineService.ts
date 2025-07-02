import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-netinfo/netinfo';

interface CachedData {
  data: any;
  timestamp: number;
  expiresIn: number;
}

interface OfflineAction {
  id: string;
  action: string;
  data: any;
  timestamp: number;
  retryCount: number;
}

class OfflineService {
  private isOnline: boolean = true;
  private offlineActions: OfflineAction[] = [];
  private cacheKeys = {
    DANCE_LESSONS: 'cached_dance_lessons',
    CULTURAL_CONTENT: 'cached_cultural_content',
    USER_PROGRESS: 'cached_user_progress',
    PRONUNCIATION_AUDIO: 'cached_pronunciation_audio',
    OFFLINE_ACTIONS: 'offline_actions',
  };

  constructor() {
    this.initializeNetworkListener();
    this.loadOfflineActions();
  }

  private initializeNetworkListener() {
    NetInfo.addEventListener(state => {
      const wasOffline = !this.isOnline;
      this.isOnline = state.isConnected ?? false;
      
      if (wasOffline && this.isOnline) {
        this.syncOfflineActions();
      }
    });
  }

  async cacheData(key: string, data: any, expiresInHours: number = 24): Promise<void> {
    const cachedData: CachedData = {
      data,
      timestamp: Date.now(),
      expiresIn: expiresInHours * 60 * 60 * 1000, // Convert to milliseconds
    };

    try {
      await AsyncStorage.setItem(key, JSON.stringify(cachedData));
    } catch (error) {
      console.error('Failed to cache data:', error);
    }
  }

  async getCachedData(key: string): Promise<any | null> {
    try {
      const cached = await AsyncStorage.getItem(key);
      if (!cached) return null;

      const cachedData: CachedData = JSON.parse(cached);
      const now = Date.now();
      
      // Check if cache has expired
      if (now - cachedData.timestamp > cachedData.expiresIn) {
        await AsyncStorage.removeItem(key);
        return null;
      }

      return cachedData.data;
    } catch (error) {
      console.error('Failed to get cached data:', error);
      return null;
    }
  }

  async cacheDanceLessons(lessons: any[]): Promise<void> {
    await this.cacheData(this.cacheKeys.DANCE_LESSONS, lessons, 168); // 1 week
  }

  async getCachedDanceLessons(): Promise<any[] | null> {
    return await this.getCachedData(this.cacheKeys.DANCE_LESSONS);
  }

  async cacheCulturalContent(content: any): Promise<void> {
    await this.cacheData(this.cacheKeys.CULTURAL_CONTENT, content, 168); // 1 week
  }

  async getCachedCulturalContent(): Promise<any | null> {
    return await this.getCachedData(this.cacheKeys.CULTURAL_CONTENT);
  }

  async cacheUserProgress(progress: any): Promise<void> {
    await this.cacheData(this.cacheKeys.USER_PROGRESS, progress, 1); // 1 hour
  }

  async getCachedUserProgress(): Promise<any | null> {
    return await this.getCachedData(this.cacheKeys.USER_PROGRESS);
  }

  async addOfflineAction(action: string, data: any): Promise<void> {
    const offlineAction: OfflineAction = {
      id: Date.now().toString(),
      action,
      data,
      timestamp: Date.now(),
      retryCount: 0,
    };

    this.offlineActions.push(offlineAction);
    await this.saveOfflineActions();
  }

  private async loadOfflineActions(): Promise<void> {
    try {
      const actions = await AsyncStorage.getItem(this.cacheKeys.OFFLINE_ACTIONS);
      if (actions) {
        this.offlineActions = JSON.parse(actions);
      }
    } catch (error) {
      console.error('Failed to load offline actions:', error);
    }
  }

  private async saveOfflineActions(): Promise<void> {
    try {
      await AsyncStorage.setItem(
        this.cacheKeys.OFFLINE_ACTIONS,
        JSON.stringify(this.offlineActions)
      );
    } catch (error) {
      console.error('Failed to save offline actions:', error);
    }
  }

  private async syncOfflineActions(): Promise<void> {
    if (!this.isOnline || this.offlineActions.length === 0) {
      return;
    }

    const actionsToSync = [...this.offlineActions];
    
    for (const action of actionsToSync) {
      try {
        await this.executeOfflineAction(action);
        
        // Remove successful action
        this.offlineActions = this.offlineActions.filter(a => a.id !== action.id);
      } catch (error) {
        console.error('Failed to sync offline action:', error);
        
        // Increment retry count
        const actionIndex = this.offlineActions.findIndex(a => a.id === action.id);
        if (actionIndex >= 0) {
          this.offlineActions[actionIndex].retryCount++;
          
          // Remove action if retry count exceeds limit
          if (this.offlineActions[actionIndex].retryCount >= 3) {
            this.offlineActions.splice(actionIndex, 1);
          }
        }
      }
    }

    await this.saveOfflineActions();
  }

  private async executeOfflineAction(action: OfflineAction): Promise<void> {
    switch (action.action) {
      case 'UPDATE_PROGRESS':
        // Sync user progress to server
        await this.syncProgressToServer(action.data);
        break;
      case 'MARK_STEP_COMPLETE':
        // Sync step completion to server
        await this.syncStepCompletionToServer(action.data);
        break;
      case 'UPDATE_PRONUNCIATION_SCORE':
        // Sync pronunciation score to server
        await this.syncPronunciationScoreToServer(action.data);
        break;
      default:
        console.warn('Unknown offline action:', action.action);
    }
  }

  private async syncProgressToServer(data: any): Promise<void> {
    // TODO: Implement actual server sync
    const response = await fetch('http://localhost:3001/api/v1/progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to sync progress');
    }
  }

  private async syncStepCompletionToServer(data: any): Promise<void> {
    // TODO: Implement actual server sync
    const response = await fetch('http://localhost:3001/api/v1/steps/complete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to sync step completion');
    }
  }

  private async syncPronunciationScoreToServer(data: any): Promise<void> {
    // TODO: Implement actual server sync
    const response = await fetch('http://localhost:3001/api/v1/pronunciation/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to sync pronunciation score');
    }
  }

  isNetworkAvailable(): boolean {
    return this.isOnline;
  }

  getOfflineActionsCount(): number {
    return this.offlineActions.length;
  }

  async clearCache(): Promise<void> {
    try {
      await Promise.all([
        AsyncStorage.removeItem(this.cacheKeys.DANCE_LESSONS),
        AsyncStorage.removeItem(this.cacheKeys.CULTURAL_CONTENT),
        AsyncStorage.removeItem(this.cacheKeys.USER_PROGRESS),
        AsyncStorage.removeItem(this.cacheKeys.PRONUNCIATION_AUDIO),
      ]);
    } catch (error) {
      console.error('Failed to clear cache:', error);
    }
  }

  async clearOfflineActions(): Promise<void> {
    this.offlineActions = [];
    await AsyncStorage.removeItem(this.cacheKeys.OFFLINE_ACTIONS);
  }
}

export const offlineService = new OfflineService();
export default OfflineService;