import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.background} 0%, ${props => props.theme.colors.surfaceVariant} 100%);
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.onSurfaceVariant};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const IrishQuote = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.large};
  margin: 3rem 0;
  box-shadow: ${props => props.theme.elevation.medium.boxShadow};
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 0.5rem;
`;

const QuoteTranslation = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.onSurfaceVariant};
  text-align: center;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.large};
  text-align: center;
  box-shadow: ${props => props.theme.elevation.medium.boxShadow};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.onSurface};
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.onSurfaceVariant};
  line-height: 1.5;
`;

const CTASection = styled.section`
  text-align: center;
  padding: 3rem 0;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.borderRadius.large};
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  margin: 0 1rem;

  &:hover {
    background: ${props => props.theme.colors.primaryContainer};
    color: ${props => props.theme.colors.onPrimaryContainer};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(CTAButton)`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.onPrimary};
  }
`;

const HomeScreen: React.FC = () => {
  const features = [
    {
      icon: '💃',
      title: 'Authentic Dances',
      description: 'Learn traditional Irish ceili dances with step-by-step guidance and cultural context.'
    },
    {
      icon: '🎵',
      title: 'Traditional Music',
      description: 'Experience authentic Irish music and understand the connection between rhythm and movement.'
    },
    {
      icon: '🏛️',
      title: 'Cultural Heritage',
      description: 'Discover the rich history and cultural significance behind every dance and tradition.'
    },
    {
      icon: '🗣️',
      title: 'Irish Language',
      description: 'Learn proper pronunciation of Irish terms and connect with your cultural roots.'
    }
  ];

  return (
    <Container>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Céad Míle Fáilte
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to CeiliClasses - where authentic Irish culture comes alive through dance, music, and heritage.
        </Subtitle>

        <IrishQuote
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <QuoteText>"Ar scáth a chéile a mhaireann na daoine"</QuoteText>
          <QuoteTranslation>In the shelter of each other, people live</QuoteTranslation>
        </IrishQuote>
      </HeroSection>

      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeatureGrid>

      <CTASection>
        <CTAButton to="/learn">Start Learning</CTAButton>
        <SecondaryButton to="/heritage">Explore Heritage</SecondaryButton>
      </CTASection>
    </Container>
  );
};

export default HomeScreen;