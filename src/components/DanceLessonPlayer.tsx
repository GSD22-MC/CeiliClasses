import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  PanGestureHandler,
  State,
} from 'react-native';
import { Surface, Button, IconButton, ProgressBar } from 'react-native-paper';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import { PanGestureHandler, State as GestureState } from 'react-native-gesture-handler';

import { CulturalTheme, CulturalSpacing, CulturalBorderRadius } from '../theme/CulturalTheme';
import { PronunciationButton } from './PronunciationButton';

interface DanceStep {
  stepNumber: number;
  irishTerm: string;
  phonetic: string;
  english: string;
  description: string;
  videoSegment: {
    startTime: number;
    endTime: number;
  };
  culturalNote: string;
}

interface DanceLessonPlayerProps {
  danceName: string;
  irishName: string;
  videoStreams: {
    frontView: string;
    sideView: string;
    overhead: string;
  };
  steps: DanceStep[];
  culturalContext: {
    historicalOrigin: string;
    significance: string;
    regionalImportance: string;
  };
  onStepComplete?: (stepNumber: number) => void;
  onLessonComplete?: () => void;
}

const { width } = Dimensions.get('window');
const videoHeight = (width * 9) / 16; // 16:9 aspect ratio

export const DanceLessonPlayer: React.FC<DanceLessonPlayerProps> = ({
  danceName,
  irishName,
  videoStreams,
  steps,
  culturalContext,
  onStepComplete,
  onLessonComplete,
}) => {
  const [currentView, setCurrentView] = useState<'frontView' | 'sideView' | 'overhead'>('frontView');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showCulturalContext, setShowCulturalContext] = useState(false);
  const [gestureStartTime, setGestureStartTime] = useState(0);

  const videoRef = useRef<Video>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  const currentStepData = steps[currentStep];
  const isStepMode = currentStepData && currentTime >= currentStepData.videoSegment.startTime && currentTime <= currentStepData.videoSegment.endTime;

  useEffect(() => {
    // Auto-hide controls after 3 seconds
    if (showControls) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [showControls]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowControls(true);
  };

  const changePlaybackSpeed = () => {
    const speeds = [0.5, 0.75, 1.0, 1.25];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
    setShowControls(true);
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      const step = steps[stepIndex];
      setCurrentStep(stepIndex);
      videoRef.current?.seek(step.videoSegment.startTime);
      setShowControls(true);
    }
  };

  const markStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      const newCompletedSteps = [...completedSteps, currentStep];
      setCompletedSteps(newCompletedSteps);
      onStepComplete?.(currentStep);

      // Check if all steps are completed
      if (newCompletedSteps.length === steps.length) {
        Alert.alert(
          'Lesson Complete!',
          `Maith thú! (Well done!) You've completed learning ${danceName}. You now know a traditional Irish ceili dance!`,
          [
            {
              text: 'Continue',
              onPress: () => onLessonComplete?.(),
            },
          ]
        );
      } else {
        // Move to next step
        if (currentStep < steps.length - 1) {
          setTimeout(() => goToStep(currentStep + 1), 1000);
        }
      }
    }
  };

  const onVideoProgress = (data: any) => {
    setCurrentTime(data.currentTime);
    
    // Check if current step segment is completed
    if (currentStepData && data.currentTime >= currentStepData.videoSegment.endTime) {
      setIsPlaying(false);
    }
  };

  const onVideoLoad = (data: any) => {
    setDuration(data.duration);
  };

  const onSwipeGesture = (event: any) => {
    const { translationX, state } = event.nativeEvent;
    
    if (state === GestureState.BEGAN) {
      setGestureStartTime(currentTime);
    } else if (state === GestureState.END) {
      const swipeThreshold = 50;
      
      if (Math.abs(translationX) > swipeThreshold) {
        if (translationX > 0) {
          // Swipe right - next step
          if (currentStep < steps.length - 1) {
            goToStep(currentStep + 1);
          }
        } else {
          // Swipe left - previous step
          if (currentStep > 0) {
            goToStep(currentStep - 1);
          }
        }
      }
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getViewIcon = (view: string) => {
    switch (view) {
      case 'frontView': return 'person';
      case 'sideView': return 'rotate-90-degrees-ccw';
      case 'overhead': return 'keyboard-arrow-up';
      default: return 'person';
    }
  };

  return (
    <View style={styles.container}>
      {/* Cultural Context Banner */}
      {showCulturalContext && (
        <Surface style={styles.culturalBanner} elevation={2}>
          <Text style={styles.culturalTitle}>Cultural Significance</Text>
          <Text style={styles.culturalText}>{culturalContext.significance}</Text>
          <Button
            mode="text"
            onPress={() => setShowCulturalContext(false)}
            compact
          >
            Close
          </Button>
        </Surface>
      )}

      {/* Video Player */}
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={() => setShowControls(!showControls)}
        activeOpacity={1}
      >
        <Video
          ref={videoRef}
          source={{ uri: videoStreams[currentView] }}
          style={styles.video}
          resizeMode="contain"
          paused={!isPlaying}
          rate={playbackSpeed}
          onProgress={onVideoProgress}
          onLoad={onVideoLoad}
          onError={(error) => console.error('Video error:', error)}
        />

        {/* Video Controls Overlay */}
        {showControls && (
          <View style={styles.controlsOverlay}>
            {/* Top Controls */}
            <View style={styles.topControls}>
              <Text style={styles.videoTitle}>{danceName}</Text>
              <PronunciationButton
                text={irishName}
                audioUrl={`https://example.com/audio/${irishName.toLowerCase().replace(' ', '-')}.mp3`}
                size="small"
              />
            </View>

            {/* Center Play Button */}
            <TouchableOpacity style={styles.centerPlayButton} onPress={togglePlayPause}>
              <Icon
                name={isPlaying ? 'pause' : 'play-arrow'}
                size={60}
                color={CulturalTheme.colors.onPrimary}
              />
            </TouchableOpacity>

            {/* Bottom Controls */}
            <View style={styles.bottomControls}>
              <View style={styles.progressContainer}>
                <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                <Slider
                  style={styles.progressSlider}
                  minimumValue={0}
                  maximumValue={duration}
                  value={currentTime}
                  onValueChange={(value) => videoRef.current?.seek(value)}
                  minimumTrackTintColor={CulturalTheme.colors.secondary}
                  maximumTrackTintColor={CulturalTheme.colors.outline}
                  thumbStyle={{ backgroundColor: CulturalTheme.colors.secondary }}
                />
                <Text style={styles.timeText}>{formatTime(duration)}</Text>
              </View>

              <View style={styles.controlButtons}>
                <IconButton
                  icon={() => <Text style={styles.speedText}>{playbackSpeed}x</Text>}
                  onPress={changePlaybackSpeed}
                  size={20}
                  iconColor={CulturalTheme.colors.onPrimary}
                />
                
                <IconButton
                  icon="info"
                  onPress={() => setShowCulturalContext(true)}
                  size={20}
                  iconColor={CulturalTheme.colors.onPrimary}
                />
              </View>
            </View>
          </View>
        )}
      </TouchableOpacity>

      {/* View Selector */}
      <View style={styles.viewSelector}>
        {Object.keys(videoStreams).map((view) => (
          <TouchableOpacity
            key={view}
            style={[
              styles.viewButton,
              currentView === view && styles.activeViewButton,
            ]}
            onPress={() => setCurrentView(view as any)}
          >
            <Icon
              name={getViewIcon(view)}
              size={24}
              color={
                currentView === view
                  ? CulturalTheme.colors.onPrimary
                  : CulturalTheme.colors.onSurface
              }
            />
            <Text
              style={[
                styles.viewButtonText,
                currentView === view && styles.activeViewButtonText,
              ]}
            >
              {view === 'frontView' ? 'Front' : view === 'sideView' ? 'Side' : 'Top'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Current Step Information */}
      {currentStepData && (
        <Surface style={styles.stepInfo} elevation={2}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepNumber}>Step {currentStepData.stepNumber}</Text>
            <Text style={styles.stepTitle}>{currentStepData.english}</Text>
            {completedSteps.includes(currentStep) && (
              <Icon name="check-circle" size={24} color={CulturalTheme.colors.tertiary} />
            )}
          </View>

          <PronunciationButton
            text={`${currentStepData.irishTerm} (${currentStepData.phonetic})`}
            audioUrl={`https://example.com/audio/${currentStepData.irishTerm.toLowerCase()}.mp3`}
            size="medium"
            style={styles.stepPronunciation}
          />

          <Text style={styles.stepDescription}>{currentStepData.description}</Text>
          
          {currentStepData.culturalNote && (
            <View style={styles.culturalNote}>
              <Icon name="info" size={16} color={CulturalTheme.colors.primary} />
              <Text style={styles.culturalNoteText}>{currentStepData.culturalNote}</Text>
            </View>
          )}

          <Button
            mode="contained"
            onPress={markStepComplete}
            disabled={completedSteps.includes(currentStep)}
            style={styles.completeStepButton}
          >
            {completedSteps.includes(currentStep) ? 'Step Completed' : 'Mark Step Complete'}
          </Button>
        </Surface>
      )}

      {/* Step Navigation with Gesture Support */}
      <PanGestureHandler onGestureEvent={onSwipeGesture}>
        <View style={styles.stepNavigation}>
          <Text style={styles.navigationTitle}>Dance Steps</Text>
          <Text style={styles.swipeHint}>Swipe left/right to navigate steps</Text>
          <View style={styles.stepButtons}>
            {steps.map((step, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.stepNavigationButton,
                  currentStep === index && styles.currentStepButton,
                  completedSteps.includes(index) && styles.completedStepButton,
                ]}
                onPress={() => goToStep(index)}
                accessibilityLabel={`Dance step ${index + 1}${completedSteps.includes(index) ? ' completed' : ''}`}
                accessibilityRole="button"
                accessibilityState={{ selected: currentStep === index }}
              >
                <Text
                  style={[
                    styles.stepNavigationText,
                    (currentStep === index || completedSteps.includes(index)) &&
                      styles.activeStepNavigationText,
                  ]}
                >
                  {index + 1}
                </Text>
                {completedSteps.includes(index) && (
                  <Icon
                    name="check"
                    size={12}
                    color={CulturalTheme.colors.onTertiary}
                    style={styles.stepCheckmark}
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CulturalTheme.colors.background,
  },
  culturalBanner: {
    backgroundColor: CulturalTheme.colors.primaryContainer,
    padding: CulturalSpacing.md,
    margin: CulturalSpacing.md,
    borderRadius: CulturalBorderRadius.md,
  },
  culturalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: CulturalTheme.colors.onPrimaryContainer,
    marginBottom: CulturalSpacing.sm,
  },
  culturalText: {
    fontSize: 14,
    color: CulturalTheme.colors.onPrimaryContainer,
    lineHeight: 20,
    marginBottom: CulturalSpacing.md,
  },
  videoContainer: {
    width,
    height: videoHeight,
    backgroundColor: '#000',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  controlsOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'space-between',
  },
  topControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: CulturalSpacing.md,
    paddingTop: CulturalSpacing.xl,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: CulturalTheme.colors.onPrimary,
    flex: 1,
  },
  centerPlayButton: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 40,
    padding: CulturalSpacing.md,
  },
  bottomControls: {
    padding: CulturalSpacing.md,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: CulturalSpacing.sm,
  },
  timeText: {
    fontSize: 12,
    color: CulturalTheme.colors.onPrimary,
    fontWeight: '500',
  },
  progressSlider: {
    flex: 1,
    marginHorizontal: CulturalSpacing.sm,
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  speedText: {
    fontSize: 12,
    fontWeight: '600',
    color: CulturalTheme.colors.onPrimary,
  },
  viewSelector: {
    flexDirection: 'row',
    backgroundColor: CulturalTheme.colors.surface,
    paddingVertical: CulturalSpacing.sm,
  },
  viewButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: CulturalSpacing.sm,
    borderRadius: CulturalBorderRadius.sm,
    marginHorizontal: CulturalSpacing.xs,
  },
  activeViewButton: {
    backgroundColor: CulturalTheme.colors.primary,
  },
  viewButtonText: {
    fontSize: 12,
    color: CulturalTheme.colors.onSurface,
    marginTop: CulturalSpacing.xs,
  },
  activeViewButtonText: {
    color: CulturalTheme.colors.onPrimary,
    fontWeight: '600',
  },
  stepInfo: {
    backgroundColor: CulturalTheme.colors.surface,
    margin: CulturalSpacing.md,
    padding: CulturalSpacing.lg,
    borderRadius: CulturalBorderRadius.lg,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: CulturalSpacing.md,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: CulturalTheme.colors.primary,
    marginRight: CulturalSpacing.sm,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: CulturalTheme.colors.onSurface,
    flex: 1,
  },
  stepPronunciation: {
    alignSelf: 'flex-start',
    marginBottom: CulturalSpacing.md,
  },
  stepDescription: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurface,
    lineHeight: 20,
    marginBottom: CulturalSpacing.md,
  },
  culturalNote: {
    flexDirection: 'row',
    backgroundColor: CulturalTheme.colors.primaryContainer,
    borderRadius: CulturalBorderRadius.sm,
    padding: CulturalSpacing.sm,
    marginBottom: CulturalSpacing.md,
    gap: CulturalSpacing.sm,
  },
  culturalNoteText: {
    fontSize: 12,
    color: CulturalTheme.colors.onPrimaryContainer,
    flex: 1,
    lineHeight: 16,
  },
  completeStepButton: {
    borderRadius: CulturalBorderRadius.md,
  },
  stepNavigation: {
    backgroundColor: CulturalTheme.colors.surface,
    padding: CulturalSpacing.md,
  },
  navigationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: CulturalTheme.colors.onSurface,
    marginBottom: CulturalSpacing.sm,
  },
  swipeHint: {
    fontSize: 12,
    color: CulturalTheme.colors.onSurfaceVariant,
    marginBottom: CulturalSpacing.md,
    textAlign: 'center',
  },
  stepButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: CulturalSpacing.sm,
  },
  stepNavigationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: CulturalTheme.colors.outline,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  currentStepButton: {
    backgroundColor: CulturalTheme.colors.primary,
  },
  completedStepButton: {
    backgroundColor: CulturalTheme.colors.tertiary,
  },
  stepNavigationText: {
    fontSize: 14,
    fontWeight: '600',
    color: CulturalTheme.colors.onSurface,
  },
  activeStepNavigationText: {
    color: CulturalTheme.colors.onPrimary,
  },
  stepCheckmark: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: 6,
  },
});