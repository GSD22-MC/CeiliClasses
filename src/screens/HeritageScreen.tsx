import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CulturalTheme } from '../theme/CulturalTheme';
import { culturalArticles, irishRegions, getArticlesByCategory, CulturalArticle } from '../data/culturalContent';


const culturalFacts = [
  {
    fact: 'Ireland has over 30 traditional céilí dances',
    detail: 'Each with its own unique steps and formations'
  },
  {
    fact: 'The word "céilí" means "social gathering"',
    detail: 'It comes from the Irish word for "visit" or "meeting"'
  },
  {
    fact: 'Traditional Irish music uses unique time signatures',
    detail: 'Many céilí dances are performed to jigs (6/8 time) and reels (4/4 time)'
  },
  {
    fact: 'Irish dancing was once banned by English law',
    detail: 'The Penal Laws (1695-1829) attempted to suppress Irish culture'
  },
];

const categoryColors = {
  history: CulturalTheme.colors.primary,
  traditions: CulturalTheme.colors.secondary,
  music: CulturalTheme.colors.tertiary,
  language: CulturalTheme.colors.success,
  regions: CulturalTheme.colors.primary,
  festivals: CulturalTheme.colors.secondary,
};

export const HeritageScreen: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<CulturalArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'history', 'music', 'language', 'traditions', 'regions', 'festivals'];

  const filteredArticles = selectedCategory === 'all' 
    ? culturalArticles 
    : getArticlesByCategory(selectedCategory as CulturalArticle['category']);
  const renderCategoryFilter = () => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.filterContainer}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.filterButton,
            selectedCategory === category && styles.filterButtonActive
          ]}
          onPress={() => setSelectedCategory(category)}
          accessibilityLabel={`Filter by ${category}`}
          accessibilityRole="button"
        >
          <Text style={[
            styles.filterButtonText,
            selectedCategory === category && styles.filterButtonTextActive
          ]}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderArticleCard = (article: CulturalArticle) => (
    <TouchableOpacity
      key={article.id}
      style={styles.articleCard}
      onPress={() => setSelectedArticle(article)}
      accessibilityLabel={`Read article: ${article.title.english}`}
      accessibilityRole="button"
    >
      <View style={styles.articleHeader}>
        <View style={[
          styles.categoryBadge,
          { backgroundColor: categoryColors[article.category] }
        ]}>
          <Text style={styles.categoryText}>{article.category}</Text>
        </View>
        <Text style={styles.readTime}>{article.readingTime} min read</Text>
      </View>
      
      <Text style={styles.articleTitle}>{article.title.english}</Text>
      <Text style={styles.articleIrishTitle}>{article.title.irish}</Text>
      <Text style={styles.articleExcerpt}>{article.summary}</Text>
      
      <View style={styles.readMoreContainer}>
        <Text style={styles.readMoreText}>Read More →</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFactCard = (fact: typeof culturalFacts[0], index: number) => (
    <View key={index} style={styles.factCard}>
      <Text style={styles.factText}>{fact.fact}</Text>
      <Text style={styles.factDetail}>{fact.detail}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.headerSection}>
          <Text style={styles.screenTitle}>Oidhreacht (Heritage)</Text>
          <Text style={styles.screenSubtitle}>
            Explore the rich history and culture behind Irish céilí dancing
          </Text>
        </View>

        {/* Featured Quote */}
        <View style={styles.featuredQuote}>
          <Text style={styles.quoteText}>
            "Tír gan teanga, tír gan anam"
          </Text>
          <Text style={styles.quoteTranslation}>
            A country without a language is a country without a soul
          </Text>
          <Text style={styles.quoteAttribution}>— Irish Proverb</Text>
        </View>

        {/* Cultural Facts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Did You Know?</Text>
          {culturalFacts.map(renderFactCard)}
        </View>

        {/* Category Filter */}
        {renderCategoryFilter()}

        {/* Heritage Articles */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Heritage Articles</Text>
          {filteredArticles.map(renderArticleCard)}
        </View>

        {/* Irish Regions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Irish Regions</Text>
          {irishRegions.map((region) => (
            <TouchableOpacity key={region.id} style={styles.regionCard}>
              <Text style={styles.regionName}>{region.name.english}</Text>
              <Text style={styles.regionIrishName}>{region.name.irish}</Text>
              <Text style={styles.regionDescription}>{region.description}</Text>
              <Text style={styles.regionDances}>Traditional Dances: {region.traditionalDances.length} dances</Text>
            </TouchableOpacity>
          ))}

        {/* Cultural Resources */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          
          <TouchableOpacity style={styles.resourceCard}>
            <Text style={styles.resourceIcon}>🏛️</Text>
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Irish Cultural Center</Text>
              <Text style={styles.resourceDescription}>
                Find local Irish cultural centers and events near you
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceCard}>
            <Text style={styles.resourceIcon}>📚</Text>
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Irish Language Resources</Text>
              <Text style={styles.resourceDescription}>
                Learn basic Irish (Gaeilge) to deepen your cultural connection
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceCard}>
            <Text style={styles.resourceIcon}>🎵</Text>
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Traditional Music</Text>
              <Text style={styles.resourceDescription}>
                Discover traditional Irish musicians and their recordings
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Irish culture is living history. By learning traditional dances,
            you become part of a story that spans generations.
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
  featuredQuote: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    marginBottom: CulturalTheme.spacing.large,
    alignItems: 'center',
    ...CulturalTheme.elevation.small,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: CulturalTheme.colors.primary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.small,
  },
  quoteTranslation: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: CulturalTheme.spacing.small,
  },
  quoteAttribution: {
    fontSize: 12,
    color: CulturalTheme.colors.textSecondary,
    fontStyle: 'italic',
  },
  section: {
    marginBottom: CulturalTheme.spacing.large,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.medium,
  },
  factCard: {
    backgroundColor: CulturalTheme.colors.backgroundSecondary,
    borderRadius: CulturalTheme.borderRadius.small,
    padding: CulturalTheme.spacing.medium,
    marginBottom: CulturalTheme.spacing.small,
  },
  factText: {
    fontSize: 16,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.small,
  },
  factDetail: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
  },
  articleCard: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    marginBottom: CulturalTheme.spacing.medium,
    ...CulturalTheme.elevation.small,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: CulturalTheme.spacing.medium,
  },
  categoryBadge: {
    paddingHorizontal: CulturalTheme.spacing.small,
    paddingVertical: 4,
    borderRadius: CulturalTheme.borderRadius.small,
  },
  categoryText: {
    fontSize: 12,
    color: CulturalTheme.colors.surface,
    fontWeight: '600',
  },
  readTime: {
    fontSize: 12,
    color: CulturalTheme.colors.textSecondary,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.medium,
  },
  articleExcerpt: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: CulturalTheme.spacing.medium,
  },
  readMoreContainer: {
    alignItems: 'flex-end',
  },
  readMoreText: {
    fontSize: 14,
    color: CulturalTheme.colors.primary,
    fontWeight: '600',
  },
  filterContainer: {
    marginVertical: CulturalTheme.spacing.medium,
  },
  filterButton: {
    paddingHorizontal: CulturalTheme.spacing.medium,
    paddingVertical: CulturalTheme.spacing.small,
    marginRight: CulturalTheme.spacing.small,
    backgroundColor: CulturalTheme.colors.surfaceVariant,
    borderRadius: CulturalTheme.borderRadius.small,
  },
  filterButtonActive: {
    backgroundColor: CulturalTheme.colors.primary,
  },
  filterButtonText: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurfaceVariant,
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: CulturalTheme.colors.onPrimary,
  },
  articleIrishTitle: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurfaceVariant,
    fontStyle: 'italic',
    marginBottom: CulturalTheme.spacing.small,
  },
  regionCard: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    marginBottom: CulturalTheme.spacing.medium,
    ...CulturalTheme.elevation.low,
  },
  regionName: {
    fontSize: 18,
    fontWeight: '600',
    color: CulturalTheme.colors.onSurface,
    marginBottom: CulturalTheme.spacing.xs,
  },
  regionIrishName: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurfaceVariant,
    fontStyle: 'italic',
    marginBottom: CulturalTheme.spacing.small,
  },
  regionDescription: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurfaceVariant,
    lineHeight: 20,
    marginBottom: CulturalTheme.spacing.small,
  },
  regionDances: {
    fontSize: 12,
    color: CulturalTheme.colors.primary,
    fontWeight: '500',
  },
  resourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    marginBottom: CulturalTheme.spacing.medium,
    ...CulturalTheme.elevation.small,
  },
  resourceIcon: {
    fontSize: 32,
    marginRight: CulturalTheme.spacing.medium,
  },
  resourceContent: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: CulturalTheme.colors.textPrimary,
    marginBottom: CulturalTheme.spacing.small,
  },
  resourceDescription: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    lineHeight: 18,
  },
  footer: {
    backgroundColor: CulturalTheme.colors.backgroundSecondary,
    borderRadius: CulturalTheme.borderRadius.medium,
    padding: CulturalTheme.spacing.large,
    marginBottom: CulturalTheme.spacing.large,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: CulturalTheme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    fontStyle: 'italic',
  },
});