/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        // Primary colors - Beautiful magenta from Mithila theme
        primary: {
          DEFAULT: '#E91E63',
          light: '#F48FB1',
          dark: '#AD1457',
          50: '#FCE4EC',
          100: '#F8BBD0',
          200: '#F48FB1',
          300: '#F06292',
          400: '#EC407A',
          500: '#E91E63',
          600: '#D81B60',
          700: '#C2185B',
          800: '#AD1457',
          900: '#880E4F',
        },
        // Secondary colors - Golden orange
        secondary: {
          DEFAULT: '#FF9800',
          light: '#FFCC02',
          dark: '#C66900',
        },
        // Accent colors - Green
        accent: {
          DEFAULT: '#4CAF50',
          light: '#80E27E',
          dark: '#087F23',
        },
        // Background colors
        background: {
          DEFAULT: '#FAFAFA',
          secondary: '#F5F5F5',
          card: '#FFFFFF',
        },
        // Text colors
        text: {
          primary: '#212121',
          secondary: '#757575',
          tertiary: '#9E9E9E',
          inverse: '#FFFFFF',
        },
        // UI colors
        border: {
          DEFAULT: '#E0E0E0',
          light: '#F0F0F0',
        },
        divider: '#EEEEEE',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        hindi: [
          'Noto Sans Devanagari',
          'Devanagari Sangam MN',
          'sans-serif',
        ],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '48px',
        '4xl': '64px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
        md: '0 2px 4px rgba(0, 0, 0, 0.15)',
        lg: '0 4px 8px rgba(0, 0, 0, 0.2)',
        xl: '0 8px 16px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
