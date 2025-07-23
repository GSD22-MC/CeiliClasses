import React from 'react';
import styled from 'styled-components';

interface TouchableOpacityProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onPress?: () => void;
  disabled?: boolean;
  activeOpacity?: number;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityRole?: string;
  accessibilityState?: { disabled?: boolean; selected?: boolean };
  testID?: string;
}

const StyledTouchable = styled.button<{ 
  activeOpacity?: number;
  disabled?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  transition: opacity 0.2s ease, transform 0.1s ease;
  
  &:hover:not(:disabled) {
    opacity: ${({ activeOpacity = 0.8 }) => activeOpacity};
  }
  
  &:active:not(:disabled) {
    transform: scale(0.98);
    opacity: ${({ activeOpacity = 0.6 }) => activeOpacity};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  &:disabled {
    pointer-events: none;
  }
`;

export const TouchableOpacity: React.FC<TouchableOpacityProps> = ({
  children,
  style,
  className,
  onPress,
  disabled = false,
  activeOpacity = 0.8,
  accessible = true,
  accessibilityLabel,
  accessibilityRole,
  accessibilityState,
  testID,
  ...props
}) => {
  return (
    <StyledTouchable
      type="button"
      style={style}
      className={className}
      onClick={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      role={accessibilityRole || 'button'}
      aria-label={accessibilityLabel}
      aria-disabled={disabled || accessibilityState?.disabled}
      aria-selected={accessibilityState?.selected}
      data-testid={testID}
      {...props}
    >
      {children}
    </StyledTouchable>
  );
};