# Changelog

All notable changes to the CeiliClasses app will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Complete React Native to Web conversion
- YouTube video integration for dance instruction and music
- 3D dance formation viewer using Three.js
- Bilingual Irish/English navigation system
- Cultural theming with authentic Irish colors
- Comprehensive onboarding flow for new users
- Web-compatible UI component library
- Pronunciation practice with audio feedback
- Community discussion features
- Heritage content for cultural education
- Secure authentication and user management
- Accessibility compliance (WCAG 2.1 AA)
- Performance optimization and analytics tracking

### Changed
- Migrated from React Native to React web application
- Replaced AsyncStorage with localStorage for web compatibility
- Converted React Navigation to React Router
- Updated all components to use styled-components
- Replaced react-native-vector-icons with emoji-based icon system

### Fixed
- **Bug fixes (Debug Session)**:
  - Fixed JSX structure error in App.tsx with mismatched NavigationContainer closing tag
  - Fixed JavaScript syntax error in AccessibilityAuditService.ts (missing if condition)
  - Removed undefined __DEV__ variable reference in authStore.ts
  - Created missing onboarding screen components:
    - CulturalIntroScreen.tsx
    - PronunciationMasteryScreen.tsx
    - FirstDanceLessonScreen.tsx
    - CulturalConfidenceScreen.tsx
    - CommunityIntegrationScreen.tsx
    - OnboardingCompleteScreen.tsx
  - Resolved build errors and achieved successful production build
  - Ensured all TypeScript strict mode compliance

### Technical
- Build system: Vite 5.0.0
- Styling: Styled Components 5.3.6
- State Management: Zustand 4.3.2
- Routing: React Router DOM 6.8.1
- 3D Graphics: Three.js for dance formations
- Video: YouTube API integration
- Security: Custom secure storage service