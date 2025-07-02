import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Surface } from 'react-native-paper';
import NetInfo from '@react-native-netinfo/netinfo';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CulturalTheme, CulturalSpacing, CulturalBorderRadius } from '../theme/CulturalTheme';
import { offlineService } from '../services/OfflineService';

interface NetworkStatusIndicatorProps {
  style?: any;
}

export const NetworkStatusIndicator: React.FC<NetworkStatusIndicatorProps> = ({ style }) => {
  const [isConnected, setIsConnected] = useState(true);
  const [pendingActions, setPendingActions] = useState(0);
  const [slideAnim] = useState(new Animated.Value(-100));

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const connected = state.isConnected ?? false;
      setIsConnected(connected);
      
      if (connected !== isConnected) {
        // Animate status bar appearance/disappearance
        Animated.timing(slideAnim, {
          toValue: connected ? -100 : 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    });

    // Update pending actions count
    const updatePendingActions = () => {
      setPendingActions(offlineService.getOfflineActionsCount());
    };

    const interval = setInterval(updatePendingActions, 1000);
    updatePendingActions();

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, [isConnected, slideAnim]);

  if (isConnected && pendingActions === 0) {
    return null;
  }

  return (
    <Animated.View 
      style={[
        styles.container,
        { transform: [{ translateY: slideAnim }] },
        style
      ]}
    >
      <Surface style={styles.surface} elevation={4}>
        <View style={styles.content}>
          <Icon 
            name={isConnected ? 'sync' : 'wifi-off'} 
            size={16} 
            color={isConnected ? CulturalTheme.colors.primary : CulturalTheme.colors.error} 
          />
          <Text style={styles.text}>
            {isConnected 
              ? `Syncing ${pendingActions} pending changes...`
              : 'You\'re offline - changes will sync when connected'
            }
          </Text>
        </View>
      </Surface>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  surface: {
    backgroundColor: CulturalTheme.colors.primaryContainer,
    marginHorizontal: CulturalSpacing.md,
    marginTop: CulturalSpacing.sm,
    borderRadius: CulturalBorderRadius.sm,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: CulturalSpacing.sm,
    gap: CulturalSpacing.sm,
  },
  text: {
    fontSize: 12,
    color: CulturalTheme.colors.onPrimaryContainer,
    flex: 1,
  },
});