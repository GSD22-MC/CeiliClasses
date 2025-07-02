import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { TextInput, Button, Surface, HelperText } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CulturalTheme, CulturalSpacing, CulturalBorderRadius } from '../../theme/CulturalTheme';
import { useAuthStore } from '../../stores/authStore';

interface Props {
  navigation: StackNavigationProp<any>;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { login, isLoading, error } = useAuthStore();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleLogin = async () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      await login(email, password);
    } catch (err) {
      Alert.alert('Login Failed', 'Please check your credentials and try again.');
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert('Email Required', 'Please enter your email address first.');
      return;
    }
    // TODO: Implement password reset
    Alert.alert('Password Reset', 'Password reset link sent to your email.');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Icon name="celebration" size={60} color={CulturalTheme.colors.primary} />
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>
              Continue your Irish cultural journey
            </Text>
          </View>

          {/* Login Form */}
          <Surface style={styles.formContainer} elevation={2}>
            <Text style={styles.formTitle}>Sign In</Text>

            {error && (
              <View style={styles.errorContainer}>
                <Icon name="error" size={20} color={CulturalTheme.colors.error} />
                <Text style={styles.errorText}>{error}</Text>
              </View>
            )}

            <TextInput
              mode="outlined"
              label="Email Address"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) validateEmail(text);
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              error={!!emailError}
              style={styles.input}
              left={<TextInput.Icon icon="email" />}
            />
            <HelperText type="error" visible={!!emailError}>
              {emailError}
            </HelperText>

            <TextInput
              mode="outlined"
              label="Password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (passwordError) validatePassword(text);
              }}
              secureTextEntry={!showPassword}
              autoComplete="password"
              error={!!passwordError}
              style={styles.input}
              left={<TextInput.Icon icon="lock" />}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'visibility-off' : 'visibility'}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
            <HelperText type="error" visible={!!passwordError}>
              {passwordError}
            </HelperText>

            <Button
              mode="contained"
              onPress={handleLogin}
              loading={isLoading}
              disabled={isLoading}
              style={styles.loginButton}
              contentStyle={styles.loginButtonContent}
            >
              Sign In
            </Button>

            <Button
              mode="text"
              onPress={handleForgotPassword}
              style={styles.forgotButton}
            >
              Forgot Password?
            </Button>
          </Surface>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <Button
              mode="text"
              onPress={() => navigation.navigate('Register')}
              compact
            >
              Sign Up
            </Button>
          </View>

          {/* Cultural Quote */}
          <View style={styles.quoteContainer}>
            <Text style={styles.quote}>
              "Níl aon tinteán mar do thinteán féin"
            </Text>
            <Text style={styles.quoteTranslation}>
              There's no hearth like your own hearth
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CulturalTheme.colors.background,
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: CulturalSpacing.lg,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: CulturalSpacing.xl,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: CulturalTheme.colors.onBackground,
    marginTop: CulturalSpacing.md,
    marginBottom: CulturalSpacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: CulturalTheme.colors.onSurfaceVariant,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalBorderRadius.lg,
    padding: CulturalSpacing.lg,
    marginBottom: CulturalSpacing.lg,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: CulturalTheme.colors.onSurface,
    marginBottom: CulturalSpacing.lg,
    textAlign: 'center',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CulturalColors.errorLight + '20',
    borderRadius: CulturalBorderRadius.sm,
    padding: CulturalSpacing.sm,
    marginBottom: CulturalSpacing.md,
    gap: CulturalSpacing.sm,
  },
  errorText: {
    fontSize: 14,
    color: CulturalTheme.colors.error,
    flex: 1,
  },
  input: {
    marginBottom: CulturalSpacing.sm,
  },
  loginButton: {
    marginTop: CulturalSpacing.md,
    borderRadius: CulturalBorderRadius.md,
  },
  loginButtonContent: {
    paddingVertical: CulturalSpacing.sm,
  },
  forgotButton: {
    marginTop: CulturalSpacing.sm,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurfaceVariant,
  },
  quoteContainer: {
    alignItems: 'center',
    marginTop: CulturalSpacing.xl,
    paddingHorizontal: CulturalSpacing.lg,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: CulturalTheme.colors.primary,
    textAlign: 'center',
    marginBottom: CulturalSpacing.xs,
  },
  quoteTranslation: {
    fontSize: 12,
    color: CulturalTheme.colors.onSurfaceVariant,
    textAlign: 'center',
  },
});

export default LoginScreen;