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
        /* un accent par domaine d'expertise — même clarté, même saturation */
        dom: {
          net:  '#F6C89A',
          sec:  '#E88BA6',
          sys:  '#B79BE8',
          data: '#7FD1C4',
        },
      },
      /* une seule famille sur tout le site — les trois jetons pointent au même
         endroit, ce qui évite de reprendre les ~27 classes déjà en place */
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans:    ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
