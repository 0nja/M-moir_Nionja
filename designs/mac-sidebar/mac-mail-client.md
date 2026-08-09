---
id: mac-mail-client
name: Mac Mail Client
category: mac-sidebar
tags: ["light", "mail", "macos", "3-columns", "fontawesome"]
mode: light
difficulty: advanced
preview_url: /preview/?id=mac-mail-client
---

# Mac Mail Client

## Intent
Webmail ou messagerie interne avec la structure classique de macOS.

Catégorie : Mac Sidebar & Dashboards. Ton : mail, macos, colonnes, communication.

## Style
- Mise en page en trois colonnes : sidebar (dossiers), liste de messages, vue détaillée
- Contrôles de fenêtre (rouge, jaune, vert) dans la première colonne
- Barre d'outils supérieure avec icônes FontAwesome
- Fond de sidebar translucide

## Colors
- Mode: light
- Primary: #007AFF
- Secondary: #5856D6
- Background: #FFFFFF
- Surface: #F2F2F7
- Text: #000000
- Text Muted: #8E8E93
- Border: #C6C6C8
- Background treatment: plain

## Typography
- Heading font: Inter
- Body font: Inter
- Hero: 20px, weight 600, tracking 0
- H2: 16px, weight 600, tracking 0
- Body: 14px, line-height 1.4
- Case: none
- Détail: Texte court, optimisé pour la lecture rapide.

## Layout
- Container: 100%
- Hero: none
- Section principale: none
- Espacement entre sections: 0
- Grille: 3 colonnes : 200px / 300px / 1fr

## Spacing & Shape
- Border radius: 10px
- Borders: 1px solid #C6C6C8
- Shadows: 0 10px 40px rgba(0,0,0,0.15)

## Animation
- Load: apparition instantanée
- Hover: lignes de la liste des messages s'assombrissent légèrement
- Scroll: scroll indépendant par colonne

## Components
- Sidebar (dossiers) avec points macOS
- Liste des emails (colonne 2)
- Vue email (colonne 3) avec toolbar FontAwesome (fa-reply, fa-trash)
- Bouton Nouveau Message

## Sections Order
1. Sidebar (dossiers) avec points macOS
2. Liste des emails (colonne 2)
3. Vue email (colonne 3) avec toolbar FontAwesome (fa-reply, fa-trash)
4. Bouton Nouveau Message

## Do / Don't for AI
**Do:**
- Séparer visuellement les colonnes par des bordures de 1px
- Utiliser FontAwesome pour chaque dossier (fa-inbox, fa-paper-plane)
- Garder les 3 points macOS en haut à gauche de la première colonne

**Don't:**
- Aucun emoji
- Pas de scroll global de la page
- Pas d'images d'arrière-plan

## Responsive
Mobile : afficher une seule colonne à la fois avec bouton retour.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
