import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { CulturalTheme } from '../../theme/CulturalTheme';
import { View, Text, TouchableOpacity, ScrollView } from '../../components/ui';

const Container = styled(View)`
  flex: 1;
  background-color: ${CulturalTheme.colors.background};
`;

const ContentScrollView = styled(ScrollView)`
  flex: 1;
  padding: 24px;
`;

const Title = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  color: ${CulturalTheme.colors.primary};
  text-align: center;
  margin-bottom: 24px;
`;

const Subtitle = styled(Text)`
  font-size: 18px;
  color: ${CulturalTheme.colors.onSurface};
  text-align: center;
  margin-bottom: 32px;
  line-height: 24px;
`;

const InfoCard = styled(View)`
  background-color: ${CulturalTheme.colors.surface};
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 16px;
  border-left: 4px solid ${CulturalTheme.colors.primary};
`;

const InfoTitle = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${CulturalTheme.colors.primary};
  margin-bottom: 8px;
`;

const InfoText = styled(Text)`
  font-size: 14px;
  color: ${CulturalTheme.colors.onSurface};
  line-height: 20px;
`;

const ContinueButton = styled(TouchableOpacity)`
  background-color: ${CulturalTheme.colors.primary};
  padding: 16px 32px;
  border-radius: 8px;
  align-items: center;
  margin: 24px;
`;

const ContinueButtonText = styled(Text)`
  color: ${CulturalTheme.colors.onPrimary};
  font-size: 16px;
  font-weight: 600;
`;

const CulturalIntroScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('PronunciationMastery' as never);
  };

  return (
    <Container>
      <ContentScrollView>
        <Title>Fáilte go dtí Ceili! 🇮🇪</Title>
        <Subtitle>Welcome to the heart of Irish culture</Subtitle>
        
        <InfoCard>
          <InfoTitle>What is Ceili Dancing?</InfoTitle>
          <InfoText>
            Ceili (pronounced "KAY-lee") dancing is a traditional Irish social dance performed in groups. 
            It's a celebration of community, culture, and the joy of movement that has been passed down 
            through generations.
          </InfoText>
        </InfoCard>

        <InfoCard>
          <InfoTitle>Cultural Significance</InfoTitle>
          <InfoText>
            These dances were traditionally performed at community gatherings, weddings, and festivals. 
            Each dance tells a story and connects us to Ireland's rich cultural heritage.
          </InfoText>
        </InfoCard>

        <InfoCard>
          <InfoTitle>Learning Together</InfoTitle>
          <InfoText>
            Ceili dancing is about community. You'll learn not just the steps, but the cultural context, 
            Irish language, and the social aspects that make these dances so special.
          </InfoText>
        </InfoCard>
      </ContentScrollView>
      
      <ContinueButton onPress={handleContinue}>
        <ContinueButtonText>Continue to Pronunciation</ContinueButtonText>
      </ContinueButton>
    </Container>
  );
};

export default CulturalIntroScreen;