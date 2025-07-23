import React, { useState } from 'react';
import styled from 'styled-components';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, FlatList } from '../components/ui';
import { CulturalCard } from '../components/ui/CulturalCard';
import { CulturalTheme } from '../theme/CulturalTheme';
import { DanceLessonPlayer } from '../components/DanceLessonPlayer';
import { ceiliDances, getDancesByDifficulty, CeiliDance } from '../data/ceiliDances';

interface DanceLesson extends CeiliDance {
  videoStreams: {
    frontView: string; // YouTube video IDs
    sideView: string;
    overhead: string;
  };
  musicVideo?: string;
  completed: boolean;
}

const mapDanceToLesson = (dance: CeiliDance): DanceLesson => ({
  ...dance,
  videoStreams: {
    frontView: `${dance.id}_front`, // Replace with actual YouTube video IDs
    sideView: `${dance.id}_side`,
    overhead: `${dance.id}_overhead`,
  },
  musicVideo: `${dance.id}_music`, // YouTube music video ID
  completed: false,
});

const danceLessons: DanceLesson[] = ceiliDances.map(mapDanceToLesson);

const difficultyColors = {
  beginner: CulturalTheme.colors.tertiary,
  intermediate: CulturalTheme.colors.secondary,
  advanced: CulturalTheme.colors.primary,
};

// Styled Components
const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled(View)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;

const Header = styled(View)`
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

const HeaderTitleContainer = styled(View)`
  flex: 1;
`;

const HeaderTitle = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
`;

const HeaderSubtitle = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  font-style: italic;
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

const FilterContainer = styled(ScrollView)`
  margin: ${({ theme }) => theme.spacing.medium} 0;
  flex-direction: row;
`;

const FilterButton = styled(TouchableOpacity)<{ active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  margin-right: ${({ theme }) => theme.spacing.small};
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.surfaceVariant};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const FilterButtonText = styled(Text)<{ active?: boolean }>`
  font-size: 14px;
  color: ${({ active, theme }) => 
    active ? theme.colors.onPrimary : theme.colors.onSurfaceVariant};
  font-weight: 500;
`;

const LessonHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const LessonTitleContainer = styled(View)`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing.medium};
`;

const LessonTitle = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const LessonIrishTitle = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  font-style: italic;
`;

const DifficultyBadge = styled(View)<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 4px ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const DifficultyText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onPrimary};
  font-weight: 600;
  text-transform: capitalize;
`;

const LessonDescription = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const LessonFooter = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LessonDuration = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const ParticipantsText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const CompletedText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
`;

const LessonsList = styled(View)`
  padding-bottom: ${({ theme }) => theme.spacing.large};
`;

export const LearnScreen: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<DanceLesson | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');

  const difficulties = ['All', 'beginner', 'intermediate', 'advanced'];

  const filteredLessons = danceLessons.filter(lesson => 
    filterDifficulty === 'All' || lesson.difficulty === filterDifficulty
  );

  const renderDifficultyFilter = () => (
    <FilterContainer 
      horizontal 
      showsHorizontalScrollIndicator={false}
    >
      {difficulties.map((difficulty) => (
        <FilterButton
          key={difficulty}
          active={filterDifficulty === difficulty}
          onPress={() => setFilterDifficulty(difficulty)}
          accessibilityLabel={`Filter by ${difficulty}`}
          accessibilityRole="button"
        >
          <FilterButtonText active={filterDifficulty === difficulty}>
            {difficulty}
          </FilterButtonText>
        </FilterButton>
      ))}
    </FilterContainer>
  );

  const renderLessonCard = ({ item }: { item: DanceLesson }) => (
    <CulturalCard
      key={item.id}
      culturalLevel="primary"
      onPress={() => setSelectedLesson(item)}
    >
      <LessonHeader>
        <LessonTitleContainer>
          <LessonTitle>{item.name.english}</LessonTitle>
          <LessonIrishTitle>{item.name.irish}</LessonIrishTitle>
        </LessonTitleContainer>
        <DifficultyBadge backgroundColor={difficultyColors[item.difficulty]}>
          <DifficultyText>{item.difficulty}</DifficultyText>
        </DifficultyBadge>
      </LessonHeader>
      
      <LessonDescription>
        {item.culturalContext.substring(0, 120)}...
      </LessonDescription>
      
      <LessonFooter>
        <LessonDuration>⏱️ {item.duration} min</LessonDuration>
        <ParticipantsText>👥 {item.participants} dancers</ParticipantsText>
        {item.completed && (
          <CompletedText>✅ Completed</CompletedText>
        )}
      </LessonFooter>
    </CulturalCard>
  );

  // Lesson Player View
  if (selectedLesson) {
    return (
      <Container>
        <SafeAreaView>
          <Header>
            <BackButton
              onPress={() => setSelectedLesson(null)}
              accessibilityLabel="Go back to lesson list"
              accessibilityRole="button"
            >
              <BackButtonText>← Back to Lessons</BackButtonText>
            </BackButton>
            <HeaderTitleContainer>
              <HeaderTitle>{selectedLesson.name.english}</HeaderTitle>
              <HeaderSubtitle>{selectedLesson.name.irish}</HeaderSubtitle>
            </HeaderTitleContainer>
          </Header>
          
          <DanceLessonPlayer
            danceName={selectedLesson.name.english}
            irishName={selectedLesson.name.irish}
            videoStreams={selectedLesson.videoStreams}
            musicVideo={selectedLesson.musicVideo}
            steps={selectedLesson.steps}
            culturalContext={{
              historicalOrigin: selectedLesson.region,
              significance: selectedLesson.culturalContext,
              regionalImportance: `Traditional dance from ${selectedLesson.region}`
            }}
            onStepComplete={(stepNumber) => {
              console.log('Step completed:', stepNumber);
            }}
            onLessonComplete={() => {
              console.log('Lesson completed:', selectedLesson.id);
              // Mark lesson as completed
              setSelectedLesson(null);
            }}
          />
        </SafeAreaView>
      </Container>
    );
  }

  // Lesson List View
  return (
    <Container>
      <SafeAreaView>
        <Content>
          <HeaderSection>
            <ScreenTitle>Foghlaim (Learn)</ScreenTitle>
            <ScreenSubtitle>
              Master authentic Irish ceili dances with step-by-step guidance
            </ScreenSubtitle>
          </HeaderSection>

          {renderDifficultyFilter()}

          <FlatList
            data={filteredLessons}
            keyExtractor={(item) => item.id}
            renderItem={renderLessonCard}
            contentContainerStyle={{ paddingBottom: CulturalTheme.spacing.large }}
          />
        </Content>
      </SafeAreaView>
    </Container>
  );
};