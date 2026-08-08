import { defineConfig } from 'astro/config';

// Tailwind passe par PostCSS (postcss.config.mjs), pas par @astrojs/tailwind :
// cette intégration est dépréciée et plafonne à Astro 5, ce projet est en Astro 7.
export default defineConfig({
  build: {
    // le CSS reste inline : une requête de moins, et le CSP doit de toute façon
    // tolérer les styles inline à cause des attributs style= porteurs de --accent
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      // force les scripts en fichiers externes ; sans ça Astro inline les petits,
      // ce qui obligerait à ouvrir script-src à 'unsafe-inline' dans le CSP
      assetsInlineLimit: 0,
    },
  },
});
