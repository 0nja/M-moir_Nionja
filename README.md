# DesignHub AI

Une bibliothèque d'inspirations de design pensée pour les développeurs qui codent avec une IA
(ChatGPT, Claude, Gemini, Codex…).

Ce n'est **pas** un constructeur de sites comme Webflow ou Framer. Au lieu de copier du code,
on copie une **description structurée du design** (`design.md`) que les modèles d'IA
interprètent pour générer un front-end fidèle.

```
Parcourir 100 modèles  →  Voir le front-end complet  →  Copier design.md  →  Coller dans son IA
```

## Lancer le projet

Aucune dépendance, aucun build obligatoire. Il faut simplement un serveur HTTP
(les modules ES et `fetch` ne fonctionnent pas en `file://`) :

```bash
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

Régénérer les 100 `design.md` et le catalogue après modification de la taxonomie :

```bash
node tools/build.mjs
```

## Ce que contient le projet

| Chemin | Rôle |
| ------ | ---- |
| `index.html`, `style.css`, `app.js` | La galerie : recherche, filtres par catégorie et par mode, vue détail |
| `taxonomy/categories.json` | Les 10 catégories |
| `taxonomy/styles/<categorie>.json` | **La source de vérité** : 10 styles par catégorie, soit 100 styles |
| `taxonomy/STYLES.md` | Catalogue lisible des 100 thèmes (généré) |
| `taxonomy/schema.md` | Structure d'un `design.md` |
| `designs/<categorie>/<id>.md` | Les 100 `design.md` (générés) |
| `designs/manifest.json` | Index machine des 100 styles (généré) |
| `lib/designmd.js` | Génère le `design.md` depuis un style — partagé navigateur / Node |
| `lib/tokens.js` | Traduit les tokens d'un style en CSS réel |
| `preview/` | Moteur d'aperçu générique : rend un vrai front-end depuis les tokens |
| `public/demos/<id>/` | Démos écrites à la main, qui remplacent l'aperçu générique |
| `tools/build.mjs` | Génération des fichiers dérivés |

## Les 100 styles

10 catégories × 10 styles. Le détail complet est dans [`taxonomy/STYLES.md`](taxonomy/STYLES.md).

| Catégorie | Exemples |
| --------- | -------- |
| SaaS & Tech | Modern SaaS, Dark Developer Tool, AI Startup Glow, API Console, Fintech App |
| Minimal & Éditorial | Swiss Grid, Brutalist Raw, Neo-Brutalism Pop, Serif Editorial, Japanese Ma |
| Rétro & Nostalgie | Y2K Chrome, Vaporwave, Web 90s, Memphis, CRT Terminal, Pixel Arcade, Art Déco |
| Tendances UI | Glassmorphism, Bento Grid, Aurora, Neumorphisme, Claymorphisme, 3D Spline, Grain |
| Corporate & Pro | Law Firm, Medical Clean, Banking Trust, Industrial B2B, Government, HR |
| Créatif & Portfolio | Photographe, Awwwards, Agence, Terminal, Architecture, Motion Reel |
| E-commerce & D2C | Fashion Lookbook, Beauty, Sneaker Drop, Scandinave, Food, Joaillerie, Marketplace |
| Lifestyle & Local | Restaurant, Café, Hôtel, Voyage, Fitness, Yoga, Barbier, Mariage, Festival |
| Contenu & Éducation | Documentation, Blog long, Portail news, Cours, Université, Wiki, Podcast |
| Niche & Spécial | Web3, Esports, Dashboard, ONG, Chat IA, Hardware, Streaming, Automobile, Spatial |

## Anatomie d'un `design.md`

Chaque style est décrit de façon standardisée pour être lu par une IA — pas de HTML, pas de CSS,
uniquement des intentions et des valeurs :

```markdown
---
id: modern-saas
name: Modern SaaS Landing
category: saas-tech
tags: ["light", "minimal", "spacious"]
mode: light
---

# Modern SaaS Landing

## Intent        objectif de la page, ton, cible
## Style         règles visuelles en langage naturel
## Colors        primary, secondary, bg, surface, text, muted, border, traitement de fond
## Typography    polices, échelle (hero, h2, body), casse, détails
## Layout        container, variante de hero, section principale, espacement, grille
## Spacing & Shape   rayon, bordures, ombres
## Animation     load, hover, scroll
## Components    liste ordonnée des composants de la page
## Sections Order
## Do / Don't for AI
## Responsive
```

Le bouton **Copier le design.md** de la galerie produit exactement ce fichier :
il est généré à la volée par `lib/designmd.js` à partir du JSON, donc le fichier copié
et le fichier sur disque ne peuvent jamais diverger.

## Ajouter un style

1. Ajouter une entrée dans `taxonomy/styles/<categorie>.json` (copier le schéma d'un voisin).
2. `node tools/build.mjs`.
3. Recharger la galerie : l'aperçu est rendu automatiquement depuis les tokens.

Pour une démo écrite à la main plutôt que l'aperçu générique, créer
`public/demos/<id>/index.html` et ajouter `"demo": "/demos/<id>"` au style.

## Raccourcis clavier

| Touche | Action |
| ------ | ------ |
| `/` | Focus sur la recherche |
| `↑` `↓` | Style précédent / suivant dans la vue détail |
| `Échap` | Revenir à la galerie |
