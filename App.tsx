import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { analyticsService } from './src/services/AnalyticsService';
import { usabilityTestingService } from './src/services/UsabilityTestingService';

import { CulturalTheme } from './src/theme/CulturalTheme';
import { useAuthStore } from './src/stores/authStore';
import { useCulturalContentStore } from './src/stores/culturalContentStore';
import { ErrorBoundary } from './src/components/ErrorBoundary';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import LearnScreen from './src/screens/LearnScreen';
import PracticeScreen from './src/screens/PracticeScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import HeritageScreen from './src/screens/HeritageScreen';
import OnboardingNavigator from './src/navigation/OnboardingNavigator';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const App: React.FC = () => {
  const { isAuthenticated, hasCompletedOnboarding } = useAuthStore();

  useEffect(() => {
    // Initialize analytics and performance tracking
    const initializeApp = async () => {
      await analyticsService.trackAppLaunch();
      await analyticsService.trackUserReturn();
      
      // Schedule usability testing for new users
      if (!hasCompletedOnboarding) {
        await usabilityTestingService.scheduleWeeklyTest('current_user');
      }
    };

    initializeApp();
  }, [hasCompletedOnboarding]);
  
  if (!isAuthenticated || !hasCompletedOnboarding) {
    return (
      <ErrorBoundary>
        <SafeAreaProvider>
          <QueryClientProvider client={queryClient}>
            <PaperProvider theme={CulturalTheme}>
              <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
                <StatusBar 
                  barStyle="light-content" 
                  backgroundColor={CulturalTheme.colors.primary}
                  translucent={Platform.OS === 'android'}
                />
                <NavigationContainer>
                  <OnboardingNavigator />
                </NavigationContainer>
              </SafeAreaView>
            </PaperProvider>
          </QueryClientProvider>
        </SafeAreaProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <PaperProvider theme={CulturalTheme}>
            <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
              <StatusBar 
                barStyle="light-content" 
                backgroundColor={CulturalTheme.colors.primary}
                translucent={Platform.OS === 'android'}
              />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: string;

                switch (route.name) {
                  case 'Fáilte':
                    iconName = 'home';
                    break;
                  case 'Foghlaim':
                    iconName = 'school';
                    break;
                  case 'Cleachtadh':
                    iconName = 'fitness-center';
                    break;
                  case 'Comhphobal':
                    iconName = 'groups';
                    break;
                  case 'Oidhreacht':
                    iconName = 'menu-book';
                    break;
                  default:
                    iconName = 'help';
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: CulturalTheme.colors.primary,
              tabBarInactiveTintColor: CulturalTheme.colors.outline,
              tabBarStyle: styles.tabBar,
              tabBarLabelStyle: styles.tabBarLabel,
              headerStyle: {
                backgroundColor: CulturalTheme.colors.primary,
              },
              headerTintColor: CulturalTheme.colors.onPrimary,
              headerTitleStyle: {
                fontFamily: 'System',
                fontSize: 18,
                fontWeight: '600',
              },
            })}
          >
            <Tab.Screen 
              name="Fáilte" 
              component={HomeScreen}
              options={{ 
                title: 'Fáilte (Welcome)',
                headerTitle: 'Céad Míle Fáilte'
              }}
            />
            <Tab.Screen 
              name="Foghlaim" 
              component={LearnScreen}
              options={{ 
                title: 'Foghlaim (Learn)',
                headerTitle: 'Learn Ceili Dancing'
              }}
            />
            <Tab.Screen 
              name="Cleachtadh" 
              component={PracticeScreen}
              options={{ 
                title: 'Cleachtadh (Practice)',
                headerTitle: 'Practice Your Steps'
              }}
            />
            <Tab.Screen 
              name="Comhphobal" 
              component={CommunityScreen}
              options={{ 
                title: 'Comhphobal (Community)',
                headerTitle: 'Cultural Community'
              }}
            />
            <Tab.Screen 
              name="Oidhreacht" 
              component={HeritageScreen}
              options={{ 
                title: 'Oidhreacht (Heritage)',
                headerTitle: 'Irish Cultural Heritage'
              }}
            />
          </Tab.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CulturalTheme.colors.background,
  },
  tabBar: {
    backgroundColor: CulturalTheme.colors.surface,
    borderTopColor: CulturalTheme.colors.outline,
    borderTopWidth: 1,
    paddingTop: 5,
    paddingBottom: Platform.OS === 'ios' ? 5 : 10,
    height: Platform.OS === 'ios' ? 65 : 70,
  },
  tabBarLabel: {
    fontSize: 10,
    fontFamily: 'System',
    fontWeight: '500',
    marginTop: 2,
  },
});

export default App;