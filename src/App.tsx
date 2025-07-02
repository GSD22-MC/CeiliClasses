import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { CulturalTheme } from './theme/CulturalTheme';
import { useAuthStore } from './stores/authStore';
import { useCulturalContentStore } from './stores/culturalContentStore';

// Screens
import HomeScreen from './screens/HomeScreen';
import LearnScreen from './screens/LearnScreen';
import PracticeScreen from './screens/PracticeScreen';
import CommunityScreen from './screens/CommunityScreen';
import HeritageScreen from './screens/HeritageScreen';
import OnboardingNavigator from './navigation/OnboardingNavigator';
import Navigation from './components/Navigation';

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.onBackground};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; /* Account for fixed navigation */
`;

const App: React.FC = () => {
  const { isAuthenticated, hasCompletedOnboarding } = useAuthStore();

  useEffect(() => {
    // Initialize app
    console.log('CeiliClasses Web App Initialized');
  }, []);
  
  if (!isAuthenticated || !hasCompletedOnboarding) {
    return (
      <ThemeProvider theme={CulturalTheme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Router>
            <AppContainer>
              <OnboardingNavigator />
            </AppContainer>
          </Router>
        </QueryClientProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={CulturalTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router>
          <AppContainer>
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
          </AppContainer>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;