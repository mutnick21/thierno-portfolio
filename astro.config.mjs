import { defineConfig } from 'astro/config';

// Tailwind passe par PostCSS (postcss.config.mjs), pas par @astrojs/tailwind :
// cette intégration est dépréciée et plafonne à Astro 5, ce projet est en Astro 7.
export default defineConfig({});
