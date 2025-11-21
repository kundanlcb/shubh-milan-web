// Minimal color palette - White and Magenta only
export const Colors = {
  // Primary Colors - Beautiful magenta
  primary: '#E91E63', // Beautiful magenta - main brand color
  
  // White
  white: '#FFFFFF',

  // Text Colors (using magenta for primary text, white for inverse)
  textPrimary: '#E91E63',
  textSecondary: '#E91E63',
  textInverse: '#FFFFFF',

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
