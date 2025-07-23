import React, { useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { View, Text, TouchableOpacity, Icon } from './ui';
import { CulturalCard } from './ui/CulturalCard';
import { PronunciationButton } from './PronunciationButton';
import { useAuthStore } from '../stores/authStore';

interface PronunciationPracticeProps {
  terms: Array<{
    term: string;
    pronunciation: string;
    definition: string;
    audioUrl: string;
  }>;
  onComplete: () => void;
}

interface PronunciationTerm {
  term: string;
  pronunciation: string;
  definition: string;
  audioUrl: string;
}

// Styled Components
const Container = styled(CulturalCard)`
  margin: ${({ theme }) => theme.spacing.medium};
`;

const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const IrishTerm = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const PhoneticButton = styled(View)`
  align-self: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const InfoSection = styled(View)`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const Meaning = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const CulturalContext = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  line-height: 1.4;
  font-style: italic;
`;

const ProgressSection = styled(View)`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const ProgressHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const ProgressLabel = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
`;

const AttemptsText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const ProgressBar = styled.div<{ progress: number; color: string }>`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.outline}20;
  border-radius: 4px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    width: ${({ progress }) => Math.max(0, Math.min(100, progress * 100))}%;
    height: 100%;
    background-color: ${({ color }) => color};
    transition: width 0.3s ease;
  }
`;

const RecordingSection = styled(View)`
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const RecordButton = styled(TouchableOpacity)<{ recording?: boolean }>`
  background-color: ${({ recording, theme }) => 
    recording ? theme.colors.error : theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.elevation.medium.boxShadow};
  }
`;

const RecordButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 16px;
  font-weight: 600;
`;

const ProcessingContainer = styled(View)`
  margin-top: ${({ theme }) => theme.spacing.medium};
  align-items: center;
`;

const ProcessingText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  font-style: italic;
`;

const FeedbackSection = styled(View)`
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const FeedbackText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const ScoreText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  font-weight: 600;
`;

const MasteryBanner = styled(View)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const MasteryText = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onTertiary};
`;

const TermNavigation = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const NavButton = styled(TouchableOpacity)<{ disabled?: boolean }>`
  padding: ${({ theme }) => theme.spacing.small};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

const TermCounter = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  font-weight: 500;
`;

export const PronunciationPractice: React.FC<PronunciationPracticeProps> = ({
  terms,
  onComplete,
}) => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const currentTerm = terms[currentTermIndex];
  const targetScore = 0.8;
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [feedback, setFeedback] = useState<string>('');
  const [hasPermission, setHasPermission] = useState(false);

  const theme = useTheme();
  const { updatePronunciationProgress } = useAuthStore();

  const requestAudioPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop()); // Stop the stream immediately
      setHasPermission(true);
      return true;
    } catch (err) {
      console.error('Permission request error:', err);
      setHasPermission(false);
      return false;
    }
  };

  const startRecording = async () => {
    const permission = hasPermission || await requestAudioPermission();
    
    if (!permission) {
      alert('Permission Required: Please grant microphone permission to practice pronunciation.');
      return;
    }

    try {
      setIsRecording(true);
      setFeedback('');
      
      // Web-based recording simulation (would need actual Web Audio API implementation)
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Simulate recording for demo purposes
      setTimeout(() => {
        if (isRecording) {
          stopRecording();
        }
      }, 3000); // Auto-stop after 3 seconds
    } catch (error) {
      console.error('Failed to start recording:', error);
      setIsRecording(false);
    }
  };

  const stopRecording = async () => {
    try {
      setIsRecording(false);
      setIsProcessing(true);

      // Analyze pronunciation (simulated)
      await analyzePronunciation('');
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
          targetTerm: currentTerm.term,
          nativeAudioUrl: currentTerm.audioUrl,
        }),
      });

      const analysis = await response.json();
      
      setAttempts(prev => prev + 1);
      setLastScore(analysis.score);
      
      if (analysis.score > bestScore) {
        setBestScore(analysis.score);
        updatePronunciationProgress(currentTerm.term, analysis.score);
      }

      // Generate encouraging feedback
      const feedback = generateFeedback(analysis.score, analysis.feedback);
      setFeedback(feedback);

      // Check for mastery
      if (analysis.score >= targetScore) {
        // Move to next term or complete if all terms mastered
        if (currentTermIndex < terms.length - 1) {
          setTimeout(() => {
            setCurrentTermIndex(prev => prev + 1);
            setBestScore(0);
            setLastScore(0);
            setAttempts(0);
            setFeedback('');
          }, 2000);
        } else {
          setTimeout(() => {
            onComplete();
          }, 2000);
        }
      }

    } catch (error) {
      console.error('Failed to analyze pronunciation:', error);
      // Simulate a random score for demo purposes
      const simulatedScore = Math.random() * 0.6 + 0.3; // 0.3 to 0.9
      
      setAttempts(prev => prev + 1);
      setLastScore(simulatedScore);
      
      if (simulatedScore > bestScore) {
        setBestScore(simulatedScore);
        updatePronunciationProgress(currentTerm.term, simulatedScore);
      }
      
      const feedback = generateFeedback(simulatedScore, { tip: 'Keep practicing!' });
      setFeedback(feedback);
      
      if (simulatedScore >= targetScore) {
        if (currentTermIndex < terms.length - 1) {
          setTimeout(() => {
            setCurrentTermIndex(prev => prev + 1);
            setBestScore(0);
            setLastScore(0);
            setAttempts(0);
            setFeedback('');
          }, 2000);
        } else {
          setTimeout(() => {
            onComplete();
          }, 2000);
        }
      }
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
    if (score >= 0.8) return theme.colors.tertiary;
    if (score >= 0.6) return theme.colors.secondary;
    return theme.colors.outline;
  };

  const isMastered = bestScore >= targetScore;

  const goToPreviousTerm = () => {
    if (currentTermIndex > 0) {
      setCurrentTermIndex(prev => prev - 1);
      setBestScore(0);
      setLastScore(0);
      setAttempts(0);
      setFeedback('');
    }
  };

  const goToNextTerm = () => {
    if (currentTermIndex < terms.length - 1) {
      setCurrentTermIndex(prev => prev + 1);
      setBestScore(0);
      setLastScore(0);
      setAttempts(0);
      setFeedback('');
    }
  };

  if (!currentTerm) {
    return null;
  }

  return (
    <Container culturalLevel="primary">
      {/* Term Navigation */}
      <TermNavigation>
        <NavButton 
          onPress={goToPreviousTerm}
          disabled={currentTermIndex === 0}
        >
          <Icon name="arrow-back" size={20} />
        </NavButton>
        
        <TermCounter>
          {currentTermIndex + 1} of {terms.length}
        </TermCounter>
        
        <NavButton 
          onPress={goToNextTerm}
          disabled={currentTermIndex === terms.length - 1}
        >
          <Icon name="arrow-forward" size={20} />
        </NavButton>
      </TermNavigation>

      {/* Header */}
      <Header>
        <IrishTerm>{currentTerm.term}</IrishTerm>
        {isMastered && (
          <Icon name="verified" size={24} color={theme.colors.tertiary} />
        )}
      </Header>

      {/* Phonetic Guide */}
      <PhoneticButton>
        <PronunciationButton
          text={currentTerm.pronunciation}
          audioUrl={currentTerm.audioUrl}
          size="large"
        />
      </PhoneticButton>

      {/* Meaning and Context */}
      <InfoSection>
        <Meaning>{currentTerm.definition}</Meaning>
        <CulturalContext>
          Practice pronouncing this traditional Irish term correctly.
        </CulturalContext>
      </InfoSection>

      {/* Progress */}
      <ProgressSection>
        <ProgressHeader>
          <ProgressLabel>
            Best Score: {Math.round(bestScore * 100)}%
          </ProgressLabel>
          <AttemptsText>
            Attempts: {attempts}
          </AttemptsText>
        </ProgressHeader>
        <ProgressBar
          progress={bestScore}
          color={getScoreColor(bestScore)}
        />
      </ProgressSection>

      {/* Recording Section */}
      <RecordingSection>
        <RecordButton
          onPress={isRecording ? stopRecording : startRecording}
          disabled={isProcessing}
          recording={isRecording}
        >
          <Icon name={isRecording ? 'stop' : 'mic'} size={20} />
          <RecordButtonText>
            {isRecording ? 'Stop Recording' : 'Practice Pronunciation'}
          </RecordButtonText>
        </RecordButton>

        {isProcessing && (
          <ProcessingContainer>
            <ProcessingText>
              Analyzing your pronunciation...
            </ProcessingText>
          </ProcessingContainer>
        )}
      </RecordingSection>

      {/* Feedback */}
      {feedback && (
        <FeedbackSection>
          <FeedbackText>{feedback}</FeedbackText>
          {lastScore > 0 && (
            <ScoreText>
              Latest attempt: {Math.round(lastScore * 100)}%
            </ScoreText>
          )}
        </FeedbackSection>
      )}

      {/* Mastery Achievement */}
      {isMastered && (
        <MasteryBanner>
          <Icon name="celebration" size={20} color={theme.colors.onTertiary} />
          <MasteryText>
            Pronunciation Mastered! 
          </MasteryText>
        </MasteryBanner>
      )}
    </Container>
  );
};

