# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
CeiliClasses is a React web application for learning authentic Irish ceili dancing with cultural education. The app provides bilingual (English/Irish) navigation, step-by-step dance lessons, pronunciation practice, and heritage content.

## Tech Stack
- **Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 5.0.0
- **Routing**: React Router DOM 6.8.1
- **Styling**: Styled Components 5.3.6 with cultural theming
- **State Management**: Zustand 4.3.2
- **Data Fetching**: React Query 3.39.3
- **Animations**: Framer Motion 10.0.1 and React Spring 9.6.1
- **Security**: Custom secure storage and API services

## Development Commands

```bash
# Development
npm start               # Start Vite dev server
npm run build          # Build for production
npm run preview        # Preview production build
npm test               # Run Jest tests
npm run lint           # ESLint code analysis

# Platform setup (scripts available)
npm run setup:platforms      # Setup script
npm run deploy:production    # Production deployment script
```

## Project Architecture

### Core Structure
```
src/
├── components/         # Reusable UI components
│   ├── DanceLessonPlayer.tsx
│   ├── PronunciationButton.tsx
│   ├── PronunciationPractice.tsx
│   ├── Navigation.tsx
│   ├── ErrorBoundary.tsx
│   └── NetworkStatusIndicator.tsx
├── screens/           # Main application screens
│   ├── HomeScreen.tsx
│   ├── LearnScreen.tsx
│   ├── PracticeScreen.tsx
│   ├── CommunityScreen.tsx
│   ├── HeritageScreen.tsx
│   ├── auth/LoginScreen.tsx
│   └── onboarding/WelcomeScreen.tsx
├── stores/            # Zustand state management
│   ├── authStore.ts        # Authentication & user state
│   └── culturalContentStore.ts  # Cultural content state
├── services/          # Business logic services
│   ├── SecureStorageService.ts
│   ├── OfflineService.ts
│   ├── AnalyticsService.ts
│   ├── AccessibilityAuditService.ts
│   └── UsabilityTestingService.ts
├── config/           # Configuration files
│   ├── api.ts        # API configuration
│   └── security.ts   # Security settings
├── theme/           # Cultural theming system
│   └── CulturalTheme.ts
├── data/            # Static data
│   ├── ceiliDances.ts
│   └── culturalContent.ts
└── utils/           # Utility functions
    └── validation.ts
```

### State Management
- **authStore.ts**: Handles user authentication, onboarding completion, pronunciation progress, and cultural confidence scoring
- **culturalContentStore.ts**: Manages cultural content, dance lessons, and heritage information

### Security Architecture
- Uses secure API calls with token management
- SecureStorageService for sensitive data storage (auth tokens)
- AsyncStorage fallback for non-sensitive user data
- Input validation utilities
- HTTPS enforcement

### Cultural Features
- **CulturalTheme.ts**: Authentic Irish color palette (heritage green, welcome gold, traditional orange)
- Bilingual navigation support
- Cultural profile system with connection levels and learning motivations
- Pronunciation progress tracking
- Cultural confidence scoring

## Key Features Implementation

### Authentication Flow
1. Login/Register screens with cultural profile setup
2. Onboarding navigation for new users
3. Secure token storage and management
4. User progress tracking (pronunciation, cultural confidence)

### Navigation Structure
- **/** - HomeScreen
- **/learn** - LearnScreen (dance lessons)
- **/practice** - PracticeScreen (practice sessions)
- **/community** - CommunityScreen (social features)
- **/heritage** - HeritageScreen (cultural education)

### Cultural Authenticity Features
- Irish language terminology integration
- Traditional ceili dance instruction
- Cultural heritage education content
- Pronunciation practice with audio guides
- Authentic Irish color scheme and design

## Development Guidelines

### Code Patterns
- Use TypeScript strict mode
- Follow React functional component patterns
- Implement error boundaries for robust error handling
- Use styled-components with cultural theme system
- Maintain secure storage practices (never store sensitive data in AsyncStorage)

### Cultural Content
- All Irish language content should be culturally accurate
- Dance instructions must follow traditional ceili forms
- Respect cultural significance in all educational content
- Pronunciation guides should use authentic Irish phonetics

### Testing & Quality
- Run `npm test` before committing
- Use `npm run lint` to maintain code quality
- Ensure accessibility compliance (WCAG 2.1 AA)
- Test across different screen sizes and devices