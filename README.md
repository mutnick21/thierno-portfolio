# Portfolio — Thierno Abdoulaye Sall

Portfolio personnel construit avec **Astro** + **Tailwind CSS**.
Thème vert forêt, design en composants, entièrement responsive.

## Démarrer

```bash
npm install       # installer les dépendances
npm run dev       # serveur de développement → http://localhost:4321
npm run build     # générer le site statique dans dist/
npm run preview   # prévisualiser le build
```

## Structure

```
src/
  components/    Nav, Hero, Expertise, Projects, About, Contact
  layouts/       Layout.astro (base HTML + polices + reveal au scroll)
  pages/         index.astro (assemble les composants)
  styles/        global.css (palette, utilitaires, animations)
public/
  portrait.png   photo détourée du portrait circulaire
  cv.pdf         CV téléchargeable (bouton du hero)
```

## Personnalisation rapide

- **Couleurs** : `tailwind.config.mjs` → objet `colors` (forest / sage / mint)
- **Textes** : chaque composant dans `src/components/`
- **Projets** : tableau `projects` dans `src/components/Projects.astro`
- **Photo couleur** : retirer la classe `grayscale` sur le `<img>` du Hero
- **Liens sociaux** : tableau `socials` dans `src/components/Hero.astro`

## Déploiement

Le dossier `dist/` (après `npm run build`) est un site statique.
Déployable gratuitement sur **Netlify**, **Vercel** ou **GitHub Pages**
(glisser-déposer le dossier `dist/`, ou connecter le dépôt Git).
