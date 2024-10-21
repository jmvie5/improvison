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
        default: {
          DEFAULT: '#0E1320'
        },
        primary: {
          DEFAULT: "#445D9C",
          foreground: '#ffffff',
          50: "#EAEDF6",
          100: "#D8DEEE",
          200: "#B1BDDD",
          300: "#869ACA",
          400: "#5F79B9",
          500: "#445D9C",
          600: "#364A7C",
          700: "#28375C",
          800: "#1C2640",
          900: "#0E1320",
          950: "#06080E"
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
          foreground: '#ffffff',
          background: {
            DEFAULT: "#012B57",
            foreground: "#ffffff"
          },
          "default": {
            50: "#EAEDF6",
            100: "#D8DEEE",
            200: "#B1BDDD",
            300: "#869ACA",
            400: "#5F79B9",
            500: "#445D9C",
            600: "#364A7C",
            700: "#28375C",
            800: "#1C2640",
            900: "#0E1320",
          },
          "primary": {
            50: "#D7EAFF",
            100: "#A9D2FE",
            200: "#59A8FD",
            300: "#037BFC",
            400: "#0254AB",
            500: "#012B57",
            600: "#012347",
            700: "#011932",
            800: "#001123",
            900: "#00070F",
          },
          "secondary": {
            50: "#F8FCFC",
            100: "#F4FBFA",
            200: "#E9F7F5",
            300: "#DAF1EE",
            400: "#CFEDE9",
            500: "#C3E9E3",
            600: "#84D2C6",
            700: "#44BBA9",
            800: "#2F7F73",
            900: "#173F39",
            foreground: '#0E1320'
          },
          "success": {
            50: "#EDF8EF",
            100: "#DAF1DE",
            200: "#B2E1BA",
            300: "#8DD399",
            400: "#68C578",
            500: "#45B258",
            600: "#388F46",
            700: "#296B34",
            800: "#1B4622",
            900: "#0E2512",
          },
          "warning": {
            50: "#FFFCEB",
            100: "#FFF8D6",
            200: "#FFF1AE",
            300: "#FEEA85",
            400: "#FEE35D",
            500: "#FEDE34",
            600: "#F4CB01",
            700: "#B79801",
            800: "#7A6601",
            900: "#3D3300",
          },
          "danger": {
            50: "#FFDBDB",
            100: "#FFBDBD",
            200: "#FF7575",
            300: "#FF3333",
            400: "#F00000",
            500: "#AA0000",
            600: "#8A0000",
            700: "#660000",
            800: "#420000",
            900: "#240000",
          }
        }
      }
    }
  })]
} satisfies Config

