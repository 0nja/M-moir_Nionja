---
id: sidebar-music-player
name: Music Player Sidebar
category: mac-sidebar
tags: ["dark", "sidebar", "music", "media", "fontawesome"]
mode: dark
difficulty: intermediate
preview_url: /preview/?id=sidebar-music-player
---

# Music Player Sidebar

## Intent
Interface de streaming musical avec sidebar de navigation, grille d'albums et lecteur fixe.

Catégorie : Mac Sidebar & Dashboards. Ton : music, player, sidebar, dark, fontawesome.

## Style
- Sidebar sombre avec points macOS et bibliothèque musicale
- Grille d'albums avec pochettes colorées
- Lecteur fixe en haut avec contrôles FontAwesome
- Effets de glassmorphism sur la sidebar

## Colors
- Mode: dark
- Primary: #FF2D55
- Secondary: #5E5CE6
- Background: #1C1C1E
- Surface: #2C2C2E
- Text: #FFFFFF
- Text Muted: #8E8E93
- Border: #38383A
- Background treatment: plain

## Typography
- Heading font: Inter
- Body font: Inter
- Hero: 28px, weight 700, tracking 0
- H2: 20px, weight 600, tracking 0
- Body: 14px, line-height 1.4
- Case: none
- Détail: Typographie forte pour les titres.

## Layout
- Container: 100%
- Hero: none
- Section principale: grid-4
- Espacement entre sections: 24px
- Grille: sidebar 220px + contenu principal

## Spacing & Shape
- Border radius: 12px
- Borders: 1px solid #38383A
- Shadows: 0 8px 24px rgba(0,0,0,0.5)

## Animation
- Load: fade pochettes d'albums
- Hover: bouton play visible (fa-play-circle)
- Scroll: smooth

## Components
- Sidebar avec points macOS et navigation (fa-music, fa-microphone, fa-radio)
- Lecteur fixe en haut (fa-play, fa-forward, fa-volume-high)
- Grille d'albums en carrés arrondis
- Barre de progression audio

## Sections Order
1. Sidebar avec points macOS et navigation (fa-music, fa-microphone, fa-radio)
2. Lecteur fixe en haut (fa-play, fa-forward, fa-volume-high)
3. Grille d'albums en carrés arrondis
4. Barre de progression audio

## Do / Don't for AI
**Do:**
- Points macOS en haut à gauche de la sidebar
- Lecteur compact visible en permanence
- FontAwesome pour tous les contrôles

**Don't:**
- Aucun emoji
- Pas de fond clair
- Pas de vidéo

## Responsive
Mobile : lecteur en bottom sheet.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
