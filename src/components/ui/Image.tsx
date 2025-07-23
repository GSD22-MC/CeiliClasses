import React, { useState } from 'react';
import styled from 'styled-components';

interface ImageProps {
  source?: { uri: string } | string;
  src?: string;
  style?: React.CSSProperties;
  className?: string;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
  onLoad?: () => void;
  onError?: () => void;
  alt?: string;
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
}

const StyledImage = styled.img<{ resizeMode?: string }>`
  display: block;
  
  ${({ resizeMode = 'cover' }) => {
    switch (resizeMode) {
      case 'cover':
        return 'object-fit: cover;';
      case 'contain':
        return 'object-fit: contain;';
      case 'stretch':
        return 'object-fit: fill;';
      case 'center':
        return 'object-fit: none; object-position: center;';
      default:
        return 'object-fit: cover;';
    }
  }}
  
  /* Ensure images don't break layout */
  max-width: 100%;
  height: auto;
  
  /* Loading state */
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  
  /* Focus state for accessibility */
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  font-size: 0.875rem;
  min-height: 100px;
  width: 100%;
`;

export const Image: React.FC<ImageProps> = ({
  source,
  src,
  style,
  className,
  resizeMode = 'cover',
  onLoad,
  onError,
  alt,
  testID,
  accessible = true,
  accessibilityLabel,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Determine the image source
  const imageSrc = React.useMemo(() => {
    if (src) return src;
    if (typeof source === 'string') return source;
    if (source && typeof source === 'object' && 'uri' in source) return source.uri;
    return '';
  }, [source, src]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError();
  };

  // Show placeholder if no source or error occurred
  if (!imageSrc || hasError) {
    return (
      <Placeholder
        style={style}
        className={className}
        data-testid={testID}
        {...props}
      >
        {hasError ? 'Failed to load image' : 'No image'}
      </Placeholder>
    );
  }

  return (
    <StyledImage
      src={imageSrc}
      alt={alt || accessibilityLabel || 'Image'}
      style={style}
      className={className}
      resizeMode={resizeMode}
      onLoad={handleLoad}
      onError={handleError}
      data-testid={testID}
      aria-label={accessibilityLabel}
      role={accessible ? 'img' : undefined}
      {...props}
    />
  );
};