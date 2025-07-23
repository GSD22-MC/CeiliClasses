import React from 'react';
import styled from 'styled-components';

interface TextProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  selectable?: boolean;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityRole?: string;
  testID?: string;
  onPress?: () => void;
}

const StyledText = styled.span<{ 
  numberOfLines?: number; 
  ellipsizeMode?: string;
  onPress?: () => void;
  selectable?: boolean;
}>`
  font-family: ${({ theme }) => theme.fonts.bodyMedium.fontFamily};
  font-size: ${({ theme }) => theme.fonts.bodyMedium.fontSize};
  line-height: ${({ theme }) => theme.fonts.bodyMedium.lineHeight};
  color: ${({ theme }) => theme.colors.onBackground};
  
  ${({ numberOfLines }) => numberOfLines && `
    display: -webkit-box;
    -webkit-line-clamp: ${numberOfLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
  
  ${({ ellipsizeMode }) => ellipsizeMode === 'middle' && `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `}
  
  ${({ onPress }) => onPress && `
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
    }
  `}
  
  user-select: ${({ selectable = true }) => selectable ? 'text' : 'none'};
`;

export const Text: React.FC<TextProps> = ({
  children,
  style,
  className,
  numberOfLines,
  ellipsizeMode,
  selectable = true,
  accessible = true,
  accessibilityLabel,
  accessibilityRole,
  testID,
  onPress,
  ...props
}) => {
  return (
    <StyledText
      style={style}
      className={className}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      selectable={selectable}
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
    </StyledText>
  );
};