import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, FlatList } from '../components/ui';
import { CulturalCard } from '../components/ui/CulturalCard';
import { CulturalTheme } from '../theme/CulturalTheme';
import { DanceLessonPlayer } from '../components/DanceLessonPlayer';
import { ceiliDances, getDancesByDifficulty, CeiliDance } from '../data/ceiliDances';

// YouTube video mappings for each dance
const danceVideoMappings: Record<string, {
  frontView: string;
  sideView?: string;
  overhead?: string;
  musicVideo?: string;
  stepTimings?: number[]; // Custom start times for each step in the video
}> = {
  'walls-of-limerick': {
    frontView: 'aINBVlT5Qs8', // The Walls of Limerick instruction video
    // Based on the video, we can set more accurate step timings later
    stepTimings: [0, 45, 90, 135], // Rough estimates, can be fine-tuned
  },
  // 
  // To add more videos, use this format:
  // 'dance-id': {
  //   frontView: 'YOUTUBE_VIDEO_ID',
  //   sideView: 'OPTIONAL_SIDE_VIEW_ID', 
  //   overhead: 'OPTIONAL_OVERHEAD_VIEW_ID',
  //   musicVideo: 'OPTIONAL_MUSIC_VIDEO_ID',
  //   stepTimings: [0, 30, 60, 90], // Optional: custom timings for each step
  // },
};

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
  // Convert steps from old format to new format
  steps: dance.steps.map((step: any, index: number) => {
    const customTimings = danceVideoMappings[dance.id]?.stepTimings;
    const startTime = customTimings?.[index] ?? index * 30;
    const endTime = customTimings?.[index + 1] ?? (index + 1) * 30;
    
    return {
      stepNumber: index + 1,
      name: typeof step.name === 'object' ? step.name.english : step.name,
      description: step.description,
      videoSegment: {
        startTime,
        endTime,
      },
      culturalNote: step.tips ? step.tips[0] : undefined,
    };
  }),
  videoStreams: {
    frontView: danceVideoMappings[dance.id]?.frontView || `${dance.id}_front`,
    sideView: danceVideoMappings[dance.id]?.sideView || `${dance.id}_side`,
    overhead: danceVideoMappings[dance.id]?.overhead || `${dance.id}_overhead`,
  },
  musicVideo: danceVideoMappings[dance.id]?.musicVideo || `${dance.id}_music`,
  completed: false,
});

const danceLessons: DanceLesson[] = ceiliDances.map(mapDanceToLesson);

const getDifficultyColor = (difficulty: string, theme: any) => {
  switch (difficulty) {
    case 'beginner': return theme.colors.tertiary;
    case 'intermediate': return theme.colors.secondary;
    case 'advanced': return theme.colors.primary;
    default: return theme.colors.primary;
  }
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

const StyledFlatList = styled(FlatList)`
  padding-bottom: ${({ theme }) => theme.spacing.large};
`;

export const LearnScreen: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<DanceLesson | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');
  const theme = useTheme();

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
        </LessonTitleContainer>
        <DifficultyBadge backgroundColor={getDifficultyColor(item.difficulty, theme)}>
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
            </HeaderTitleContainer>
          </Header>
          
          <DanceLessonPlayer
            danceName={selectedLesson.name.english}
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
            <ScreenTitle>Learn</ScreenTitle>
            <ScreenSubtitle>
              Master authentic Irish ceili dances with step-by-step guidance
            </ScreenSubtitle>
          </HeaderSection>

          {renderDifficultyFilter()}

          <StyledFlatList
            data={filteredLessons}
            keyExtractor={(item) => item.id}
            renderItem={renderLessonCard}
          />
        </Content>
      </SafeAreaView>
    </Container>
  );
};