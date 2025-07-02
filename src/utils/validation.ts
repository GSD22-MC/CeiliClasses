/**
 * Comprehensive Input Validation Utilities
 * Prevents XSS, injection attacks, and ensures data integrity
 */

// Email validation with comprehensive checks
export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email is required' };
  }

  // Basic length check
  if (email.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }

  // RFC 5322 compliant email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  // Additional security checks
  if (email.includes('<') || email.includes('>') || email.includes('"')) {
    return { isValid: false, error: 'Email contains invalid characters' };
  }

  return { isValid: true };
};

// Strong password validation
export const validatePassword = (password: string): { isValid: boolean; error?: string; strength?: number } => {
  if (!password || typeof password !== 'string') {
    return { isValid: false, error: 'Password is required', strength: 0 };
  }

  const minLength = 12;
  const maxLength = 128;

  if (password.length < minLength) {
    return { 
      isValid: false, 
      error: `Password must be at least ${minLength} characters long`,
      strength: 0
    };
  }

  if (password.length > maxLength) {
    return { 
      isValid: false, 
      error: `Password must not exceed ${maxLength} characters`,
      strength: 0
    };
  }

  // Check for character variety
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNoSpaces = !/\s/.test(password);

  if (!hasNoSpaces) {
    return { 
      isValid: false, 
      error: 'Password cannot contain spaces',
      strength: 1
    };
  }

  let strength = 0;
  if (hasUpperCase) strength++;
  if (hasLowerCase) strength++;
  if (hasNumbers) strength++;
  if (hasSpecialChar) strength++;
  if (password.length >= 16) strength++;

  const requiredCriteria = hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
  
  if (!requiredCriteria) {
    return { 
      isValid: false, 
      error: 'Password must contain uppercase, lowercase, numbers, and special characters',
      strength: Math.max(1, strength)
    };
  }

  // Check for common patterns
  const commonPatterns = [
    /123456/,
    /password/i,
    /qwerty/i,
    /admin/i,
    /letmein/i,
  ];

  for (const pattern of commonPatterns) {
    if (pattern.test(password)) {
      return { 
        isValid: false, 
        error: 'Password contains common patterns. Please choose a more secure password.',
        strength: Math.max(2, strength)
      };
    }
  }

  return { 
    isValid: true, 
    strength: Math.min(5, strength)
  };
};

// Sanitize user input to prevent XSS and injection attacks
export const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Unicode normalization to prevent bypass attacks
  const normalized = input.normalize('NFKC');

  return normalized
    // Remove script tags (including Unicode variants)
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/\u003cscript\b[^<]*(?:(?!\u003c\/script>)<[^<]*)*\u003c\/script>/gi, '')
    // Remove javascript: URLs (including Unicode variants)
    .replace(/javascript:/gi, '')
    .replace(/\u006Aavascript:/gi, '')
    .replace(/j\u0061vascript:/gi, '')
    // Remove on* event handlers
    .replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '')
    // Remove dangerous HTML tags
    .replace(/<(iframe|object|embed|form|input|button)[^>]*>/gi, '')
    // Remove Unicode HTML entity equivalents
    .replace(/\u003c(iframe|object|embed|form|input|button)[^>]*\u003e/gi, '')
    // Escape remaining HTML characters
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    // Escape Unicode equivalents
    .replace(/\u003c/g, '&lt;')
    .replace(/\u003e/g, '&gt;')
    .replace(/\u0022/g, '&quot;')
    .replace(/\u0027/g, '&#x27;')
    // Trim whitespace
    .trim();
};

// Validate Irish cultural terms and phrases
export const validateIrishTerm = (term: string): { isValid: boolean; error?: string } => {
  if (!term || typeof term !== 'string') {
    return { isValid: false, error: 'Irish term is required' };
  }

  const sanitized = sanitizeInput(term);
  
  if (sanitized.length === 0) {
    return { isValid: false, error: 'Invalid characters in Irish term' };
  }

  if (sanitized.length > 100) {
    return { isValid: false, error: 'Irish term is too long' };
  }

  // Check for valid Irish characters (basic check)
  const irishCharacterRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s\-']+$/;
  if (!irishCharacterRegex.test(sanitized)) {
    return { isValid: false, error: 'Irish term contains invalid characters' };
  }

  return { isValid: true };
};

// Validate URLs for video/audio content
export const validateMediaUrl = (url: string): { isValid: boolean; error?: string } => {
  if (!url || typeof url !== 'string') {
    return { isValid: false, error: 'Media URL is required' };
  }

  try {
    const urlObject = new URL(url);
    
    // Only allow HTTPS in production
    if (!__DEV__ && urlObject.protocol !== 'https:') {
      return { isValid: false, error: 'Only HTTPS URLs are allowed' };
    }

    // Check for allowed domains (whitelist approach)
    const allowedDomains = [
      'ceiliclasses.com',
      'api.ceiliclasses.com',
      'cdn.ceiliclasses.com',
      'localhost', // Only for development
    ];

    if (!__DEV__) {
      allowedDomains.splice(allowedDomains.indexOf('localhost'), 1);
    }

    const isAllowedDomain = allowedDomains.some(domain => 
      urlObject.hostname === domain || urlObject.hostname.endsWith(`.${domain}`)
    );

    if (!isAllowedDomain) {
      return { isValid: false, error: 'URL domain not allowed' };
    }

    // Check file extensions for media files
    const allowedExtensions = ['.mp4', '.mov', '.mp3', '.wav', '.m4a'];
    const hasValidExtension = allowedExtensions.some(ext => 
      urlObject.pathname.toLowerCase().endsWith(ext)
    );

    if (!hasValidExtension) {
      return { isValid: false, error: 'Invalid media file type' };
    }

    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: 'Invalid URL format' };
  }
};

// Validate user profile data
export const validateUserProfile = (profile: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!profile || typeof profile !== 'object') {
    return { isValid: false, errors: ['Invalid profile data'] };
  }

  // Validate cultural profile fields
  if (profile.irishConnectionLevel !== undefined) {
    const level = profile.irishConnectionLevel;
    if (typeof level !== 'number' || level < 0 || level > 10) {
      errors.push('Irish connection level must be between 0 and 10');
    }
  }

  if (profile.learningMotivations && Array.isArray(profile.learningMotivations)) {
    for (const motivation of profile.learningMotivations) {
      if (typeof motivation !== 'string' || motivation.length > 100) {
        errors.push('Learning motivations must be valid strings under 100 characters');
        break;
      }
    }
  }

  if (profile.culturalInterestDepth) {
    const validDepths = ['surface', 'moderate', 'deep'];
    if (!validDepths.includes(profile.culturalInterestDepth)) {
      errors.push('Cultural interest depth must be surface, moderate, or deep');
    }
  }

  if (profile.familyTraditions && typeof profile.familyTraditions === 'string') {
    const sanitized = sanitizeInput(profile.familyTraditions);
    if (sanitized.length > 500) {
      errors.push('Family traditions description is too long');
    }
  }

  return { isValid: errors.length === 0, errors };
};

// Validate search queries to prevent injection attacks
export const validateSearchQuery = (query: string): { isValid: boolean; sanitized: string; error?: string } => {
  if (!query || typeof query !== 'string') {
    return { isValid: false, sanitized: '', error: 'Search query is required' };
  }

  if (query.length > 100) {
    return { isValid: false, sanitized: '', error: 'Search query is too long' };
  }

  const sanitized = sanitizeInput(query);
  
  if (sanitized.length === 0) {
    return { isValid: false, sanitized: '', error: 'Search query contains invalid characters' };
  }

  // Check for SQL injection patterns
  const sqlInjectionPatterns = [
    /(\bor\b|\band\b)\s+\d+\s*=\s*\d+/i,
    /union\s+select/i,
    /drop\s+table/i,
    /insert\s+into/i,
    /delete\s+from/i,
    /update\s+set/i,
    /script\s*:/i,
  ];

  for (const pattern of sqlInjectionPatterns) {
    if (pattern.test(sanitized)) {
      return { isValid: false, sanitized: '', error: 'Invalid search query' };
    }
  }

  return { isValid: true, sanitized };
};

// Rate limiting helper for form submissions
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }

    // Record this attempt
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }

  getRemainingTime(identifier: string): number {
    const attempts = this.attempts.get(identifier) || [];
    if (attempts.length < this.maxAttempts) {
      return 0;
    }

    const oldestAttempt = Math.min(...attempts);
    const timeUntilReset = this.windowMs - (Date.now() - oldestAttempt);
    
    return Math.max(0, timeUntilReset);
  }
}

// Global rate limiters for different operations
export const authRateLimiter = new RateLimiter(3, 300000); // 3 attempts per 5 minutes
export const searchRateLimiter = new RateLimiter(30, 60000); // 30 searches per minute