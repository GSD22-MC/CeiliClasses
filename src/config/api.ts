/**
 * API Configuration with Environment-based URLs
 * Replaces hardcoded localhost endpoints
 */

const API_ENDPOINTS = {
  development: 'https://dev-api.ceiliclasses.com',
  staging: 'https://staging-api.ceiliclasses.com', 
  production: 'https://api.ceiliclasses.com'
};

// Get environment from build config or default to development
const getCurrentEnvironment = (): keyof typeof API_ENDPOINTS => {
  if (__DEV__) return 'development';
  // In production builds, use staging for testing, production for release
  return process.env.NODE_ENV === 'production' ? 'production' : 'staging';
};

export const API_BASE_URL = API_ENDPOINTS[getCurrentEnvironment()];

// API client configuration with security headers and timeouts
import { SECURITY_HEADERS, API_SECURITY_CONFIG } from './security';

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: API_SECURITY_CONFIG.timeout,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-App-Version': '1.0.0',
    'X-Platform': 'react-native',
    ...SECURITY_HEADERS
  }
};

import { SecurityValidator, SecurityLogger } from './security';

// Security-focused fetch wrapper with comprehensive protection
export const secureApiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Security validations
  if (!SecurityValidator.isTrustedDomain(url)) {
    SecurityLogger.logSuspiciousActivity('untrusted_domain_access', { url });
    throw new Error('Untrusted domain access blocked');
  }
  
  // Ensure HTTPS for all requests in production
  if (!url.startsWith('https://') && !__DEV__) {
    SecurityLogger.logSecurityEvent('insecure_connection_attempt', { url });
    throw new Error('HTTPS required for production API calls');
  }
  
  // Validate request headers
  const requestHeaders = { ...API_CONFIG.headers, ...options.headers };
  SecurityValidator.validateRequestHeaders(requestHeaders as Record<string, string>);
  
  const secureOptions: RequestInit = {
    ...options,
    headers: requestHeaders,
    signal: AbortSignal.timeout(API_SECURITY_CONFIG.timeout),
  };
  
  // Check request size limit
  if (options.body && typeof options.body === 'string') {
    const bodySize = new Blob([options.body]).size;
    if (bodySize > API_SECURITY_CONFIG.requestSizeLimit) {
      throw new Error('Request size exceeds security limit');
    }
  }
  
  try {
    const response = await fetch(url, secureOptions);
    
    // Validate response headers
    const contentType = response.headers.get('content-type');
    if (contentType && !contentType.includes('application/json')) {
      SecurityLogger.logSuspiciousActivity('unexpected_content_type', { 
        contentType, 
        url 
      });
    }
    
    if (!response.ok) {
      SecurityLogger.logSecurityEvent('api_error_response', {
        status: response.status,
        url,
        statusText: response.statusText
      });
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return response;
  } catch (error) {
    if (error instanceof Error) {
      SecurityLogger.logSecurityEvent('api_call_failed', {
        url,
        error: error.message,
        stack: __DEV__ ? error.stack : 'hidden'
      });
    }
    console.error(__DEV__ && `API call failed: ${url}`, error);
    throw error;
  }
};