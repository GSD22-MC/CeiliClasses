import React from 'react';
import styled from 'styled-components';

interface CulturalCardProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  irishTitle?: string;
  culturalLevel?: 'primary' | 'secondary' | 'tertiary';
  elevation?: 'low' | 'medium' | 'high';
  style?: React.CSSProperties;
  className?: string;
  onPress?: () => void;
  testID?: string;
}

const CardContainer = styled.div<{
  culturalLevel?: string;
  elevation?: string;
  onPress?: () => void;
}>`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.large};
  margin: ${({ theme }) => theme.spacing.medium};
  cursor: ${({ onPress }) => onPress ? 'pointer' : 'default'};
  transition: all 0.3s ease;
  
  /* Cultural accent border */
  border-left: 4px solid ${({ culturalLevel, theme }) => {
    switch (culturalLevel) {
      case 'primary': return theme.colors.primary;
      case 'secondary': return theme.colors.secondary;
      case 'tertiary': return theme.colors.tertiary;
      default: return theme.colors.primary;
    }
  }};
  
  /* Elevation/shadow */
  ${({ elevation, theme }) => {
    switch (elevation) {
      case 'low': return theme.elevation.low.boxShadow;
      case 'high': return theme.elevation.high.boxShadow;
      default: return theme.elevation.medium.boxShadow;
    }
  }};
  
  &:hover {
    transform: ${({ onPress }) => onPress ? 'translateY(-2px)' : 'none'};
    box-shadow: ${({ onPress, elevation, theme }) => {
      if (!onPress) return 'none';
      switch (elevation) {
        case 'low': return theme.elevation.medium.boxShadow;
        case 'medium': return theme.elevation.high.boxShadow;
        default: return theme.elevation.high.boxShadow;
      }
    }};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.titleLarge.fontFamily};
  font-size: ${({ theme }) => theme.fonts.titleLarge.fontSize};
  font-weight: ${({ theme }) => theme.fonts.titleLarge.fontWeight};
  line-height: ${({ theme }) => theme.fonts.titleLarge.lineHeight};
  color: ${({ theme }) => theme.colors.onSurface};
  margin: 0 0 ${({ theme }) => theme.spacing.small} 0;
`;

const IrishTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.titleMedium.fontFamily};
  font-size: ${({ theme }) => theme.fonts.titleMedium.fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  &::before {
    content: "🍀 ";
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;

const Subtitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.bodyMedium.fontFamily};
  font-size: ${({ theme }) => theme.fonts.bodyMedium.fontSize};
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  line-height: ${({ theme }) => theme.fonts.bodyMedium.lineHeight};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CulturalAccent = styled.div<{ culturalLevel?: string }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent ${({ culturalLevel, theme }) => {
    switch (culturalLevel) {
      case 'primary': return theme.colors.primary;
      case 'secondary': return theme.colors.secondary;
      case 'tertiary': return theme.colors.tertiary;
      default: return theme.colors.primary;
    }
  }} transparent transparent;
  opacity: 0.3;
`;

export const CulturalCard: React.FC<CulturalCardProps> = ({
  children,
  title,
  subtitle,
  irishTitle,
  culturalLevel = 'primary',
  elevation = 'medium',
  style,
  className,
  onPress,
  testID,
  ...props
}) => {
  return (
    <CardContainer
      style={{ position: 'relative', ...style }}
      className={className}
      culturalLevel={culturalLevel}
      elevation={elevation}
      onPress={onPress}
      onClick={onPress}
      tabIndex={onPress ? 0 : undefined}
      onKeyDown={onPress ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onPress();
        }
      } : undefined}
      role={onPress ? 'button' : 'article'}
      data-testid={testID}
      {...props}
    >
      <CulturalAccent culturalLevel={culturalLevel} />
      
      {(title || subtitle || irishTitle) && (
        <CardHeader>
          {irishTitle && <IrishTitle>{irishTitle}</IrishTitle>}
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </CardHeader>
      )}
      
      <CardContent>
        {children}
      </CardContent>
    </CardContainer>
  );
};