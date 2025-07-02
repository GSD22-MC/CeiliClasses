#!/bin/bash

# CeiliClasses Production Deployment Script
echo "🏛️ CeiliClasses Production Deployment"
echo "====================================="

# Pre-deployment checks
echo "🔍 Running pre-deployment checks..."

# Check if platforms exist
if [ ! -d "android" ] || [ ! -d "ios" ]; then
    echo "❌ Error: React Native platforms not found"
    echo "Run: ./scripts/setup-platforms.sh first"
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Security audit
echo "🔒 Running security audit..."
npm audit --audit-level high
if [ $? -ne 0 ]; then
    echo "❌ Security audit failed. Fix vulnerabilities before deployment."
    exit 1
fi

# Type checking
echo "📝 Running TypeScript checks..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ TypeScript errors found. Fix before deployment."
    exit 1
fi

# Linting
echo "🔍 Running code quality checks..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Linting errors found. Fix before deployment."
    exit 1
fi

# Tests
echo "🧪 Running tests..."
npm run test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Fix before deployment."
    exit 1
fi

# Build Android Release
echo "🤖 Building Android release..."
cd android
./gradlew clean
./gradlew assembleRelease
if [ $? -ne 0 ]; then
    echo "❌ Android build failed"
    exit 1
fi
cd ..

# Build iOS Release (if on macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🍎 Building iOS release..."
    cd ios
    pod install
    xcodebuild -workspace CeiliClasses.xcworkspace \
               -scheme CeiliClasses \
               -configuration Release \
               -destination generic/platform=iOS \
               -archivePath CeiliClasses.xcarchive \
               archive
    if [ $? -ne 0 ]; then
        echo "❌ iOS build failed"
        exit 1
    fi
    cd ..
else
    echo "⚠️ Skipping iOS build (not on macOS)"
fi

# Deployment summary
echo ""
echo "✅ Production deployment checks completed successfully!"
echo ""
echo "📦 Build artifacts:"
if [ -f "android/app/build/outputs/apk/release/app-release.apk" ]; then
    echo "  ✅ Android APK: android/app/build/outputs/apk/release/app-release.apk"
fi
if [ -f "android/app/build/outputs/bundle/release/app-release.aab" ]; then
    echo "  ✅ Android Bundle: android/app/build/outputs/bundle/release/app-release.aab"
fi
if [ -f "ios/CeiliClasses.xcarchive" ]; then
    echo "  ✅ iOS Archive: ios/CeiliClasses.xcarchive"
fi

echo ""
echo "🚀 Ready for app store deployment!"
echo ""
echo "Next steps:"
echo "1. Upload Android AAB to Google Play Console"
echo "2. Upload iOS archive to App Store Connect"
echo "3. Complete app store listing and metadata"
echo "4. Submit for review"
echo ""
echo "🎉 CeiliClasses production build complete!"