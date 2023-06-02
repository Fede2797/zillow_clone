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
      }
    },
  },
  plugins: [],
}

