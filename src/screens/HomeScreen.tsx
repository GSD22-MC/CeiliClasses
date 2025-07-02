import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../stores/authStore';
import { CulturalTheme } from '../theme/CulturalTheme';

export const HomeScreen: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore();

  const quickActions = [
    {
      id: 'lesson',
      title: 'Start Dancing',
      subtitle: 'Begin your ceili journey',
      icon: '💃',
      action: () => console.log('Navigate to lessons'),
    },
    {
      id: 'practice',
      title: 'Practice Irish',
      subtitle: 'Improve pronunciation',
      icon: '🗣️',
      action: () => console.log('Navigate to practice'),
    },
    {
      id: 'community',
      title: 'Join Community',
      subtitle: 'Connect with others',
      icon: '👥',
      action: () => console.log('Navigate to community'),
    },
    {
      id: 'heritage',
      title: 'Learn Heritage',
      subtitle: 'Discover culture',
      icon: '🏰',
      action: () => console.log('Navigate to heritage'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Welcome Header */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>
            Fáilte{isAuthenticated && user ? `, ${user.email.split('@')[0]}!` : '!'}
          </Text>
          <Text style={styles.welcomeSubtitle}>
            Welcome to your Irish ceili dance journey
          </Text>
          {isAuthenticated && user && (
            <View style={styles.progressSection}>
              <Text style={styles.progressLabel}>Cultural Confidence</Text>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { width: `${user.culturalConfidenceScore || 0}%` }
                  ]} 
                />
              </View>
              <Text style={styles.progressText}>
                {user.culturalConfidenceScore || 0}% Complete
              </Text>
            </View>
          )}
        </View>

        {/* Featured Content */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Today's Featured</Text>
          <View style={styles.featuredCard}>
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>The Siege of Ennis</Text>
              <Text style={styles.featuredDescription}>
                Learn Ireland's most popular ceili dance with step-by-step guidance
              </Text>
              <TouchableOpacity style={styles.featuredButton}>
                <Text style={styles.featuredButtonText}>Start Learning</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            {quickActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                style={styles.actionCard}
                onPress={action.action}
                accessibilityLabel={`${action.title}: ${action.subtitle}`}
                accessibilityRole="button"
              >
                <Text style={styles.actionIcon}>{action.icon}</Text>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Cultural Quote */}
        <View style={styles.quoteSection}>
          <Text style={styles.quote}>
            "Ar scáth a chéile a mhaireann na daoine"
          </Text>
          <Text style={styles.quoteTranslation}>
            In each other's shadow the people live
          </Text>
        </View>
      </ScrollView>
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
  welcomeSection: {
    paddingVertical: CulturalTheme.spacing.large,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: CulturalTheme.colors.primary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.small,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.medium,
  },
  progressSection: {
    width: '100%',
    alignItems: 'center',
    marginTop: CulturalTheme.spacing.medium,
  },
  progressLabel: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    marginBottom: CulturalTheme.spacing.small,
  },
  progressBar: {
    width: '80%',
    height: 8,
    backgroundColor: CulturalTheme.colors.backgroundSecondary,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: CulturalTheme.colors.secondary,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: CulturalTheme.colors.textSecondary,
    marginTop: CulturalTheme.spacing.small,
  },
  featuredSection: {
    marginBottom: CulturalTheme.spacing.large,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.medium,
  },
  featuredCard: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    ...CulturalTheme.elevation.small,
  },
  featuredContent: {
    alignItems: 'center',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.small,
  },
  featuredDescription: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.medium,
  },
  featuredButton: {
    backgroundColor: CulturalTheme.colors.primary,
    paddingHorizontal: CulturalTheme.spacing.large,
    paddingVertical: CulturalTheme.spacing.medium,
    borderRadius: CulturalTheme.borderRadius.small,
  },
  featuredButtonText: {
    color: CulturalTheme.colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
  actionsSection: {
    marginBottom: CulturalTheme.spacing.large,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.medium,
    alignItems: 'center',
    marginBottom: CulturalTheme.spacing.medium,
    ...CulturalTheme.elevation.small,
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: CulturalTheme.spacing.small,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.small,
  },
  actionSubtitle: {
    fontSize: 12,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
  },
  quoteSection: {
    backgroundColor: CulturalTheme.colors.backgroundSecondary,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    alignItems: 'center',
    marginBottom: CulturalTheme.spacing.large,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: CulturalTheme.colors.primary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.small,
  },
  quoteTranslation: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
  },
});