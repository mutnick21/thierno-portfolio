/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        plum:  { 950: '#160B18', 900: '#201126', 800: '#2E1934', 700: '#502D55' },
        mauve: { 500: '#935073' },
        lilac: { 300: '#B892A6' },
        peach: { 200: '#F6DBC0' },
        cream: { 100: '#F8F4E9' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', 'sans-serif'],
        sans:    ['"Geist Variable"', 'sans-serif'],
        mono:    ['"Geist Mono Variable"', 'monospace'],
      },
    },
  },
  plugins: [],
};
