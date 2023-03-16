/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'dark-purple': '#45007B',
      },
      screens: {
        mobile: '340px',
      },
    },
  },
  plugins: [],
};
