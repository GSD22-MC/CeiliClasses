import React from 'react';
import styled from 'styled-components';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties;
  className?: string;
  error?: boolean;
  helperText?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const StyledInput = styled.input<{ error?: boolean }>`
  padding: ${({ theme }) => theme.spacing.medium};
  border: 2px solid ${({ error, theme }) => 
    error ? theme.colors.error : theme.colors.outline};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bodyMedium.fontFamily};
  transition: border-color 0.2s ease;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.surfaceVariant};
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    cursor: not-allowed;
  }
`;

const HelperText = styled.span<{ error?: boolean }>`
  font-size: 12px;
  color: ${({ error, theme }) => 
    error ? theme.colors.error : theme.colors.onSurfaceVariant};
  margin-top: ${({ theme }) => theme.spacing.xs};
  min-height: 16px;
`;

export const TextInput: React.FC<TextInputProps> = ({
  error,
  helperText,
  style,
  className,
  ...props
}) => {
  return (
    <InputContainer style={style} className={className}>
      <StyledInput error={error} {...props} />
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </InputContainer>
  );
};