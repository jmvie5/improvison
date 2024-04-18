import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

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
          "bleu-pale": "#485D9B",
          "bleu-fonce": "#222F4D",
          "bleu-vert": "#8ACBBC",
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
    },
  },
  darkMode: "class",
  plugins: [nextui()]
} satisfies Config

