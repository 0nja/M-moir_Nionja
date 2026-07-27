# Schéma d'un style

Un style est décrit **une seule fois**, en JSON, dans `taxonomy/styles/<categorie>.json`.
Tout le reste en découle : la miniature de la galerie, l'aperçu front-end, et le `design.md`
que l'utilisateur copie dans son IA.

```
taxonomy/styles/<categorie>.json   ← source de vérité (écrite à la main)
        │
        ├── lib/tokens.js    → miniature de la carte + rendu de l'aperçu
        └── lib/designmd.js  → designs/<categorie>/<id>.md  (bouton « Copier »)
```

## Structure JSON

```jsonc
{
  "id": "modern-saas",              // identifiant unique, kebab-case, sert d'URL
  "name": "Modern SaaS Landing",    // nom affiché
  "tagline": "…",                   // une phrase, affichée sur la carte
  "intent": "…",                    // objectif de la page, ton, cible
  "keywords": "minimaliste, aéré",  // 3 à 4 adjectifs séparés par des virgules
  "style": ["…", "…"],              // 3 à 4 règles visuelles en langage naturel
  "tags": ["light", "minimal"],     // mots clés de recherche
  "difficulty": "beginner",         // beginner | intermediate | advanced
  "mode": "light",                  // light | dark

  "colors": {
    "primary": "#2563EB",           // couleur d'action
    "secondary": "#DBEAFE",
    "bg": "#FFFFFF",
    "surface": "#F8FAFC",
    "text": "#0F172A",
    "muted": "#64748B",
    "border": "#E2E8F0"
  },

  "bg": "plain",                    // traitement de fond, voir liste ci-dessous

  "font": {
    "heading": "Inter",
    "body": "Inter",
    "google": "Inter:wght@400;700", // familles séparées par |, vide si police système
    "hero": "64px/700/-0.03em",     // taille/graisse/interlettrage
    "h2": "36px/600/-0.02em",
    "body_size": "18px, line-height 1.6",
    "case": "none",                 // none | upper
    "detail": "…"                   // particularité typographique
  },

  "shape": {
    "radius": "12px sur les cartes, 8px sur les boutons",
    "border": "1px solid #E2E8F0",
    "shadow": "0 10px 30px -12px rgba(15,23,42,0.12)"   // ou "aucune"
  },

  "layout": {
    "container": "1200px",
    "hero": "centered",             // variante de hero, voir liste
    "features": "grid-3",           // variante de section principale, voir liste
    "spacing": "120px entre sections",
    "grid": "12 colonnes, gouttière 32px"
  },

  "motion": { "load": "…", "hover": "…", "scroll": "…" },

  "components": ["Navbar sticky", "Hero centré", "…"],   // dans l'ordre de la page
  "do":   ["…", "…", "…"],          // ce que l'IA doit faire
  "dont": ["…", "…", "…"],          // ce que l'IA doit éviter
  "responsive": "…",

  "demo": "/demos/modern-saas-01"   // facultatif : démo écrite à la main
}
```

## Valeurs reconnues par le moteur d'aperçu

Toute autre valeur reste valide dans le `design.md`, mais l'aperçu retombe sur un rendu neutre.

**`bg`** — `plain`, `soft-gradient`, `radial-glow`, `mesh`, `aurora`, `grid`, `dots`,
`stripes`, `scanlines`, `noise`, `paper`, `starfield`

**`layout.hero`** — `centered`, `split`, `editorial`, `fullbleed`, `poster`, `terminal`, `sidebar`

**`layout.features`** — `grid-3`, `grid-4`, `cards-2`, `bento`, `list`, `table`, `gallery`,
`steps`, `marquee`, `split-alt`

Le vocabulaire réellement employé par les 100 styles, avec ses fréquences, est regénéré
dans `taxonomy/tags.json` par `node tools/build.mjs`.

## Sortie : le `design.md`

```markdown
---
id: · name: · category: · tags: · mode: · difficulty: · preview_url:
---

# Nom du style

## Intent
## Style
## Colors
## Typography
## Layout
## Spacing & Shape
## Animation
## Components
## Sections Order
## Do / Don't for AI
## Responsive
```
