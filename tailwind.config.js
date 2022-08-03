/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1C3879',
        'light-wood': '#F9F5EB',
        'light-gray': '#EBECED',
        'text-LM': '#9B9A97',
        'text-DM': 'rgba(151,154,155,0.95)',
        'bg-LM': '#EBECED',
        'bg-DM': '#454B4E',
      },
    },
  },
  plugins: [],
};
