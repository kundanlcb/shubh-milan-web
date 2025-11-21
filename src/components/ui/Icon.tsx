import React from 'react';
import * as FeatherIcons from 'react-icons/fi';
import * as MaterialIcons from 'react-icons/md';
import * as IoniconsIcons from 'react-icons/io5';
import { Colors } from '@/constants/colors';

type IconLibrary = 'feather' | 'material' | 'material-community' | 'ionicons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  library?: IconLibrary;
  style?: React.CSSProperties;
  className?: string;
}

// Icon name mapping for react-icons
const iconNameMap: Record<string, Record<string, React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties; className?: string }>>> = {
  feather: {
    'home': FeatherIcons.FiHome,
    'search': FeatherIcons.FiSearch,
    'message-circle': FeatherIcons.FiMessageCircle,
    'user': FeatherIcons.FiUser,
    'heart': FeatherIcons.FiHeart,
    'share-2': FeatherIcons.FiShare2,
    'star': FeatherIcons.FiStar,
    'edit-2': FeatherIcons.FiEdit2,
    'edit': FeatherIcons.FiEdit,
    'settings': FeatherIcons.FiSettings,
    'log-out': FeatherIcons.FiLogOut,
    'user-circle': FeatherIcons.FiUser,
    'users': FeatherIcons.FiUsers,
    'briefcase': FeatherIcons.FiBriefcase,
    'book-open': FeatherIcons.FiBookOpen,
    'book': FeatherIcons.FiBook,
    'coffee': FeatherIcons.FiCoffee,
    'phone': FeatherIcons.FiPhone,
    'calendar': FeatherIcons.FiCalendar,
    'map-pin': FeatherIcons.FiMapPin,
    'trending-up': FeatherIcons.FiTrendingUp,
    'check': FeatherIcons.FiCheck,
    'plus': FeatherIcons.FiPlus,
    'filter': FeatherIcons.FiFilter,
    'mail': FeatherIcons.FiMail,
    'eye': FeatherIcons.FiEye,
    'eye-off': FeatherIcons.FiEyeOff,
    'chevron-right': FeatherIcons.FiChevronRight,
    'chevron-left': FeatherIcons.FiChevronLeft,
    'chevron-down': FeatherIcons.FiChevronDown,
    'arrow-left': FeatherIcons.FiArrowLeft,
    'more-horizontal': FeatherIcons.FiMoreHorizontal,
    'more-vertical': FeatherIcons.FiMoreVertical,
    'x': FeatherIcons.FiX,
    'menu': FeatherIcons.FiMenu,
    'bell': FeatherIcons.FiBell,
    'image': FeatherIcons.FiImage,
    'camera': FeatherIcons.FiCamera,
    'send': FeatherIcons.FiSend,
    'play': FeatherIcons.FiPlay,
    'pause': FeatherIcons.FiPause,
    'sliders': FeatherIcons.FiSliders,
    'sort': FeatherIcons.FiFilter,
  },
  material: {
    'home': MaterialIcons.MdHome,
    'search': MaterialIcons.MdSearch,
    'person': MaterialIcons.MdPerson,
    'message': MaterialIcons.MdMessage,
    'notifications': MaterialIcons.MdNotifications,
  },
  'material-community': {
    'home': MaterialIcons.MdHome,
  },
  ionicons: {
    'home': IoniconsIcons.IoHome,
    'search': IoniconsIcons.IoSearch,
    'person': IoniconsIcons.IoPerson,
    'chatbubble': IoniconsIcons.IoChatbubble,
    'notifications': IoniconsIcons.IoNotifications,
  },
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = Colors.textPrimary,
  library = 'feather',
  style,
  className,
}) => {
  try {
    const IconComponent = iconNameMap[library]?.[name];
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in library "${library}"`);
      return (
        <span style={{ fontSize: size, color, ...style }} className={className}>
          {getIconFallback(name)}
        </span>
      );
    }

    return (
      <IconComponent
        size={size}
        color={color}
        style={style}
        className={className}
      />
    );
  } catch (error) {
    console.warn('Icon failed to render, using fallback:', error);
    return (
      <span style={{ fontSize: size, color, ...style }} className={className}>
        {getIconFallback(name)}
      </span>
    );
  }
};

// Fallback emoji icons for when vector icons don't load
const getIconFallback = (iconName: string): string => {
  const fallbackMap: { [key: string]: string } = {
    // Tab icons
    'home': '🏠',
    'search': '🔍',
    'message-circle': '💬',
    'user': '👤',

    // Action icons
    'heart': '❤️',
    'share-2': '📤',
    'star': '⭐',
    'edit-2': '✏️',
    'edit': '✏️',
    'settings': '⚙️',
    'log-out': '🚪',

    // Profile icons
    'user-circle': '👤',
    'users': '👥',
    'briefcase': '💼',
    'book-open': '📖',
    'coffee': '☕',
    'phone': '📞',

    // Filter icons
    'calendar': '📅',
    'map-pin': '📍',
    'trending-up': '📈',

    // Common icons
    'check': '✓',
    'plus': '+',
    'filter': '🔽',
    'mail': '✉️',
    'eye': '👁',
    'chevron-right': '→',
    'arrow-left': '←',
    'more-horizontal': '⋯',
    'bell': '🔔',
  };

  return fallbackMap[iconName] || '•';
};
