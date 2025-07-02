import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CulturalTheme } from '../theme/CulturalTheme';

// Onboarding Screens
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import CulturalIntroScreen from '../screens/onboarding/CulturalIntroScreen';
import PronunciationMasteryScreen from '../screens/onboarding/PronunciationMasteryScreen';
import FirstDanceLessonScreen from '../screens/onboarding/FirstDanceLessonScreen';
import CulturalConfidenceScreen from '../screens/onboarding/CulturalConfidenceScreen';
import CommunityIntegrationScreen from '../screens/onboarding/CommunityIntegrationScreen';
import OnboardingCompleteScreen from '../screens/onboarding/OnboardingCompleteScreen';

export type OnboardingStackParamList = {
  Welcome: undefined;
  CulturalIntro: undefined;
  PronunciationMastery: undefined;
  FirstDanceLesson: { selectedDance?: string };
  CulturalConfidence: undefined;
  CommunityIntegration: undefined;
  OnboardingComplete: undefined;
};

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: CulturalTheme.colors.primary,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: CulturalTheme.colors.onPrimary,
        headerTitleStyle: {
          fontFamily: 'System',
          fontSize: 18,
          fontWeight: '600',
        },
        headerBackTitleVisible: false,
        gestureEnabled: false, // Prevent going back during onboarding
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CulturalIntro"
        component={CulturalIntroScreen}
        options={{
          title: 'What is Ceili?',
          headerLeft: () => null, // Prevent back navigation
        }}
      />
      <Stack.Screen
        name="PronunciationMastery"
        component={PronunciationMasteryScreen}
        options={{
          title: 'Learn to Say "Ceili"',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="FirstDanceLesson"
        component={FirstDanceLessonScreen}
        options={{
          title: 'Your First Ceili Dance',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="CulturalConfidence"
        component={CulturalConfidenceScreen}
        options={{
          title: 'Cultural Understanding',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="CommunityIntegration"
        component={CommunityIntegrationScreen}
        options={{
          title: 'Join Our Community',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="OnboardingComplete"
        component={OnboardingCompleteScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;