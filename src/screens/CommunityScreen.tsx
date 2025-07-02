import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Surface, Button, Searchbar, Chip, FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useQuery } from 'react-query';

import { CulturalTheme, CulturalSpacing, CulturalBorderRadius } from '../theme/CulturalTheme';
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

const CommunityScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'expert_verified'>('recent');
  const [refreshing, setRefreshing] = useState(false);

  const { user } = useAuthStore();

  const categories = [
    { key: 'all', label: 'All Discussions', icon: 'forum' },
    { key: 'learning_journey', label: 'Learning Journey', icon: 'school' },
    { key: 'cultural_questions', label: 'Cultural Questions', icon: 'help' },
    { key: 'dance_techniques', label: 'Dance Techniques', icon: 'fitness-center' },
    { key: 'community_events', label: 'Community Events', icon: 'event' },
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
    return cat?.icon || 'forum';
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
    <View style={styles.container}>
      {/* Community Welcome Header */}
      <Surface style={styles.welcomeHeader} elevation={2}>
        <View style={styles.welcomeContent}>
          <Text style={styles.welcomeTitle}>Fáilte to our Community!</Text>
          <Text style={styles.welcomeSubtitle}>
            A place where everyone learns and everyone teaches
          </Text>
          
          {communityStats && (
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {Math.round(communityStats.positiveInteractionRate * 100)}%
                </Text>
                <Text style={styles.statLabel}>Positive Interactions</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {Math.round(communityStats.expertResponseRate * 100)}%
                </Text>
                <Text style={styles.statLabel}>Expert Responses</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {Math.round(communityStats.newcomerWelcomeRate * 100)}%
                </Text>
                <Text style={styles.statLabel}>Newcomer Welcome</Text>
              </View>
            </View>
          )}
        </View>
      </Surface>

      {/* Search and Filters */}
      <View style={styles.filtersContainer}>
        <Searchbar
          placeholder="Search discussions..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          iconColor={CulturalTheme.colors.primary}
        />
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContainer}
        >
          {categories.map((category) => (
            <Chip
              key={category.key}
              selected={selectedCategory === category.key}
              onPress={() => setSelectedCategory(category.key)}
              icon={category.icon}
              style={[
                styles.categoryChip,
                selectedCategory === category.key && styles.selectedCategoryChip
              ]}
              textStyle={[
                styles.categoryChipText,
                selectedCategory === category.key && styles.selectedCategoryChipText
              ]}
            >
              {category.label}
            </Chip>
          ))}
        </ScrollView>

        <View style={styles.sortContainer}>
          <Text style={styles.sortLabel}>Sort by:</Text>
          {['recent', 'popular', 'expert_verified'].map((sort) => (
            <TouchableOpacity
              key={sort}
              style={[
                styles.sortButton,
                sortBy === sort && styles.activeSortButton
              ]}
              onPress={() => setSortBy(sort as any)}
            >
              <Text style={[
                styles.sortButtonText,
                sortBy === sort && styles.activeSortButtonText
              ]}>
                {sort === 'recent' ? 'Recent' : sort === 'popular' ? 'Popular' : 'Expert Verified'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Discussions List */}
      <ScrollView
        style={styles.discussionsList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {discussions?.discussions?.map((post: CommunityPost) => (
          <CommunityPostCard key={post.id} post={post} />
        ))}
        
        {(!discussions?.discussions || discussions.discussions.length === 0) && (
          <View style={styles.emptyState}>
            <Icon name="forum" size={48} color={CulturalTheme.colors.outline} />
            <Text style={styles.emptyStateText}>
              No discussions found. Be the first to start a conversation!
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        icon="add"
        label="Ask Question"
        onPress={() => {
          // TODO: Navigate to create post screen
          console.log('Create new post');
        }}
      />
    </View>
  );
};

const CommunityPostCard: React.FC<{ post: CommunityPost }> = ({ post }) => {
  return (
    <TouchableOpacity
      style={styles.postCard}
      onPress={() => {
        // TODO: Navigate to post details
        console.log('Navigate to post:', post.id);
      }}
    >
      <Surface style={styles.postSurface} elevation={1}>
        <View style={styles.postHeader}>
          <View style={styles.postMeta}>
            <Icon 
              name={getCategoryIcon(post.category)} 
              size={16} 
              color={CulturalTheme.colors.primary}
            />
            <Text style={styles.categoryText}>
              {post.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Text>
            {post.culturalExpertVerified && (
              <Icon name="verified" size={16} color={CulturalTheme.colors.tertiary} />
            )}
          </View>
          <Text style={styles.timeAgo}>{formatTimeAgo(post.createdAt)}</Text>
        </View>

        <Text style={styles.postTitle} numberOfLines={2}>
          {post.title}
        </Text>
        
        <Text style={styles.postPreview} numberOfLines={3}>
          {post.preview}
        </Text>

        <View style={styles.postFooter}>
          <View style={styles.authorInfo}>
            <Text style={styles.authorName}>{post.author.name}</Text>
            <Text style={styles.authorLevel}>({post.author.culturalLevel})</Text>
          </View>

          <View style={styles.postStats}>
            <View style={styles.statGroup}>
              <Icon name="forum" size={14} color={CulturalTheme.colors.outline} />
              <Text style={styles.statText}>{post.responsesCount}</Text>
            </View>
            
            <View style={styles.statGroup}>
              <Icon name="thumb-up" size={14} color={CulturalTheme.colors.outline} />
              <Text style={styles.statText}>{post.helpfulCount}</Text>
            </View>

            {post.expertResponded && (
              <View style={styles.expertBadge}>
                <Icon name="school" size={12} color={CulturalTheme.colors.onTertiary} />
                <Text style={styles.expertText}>Expert</Text>
              </View>
            )}
          </View>
        </View>
      </Surface>
    </TouchableOpacity>
  );
};

function getCategoryIcon(category: string): string {
  switch (category) {
    case 'learning_journey': return 'school';
    case 'cultural_questions': return 'help';
    case 'dance_techniques': return 'fitness-center';
    case 'community_events': return 'event';
    default: return 'forum';
  }
}

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  return date.toLocaleDateString();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CulturalTheme.colors.background,
  },
  welcomeHeader: {
    backgroundColor: CulturalTheme.colors.primaryContainer,
    margin: CulturalSpacing.md,
    borderRadius: CulturalBorderRadius.lg,
  },
  welcomeContent: {
    padding: CulturalSpacing.lg,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: CulturalTheme.colors.onPrimaryContainer,
    marginBottom: CulturalSpacing.xs,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: CulturalTheme.colors.onPrimaryContainer,
    opacity: 0.8,
    marginBottom: CulturalSpacing.md,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: CulturalTheme.colors.onPrimaryContainer,
  },
  statLabel: {
    fontSize: 10,
    color: CulturalTheme.colors.onPrimaryContainer,
    opacity: 0.7,
    textAlign: 'center',
    marginTop: CulturalSpacing.xs,
  },
  filtersContainer: {
    backgroundColor: CulturalTheme.colors.surface,
    padding: CulturalSpacing.md,
  },
  searchBar: {
    backgroundColor: CulturalTheme.colors.surfaceVariant,
    marginBottom: CulturalSpacing.md,
  },
  categoryScroll: {
    marginBottom: CulturalSpacing.md,
  },
  categoryContainer: {
    paddingRight: CulturalSpacing.md,
  },
  categoryChip: {
    marginRight: CulturalSpacing.sm,
    backgroundColor: CulturalTheme.colors.surfaceVariant,
  },
  selectedCategoryChip: {
    backgroundColor: CulturalTheme.colors.primary,
  },
  categoryChipText: {
    color: CulturalTheme.colors.onSurface,
  },
  selectedCategoryChipText: {
    color: CulturalTheme.colors.onPrimary,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: CulturalSpacing.sm,
  },
  sortLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: CulturalTheme.colors.onSurface,
  },
  sortButton: {
    paddingHorizontal: CulturalSpacing.sm,
    paddingVertical: CulturalSpacing.xs,
    borderRadius: CulturalBorderRadius.sm,
    backgroundColor: CulturalTheme.colors.surfaceVariant,
  },
  activeSortButton: {
    backgroundColor: CulturalTheme.colors.secondary,
  },
  sortButtonText: {
    fontSize: 12,
    color: CulturalTheme.colors.onSurface,
  },
  activeSortButtonText: {
    color: CulturalTheme.colors.onSecondary,
    fontWeight: '600',
  },
  discussionsList: {
    flex: 1,
  },
  postCard: {
    marginHorizontal: CulturalSpacing.md,
    marginBottom: CulturalSpacing.sm,
  },
  postSurface: {
    backgroundColor: CulturalTheme.colors.surface,
    borderRadius: CulturalBorderRadius.md,
    padding: CulturalSpacing.md,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: CulturalSpacing.sm,
  },
  postMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: CulturalSpacing.xs,
  },
  categoryText: {
    fontSize: 12,
    color: CulturalTheme.colors.primary,
    fontWeight: '500',
  },
  timeAgo: {
    fontSize: 12,
    color: CulturalTheme.colors.onSurfaceVariant,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: CulturalTheme.colors.onSurface,
    marginBottom: CulturalSpacing.sm,
    lineHeight: 22,
  },
  postPreview: {
    fontSize: 14,
    color: CulturalTheme.colors.onSurfaceVariant,
    lineHeight: 20,
    marginBottom: CulturalSpacing.md,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: CulturalSpacing.xs,
  },
  authorName: {
    fontSize: 12,
    fontWeight: '500',
    color: CulturalTheme.colors.onSurface,
  },
  authorLevel: {
    fontSize: 12,
    color: CulturalTheme.colors.onSurfaceVariant,
  },
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: CulturalSpacing.md,
  },
  statGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: CulturalSpacing.xs,
  },
  statText: {
    fontSize: 12,
    color: CulturalTheme.colors.onSurfaceVariant,
  },
  expertBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CulturalTheme.colors.tertiary,
    borderRadius: CulturalBorderRadius.sm,
    paddingHorizontal: CulturalSpacing.xs,
    paddingVertical: 2,
    gap: 2,
  },
  expertText: {
    fontSize: 10,
    fontWeight: '600',
    color: CulturalTheme.colors.onTertiary,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: CulturalSpacing.xxl,
  },
  emptyStateText: {
    fontSize: 16,
    color: CulturalTheme.colors.onSurfaceVariant,
    textAlign: 'center',
    marginTop: CulturalSpacing.md,
    paddingHorizontal: CulturalSpacing.xl,
  },
  fab: {
    position: 'absolute',
    margin: CulturalSpacing.md,
    right: 0,
    bottom: 0,
    backgroundColor: CulturalTheme.colors.secondary,
  },
});