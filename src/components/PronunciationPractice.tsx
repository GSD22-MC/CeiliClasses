import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { Button, Surface, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

import { CulturalTheme, CulturalSpacing, CulturalBorderRadius } from '../theme/CulturalTheme';
import { PronunciationButton } from './PronunciationButton';
import { useAuthStore } from '../stores/authStore';

interface PronunciationPracticeProps {
  irishTerm: string;
  phonetic: string;
  nativeAudioUrl: string;
  meaning: string;
  culturalContext: string;
  onMastery?: (score: number) => void;
  targetScore?: number;
}

export const PronunciationPractice: React.FC<PronunciationPracticeProps> = ({
  irishTerm,
  phonetic,
  nativeAudioUrl,
  meaning,
  culturalContext,
  onMastery,
  targetScore = 0.8,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [feedback, setFeedback] = useState<string>('');
  const [hasPermission, setHasPermission] = useState(false);

  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;
  const { updatePronunciationProgress } = useAuthStore();

  const requestAudioPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Audio Recording Permission',
            message: 'CeiliClasses needs access to your microphone to help you practice Irish pronunciation.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.error('Permission request error:', err);
        return false;
      }
    }
    setHasPermission(true);
    return true;
  };

  const startRecording = async () => {
    const permission = hasPermission || await requestAudioPermission();
    
    if (!permission) {
      Alert.alert(
        'Permission Required',
        'Please grant microphone permission to practice pronunciation.',
      );
      return;
    }

    try {
      setIsRecording(true);
      setFeedback('');
      
      const path = Platform.select({
        ios: `pronunciation_${Date.now()}.m4a`,
        android: `${audioRecorderPlayer.mmSSS}.mp4`,
      });

      await audioRecorderPlayer.startRecorder(path);
      audioRecorderPlayer.addRecordBackListener((e) => {
        // Optional: Add recording timer here
      });
    } catch (error) {
      console.error('Failed to start recording:', error);
      setIsRecording(false);
    }
  };

  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setIsRecording(false);
      setIsProcessing(true);

      // Analyze pronunciation
      await analyzePronunciation(result);
    } catch (error) {
      console.error('Failed to stop recording:', error);
      setIsRecording(false);
      setIsProcessing(false);
    }
  };

  const analyzePronunciation = async (audioPath: string) => {
    try {
      // TODO: Replace with actual pronunciation analysis API
      const response = await fetch('http://localhost:3001/api/v1/pronunciation/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          audioPath,
          targetTerm: irishTerm,
          nativeAudioUrl,
        }),
      });

      const analysis = await response.json();
      
      setAttempts(prev => prev + 1);
      setLastScore(analysis.score);
      
      if (analysis.score > bestScore) {
        setBestScore(analysis.score);
        updatePronunciationProgress(irishTerm, analysis.score);
      }

      // Generate encouraging feedback
      const feedback = generateFeedback(analysis.score, analysis.feedback);
      setFeedback(feedback);

      // Check for mastery
      if (analysis.score >= targetScore) {
        onMastery?.(analysis.score);
      }

    } catch (error) {
      console.error('Failed to analyze pronunciation:', error);
      setFeedback('Sorry, we couldn\'t analyze your pronunciation. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const generateFeedback = (score: number, apiFeedback: any) => {
    const irishEncouragement = [
      'Maith thú! (Well done!)',
      'Ar fheabhas! (Excellent!)',
      'Go hiontach! (Wonderful!)',
    ];

    if (score >= 0.9) {
      return `${irishEncouragement[Math.floor(Math.random() * irishEncouragement.length)]} Your pronunciation is excellent!`;
    } else if (score >= 0.7) {
      return `Great progress! ${apiFeedback?.tip || 'Keep practicing for even better pronunciation.'}`;
    } else if (score >= 0.5) {
      return `Good effort! ${apiFeedback?.tip || 'Try listening to the native speaker again and focus on the rhythm.'}`;
    } else {
      return `Keep trying! ${apiFeedback?.tip || 'Listen carefully to how the native speaker pronounces each sound.'}`;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 0.8) return CulturalTheme.colors.tertiary;
    if (score >= 0.6) return CulturalTheme.colors.secondary;
    return CulturalTheme.colors.outline;
  };

  const isMastered = bestScore >= targetScore;

  return (
    <Surface style={styles.container} elevation={2}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.irishTerm}>{irishTerm}</Text>
        {isMastered && (
          <Icon name="verified" size={24} color={CulturalTheme.colors.tertiary} />
        )}
      </View>

      {/* Phonetic Guide */}
      <PronunciationButton
        text={phonetic}
        audioUrl={nativeAudioUrl}
        size="large"
        style={styles.phoneticButton}
      />

      {/* Meaning and Context */}
      <View style={styles.infoSection}>
        <Text style={styles.meaning}>{meaning}</Text>
        <Text style={styles.culturalContext}>{culturalContext}</Text>
      </View>

      {/* Progress */}
      <View style={styles.progressSection}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>
            Best Score: {Math.round(bestScore * 100)}%
          </Text>
          <Text style={styles.attemptsText}>
            Attempts: {attempts}
          </Text>
        </View>
        <ProgressBar
          progress={bestScore}
          color={getScoreColor(bestScore)}
          style={styles.progressBar}
        />
      </View>

      {/* Recording Section */}
      <View style={styles.recordingSection}>
        <Button
          mode={isRecording ? 'outlined' : 'contained'}
          onPress={isRecording ? stopRecording : startRecording}
          disabled={isProcessing}
          icon={isRecording ? 'stop' : 'mic'}
          style={styles.recordButton}
          contentStyle={styles.recordButtonContent}
        >
          {isRecording ? 'Stop Recording' : 'Practice Pronunciation'}
        </Button>

        {isProcessing && (
          <View style={styles.processingContainer}>
            <Text style={styles.processingText}>
              Analyzing your pronunciation...
            </Text>
          </View>
        )}
      </View>

      {/* Feedback */}
      {feedback && (
        <View style={styles.feedbackSection}>
          <Text style={styles.feedbackText}>{feedback}</Text>
          {lastScore > 0 && (
            <Text style={styles.scoreText}>
              Latest attempt: {Math.round(lastScore * 100)}%
            </Text>
          )}
        </View>
      )}

      {/* Mastery Achievement */}
      {isMastered && (
        <View style={styles.masteryBanner}>
          <Icon name="celebration" size={20} color={CulturalTheme.colors.onTertiary} />
          <Text style={styles.masteryText}>
            Pronunciation Mastered! 
          </Text>
        </View>
      )}
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalBorderRadius.lg,
    padding: CulturalSpacing.lg,
    margin: CulturalSpacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: CulturalSpacing.md,
  },
  irishTerm: {
    fontSize: 24,
    fontWeight: '700',
    color: CulturalTheme.colors.primary,
  },
  phoneticButton: {
    alignSelf: 'center',
    marginBottom: CulturalSpacing.lg,
  },
  infoSection: {
    marginBottom: CulturalSpacing.lg,
  },
  meaning: {
    fontSize: 16,
    fontWeight: '600',
    color: CulturalTheme.colors.onSurface,
    marginBottom: CulturalSpacing.sm,
  },
  culturalContext: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurfaceVariant,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  progressSection: {
    marginBottom: CulturalSpacing.lg,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: CulturalSpacing.sm,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: CulturalTheme.colors.onSurface,
  },
  attemptsText: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurfaceVariant,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  recordingSection: {
    alignItems: 'center',
    marginBottom: CulturalSpacing.lg,
  },
  recordButton: {
    borderRadius: CulturalBorderRadius.lg,
  },
  recordButtonContent: {
    paddingVertical: CulturalSpacing.sm,
    paddingHorizontal: CulturalSpacing.lg,
  },
  processingContainer: {
    marginTop: CulturalSpacing.md,
    alignItems: 'center',
  },
  processingText: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurfaceVariant,
    fontStyle: 'italic',
  },
  feedbackSection: {
    backgroundColor: CulturalTheme.colors.surfaceVariant,
    borderRadius: CulturalBorderRadius.md,
    padding: CulturalSpacing.md,
    marginBottom: CulturalSpacing.md,
  },
  feedbackText: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurface,
    textAlign: 'center',
    marginBottom: CulturalSpacing.sm,
  },
  scoreText: {
    fontSize: 12,
    color: CulturalTheme.colors.onSurfaceVariant,
    textAlign: 'center',
    fontWeight: '600',
  },
  masteryBanner: {
    backgroundColor: CulturalTheme.colors.tertiary,
    borderRadius: CulturalBorderRadius.md,
    padding: CulturalSpacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: CulturalSpacing.sm,
  },
  masteryText: {
    fontSize: 14,
    fontWeight: '600',
    color: CulturalTheme.colors.onTertiary,
  },
});