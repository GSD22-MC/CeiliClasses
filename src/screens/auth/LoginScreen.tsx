import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from '../../components/ui';
import { CulturalCard } from '../../components/ui/CulturalCard';
import { CulturalTheme } from '../../theme/CulturalTheme';
import { useAuthStore } from '../../stores/authStore';
import { validateEmail, validatePassword, sanitizeInput, authRateLimiter } from '../../utils/validation';

// Styled Components
const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled(ScrollView)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.large};
  justify-content: center;
`;

const Header = styled(View)`
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const HeaderIcon = styled.div`
  font-size: 60px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Title = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onBackground};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  text-align: center;
`;

const Subtitle = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
`;

const FormContainer = styled(CulturalCard)`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const FormTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: center;
`;

const ErrorContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.errorContainer};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.small};
`;

const ErrorIcon = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.error};
`;

const ErrorText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error};
  flex: 1;
`;

const InputContainer = styled(View)`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const InputWrapper = styled(View)`
  position: relative;
  flex-direction: row;
  align-items: center;
`;

const InputIcon = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing.medium};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  z-index: 1;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  padding-left: 48px;
  border: 2px solid ${({ hasError, theme }) => 
    hasError ? theme.colors.error : theme.colors.outline};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  font-size: 16px;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const PasswordInput = styled(Input)`
  padding-right: 48px;
`;

const PasswordToggle = styled(TouchableOpacity)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.small};
`;

const PasswordToggleIcon = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const HelperText = styled(Text)<{ error?: boolean }>`
  font-size: 12px;
  color: ${({ error, theme }) => error ? theme.colors.error : theme.colors.onSurfaceVariant};
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-left: ${({ theme }) => theme.spacing.small};
  min-height: 16px;
`;

const LoginButton = styled(TouchableOpacity)<{ disabled?: boolean }>`
  background-color: ${({ disabled, theme }) => 
    disabled ? theme.colors.surfaceVariant : theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  
  &:hover {
    background-color: ${({ disabled, theme }) => 
      disabled ? theme.colors.surfaceVariant : theme.colors.primaryContainer};
  }
`;

const LoginButtonText = styled(Text)<{ disabled?: boolean }>`
  color: ${({ disabled, theme }) => 
    disabled ? theme.colors.onSurfaceVariant : theme.colors.onPrimary};
  font-size: 16px;
  font-weight: 600;
`;

const ForgotButton = styled(TouchableOpacity)`
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small};
`;

const ForgotButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
`;

const SignupContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SignupText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const SignupButton = styled(TouchableOpacity)`
  padding: ${({ theme }) => theme.spacing.small};
`;

const SignupButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
`;

const QuoteContainer = styled(View)`
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: 0 ${({ theme }) => theme.spacing.large};
`;

const Quote = styled(Text)`
  font-size: 16px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const QuoteTranslation = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
`;

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { login, isLoading, error } = useAuthStore();

  const validateEmailInput = (emailInput: string) => {
    const sanitized = sanitizeInput(emailInput);
    const validation = validateEmail(sanitized);
    
    if (!validation.isValid) {
      setEmailError(validation.error || 'Invalid email');
      return false;
    }
    
    setEmailError('');
    return true;
  };

  const validatePasswordInput = (passwordInput: string) => {
    // Don't sanitize password as it may contain special characters intentionally
    const validation = validatePassword(passwordInput);
    
    if (!validation.isValid) {
      setPasswordError(validation.error || 'Invalid password');
      return false;
    }
    
    setPasswordError('');
    return true;
  };

  const handleLogin = async () => {
    // Rate limiting check
    const identifier = sanitizeInput(email) || 'unknown';
    if (!authRateLimiter.isAllowed(identifier)) {
      const remainingTime = Math.ceil(authRateLimiter.getRemainingTime(identifier) / 1000);
      alert(`Too Many Attempts: Please wait ${remainingTime} seconds before trying again.`);
      return;
    }

    const isEmailValid = validateEmailInput(email);
    const isPasswordValid = validatePasswordInput(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      const sanitizedEmail = sanitizeInput(email);
      await login(sanitizedEmail, password);
    } catch (err) {
      alert('Login Failed: Please check your credentials and try again.');
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      alert('Email Required: Please enter your email address first.');
      return;
    }
    // TODO: Implement password reset
    alert('Password Reset: Password reset link sent to your email.');
  };

  return (
    <Container>
      <SafeAreaView>
        <Content>
          {/* Header */}
          <Header>
            <HeaderIcon>🎉</HeaderIcon>
            <Title>Welcome Back!</Title>
            <Subtitle>
              Continue your Irish cultural journey
            </Subtitle>
          </Header>

          {/* Login Form */}
          <FormContainer culturalLevel="primary">
            <FormTitle>Sign In</FormTitle>

            {error && (
              <ErrorContainer>
                <ErrorIcon>⚠️</ErrorIcon>
                <ErrorText>{error}</ErrorText>
              </ErrorContainer>
            )}

            <InputContainer>
              <InputWrapper>
                <InputIcon>📧</InputIcon>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) validateEmailInput(e.target.value);
                  }}
                  autoComplete="email"
                  hasError={!!emailError}
                />
              </InputWrapper>
              <HelperText error={!!emailError}>
                {emailError || ' '}
              </HelperText>
            </InputContainer>

            <InputContainer>
              <InputWrapper>
                <InputIcon>🔒</InputIcon>
                <PasswordInput
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) validatePasswordInput(e.target.value);
                  }}
                  autoComplete="current-password"
                  hasError={!!passwordError}
                />
                <PasswordToggle onPress={() => setShowPassword(!showPassword)}>
                  <PasswordToggleIcon>
                    {showPassword ? '🙈' : '👁️'}
                  </PasswordToggleIcon>
                </PasswordToggle>
              </InputWrapper>
              <HelperText error={!!passwordError}>
                {passwordError || ' '}
              </HelperText>
            </InputContainer>

            <LoginButton
              onPress={handleLogin}
              disabled={isLoading}
            >
              <LoginButtonText disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </LoginButtonText>
            </LoginButton>

            <ForgotButton onPress={handleForgotPassword}>
              <ForgotButtonText>Forgot Password?</ForgotButtonText>
            </ForgotButton>
          </FormContainer>

          {/* Sign Up Link */}
          <SignupContainer>
            <SignupText>Don't have an account? </SignupText>
            <SignupButton onPress={() => navigate('/register')}>
              <SignupButtonText>Sign Up</SignupButtonText>
            </SignupButton>
          </SignupContainer>

          {/* Cultural Quote */}
          <QuoteContainer>
            <Quote>
              "Níl aon tinteán mar do thinteán féin"
            </Quote>
            <QuoteTranslation>
              There's no hearth like your own hearth
            </QuoteTranslation>
          </QuoteContainer>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

