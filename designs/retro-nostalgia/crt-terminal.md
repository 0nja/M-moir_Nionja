---
id: crt-terminal
name: CRT Terminal
category: retro-nostalgia
tags: ["dark", "mono", "terminal", "retro", "hacker"]
mode: dark
difficulty: intermediate
preview_url: /preview/?id=crt-terminal
---

# CRT Terminal

## Intent
Projet technique, ARG ou portfolio hacker. La page imite un moniteur cathodique allumé.

Catégorie : Rétro & Nostalgie. Ton : rétro-informatique, sombre, immersif, mono.

## Style
- Texte vert phosphore sur noir profond
- Lignes de balayage horizontales semi-transparentes
- Léger halo lumineux autour des caractères
- Curseur bloc clignotant

## Colors
- Mode: dark
- Primary: #33FF66
- Secondary: #0A2A12
- Background: #050A06
- Surface: #0A150C
- Text: #33FF66
- Text Muted: #1F9940
- Border: #155C2A
- Background treatment: scanlines

## Typography
- Heading font: VT323
- Body font: VT323
- Hero: 56px, weight 400, tracking 0.02em
- H2: 32px, weight 400, tracking 0
- Body: 20px, line-height 1.4
- Case: upper
- Détail: Text-shadow 0 0 6px du vert pour simuler le phosphore

## Layout
- Container: 900px
- Hero: terminal
- Section principale: list
- Espacement entre sections: 48px entre sections
- Grille: colonne unique de type console

## Spacing & Shape
- Border radius: 0px
- Borders: 1px solid #155C2A
- Shadows: 0 0 20px rgba(51,255,102,0.25)

## Animation
- Load: le texte s'écrit caractère par caractère
- Hover: inversion vidéo (fond vert, texte noir)
- Scroll: léger scintillement de l'écran

## Components
- Ligne d'invite avec chemin
- Sortie de commande en guise de hero
- Menu numéroté façon BBS
- Liste de fichiers / projets
- Barre d'état en bas d'écran

## Sections Order
1. Ligne d'invite avec chemin
2. Sortie de commande en guise de hero
3. Menu numéroté façon BBS
4. Liste de fichiers / projets
5. Barre d'état en bas d'écran

## Do / Don't for AI
**Do:**
- Simuler la frappe pour le texte principal
- Garder une seule teinte de vert plus ses variantes
- Ajouter les scanlines en overlay, pas dans le texte

**Don't:**
- Pas de couleur hors du vert (sauf alerte rouge rare)
- Pas de coins arrondis
- Ne pas rendre l'effet CRT au point de nuire à la lecture

## Responsive
Mobile : corps de texte à 16px, scanlines conservées, effet de courbure supprimé.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
