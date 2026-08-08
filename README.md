# Portfolio — Thierno Abdoulaye Sall

Portfolio personnel d'un élève ingénieur en réseaux & télécommunications.
Construit avec **Astro 7** et **Tailwind CSS 3**, généré en statique, sans aucune
dépendance tierce au moment de l'exécution.

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
  components/    Nav, Hero, Expertise, Projects, About, Contact, Footer
  layouts/       Layout.astro — base HTML, police, décor de fond, reveal au scroll
  pages/         index · expertise · projets · a-propos · contact
  styles/        global.css — palette, composants, animations
public/
  portrait.png   photo du portrait circulaire
  cv.pdf         CV téléchargeable (bouton du Hero)
```

Chaque page importe les composants dont elle a besoin ; `Layout.astro` porte tout
ce qui est commun, y compris les halos animés de l'arrière-plan.

## Parti pris visuel

Le site parle un seul langage de formes : **la bulle**. Aucun angle droit sur les
pages Expertise et Projets.

- **Expertise** — les compétences forment un nuage de bulles. La taille encode le
  niveau de maîtrise (`bubble-1` socle · `bubble-2` solide · `bubble-3` notions).
- **Projets** — cartes à rayon asymétrique (`blob-1` à `blob-4`, en rotation pour
  que deux cartes voisines n'aient jamais la même silhouette), verre dépoli et
  légère flottaison.
- **Fond** — trois halos de couleur qui dérivent lentement, plus un grain animé.

### Palette

Un fond prune profond, et **un accent par domaine technique** repris à l'identique
sur toutes les pages — c'est lui qui relie une bulle de compétence à la carte du
projet correspondant.

| Domaine | Accent | RGB |
|---|---|---|
| Réseaux & Télécoms | sable | `246 200 154` |
| Cybersécurité | rose | `232 139 166` |
| Administration système | violet | `183 155 232` |
| Développement & Data | aqua | `127 209 196` |

Les teintes de base (`plum`, `mauve`, `lilac`, `peach`, `cream`) sont dans
`tailwind.config.mjs`. Les accents de domaine y figurent aussi sous `dom`, mais
ils circulent surtout via la variable CSS `--accent`, posée sur un conteneur et
héritée par les bulles.

### Typographie

**Bricolage Grotesque** sur l'ensemble du site. Les trois jetons Tailwind
(`font-display`, `font-sans`, `font-mono`) pointent volontairement vers la même
famille : ça permet de changer d'avis en trois lignes sans toucher aux composants.

## Personnalisation rapide

- **Couleurs** : `tailwind.config.mjs` → objet `colors`
- **Compétences** : tableau `domains` dans `src/components/Expertise.astro`
  (le champ `lvl` pilote la taille de la bulle)
- **Projets** : tableau `projects` dans `src/components/Projects.astro`
  (le champ `cat` détermine la couleur de la carte)
- **Parcours & engagements** : tableaux `parcours` et `engagements` dans
  `src/components/About.astro`
- **Liens sociaux** : tableau `socials` dans `src/components/Hero.astro`

## Notes techniques

**Tailwind passe par PostCSS**, pas par `@astrojs/tailwind`. Cette intégration est
dépréciée et plafonne à Astro 5 : avec Astro 7, un `npm install` propre échouait en
`ERESOLVE`. La configuration vit dans `postcss.config.mjs`.

**Attention au purge Tailwind.** Une classe construite dynamiquement
(`` `bubble-${lvl}` ``) est invisible au scanner et disparaît du build. Les noms
sont donc toujours écrits en toutes lettres dans les composants, via une table de
correspondance. Les classes `blob-*` sont pour leur part définies hors `@layer`,
ce qui les met à l'abri.

**Les transforms sont empilés, pas partagés.** Sur les cartes projet, le filtre,
la flottaison et le survol posent chacun un `transform`. Une animation CSS gagne
toujours contre un style inline : ils vivent donc sur trois éléments imbriqués
distincts, sans quoi le filtre échouerait en silence.

**`prefers-reduced-motion` est respecté** — toutes les animations sont coupées.

## Déploiement

`npm run build` produit un site statique dans `dist/`, déployable sur Netlify,
Vercel ou GitHub Pages.

Le site ne charge **aucune ressource tierce** : polices, images et scripts sont
tous auto-hébergés. Pas de CDN, pas de traceur, pas de cookie — conforme RGPD par
construction. Merci de ne pas casser cette propriété en ajoutant une police Google
ou un script d'analytics.

Pensez à configurer les en-têtes de sécurité chez l'hébergeur
(`Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`,
`Permissions-Policy`).
