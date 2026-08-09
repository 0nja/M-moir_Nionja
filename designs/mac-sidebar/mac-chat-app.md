---
id: mac-chat-app
name: Mac Chat App
category: mac-sidebar
tags: ["light", "chat", "macos", "social", "fontawesome"]
mode: light
difficulty: intermediate
preview_url: /preview/?id=mac-chat-app
---

# Mac Chat App

## Intent
Interface de discussion ou de support client au format application de bureau.

Catégorie : Mac Sidebar & Dashboards. Ton : chat, messages, macos, fontawesome, communication.

## Style
- Fenêtre divisée en 2 colonnes (liste des chats, conversation active)
- Points de contrôle macOS dans l'en-tête de la liste des chats
- Bulles de messages (bleues pour soi, grises pour l'autre)
- Zone de saisie avec icônes d'outils FontAwesome (fa-paperclip, fa-smile)

## Colors
- Mode: light
- Primary: #007AFF
- Secondary: #E5E5EA
- Background: #FFFFFF
- Surface: #F2F2F7
- Text: #000000
- Text Muted: #8E8E93
- Border: #D1D1D6
- Background treatment: plain

## Typography
- Heading font: Inter
- Body font: Inter
- Hero: 16px, weight 500, tracking 0
- H2: 16px, weight 500, tracking 0
- Body: 15px, line-height 1.4
- Case: none
- Détail: Lisibilité des messages primordiale.

## Layout
- Container: 100%
- Hero: none
- Section principale: none
- Espacement entre sections: 0
- Grille: sidebar 250px + chat 1fr

## Spacing & Shape
- Border radius: 10px
- Borders: 1px solid #D1D1D6
- Shadows: 0 10px 40px rgba(0,0,0,0.1)

## Animation
- Load: fade
- Hover: légère coloration de la liste de contact
- Scroll: scroll inversé ou aligné en bas pour les messages

## Components
- Sidebar de contacts avec barre de recherche et points macOS (rouge, jaune, vert)
- Zone de conversation avec header (nom du contact, détails)
- Bulles de messages (arrondies)
- Input en bas avec bouton d'envoi FontAwesome (fa-paper-plane)

## Sections Order
1. Sidebar de contacts avec barre de recherche et points macOS (rouge, jaune, vert)
2. Zone de conversation avec header (nom du contact, détails)
3. Bulles de messages (arrondies)
4. Input en bas avec bouton d'envoi FontAwesome (fa-paper-plane)

## Do / Don't for AI
**Do:**
- Placer les 3 points macOS en haut à gauche de la sidebar de contacts
- Utiliser FontAwesome pour les avatars ou statuts (fa-user-circle, fa-circle)
- Contraste net entre sidebar grise et chat blanc

**Don't:**
- Absolument aucun emoji
- Pas de texte marketing
- Pas de design brut, tout doit être arrondi (bulles de chat)

## Responsive
Mobile : vue liste, clic ouvre le chat en plein écran.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
