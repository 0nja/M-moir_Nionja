---
id: sidebar-dark-code-editor
name: Code Editor Sidebar
category: mac-sidebar
tags: ["dark", "sidebar", "code", "editor", "fontawesome"]
mode: dark
difficulty: advanced
preview_url: /preview/?id=sidebar-dark-code-editor
---

# Code Editor Sidebar

## Intent
Interface d'IDE web avec sidebar de fichiers, onglets et éditeur principal.

Catégorie : Mac Sidebar & Dashboards. Ton : code, editor, sidebar, dark, fontawesome.

## Style
- Activity bar d'icônes à gauche (très étroite)
- Sidebar d'exploration de fichiers juste à droite
- Points macOS dans la sidebar de fichiers
- Zone d'édition principale avec police monospace

## Colors
- Mode: dark
- Primary: #569CD6
- Secondary: #4EC9B0
- Background: #1E1E1E
- Surface: #252526
- Text: #D4D4D4
- Text Muted: #808080
- Border: #333333
- Background treatment: plain

## Typography
- Heading font: JetBrains Mono
- Body font: JetBrains Mono
- Hero: 14px, weight 500, tracking 0
- H2: 12px, weight 500, tracking 0
- Body: 14px, line-height 1.6
- Case: none
- Détail: Monospace obligatoire.

## Layout
- Container: 100%
- Hero: none
- Section principale: none
- Espacement entre sections: 0
- Grille: activity bar 48px + sidebar 200px + éditeur

## Spacing & Shape
- Border radius: 0
- Borders: 1px solid #333333
- Shadows: none

## Animation
- Load: instantané
- Hover: surlignage de ligne de fichier
- Scroll: vertical dans l'éditeur

## Components
- Activity bar avec icônes FontAwesome (fa-copy, fa-search, fa-code-branch)
- Sidebar de fichiers avec points macOS en haut
- Barre d'onglets pour les fichiers ouverts
- Éditeur principal avec numéros de ligne

## Sections Order
1. Activity bar avec icônes FontAwesome (fa-copy, fa-search, fa-code-branch)
2. Sidebar de fichiers avec points macOS en haut
3. Barre d'onglets pour les fichiers ouverts
4. Éditeur principal avec numéros de ligne

## Do / Don't for AI
**Do:**
- Points macOS dans l'explorer
- Coins carrés (radius 0) pour simuler VS Code
- FontAwesome pour toute l'iconographie

**Don't:**
- Aucun emoji
- Pas de gradients ni de couleurs vives
- Pas de police sans-serif pour le code

## Responsive
Mobile : masquer les sidebars.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
