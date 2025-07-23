import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from '../components/ui';
import { CulturalCard } from '../components/ui/CulturalCard';
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
  // These will be moved to component level with theme access
};

// Styled components for consistent theming
const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled(ScrollView)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;

const HeaderSection = styled(View)`
  padding: ${({ theme }) => theme.spacing.large} 0;
  align-items: center;
`;

const ScreenTitle = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const ScreenSubtitle = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
`;

const FeaturedQuote = styled(View)`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  align-items: center;
  box-shadow: ${({ theme }) => theme.elevation.low.boxShadow};
`;

const QuoteText = styled(Text)`
  font-size: 18px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const QuoteTranslation = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const QuoteAttribution = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  font-style: italic;
`;

const Section = styled(View)`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const SectionTitle = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const FactCard = styled(View)`
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const FactText = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const FactDetail = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const FilterContainer = styled(ScrollView)`
  margin: ${({ theme }) => theme.spacing.medium} 0;
  flex-direction: row;
`;

const FilterButton = styled(TouchableOpacity)<{ active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  margin-right: ${({ theme }) => theme.spacing.small};
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.surfaceVariant};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const FilterButtonText = styled(Text)<{ active?: boolean }>`
  font-size: 14px;
  color: ${({ active, theme }) => 
    active ? theme.colors.onPrimary : theme.colors.onSurfaceVariant};
  font-weight: 500;
`;

const ArticleHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const CategoryBadge = styled(View)<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 4px ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const CategoryText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onPrimary};
  font-weight: 600;
`;

const ReadTime = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const ArticleTitle = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ArticleIrishTitle = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const ArticleExcerpt = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ReadMoreContainer = styled(View)`
  align-items: flex-end;
`;

const ReadMoreText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const ResourceCard = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  box-shadow: ${({ theme }) => theme.elevation.low.boxShadow};
`;

const ResourceIcon = styled(Text)`
  font-size: 32px;
  margin-right: ${({ theme }) => theme.spacing.medium};
`;

const ResourceContent = styled(View)`
  flex: 1;
`;

const ResourceTitle = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const ResourceDescription = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  line-height: 1.3;
`;

const Footer = styled(View)`
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  align-items: center;
`;

const FooterText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  line-height: 1.4;
  font-style: italic;
`;

export const HeritageScreen: React.FC = () => {
  const theme = useTheme();
  const [selectedArticle, setSelectedArticle] = useState<CulturalArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'history', 'music', 'language', 'traditions', 'regions', 'festivals'];

  const filteredArticles = selectedCategory === 'all' 
    ? culturalArticles 
    : getArticlesByCategory(selectedCategory as CulturalArticle['category']);

  const renderCategoryFilter = () => (
    <FilterContainer 
      horizontal 
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <FilterButton
          key={category}
          active={selectedCategory === category}
          onPress={() => setSelectedCategory(category)}
          accessibilityLabel={`Filter by ${category}`}
          accessibilityRole="button"
        >
          <FilterButtonText active={selectedCategory === category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButtonText>
        </FilterButton>
      ))}
    </FilterContainer>
  );

  const renderArticleCard = (article: CulturalArticle) => (
    <CulturalCard
      key={article.id}
      culturalLevel="primary"
      onPress={() => setSelectedArticle(article)}
    >
      <ArticleHeader>
        <CategoryBadge backgroundColor={categoryColors[article.category]}>
          <CategoryText>{article.category}</CategoryText>
        </CategoryBadge>
        <ReadTime>{article.readingTime} min read</ReadTime>
      </ArticleHeader>
      
      <ArticleTitle>{article.title.english}</ArticleTitle>
      <ArticleIrishTitle>{article.title.irish}</ArticleIrishTitle>
      <ArticleExcerpt>{article.summary}</ArticleExcerpt>
      
      <ReadMoreContainer>
        <ReadMoreText>Read More →</ReadMoreText>
      </ReadMoreContainer>
    </CulturalCard>
  );

  const renderFactCard = (fact: typeof culturalFacts[0], index: number) => (
    <FactCard key={index}>
      <FactText>{fact.fact}</FactText>
      <FactDetail>{fact.detail}</FactDetail>
    </FactCard>
  );

  return (
    <Container>
      <SafeAreaView>
        <Content>
          <HeaderSection>
            <ScreenTitle>Oidhreacht (Heritage)</ScreenTitle>
            <ScreenSubtitle>
              Explore the rich history and culture behind Irish céilí dancing
            </ScreenSubtitle>
          </HeaderSection>

          {/* Featured Quote */}
          <FeaturedQuote>
            <QuoteText>
              "Tír gan teanga, tír gan anam"
            </QuoteText>
            <QuoteTranslation>
              A country without a language is a country without a soul
            </QuoteTranslation>
            <QuoteAttribution>— Irish Proverb</QuoteAttribution>
          </FeaturedQuote>

          {/* Cultural Facts */}
          <Section>
            <SectionTitle>Did You Know?</SectionTitle>
            {culturalFacts.map(renderFactCard)}
          </Section>

          {/* Category Filter */}
          {renderCategoryFilter()}

          {/* Heritage Articles */}
          <Section>
            <SectionTitle>Heritage Articles</SectionTitle>
            {filteredArticles.map(renderArticleCard)}
          </Section>

          {/* Irish Regions */}
          <Section>
            <SectionTitle>Irish Regions</SectionTitle>
            {irishRegions.map((region) => (
              <CulturalCard
                key={region.id}
                culturalLevel="secondary"
                title={region.name.english}
                irishTitle={region.name.irish}
              >
                <Text style={{ marginBottom: theme.spacing.small }}>
                  {region.description}
                </Text>
                <Text style={{ 
                  fontSize: '12px', 
                  color: theme.colors.primary, 
                  fontWeight: '500' 
                }}>
                  Traditional Dances: {region.traditionalDances.length} dances
                </Text>
              </CulturalCard>
            ))}
          </Section>

          {/* Cultural Resources */}
          <Section>
            <SectionTitle>Learn More</SectionTitle>
            
            <ResourceCard>
              <ResourceIcon>🏛️</ResourceIcon>
              <ResourceContent>
                <ResourceTitle>Irish Cultural Center</ResourceTitle>
                <ResourceDescription>
                  Find local Irish cultural centers and events near you
                </ResourceDescription>
              </ResourceContent>
            </ResourceCard>

            <ResourceCard>
              <ResourceIcon>📚</ResourceIcon>
              <ResourceContent>
                <ResourceTitle>Irish Language Resources</ResourceTitle>
                <ResourceDescription>
                  Learn basic Irish (Gaeilge) to deepen your cultural connection
                </ResourceDescription>
              </ResourceContent>
            </ResourceCard>

            <ResourceCard>
              <ResourceIcon>🎵</ResourceIcon>
              <ResourceContent>
                <ResourceTitle>Traditional Music</ResourceTitle>
                <ResourceDescription>
                  Discover traditional Irish musicians and their recordings
                </ResourceDescription>
              </ResourceContent>
            </ResourceCard>
          </Section>

          {/* Footer */}
          <Footer>
            <FooterText>
              Irish culture is living history. By learning traditional dances,
              you become part of a story that spans generations.
            </FooterText>
          </Footer>
        </Content>
      </SafeAreaView>
    </Container>
  );
};