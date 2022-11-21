/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require('ui/tailwind.config'),
  content: [
    '.src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
