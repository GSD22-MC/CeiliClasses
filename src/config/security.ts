/**
 * Security Configuration and Hardening
 * Implements comprehensive security measures
 */

import { Platform } from 'react-native';

// Security Headers for API requests
export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
} as const;

// Content Security Policy for WebView content
export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://cdn.ceiliclasses.com",
  "media-src 'self' https://cdn.ceiliclasses.com",
  "connect-src 'self' https://api.ceiliclasses.com https://analytics.ceiliclasses.com",
  "font-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

// API Security Configuration
export const API_SECURITY_CONFIG = {
  timeout: 10000, // 10 seconds
  maxRetries: 3,
  retryDelay: 1000,
  maxConcurrentRequests: 5,
  requestSizeLimit: 10 * 1024 * 1024, // 10MB
  responseTimeout: 30000, // 30 seconds for large responses
} as const;

// Authentication Security Settings
export const AUTH_SECURITY_CONFIG = {
  tokenExpiryBuffer: 5 * 60 * 1000, // 5 minutes before expiry
  maxLoginAttempts: 3,
  lockoutDuration: 15 * 60 * 1000, // 15 minutes
  sessionTimeout: 24 * 60 * 60 * 1000, // 24 hours
  passwordMinLength: 12,
  passwordComplexityRequired: true,
  requireMFA: false, // TODO: Enable for production
} as const;

// File Upload Security
export const FILE_UPLOAD_SECURITY = {
  allowedMimeTypes: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'audio/mpeg',
    'audio/wav',
    'audio/mp4',
    'video/mp4',
    'video/quicktime',
  ],
  maxFileSize: 50 * 1024 * 1024, // 50MB
  scanForMalware: true,
  quarantineSuspiciousFiles: true,
} as const;

// Data Encryption Settings
export const ENCRYPTION_CONFIG = {
  algorithm: 'AES-256-GCM',
  keyDerivation: 'PBKDF2',
  iterations: 100000,
  saltLength: 32,
  ivLength: 16,
  tagLength: 16,
} as const;

// Network Security
export const NETWORK_SECURITY = {
  allowInsecureConnections: __DEV__, // Only allow HTTP in development
  certificatePinning: !__DEV__, // Enable SSL pinning in production
  tlsVersion: '1.2', // Minimum TLS version
  validateCertificates: true,
  blockSelfSignedCerts: !__DEV__,
} as const;

// Privacy and Data Protection
export const PRIVACY_CONFIG = {
  logSensitiveData: false,
  maskPII: true,
  dataRetentionDays: 365,
  anonymizeAfterDays: 180,
  enableOptOut: true,
  requireConsent: true,
} as const;

// Security Monitoring
export const SECURITY_MONITORING = {
  enableFailureTracking: true,
  enableAnomalyDetection: true,
  maxFailuresPerMinute: 10,
  suspiciousActivityThreshold: 5,
  enableSecurityLogging: !__DEV__,
  alertOnSecurityEvents: true,
} as const;

// Platform-specific security settings
export const PLATFORM_SECURITY = {
  ios: {
    enableKeychain: true,
    enableTouchID: true,
    enableFaceID: true,
    enableAppTransportSecurity: true,
    preventScreenshots: false, // Set to true for sensitive apps
  },
  android: {
    enableBiometrics: true,
    enableProGuard: true,
    enableAppSigning: true,
    preventRootedDevices: false, // Set to true for high-security apps
    enableNetworkSecurityConfig: true,
  },
} as const;

// Security validation functions
export const SecurityValidator = {
  /**
   * Validate if URL is from trusted domain
   */
  isTrustedDomain: (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      
      // Explicit trusted domains (no wildcards)
      const trustedDomains = [
        'ceiliclasses.com',
        'api.ceiliclasses.com',
        'cdn.ceiliclasses.com',
        'analytics.ceiliclasses.com',
        'www.ceiliclasses.com',
      ];

      if (__DEV__) {
        trustedDomains.push('localhost', '127.0.0.1', '10.0.2.2');
      }

      // Exact match only - no subdomain wildcards to prevent takeover
      const isExactMatch = trustedDomains.includes(urlObj.hostname);
      
      // Additional security: verify protocol
      const isSecureProtocol = urlObj.protocol === 'https:' || (__DEV__ && urlObj.protocol === 'http:');
      
      return isExactMatch && isSecureProtocol;
    } catch {
      return false;
    }
  },

  /**
   * Validate request headers for security
   */
  validateRequestHeaders: (headers: Record<string, string>): boolean => {
    // Check for suspicious headers
    const suspiciousHeaders = [
      'x-forwarded-for',
      'x-real-ip',
      'x-originating-ip',
    ];

    for (const suspicious of suspiciousHeaders) {
      if (headers[suspicious]) {
        console.warn(__DEV__ && `Suspicious header detected: ${suspicious}`);
      }
    }

    return true;
  },

  /**
   * Check if device is compromised (basic checks)
   */
  isDeviceSecure: (): boolean => {
    // Note: Implement actual device security checks
    // This is a placeholder for security checks like:
    // - Jailbreak/root detection
    // - Debugger detection
    // - Emulator detection
    // - Hook detection
    
    if (__DEV__) {
      return true; // Allow development environments
    }

    // TODO: Implement actual security checks
    return true;
  },

  /**
   * Validate file security before processing
   */
  validateFileSecure: (filename: string, mimeType: string, size: number): boolean => {
    // Check file extension
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.mp3', '.wav', '.mp4', '.mov'];
    const hasValidExtension = allowedExtensions.some(ext => 
      filename.toLowerCase().endsWith(ext)
    );

    if (!hasValidExtension) {
      return false;
    }

    // Check MIME type
    if (!FILE_UPLOAD_SECURITY.allowedMimeTypes.includes(mimeType)) {
      return false;
    }

    // Check file size
    if (size > FILE_UPLOAD_SECURITY.maxFileSize) {
      return false;
    }

    return true;
  },
};

// Security event logger
export const SecurityLogger = {
  logSecurityEvent: (event: string, details: Record<string, any> = {}) => {
    if (!SECURITY_MONITORING.enableSecurityLogging) {
      return;
    }

    const securityEvent = {
      timestamp: new Date().toISOString(),
      event,
      details: __DEV__ ? details : '[Hidden in production]',
      platform: Platform.OS,
      version: Platform.Version,
    };

    console.warn('Security Event:', securityEvent);

    // TODO: Send to security monitoring service
    // Example: securityService.reportEvent(securityEvent);
  },

  logSuspiciousActivity: (activity: string, context: Record<string, any> = {}) => {
    SecurityLogger.logSecurityEvent('suspicious_activity', {
      activity,
      context,
      severity: 'high',
    });
  },

  logAuthFailure: (reason: string, userIdentifier?: string) => {
    SecurityLogger.logSecurityEvent('auth_failure', {
      reason,
      userIdentifier: userIdentifier ? `${userIdentifier.substring(0, 3)}***` : 'unknown',
      severity: 'medium',
    });
  },

  logDataBreach: (type: string, affectedData: string[]) => {
    SecurityLogger.logSecurityEvent('data_breach', {
      type,
      affectedDataTypes: affectedData,
      severity: 'critical',
    });
  },
};

// Export security configuration based on environment
export const getSecurityConfig = () => {
  const baseConfig = {
    headers: SECURITY_HEADERS,
    csp: CONTENT_SECURITY_POLICY,
    api: API_SECURITY_CONFIG,
    auth: AUTH_SECURITY_CONFIG,
    encryption: ENCRYPTION_CONFIG,
    network: NETWORK_SECURITY,
    privacy: PRIVACY_CONFIG,
    monitoring: SECURITY_MONITORING,
    platform: PLATFORM_SECURITY[Platform.OS as keyof typeof PLATFORM_SECURITY],
  };

  if (__DEV__) {
    // Relaxed security for development
    return {
      ...baseConfig,
      network: {
        ...baseConfig.network,
        allowInsecureConnections: true,
        certificatePinning: false,
        blockSelfSignedCerts: false,
      },
      monitoring: {
        ...baseConfig.monitoring,
        enableSecurityLogging: false,
      },
    };
  }

  return baseConfig;
};