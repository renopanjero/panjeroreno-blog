import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '300px',
        xs1: '420px',
        xs2: '550px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        navdark: '#030637',
        navlight: '#E4E0E1',
        blues: '#13005A',
        text: '#FEF9F2',
        navi: '#1D4ED8',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
