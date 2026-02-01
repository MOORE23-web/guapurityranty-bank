/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1190cb',
          600: '#1190cb',
          700: '#0f7bb3',
          800: '#0d6699',
          900: '#0b5280',
        },
      },
    },
  },
  plugins: [],
};