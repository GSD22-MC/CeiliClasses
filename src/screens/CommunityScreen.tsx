import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from '../components/ui';
import { CulturalCard } from '../components/ui/CulturalCard';
import { CulturalTheme } from '../theme/CulturalTheme';
import { useAuthStore } from '../stores/authStore';

interface CommunityPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    culturalLevel: string;
    communityReputation: number;
  };
  category: 'learning_journey' | 'cultural_questions' | 'dance_techniques' | 'community_events';
  responsesCount: number;
  expertResponded: boolean;
  culturalExpertVerified: boolean;
  helpfulCount: number;
  createdAt: string;
  lastActivity: string;
  preview: string;
}

interface CommunityStats {
  positiveInteractionRate: number;
  expertResponseRate: number;
  newcomerWelcomeRate: number;
}

// Styled Components
const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const WelcomeHeader = styled(CulturalCard)`
  margin: ${({ theme }) => theme.spacing.medium};
`;

const WelcomeTitle = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-align: center;
`;

const WelcomeSubtitle = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const StatsContainer = styled(View)`
  flex-direction: row;
  justify-content: space-around;
`;

const StatItem = styled(View)`
  align-items: center;
`;

const StatValue = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const StatLabel = styled(Text)`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const FiltersContainer = styled(View)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.medium};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.outline};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  color: ${({ theme }) => theme.colors.onSurface};
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const CategoryScroll = styled(ScrollView)`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  flex-direction: row;
`;

const CategoryContainer = styled(View)`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.small};
  padding-right: ${({ theme }) => theme.spacing.medium};
`;

const CategoryChip = styled(TouchableOpacity)<{ selected?: boolean }>`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ selected, theme }) => 
    selected ? theme.colors.primary : theme.colors.surfaceVariant};
  margin-right: ${({ theme }) => theme.spacing.small};
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const CategoryChipText = styled(Text)<{ selected?: boolean }>`
  color: ${({ selected, theme }) => 
    selected ? theme.colors.onPrimary : theme.colors.onSurface};
  font-size: 14px;
  font-weight: 500;
`;

const SortContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const SortLabel = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.onSurface};
`;

const SortButton = styled(TouchableOpacity)<{ active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ active, theme }) => 
    active ? theme.colors.secondary : theme.colors.surfaceVariant};
`;

const SortButtonText = styled(Text)<{ active?: boolean }>`
  font-size: 12px;
  color: ${({ active, theme }) => 
    active ? theme.colors.onSecondary : theme.colors.onSurface};
  font-weight: ${({ active }) => active ? '600' : '400'};
`;

const DiscussionsList = styled(ScrollView)`
  flex: 1;
`;

const PostCard = styled(CulturalCard)`
  margin: 0 ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.small};
  cursor: pointer;
`;

const PostHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const PostMeta = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const CategoryIcon = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

const CategoryText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const VerifiedIcon = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const TimeAgo = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const PostTitle = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PostPreview = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const PostFooter = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AuthorInfo = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const AuthorName = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.onSurface};
`;

const AuthorLevel = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const PostStats = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const StatGroup = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const StatIcon = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.outline};
`;

const StatText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const ExpertBadge = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 2px ${({ theme }) => theme.spacing.xs};
  gap: 2px;
`;

const ExpertIcon = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onTertiary};
`;

const ExpertText = styled(Text)`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onTertiary};
`;

const EmptyState = styled(View)`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const EmptyStateIcon = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.outline};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const EmptyStateText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

const FAB = styled(TouchableOpacity)`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.medium};
  right: ${({ theme }) => theme.spacing.medium};
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.onSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.elevation.high.boxShadow};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.elevation.high.boxShadow};
  }
`;

const FABIcon = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.onSecondary};
`;

const CommunityScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'expert_verified'>('recent');
  const [refreshing, setRefreshing] = useState(false);

  const { user } = useAuthStore();

  const categories = [
    { key: 'all', label: 'All Discussions', icon: '💬' },
    { key: 'learning_journey', label: 'Learning Journey', icon: '🎓' },
    { key: 'cultural_questions', label: 'Cultural Questions', icon: '❓' },
    { key: 'dance_techniques', label: 'Dance Techniques', icon: '💃' },
    { key: 'community_events', label: 'Community Events', icon: '📅' },
  ];

  const { data: discussions, isLoading, refetch } = useQuery(
    ['discussions', selectedCategory, sortBy, searchQuery],
    () => fetchDiscussions(selectedCategory, sortBy, searchQuery),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: communityStats } = useQuery(
    'community-stats',
    fetchCommunityStats,
    {
      refetchInterval: 300000, // Refresh every 5 minutes
    }
  );

  async function fetchDiscussions(category: string, sort: string, search: string) {
    // TODO: Replace with actual API call
    const response = await fetch(
      `http://localhost:3001/api/v1/community/discussions?category=${category}&sort=${sort}&search=${search}`,
      {
        headers: {
          Authorization: `Bearer ${user?.id}`, // Replace with actual auth token
        },
      }
    );
    return response.json();
  }

  async function fetchCommunityStats(): Promise<CommunityStats> {
    // TODO: Replace with actual API call
    const response = await fetch('http://localhost:3001/api/v1/community/stats');
    return response.json();
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => setRefreshing(false));
  }, [refetch]);

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.key === category);
    return cat?.icon || '💬';
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <Container>
      <SafeAreaView>
        {/* Community Welcome Header */}
        <WelcomeHeader culturalLevel="primary">
          <WelcomeTitle>Fáilte to our Community!</WelcomeTitle>
          <WelcomeSubtitle>
            A place where everyone learns and everyone teaches
          </WelcomeSubtitle>
          
          {communityStats && (
            <StatsContainer>
              <StatItem>
                <StatValue>
                  {Math.round(communityStats.positiveInteractionRate * 100)}%
                </StatValue>
                <StatLabel>Positive Interactions</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>
                  {Math.round(communityStats.expertResponseRate * 100)}%
                </StatValue>
                <StatLabel>Expert Responses</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>
                  {Math.round(communityStats.newcomerWelcomeRate * 100)}%
                </StatValue>
                <StatLabel>Newcomer Welcome</StatLabel>
              </StatItem>
            </StatsContainer>
          )}
        </WelcomeHeader>

        {/* Search and Filters */}
        <FiltersContainer>
          <SearchInput
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <CategoryScroll horizontal>
            <CategoryContainer>
              {categories.map((category) => (
                <CategoryChip
                  key={category.key}
                  selected={selectedCategory === category.key}
                  onPress={() => setSelectedCategory(category.key)}
                >
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  <CategoryChipText selected={selectedCategory === category.key}>
                    {category.label}
                  </CategoryChipText>
                </CategoryChip>
              ))}
            </CategoryContainer>
          </CategoryScroll>

          <SortContainer>
            <SortLabel>Sort by:</SortLabel>
            {(['recent', 'popular', 'expert_verified'] as const).map((sort) => (
              <SortButton
                key={sort}
                active={sortBy === sort}
                onPress={() => setSortBy(sort)}
              >
                <SortButtonText active={sortBy === sort}>
                  {sort === 'recent' ? 'Recent' : sort === 'popular' ? 'Popular' : 'Expert Verified'}
                </SortButtonText>
              </SortButton>
            ))}
          </SortContainer>
        </FiltersContainer>

        {/* Discussions List */}
        <DiscussionsList>
          {discussions?.discussions?.map((post: CommunityPost) => (
            <CommunityPostCard key={post.id} post={post} />
          ))}
          
          {(!discussions?.discussions || discussions.discussions.length === 0) && (
            <EmptyState>
              <EmptyStateIcon>💬</EmptyStateIcon>
              <EmptyStateText>
                No discussions found. Be the first to start a conversation!
              </EmptyStateText>
            </EmptyState>
          )}
        </DiscussionsList>

        {/* Floating Action Button */}
        <FAB
          onPress={() => {
            // TODO: Navigate to create post screen
            console.log('Create new post');
          }}
          accessibilityLabel="Ask Question"
          accessibilityRole="button"
        >
          <FABIcon>➕</FABIcon>
        </FAB>
      </SafeAreaView>
    </Container>
  );
};

const CommunityPostCard: React.FC<{ post: CommunityPost }> = ({ post }) => {
  return (
    <PostCard
      culturalLevel="primary"
      onPress={() => {
        // TODO: Navigate to post details
        console.log('Navigate to post:', post.id);
      }}
    >
      <PostHeader>
        <PostMeta>
          <CategoryIcon>{getCategoryIcon(post.category)}</CategoryIcon>
          <CategoryText>
            {post.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </CategoryText>
          {post.culturalExpertVerified && (
            <VerifiedIcon>✅</VerifiedIcon>
          )}
        </PostMeta>
        <TimeAgo>{formatTimeAgo(post.createdAt)}</TimeAgo>
      </PostHeader>

      <PostTitle>
        {post.title}
      </PostTitle>
      
      <PostPreview>
        {post.preview}
      </PostPreview>

      <PostFooter>
        <AuthorInfo>
          <AuthorName>{post.author.name}</AuthorName>
          <AuthorLevel>({post.author.culturalLevel})</AuthorLevel>
        </AuthorInfo>

        <PostStats>
          <StatGroup>
            <StatIcon>💬</StatIcon>
            <StatText>{post.responsesCount}</StatText>
          </StatGroup>
          
          <StatGroup>
            <StatIcon>👍</StatIcon>
            <StatText>{post.helpfulCount}</StatText>
          </StatGroup>

          {post.expertResponded && (
            <ExpertBadge>
              <ExpertIcon>🎓</ExpertIcon>
              <ExpertText>Expert</ExpertText>
            </ExpertBadge>
          )}
        </PostStats>
      </PostFooter>
    </PostCard>
  );
};

export { CommunityScreen };
