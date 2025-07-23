import React from 'react';
import styled from 'styled-components';

interface FlatListProps<T> {
  data: T[];
  renderItem: ({ item, index }: { item: T; index: number }) => React.ReactElement;
  keyExtractor?: (item: T, index: number) => string;
  horizontal?: boolean;
  numColumns?: number;
  ItemSeparatorComponent?: React.ComponentType;
  ListHeaderComponent?: React.ComponentType | React.ReactElement;
  ListFooterComponent?: React.ComponentType | React.ReactElement;
  ListEmptyComponent?: React.ComponentType | React.ReactElement;
  contentContainerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  className?: string;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  refreshing?: boolean;
  onRefresh?: () => void;
  testID?: string;
}

const Container = styled.div<{ horizontal?: boolean }>`
  display: flex;
  flex-direction: ${({ horizontal }) => horizontal ? 'row' : 'column'};
  overflow: auto;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
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
`;

const ContentContainer = styled.div<{ 
  horizontal?: boolean; 
  numColumns?: number;
}>`
  display: ${({ numColumns }) => numColumns && numColumns > 1 ? 'grid' : 'flex'};
  
  ${({ numColumns, horizontal }) => {
    if (numColumns && numColumns > 1) {
      return `
        grid-template-columns: repeat(${numColumns}, 1fr);
        gap: 8px;
      `;
    }
    return `
      flex-direction: ${horizontal ? 'row' : 'column'};
    `;
  }}
`;

const ItemContainer = styled.div`
  display: flex;
`;

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
`;

const RefreshContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.medium};
`;

export function FlatList<T>({
  data,
  renderItem,
  keyExtractor,
  horizontal = false,
  numColumns,
  ItemSeparatorComponent,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
  contentContainerStyle,
  style,
  className,
  onEndReached,
  onEndReachedThreshold = 0.1,
  refreshing = false,
  onRefresh,
  testID,
  ...props
}: FlatListProps<T>) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Handle scroll for onEndReached
  const handleScroll = React.useCallback((event: React.UIEvent<HTMLDivElement>) => {
    if (!onEndReached) return;

    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const threshold = scrollHeight * onEndReachedThreshold;
    
    if (scrollHeight - scrollTop - clientHeight <= threshold) {
      onEndReached();
    }
  }, [onEndReached, onEndReachedThreshold]);

  // Default key extractor
  const getKey = React.useCallback((item: T, index: number): string => {
    if (keyExtractor) {
      return keyExtractor(item, index);
    }
    
    // Try to use id if available, otherwise use index
    if (typeof item === 'object' && item !== null && 'id' in item) {
      return String((item as any).id);
    }
    
    return String(index);
  }, [keyExtractor]);

  // Render separator between items
  const renderSeparator = (index: number) => {
    if (!ItemSeparatorComponent || index === data.length - 1) {
      return null;
    }
    return <ItemSeparatorComponent key={`separator-${index}`} />;
  };

  // Render empty state
  if (data.length === 0 && ListEmptyComponent) {
    return (
      <Container style={style} className={className} data-testid={testID}>
        {ListHeaderComponent && (
          React.isValidElement(ListHeaderComponent) 
            ? ListHeaderComponent 
            : <ListHeaderComponent />
        )}
        <EmptyContainer>
          {React.isValidElement(ListEmptyComponent) 
            ? ListEmptyComponent 
            : <ListEmptyComponent />}
        </EmptyContainer>
        {ListFooterComponent && (
          React.isValidElement(ListFooterComponent) 
            ? ListFooterComponent 
            : <ListFooterComponent />
        )}
      </Container>
    );
  }

  return (
    <Container
      ref={containerRef}
      horizontal={horizontal}
      style={style}
      className={className}
      onScroll={handleScroll}
      data-testid={testID}
      {...props}
    >
      {refreshing && onRefresh && (
        <RefreshContainer>
          <div>Refreshing...</div>
        </RefreshContainer>
      )}
      
      {ListHeaderComponent && (
        React.isValidElement(ListHeaderComponent) 
          ? ListHeaderComponent 
          : <ListHeaderComponent />
      )}
      
      <ContentContainer
        horizontal={horizontal}
        numColumns={numColumns}
        style={contentContainerStyle}
      >
        {data.map((item, index) => (
          <React.Fragment key={getKey(item, index)}>
            <ItemContainer>
              {renderItem({ item, index })}
            </ItemContainer>
            {renderSeparator(index)}
          </React.Fragment>
        ))}
      </ContentContainer>
      
      {ListFooterComponent && (
        React.isValidElement(ListFooterComponent) 
          ? ListFooterComponent 
          : <ListFooterComponent />
      )}
    </Container>
  );
}