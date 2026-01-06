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
export const APP_NAME = 'Dilkor';
export const APP_TAGLINE = 'दिलकोर - Find Your Perfect Match';
export const APP_DESCRIPTION = 'Your trusted platform for finding meaningful connections and building lasting relationships.';

// App download links (placeholder URLs - update with actual links)
export const APP_LINKS = {
  android: 'https://play.google.com/store/apps/details?id=com.dilkor',
  ios: 'https://apps.apple.com/app/dilkor/id123456789',
} as const;

// Navigation links
export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/features', label: 'Features' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/download', label: 'Download App' },
  { path: '/contact', label: 'Contact' },
] as const;

// Footer links
export const FOOTER_LINKS = {
  company: [
    { path: '/about', label: 'About Us' },
    { path: '/features', label: 'Features' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/success-stories', label: 'Success Stories' },
  ],
  support: [
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/download', label: 'Download App' },
  ],
  legal: [
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms & Conditions' },
  ],
} as const;
