import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CulturalTheme } from '../theme/CulturalTheme';
import { DanceLessonPlayer } from '../components/DanceLessonPlayer';
import { ceiliDances, getDancesByDifficulty, CeiliDance } from '../data/ceiliDances';

interface DanceLesson extends CeiliDance {
  videoStreams: {
    overview: string;
    steps: string;
    music: string;
  };
  completed: boolean;
}

const mapDanceToLesson = (dance: CeiliDance): DanceLesson => ({
  ...dance,
  videoStreams: {
    overview: `${dance.id}_overview.mp4`,
    steps: `${dance.id}_steps.mp4`,
    music: `${dance.id}_music.mp4`,
  },
  completed: false,
});

const danceLessons: DanceLesson[] = ceiliDances.map(mapDanceToLesson);

const difficultyColors = {
  beginner: CulturalTheme.colors.success,
  intermediate: CulturalTheme.colors.warning,
  advanced: CulturalTheme.colors.error,
};

export const LearnScreen: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<DanceLesson | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');

  const difficulties = ['All', 'beginner', 'intermediate', 'advanced'];

  const filteredLessons = danceLessons.filter(lesson => 
    filterDifficulty === 'All' || lesson.difficulty === filterDifficulty
  );

  const renderDifficultyFilter = () => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.filterContainer}
    >
      {difficulties.map((difficulty) => (
        <TouchableOpacity
          key={difficulty}
          style={[
            styles.filterButton,
            filterDifficulty === difficulty && styles.filterButtonActive
          ]}
          onPress={() => setFilterDifficulty(difficulty)}
          accessibilityLabel={`Filter by ${difficulty}`}
          accessibilityRole="button"
        >
          <Text style={[
            styles.filterButtonText,
            filterDifficulty === difficulty && styles.filterButtonTextActive
          ]}>
            {difficulty}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderLessonCard = ({ item }: { item: DanceLesson }) => (
    <TouchableOpacity
      style={styles.lessonCard}
      onPress={() => setSelectedLesson(item)}
      accessibilityLabel={`Learn ${item.name.english}, ${item.difficulty} level, ${item.duration} minutes`}
      accessibilityRole="button"
    >
      <View style={styles.lessonHeader}>
        <View style={styles.lessonTitleContainer}>
          <Text style={styles.lessonTitle}>{item.name.english}</Text>
          <Text style={styles.lessonIrishTitle}>{item.name.irish}</Text>
        </View>
        <View style={[
          styles.difficultyBadge,
          { backgroundColor: difficultyColors[item.difficulty] }
        ]}>
          <Text style={styles.difficultyText}>{item.difficulty}</Text>
        </View>
      </View>
      
      <Text style={styles.lessonDescription}>{item.culturalContext.substring(0, 120)}...</Text>
      
      <View style={styles.lessonFooter}>
        <Text style={styles.lessonDuration}>⏱️ {item.duration} min</Text>
        <Text style={styles.participantsText}>👥 {item.participants} dancers</Text>
        {item.completed && (
          <Text style={styles.completedText}>✅ Completed</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  if (selectedLesson) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedLesson(null)}
            accessibilityLabel="Go back to lesson list"
            accessibilityRole="button"
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>{selectedLesson.name.english}</Text>
            <Text style={styles.headerSubtitle}>{selectedLesson.name.irish}</Text>
          </View>
        </View>
        
        <DanceLessonPlayer
          lessonId={selectedLesson.id}
          videoStreams={selectedLesson.videoStreams}
          onComplete={() => {
            // Mark lesson as completed
            console.log('Lesson completed:', selectedLesson.id);
          }}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Text style={styles.screenTitle}>Foghlaim (Learn)</Text>
          <Text style={styles.screenSubtitle}>
            Master authentic Irish ceili dances with step-by-step guidance
          </Text>
        </View>

        {renderDifficultyFilter()}

        <FlatList
          data={filteredLessons}
          keyExtractor={(item) => item.id}
          renderItem={renderLessonCard}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lessonsList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CulturalTheme.colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: CulturalTheme.spacing.medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: CulturalTheme.spacing.medium,
    paddingVertical: CulturalTheme.spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: CulturalTheme.colors.backgroundSecondary,
  },
  backButton: {
    marginRight: CulturalTheme.spacing.medium,
  },
  backButtonText: {
    fontSize: 16,
    color: CulturalTheme.colors.primary,
    fontWeight: '600',
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
  },
  headerSubtitle: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    fontStyle: 'italic',
  },
  headerSection: {
    paddingVertical: CulturalTheme.spacing.large,
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: CulturalTheme.colors.primary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.small,
  },
  screenSubtitle: {
    fontSize: 16,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
  },
  filterContainer: {
    marginVertical: CulturalTheme.spacing.medium,
  },
  filterButton: {
    paddingHorizontal: CulturalTheme.spacing.medium,
    paddingVertical: CulturalTheme.spacing.small,
    marginRight: CulturalTheme.spacing.small,
    backgroundColor: CulturalTheme.colors.backgroundSecondary,
    borderRadius: CulturalTheme.borderRadius.small,
  },
  filterButtonActive: {
    backgroundColor: CulturalTheme.colors.primary,
  },
  filterButtonText: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: CulturalTheme.colors.surface,
  },
  lessonsList: {
    paddingBottom: CulturalTheme.spacing.large,
  },
  lessonCard: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    marginBottom: CulturalTheme.spacing.medium,
    ...CulturalTheme.elevation.small,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: CulturalTheme.spacing.medium,
  },
  lessonTitleContainer: {
    flex: 1,
    marginRight: CulturalTheme.spacing.medium,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.small,
  },
  lessonIrishTitle: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    fontStyle: 'italic',
  },
  difficultyBadge: {
    paddingHorizontal: CulturalTheme.spacing.small,
    paddingVertical: 4,
    borderRadius: CulturalTheme.borderRadius.small,
  },
  difficultyText: {
    fontSize: 12,
    color: CulturalTheme.colors.surface,
    fontWeight: '600',
  },
  lessonDescription: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: CulturalTheme.spacing.medium,
  },
  lessonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lessonDuration: {
    fontSize: 12,
    color: CulturalTheme.colors.textSecondary,
  },
  completedText: {
    fontSize: 12,
    color: CulturalTheme.colors.success,
    fontWeight: '600',
  },
  participantsText: {
    fontSize: 12,
    color: CulturalTheme.colors.textSecondary,
  },
});