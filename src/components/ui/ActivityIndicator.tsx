import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ActivityIndicatorProps {
  size?: 'small' | 'large' | number;
  color?: string;
  animating?: boolean;
  style?: React.CSSProperties;
  className?: string;
  testID?: string;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div<{
  size: number;
  color: string;
  animating: boolean;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ size }) => Math.max(2, size / 8)}px solid transparent;
  border-top: ${({ size }) => Math.max(2, size / 8)}px solid ${({ color }) => color};
  border-radius: 50%;
  
  ${({ animating }) => animating && `
    animation: ${spin} 1s linear infinite;
  `}
  
  display: ${({ animating }) => animating ? 'block' : 'none'};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  size = 'small',
  color,
  animating = true,
  style,
  className,
  testID,
  ...props
}) => {
  // Convert size prop to pixel value
  const getSize = (sizeValue: 'small' | 'large' | number): number => {
    if (typeof sizeValue === 'number') return sizeValue;
    return sizeValue === 'small' ? 20 : 36;
  };

  const pixelSize = getSize(size);
  
  // Use theme color if no color provided
  const spinnerColor = color || '#006633'; // Default to heritage green

  return (
    <Container
      style={style}
      className={className}
      data-testid={testID}
      {...props}
    >
      <StyledSpinner
        size={pixelSize}
        color={spinnerColor}
        animating={animating}
        role="progressbar"
        aria-label="Loading"
        aria-hidden={!animating}
      />
    </Container>
  );
};