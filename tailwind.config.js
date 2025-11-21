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
        // Primary color - Magenta only
        primary: {
          DEFAULT: '#E91E63',
        },
        // White background
        background: {
          DEFAULT: '#FFFFFF',
        },
        // Standard text colors for readability
        text: {
          primary: '#1F2937',    // Dark gray for primary text on white
          secondary: '#6B7280',   // Medium gray for secondary text on white
          inverse: '#FFFFFF',     // White text for magenta backgrounds
        },
        // Gray scale for standard text (commonly used in web)
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Border colors
        border: {
          DEFAULT: '#E91E63',
        },
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
