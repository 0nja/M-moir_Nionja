---
id: mac-code-editor
name: Mac Code Editor
category: mac-sidebar
tags: ["dark", "developer", "macos", "editor", "fontawesome"]
mode: dark
difficulty: intermediate
preview_url: /preview/?id=mac-code-editor
---

# Mac Code Editor

## Intent
Interface pour développeurs, très sombre, dense, avec sidebar de fichiers.

Catégorie : Mac Sidebar & Dashboards. Ton : code, IDE, sombre, macos, fontawesome.

## Style
- Points macOS (rouge, jaune, vert) dans l'onglet actif ou la barre de titre
- Sidebar d'exploration de fichiers avec FontAwesome (fa-folder, fa-file-code)
- Onglets pour les fichiers ouverts
- Zone d'édition avec coloration syntaxique simulée

## Colors
- Mode: dark
- Primary: #0A84FF
- Secondary: #5E5CE6
- Background: #1E1E1E
- Surface: #252526
- Text: #D4D4D4
- Text Muted: #808080
- Border: #333333
- Background treatment: plain

## Typography
- Heading font: Inter
- Body font: JetBrains Mono
- Hero: 14px, weight 500, tracking 0
- H2: 14px, weight 500, tracking 0
- Body: 14px, line-height 1.6
- Case: none
- Détail: Police monospace obligatoire pour le code.

## Layout
- Container: 100%
- Hero: none
- Section principale: none
- Espacement entre sections: 0
- Grille: sidebar d'icônes 50px + explorer 200px + éditeur

## Spacing & Shape
- Border radius: 8px
- Borders: 1px solid #333333
- Shadows: 0 24px 48px rgba(0,0,0,0.6)

## Animation
- Load: curseur de texte clignotant
- Hover: surlignage de la ligne de code au survol
- Scroll: scroll vertical rapide

## Components
- Activity bar à l'extrême gauche avec icônes FontAwesome (fa-copy, fa-search)
- Sidebar de fichiers avec points macOS en haut
- Barre d'onglets (tabs)
- Zone d'édition principale (numéros de ligne, texte monospace)

## Sections Order
1. Activity bar à l'extrême gauche avec icônes FontAwesome (fa-copy, fa-search)
2. Sidebar de fichiers avec points macOS en haut
3. Barre d'onglets (tabs)
4. Zone d'édition principale (numéros de ligne, texte monospace)

## Do / Don't for AI
**Do:**
- Les points macOS doivent être en haut à gauche de l'Activity bar ou de l'Explorer
- Tout iconifier avec FontAwesome
- Garder l'interface ultra-carrée à l'intérieur, mais avec la bordure de fenêtre arrondie

**Don't:**
- Aucun emoji autorisé
- Pas de grandes polices de texte
- Pas de blanc pur en fond

## Responsive
Mobile : cacher les sidebars, garder uniquement l'éditeur.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
