/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arvo: ['var(--arvo-font)'],
        // mono: ['var(--inter-font)'],
      },
    },
  },
  plugins: [],
};
