/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'condensed': ['Eurostile', 'Univers', 'Helvetica Neue', 'Arial Narrow', 'sans-serif'],
      },
      colors: {
        primary: '#2F6BFF',
      },
      letterSpacing: {
        'widest': '0.3em',
        'ultra-wide': '0.4em',
        'mega-wide': '0.5em',
      },
      maxWidth: {
        '1200': '1200px',
      },
      spacing: {
        '88': '88px',
        '56': '56px',
        '72': '72px',
      },
      borderRadius: {
        '16': '16px',
      },
      animation: {
      },
      keyframes: {
      },
      scrollbar: {
        hide: {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};