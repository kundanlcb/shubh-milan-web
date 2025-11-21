// Minimal color palette - White and Magenta only with standard text colors
export const Colors = {
  // Primary Colors - Beautiful magenta
  primary: '#E91E63', // Beautiful magenta - main brand color
  
  // White
  white: '#FFFFFF',

  // Standard Text Colors for readability
  textPrimary: '#1F2937', // Dark gray for primary text on white backgrounds
  textSecondary: '#6B7280', // Medium gray for secondary text on white backgrounds
  textInverse: '#FFFFFF', // White text for magenta backgrounds

  // Background Colors (white only)
  background: '#FFFFFF',
  backgroundCard: '#FFFFFF',

  // Button Colors
  buttonPrimary: '#E91E63',
  buttonText: '#FFFFFF',

  // UI Colors
  border: '#E91E63',

  // Modal Colors
  modalBackground: 'rgba(233, 30, 99, 0.1)',

  // Surface Colors
  cardShadow: 'rgba(233, 30, 99, 0.1)',
} as const;

export default Colors;
