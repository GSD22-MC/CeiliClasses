import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView } from '../../components/ui';
import { PronunciationButton } from '../../components/PronunciationButton';

const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContentScrollView = styled(ScrollView)`
  flex: 1;
  padding: 24px;
`;

const Title = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 16px;
`;

const Subtitle = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
  margin-bottom: 32px;
  line-height: 22px;
`;

const PronunciationCard = styled(View)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 24px;
  align-items: center;
`;

const IrishWord = styled(Text)`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

const PhoneticText = styled(Text)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
  font-style: italic;
`;

const MeaningText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
  margin-bottom: 20px;
`;

const ProgressText = styled(Text)<{ completed: boolean }>`
  font-size: 14px;
  color: ${({ completed, theme }) => completed ? theme.colors.primary : theme.colors.outline};
  text-align: center;
  margin-top: 16px;
`;

const ContinueButton = styled(TouchableOpacity)<{ enabled: boolean }>`
  background-color: ${({ enabled, theme }) => enabled ? theme.colors.primary : theme.colors.outline};
  padding: 16px 32px;
  border-radius: 8px;
  align-items: center;
  margin: 24px;
`;

const ContinueButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 16px;
  font-weight: 600;
`;

const PronunciationMasteryScreen: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const [hasListened, setHasListened] = useState(false);

  const handlePronunciationPlay = () => {
    setHasListened(true);
  };

  const handleContinue = () => {
    navigation.navigate('FirstDanceLesson' as never);
  };

  return (
    <Container>
      <ContentScrollView>
        <Title>Learn to Say "Ceili"</Title>
        <Subtitle>
          Master the pronunciation of this beautiful Irish word that means "social gathering" or "dance party"
        </Subtitle>
        
        <PronunciationCard>
          <IrishWord>Ceili</IrishWord>
          <PhoneticText>KAY-lee</PhoneticText>
          <MeaningText>Irish for "social gathering" or "dance party"</MeaningText>
          
          <PronunciationButton 
            term="ceili"
            onPlayStart={handlePronunciationPlay}
            size="large"
          />
          
          <ProgressText completed={hasListened}>
            {hasListened ? '✓ Great! You\'ve heard the pronunciation' : 'Tap the button to hear the pronunciation'}
          </ProgressText>
        </PronunciationCard>

        <View style={{ padding: 16 }}>
          <Text style={{ 
            fontSize: 14, 
            color: theme.colors.onSurface, 
            textAlign: 'center',
            lineHeight: 20
          }}>
            In Irish culture, a ceili is more than just dancing - it's a celebration of community, 
            storytelling, and the preservation of traditions passed down through generations.
          </Text>
        </View>
      </ContentScrollView>
      
      <ContinueButton enabled={hasListened} onPress={handleContinue}>
        <ContinueButtonText>
          {hasListened ? 'Continue to First Dance' : 'Listen to Pronunciation First'}
        </ContinueButtonText>
      </ContinueButton>
    </Container>
  );
};

export default PronunciationMasteryScreen;