#!/bin/bash

# React Native Platform Setup Script for CeiliClasses
echo "🏛️ Setting up React Native platforms for CeiliClasses..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Must be run from project root directory"
    exit 1
fi

# Create temporary React Native project to copy platform files
echo "📱 Creating temporary React Native project..."
cd ..
npx react-native@latest init CeiliClassesTemp --skip-install --title "CeiliClasses" --package-name "com.ceiliclasses.app"

if [ ! -d "CeiliClassesTemp" ]; then
    echo "❌ Error: Failed to create temporary project"
    exit 1
fi

cd CeiliClasses

# Copy Android platform
echo "🤖 Setting up Android platform..."
if [ -d "../CeiliClassesTemp/android" ]; then
    cp -r ../CeiliClassesTemp/android ./
    echo "✅ Android platform copied"
else
    echo "❌ Error: Android directory not found in temp project"
fi

# Copy iOS platform
echo "🍎 Setting up iOS platform..."
if [ -d "../CeiliClassesTemp/ios" ]; then
    cp -r ../CeiliClassesTemp/ios ./
    echo "✅ iOS platform copied"
else
    echo "❌ Error: iOS directory not found in temp project"
fi

# Update Android package name and app name
echo "📝 Updating Android configuration..."
if [ -f "android/app/src/main/java/com/ceiliclassestemp/MainActivity.java" ]; then
    # Create new directory structure
    mkdir -p android/app/src/main/java/com/ceiliclasses/app
    
    # Update MainActivity
    sed 's/package com.ceiliclassestemp/package com.ceiliclasses.app/g' \
        android/app/src/main/java/com/ceiliclassestemp/MainActivity.java > \
        android/app/src/main/java/com/ceiliclasses/app/MainActivity.java
    
    # Update MainApplication
    sed 's/package com.ceiliclassestemp/package com.ceiliclasses.app/g' \
        android/app/src/main/java/com/ceiliclassestemp/MainApplication.java > \
        android/app/src/main/java/com/ceiliclasses/app/MainApplication.java
    
    # Remove old directory
    rm -rf android/app/src/main/java/com/ceiliclassestemp
fi

# Update Android Manifest
if [ -f "android/app/src/main/AndroidManifest.xml" ]; then
    sed -i 's/com\.ceiliclassestemp/com.ceiliclasses.app/g' android/app/src/main/AndroidManifest.xml
    sed -i 's/CeiliClassesTemp/CeiliClasses/g' android/app/src/main/AndroidManifest.xml
fi

# Update build.gradle
if [ -f "android/app/build.gradle" ]; then
    sed -i 's/com\.ceiliclassestemp/com.ceiliclasses.app/g' android/app/build.gradle
    sed -i 's/"CeiliClassesTemp"/"CeiliClasses"/g' android/app/build.gradle
fi

# Update iOS configuration
echo "📝 Updating iOS configuration..."
if [ -d "ios" ]; then
    # Rename iOS project files
    if [ -d "ios/CeiliClassesTemp" ]; then
        mv ios/CeiliClassesTemp ios/CeiliClasses
    fi
    
    if [ -f "ios/CeiliClassesTemp.xcodeproj" ]; then
        mv ios/CeiliClassesTemp.xcodeproj ios/CeiliClasses.xcodeproj
    fi
    
    # Update project references
    if [ -f "ios/CeiliClasses.xcodeproj/project.pbxproj" ]; then
        sed -i 's/CeiliClassesTemp/CeiliClasses/g' ios/CeiliClasses.xcodeproj/project.pbxproj
        sed -i 's/com\.ceiliclassestemp/com.ceiliclasses.app/g' ios/CeiliClasses.xcodeproj/project.pbxproj
    fi
    
    # Update Info.plist
    if [ -f "ios/CeiliClasses/Info.plist" ]; then
        sed -i 's/CeiliClassesTemp/CeiliClasses/g' ios/CeiliClasses/Info.plist
    fi
fi

# Update react-native.config.js if it exists or create it
echo "⚙️ Creating React Native configuration..."
cat > react-native.config.js << 'EOF'
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts/', './src/assets/audio/'],
  dependencies: {
    'react-native-keychain': {
      platforms: {
        android: {
          sourceDir: '../node_modules/react-native-keychain/android',
          packageImportPath: 'import io.github.oblador.keychain.KeychainPackage;',
        },
        ios: {
          podspecPath: '../node_modules/react-native-keychain/RNKeychain.podspec',
        },
      },
    },
  },
};
EOF

# Clean up temporary project
echo "🧹 Cleaning up temporary files..."
cd ..
rm -rf CeiliClassesTemp
cd CeiliClasses

echo "✅ React Native platform setup complete!"
echo ""
echo "Next steps:"
echo "1. npm install"
echo "2. cd ios && pod install (macOS only)"
echo "3. npm run android (to test Android)"
echo "4. npm run ios (to test iOS)"
echo ""
echo "🎉 CeiliClasses is ready for native development!"