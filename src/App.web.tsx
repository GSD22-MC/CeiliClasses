import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { CulturalTheme } from './theme/CulturalTheme';
import { useAuthStore } from './stores/authStore';
import { ErrorBoundary } from './components/ErrorBoundary';
import { analyticsService } from './services/AnalyticsService';
import { usabilityTestingService } from './services/UsabilityTestingService';

// Import screens
import HomeScreen from './screens/HomeScreen';
import { LearnScreen } from './screens/LearnScreen';
import { PracticeScreen } from './screens/PracticeScreen';
import { CommunityScreen } from './screens/CommunityScreen';
import { HeritageScreen } from './screens/HeritageScreen';
import { LoginScreen } from './screens/auth/LoginScreen';
import { WelcomeScreen } from './screens/onboarding/WelcomeScreen';

// Navigation component
import { Navigation } from './components/Navigation';

const queryClient = new QueryClient();

// Styled Components
const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.onBackground};
`;

const MainContent = styled.main`
  min-height: calc(100vh - 80px);
  padding-top: 80px; /* Account for navigation bar */
`;

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

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={CulturalTheme}>
          <Router>
            <AppContainer>
              {/* For demo purposes, show main app - authentication can be added later */}
              {true ? (
                <>
                  <Navigation />
                  <MainContent>
                    <Routes>
                      <Route path="/" element={<HomeScreen />} />
                      <Route path="/learn" element={<LearnScreen />} />
                      <Route path="/practice" element={<PracticeScreen />} />
                      <Route path="/community" element={<CommunityScreen />} />
                      <Route path="/heritage" element={<HeritageScreen />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </MainContent>
                </>
              ) : (
                <Routes>
                  <Route path="/login" element={<LoginScreen />} />
                  <Route path="/welcome" element={<WelcomeScreen />} />
                  <Route path="*" element={<Navigate to="/welcome" replace />} />
                </Routes>
              )}
            </AppContainer>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;