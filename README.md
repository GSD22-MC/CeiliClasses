# 🇮🇪 CeiliClasses - Authentic Irish Ceili Dance Learning App

Comprehensive React Native application for learning traditional Irish ceili dancing with cultural education and community features.

## 🎯 Features

- **Authentic Irish Integration**: Bilingual navigation (English/Irish) with cultural context
- **Dance Instruction**: Step-by-step ceili dance lessons with multi-angle video
- **Pronunciation Practice**: Audio-guided Irish language pronunciation
- **Cultural Heritage**: Educational content about Irish history and traditions
- **Community Features**: Connect with fellow learners and cultural enthusiasts
- **Offline Support**: Full offline functionality with intelligent sync
- **Accessibility**: WCAG 2.1 AA compliant with screen reader support

## 🏗️ Architecture

- **Frontend**: React Native 0.73.0 with TypeScript
- **State Management**: Zustand with AsyncStorage persistence
- **Navigation**: React Navigation with culturally-themed bottom tabs
- **Security**: Enterprise-grade security with React Native Keychain
- **Testing**: Jest with comprehensive mocking and coverage reporting
- **Cultural Theme**: Authentic Irish color palette and design elements

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- React Native CLI
- Android Studio (for Android)
- Xcode 14+ (for iOS, macOS only)

### Setup

1. **Clone and install dependencies**:
   ```bash
   git clone https://github.com/GSD22-MC/CeiliClasses.git
   cd CeiliClasses
   npm install
   ```

2. **Set up React Native platforms**:
   ```bash
   npm run setup:platforms
   ```

3. **Install iOS dependencies** (macOS only):
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the app**:
   ```bash
   # Android
   npm run android
   
   # iOS
   npm run ios
   ```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm start                    # Start Metro bundler
npm run android             # Run Android debug
npm run ios                 # Run iOS debug
npm run android:release     # Run Android release
npm run ios:release         # Run iOS release

# Code Quality
npm run lint                # ESLint code analysis
npm run lint:fix            # Fix ESLint errors
npm run type-check          # TypeScript validation
npm test                    # Run Jest tests
npm run test:coverage       # Run tests with coverage

# Build & Deploy
npm run build:android       # Build Android APK
npm run build:android:bundle # Build Android AAB
npm run deploy:production   # Full production deployment
npm run security:audit      # Security vulnerability scan

# Maintenance
npm run clean               # Clean project cache
npm run clean:android       # Clean Android build
npm run clean:ios           # Clean iOS build
```

### Project Structure

```
CeiliClasses/
├── src/
│   ├── components/         # Reusable React components
│   ├── screens/           # Screen components
│   ├── navigation/        # Navigation configuration
│   ├── stores/            # Zustand state management
│   ├── services/          # Business logic services
│   ├── utils/             # Utility functions
│   ├── config/            # App configuration
│   └── theme/             # Cultural theming
├── android/               # Android native code
├── ios/                   # iOS native code
├── scripts/               # Build and deployment scripts
└── docs/                  # Documentation
```

## 🔒 Security Features

- **Secure Storage**: React Native Keychain with AsyncStorage fallback
- **Input Validation**: Comprehensive XSS and injection prevention
- **Rate Limiting**: Authentication and API abuse protection
- **Network Security**: HTTPS enforcement with domain validation
- **Privacy Controls**: GDPR compliance and data protection
- **Error Handling**: Secure error boundaries with production safety

## 🌍 Cultural Authenticity

- **Irish Language Integration**: Proper Gaeilge terminology throughout
- **Traditional Content**: Authentic ceili dance instruction
- **Cultural Context**: Historical and cultural background for each dance
- **Heritage Education**: Comprehensive Irish cultural education
- **Community Focus**: Fostering Irish cultural connections

## 🧪 Testing

Run the complete test suite:

```bash
npm test                    # Unit tests
npm run test:coverage       # Coverage report
npm run security:audit      # Security scan
npm run lint               # Code quality
npm run type-check         # Type safety
```

## 📱 Deployment

### Development Deployment

```bash
# Test on device/emulator
npm run android
npm run ios
```

### Production Deployment

```bash
# Complete production build and checks
npm run deploy:production
```

This will:
1. Run security audit
2. Validate TypeScript
3. Run all tests
4. Build Android and iOS releases
5. Generate deployment artifacts

### App Store Deployment

1. **Android (Google Play)**:
   - Upload `android/app/build/outputs/bundle/release/app-release.aab`
   - Complete store listing with cultural content guidelines

2. **iOS (App Store)**:
   - Upload `ios/CeiliClasses.xcarchive`
   - Ensure cultural content meets App Store guidelines

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Cultural Content Guidelines

- Ensure Irish language accuracy with native speaker review
- Respect traditional dance forms and cultural significance
- Include historical context for cultural elements
- Maintain authenticity in pronunciation guides

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Irish cultural consultants and dance instructors
- Traditional Irish music community
- React Native open source community
- Accessibility testing community

## 📞 Support

- **Email**: support@ceiliclasses.com
- **Documentation**: [docs.ceiliclasses.com](https://docs.ceiliclasses.com)
- **Community**: [community.ceiliclasses.com](https://community.ceiliclasses.com)

---

**Slán agus beannacht** (Goodbye and blessings) - Thank you for preserving Irish cultural heritage through technology! 🍀