// Responsive breakpoints (in pixels)
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// App metadata
export const APP_NAME = 'Shubh Milan';
export const APP_DESCRIPTION = 'Your trusted platform for finding meaningful connections and building lasting relationships.';

// Navigation links
export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/features', label: 'Features' },
  { path: '/contact', label: 'Contact' },
] as const;
