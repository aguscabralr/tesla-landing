/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '200px',
        sm: '420px',
        md: '640px',
        lg: '1024px',
        xl: '1536px',
        landscape: '1024px',
      },
      colors: {
        rd: '#c90000',
        gry: '#5e5e5e',
      },
      backgroundImage: {
        grl: 'linear-gradient(180deg, #ffffff, #ffffff, #5e5e5e, #ffffff, #ffffff)',
        grd: 'linear-gradient(180deg, #3f3f46, #3f3f46, #e5e5e5, #3f3f46, #3f3f46)',
      },
    },
  },
  plugins: [],
};
