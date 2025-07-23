import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { CulturalTheme } from '../../theme/CulturalTheme';
import { View, Text, TouchableOpacity, ScrollView } from '../../components/ui';
import { DanceFormation3D } from '../../components/DanceFormation3D';

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
  margin-bottom: 16px;
`;

const Subtitle = styled(Text)`
  font-size: 16px;
  color: ${CulturalTheme.colors.onSurface};
  text-align: center;
  margin-bottom: 24px;
  line-height: 22px;
`;

const DanceCard = styled(TouchableOpacity)<{ selected: boolean }>`
  background-color: ${props => props.selected ? CulturalTheme.colors.primaryContainer : CulturalTheme.colors.surface};
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 2px solid ${props => props.selected ? CulturalTheme.colors.primary : 'transparent'};
`;

const DanceName = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${CulturalTheme.colors.primary};
  margin-bottom: 8px;
`;

const DanceDescription = styled(Text)`
  font-size: 14px;
  color: ${CulturalTheme.colors.onSurface};
  line-height: 20px;
`;

const FormationContainer = styled(View)`
  height: 200px;
  margin: 16px 0;
  border-radius: 12px;
  overflow: hidden;
`;

const ContinueButton = styled(TouchableOpacity)<{ enabled: boolean }>`
  background-color: ${props => props.enabled ? CulturalTheme.colors.primary : CulturalTheme.colors.outline};
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

interface Dance {
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  formation: string;
}

const beginnerDances: Dance[] = [
  {
    name: 'The Walls of Limerick',
    description: 'A gentle introduction to ceili dancing with simple steps and beautiful formations.',
    difficulty: 'beginner',
    formation: 'circle'
  },
  {
    name: 'Siege of Ennis',
    description: 'A progressive dance that teaches basic ceili movements and partner interaction.',
    difficulty: 'beginner',
    formation: 'longways'
  },
  {
    name: 'Bridge of Athlone',
    description: 'Learn traditional Irish steps in this classic beginner-friendly dance.',
    difficulty: 'beginner',
    formation: 'bridge'
  }
];

const FirstDanceLessonScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedDance, setSelectedDance] = useState<string | null>(null);

  const handleDanceSelect = (danceName: string) => {
    setSelectedDance(danceName);
  };

  const handleContinue = () => {
    navigation.navigate('CulturalConfidence' as never);
  };

  return (
    <Container>
      <ContentScrollView>
        <Title>Choose Your First Dance</Title>
        <Subtitle>
          Select a beginner-friendly ceili dance to start your Irish dancing journey
        </Subtitle>
        
        {beginnerDances.map((dance) => (
          <DanceCard
            key={dance.name}
            selected={selectedDance === dance.name}
            onPress={() => handleDanceSelect(dance.name)}
          >
            <DanceName>{dance.name}</DanceName>
            <DanceDescription>{dance.description}</DanceDescription>
          </DanceCard>
        ))}

        {selectedDance && (
          <FormationContainer>
            <DanceFormation3D
              formation={beginnerDances.find(d => d.name === selectedDance)?.formation || 'circle'}
              danceName={selectedDance}
            />
          </FormationContainer>
        )}

        <View style={{ padding: 16, marginTop: 16 }}>
          <Text style={{ 
            fontSize: 14, 
            color: CulturalTheme.colors.onSurface, 
            textAlign: 'center',
            lineHeight: 20
          }}>
            Don't worry - you can explore all dances later! This helps us personalize your learning experience.
          </Text>
        </View>
      </ContentScrollView>
      
      <ContinueButton enabled={!!selectedDance} onPress={handleContinue}>
        <ContinueButtonText>
          {selectedDance ? 'Continue' : 'Select a Dance First'}
        </ContinueButtonText>
      </ContinueButton>
    </Container>
  );
};

export default FirstDanceLessonScreen;