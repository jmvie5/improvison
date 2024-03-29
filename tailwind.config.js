/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
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
  plugins: [],
}
