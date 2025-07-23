/**
 * Web Platform Detection Utility
 * Replaces React Native Platform API with web-compatible detection
 */

export interface PlatformInfo {
  OS: 'web' | 'ios' | 'android' | 'windows' | 'macos' | 'linux';
  Version: string;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  browser: string;
  browserVersion: string;
}

class WebPlatform {
  private static _info: PlatformInfo | null = null;

  /**
   * Get platform information (cached after first call)
   */
  static get info(): PlatformInfo {
    if (!this._info) {
      this._info = this.detectPlatform();
    }
    return this._info;
  }

  /**
   * Get operating system
   */
  static get OS(): PlatformInfo['OS'] {
    return this.info.OS;
  }

  /**
   * Get OS version
   */
  static get Version(): string {
    return this.info.Version;
  }

  /**
   * Check if running in development mode
   */
  static get isDev(): boolean {
    return process.env.NODE_ENV === 'development';
  }

  /**
   * Detect platform information from user agent
   */
  private static detectPlatform(): PlatformInfo {
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();

    // Detect OS
    let OS: PlatformInfo['OS'] = 'web';
    let Version = 'unknown';

    if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      OS = 'ios';
      const match = userAgent.match(/os (\d+)_(\d+)/);
      if (match) {
        Version = `${match[1]}.${match[2]}`;
      }
    } else if (userAgent.includes('android')) {
      OS = 'android';
      const match = userAgent.match(/android (\d+\.?\d*)/);
      if (match) {
        Version = match[1];
      }
    } else if (platform.includes('win')) {
      OS = 'windows';
      if (userAgent.includes('windows nt 10')) Version = '10';
      else if (userAgent.includes('windows nt 6.3')) Version = '8.1';
      else if (userAgent.includes('windows nt 6.2')) Version = '8';
      else if (userAgent.includes('windows nt 6.1')) Version = '7';
    } else if (platform.includes('mac')) {
      OS = 'macos';
      const match = userAgent.match(/mac os x (\d+[._]\d+)/);
      if (match) {
        Version = match[1].replace('_', '.');
      }
    } else if (platform.includes('linux')) {
      OS = 'linux';
    }

    // Detect device type
    const isMobile = /mobi|android|iphone|ipad|phone|tablet/i.test(userAgent);
    const isTablet = /tablet|ipad/i.test(userAgent) || 
      (userAgent.includes('android') && !userAgent.includes('mobile'));
    const isDesktop = !isMobile && !isTablet;

    // Detect browser
    let browser = 'unknown';
    let browserVersion = 'unknown';

    if (userAgent.includes('firefox')) {
      browser = 'firefox';
      const match = userAgent.match(/firefox\/(\d+\.?\d*)/);
      if (match) browserVersion = match[1];
    } else if (userAgent.includes('chrome')) {
      browser = 'chrome';
      const match = userAgent.match(/chrome\/(\d+\.?\d*)/);
      if (match) browserVersion = match[1];
    } else if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
      browser = 'safari';
      const match = userAgent.match(/version\/(\d+\.?\d*)/);
      if (match) browserVersion = match[1];
    } else if (userAgent.includes('edge')) {
      browser = 'edge';
      const match = userAgent.match(/edge\/(\d+\.?\d*)/);
      if (match) browserVersion = match[1];
    }

    return {
      OS,
      Version,
      isMobile,
      isTablet,
      isDesktop,
      browser,
      browserVersion,
    };
  }

  /**
   * Check if device supports specific features
   */
  static supports(feature: string): boolean {
    switch (feature) {
      case 'touchscreen':
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      case 'geolocation':
        return 'geolocation' in navigator;
      case 'camera':
        return 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;
      case 'audio':
        return 'Audio' in window;
      case 'webgl':
        try {
          const canvas = document.createElement('canvas');
          return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
        } catch {
          return false;
        }
      case 'localStorage':
        try {
          const test = '__localStorage_test__';
          localStorage.setItem(test, 'test');
          localStorage.removeItem(test);
          return true;
        } catch {
          return false;
        }
      case 'serviceWorker':
        return 'serviceWorker' in navigator;
      case 'pushNotifications':
        return 'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window;
      default:
        return false;
    }
  }

  /**
   * Get screen information
   */
  static get screen() {
    return {
      width: window.screen.width,
      height: window.screen.height,
      availableWidth: window.screen.availWidth,
      availableHeight: window.screen.availHeight,
      pixelRatio: window.devicePixelRatio || 1,
      orientation: window.screen.orientation?.angle || 0,
    };
  }

  /**
   * Get viewport information
   */
  static get viewport() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    };
  }
}

// Export compatible with React Native Platform API
export const Platform = {
  OS: WebPlatform.OS,
  Version: WebPlatform.Version,
  isPad: WebPlatform.info.isTablet && WebPlatform.OS === 'ios',
  isMobile: WebPlatform.info.isMobile,
  isTV: false, // Not applicable for web
  isTesting: process.env.NODE_ENV === 'test',
  select: <T>(specifics: { web?: T; default?: T; [key: string]: T | undefined }): T | undefined => {
    return specifics.web || specifics.default;
  },
};

// Global __DEV__ flag for web
declare global {
  var __DEV__: boolean;
}

if (typeof global !== 'undefined') {
  global.__DEV__ = process.env.NODE_ENV === 'development';
} else if (typeof window !== 'undefined') {
  (window as any).__DEV__ = process.env.NODE_ENV === 'development';
}

export default WebPlatform;