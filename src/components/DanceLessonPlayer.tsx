import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { CulturalTheme } from '../theme/CulturalTheme';
import { PronunciationButton } from './PronunciationButton';
import { DanceFormation3D } from './DanceFormation3D';

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
    frontView: string; // YouTube video ID
    sideView: string;  // YouTube video ID
    overhead: string;  // YouTube video ID
  };
  musicVideo?: string; // YouTube video ID for background music
  steps: DanceStep[];
  culturalContext: {
    historicalOrigin: string;
    significance: string;
    regionalImportance: string;
  };
  onStepComplete?: (stepNumber: number) => void;
  onLessonComplete?: () => void;
}

type ViewType = 'frontView' | 'sideView' | 'overhead' | '3d';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

const CulturalBanner = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.primaryContainer};
  padding: ${({ theme }) => theme.spacing.medium};
  margin: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.elevation.low.boxShadow};
`;

const CulturalTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onPrimaryContainer};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const CulturalText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.onPrimaryContainer};
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.onPrimaryContainer};
  cursor: pointer;
  font-size: 0.875rem;
  text-decoration: underline;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #000;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  position: relative;
`;

const ViewSelector = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.small} 0;
  gap: ${({ theme }) => theme.spacing.small};
  justify-content: center;
`;

const ViewButton = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.small};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) =>
    active ? theme.colors.onPrimary : theme.colors.onSurface};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.surfaceVariant};
  }
`;

const ViewIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ViewLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
`;

const StepInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  margin: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.elevation.medium.boxShadow};
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.small};
`;

const StepNumber = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const StepTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  flex: 1;
  margin: 0;
`;

const StepDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.onSurface};
  line-height: 1.4;
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const CulturalNote = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primaryContainer};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.medium} 0;
  gap: ${({ theme }) => theme.spacing.small};
`;

const CulturalNoteText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.onPrimaryContainer};
  line-height: 1.3;
  margin: 0;
  flex: 1;
`;

const CompleteStepButton = styled.button<{ completed: boolean }>`
  background-color: ${({ completed, theme }) =>
    completed ? theme.colors.tertiary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  border: none;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  cursor: ${({ completed }) => (completed ? 'default' : 'pointer')};
  opacity: ${({ completed }) => (completed ? 0.7 : 1)};
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    opacity: ${({ completed }) => (completed ? 0.7 : 0.9)};
  }
`;

const StepNavigation = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.medium};
`;

const NavigationTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const StepButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small};
  justify-content: center;
`;

const StepNavigationButton = styled.button<{
  current: boolean;
  completed: boolean;
}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${({ current, completed, theme }) =>
    current
      ? theme.colors.primary
      : completed
      ? theme.colors.tertiary
      : theme.colors.outline};
  color: ${({ current, completed, theme }) =>
    current || completed ? theme.colors.onPrimary : theme.colors.onSurface};
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const MusicPlayer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.elevation.high.boxShadow};
  z-index: 1000;
`;

const MusicHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.medium} 
    ${({ theme }) => theme.borderRadius.medium} 0 0;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
`;

export const DanceLessonPlayer: React.FC<DanceLessonPlayerProps> = ({
  danceName,
  irishName,
  videoStreams,
  musicVideo,
  steps,
  culturalContext,
  onStepComplete,
  onLessonComplete,
}) => {
  const [currentView, setCurrentView] = useState<ViewType>('frontView');
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showCulturalContext, setShowCulturalContext] = useState(false);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);

  const videoRef = useRef<any>(null);
  const musicRef = useRef<any>(null);

  const currentStepData = steps[currentStep];

  const videoOptions = {
    height: '450',
    width: '800',
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      start: currentStepData?.videoSegment.startTime || 0,
      end: currentStepData?.videoSegment.endTime || undefined,
    },
  };

  const musicOptions = {
    height: '200',
    width: '300',
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      loop: 1,
    },
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
      const step = steps[stepIndex];
      if (videoRef.current) {
        videoRef.current.getInternalPlayer().seekTo(step.videoSegment.startTime);
      }
    }
  };

  const markStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      const newCompletedSteps = [...completedSteps, currentStep];
      setCompletedSteps(newCompletedSteps);
      onStepComplete?.(currentStep);

      if (newCompletedSteps.length === steps.length) {
        alert(
          `Maith thú! (Well done!) You've completed learning ${danceName}. You now know a traditional Irish ceili dance!`
        );
        onLessonComplete?.();
      } else if (currentStep < steps.length - 1) {
        setTimeout(() => goToStep(currentStep + 1), 1000);
      }
    }
  };

  const getCurrentVideoId = () => {
    if (currentView === '3d') return videoStreams.frontView; // Use front view for 3D
    return videoStreams[currentView];
  };

  const getViewIcon = (view: ViewType) => {
    switch (view) {
      case 'frontView': return '👤';
      case 'sideView': return '↻';
      case 'overhead': return '⬆️';
      case '3d': return '🎭';
      default: return '👤';
    }
  };

  const getViewLabel = (view: ViewType) => {
    switch (view) {
      case 'frontView': return 'Front';
      case 'sideView': return 'Side';
      case 'overhead': return 'Top';
      case '3d': return '3D';
      default: return 'Front';
    }
  };

  return (
    <Container>
      <CulturalBanner show={showCulturalContext}>
        <CulturalTitle>Cultural Significance</CulturalTitle>
        <CulturalText>{culturalContext.significance}</CulturalText>
        <CloseButton onClick={() => setShowCulturalContext(false)}>
          Close
        </CloseButton>
      </CulturalBanner>

      <VideoContainer>
        {currentView === '3d' ? (
          <DanceFormation3D
            danceName={danceName}
            currentStep={currentStep}
            steps={steps}
            onStepChange={goToStep}
          />
        ) : (
          <YouTube
            ref={videoRef}
            videoId={getCurrentVideoId()}
            opts={videoOptions}
            onReady={() => console.log('Video ready')}
          />
        )}
      </VideoContainer>

      <ViewSelector>
        {(['frontView', 'sideView', 'overhead', '3d'] as ViewType[]).map((view) => (
          <ViewButton
            key={view}
            active={currentView === view}
            onClick={() => setCurrentView(view)}
          >
            <ViewIcon>{getViewIcon(view)}</ViewIcon>
            <ViewLabel>{getViewLabel(view)}</ViewLabel>
          </ViewButton>
        ))}
      </ViewSelector>

      {currentStepData && (
        <StepInfo>
          <StepHeader>
            <StepNumber>Step {currentStepData.stepNumber}</StepNumber>
            <StepTitle>{currentStepData.english}</StepTitle>
            {completedSteps.includes(currentStep) && <span>✅</span>}
          </StepHeader>

          <PronunciationButton
            text={`${currentStepData.irishTerm} (${currentStepData.phonetic})`}
            audioUrl={`https://example.com/audio/${currentStepData.irishTerm.toLowerCase()}.mp3`}
            size="medium"
          />

          <StepDescription>{currentStepData.description}</StepDescription>

          {currentStepData.culturalNote && (
            <CulturalNote>
              <span>ℹ️</span>
              <CulturalNoteText>{currentStepData.culturalNote}</CulturalNoteText>
            </CulturalNote>
          )}

          <CompleteStepButton
            completed={completedSteps.includes(currentStep)}
            onClick={markStepComplete}
            disabled={completedSteps.includes(currentStep)}
          >
            {completedSteps.includes(currentStep) ? 'Step Completed' : 'Mark Step Complete'}
          </CompleteStepButton>
        </StepInfo>
      )}

      <StepNavigation>
        <NavigationTitle>Dance Steps</NavigationTitle>
        <StepButtons>
          {steps.map((step, index) => (
            <StepNavigationButton
              key={index}
              current={currentStep === index}
              completed={completedSteps.includes(index)}
              onClick={() => goToStep(index)}
            >
              {index + 1}
            </StepNavigationButton>
          ))}
        </StepButtons>
      </StepNavigation>

      {/* Music Player */}
      {musicVideo && (
        <>
          <button
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              background: CulturalTheme.colors.secondary,
              color: CulturalTheme.colors.onSecondary,
              border: 'none',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              fontSize: '24px',
              cursor: 'pointer',
              zIndex: 1001,
            }}
            onClick={() => setShowMusicPlayer(!showMusicPlayer)}
          >
            🎵
          </button>

          {showMusicPlayer && (
            <MusicPlayer>
              <MusicHeader>Traditional Irish Music</MusicHeader>
              <YouTube
                ref={musicRef}
                videoId={musicVideo}
                opts={musicOptions}
              />
            </MusicPlayer>
          )}
        </>
      )}
    </Container>
  );
};