import React, { useState } from 'react';
import styled from 'styled-components';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from '../components/ui';
import { CulturalCard } from '../components/ui/CulturalCard';
import { CulturalTheme } from '../theme/CulturalTheme';
import { PronunciationPractice } from '../components/PronunciationPractice';

interface PracticeMode {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'pronunciation' | 'steps' | 'music' | 'quiz';
}

const practiceModes: PracticeMode[] = [
  {
    id: 'pronunciation',
    title: 'Irish Pronunciation',
    description: 'Practice speaking Irish dance terms correctly',
    icon: '🗣️',
    type: 'pronunciation',
  },
  {
    id: 'steps',
    title: 'Step Practice',
    description: 'Perfect your dance steps with guided practice',
    icon: '👣',
    type: 'steps',
  },
  {
    id: 'music',
    title: 'Musical Timing',
    description: 'Learn to dance to traditional Irish music rhythms',
    icon: '🎵',
    type: 'music',
  },
  {
    id: 'quiz',
    title: 'Cultural Quiz',
    description: 'Test your knowledge of Irish culture and history',
    icon: '🧠',
    type: 'quiz',
  },
];

const irishTerms = [
  {
    term: 'Céilí',
    pronunciation: 'KAY-lee',
    definition: 'A social gathering with Irish traditional music and dancing',
    audioUrl: 'ceili_pronunciation.mp3',
  },
  {
    term: 'Rince',
    pronunciation: 'RING-keh',
    definition: 'Dance',
    audioUrl: 'rince_pronunciation.mp3',
  },
  {
    term: 'Sliabh na mBan',
    pronunciation: 'SHLEE-uv nuh mahn',
    definition: 'Mountain of the Women - a traditional ceili dance',
    audioUrl: 'sliabh_na_mban_pronunciation.mp3',
  },
  {
    term: 'Ar Rince',
    pronunciation: 'er RING-keh',
    definition: 'For dancing / to dance',
    audioUrl: 'ar_rince_pronunciation.mp3',
  },
];

// Styled Components
const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled(ScrollView)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;

const HeaderSection = styled(View)`
  padding: ${({ theme }) => theme.spacing.large} 0;
  align-items: center;
`;

const ScreenTitle = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const ScreenSubtitle = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
`;

const ModesGrid = styled(View)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ModeCard = styled(CulturalCard)`
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ModeIcon = styled(Text)`
  font-size: 40px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;

const ModeTitle = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const ModeDescription = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  line-height: 1.3;
`;

const StatsSection = styled(CulturalCard)`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const SectionTitle = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;

const StatsGrid = styled(View)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.medium};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(View)`
  align-items: center;
`;

const StatValue = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const StatLabel = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  margin-top: ${({ theme }) => theme.spacing.small};
  text-align: center;
`;

const PracticeContainer = styled(View)`
  flex: 1;
`;

const PracticeHeader = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.outline};
`;

const BackButton = styled(TouchableOpacity)`
  margin-right: ${({ theme }) => theme.spacing.medium};
`;

const BackButtonText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const PracticeTitle = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
`;

const ComingSoonCard = styled(CulturalCard)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  text-align: center;
`;

const ComingSoonIcon = styled(Text)`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ComingSoonTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ComingSoonDescription = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  line-height: 1.5;
`;

export const PracticeScreen: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<PracticeMode | null>(null);

  const renderModeSelection = () => (
    <Content>
      <HeaderSection>
        <ScreenTitle>Cleachtadh (Practice)</ScreenTitle>
        <ScreenSubtitle>
          Improve your skills with focused practice sessions
        </ScreenSubtitle>
      </HeaderSection>

      <ModesGrid>
        {practiceModes.map((mode) => (
          <ModeCard
            key={mode.id}
            culturalLevel="secondary"
            onPress={() => setSelectedMode(mode)}
          >
            <ModeIcon>{mode.icon}</ModeIcon>
            <ModeTitle>{mode.title}</ModeTitle>
            <ModeDescription>{mode.description}</ModeDescription>
          </ModeCard>
        ))}
      </ModesGrid>

      <StatsSection culturalLevel="primary" title="Your Progress">
        <StatsGrid>
          <StatCard>
            <StatValue>0</StatValue>
            <StatLabel>Terms Mastered</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>0</StatValue>
            <StatLabel>Practice Sessions</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>0%</StatValue>
            <StatLabel>Accuracy Rate</StatLabel>
          </StatCard>
        </StatsGrid>
      </StatsSection>
    </Content>
  );

  const renderPronunciationPractice = () => (
    <PracticeContainer>
      <PracticeHeader>
        <BackButton
          onPress={() => setSelectedMode(null)}
          accessibilityLabel="Go back to practice modes"
          accessibilityRole="button"
        >
          <BackButtonText>← Back</BackButtonText>
        </BackButton>
        <PracticeTitle>Irish Pronunciation</PracticeTitle>
      </PracticeHeader>

      <PronunciationPractice
        terms={irishTerms}
        onComplete={() => {
          console.log('Pronunciation practice completed');
          setSelectedMode(null);
        }}
      />
    </PracticeContainer>
  );

  const renderStepPractice = () => (
    <PracticeContainer>
      <PracticeHeader>
        <BackButton onPress={() => setSelectedMode(null)}>
          <BackButtonText>← Back</BackButtonText>
        </BackButton>
        <PracticeTitle>Step Practice</PracticeTitle>
      </PracticeHeader>

      <Content>
        <ComingSoonCard culturalLevel="tertiary">
          <ComingSoonIcon>🚧</ComingSoonIcon>
          <ComingSoonTitle>Coming Soon</ComingSoonTitle>
          <ComingSoonDescription>
            Interactive step practice with motion tracking and feedback is in development.
            Check back soon for guided step-by-step practice sessions!
          </ComingSoonDescription>
        </ComingSoonCard>
      </Content>
    </PracticeContainer>
  );

  const renderMusicPractice = () => (
    <PracticeContainer>
      <PracticeHeader>
        <BackButton onPress={() => setSelectedMode(null)}>
          <BackButtonText>← Back</BackButtonText>
        </BackButton>
        <PracticeTitle>Musical Timing</PracticeTitle>
      </PracticeHeader>

      <Content>
        <ComingSoonCard culturalLevel="tertiary">
          <ComingSoonIcon>🎵</ComingSoonIcon>
          <ComingSoonTitle>Coming Soon</ComingSoonTitle>
          <ComingSoonDescription>
            Rhythm training and musical timing practice with traditional Irish tunes
            is being developed. Practice dancing to the beat with guided audio cues!
          </ComingSoonDescription>
        </ComingSoonCard>
      </Content>
    </PracticeContainer>
  );

  const renderQuizPractice = () => (
    <PracticeContainer>
      <PracticeHeader>
        <BackButton onPress={() => setSelectedMode(null)}>
          <BackButtonText>← Back</BackButtonText>
        </BackButton>
        <PracticeTitle>Cultural Quiz</PracticeTitle>
      </PracticeHeader>

      <Content>
        <ComingSoonCard culturalLevel="tertiary">
          <ComingSoonIcon>🧠</ComingSoonIcon>
          <ComingSoonTitle>Coming Soon</ComingSoonTitle>
          <ComingSoonDescription>
            Interactive quizzes about Irish culture, history, and traditional dances
            are in development. Test your cultural knowledge and learn fascinating facts!
          </ComingSoonDescription>
        </ComingSoonCard>
      </Content>
    </PracticeContainer>
  );

  if (!selectedMode) {
    return (
      <Container>
        <SafeAreaView>
          {renderModeSelection()}
        </SafeAreaView>
      </Container>
    );
  }

  return (
    <Container>
      <SafeAreaView>
        {selectedMode.type === 'pronunciation' && renderPronunciationPractice()}
        {selectedMode.type === 'steps' && renderStepPractice()}
        {selectedMode.type === 'music' && renderMusicPractice()}
        {selectedMode.type === 'quiz' && renderQuizPractice()}
      </SafeAreaView>
    </Container>
  );
};