import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
    const errorReport = {
      message: error.message,
      stack: __DEV__ ? error.stack : 'Hidden in production',
      componentStack: __DEV__ ? errorInfo.componentStack : 'Hidden in production',
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
      return (
        <View style={styles.container}>
          <View style={styles.errorCard}>
            <Text style={styles.errorIcon}>⚠️</Text>
            <Text style={styles.errorTitle}>Oops! Something went wrong</Text>
            <Text style={styles.errorMessage}>
              We encountered an unexpected error. Don't worry, we've been notified and are working to fix it.
            </Text>
            
            {__DEV__ && this.state.error && (
              <View style={styles.debugInfo}>
                <Text style={styles.debugTitle}>Debug Information:</Text>
                <Text style={styles.debugText}>{this.state.error.message}</Text>
                {this.state.error.stack && (
                  <Text style={styles.debugStack}>
                    {this.state.error.stack.substring(0, 500)}...
                  </Text>
                )}
              </View>
            )}

            <TouchableOpacity 
              style={styles.retryButton} 
              onPress={this.handleRetry}
              accessibilityLabel="Try again"
              accessibilityRole="button"
            >
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
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
        <View style={styles.mediaErrorContainer}>
          <Text style={styles.mediaErrorIcon}>🎵</Text>
          <Text style={styles.mediaErrorTitle}>Media Unavailable</Text>
          <Text style={styles.mediaErrorMessage}>
            Unable to load audio or video content. Please check your connection and try again.
          </Text>
          <TouchableOpacity 
            style={styles.retryButton} 
            onPress={this.handleRetry}
            accessibilityLabel="Retry loading media"
            accessibilityRole="button"
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

// Hook for error handling in functional components
export const useErrorHandler = () => {
  const handleError = React.useCallback((error: Error, errorInfo?: string) => {
    const errorReport = {
      message: error.message,
      stack: __DEV__ ? error.stack : 'Hidden in production',
      additionalInfo: errorInfo,
      timestamp: new Date().toISOString(),
    };

    console.error('Error handled:', errorReport);

    // In production, send to error reporting service
    // Example: crashlytics().recordError(error);
  }, []);

  return { handleError };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CulturalTheme.colors.background,
    padding: CulturalTheme.spacing.large,
  },
  errorCard: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.extraLarge,
    alignItems: 'center',
    maxWidth: 350,
    ...CulturalTheme.elevation.medium,
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: CulturalTheme.spacing.large,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.medium,
  },
  errorMessage: {
    fontSize: 16,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: CulturalTheme.spacing.large,
  },
  debugInfo: {
    backgroundColor: CulturalTheme.colors.backgroundSecondary,
    borderRadius: CulturalTheme.borderRadius.small,
    padding: CulturalTheme.spacing.medium,
    marginBottom: CulturalTheme.spacing.large,
    width: '100%',
  },
  debugTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.small,
  },
  debugText: {
    fontSize: 12,
    color: CulturalTheme.colors.error,
    fontFamily: 'monospace',
    marginBottom: CulturalTheme.spacing.small,
  },
  debugStack: {
    fontSize: 10,
    color: CulturalTheme.colors.textSecondary,
    fontFamily: 'monospace',
  },
  retryButton: {
    backgroundColor: CulturalTheme.colors.primary,
    paddingHorizontal: CulturalTheme.spacing.extraLarge,
    paddingVertical: CulturalTheme.spacing.medium,
    borderRadius: CulturalTheme.borderRadius.small,
  },
  retryButtonText: {
    color: CulturalTheme.colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
  mediaErrorContainer: {
    backgroundColor: CulturalTheme.colors.backgroundSecondary,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    alignItems: 'center',
    margin: CulturalTheme.spacing.medium,
  },
  mediaErrorIcon: {
    fontSize: 32,
    marginBottom: CulturalTheme.spacing.medium,
  },
  mediaErrorTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.small,
  },
  mediaErrorMessage: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.medium,
  },
});