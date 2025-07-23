import React from 'react';
import styled from 'styled-components';

interface SafeAreaViewProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  testID?: string;
}

const StyledSafeAreaView = styled.div<{ edges?: string[] }>`
  display: flex;
  flex-direction: column;
  
  /* Apply safe area insets based on edges prop */
  ${({ edges = ['top', 'bottom', 'left', 'right'] }) => {
    let padding = '';
    
    if (edges.includes('top')) {
      padding += 'padding-top: max(env(safe-area-inset-top), 0px); ';
    }
    if (edges.includes('bottom')) {
      padding += 'padding-bottom: max(env(safe-area-inset-bottom), 0px); ';
    }
    if (edges.includes('left')) {
      padding += 'padding-left: max(env(safe-area-inset-left), 0px); ';
    }
    if (edges.includes('right')) {
      padding += 'padding-right: max(env(safe-area-inset-right), 0px); ';
    }
    
    return padding;
  }}
  
  /* Fallback for browsers that don't support env() */
  @supports not (padding-top: env(safe-area-inset-top)) {
    ${({ edges = ['top', 'bottom', 'left', 'right'] }) => {
      let padding = '';
      
      // Provide reasonable defaults for common screen sizes
      if (edges.includes('top')) {
        padding += 'padding-top: 20px; '; // Status bar height approximation
      }
      if (edges.includes('bottom')) {
        padding += 'padding-bottom: 20px; '; // Home indicator area approximation
      }
      if (edges.includes('left')) {
        padding += 'padding-left: 0px; ';
      }
      if (edges.includes('right')) {
        padding += 'padding-right: 0px; ';
      }
      
      return padding;
    }}
  }
  
  /* On mobile devices, ensure we account for viewport-fit=cover */
  @media screen and (max-width: 768px) {
    ${({ edges = ['top', 'bottom', 'left', 'right'] }) => {
      let padding = '';
      
      if (edges.includes('top')) {
        padding += 'padding-top: max(env(safe-area-inset-top), 44px); '; // iPhone status bar
      }
      if (edges.includes('bottom')) {
        padding += 'padding-bottom: max(env(safe-area-inset-bottom), 34px); '; // iPhone home indicator
      }
      
      return padding;
    }}
  }
  
  /* Ensure the container takes full height when needed */
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport height for mobile */
`;

export const SafeAreaView: React.FC<SafeAreaViewProps> = ({
  children,
  style,
  className,
  edges = ['top', 'bottom', 'left', 'right'],
  testID,
  ...props
}) => {
  return (
    <StyledSafeAreaView
      style={style}
      className={className}
      edges={edges}
      data-testid={testID}
      {...props}
    >
      {children}
    </StyledSafeAreaView>
  );
};