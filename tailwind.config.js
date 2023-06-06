/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '2xs': '0px',
      'xs': '480px',
      'sm': '580px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        'frank-ruhl': 'Frank Ruhl Libre',
        'open-sans': 'Open Sans',
      },
      colors: {
        'darkgrey': '#2A2A33',
        'blue': '#006aff'
      },
      boxShadow: {
        'custom': ['0 0 0px 1px #FFF', '0 0 2px 3px #A6E5FF', '0 0 2px 3px blue'],
      },
    },
  },
  plugins: [],
}

