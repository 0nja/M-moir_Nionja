---
id: scroll-storytelling
name: Scroll Storytelling
category: ui-trends
tags: ["light", "scroll", "narrative", "animated", "modern"]
mode: light
difficulty: advanced
preview_url: /preview/?id=scroll-storytelling
---

# Scroll Storytelling

## Intent
Raconter un produit ou une histoire étape par étape, le défilement pilotant l'animation.

Catégorie : Tendances UI. Ton : narratif, séquentiel, immersif, guidé.

## Style
- Colonne de texte qui défile face à un visuel fixe
- Le visuel change à chaque paragraphe atteint
- Indicateur de progression latéral
- Transitions au fondu, jamais brutales

## Colors
- Mode: light
- Primary: #0F766E
- Secondary: #CCFBF1
- Background: #FAFAF7
- Surface: #FFFFFF
- Text: #141817
- Text Muted: #5F6B68
- Border: #E2E5E3
- Background treatment: plain

## Typography
- Heading font: Fraunces
- Body font: Inter
- Hero: 58px, weight 700, tracking -0.02em
- H2: 34px, weight 600, tracking -0.01em
- Body: 18px, line-height 1.75
- Case: none
- Détail: Chaque étape numérotée en gros chiffre discret

## Layout
- Container: 1200px
- Hero: split
- Section principale: steps
- Espacement entre sections: sections de 100vh
- Grille: texte 5 colonnes / visuel collant 7 colonnes

## Spacing & Shape
- Border radius: 12px
- Borders: 1px solid #E2E5E3
- Shadows: 0 14px 34px -22px rgba(0,0,0,0.25)

## Animation
- Load: fade simple
- Hover: aucun effet marqué, le scroll porte l'attention
- Scroll: changement de visuel à chaque étape, transitions de 400ms

## Components
- Navbar qui se réduit au défilement
- Hero d'introduction
- Séquence d'étapes collantes
- Résumé récapitulatif
- CTA final
- Pied de page

## Sections Order
1. Navbar qui se réduit au défilement
2. Hero d'introduction
3. Séquence d'étapes collantes
4. Résumé récapitulatif
5. CTA final
6. Pied de page

## Do / Don't for AI
**Do:**
- Limiter à cinq étapes maximum
- Prévoir un fonctionnement correct sans JavaScript
- Respecter prefers-reduced-motion

**Don't:**
- Pas de détournement du défilement (scroll hijacking)
- Pas d'étape sans texte
- Ne pas rendre le contenu dépendant de l'animation

## Responsive
Mobile : le visuel passe au-dessus du texte, les étapes deviennent séquentielles simples.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
