import React from 'react';
import styled, { useTheme } from 'styled-components';
import { View, Text, TouchableOpacity, ScrollView } from '../../components/ui';
import { useAuthStore } from '../../stores/authStore';

const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContentScrollView = styled(ScrollView)`
  flex: 1;
  padding: 24px;
  justify-content: center;
`;

const CelebrationContainer = styled(View)`
  align-items: center;
  margin-bottom: 40px;
`;

const CelebrationEmoji = styled(Text)`
  font-size: 80px;
  margin-bottom: 16px;
`;

const Title = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 16px;
`;

const Subtitle = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
  margin-bottom: 32px;
  line-height: 24px;
`;

const WelcomeCard = styled(View)`
  background-color: ${({ theme }) => theme.colors.primaryContainer};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 24px;
`;

const WelcomeTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 12px;
`;

const WelcomeText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onPrimaryContainer};
  text-align: center;
  line-height: 22px;
`;

const NextStepsCard = styled(View)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const StepTitle = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

const StepDescription = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurface};
  line-height: 20px;
`;

const StartButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px 32px;
  border-radius: 12px;
  align-items: center;
  margin: 32px 0;
`;

const StartButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 18px;
  font-weight: 600;
`;

const OnboardingCompleteScreen: React.FC = () => {
  const completeOnboarding = useAuthStore(state => state.completeOnboarding);
  const theme = useTheme();

  const handleStartLearning = () => {
    completeOnboarding();
    // Navigation will be handled by the parent component based on the updated state
  };

  return (
    <Container>
      <ContentScrollView>
        <CelebrationContainer>
          <CelebrationEmoji>🎉</CelebrationEmoji>
          <Title>Maith thú!</Title>
          <Subtitle>Well done! You're ready to begin your ceili dancing journey</Subtitle>
        </CelebrationContainer>

        <WelcomeCard>
          <WelcomeTitle>Fáilte go dtí an Teaghlach Ceili!</WelcomeTitle>
          <WelcomeText>
            Welcome to the Ceili Family! You've taken the first step into a rich cultural tradition 
            that spans generations. Your journey into Irish dance and culture begins now.
          </WelcomeText>
        </WelcomeCard>

        <NextStepsCard>
          <StepTitle>🎓 Start Learning</StepTitle>
          <StepDescription>
            Begin with your chosen dance and explore step-by-step lessons with authentic Irish music
          </StepDescription>
        </NextStepsCard>

        <NextStepsCard>
          <StepTitle>💪 Practice Regularly</StepTitle>
          <StepDescription>
            Use our 3D formations and practice mode to perfect your steps and formations
          </StepDescription>
        </NextStepsCard>

        <NextStepsCard>
          <StepTitle>👥 Join the Community</StepTitle>
          <StepDescription>
            Connect with fellow dancers, share your progress, and learn about Irish heritage
          </StepDescription>
        </NextStepsCard>

        <NextStepsCard>
          <StepTitle>📚 Explore Heritage</StepTitle>
          <StepDescription>
            Discover the stories, history, and cultural significance behind each dance
          </StepDescription>
        </NextStepsCard>

        <StartButton onPress={handleStartLearning}>
          <StartButtonText>Begin Your Journey</StartButtonText>
        </StartButton>

        <View style={{ 
          padding: 16, 
          alignItems: 'center'
        }}>
          <Text style={{ 
            fontSize: 14, 
            color: theme.colors.outline, 
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            "Ceol, craic agus comhluadar" - Music, fun, and good company
          </Text>
        </View>
      </ContentScrollView>
    </Container>
  );
};

export default OnboardingCompleteScreen;