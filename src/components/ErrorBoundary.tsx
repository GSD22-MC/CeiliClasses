import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { View, Text, TouchableOpacity } from './ui';
import { CulturalCard } from './ui/CulturalCard';
import { CulturalTheme } from '../theme/CulturalTheme';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

// Styled Components
const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.large};
  min-height: 400px;
`;

const ErrorCard = styled(CulturalCard)`
  align-items: center;
  max-width: 350px;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const ErrorTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ErrorMessage = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const DebugInfo = styled(View)`
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  width: 100%;
`;

const DebugTitle = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const DebugText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
  font-family: monospace;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  word-break: break-all;
`;

const DebugStack = styled(Text)`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  font-family: monospace;
  word-break: break-all;
`;

const RetryButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.extraLarge};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryContainer};
    transform: translateY(-1px);
  }
`;

const RetryButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 16px;
  font-weight: 600;
`;

const MediaErrorContainer = styled(View)`
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.large};
  align-items: center;
  margin: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;

const MediaErrorIcon = styled.div`
  font-size: 32px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const MediaErrorTitle = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const MediaErrorMessage = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });

    // Log error securely without exposing sensitive data
    const isDev = process.env.NODE_ENV === 'development';
    const errorReport = {
      message: error.message,
      stack: isDev ? error.stack : 'Hidden in production',
      componentStack: isDev ? errorInfo.componentStack : 'Hidden in production',
      timestamp: new Date().toISOString(),
    };

    console.error('ErrorBoundary caught an error:', errorReport);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    // Example: crashlytics().recordError(error);
  }

  handleRetry = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // If a custom fallback is provided, use it
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      const isDev = process.env.NODE_ENV === 'development';
      
      return (
        <Container>
          <ErrorCard culturalLevel="primary">
            <ErrorIcon>⚠️</ErrorIcon>
            <ErrorTitle>Oops! Something went wrong</ErrorTitle>
            <ErrorMessage>
              We encountered an unexpected error. Don't worry, we've been notified and are working to fix it.
            </ErrorMessage>
            
            {isDev && this.state.error && (
              <DebugInfo>
                <DebugTitle>Debug Information:</DebugTitle>
                <DebugText>{this.state.error.message}</DebugText>
                {this.state.error.stack && (
                  <DebugStack>
                    {this.state.error.stack.substring(0, 500)}...
                  </DebugStack>
                )}
              </DebugInfo>
            )}

            <RetryButton 
              onPress={this.handleRetry}
              accessibilityLabel="Try again"
              accessibilityRole="button"
            >
              <RetryButtonText>Try Again</RetryButtonText>
            </RetryButton>
          </ErrorCard>
        </Container>
      );
    }

    return this.props.children;
  }
}

// Specialized error boundary for media components
export class MediaErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo });
    
    console.error('Media component error:', {
      message: error.message,
      timestamp: new Date().toISOString(),
      component: 'MediaPlayer',
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <MediaErrorContainer>
          <MediaErrorIcon>🎵</MediaErrorIcon>
          <MediaErrorTitle>Media Unavailable</MediaErrorTitle>
          <MediaErrorMessage>
            Unable to load audio or video content. Please check your connection and try again.
          </MediaErrorMessage>
          <RetryButton 
            onPress={this.handleRetry}
            accessibilityLabel="Retry loading media"
            accessibilityRole="button"
          >
            <RetryButtonText>Retry</RetryButtonText>
          </RetryButton>
        </MediaErrorContainer>
      );
    }

    return this.props.children;
  }
}

// Hook for error handling in functional components
export const useErrorHandler = () => {
  const handleError = React.useCallback((error: Error, errorInfo?: string) => {
    const isDev = process.env.NODE_ENV === 'development';
    const errorReport = {
      message: error.message,
      stack: isDev ? error.stack : 'Hidden in production',
      additionalInfo: errorInfo,
      timestamp: new Date().toISOString(),
    };

    console.error('Error handled:', errorReport);

    // In production, send to error reporting service
    // Example: Sentry.captureException(error);
  }, []);

  return { handleError };
};

