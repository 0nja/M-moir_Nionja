---
id: sidebar-dark-dashboard
name: Dark Dashboard Sidebar
category: mac-sidebar
tags: ["dark", "sidebar", "dashboard", "macos", "fontawesome"]
mode: dark
difficulty: intermediate
preview_url: /preview/?id=sidebar-dark-dashboard
---

# Dark Dashboard Sidebar

## Intent
Interface d'administration complète en mode sombre avec navigation latérale, statistiques et graphiques.

Catégorie : Mac Sidebar & Dashboards. Ton : sidebar, dark, dashboard, macos, fontawesome.

## Style
- Barre latérale sombre (#111) à gauche avec les 3 points macOS (rouge, jaune, vert)
- Fond général #1a1a1a, cartes en #1c1c1e
- Icônes Font Awesome pour chaque élément du menu
- Cartes de statistiques avec indicateurs de couleur

## Colors
- Mode: dark
- Primary: #0A84FF
- Secondary: #30D158
- Background: #1a1a1a
- Surface: #1c1c1e
- Text: #FFFFFF
- Text Muted: #888888
- Border: #2a2a2a
- Background treatment: plain

## Typography
- Heading font: Inter
- Body font: Inter
- Hero: 22px, weight 700, tracking 0
- H2: 16px, weight 600, tracking 0
- Body: 14px, line-height 1.5
- Case: none
- Détail: Interface dense, Inter pour la lisibilité.

## Layout
- Container: 100%
- Hero: none
- Section principale: grid-4
- Espacement entre sections: 16px
- Grille: sidebar 240px + contenu fluide

## Spacing & Shape
- Border radius: 12px
- Borders: 1px solid #2a2a2a
- Shadows: 0 10px 30px rgba(0,0,0,0.5)

## Animation
- Load: fade-in 300ms
- Hover: fond item nav rgba(255,255,255,0.05)
- Scroll: scroll vertical du contenu uniquement

## Components
- Sidebar gauche avec points macOS (rouge, jaune, vert) en haut
- Menu de navigation avec icônes FontAwesome
- Topbar avec titre et icônes d'action
- Grille de 4 cartes de statistiques
- Graphique en barres + liste de répartition

## Sections Order
1. Sidebar gauche avec points macOS (rouge, jaune, vert) en haut
2. Menu de navigation avec icônes FontAwesome
3. Topbar avec titre et icônes d'action
4. Grille de 4 cartes de statistiques
5. Graphique en barres + liste de répartition

## Do / Don't for AI
**Do:**
- Sidebar fixe, contenu scrollable
- Points macOS toujours visibles en haut de la sidebar
- Utiliser FontAwesome pour chaque icône de menu

**Don't:**
- Aucun emoji autorisé
- Pas de navbar horizontale en haut
- Pas de fond clair

## Responsive
Mobile : sidebar masquée, accessible via fa-bars.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
