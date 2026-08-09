---
id: arc-dashboard
name: Arc Dashboard
category: rainbow-gradient
tags: ["dark", "arc", "dashboard", "data", "charts"]
mode: dark
difficulty: advanced
preview_url: /preview/?id=arc-dashboard
---

# Arc Dashboard

## Intent
Dashboard analytics utilisant les formes d'arc et de demi-cercle comme motif de visualisation de données.

Catégorie : Arcs & Demi-cercles. Ton : dashboard, arc, donut, graphique, données.

## Style
- Graphiques en donut (demi-cercles) comme visualisation principale
- Sidebar sombre, contenu avec cartes de données
- Arcs de couleur spectrales pour les indicateurs de progression
- Design dense et informatif

## Colors
- Mode: dark
- Primary: #0A84FF
- Secondary: #30D158
- Background: #1a1a1a
- Surface: #232323
- Text: #FFFFFF
- Text Muted: #888888
- Border: #2e2e2e
- Background treatment: plain

## Typography
- Heading font: Inter
- Body font: Inter
- Hero: 20px, weight 700, tracking 0
- H2: 15px, weight 600, tracking 0
- Body: 13px, line-height 1.5
- Case: none
- Détail: Dense et lisible.

## Layout
- Container: 100%
- Hero: none
- Section principale: grid-4
- Espacement entre sections: 16px
- Grille: sidebar 220px + contenu avec graphiques

## Spacing & Shape
- Border radius: 12px
- Borders: 1px solid #2e2e2e
- Shadows: none

## Animation
- Load: les arcs de progression se dessinent du début à la valeur finale
- Hover: tooltip sur les segments d'arc
- Scroll: standard

## Components
- Sidebar avec navigation FontAwesome
- Carte avec grand donut (demi-cercle) central de progression
- Petits arcs de progression pour chaque métrique
- Barre de données avec segments colorés
- Légende avec points colorés spectraux

## Sections Order
1. Sidebar avec navigation FontAwesome
2. Carte avec grand donut (demi-cercle) central de progression
3. Petits arcs de progression pour chaque métrique
4. Barre de données avec segments colorés
5. Légende avec points colorés spectraux

## Do / Don't for AI
**Do:**
- Utiliser SVG ou CSS pour les arcs de donut
- Chaque arc = une couleur différente du spectre
- Animer le remplissage de l'arc au chargement

**Don't:**
- Pas d'arcs pleins (uniquement des contours/bordures)
- Pas de fond blanc
- Ne pas empiler plus de 5 arcs sur un même graphique

## Responsive
Mobile : graphiques en pleine largeur, sidebar masquée.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
