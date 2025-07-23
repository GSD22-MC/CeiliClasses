import React from 'react';
import styled from 'styled-components';

interface ViewProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onPress?: () => void;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityRole?: string;
  testID?: string;
}

const StyledView = styled.div<{ onPress?: () => void }>`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: ${({ onPress }) => onPress ? 'pointer' : 'default'};
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const View: React.FC<ViewProps> = ({
  children,
  style,
  className,
  onPress,
  accessible = true,
  accessibilityLabel,
  accessibilityRole,
  testID,
  ...props
}) => {
  return (
    <StyledView
      style={style}
      className={className}
      onClick={onPress}
      onPress={onPress}
      role={accessibilityRole || (onPress ? 'button' : undefined)}
      aria-label={accessibilityLabel}
      tabIndex={onPress ? 0 : undefined}
      onKeyDown={onPress ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onPress();
        }
      } : undefined}
      data-testid={testID}
      {...props}
    >
      {children}
    </StyledView>
  );
};