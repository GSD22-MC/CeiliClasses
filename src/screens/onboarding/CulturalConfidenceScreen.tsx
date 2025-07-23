import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView } from '../../components/ui';
import { useAuthStore } from '../../stores/authStore';

const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContentScrollView = styled(ScrollView)`
  flex: 1;
  padding: 24px;
`;

const Title = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 16px;
`;

const Subtitle = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.onSurface};
  text-align: center;
  margin-bottom: 32px;
  line-height: 22px;
`;

const QuestionCard = styled(View)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
`;

const QuestionText = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onSurface};
  margin-bottom: 16px;
  line-height: 22px;
`;

const AnswerButton = styled(TouchableOpacity)<{ selected: boolean }>`
  background-color: ${({ selected, theme }) => selected ? theme.colors.primaryContainer : theme.colors.background};
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid ${({ selected, theme }) => selected ? theme.colors.primary : theme.colors.outline};
`;

const AnswerText = styled(Text)<{ selected: boolean }>`
  font-size: 14px;
  color: ${({ selected, theme }) => selected ? theme.colors.primary : theme.colors.onSurface};
  font-weight: ${props => props.selected ? '600' : '400'};
`;

const ContinueButton = styled(TouchableOpacity)<{ enabled: boolean }>`
  background-color: ${({ enabled, theme }) => enabled ? theme.colors.primary : theme.colors.outline};
  padding: 16px 32px;
  border-radius: 8px;
  align-items: center;
  margin: 24px;
`;

const ContinueButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 16px;
  font-weight: 600;
`;

interface Question {
  id: string;
  question: string;
  answers: { text: string; value: number }[];
}

const culturalQuestions: Question[] = [
  {
    id: 'connection',
    question: 'How connected do you feel to Irish culture?',
    answers: [
      { text: 'Very connected - it\'s part of my heritage', value: 5 },
      { text: 'Somewhat connected - I have some Irish ancestry', value: 4 },
      { text: 'Interested but not personally connected', value: 3 },
      { text: 'New to Irish culture but very curious', value: 2 },
      { text: 'Just beginning to explore', value: 1 }
    ]
  },
  {
    id: 'motivation',
    question: 'What draws you most to learning ceili dancing?',
    answers: [
      { text: 'Connecting with my Irish heritage', value: 5 },
      { text: 'The community and social aspects', value: 4 },
      { text: 'The beautiful music and rhythms', value: 3 },
      { text: 'Physical activity and fitness', value: 2 },
      { text: 'Learning something completely new', value: 1 }
    ]
  },
  {
    id: 'knowledge',
    question: 'How familiar are you with Irish traditions?',
    answers: [
      { text: 'Very familiar - I grew up with them', value: 5 },
      { text: 'Familiar with some traditions', value: 4 },
      { text: 'Some basic knowledge', value: 3 },
      { text: 'Limited knowledge but eager to learn', value: 2 },
      { text: 'Complete beginner', value: 1 }
    ]
  }
];

const CulturalConfidenceScreen: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const updateCulturalConfidence = useAuthStore(state => state.updateCulturalConfidence);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const handleAnswerSelect = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleContinue = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const averageScore = totalScore / culturalQuestions.length;
    const confidenceScore = Math.round((averageScore / 5) * 100);
    
    updateCulturalConfidence(confidenceScore);
    navigation.navigate('CommunityIntegration' as never);
  };

  const allQuestionsAnswered = culturalQuestions.every(q => answers[q.id] !== undefined);

  return (
    <Container>
      <ContentScrollView>
        <Title>Cultural Understanding</Title>
        <Subtitle>
          Help us understand your connection to Irish culture so we can personalize your learning experience
        </Subtitle>
        
        {culturalQuestions.map((question) => (
          <QuestionCard key={question.id}>
            <QuestionText>{question.question}</QuestionText>
            {question.answers.map((answer, index) => (
              <AnswerButton
                key={index}
                selected={answers[question.id] === answer.value}
                onPress={() => handleAnswerSelect(question.id, answer.value)}
              >
                <AnswerText selected={answers[question.id] === answer.value}>
                  {answer.text}
                </AnswerText>
              </AnswerButton>
            ))}
          </QuestionCard>
        ))}

        <View style={{ padding: 16, marginTop: 16 }}>
          <Text style={{ 
            fontSize: 14, 
            color: theme.colors.onSurface, 
            textAlign: 'center',
            lineHeight: 20
          }}>
            This helps us provide content that's meaningful and appropriate for your cultural background and interests.
          </Text>
        </View>
      </ContentScrollView>
      
      <ContinueButton enabled={allQuestionsAnswered} onPress={handleContinue}>
        <ContinueButtonText>
          {allQuestionsAnswered ? 'Continue' : `Answer ${culturalQuestions.length - Object.keys(answers).length} more questions`}
        </ContinueButtonText>
      </ContinueButton>
    </Container>
  );
};

export default CulturalConfidenceScreen;