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
      padding: {
        'desktop-pl': 'calc(96px + env(safe-area-inset-left))',
        'desktop-pr': 'calc(96px + env(safe-area-inset-right))',
        'mobile-pl': 'calc(24px + env(safe-area-inset-left))',
        'mobile-pr': 'calc(24px + env(safe-area-inset-right))',
        'resize-desktop-pl': 'calc(96px + env(safe-area-inset-left))',
        'resize-tablet-pl': 'calc(100% - 650px)',
        'resize-mobile-pl': 'calc(100vw - 550px)',
      },
      width: {
        'desktop-w': 'calc(100% - (96px + env(safe-area-inset-left)))',
        'tablet-w': '650px',
        'mobile-w': '550px',
      },
    },
  },
  plugins: [],
};
