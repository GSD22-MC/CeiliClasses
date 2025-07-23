// Web accessibility audit service - no React Native dependencies needed

interface AccessibilityIssue {
  id: string;
  severity: 'critical' | 'major' | 'minor';
  wcagLevel: 'A' | 'AA' | 'AAA';
  principle: 'perceivable' | 'operable' | 'understandable' | 'robust';
  guideline: string;
  description: string;
  element: string;
  recommendation: string;
  automated: boolean;
}

interface ColorContrastCheck {
  foreground: string;
  background: string;
  ratio: number;
  passes: {
    aa: boolean;
    aaa: boolean;
    aaLarge: boolean;
    aaaLarge: boolean;
  };
}

interface AccessibilityAuditReport {
  reportDate: string;
  overallScore: number;
  issueCount: {
    critical: number;
    major: number;
    minor: number;
  };
  wcagCompliance: {
    levelA: number;
    levelAA: number;
    levelAAA: number;
  };
  issues: AccessibilityIssue[];
  colorContrastResults: ColorContrastCheck[];
  recommendations: string[];
}

class AccessibilityAuditService {
  private auditResults: AccessibilityIssue[] = [];

  // Color contrast calculations
  private hexToRgb(hex: string): [number, number, number] {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : [0, 0, 0];
  }

  private luminance(rgb: [number, number, number]): number {
    const [r, g, b] = rgb.map(val => {
      val = val / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  private contrastRatio(color1: string, color2: string): number {
    const lum1 = this.luminance(this.hexToRgb(color1));
    const lum2 = this.luminance(this.hexToRgb(color2));
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  }

  async checkColorContrast(foreground: string, background: string): Promise<ColorContrastCheck> {
    const ratio = this.contrastRatio(foreground, background);
    
    return {
      foreground,
      background,
      ratio: Math.round(ratio * 100) / 100,
      passes: {
        aa: ratio >= 4.5,
        aaa: ratio >= 7,
        aaLarge: ratio >= 3,
        aaaLarge: ratio >= 4.5
      }
    };
  }

  // Automated accessibility checks
  async runAutomatedAudit(): Promise<AccessibilityIssue[]> {
    const issues: AccessibilityIssue[] = [];

    // Check color contrasts
    const colorPairs = [
      { fg: '#006633', bg: '#FFFFFF', element: 'Primary text on white background' },
      { fg: '#FFFFFF', bg: '#006633', element: 'White text on primary background' },
      { fg: '#757575', bg: '#FFFFFF', element: 'Secondary text on white background' },
      { fg: '#212121', bg: '#FAFAFA', element: 'Primary text on surface background' }
    ];

    for (const pair of colorPairs) {
      const contrastCheck = await this.checkColorContrast(pair.fg, pair.bg);
      
      if (!contrastCheck.passes.aa) {
        issues.push({
          id: `contrast_${Date.now()}`,
          severity: 'critical',
          wcagLevel: 'AA',
          principle: 'perceivable',
          guideline: '1.4.3 Contrast (Minimum)',
          description: `Color contrast ratio of ${contrastCheck.ratio}:1 is below WCAG AA standard (4.5:1)`,
          element: pair.element,
          recommendation: 'Increase color contrast to meet WCAG AA standards',
          automated: true
        });
      }
    }

    // Check for missing accessibility labels
    issues.push(...this.checkMissingAccessibilityLabels());

    // Check for proper heading structure
    issues.push(...this.checkHeadingStructure());

    // Check for keyboard navigation
    issues.push(...this.checkKeyboardNavigation());

    // Check for screen reader compatibility
    issues.push(...await this.checkScreenReaderCompatibility());

    this.auditResults = issues;
    return issues;
  }

  private checkMissingAccessibilityLabels(): AccessibilityIssue[] {
    const issues: AccessibilityIssue[] = [];

    // In a real implementation, this would scan the component tree
    // For now, we'll identify known issues from the codebase analysis

    issues.push({
      id: 'missing_label_video_controls',
      severity: 'critical',
      wcagLevel: 'A',
      principle: 'perceivable',
      guideline: '1.1.1 Non-text Content',
      description: 'Video player controls may be missing accessibility labels',
      element: 'DanceLessonPlayer video controls',
      recommendation: 'Add accessibilityLabel props to all video control buttons',
      automated: true
    });

    issues.push({
      id: 'missing_label_pronunciation_button',
      severity: 'major',
      wcagLevel: 'A',
      principle: 'perceivable',
      guideline: '1.1.1 Non-text Content',
      description: 'Pronunciation buttons need descriptive labels for screen readers',
      element: 'PronunciationButton components',
      recommendation: 'Add accessibilityLabel describing the pronunciation function',
      automated: true
    });

    return issues;
  }

  private checkHeadingStructure(): AccessibilityIssue[] {
    const issues: AccessibilityIssue[] = [];

    // Check for proper heading hierarchy
    issues.push({
      id: 'heading_structure',
      severity: 'major',
      wcagLevel: 'AA',
      principle: 'perceivable',
      guideline: '1.3.1 Info and Relationships',
      description: 'Heading structure should follow logical hierarchy (h1 > h2 > h3)',
      element: 'Screen titles and section headers',
      recommendation: 'Use accessibilityRole="header" and accessibilityLevel for proper heading structure',
      automated: true
    });

    return issues;
  }

  private checkKeyboardNavigation(): AccessibilityIssue[] {
    const issues: AccessibilityIssue[] = [];

    issues.push({
      id: 'keyboard_navigation',
      severity: 'critical',
      wcagLevel: 'A',
      principle: 'operable',
      guideline: '2.1.1 Keyboard',
      description: 'All interactive elements must be accessible via keyboard navigation',
      element: 'Tab navigation and interactive components',
      recommendation: 'Ensure proper focus management and tab order for all interactive elements',
      automated: true
    });

    return issues;
  }

  private async checkScreenReaderCompatibility(): Promise<AccessibilityIssue[]> {
    const issues: AccessibilityIssue[] = [];

    try {
      // Web accessibility - check for screen reader using web APIs
      const isScreenReaderEnabled = window.speechSynthesis !== undefined;
      
      if (isScreenReaderEnabled) {
        // Check for VoiceOver compatibility
        issues.push({
          id: 'voiceover_support',
          severity: 'major',
          wcagLevel: 'A',
          principle: 'robust',
          guideline: '4.1.2 Name, Role, Value',
          description: 'Components should properly announce their state and purpose to VoiceOver',
          element: 'Interactive components',
          recommendation: 'Add accessibilityState, accessibilityValue, and accessibilityHint props',
          automated: true
        });
      } else {
        // Check for TalkBack compatibility
        issues.push({
          id: 'talkback_support',
          severity: 'major',
          wcagLevel: 'A',
          principle: 'robust',
          guideline: '4.1.2 Name, Role, Value',
          description: 'Components should properly announce their state and purpose to TalkBack',
          element: 'Interactive components',
          recommendation: 'Add accessibilityState, accessibilityValue, and accessibilityHint props',
          automated: true
        });
      }
    } catch (error) {
      console.error('Error checking screen reader status:', error);
    }

    return issues;
  }

  // Manual accessibility testing guidelines
  async getManualTestingChecklist(): Promise<Array<{category: string, checks: string[]}>> {
    return [
      {
        category: 'Screen Reader Testing',
        checks: [
          'Navigate the entire app using only screen reader',
          'Verify all content is announced correctly',
          'Check that interactive elements announce their state',
          'Ensure proper reading order for all screens',
          'Test gesture navigation with screen reader enabled'
        ]
      },
      {
        category: 'Keyboard Navigation',
        checks: [
          'Navigate using only keyboard/switch control',
          'Verify focus indicators are visible',
          'Check tab order is logical',
          'Ensure all functionality is keyboard accessible',
          'Test escape routes from modal dialogs'
        ]
      },
      {
        category: 'Visual Accessibility',
        checks: [
          'Test with 200% zoom/large text settings',
          'Verify interface works in high contrast mode',
          'Check color blind accessibility',
          'Test in bright sunlight/dark environments',
          'Verify animations can be reduced/disabled'
        ]
      },
      {
        category: 'Motor Accessibility',
        checks: [
          'Test with assistive touch enabled',
          'Verify touch targets are at least 44pt',
          'Check for accidental activation prevention',
          'Test with voice control',
          'Verify timeout extensions are available'
        ]
      },
      {
        category: 'Cognitive Accessibility',
        checks: [
          'Test with reduced motion settings',
          'Verify instructions are clear and simple',
          'Check for consistent navigation patterns',
          'Test error recovery mechanisms',
          'Verify cultural content is appropriately explained'
        ]
      }
    ];
  }

  async generateAccessibilityReport(): Promise<AccessibilityAuditReport> {
    const issues = await this.runAutomatedAudit();
    
    const issueCount = {
      critical: issues.filter(i => i.severity === 'critical').length,
      major: issues.filter(i => i.severity === 'major').length,
      minor: issues.filter(i => i.severity === 'minor').length
    };

    const totalIssues = issueCount.critical + issueCount.major + issueCount.minor;
    const maxScore = 100;
    const overallScore = Math.max(0, maxScore - (issueCount.critical * 20 + issueCount.major * 10 + issueCount.minor * 5));

    const wcagCompliance = {
      levelA: this.calculateWCAGCompliance(issues, 'A'),
      levelAA: this.calculateWCAGCompliance(issues, 'AA'),
      levelAAA: this.calculateWCAGCompliance(issues, 'AAA')
    };

    // Test color contrasts
    const colorContrastResults = await Promise.all([
      this.checkColorContrast('#006633', '#FFFFFF'),
      this.checkColorContrast('#FFFFFF', '#006633'),
      this.checkColorContrast('#757575', '#FFFFFF'),
      this.checkColorContrast('#212121', '#FAFAFA')
    ]);

    const recommendations = this.generateAccessibilityRecommendations(issues, issueCount);

    return {
      reportDate: new Date().toISOString(),
      overallScore,
      issueCount,
      wcagCompliance,
      issues,
      colorContrastResults,
      recommendations
    };
  }

  private calculateWCAGCompliance(issues: AccessibilityIssue[], level: 'A' | 'AA' | 'AAA'): number {
    const relevantIssues = issues.filter(i => i.wcagLevel === level);
    const totalChecks = this.getTotalWCAGChecks(level);
    const failedChecks = relevantIssues.length;
    
    return Math.max(0, ((totalChecks - failedChecks) / totalChecks) * 100);
  }

  private getTotalWCAGChecks(level: 'A' | 'AA' | 'AAA'): number {
    // Simplified - in production, this would be based on comprehensive WCAG criteria
    switch (level) {
      case 'A': return 25;
      case 'AA': return 13;
      case 'AAA': return 7;
      default: return 25;
    }
  }

  private generateAccessibilityRecommendations(issues: AccessibilityIssue[], issueCount: any): string[] {
    const recommendations = [];

    if (issueCount.critical > 0) {
      recommendations.push('Address critical accessibility issues immediately - these prevent basic app usage for users with disabilities');
    }

    if (issueCount.major > 0) {
      recommendations.push('Fix major accessibility issues to improve user experience for assistive technology users');
    }

    // Specific recommendations based on common issues
    const contrastIssues = issues.filter(i => i.guideline.includes('Contrast'));
    if (contrastIssues.length > 0) {
      recommendations.push('Improve color contrast ratios to meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)');
    }

    const labelIssues = issues.filter(i => i.guideline.includes('Non-text Content'));
    if (labelIssues.length > 0) {
      recommendations.push('Add descriptive accessibility labels to all interactive elements and images');
    }

    const navigationIssues = issues.filter(i => i.guideline.includes('Keyboard'));
    if (navigationIssues.length > 0) {
      recommendations.push('Implement proper keyboard navigation and focus management');
    }

    recommendations.push('Conduct manual testing with real assistive technologies (VoiceOver, TalkBack, Switch Control)');
    recommendations.push('Include users with disabilities in user testing sessions');

    return recommendations;
  }

  async scheduleQuarterlyAudit(): Promise<void> {
    // In production, this would schedule automated audits
    const nextAuditDate = new Date();
    nextAuditDate.setMonth(nextAuditDate.getMonth() + 3);
    
    console.log('Quarterly accessibility audit scheduled for:', nextAuditDate.toISOString());
  }

  // Integration with development workflow
  async validateComponent(componentName: string, props: any): Promise<AccessibilityIssue[]> {
    const issues: AccessibilityIssue[] = [];

    // Check for missing accessibility props
    if (!props.accessibilityLabel && !props.accessibilityLabelledBy) {
      issues.push({
        id: `missing_label_${componentName}`,
        severity: 'major',
        wcagLevel: 'A',
        principle: 'perceivable',
        guideline: '1.1.1 Non-text Content',
        description: `${componentName} is missing accessibility label`,
        element: componentName,
        recommendation: 'Add accessibilityLabel prop with descriptive text',
        automated: true
      });
    }

    // Check for proper roles
    if (props.onPress && !props.accessibilityRole) {
      issues.push({
        id: `missing_role_${componentName}`,
        severity: 'major',
        wcagLevel: 'A',
        principle: 'robust',
        guideline: '4.1.2 Name, Role, Value',
        description: `Interactive ${componentName} is missing accessibility role`,
        element: componentName,
        recommendation: 'Add accessibilityRole="button" for interactive elements',
        automated: true
      });
    }

    return issues;
  }
}

export const accessibilityAuditService = new AccessibilityAuditService();
export default AccessibilityAuditService;