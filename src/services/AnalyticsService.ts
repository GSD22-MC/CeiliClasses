// Web storage for analytics

interface AnalyticsEvent {
  eventName: string;
  timestamp: number;
  userId?: string;
  properties: Record<string, any>;
  sessionId: string;
}

interface UserMetrics {
  onboardingStartTime?: number;
  onboardingCompletionTime?: number;
  firstLessonStartTime?: number;
  firstLessonCompletionTime?: number;
  totalSessionTime: number;
  sessionsCount: number;
  lessonCompletions: number;
  pronunciationAttempts: number;
  communityInteractions: number;
  culturalConfidenceScore: number;
  retentionDays: number[];
}

interface FunnelMetrics {
  appInstalls: number;
  onboardingStarts: number;
  onboardingCompletions: number;
  firstLessonStarts: number;
  firstLessonCompletions: number;
  day1Retention: number;
  day7Retention: number;
  day30Retention: number;
}

interface PerformanceMetrics {
  appLaunchTime: number;
  screenTransitionTimes: Record<string, number>;
  apiResponseTimes: Record<string, number>;
  crashRate: number;
  memoryUsage: number[];
  batteryImpact: number;
}

class AnalyticsService {
  private sessionId: string;
  private sessionStartTime: number;
  private events: AnalyticsEvent[] = [];
  private performanceMarks: Record<string, number> = {};

  constructor() {
    this.sessionId = Date.now().toString();
    this.sessionStartTime = Date.now();
    this.initializeSession();
  }

  private async initializeSession(): Promise<void> {
    await this.trackEvent('session_start', {
      platform: 'react-native',
      timestamp: this.sessionStartTime
    });
  }

  async trackEvent(eventName: string, properties: Record<string, any> = {}): Promise<void> {
    const event: AnalyticsEvent = {
      eventName,
      timestamp: Date.now(),
      properties: {
        ...properties,
        sessionDuration: Date.now() - this.sessionStartTime
      },
      sessionId: this.sessionId
    };

    this.events.push(event);
    await this.persistEvent(event);
    
    // Send to analytics service in production
    console.log('Analytics Event:', event);
  }

  // Onboarding Tracking
  async trackOnboardingStart(): Promise<void> {
    const startTime = Date.now();
    localStorage.setItem('onboarding_start_time', startTime.toString());
    
    await this.trackEvent('onboarding_started', {
      startTime
    });
  }

  async trackOnboardingComplete(): Promise<void> {
    const startTimeStr = localStorage.getItem('onboarding_start_time');
    const completionTime = Date.now();
    const startTime = startTimeStr ? parseInt(startTimeStr) : completionTime;
    const duration = (completionTime - startTime) / 1000;

    await this.trackEvent('onboarding_completed', {
      startTime,
      completionTime,
      duration,
      completedUnder60s: duration < 60
    });

    await this.updateUserMetrics('onboardingCompletionTime', completionTime);
  }

  async trackOnboardingStep(stepName: string, stepNumber: number): Promise<void> {
    await this.trackEvent('onboarding_step_completed', {
      stepName,
      stepNumber,
      timestamp: Date.now()
    });
  }

  // Dance Lesson Tracking
  async trackLessonStart(lessonId: string, lessonName: string): Promise<void> {
    const startTime = Date.now();
    localStorage.setItem(`lesson_${lessonId}_start_time`, startTime.toString());

    await this.trackEvent('lesson_started', {
      lessonId,
      lessonName,
      startTime
    });
  }

  async trackLessonComplete(lessonId: string, lessonName: string): Promise<void> {
    const startTimeStr = localStorage.getItem(`lesson_${lessonId}_start_time`);
    const completionTime = Date.now();
    const startTime = startTimeStr ? parseInt(startTimeStr) : completionTime;
    const duration = (completionTime - startTime) / 1000;

    await this.trackEvent('lesson_completed', {
      lessonId,
      lessonName,
      startTime,
      completionTime,
      duration,
      success: true
    });

    await this.incrementUserMetric('lessonCompletions');
  }

  async trackStepComplete(stepNumber: number, stepName: string, attempts: number): Promise<void> {
    await this.trackEvent('step_completed', {
      stepNumber,
      stepName,
      attempts,
      timestamp: Date.now()
    });
  }

  // Pronunciation Tracking
  async trackPronunciationAttempt(term: string, score: number, isCorrect: boolean): Promise<void> {
    await this.trackEvent('pronunciation_attempt', {
      term,
      score,
      isCorrect,
      timestamp: Date.now()
    });

    await this.incrementUserMetric('pronunciationAttempts');
  }

  // Community Tracking
  async trackCommunityAction(action: 'view_post' | 'create_post' | 'reply' | 'search', details: any): Promise<void> {
    await this.trackEvent('community_action', {
      action,
      ...details,
      timestamp: Date.now()
    });

    await this.incrementUserMetric('communityInteractions');
  }

  // Performance Tracking
  async trackAppLaunch(): Promise<void> {
    const launchTime = Date.now() - this.sessionStartTime;
    
    await this.trackEvent('app_launch', {
      launchTime,
      fastLaunch: launchTime < 2000 // < 2 seconds
    });
  }

  async markPerformanceStart(label: string): Promise<void> {
    this.performanceMarks[`${label}_start`] = Date.now();
  }

  async markPerformanceEnd(label: string): Promise<void> {
    const startTime = this.performanceMarks[`${label}_start`];
    if (startTime) {
      const duration = Date.now() - startTime;
      
      await this.trackEvent('performance_metric', {
        metric: label,
        duration,
        fast: duration < 100 // < 100ms for transitions
      });
    }
  }

  // Screen Tracking
  async trackScreenView(screenName: string, previousScreen?: string): Promise<void> {
    await this.trackEvent('screen_view', {
      screenName,
      previousScreen,
      timestamp: Date.now()
    });
  }

  // Error Tracking
  async trackError(error: Error, context: string): Promise<void> {
    await this.trackEvent('error_occurred', {
      errorMessage: error.message,
      errorStack: error.stack,
      context,
      timestamp: Date.now()
    });
  }

  // Retention Tracking
  async trackUserReturn(): Promise<void> {
    const lastVisit = localStorage.getItem('last_visit_date');
    const today = new Date().toDateString();
    
    if (lastVisit && lastVisit !== today) {
      const daysSinceLastVisit = Math.floor(
        (Date.now() - new Date(lastVisit).getTime()) / (1000 * 60 * 60 * 24)
      );
      
      await this.trackEvent('user_return', {
        daysSinceLastVisit,
        returning: true
      });
    }
    
    localStorage.setItem('last_visit_date', today);
  }

  // Metrics Calculation
  async getUserMetrics(userId: string): Promise<UserMetrics> {
    const metricsStr = localStorage.getItem(`user_metrics_${userId}`);
    const defaultMetrics: UserMetrics = {
      totalSessionTime: 0,
      sessionsCount: 0,
      lessonCompletions: 0,
      pronunciationAttempts: 0,
      communityInteractions: 0,
      culturalConfidenceScore: 0,
      retentionDays: []
    };
    
    return metricsStr ? { ...defaultMetrics, ...JSON.parse(metricsStr) } : defaultMetrics;
  }

  async getFunnelMetrics(): Promise<FunnelMetrics> {
    const events = await this.getAllEvents();
    
    const appInstalls = events.filter(e => e.eventName === 'app_launch').length;
    const onboardingStarts = events.filter(e => e.eventName === 'onboarding_started').length;
    const onboardingCompletions = events.filter(e => e.eventName === 'onboarding_completed').length;
    const firstLessonStarts = events.filter(e => e.eventName === 'lesson_started').length;
    const firstLessonCompletions = events.filter(e => e.eventName === 'lesson_completed').length;
    
    // Calculate retention (simplified - in production, track user cohorts)
    const day1Retention = this.calculateRetention(events, 1);
    const day7Retention = this.calculateRetention(events, 7);
    const day30Retention = this.calculateRetention(events, 30);
    
    return {
      appInstalls,
      onboardingStarts,
      onboardingCompletions,
      firstLessonStarts,
      firstLessonCompletions,
      day1Retention,
      day7Retention,
      day30Retention
    };
  }

  async getPerformanceMetrics(): Promise<PerformanceMetrics> {
    const events = await this.getAllEvents();
    const performanceEvents = events.filter(e => e.eventName === 'performance_metric');
    
    const appLaunchEvents = events.filter(e => e.eventName === 'app_launch');
    const avgLaunchTime = appLaunchEvents.length > 0 
      ? appLaunchEvents.reduce((sum, e) => sum + (e.properties.launchTime || 0), 0) / appLaunchEvents.length 
      : 0;
    
    const screenTransitionTimes: Record<string, number> = {};
    performanceEvents.forEach(event => {
      if (event.properties.metric && event.properties.duration) {
        screenTransitionTimes[event.properties.metric] = event.properties.duration;
      }
    });
    
    return {
      appLaunchTime: avgLaunchTime,
      screenTransitionTimes,
      apiResponseTimes: {}, // Would be populated from network events
      crashRate: 0, // Would be calculated from error events
      memoryUsage: [], // Would be populated from performance monitoring
      batteryImpact: 0 // Would be calculated from usage patterns
    };
  }

  private calculateRetention(events: AnalyticsEvent[], days: number): number {
    // Simplified retention calculation
    const cutoffTime = Date.now() - (days * 24 * 60 * 60 * 1000);
    const recentUsers = new Set(
      events
        .filter(e => e.timestamp > cutoffTime && e.userId)
        .map(e => e.userId)
    );
    
    const totalUsers = new Set(events.filter(e => e.userId).map(e => e.userId));
    
    return totalUsers.size > 0 ? (recentUsers.size / totalUsers.size) * 100 : 0;
  }

  private async updateUserMetrics(key: keyof UserMetrics, value: any): Promise<void> {
    // In production, this would be user-specific
    const userId = 'current_user'; // Would get from auth store
    const metrics = await this.getUserMetrics(userId);
    (metrics as any)[key] = value;
    
    localStorage.setItem(`user_metrics_${userId}`, JSON.stringify(metrics));
  }

  private async incrementUserMetric(key: keyof UserMetrics): Promise<void> {
    const userId = 'current_user';
    const metrics = await this.getUserMetrics(userId);
    (metrics as any)[key] = ((metrics as any)[key] || 0) + 1;
    
    localStorage.setItem(`user_metrics_${userId}`, JSON.stringify(metrics));
  }

  private async persistEvent(event: AnalyticsEvent): Promise<void> {
    const existingEvents = await this.getAllEvents();
    existingEvents.push(event);
    
    // Keep only last 1000 events to prevent storage bloat
    const recentEvents = existingEvents.slice(-1000);
    
    localStorage.setItem('analytics_events', JSON.stringify(recentEvents));
  }

  private async getAllEvents(): Promise<AnalyticsEvent[]> {
    try {
      const eventsStr = localStorage.getItem('analytics_events');
      return eventsStr ? JSON.parse(eventsStr) : [];
    } catch (error) {
      console.error('Failed to load analytics events:', error);
      return [];
    }
  }

  async generateAnalyticsReport(): Promise<any> {
    const userMetrics = await this.getUserMetrics('current_user');
    const funnelMetrics = await this.getFunnelMetrics();
    const performanceMetrics = await this.getPerformanceMetrics();
    
    return {
      reportDate: new Date().toISOString(),
      userMetrics,
      funnelMetrics,
      performanceMetrics,
      keyInsights: this.generateInsights(userMetrics, funnelMetrics, performanceMetrics)
    };
  }

  private generateInsights(userMetrics: UserMetrics, funnelMetrics: FunnelMetrics, performanceMetrics: PerformanceMetrics): string[] {
    const insights = [];
    
    const onboardingConversion = funnelMetrics.onboardingStarts > 0 
      ? (funnelMetrics.onboardingCompletions / funnelMetrics.onboardingStarts) * 100 
      : 0;
    
    if (onboardingConversion < 80) {
      insights.push(`Onboarding conversion rate is ${onboardingConversion.toFixed(1)}% - consider simplifying the process`);
    }
    
    if (performanceMetrics.appLaunchTime > 2000) {
      insights.push(`App launch time is ${performanceMetrics.appLaunchTime}ms - optimize startup performance`);
    }
    
    if (funnelMetrics.day7Retention < 40) {
      insights.push(`7-day retention is ${funnelMetrics.day7Retention.toFixed(1)}% - improve engagement features`);
    }
    
    return insights;
  }

  async clearAnalyticsData(): Promise<void> {
    localStorage.removeItem('analytics_events');
    localStorage.removeItem('user_metrics_current_user');
    console.log('Analytics data cleared');
  }
}

export const analyticsService = new AnalyticsService();
export default AnalyticsService;