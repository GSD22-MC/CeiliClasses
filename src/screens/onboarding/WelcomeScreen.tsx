import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { View, Text, TouchableOpacity, SafeAreaView } from '../../components/ui';
import { CulturalCard } from '../../components/ui/CulturalCard';
import { CulturalTheme } from '../../theme/CulturalTheme';
import { PronunciationButton } from '../../components/PronunciationButton';

// Styled Components
const Container = styled(View)`
  min-height: 100vh;
  background-image: linear-gradient(
    rgba(0, 102, 51, 0.8),
    rgba(0, 102, 51, 0.6),
    rgba(0, 102, 51, 0.9)
  ), url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.large};
`;

const HeaderSection = styled(View)`
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

const HeaderIcon = styled.div`
  font-size: 60px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const MainTitle = styled(Text)`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onPrimary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const Subtitle = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onPrimary};
  text-align: center;
  opacity: 0.9;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;

const WelcomeCard = styled(CulturalCard)`
  margin: ${({ theme }) => theme.spacing.large} 0;
`;

const GreetingIrish = styled(Text)`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const PronunciationContainer = styled(View)`
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const GreetingTranslation = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  font-style: italic;
`;

const WelcomeMessage = styled(Text)`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const BenefitsList = styled(View)`
  gap: ${({ theme }) => theme.spacing.medium};
`;

const BenefitItem = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const BenefitIcon = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BenefitText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurface};
  flex: 1;
`;

const ActionSection = styled(View)`
  align-items: center;
`;

const BeginButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.elevation.high.boxShadow};
  }
`;

const BeginButtonText = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSecondary};
  text-align: center;
`;

const TimeCommitment = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onPrimary};
  opacity: 0.8;
`;

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Animate content appearance
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleBeginJourney = () => {
    navigate('/onboarding/cultural-intro');
  };

  return (
    <Container>
      <SafeAreaView>
        {showContent && (
          <>
            {/* Header Section */}
            <HeaderSection>
              <HeaderIcon>🎉</HeaderIcon>
              <MainTitle>CeiliClasses</MainTitle>
              <Subtitle>
                Learn authentic Irish ceili dancing with cultural confidence
              </Subtitle>
            </HeaderSection>

            {/* Welcome Message Section */}
            <WelcomeCard culturalLevel="primary">
              <GreetingIrish>Céad míle fáilte!</GreetingIrish>
              
              <PronunciationContainer>
                <PronunciationButton
                  text="KAH-ed MEE-leh FALL-che"
                  audioUrl="https://example.com/audio/cead-mile-failte.mp3"
                  size="small"
                />
              </PronunciationContainer>
              
              <GreetingTranslation>
                One hundred thousand welcomes!
              </GreetingTranslation>
              
              <WelcomeMessage>
                Welcome to your authentic Irish cultural journey. In just 60 minutes, 
                you'll learn to pronounce "ceili" correctly, master your first traditional 
                Irish dance, and join a welcoming community that celebrates Irish heritage.
              </WelcomeMessage>

              <BenefitsList>
                <BenefitItem>
                  <BenefitIcon>🔊</BenefitIcon>
                  <BenefitText>
                    Native Irish pronunciation guides
                  </BenefitText>
                </BenefitItem>
                <BenefitItem>
                  <BenefitIcon>👥</BenefitIcon>
                  <BenefitText>
                    Welcoming cultural community
                  </BenefitText>
                </BenefitItem>
                <BenefitItem>
                  <BenefitIcon>🎓</BenefitIcon>
                  <BenefitText>
                    Authentic cultural education
                  </BenefitText>
                </BenefitItem>
              </BenefitsList>
            </WelcomeCard>

            {/* Action Section */}
            <ActionSection>
              <BeginButton onPress={handleBeginJourney}>
                <BeginButtonText>Begin Your Cultural Journey</BeginButtonText>
              </BeginButton>
              
              <TimeCommitment>
                ⏱️ Complete in under 60 minutes
              </TimeCommitment>
            </ActionSection>
          </>
        )}
      </SafeAreaView>
    </Container>
  );
};

