// Web localStorage for usability testing

interface TestScenario {
  id: string;
  name: string;
  description: string;
  expectedCompletionTime: number; // in seconds
  steps: string[];
  successCriteria: string[];
}

interface TestSession {
  id: string;
  userId: string;
  scenarioId: string;
  startTime: number;
  endTime?: number;
  completed: boolean;
  success: boolean;
  errors: TestError[];
  userFeedback: string;
  completionTime?: number;
}

interface TestError {
  timestamp: number;
  description: string;
  severity: 'low' | 'medium' | 'high';
  resolved: boolean;
}

interface UsabilityMetrics {
  taskSuccessRate: number;
  averageCompletionTime: number;
  errorRate: number;
  userSatisfactionScore: number;
  onboardingCompletionRate: number;
  primaryActionCompletionRate: number;
}

class UsabilityTestingService {
  private testScenarios: TestScenario[] = [
    {
      id: 'onboarding_60s',
      name: 'Complete Onboarding in 60 Seconds',
      description: 'New user completes cultural profile setup and reaches first dance lesson',
      expectedCompletionTime: 60,
      steps: [
        'Open app for first time',
        'Complete welcome screen',
        'Fill cultural profile',
        'Reach first dance lesson',
        'Start learning first step'
      ],
      successCriteria: [
        'Completes onboarding < 60 seconds',
        'Reaches dance lesson successfully',
        'Shows cultural confidence increase'
      ]
    },
    {
      id: 'first_dance_lesson',
      name: 'Complete First Dance Lesson',
      description: 'User learns and completes their first ceili dance lesson',
      expectedCompletionTime: 300,
      steps: [
        'Navigate to Learn tab',
        'Select first dance lesson',
        'Watch instruction video',
        'Practice with pronunciation',
        'Mark steps as complete'
      ],
      successCriteria: [
        'Completes all dance steps',
        'Pronounces Irish terms correctly',
        'Shows lesson completion'
      ]
    },
    {
      id: 'community_engagement',
      name: 'Engage with Community',
      description: 'User asks question and engages with cultural community',
      expectedCompletionTime: 120,
      steps: [
        'Navigate to Community tab',
        'Browse existing discussions',
        'Ask a cultural question',
        'Receive community response'
      ],
      successCriteria: [
        'Successfully posts question',
        'Receives helpful response',
        'Feels welcomed by community'
      ]
    },
    {
      id: 'pronunciation_practice',
      name: 'Pronunciation Practice Session',
      description: 'User practices Irish pronunciation with feedback',
      expectedCompletionTime: 180,
      steps: [
        'Find pronunciation button',
        'Listen to native audio',
        'Practice pronunciation',
        'Receive feedback',
        'Improve score'
      ],
      successCriteria: [
        'Understands pronunciation guide',
        'Completes practice session',
        'Shows improvement in score'
      ]
    },
    {
      id: 'offline_usage',
      name: 'Use App Offline',
      description: 'User accesses cached content without internet connection',
      expectedCompletionTime: 90,
      steps: [
        'Disable internet connection',
        'Open app',
        'Access previously viewed content',
        'Practice cached lessons',
        'See offline indicator'
      ],
      successCriteria: [
        'App functions without connection',
        'Content is accessible',
        'Clear offline status indication'
      ]
    }
  ];

  private currentSession: TestSession | null = null;
  private sessionHistory: TestSession[] = [];

  async startTestSession(scenarioId: string, userId: string): Promise<string> {
    const scenario = this.testScenarios.find(s => s.id === scenarioId);
    if (!scenario) {
      throw new Error('Test scenario not found');
    }

    const session: TestSession = {
      id: Date.now().toString(),
      userId,
      scenarioId,
      startTime: Date.now(),
      completed: false,
      success: false,
      errors: [],
      userFeedback: ''
    };

    this.currentSession = session;
    await this.saveSession(session);
    
    return session.id;
  }

  async completeTestSession(success: boolean, userFeedback: string): Promise<void> {
    if (!this.currentSession) {
      throw new Error('No active test session');
    }

    const endTime = Date.now();
    this.currentSession.endTime = endTime;
    this.currentSession.completed = true;
    this.currentSession.success = success;
    this.currentSession.userFeedback = userFeedback;
    this.currentSession.completionTime = (endTime - this.currentSession.startTime) / 1000;

    await this.saveSession(this.currentSession);
    this.sessionHistory.push(this.currentSession);
    this.currentSession = null;
  }

  async recordError(description: string, severity: 'low' | 'medium' | 'high'): Promise<void> {
    if (!this.currentSession) return;

    const error: TestError = {
      timestamp: Date.now(),
      description,
      severity,
      resolved: false
    };

    this.currentSession.errors.push(error);
    await this.saveSession(this.currentSession);
  }

  async getUsabilityMetrics(): Promise<UsabilityMetrics> {
    const sessions = await this.getAllSessions();
    const completedSessions = sessions.filter(s => s.completed);

    if (completedSessions.length === 0) {
      return {
        taskSuccessRate: 0,
        averageCompletionTime: 0,
        errorRate: 0,
        userSatisfactionScore: 0,
        onboardingCompletionRate: 0,
        primaryActionCompletionRate: 0
      };
    }

    const successfulSessions = completedSessions.filter(s => s.success);
    const onboardingSessions = completedSessions.filter(s => s.scenarioId === 'onboarding_60s');
    const primaryActionSessions = completedSessions.filter(s => 
      s.scenarioId === 'first_dance_lesson' || s.scenarioId === 'onboarding_60s'
    );

    const totalErrors = completedSessions.reduce((sum, s) => sum + s.errors.length, 0);
    const totalCompletionTime = completedSessions.reduce((sum, s) => sum + (s.completionTime || 0), 0);

    // Calculate user satisfaction from feedback (simplified scoring)
    const feedbackScores = completedSessions
      .filter(s => s.userFeedback)
      .map(s => this.calculateSatisfactionScore(s.userFeedback));
    
    const avgSatisfaction = feedbackScores.length > 0 
      ? feedbackScores.reduce((sum, score) => sum + score, 0) / feedbackScores.length 
      : 0;

    return {
      taskSuccessRate: (successfulSessions.length / completedSessions.length) * 100,
      averageCompletionTime: totalCompletionTime / completedSessions.length,
      errorRate: (totalErrors / completedSessions.length),
      userSatisfactionScore: avgSatisfaction,
      onboardingCompletionRate: onboardingSessions.filter(s => s.success).length / Math.max(onboardingSessions.length, 1) * 100,
      primaryActionCompletionRate: primaryActionSessions.filter(s => s.success).length / Math.max(primaryActionSessions.length, 1) * 100
    };
  }

  private calculateSatisfactionScore(feedback: string): number {
    // Simplified sentiment analysis - in production, use proper sentiment analysis
    const positiveWords = ['good', 'great', 'excellent', 'easy', 'intuitive', 'helpful', 'clear'];
    const negativeWords = ['bad', 'difficult', 'confusing', 'slow', 'hard', 'unclear', 'frustrating'];
    
    const words = feedback.toLowerCase().split(' ');
    let score = 3; // neutral baseline (out of 5)
    
    words.forEach(word => {
      if (positiveWords.includes(word)) score += 0.5;
      if (negativeWords.includes(word)) score -= 0.5;
    });
    
    return Math.max(1, Math.min(5, score));
  }

  async getTestScenarios(): Promise<TestScenario[]> {
    return this.testScenarios;
  }

  async scheduleWeeklyTest(userId: string): Promise<void> {
    // In production, this would integrate with a scheduling system
    const testSchedule = {
      userId,
      nextTestDate: Date.now() + (7 * 24 * 60 * 60 * 1000), // 7 days from now
      scenarios: ['onboarding_60s', 'first_dance_lesson', 'community_engagement']
    };

    localStorage.setItem(`test_schedule_${userId}`, JSON.stringify(testSchedule));
  }

  async generateWeeklyReport(): Promise<any> {
    const metrics = await this.getUsabilityMetrics();
    const sessions = await this.getAllSessions();
    
    const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const recentSessions = sessions.filter(s => s.startTime > weekAgo);
    
    return {
      reportDate: new Date().toISOString(),
      testPeriod: '7 days',
      totalSessions: recentSessions.length,
      metrics,
      topIssues: this.getTopIssues(recentSessions),
      recommendations: this.generateRecommendations(metrics)
    };
  }

  private getTopIssues(sessions: TestSession[]): Array<{issue: string, frequency: number, severity: string}> {
    const issueMap = new Map();
    
    sessions.forEach(session => {
      session.errors.forEach(error => {
        const key = error.description;
        const existing = issueMap.get(key) || { frequency: 0, severity: error.severity };
        existing.frequency++;
        if (error.severity === 'high') existing.severity = 'high';
        else if (error.severity === 'medium' && existing.severity !== 'high') existing.severity = 'medium';
        issueMap.set(key, existing);
      });
    });
    
    return Array.from(issueMap.entries())
      .map(([issue, data]) => ({ issue, ...data }))
      .sort((a, b) => b.frequency - a.frequency)
      .slice(0, 5);
  }

  private generateRecommendations(metrics: UsabilityMetrics): string[] {
    const recommendations = [];
    
    if (metrics.taskSuccessRate < 95) {
      recommendations.push('Improve task success rate by simplifying user flows');
    }
    
    if (metrics.onboardingCompletionRate < 90) {
      recommendations.push('Optimize onboarding process to increase completion rate');
    }
    
    if (metrics.errorRate > 2) {
      recommendations.push('Reduce user errors through better UI design and validation');
    }
    
    if (metrics.userSatisfactionScore < 4) {
      recommendations.push('Enhance user satisfaction through improved UX and feedback mechanisms');
    }
    
    return recommendations;
  }

  private async saveSession(session: TestSession): Promise<void> {
    localStorage.setItem(`test_session_${session.id}`, JSON.stringify(session));
  }

  private async getAllSessions(): Promise<TestSession[]> {
    try {
      const keys = localStorage.getAllKeys();
      const sessionKeys = keys.filter(key => key.startsWith('test_session_'));
      const sessions = localStorage.multiGet(sessionKeys);
      
      return sessions
        .map(([_, value]) => value ? JSON.parse(value) : null)
        .filter(session => session !== null);
    } catch (error) {
      console.error('Failed to load test sessions:', error);
      return [];
    }
  }

  // Method to integrate with existing app flows
  async trackUserAction(action: string, context: any): Promise<void> {
    if (!this.currentSession) return;
    
    // Track user actions during test sessions for analysis
    const actionLog = {
      timestamp: Date.now(),
      action,
      context,
      sessionId: this.currentSession.id
    };
    
    // In production, this would be sent to analytics service
    console.log('User action tracked:', actionLog);
  }
}

export const usabilityTestingService = new UsabilityTestingService();
export default UsabilityTestingService;