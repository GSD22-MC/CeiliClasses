import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Surface } from 'react-native-paper';
import Sound from 'react-native-sound';

import { CulturalTheme, CulturalSpacing, CulturalBorderRadius } from '../theme/CulturalTheme';

interface PronunciationButtonProps {
  text: string;
  audioUrl: string;
  size?: 'small' | 'medium' | 'large';
  style?: any;
  onPlayComplete?: () => void;
}

export const PronunciationButton: React.FC<PronunciationButtonProps> = ({
  text,
  audioUrl,
  size = 'medium',
  style,
  onPlayComplete,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const playPronunciation = async () => {
    if (isPlaying || isLoading) return;

    setIsLoading(true);

    try {
      // Initialize sound
      const sound = new Sound(audioUrl, Sound.MAIN_BUNDLE, (error) => {
        setIsLoading(false);
        
        if (error) {
          console.error('Failed to load sound:', error);
          return;
        }

        setIsPlaying(true);
        
        // Play the sound
        sound.play((success) => {
          setIsPlaying(false);
          
          if (success) {
            console.log('Pronunciation played successfully');
            onPlayComplete?.();
          } else {
            console.error('Playback failed');
          }
          
          // Release the audio player resource
          sound.release();
        });
      });
    } catch (error) {
      setIsLoading(false);
      console.error('Error playing pronunciation:', error);
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          container: styles.smallContainer,
          text: styles.smallText,
          icon: 16,
        };
      case 'large':
        return {
          container: styles.largeContainer,
          text: styles.largeText,
          icon: 28,
        };
      default:
        return {
          container: styles.mediumContainer,
          text: styles.mediumText,
          icon: 20,
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity
      style={[styles.touchable, style]}
      onPress={playPronunciation}
      disabled={isPlaying || isLoading}
      activeOpacity={0.7}
    >
      <Surface style={[styles.container, sizeStyles.container]} elevation={2}>
        <View style={styles.content}>
          {isLoading ? (
            <ActivityIndicator 
              size="small" 
              color={CulturalTheme.colors.primary} 
              style={styles.loader}
            />
          ) : (
            <Icon
              name={isPlaying ? 'volume-up' : 'play-arrow'}
              size={sizeStyles.icon}
              color={CulturalTheme.colors.primary}
              style={styles.icon}
            />
          )}
          
          <Text style={[styles.text, sizeStyles.text]} numberOfLines={2}>
            {text}
          </Text>
          
          <Icon
            name="hearing"
            size={sizeStyles.icon - 4}
            color={CulturalTheme.colors.secondary}
            style={styles.hearingIcon}
          />
        </View>
        
        {isPlaying && (
          <View style={styles.playingIndicator}>
            <View style={styles.soundWave}>
              <View style={[styles.wave, styles.wave1]} />
              <View style={[styles.wave, styles.wave2]} />
              <View style={[styles.wave, styles.wave3]} />
            </View>
          </View>
        )}
      </Surface>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    alignSelf: 'flex-start',
  },
  container: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalBorderRadius.md,
    borderWidth: 1,
    borderColor: CulturalTheme.colors.outline,
    overflow: 'hidden',
  },
  smallContainer: {
    paddingHorizontal: CulturalSpacing.sm,
    paddingVertical: CulturalSpacing.xs,
  },
  mediumContainer: {
    paddingHorizontal: CulturalSpacing.md,
    paddingVertical: CulturalSpacing.sm,
  },
  largeContainer: {
    paddingHorizontal: CulturalSpacing.lg,
    paddingVertical: CulturalSpacing.md,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: CulturalSpacing.sm,
  },
  icon: {
    marginRight: CulturalSpacing.xs,
  },
  loader: {
    marginRight: CulturalSpacing.xs,
  },
  text: {
    flex: 1,
    color: CulturalTheme.colors.onSurface,
    fontFamily: 'System',
    fontWeight: '500',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 16,
  },
  hearingIcon: {
    opacity: 0.6,
  },
  playingIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: CulturalTheme.colors.primaryContainer,
  },
  soundWave: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    gap: 1,
  },
  wave: {
    width: 2,
    backgroundColor: CulturalTheme.colors.primary,
    borderRadius: 1,
  },
  wave1: {
    height: '60%',
    animationDelay: '0ms',
  },
  wave2: {
    height: '100%',
    animationDelay: '100ms',
  },
  wave3: {
    height: '80%',
    animationDelay: '200ms',
  },
});