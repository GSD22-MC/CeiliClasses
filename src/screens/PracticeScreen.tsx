import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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

export const PracticeScreen: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<PracticeMode | null>(null);
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  const renderModeSelection = () => (
    <ScrollView style={styles.content}>
      <View style={styles.headerSection}>
        <Text style={styles.screenTitle}>Cleachtadh (Practice)</Text>
        <Text style={styles.screenSubtitle}>
          Improve your skills with focused practice sessions
        </Text>
      </View>

      <View style={styles.modesGrid}>
        {practiceModes.map((mode) => (
          <TouchableOpacity
            key={mode.id}
            style={styles.modeCard}
            onPress={() => setSelectedMode(mode)}
            accessibilityLabel={`Practice ${mode.title}: ${mode.description}`}
            accessibilityRole="button"
          >
            <Text style={styles.modeIcon}>{mode.icon}</Text>
            <Text style={styles.modeTitle}>{mode.title}</Text>
            <Text style={styles.modeDescription}>{mode.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Your Progress</Text>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Terms Mastered</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Practice Sessions</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>0%</Text>
          <Text style={styles.statLabel}>Accuracy Rate</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderPronunciationPractice = () => (
    <View style={styles.practiceContainer}>
      <View style={styles.practiceHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedMode(null)}
          accessibilityLabel="Go back to practice modes"
          accessibilityRole="button"
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.practiceTitle}>Irish Pronunciation</Text>
      </View>

      <PronunciationPractice
        terms={irishTerms}
        onComplete={() => {
          console.log('Pronunciation practice completed');
          setSelectedMode(null);
        }}
      />
    </View>
  );

  const renderStepPractice = () => (
    <View style={styles.practiceContainer}>
      <View style={styles.practiceHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedMode(null)}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.practiceTitle}>Step Practice</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.comingSoonCard}>
          <Text style={styles.comingSoonIcon}>🚧</Text>
          <Text style={styles.comingSoonTitle}>Coming Soon</Text>
          <Text style={styles.comingSoonDescription}>
            Interactive step practice with motion tracking and feedback is in development.
            Check back soon for guided step-by-step practice sessions!
          </Text>
        </View>
      </ScrollView>
    </View>
  );

  const renderMusicPractice = () => (
    <View style={styles.practiceContainer}>
      <View style={styles.practiceHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedMode(null)}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.practiceTitle}>Musical Timing</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.comingSoonCard}>
          <Text style={styles.comingSoonIcon}>🎵</Text>
          <Text style={styles.comingSoonTitle}>Coming Soon</Text>
          <Text style={styles.comingSoonDescription}>
            Rhythm training and musical timing practice with traditional Irish tunes
            is being developed. Practice dancing to the beat with guided audio cues!
          </Text>
        </View>
      </ScrollView>
    </View>
  );

  const renderQuizPractice = () => (
    <View style={styles.practiceContainer}>
      <View style={styles.practiceHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedMode(null)}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.practiceTitle}>Cultural Quiz</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.comingSoonCard}>
          <Text style={styles.comingSoonIcon}>🧠</Text>
          <Text style={styles.comingSoonTitle}>Coming Soon</Text>
          <Text style={styles.comingSoonDescription}>
            Interactive quizzes about Irish culture, history, and traditional dances
            are in development. Test your cultural knowledge and learn fascinating facts!
          </Text>
        </View>
      </ScrollView>
    </View>
  );

  if (!selectedMode) {
    return (
      <SafeAreaView style={styles.container}>
        {renderModeSelection()}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {selectedMode.type === 'pronunciation' && renderPronunciationPractice()}
      {selectedMode.type === 'steps' && renderStepPractice()}
      {selectedMode.type === 'music' && renderMusicPractice()}
      {selectedMode.type === 'quiz' && renderQuizPractice()}
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
  modesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: CulturalTheme.spacing.large,
  },
  modeCard: {
    width: '48%',
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    alignItems: 'center',
    marginBottom: CulturalTheme.spacing.medium,
    ...CulturalTheme.elevation.small,
  },
  modeIcon: {
    fontSize: 40,
    marginBottom: CulturalTheme.spacing.medium,
  },
  modeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.small,
  },
  modeDescription: {
    fontSize: 12,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 16,
  },
  statsSection: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    ...CulturalTheme.elevation.small,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.medium,
    textAlign: 'center',
  },
  statCard: {
    alignItems: 'center',
    marginBottom: CulturalTheme.spacing.medium,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CulturalTheme.colors.primary,
  },
  statLabel: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    marginTop: CulturalTheme.spacing.small,
  },
  practiceContainer: {
    flex: 1,
  },
  practiceHeader: {
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
  practiceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
  },
  comingSoonCard: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.extraLarge,
    alignItems: 'center',
    marginTop: CulturalTheme.spacing.extraLarge,
    ...CulturalTheme.elevation.small,
  },
  comingSoonIcon: {
    fontSize: 48,
    marginBottom: CulturalTheme.spacing.medium,
  },
  comingSoonTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.medium,
  },
  comingSoonDescription: {
    fontSize: 16,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});