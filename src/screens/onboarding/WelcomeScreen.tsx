import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Button, Surface } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CulturalTheme, CulturalSpacing, CulturalBorderRadius } from '../../theme/CulturalTheme';
import { OnboardingStackParamList } from '../../navigation/OnboardingNavigator';
import { PronunciationButton } from '../../components/PronunciationButton';

type WelcomeScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'Welcome'>;

interface Props {
  navigation: WelcomeScreenNavigationProp;
}

const { width, height } = Dimensions.get('window');

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Animate content appearance
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleBeginJourney = () => {
    navigation.navigate('CulturalIntro');
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0, 102, 51, 0.8)', 'rgba(0, 102, 51, 0.6)', 'rgba(0, 102, 51, 0.9)']}
          style={styles.overlay}
        >
          <View style={styles.container}>
            {showContent && (
              <>
                {/* Header Section */}
                <View style={styles.headerSection}>
                  <Icon 
                    name="celebration" 
                    size={60} 
                    color={CulturalTheme.colors.secondary}
                    style={styles.headerIcon}
                  />
                  <Text style={styles.mainTitle}>CeiliClasses</Text>
                  <Text style={styles.subtitle}>
                    Learn authentic Irish ceili dancing with cultural confidence
                  </Text>
                </View>

                {/* Welcome Message Section */}
                <Surface style={styles.welcomeCard} elevation={4}>
                  <Text style={styles.greetingIrish}>Céad míle fáilte!</Text>
                  
                  <PronunciationButton
                    text="KAH-ed MEE-leh FALL-che"
                    audioUrl="https://example.com/audio/cead-mile-failte.mp3"
                    size="small"
                    style={styles.pronunciationButton}
                  />
                  
                  <Text style={styles.greetingTranslation}>
                    One hundred thousand welcomes!
                  </Text>
                  
                  <Text style={styles.welcomeMessage}>
                    Welcome to your authentic Irish cultural journey. In just 60 minutes, 
                    you'll learn to pronounce "ceili" correctly, master your first traditional 
                    Irish dance, and join a welcoming community that celebrates Irish heritage.
                  </Text>

                  <View style={styles.benefitsList}>
                    <View style={styles.benefitItem}>
                      <Icon name="volume-up" size={20} color={CulturalTheme.colors.primary} />
                      <Text style={styles.benefitText}>
                        Native Irish pronunciation guides
                      </Text>
                    </View>
                    <View style={styles.benefitItem}>
                      <Icon name="groups" size={20} color={CulturalTheme.colors.primary} />
                      <Text style={styles.benefitText}>
                        Welcoming cultural community
                      </Text>
                    </View>
                    <View style={styles.benefitItem}>
                      <Icon name="school" size={20} color={CulturalTheme.colors.primary} />
                      <Text style={styles.benefitText}>
                        Authentic cultural education
                      </Text>
                    </View>
                  </View>
                </Surface>

                {/* Action Section */}
                <View style={styles.actionSection}>
                  <Button
                    mode="contained"
                    onPress={handleBeginJourney}
                    style={styles.beginButton}
                    contentStyle={styles.beginButtonContent}
                    labelStyle={styles.beginButtonLabel}
                  >
                    Begin Your Cultural Journey
                  </Button>
                  
                  <Text style={styles.timeCommitment}>
                    ⏱️ Complete in under 60 minutes
                  </Text>
                </View>
              </>
            )}
          </View>
        </LinearGradient>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width,
    height,
  },
  overlay: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: CulturalSpacing.lg,
    paddingTop: StatusBar.currentHeight || 40,
    paddingBottom: CulturalSpacing.xl,
    justifyContent: 'space-between',
  },
  headerSection: {
    alignItems: 'center',
    paddingTop: CulturalSpacing.xl,
  },
  headerIcon: {
    marginBottom: CulturalSpacing.md,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: '700',
    color: CulturalTheme.colors.onPrimary,
    textAlign: 'center',
    marginBottom: CulturalSpacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: CulturalTheme.colors.onPrimary,
    textAlign: 'center',
    opacity: 0.9,
    paddingHorizontal: CulturalSpacing.md,
  },
  welcomeCard: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalBorderRadius.lg,
    padding: CulturalSpacing.lg,
    marginVertical: CulturalSpacing.lg,
  },
  greetingIrish: {
    fontSize: 28,
    fontWeight: '600',
    color: CulturalTheme.colors.primary,
    textAlign: 'center',
    marginBottom: CulturalSpacing.sm,
  },
  pronunciationButton: {
    alignSelf: 'center',
    marginBottom: CulturalSpacing.md,
  },
  greetingTranslation: {
    fontSize: 16,
    color: CulturalTheme.colors.onSurfaceVariant,
    textAlign: 'center',
    marginBottom: CulturalSpacing.lg,
    fontStyle: 'italic',
  },
  welcomeMessage: {
    fontSize: 16,
    lineHeight: 24,
    color: CulturalTheme.colors.onSurface,
    textAlign: 'center',
    marginBottom: CulturalSpacing.lg,
  },
  benefitsList: {
    gap: CulturalSpacing.md,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: CulturalSpacing.sm,
  },
  benefitText: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurface,
    flex: 1,
  },
  actionSection: {
    alignItems: 'center',
  },
  beginButton: {
    backgroundColor: CulturalTheme.colors.secondary,
    borderRadius: CulturalBorderRadius.lg,
    marginBottom: CulturalSpacing.md,
  },
  beginButtonContent: {
    paddingVertical: CulturalSpacing.sm,
    paddingHorizontal: CulturalSpacing.xl,
  },
  beginButtonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: CulturalTheme.colors.onSecondary,
  },
  timeCommitment: {
    fontSize: 14,
    color: CulturalTheme.colors.onPrimary,
    opacity: 0.8,
  },
});

export default WelcomeScreen;