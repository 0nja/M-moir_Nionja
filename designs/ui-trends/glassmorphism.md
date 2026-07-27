---
id: glassmorphism
name: Glassmorphism
category: ui-trends
tags: ["dark", "glassmorphism", "blur", "gradients", "modern"]
mode: dark
difficulty: advanced
preview_url: /preview/?id=glassmorphism
---

# Glassmorphism

## Intent
Interface produit ou dashboard présenté à travers des cartes translucides qui laissent transparaître un fond coloré.

Catégorie : Tendances UI. Ton : translucide, aérien, moderne, lumineux.

## Style
- Cartes en rgba(255,255,255,0.08) avec backdrop-filter blur 20px
- Bordure claire 1px pour détacher le verre du fond
- Fond coloré obligatoire, sinon l'effet disparaît
- Superposition de deux niveaux de verre maximum

## Colors
- Mode: dark
- Primary: #6EA8FE
- Secondary: #B78AFF
- Background: #0E1030
- Surface: rgba(255,255,255,0.08)
- Text: #F4F6FF
- Text Muted: #AFB6D8
- Border: rgba(255,255,255,0.18)
- Background treatment: aurora

## Typography
- Heading font: Inter
- Body font: Inter
- Hero: 60px, weight 700, tracking -0.03em
- H2: 34px, weight 600, tracking -0.02em
- Body: 17px, line-height 1.65
- Case: none
- Détail: Texte toujours blanc cassé, jamais coloré sur le verre

## Layout
- Container: 1180px
- Hero: centered
- Section principale: bento
- Espacement entre sections: 112px entre sections
- Grille: cartes de verre superposées avec décalages

## Spacing & Shape
- Border radius: 20px
- Borders: 1px solid rgba(255,255,255,0.18)
- Shadows: 0 20px 50px -20px rgba(0,0,0,0.55)

## Animation
- Load: fade + scale 0.96 vers 1
- Hover: la carte s'éclaircit et le flou augmente
- Scroll: les taches de couleur du fond se déplacent

## Components
- Navbar en verre flottante
- Hero centré sur fond dégradé
- Bento de cartes de verre
- Panneau de statistiques translucide
- Témoignages en cartes de verre
- Pied de page translucide

## Sections Order
1. Navbar en verre flottante
2. Hero centré sur fond dégradé
3. Bento de cartes de verre
4. Panneau de statistiques translucide
5. Témoignages en cartes de verre
6. Pied de page translucide

## Do / Don't for AI
**Do:**
- Toujours placer une forme colorée derrière le verre
- Garder un contraste de texte supérieur à 4.5:1
- Limiter le nombre de couches translucides

**Don't:**
- Pas de verre sur fond uni gris
- Pas de texte de petite taille sur le verre
- Ne pas empiler plus de deux niveaux de flou

## Responsive
Mobile : blur réduit à 12px pour les performances, bento en une colonne.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
