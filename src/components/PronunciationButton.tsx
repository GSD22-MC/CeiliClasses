import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { CulturalTheme } from '../theme/CulturalTheme';

interface PronunciationButtonProps {
  text: string;
  audioUrl: string;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  onPlayComplete?: () => void;
}

const Container = styled.button<{ size: 'small' | 'medium' | 'large'; isPlaying: boolean; isLoading: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.outline};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: ${({ isPlaying, isLoading }) => (isPlaying || isLoading ? 'default' : 'pointer')};
  opacity: ${({ isPlaying, isLoading }) => (isPlaying || isLoading ? 0.7 : 1)};
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  padding: ${({ size, theme }) => {
    switch (size) {
      case 'small': return `${theme.spacing.xs} ${theme.spacing.small}`;
      case 'large': return `${theme.spacing.medium} ${theme.spacing.large}`;
      default: return `${theme.spacing.small} ${theme.spacing.medium}`;
    }
  }};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.surfaceVariant};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.elevation.low.boxShadow};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  flex: 1;
`;

const Icon = styled.span<{ size: 'small' | 'medium' | 'large' }>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'small': return '16px';
      case 'large': return '28px';
      default: return '20px';
    }
  }};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span<{ size: 'small' | 'medium' | 'large' }>`
  color: ${({ theme }) => theme.colors.onSurface};
  font-weight: 500;
  flex: 1;
  text-align: left;
  
  font-size: ${({ size }) => {
    switch (size) {
      case 'small': return '12px';
      case 'large': return '16px';
      default: return '14px';
    }
  }};
`;

const HearingIcon = styled.span<{ size: 'small' | 'medium' | 'large' }>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'small': return '12px';
      case 'large': return '24px';
      default: return '16px';
    }
  }};
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.6;
`;

const PlayingIndicator = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  transform: ${({ show }) => show ? 'scaleX(1)' : 'scaleX(0)'};
  transform-origin: left;
  transition: transform 0.3s ease;
`;

const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.outline};
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const PronunciationButton: React.FC<PronunciationButtonProps> = ({
  text,
  audioUrl,
  size = 'medium',
  style,
  onPlayComplete,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playPronunciation = async () => {
    if (isPlaying || isLoading) return;

    setIsLoading(true);

    try {
      // Create audio element if it doesn't exist
      if (!audioRef.current) {
        audioRef.current = new Audio(audioUrl);
        
        audioRef.current.addEventListener('loadeddata', () => {
          setIsLoading(false);
        });

        audioRef.current.addEventListener('ended', () => {
          setIsPlaying(false);
          onPlayComplete?.();
        });

        audioRef.current.addEventListener('error', (error) => {
          setIsLoading(false);
          setIsPlaying(false);
          console.error('Error loading audio:', error);
        });
      }

      // Load and play audio
      await audioRef.current.load();
      setIsLoading(false);
      setIsPlaying(true);
      
      await audioRef.current.play();
      
    } catch (error) {
      setIsLoading(false);
      setIsPlaying(false);
      console.error('Error playing pronunciation:', error);
      
      // Fallback: try to use Web Speech API for synthesis
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ga-IE'; // Irish language
        utterance.rate = 0.8; // Slower for learning
        
        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => {
          setIsPlaying(false);
          onPlayComplete?.();
        };
        
        speechSynthesis.speak(utterance);
      } catch (speechError) {
        console.error('Speech synthesis also failed:', speechError);
      }
    }
  };

  // Cleanup audio when component unmounts
  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <Container
      size={size}
      isPlaying={isPlaying}
      isLoading={isLoading}
      onClick={playPronunciation}
      disabled={isPlaying || isLoading}
      style={style}
    >
      <Content>
        {isLoading ? (
          <Spinner />
        ) : (
          <Icon size={size}>
            {isPlaying ? '🔊' : '▶️'}
          </Icon>
        )}
        
        <Text size={size}>{text}</Text>
        
        <HearingIcon size={size}>👂</HearingIcon>
      </Content>
      
      <PlayingIndicator show={isPlaying} />
    </Container>
  );
};