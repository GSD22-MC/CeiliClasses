import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { View, Text, Icon } from './ui';
import { CulturalCard } from './ui/CulturalCard';
import { CulturalTheme } from '../theme/CulturalTheme';
import { offlineService } from '../services/OfflineService';

interface NetworkStatusIndicatorProps {
  style?: React.CSSProperties;
  className?: string;
}

// Styled Components
const Container = styled(View)<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transform: translateY(${({ isVisible }) => isVisible ? '0' : '-100px'});
  transition: transform 0.3s ease;
`;

const StatusCard = styled(CulturalCard)`
  margin: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium} 0;
  background-color: ${({ theme }) => theme.colors.primaryContainer};
`;

const Content = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small};
`;

const StatusText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.onPrimaryContainer};
  flex: 1;
`;

export const NetworkStatusIndicator: React.FC<NetworkStatusIndicatorProps> = ({ 
  style, 
  className 
}) => {
  const [isConnected, setIsConnected] = useState(true);
  const [pendingActions, setPendingActions] = useState(0);

  useEffect(() => {
    // Check connection status using navigator.onLine
    const updateConnectionStatus = () => {
      setIsConnected(navigator.onLine);
    };

    // Listen for online/offline events
    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);
    
    // Initial check
    updateConnectionStatus();

    // Update pending actions count
    const updatePendingActions = () => {
      setPendingActions(offlineService?.getOfflineActionsCount() || 0);
    };

    const interval = setInterval(updatePendingActions, 1000);
    updatePendingActions();

    return () => {
      window.removeEventListener('online', updateConnectionStatus);
      window.removeEventListener('offline', updateConnectionStatus);
      clearInterval(interval);
    };
  }, []);

  const shouldShow = !isConnected || pendingActions > 0;

  if (!shouldShow) {
    return null;
  }

  return (
    <Container 
      isVisible={shouldShow}
      style={style}
      className={className}
    >
      <StatusCard culturalLevel="primary">
        <Content>
          <Icon 
            name={isConnected ? 'sync' : 'wifi-off'} 
            size={16} 
            color={isConnected ? CulturalTheme.colors.primary : CulturalTheme.colors.error} 
          />
          <StatusText>
            {isConnected 
              ? `Syncing ${pendingActions} pending changes...`
              : 'You\'re offline - changes will sync when connected'
            }
          </StatusText>
        </Content>
      </StatusCard>
    </Container>
  );
};

