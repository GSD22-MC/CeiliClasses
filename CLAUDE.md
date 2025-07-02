# CeiliClasses - Authentic Irish Ceili Dance Learning App

## Project Overview
CeiliClasses is a React Native mobile application dedicated to teaching authentic Irish ceili dancing with deep cultural education. The app combines traditional dance instruction with Irish language integration and cultural heritage content.

## Tech Stack
- **Framework**: React Native 0.73.0
- **Language**: TypeScript
- **Navigation**: React Navigation (Bottom Tabs + Stack)
- **UI Library**: React Native Paper
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Audio/Video**: React Native Video, React Native Sound
- **Storage**: AsyncStorage

## Project Structure
```
CeiliClasses/
├── App.tsx                     # Main app component with navigation
├── package.json               # Dependencies and scripts
└── src/
    ├── components/            # Reusable components
    │   ├── DanceLessonPlayer.tsx
    │   ├── PronunciationButton.tsx
    │   └── PronunciationPractice.tsx
    ├── navigation/            # Navigation components
    │   └── OnboardingNavigator.tsx
    ├── screens/               # Screen components
    │   ├── CommunityScreen.tsx
    │   └── onboarding/
    │       └── WelcomeScreen.tsx
    ├── stores/                # State management
    │   └── authStore.ts
    └── theme/                 # App theming
        └── CulturalTheme.ts
```

## Key Features
- **Authentic Irish Integration**: Navigation and content in both English and Irish (Gaeilge)
- **Dance Learning**: Interactive video lessons with step-by-step instruction
- **Pronunciation Practice**: Audio pronunciation guides for Irish terms
- **Cultural Education**: Heritage content and cultural context
- **Community Features**: Connect with other learners and cultural enthusiasts
- **Progressive Learning**: Structured onboarding and skill progression

## Screen Navigation (Irish Names)
- **Fáilte** (Welcome) - Home screen
- **Foghlaim** (Learn) - Dance lessons and tutorials
- **Cleachtadh** (Practice) - Practice mode with feedback
- **Comhphobal** (Community) - Social features and community
- **Oidhreacht** (Heritage) - Cultural heritage and history

## Development Commands
```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run tests
npm test

# Lint code
npm run lint

# Build Android release
npm run build:android

# Build iOS release
npm run build:ios
```

## Missing Screens (Referenced but not implemented)
- HomeScreen
- LearnScreen  
- PracticeScreen
- HeritageScreen

## Missing Stores (Referenced but not implemented)
- culturalContentStore

## Cultural Authenticity Notes
- All Irish language content should be verified for accuracy
- Dance instructions should follow traditional ceili dance forms
- Cultural context should be respectful and educational
- Pronunciation guides should use authentic Irish phonetics

## Development Guidelines
- Maintain cultural sensitivity in all content
- Use authentic Irish terminology with English translations
- Ensure accessibility for all learning levels
- Follow React Native best practices
- Test on both iOS and Android platforms
- Maintain TypeScript strict mode compliance

## Audio/Video Requirements
- Support for traditional Irish music playback
- Video lessons with clear dance instruction
- Audio pronunciation guides
- Background music during practice sessions

## Future Enhancements
- Offline content support
- Progress tracking and achievements
- Social sharing of progress
- Integration with Irish cultural organizations
- Advanced dance choreography tutorials
- Virtual reality dance instruction