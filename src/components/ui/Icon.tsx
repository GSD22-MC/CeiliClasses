import React from 'react';
import styled from 'styled-components';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

const IconContainer = styled.span<{ size?: number; color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => size || 24}px;
  color: ${({ color, theme }) => color || theme.colors.onSurface};
  line-height: 1;
  user-select: none;
`;

// Icon mapping from Material Icons to emoji equivalents
const iconMap: Record<string, string> = {
  // Navigation
  'home': '🏠',
  'arrow-back': '←',
  'arrow-forward': '→',
  'menu': '☰',
  'close': '✕',
  
  // Actions
  'add': '➕',
  'edit': '✏️',
  'delete': '🗑️',
  'save': '💾',
  'download': '⬇️',
  'upload': '⬆️',
  'share': '📤',
  'search': '🔍',
  'refresh': '🔄',
  'sync': '🔄',
  
  // Media
  'play-arrow': '▶️',
  'pause': '⏸️',
  'stop': '⏹️',
  'skip-next': '⏭️',
  'skip-previous': '⏮️',
  'volume-up': '🔊',
  'volume-off': '🔇',
  'mic': '🎤',
  'headphones': '🎧',
  
  // Status
  'check': '✓',
  'check-circle': '✅',
  'error': '⚠️',
  'warning': '⚠️',
  'info': 'ℹ️',
  'verified': '✅',
  'celebration': '🎉',
  'favorite': '❤️',
  'star': '⭐',
  'thumb-up': '👍',
  'thumb-down': '👎',
  
  // Communication
  'email': '📧',
  'phone': '📞',
  'message': '💬',
  'chat': '💬',
  'forum': '💬',
  'notification': '🔔',
  
  // People & Social
  'person': '👤',
  'group': '👥',
  'groups': '👥',
  'account-circle': '👤',
  'supervisor-account': '👥',
  
  // Education & Learning
  'school': '🎓',
  'book': '📖',
  'menu-book': '📚',
  'library-books': '📚',
  'quiz': '❓',
  'help': '❓',
  'lightbulb': '💡',
  
  // Fitness & Dance
  'fitness-center': '💪',
  'directions-run': '🏃',
  'self-improvement': '🧘',
  'sports': '⚽',
  
  // Technology
  'computer': '💻',
  'smartphone': '📱',
  'wifi': '📶',
  'wifi-off': '📵',
  'bluetooth': '📶',
  'battery': '🔋',
  'signal': '📶',
  
  // Security
  'lock': '🔒',
  'unlock': '🔓',
  'security': '🔐',
  'vpn-key': '🔑',
  'fingerprint': '👆',
  'visibility': '👁️',
  'visibility-off': '🙈',
  
  // Location & Maps
  'location': '📍',
  'map': '🗺️',
  'place': '📍',
  'navigation': '🧭',
  'directions': '🧭',
  
  // Time & Calendar
  'schedule': '⏰',
  'today': '📅',
  'event': '📅',
  'history': '🕐',
  'timer': '⏲️',
  'hourglass': '⏳',
  
  // Weather
  'wb-sunny': '☀️',
  'wb-cloudy': '☁️',
  'umbrella': '☂️',
  
  // Transport
  'directions-car': '🚗',
  'train': '🚂',
  'flight': '✈️',
  'directions-bike': '🚴',
  
  // Irish Cultural Icons (using relevant emojis)
  'irish-celebration': '🎉',
  'music-note': '🎵',
  'theater-comedy': '🎭',
  'local-bar': '🍺',
  'restaurant': '🍀', // Using shamrock for Irish context
  
  // Fallbacks
  'more-vert': '⋮',
  'more-horiz': '⋯',
  'expand-more': '⌄',
  'expand-less': '⌃',
  'keyboard-arrow-down': '⌄',
  'keyboard-arrow-up': '⌃',
  'keyboard-arrow-left': '‹',
  'keyboard-arrow-right': '›',
};

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color, 
  style, 
  className 
}) => {
  const iconCharacter = iconMap[name] || iconMap['help'] || '❓';
  
  return (
    <IconContainer 
      size={size} 
      color={color} 
      style={style} 
      className={className}
      role="img"
      aria-label={name}
    >
      {iconCharacter}
    </IconContainer>
  );
};

export default Icon;