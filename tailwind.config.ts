import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0de6a7',
        secondary: '#e60d4c',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [],
} satisfies Config;
