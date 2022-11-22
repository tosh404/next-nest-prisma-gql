// /** @type {import('tailwindcss').Config} */
module.exports = {
  // ...require('ui/tailwind.config'),
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
};
