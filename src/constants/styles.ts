import Colors from './colors';

// Typography system
export const Typography = {
  // Font Families
  fontFamily: {
    regular: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    medium: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    bold: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    light: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    // For Hindi/Devanagari text
    hindi: '"Noto Sans Devanagari", "Devanagari Sangam MN", sans-serif',
  },

  // Font Sizes (in pixels for web)
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 36,
    '6xl': 48,
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Font Weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

// Spacing system (in pixels for web)
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 64,
};

// Border radius system
export const BorderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  full: 9999,
};

// Shadow system (CSS box-shadow for web)
export const Shadows = {
  sm: {
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  },
  md: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
  },
  lg: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  xl: {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
  },
};

// Utility functions
export const createSpacing = (multiplier: number) => Spacing.md * multiplier;

export const createFontSize = (size: keyof typeof Typography.fontSize) =>
  Typography.fontSize[size];

export const createShadow = (elevation: keyof typeof Shadows) =>
  Shadows[elevation];

export { Colors };
