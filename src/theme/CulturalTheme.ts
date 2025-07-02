// Cultural color palette based on authentic Irish heritage
export const CulturalColors = {
  // Primary heritage green - traditional Irish color
  heritageGreen: '#006633',
  heritageGreenLight: '#339966',
  heritageGreenDark: '#004d26',
  
  // Welcome gold - warm, inviting accent
  welcomeGold: '#FFD700',
  welcomeGoldLight: '#FFE55C',
  welcomeGoldDark: '#B8860B',
  
  // Traditional Irish orange
  traditionalOrange: '#CC5500',
  traditionalOrangeLight: '#FF7F00',
  traditionalOrangeDark: '#994400',
  
  // Stone grey - Irish countryside
  stoneGrey: '#708090',
  stoneGreyLight: '#A0A8B0',
  stoneGreyDark: '#4F5A68',
  
  // Clean whites and off-whites
  creamWhite: '#FAFAFA',
  pureWhite: '#FFFFFF',
  
  // Text colors
  darkText: '#212121',
  lightText: '#757575',
  inverseText: '#FFFFFF',
  
  // Status colors
  success: '#4CAF50',
  successLight: '#81C784',
  successDark: '#388E3C',
  warning: '#FF9800',
  warningLight: '#FFB74D',
  warningDark: '#F57C00',
  error: '#F44336',
  errorLight: '#E57373',
  errorDark: '#D32F2F',
  info: '#2196F3',
  infoLight: '#64B5F6',
  infoDark: '#1976D2',
  
  // Background variations
  surfaceLight: '#F8F9FA',
  surfaceDark: '#EEEEEE',
  overlay: 'rgba(0, 0, 0, 0.5)',
};

export const CulturalTheme = {
  colors: {
    primary: CulturalColors.heritageGreen,
    primaryContainer: CulturalColors.heritageGreenLight,
    secondary: CulturalColors.welcomeGold,
    secondaryContainer: CulturalColors.welcomeGoldLight,
    tertiary: CulturalColors.traditionalOrange,
    tertiaryContainer: CulturalColors.traditionalOrangeLight,
    surface: CulturalColors.creamWhite,
    surfaceVariant: CulturalColors.surfaceLight,
    background: CulturalColors.pureWhite,
    error: CulturalColors.error,
    errorContainer: '#FFEBEE',
    onPrimary: CulturalColors.inverseText,
    onPrimaryContainer: CulturalColors.darkText,
    onSecondary: CulturalColors.darkText,
    onSecondaryContainer: CulturalColors.darkText,
    onTertiary: CulturalColors.inverseText,
    onTertiaryContainer: CulturalColors.darkText,
    onSurface: CulturalColors.darkText,
    onSurfaceVariant: CulturalColors.lightText,
    onBackground: CulturalColors.darkText,
    onError: CulturalColors.inverseText,
    onErrorContainer: CulturalColors.darkText,
    outline: CulturalColors.stoneGrey,
    outlineVariant: CulturalColors.stoneGreyLight,
    inverseSurface: CulturalColors.darkText,
    inverseOnSurface: CulturalColors.inverseText,
    inversePrimary: CulturalColors.heritageGreenLight,
    shadow: CulturalColors.overlay,
    scrim: CulturalColors.overlay,
    backdrop: CulturalColors.overlay,
  },
  fonts: {
    headlineLarge: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '2rem',
      fontWeight: '700',
      lineHeight: '2.5rem',
    },
    headlineMedium: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '1.75rem',
      fontWeight: '600',
      lineHeight: '2.25rem',
    },
    headlineSmall: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '1.5rem',
      fontWeight: '600',
      lineHeight: '2rem',
    },
    titleLarge: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '1.375rem',
      fontWeight: '600',
      lineHeight: '1.75rem',
    },
    titleMedium: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '1.125rem',
      fontWeight: '600',
      lineHeight: '1.5rem',
    },
    titleSmall: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '1rem',
      fontWeight: '600',
      lineHeight: '1.25rem',
    },
    bodyLarge: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
    },
    bodyMedium: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.25rem',
    },
    bodySmall: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '1rem',
    },
    labelLarge: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.25rem',
    },
    labelMedium: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '0.75rem',
      fontWeight: '500',
      lineHeight: '1rem',
    },
    labelSmall: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '0.625rem',
      fontWeight: '500',
      lineHeight: '1rem',
    },
  },
  spacing: {
    xs: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '0.75rem',
    xl: '1rem',
    round: '50rem',
  },
  elevation: {
    low: {
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    medium: {
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    high: {
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    },
  },
};

// Cultural spacing constants
export const CulturalSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Cultural border radius
export const CulturalBorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 50,
};

export default CulturalTheme;