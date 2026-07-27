---
id: brutalist-01
name: Brutalist Web Portfolio
category: minimal-editorial
tags: ["brutalism", "bold", "monochrome", "display", "aggressive"]
preview_url: /demos/brutalist-01
thumbnail: https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80
difficulty: intermediate
framework_hint: html+css
---

# Brutalist Web Portfolio

## Intent
Portfolio créatif pour un designer ou développeur.
Ton : brut, audacieux, anti-design, impactant.

## Style Keywords
brutalism, raw, huge typography, stark contrast, borders

## Colors
- Mode: light (ou monochrome)
- Primary: #000000 (Noir pur)
- Secondary: #FFFF00 (Jaune vif, pour l'accentuation)
- Background: #FFFFFF (Blanc pur)
- Surface: #EEEEEE (Gris clair pour séparer)
- Text Primary: #000000
- Text Muted: #000000 (Pas de mute en brutalisme, tout est visible)
- Border: #000000

## Typography
- Heading Font: 'Archivo Black', sans-serif (ou Impact)
- Body Font: 'Space Mono', monospace
- Scale:
  - Hero: 120px, 900, uppercase, line-height 0.9
  - H1: 72px, 900, uppercase
  - Body: 18px, 400, uppercase

## Layout
- Container: 100% width, padding 20px
- Patterns: grid_visible_borders, asymmetric
- Spacing: no margins, everything is separated by thick borders

## Spacing & Shape
- Border radius: 0px (strictement aucun arrondi)
- Shadows: Hard shadows (ex: 8px 8px 0px #000), sans blur.
- Borders: 4px solid #000 everywhere.

## Animation
- Load: instant, no fade
- Hover: Invert colors (Black background, white text) or hard translate (-4px -4px)

## Components
- Navigation: Marquee text ou liens massifs occupant tout l'écran
- Hero: Texte gigantesque remplissant le viewport, image raw
- Projects: Liste avec bordures très épaisses, images en hover
- Footer: Énorme typographie "CONTACT ME"

## Do / Don't for AI
**Do:**
- Utiliser des bordures noires très épaisses (3-4px) partout.
- Les ombres doivent être solides, sans aucun flou (`box-shadow: 10px 10px 0 #000`).
- Utiliser la typographie la plus grande possible.

**Don't:**
- STRICTEMENT AUCUN `border-radius`.
- Aucun effet de transparence ou de glassmorphism.
- Ne pas utiliser de dégradés.

## Sections Order
1. Navigation (Marquee)
2. Hero (Giant Name)
3. Selected Works (Grid with thick borders)
4. Footer
