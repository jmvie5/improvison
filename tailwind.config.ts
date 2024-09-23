import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}', 
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'josef': ['"Josefin Sans"', 'sans-serif'],
        'cardo': ['Cardo', 'sans-serif']
        },
      colors: {
        background: {
          DEFAULT:"#222F4D",
          foreground: '#ffffff',
          50: "#E3E7F2",
          100: "#C6D0E6",
          200: "#91A4CF",
          300: "#5975B6",
          400: "#3A5083",
          500: "#222F4D",
          600: "#1B253C",
          700: "#141C2E",
          800: "#0E1320",
          900: "#06090E",
          950: "#030407"
        },
        default: {
          DEFAULT: "#ffffff",
          foreground: '#222F4D',
        },
        primary: {
          DEFAULT: "#00B54C",
          foreground: '#ffffff',
          50: "#E0FFED",
          100: "#BDFFD8",
          200: "#7AFFB2",
          300: "#38FF8B",
          400: "#00F566",
          500: "#00B54C",
          600: "#008F3B",
          700: "#006B2D",
          800: "#00471E",
          900: "#00240F",
          950: "#001408"
        },
        secondary: {
          DEFAULT: "#7ADAC7",
          50: "#F3FCFA",
          100: "#E3F7F3",
          200: "#CBF1E9",
          300: "#AFE9DD",
          400: "#93E1D1",
          500: "#7ADAC7",
          600: "#43CBB0",
          700: "#2CA089",
          800: "#1E6C5C",
          900: "#0E342C",
          950: "#081C18"
        },
        "light-blue": {
          DEFAULT: "#455D9A",
          50: "#EAEDF6",
          100: "#D8DEEE",
          200: "#AEBBDB",
          300: "#879AC9",
          400: "#6179B8",
          500: "#455D9A",
          600: "#374B7B",
          700: "#29375C",
          800: "#1B243C",
          900: "#0E1320",
          950: "#06090E"
        }
      },
      maxWidth: {
          'xxs': '15rem',
        },
      screens: {
        'xxs': '430px',
  
        'xs': '850px',

        'nmd': '776px',

        'nlg': '1036px',
        
        'nxl': '1288px'
      },
      boxShadow: {
        'lg-rev': '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: {
            50: "#E3E7F2",
            100: "#C6D0E6",
            200: "#91A4CF",
            300: "#5975B6",
            400: "#3A5083",
            500: "#222F4D",
            600: "#1B253C",
            700: "#141C2E",
            800: "#0E1320",
            900: "#06090E",
          },
          default: {
            DEFAULT: "#ffffff",
            foreground: "#3A5083"
          },
          "primary": {
            50: "#E0FFED",
            100: "#BDFFD8",
            200: "#7AFFB2",
            300: "#38FF8B",
            400: "#00F566",
            500: "#00B54C",
            600: "#008F3B",
            700: "#006B2D",
            800: "#00471E",
            900: "#00240F",
          },
          "secondary": {
            50: "#F3FCFA",
            100: "#E3F7F3",
            200: "#CBF1E9",
            300: "#AFE9DD",
            400: "#93E1D1",
            500: "#7ADAC7",
            600: "#43CBB0",
            700: "#2CA089",
            800: "#1E6C5C",
            900: "#0E342C",
          },
        }
      }
    }
  })]
} satisfies Config

