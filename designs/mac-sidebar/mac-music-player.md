---
id: mac-music-player
name: Mac Music Player
category: mac-sidebar
tags: ["dark", "media", "macos", "music", "fontawesome"]
mode: dark
difficulty: intermediate
preview_url: /preview/?id=mac-music-player
---

# Mac Music Player

## Intent
Interface multimédia ou de streaming musical au look natif.

Catégorie : Mac Sidebar & Dashboards. Ton : musique, lecteur, macos, fontawesome, media.

## Style
- Boutons macOS (rouge, jaune, vert) intégrés à une barre supérieure ou latérale
- Pochettes d'albums carrées
- Contrôles de lecture FontAwesome (fa-play, fa-step-forward, fa-volume-up)
- Mode translucide prononcé (acrylic/blur)

## Colors
- Mode: dark
- Primary: #FF2D55
- Secondary: #5E5CE6
- Background: #1C1C1E
- Surface: #2C2C2E
- Text: #FFFFFF
- Text Muted: #EBEBF5
- Border: #38383A
- Background treatment: plain

## Typography
- Heading font: Inter
- Body font: Inter
- Hero: 32px, weight 700, tracking 0
- H2: 24px, weight 600, tracking 0
- Body: 14px, line-height 1.4
- Case: none
- Détail: Titres forts, texte secondaire en gris.

## Layout
- Container: 100%
- Hero: none
- Section principale: grid-4
- Espacement entre sections: 30px
- Grille: sidebar 220px + contenu principal

## Spacing & Shape
- Border radius: 12px
- Borders: 1px solid #38383A
- Shadows: 0 20px 40px rgba(0,0,0,0.6)

## Animation
- Load: pochettes d'albums apparaissent en fade
- Hover: bouton play FontAwesome apparaît sur l'album (fa-play-circle)
- Scroll: smooth scrolling

## Components
- Sidebar (Écouter, Explorer, Radio) avec points macOS
- Header avec barre de recherche au centre
- Grille d'albums (carrés arrondis)
- Lecteur fixe en haut avec contrôles FontAwesome et barre de progression

## Sections Order
1. Sidebar (Écouter, Explorer, Radio) avec points macOS
2. Header avec barre de recherche au centre
3. Grille d'albums (carrés arrondis)
4. Lecteur fixe en haut avec contrôles FontAwesome et barre de progression

## Do / Don't for AI
**Do:**
- Accent color (couleur primaire) sur le rouge/rose de type Apple Music
- Utiliser FontAwesome pour tous les contrôles multimédias
- Fort effet de glassmorphism sur la sidebar et le lecteur

**Don't:**
- Aucun emoji
- Pas de player vidéo (uniquement audio)
- Pas de bordures épaisses

## Responsive
Mobile : Player en plein écran ou petite barre en bas, masquer la sidebar.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
