import { create } from 'zustand';
import { AsyncStorage } from '../utils/webStorage';

export interface DanceLesson {
  id: string;
  title: string;
  irishTitle: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  videoStreams: {
    overview: string;
    steps: string;
    music: string;
  };
  completed: boolean;
  progress: number; // 0-100
}

export interface HeritageArticle {
  id: string;
  title: string;
  category: 'History' | 'Culture' | 'Music' | 'Dance';
  content: string;
  excerpt: string;
  readTime: string;
  readCount: number;
  completed: boolean;
}

export interface CulturalTerm {
  term: string;
  pronunciation: string;
  definition: string;
  audioUrl: string;
  mastered: boolean;
  attempts: number;
  accuracy: number;
}

interface CulturalContentState {
  danceLessons: DanceLesson[];
  heritageArticles: HeritageArticle[];
  culturalTerms: CulturalTerm[];
  isLoading: boolean;
  error: string | null;
  lastSyncDate: string | null;
}

interface CulturalContentActions {
  loadContent: () => Promise<void>;
  updateLessonProgress: (lessonId: string, progress: number) => void;
  markLessonComplete: (lessonId: string) => void;
  updateTermMastery: (term: string, accuracy: number) => void;
  markArticleRead: (articleId: string) => void;
  syncProgress: () => Promise<void>;
  clearError: () => void;
}

type CulturalContentStore = CulturalContentState & CulturalContentActions;

// Default cultural content
const defaultDanceLessons: DanceLesson[] = [
  {
    id: '1',
    title: 'The Siege of Ennis',
    irishTitle: 'Léigear Inis',
    difficulty: 'Beginner',
    duration: '12 min',
    description: 'Ireland\'s most popular ceili dance, perfect for beginners',
    videoStreams: {
      overview: 'siege_of_ennis_overview.mp4',
      steps: 'siege_of_ennis_steps.mp4',
      music: 'siege_of_ennis_music.mp4',
    },
    completed: false,
    progress: 0,
  },
  {
    id: '2',
    title: 'Walls of Limerick',
    irishTitle: 'Ballaí Luimnigh',
    difficulty: 'Beginner',
    duration: '15 min',
    description: 'A lively progressive dance for groups of couples',
    videoStreams: {
      overview: 'walls_of_limerick_overview.mp4',
      steps: 'walls_of_limerick_steps.mp4',
      music: 'walls_of_limerick_music.mp4',
    },
    completed: false,
    progress: 0,
  },
  {
    id: '3',
    title: 'The Stack of Barley',
    irishTitle: 'Cruach an Eorna',
    difficulty: 'Intermediate',
    duration: '18 min',
    description: 'Traditional ceili dance with complex formations',
    videoStreams: {
      overview: 'stack_of_barley_overview.mp4',
      steps: 'stack_of_barley_steps.mp4',
      music: 'stack_of_barley_music.mp4',
    },
    completed: false,
    progress: 0,
  },
];

const defaultCulturalTerms: CulturalTerm[] = [
  {
    term: 'Céilí',
    pronunciation: 'KAY-lee',
    definition: 'A social gathering with Irish traditional music and dancing',
    audioUrl: 'ceili_pronunciation.mp3',
    mastered: false,
    attempts: 0,
    accuracy: 0,
  },
  {
    term: 'Rince',
    pronunciation: 'RING-keh',
    definition: 'Dance',
    audioUrl: 'rince_pronunciation.mp3',
    mastered: false,
    attempts: 0,
    accuracy: 0,
  },
  {
    term: 'Sliabh na mBan',
    pronunciation: 'SHLEE-uv nuh mahn',
    definition: 'Mountain of the Women - a traditional ceili dance',
    audioUrl: 'sliabh_na_mban_pronunciation.mp3',
    mastered: false,
    attempts: 0,
    accuracy: 0,
  },
  {
    term: 'Ar Rince',
    pronunciation: 'er RING-keh',
    definition: 'For dancing / to dance',
    audioUrl: 'ar_rince_pronunciation.mp3',
    mastered: false,
    attempts: 0,
    accuracy: 0,
  },
];

const defaultHeritageArticles: HeritageArticle[] = [
  {
    id: '1',
    title: 'The Origins of Céilí Dancing',
    category: 'Dance',
    content: 'Full article content would be loaded from API...',
    excerpt: 'Discover how céilí dancing evolved from ancient Irish social gatherings into the structured dances we know today.',
    readTime: '5 min read',
    readCount: 0,
    completed: false,
  },
  {
    id: '2',
    title: 'Traditional Irish Music and Its Role in Dance',
    category: 'Music',
    content: 'Full article content would be loaded from API...',
    excerpt: 'Explore the deep connection between traditional Irish music and dance, and how musicians and dancers collaborate.',
    readTime: '7 min read',
    readCount: 0,
    completed: false,
  },
];

export const useCulturalContentStore = create<CulturalContentStore>((set, get) => ({
  // Initial state
  danceLessons: defaultDanceLessons,
  heritageArticles: defaultHeritageArticles,
  culturalTerms: defaultCulturalTerms,
  isLoading: false,
  error: null,
  lastSyncDate: null,

  // Actions
  loadContent: async () => {
    set({ isLoading: true, error: null });
    try {
      // Load cached content from AsyncStorage
      const cachedLessons = await AsyncStorage.getItem('cached_dance_lessons');
      const cachedTerms = await AsyncStorage.getItem('cached_cultural_terms');
      const cachedArticles = await AsyncStorage.getItem('cached_heritage_articles');
      const lastSync = await AsyncStorage.getItem('content_last_sync');

      if (cachedLessons) {
        const lessons = JSON.parse(cachedLessons);
        set(state => ({ ...state, danceLessons: lessons }));
      }

      if (cachedTerms) {
        const terms = JSON.parse(cachedTerms);
        set(state => ({ ...state, culturalTerms: terms }));
      }

      if (cachedArticles) {
        const articles = JSON.parse(cachedArticles);
        set(state => ({ ...state, heritageArticles: articles }));
      }

      set({ lastSyncDate: lastSync, isLoading: false });
    } catch (error) {
      console.error(__DEV__ && 'Failed to load cultural content:', error);
      set({ 
        error: 'Failed to load content',
        isLoading: false 
      });
    }
  },

  updateLessonProgress: (lessonId: string, progress: number) => {
    const { danceLessons } = get();
    const updatedLessons = danceLessons.map(lesson =>
      lesson.id === lessonId
        ? { ...lesson, progress: Math.min(100, Math.max(0, progress)) }
        : lesson
    );
    
    set({ danceLessons: updatedLessons });
    AsyncStorage.setItem('cached_dance_lessons', JSON.stringify(updatedLessons));
  },

  markLessonComplete: (lessonId: string) => {
    const { danceLessons } = get();
    const updatedLessons = danceLessons.map(lesson =>
      lesson.id === lessonId
        ? { ...lesson, completed: true, progress: 100 }
        : lesson
    );
    
    set({ danceLessons: updatedLessons });
    AsyncStorage.setItem('cached_dance_lessons', JSON.stringify(updatedLessons));
  },

  updateTermMastery: (term: string, accuracy: number) => {
    const { culturalTerms } = get();
    const updatedTerms = culturalTerms.map(culturalTerm =>
      culturalTerm.term === term
        ? {
            ...culturalTerm,
            attempts: culturalTerm.attempts + 1,
            accuracy: Math.round((culturalTerm.accuracy * culturalTerm.attempts + accuracy) / (culturalTerm.attempts + 1)),
            mastered: accuracy >= 80 && culturalTerm.attempts >= 3
          }
        : culturalTerm
    );
    
    set({ culturalTerms: updatedTerms });
    AsyncStorage.setItem('cached_cultural_terms', JSON.stringify(updatedTerms));
  },

  markArticleRead: (articleId: string) => {
    const { heritageArticles } = get();
    const updatedArticles = heritageArticles.map(article =>
      article.id === articleId
        ? {
            ...article,
            readCount: article.readCount + 1,
            completed: true
          }
        : article
    );
    
    set({ heritageArticles: updatedArticles });
    AsyncStorage.setItem('cached_heritage_articles', JSON.stringify(updatedArticles));
  },

  syncProgress: async () => {
    try {
      // TODO: Implement API sync when backend is available
      const currentDate = new Date().toISOString();
      await AsyncStorage.setItem('content_last_sync', currentDate);
      set({ lastSyncDate: currentDate });
    } catch (error) {
      console.error(__DEV__ && 'Failed to sync progress:', error);
      set({ error: 'Sync failed' });
    }
  },

  clearError: () => set({ error: null }),
}));