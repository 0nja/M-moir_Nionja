---
id: mac-kanban-board
name: Mac Kanban Board
category: mac-sidebar
tags: ["dark", "kanban", "macos", "productivity", "fontawesome"]
mode: dark
difficulty: advanced
preview_url: /preview/?id=mac-kanban-board
---

# Mac Kanban Board

## Intent
Application de productivité dense avec navigation latérale native.

Catégorie : Mac Sidebar & Dashboards. Ton : kanban, productivité, macos, fontawesome, task.

## Style
- Sidebar macOS translucide sombre, contenu Kanban clair ou sombre unifié
- Points macOS en haut à gauche
- Colonnes (Todo, In Progress, Done) avec cartes de tâches
- Badges et icônes FontAwesome sur les cartes

## Colors
- Mode: dark
- Primary: #5E5CE6
- Secondary: #0A84FF
- Background: #1C1C1E
- Surface: #2C2C2E
- Text: #FFFFFF
- Text Muted: #8E8E93
- Border: #38383A
- Background treatment: plain

## Typography
- Heading font: Inter
- Body font: Inter
- Hero: 20px, weight 600, tracking 0
- H2: 16px, weight 600, tracking 0
- Body: 14px, line-height 1.4
- Case: none
- Détail: Typographie dense, titres gras.

## Layout
- Container: 100%
- Hero: none
- Section principale: kanban
- Espacement entre sections: 20px
- Grille: sidebar 220px + scroll horizontal des colonnes

## Spacing & Shape
- Border radius: 8px
- Borders: 1px solid #38383A
- Shadows: 0 10px 30px rgba(0,0,0,0.5)

## Animation
- Load: les cartes apparaissent en cascade
- Hover: les cartes se soulèvent très légèrement
- Scroll: scroll horizontal pour le board

## Components
- Sidebar d'espaces de travail avec points macOS en haut
- En-tête de board (Titre, Membres, Filtres FontAwesome)
- Colonnes Kanban (fonds gris)
- Cartes de tâches avec tags de couleur et icônes FontAwesome (fa-check, fa-comment)

## Sections Order
1. Sidebar d'espaces de travail avec points macOS en haut
2. En-tête de board (Titre, Membres, Filtres FontAwesome)
3. Colonnes Kanban (fonds gris)
4. Cartes de tâches avec tags de couleur et icônes FontAwesome (fa-check, fa-comment)

## Do / Don't for AI
**Do:**
- Interface pleine fenêtre (100vh) sans scroll vertical principal
- Utiliser FontAwesome pour les avatars (fa-user-circle) et labels
- Maintenir l'esthétique macOS (fenêtre, points rouge/jaune/vert)

**Don't:**
- Pas d'emojis pour les statuts
- Pas d'images massives, focus texte et données
- Pas de blanc pur

## Responsive
Mobile : masquer la sidebar, afficher une colonne Kanban à la fois.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
