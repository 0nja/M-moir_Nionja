---
id: pixel-arcade
name: Pixel Arcade
category: retro-nostalgia
tags: ["dark", "pixel", "gaming", "retro", "playful"]
mode: dark
difficulty: intermediate
preview_url: /preview/?id=pixel-arcade
---

# Pixel Arcade

## Intent
Jeu indépendant ou communauté rétrogaming. Chaque élément ressemble à une interface de console 8 bits.

Catégorie : Rétro & Nostalgie. Ton : pixel, ludique, coloré, jeu.

## Style
- Police pixelisée pour les titres, sans anti-aliasing
- Bordures en escalier de 4px
- Palette limitée à huit couleurs
- Boutons avec ombre pleine décalée façon relief

## Colors
- Mode: dark
- Primary: #FFCC00
- Secondary: #E5484D
- Background: #1A1033
- Surface: #2A1A4D
- Text: #FFFFFF
- Text Muted: #A796D9
- Border: #000000
- Background treatment: dots

## Typography
- Heading font: Press Start 2P
- Body font: VT323
- Hero: 36px, weight 400, tracking 0
- H2: 20px, weight 400, tracking 0
- Body: 20px, line-height 1.5
- Case: upper
- Détail: image-rendering: pixelated sur toutes les images

## Layout
- Container: 960px
- Hero: centered
- Section principale: grid-3
- Espacement entre sections: 64px entre sections
- Grille: modules alignés sur une grille de 8px

## Spacing & Shape
- Border radius: 0px
- Borders: 4px solid #000000
- Shadows: 4px 4px 0 #000000

## Animation
- Load: apparition par paliers, sans transition douce
- Hover: le bouton descend de 4px et perd son ombre
- Scroll: sprites animés en boucle de 4 images

## Components
- Barre de score / navigation
- Écran titre avec « Press Start »
- Cartes de niveaux
- Tableau des meilleurs scores
- Galerie de sprites
- Pied de page façon insert coin

## Sections Order
1. Barre de score / navigation
2. Écran titre avec « Press Start »
3. Cartes de niveaux
4. Tableau des meilleurs scores
5. Galerie de sprites
6. Pied de page façon insert coin

## Do / Don't for AI
**Do:**
- Aligner tout sur une grille de 8 pixels
- Désactiver le lissage des images
- Garder les titres très courts, la police est large

**Don't:**
- Pas de dégradé ni d'ombre floue
- Pas de texte long en police pixel
- Ne pas utiliser plus de huit couleurs

## Responsive
Mobile : titres à 20px, grille de 4 colonnes en 1, sprites conservés.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
