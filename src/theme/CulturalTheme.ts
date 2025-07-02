import { DefaultTheme } from 'react-native-paper';

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
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
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
    ...DefaultTheme.fonts,
    headlineLarge: {
      fontFamily: 'System',
      fontSize: 32,
      fontWeight: '700',
      lineHeight: 40,
    },
    headlineMedium: {
      fontFamily: 'System',
      fontSize: 28,
      fontWeight: '600',
      lineHeight: 36,
    },
    headlineSmall: {
      fontFamily: 'System',
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
    },
    titleLarge: {
      fontFamily: 'System',
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 28,
    },
    titleMedium: {
      fontFamily: 'System',
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 24,
    },
    titleSmall: {
      fontFamily: 'System',
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 20,
    },
    bodyLarge: {
      fontFamily: 'System',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    },
    bodyMedium: {
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
    bodySmall: {
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
    },
    labelLarge: {
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
    },
    labelMedium: {
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '500',
      lineHeight: 16,
    },
    labelSmall: {
      fontFamily: 'System',
      fontSize: 10,
      fontWeight: '500',
      lineHeight: 16,
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

// Cultural elevation/shadow
export const CulturalElevation = {
  low: {
    shadowColor: CulturalColors.darkText,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: CulturalColors.darkText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  high: {
    shadowColor: CulturalColors.darkText,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
};