---
id: glassmorphism-01
name: Glassmorphism UI
category: ui-trends
tags: ["glassmorphism", "dark", "gradients", "blur", "3d"]
preview_url: /demos/glassmorphism-01
thumbnail: https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80
difficulty: advanced
framework_hint: html+css
---

# Glassmorphism UI

## Intent
Interface futuriste pour une application fintech ou web3.
Ton : technologique, premium, immersif, profond.

## Style Keywords
glass, frosted, blur, aurora, gradients, floating

## Colors
- Mode: dark
- Background: #0B0F19 (Bleu très profond)
- Surface (Glass): rgba(255, 255, 255, 0.05)
- Text Primary: #FFFFFF
- Text Muted: rgba(255, 255, 255, 0.6)
- Gradients (Aurora): 
  - Cyan: #00F0FF
  - Purple: #8A2BE2
  - Pink: #FF007F
- Border: rgba(255, 255, 255, 0.1)

## Typography
- Heading Font: 'Outfit', sans-serif
- Body Font: 'Outfit', sans-serif
- Scale:
  - Hero: 56px, 600, gradient text
  - Body: 16px, 300

## Layout
- Container: Floating cards above an animated aurora background.
- Patterns: bento_grid, overlapping elements

## Spacing & Shape
- Border radius: 24px (Soft and round)
- Shadows: 0 8px 32px 0 rgba(0, 0, 0, 0.37)
- Glass Effect: `backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);`

## Animation
- Background: Slow rotation of gradient blobs (aurora effect).
- Hover: Cards slightly lift and border opacity increases to 0.3.

## Components
- Background: Divs absolues avec filtres blur massifs.
- Cards: Panneaux transparents avec reflets.
- Buttons: Glow subtil.

## Do / Don't for AI
**Do:**
- Utiliser `backdrop-filter: blur()` pour créer l'effet de verre.
- Ajouter une bordure très fine et semi-transparente `1px solid rgba(255, 255, 255, 0.1)` sur les éléments en verre.
- Gérer l'éclairage de fond avec des blobs colorés animés.

**Don't:**
- Pas d'opacité à 100% sur les surfaces.
- Pas d'ombres dures.

## Sections Order
1. Aurora Background (Fixed)
2. Glass Navigation
3. Hero Content (Floating)
4. Bento Grid Features
