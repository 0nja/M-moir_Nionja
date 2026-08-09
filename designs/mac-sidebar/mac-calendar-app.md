---
id: mac-calendar-app
name: Mac Calendar App
category: mac-sidebar
tags: ["light", "calendar", "macos", "productivity", "fontawesome"]
mode: light
difficulty: advanced
preview_url: /preview/?id=mac-calendar-app
---

# Mac Calendar App

## Intent
Interface de prise de rendez-vous ou de planification au look système.

Catégorie : Mac Sidebar & Dashboards. Ton : calendrier, planning, macos, fontawesome, event.

## Style
- Vue mensuelle ou hebdomadaire avec grille claire
- Barre d'outils supérieure intégrant les points macOS
- Événements représentés par des blocs colorés arrondis
- Boutons de changement de vue FontAwesome (fa-chevron-left, fa-chevron-right, fa-calendar)

## Colors
- Mode: light
- Primary: #FF2D55
- Secondary: #007AFF
- Background: #FFFFFF
- Surface: #F2F2F7
- Text: #000000
- Text Muted: #8E8E93
- Border: #E5E5EA
- Background treatment: plain

## Typography
- Heading font: Inter
- Body font: Inter
- Hero: 24px, weight 600, tracking 0
- H2: 16px, weight 500, tracking 0
- Body: 13px, line-height 1.4
- Case: none
- Détail: Jours en gras, numéros bien visibles.

## Layout
- Container: 100%
- Hero: none
- Section principale: grid
- Espacement entre sections: 0
- Grille: sidebar (calendriers miniatures) 200px + grille mois/semaine

## Spacing & Shape
- Border radius: 10px
- Borders: 1px solid #E5E5EA
- Shadows: 0 10px 40px rgba(0,0,0,0.1)

## Animation
- Load: zoom out très léger (scale 0.99 vers 1)
- Hover: l'événement devient un peu plus vif
- Scroll: scroll vertical pour la vue semaine

## Components
- Toolbar unique avec les points macOS à gauche, et les contrôles (Aujourd'hui, Jour, Semaine, Mois) au centre
- Sidebar de liste des calendriers avec des checkboxes (fa-check-square)
- Grille principale de calendrier
- Blocs d'événements colorés avec titre court

## Sections Order
1. Toolbar unique avec les points macOS à gauche, et les contrôles (Aujourd'hui, Jour, Semaine, Mois) au centre
2. Sidebar de liste des calendriers avec des checkboxes (fa-check-square)
3. Grille principale de calendrier
4. Blocs d'événements colorés avec titre court

## Do / Don't for AI
**Do:**
- Intégrer les 3 points de contrôle (rouge, jaune, vert) dans la toolbar grise typique des apps macOS
- Utiliser strictement FontAwesome pour l'iconographie (fa-plus pour nouvel événement)
- Garder des lignes de grille très fines (#E5E5EA)

**Don't:**
- Zéro emoji utilisé
- Pas de dégradé sur les blocs d'événements (couleurs unies pastel ou saturées)
- Pas de marges globales autour du calendrier dans la fenêtre

## Responsive
Mobile : vue liste (agenda) quotidienne.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
