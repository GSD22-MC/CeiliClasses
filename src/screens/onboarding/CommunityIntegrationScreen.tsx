import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView } from '../../components/ui';

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

const FeatureCard = styled(View)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const FeatureTitle = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

const FeatureDescription = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurface};
  line-height: 20px;
  margin-bottom: 12px;
`;

const FeatureToggle = styled(TouchableOpacity)<{ enabled: boolean }>`
  background-color: ${({ enabled, theme }) => enabled ? theme.colors.primary : theme.colors.outline};
  padding: 8px 16px;
  border-radius: 20px;
  align-self: flex-start;
`;

const ToggleText = styled(Text)`
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 12px;
  font-weight: 600;
`;

const ContinueButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
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

interface CommunityFeature {
  id: string;
  title: string;
  description: string;
  defaultEnabled: boolean;
}

const communityFeatures: CommunityFeature[] = [
  {
    id: 'discussions',
    title: 'Community Discussions',
    description: 'Join conversations about Irish culture, dancing tips, and cultural heritage with other learners.',
    defaultEnabled: true
  },
  {
    id: 'progress_sharing',
    title: 'Progress Sharing',
    description: 'Share your learning milestones and celebrate achievements with the community.',
    defaultEnabled: true
  },
  {
    id: 'cultural_stories',
    title: 'Cultural Stories',
    description: 'Read and share personal stories about Irish heritage and cultural connections.',
    defaultEnabled: true
  },
  {
    id: 'local_events',
    title: 'Local Events',
    description: 'Find ceili dancing events and Irish cultural activities in your area.',
    defaultEnabled: false
  },
  {
    id: 'mentor_program',
    title: 'Mentor Program',
    description: 'Connect with experienced dancers who can guide your learning journey.',
    defaultEnabled: false
  }
];

const CommunityIntegrationScreen: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const [enabledFeatures, setEnabledFeatures] = useState<Record<string, boolean>>(
    communityFeatures.reduce((acc, feature) => ({
      ...acc,
      [feature.id]: feature.defaultEnabled
    }), {})
  );

  const toggleFeature = (featureId: string) => {
    setEnabledFeatures(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const handleContinue = () => {
    navigation.navigate('OnboardingComplete' as never);
  };

  return (
    <Container>
      <ContentScrollView>
        <Title>Join Our Community</Title>
        <Subtitle>
          Connect with fellow learners and immerse yourself in Irish culture. 
          You can change these preferences anytime in settings.
        </Subtitle>
        
        {communityFeatures.map((feature) => (
          <FeatureCard key={feature.id}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <FeatureToggle
              enabled={enabledFeatures[feature.id]}
              onPress={() => toggleFeature(feature.id)}
            >
              <ToggleText>
                {enabledFeatures[feature.id] ? 'ENABLED' : 'DISABLED'}
              </ToggleText>
            </FeatureToggle>
          </FeatureCard>
        ))}

        <View style={{ 
          padding: 20, 
          marginTop: 16, 
          backgroundColor: theme.colors.primaryContainer,
          borderRadius: 12
        }}>
          <Text style={{ 
            fontSize: 16, 
            color: theme.colors.primary, 
            textAlign: 'center',
            lineHeight: 22,
            fontWeight: '600'
          }}>
            🌟 Welcome to the Ceili Family! 🌟
          </Text>
          <Text style={{ 
            fontSize: 14, 
            color: theme.colors.onPrimaryContainer, 
            textAlign: 'center',
            lineHeight: 20,
            marginTop: 8
          }}>
            Our community celebrates the rich tradition of Irish culture while embracing learners from all backgrounds. 
            Fáilte go léir! (Welcome everyone!)
          </Text>
        </View>
      </ContentScrollView>
      
      <ContinueButton onPress={handleContinue}>
        <ContinueButtonText>Complete Setup</ContinueButtonText>
      </ContinueButton>
    </Container>
  );
};

export default CommunityIntegrationScreen;