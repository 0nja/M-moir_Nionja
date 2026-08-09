---
id: sidebar-calendar
name: Calendar App Sidebar
category: mac-sidebar
tags: ["light", "sidebar", "calendar", "productivity", "fontawesome"]
mode: light
difficulty: advanced
preview_url: /preview/?id=sidebar-calendar
---

# Calendar App Sidebar

## Intent
Interface de planification ou de prise de rendez-vous avec sidebar et grille de calendrier.

Catégorie : Mac Sidebar & Dashboards. Ton : calendar, sidebar, planning, light, fontawesome.

## Style
- Toolbar supérieure avec points macOS intégrés à gauche
- Sidebar avec mini-calendrier et liste de calendriers
- Grille principale du mois avec événements en blocs colorés
- Contrôles de navigation FontAwesome

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
- Hero: 22px, weight 700, tracking 0
- H2: 14px, weight 500, tracking 0
- Body: 13px, line-height 1.4
- Case: none
- Détail: Chiffres bien visibles, typographie système.

## Layout
- Container: 100%
- Hero: none
- Section principale: grid
- Espacement entre sections: 0
- Grille: sidebar 200px + grille calendrier

## Spacing & Shape
- Border radius: 8px
- Borders: 1px solid #E5E5EA
- Shadows: none

## Animation
- Load: scale légère (0.99 → 1)
- Hover: événement plus vif
- Scroll: vertical semaine

## Components
- Toolbar unique avec points macOS à gauche et contrôles (fa-chevron-left, fa-chevron-right)
- Sidebar : mini-calendrier + liste des calendriers avec fa-check-square
- Grille principale du mois
- Blocs d'événements colorés avec titre

## Sections Order
1. Toolbar unique avec points macOS à gauche et contrôles (fa-chevron-left, fa-chevron-right)
2. Sidebar : mini-calendrier + liste des calendriers avec fa-check-square
3. Grille principale du mois
4. Blocs d'événements colorés avec titre

## Do / Don't for AI
**Do:**
- Points macOS dans la toolbar principale
- FontAwesome strictement pour toute l'iconographie
- Lignes de grille très fines

**Don't:**
- Zéro emoji
- Pas de dégradés sur les événements
- Pas de marges autour du calendrier dans la fenêtre

## Responsive
Mobile : vue agenda quotidienne.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
