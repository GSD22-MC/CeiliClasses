import React, { useRef } from 'react';
import styled from 'styled-components';

interface ScrollViewProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  horizontal?: boolean;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  contentContainerStyle?: React.CSSProperties;
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  scrollEnabled?: boolean;
  keyboardShouldPersistTaps?: 'always' | 'never' | 'handled';
  testID?: string;
}

const StyledScrollView = styled.div<{
  horizontal?: boolean;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  scrollEnabled?: boolean;
}>`
  display: flex;
  flex-direction: ${({ horizontal }) => horizontal ? 'row' : 'column'};
  overflow: ${({ scrollEnabled = true }) => scrollEnabled ? 'auto' : 'hidden'};
  
  /* Custom scrollbar styling for better aesthetics */
  &::-webkit-scrollbar {
    width: ${({ showsVerticalScrollIndicator = true }) => showsVerticalScrollIndicator ? '8px' : '0px'};
    height: ${({ showsHorizontalScrollIndicator = true }) => showsHorizontalScrollIndicator ? '8px' : '0px'};
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surfaceVariant};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.outline};
    border-radius: 4px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.onSurfaceVariant};
    }
  }
  
  /* For Firefox */
  scrollbar-width: ${({ showsVerticalScrollIndicator = true, showsHorizontalScrollIndicator = true }) => 
    (showsVerticalScrollIndicator || showsHorizontalScrollIndicator) ? 'thin' : 'none'};
  scrollbar-color: ${({ theme }) => `${theme.colors.outline} ${theme.colors.surfaceVariant}`};
  
  /* Smooth scrolling */
  scroll-behavior: smooth;
  
  /* iOS-style momentum scrolling on web */
  -webkit-overflow-scrolling: touch;
`;

const ContentContainer = styled.div<{ horizontal?: boolean }>`
  display: flex;
  flex-direction: ${({ horizontal }) => horizontal ? 'row' : 'column'};
  min-width: ${({ horizontal }) => horizontal ? 'max-content' : 'auto'};
  min-height: ${({ horizontal }) => horizontal ? 'auto' : 'max-content'};
`;

export const ScrollView: React.FC<ScrollViewProps> = ({
  children,
  style,
  className,
  horizontal = false,
  showsVerticalScrollIndicator = true,
  showsHorizontalScrollIndicator = true,
  contentContainerStyle,
  onScroll,
  scrollEnabled = true,
  testID,
  ...props
}) => {
  const scrollViewRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (onScroll) {
      onScroll(event);
    }
  };

  return (
    <StyledScrollView
      ref={scrollViewRef}
      style={style}
      className={className}
      horizontal={horizontal}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      scrollEnabled={scrollEnabled}
      onScroll={handleScroll}
      data-testid={testID}
      {...props}
    >
      <ContentContainer 
        horizontal={horizontal} 
        style={contentContainerStyle}
      >
        {children}
      </ContentContainer>
    </StyledScrollView>
  );
};