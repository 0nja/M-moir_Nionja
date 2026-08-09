---
id: mac-dashboard-dark
name: Mac Dashboard Dark
category: mac-sidebar
tags: ["dark", "sidebar", "macos", "dashboard", "fontawesome"]
mode: dark
difficulty: intermediate
preview_url: /preview/?id=mac-dashboard-dark
---

# Mac Dashboard Dark

## Intent
Créer une interface d'administration avec une esthétique d'application native macOS en mode sombre.

Catégorie : Mac Sidebar & Dashboards. Ton : macOS, dashboard, sombre, natif, fontawesome.

## Style
- Barre latérale avec les 3 points de contrôle (rouge, jaune, vert) en haut à gauche
- Utilisation exclusive d'icônes FontAwesome
- Fond de l'application gris foncé, fond de la barre latérale très foncé avec flou (acrylic)
- Bordures arrondies comme une fenêtre native

## Colors
- Mode: dark
- Primary: #0A84FF
- Secondary: #30D158
- Background: #1E1E1E
- Surface: #2C2C2E
- Text: #FFFFFF
- Text Muted: #EBEBF5
- Border: #38383A
- Background treatment: plain

## Typography
- Heading font: Inter
- Body font: Inter
- Hero: 24px, weight 600, tracking 0
- H2: 18px, weight 600, tracking 0
- Body: 14px, line-height 1.5
- Case: none
- Détail: Inter pour simuler San Francisco.

## Layout
- Container: 100%
- Hero: none
- Section principale: grid-4
- Espacement entre sections: 20px entre sections
- Grille: sidebar 250px + contenu fluide

## Spacing & Shape
- Border radius: 10px
- Borders: 1px solid #38383A
- Shadows: 0 20px 40px rgba(0,0,0,0.5)

## Animation
- Load: fade-in 300ms
- Hover: fond de l'élément de menu devient rgba(255,255,255,0.1)
- Scroll: barre de défilement style macOS

## Components
- Sidebar avec contrôles macOS (rouge: #FF5F56, jaune: #FFBD2E, vert: #27C93F)
- Menu de navigation avec FontAwesome (fa-home, fa-chart-bar, fa-cog)
- Zone de contenu principal avec header
- Cartes de statistiques en grille 4 colonnes
- Tableau de données avec icônes FontAwesome

## Sections Order
1. Sidebar avec contrôles macOS (rouge: #FF5F56, jaune: #FFBD2E, vert: #27C93F)
2. Menu de navigation avec FontAwesome (fa-home, fa-chart-bar, fa-cog)
3. Zone de contenu principal avec header
4. Cartes de statistiques en grille 4 colonnes
5. Tableau de données avec icônes FontAwesome

## Do / Don't for AI
**Do:**
- Garder les 3 points de contrôle alignés horizontalement
- Utiliser FontAwesome pour toutes les icônes
- Appliquer un léger flou (backdrop-filter) sur la sidebar

**Don't:**
- Aucun emoji n'est autorisé
- Pas de marges excessives (garder une densité d'app native)
- Pas de couleurs primaires agressives hors du bleu macOS

## Responsive
Mobile : masquer la sidebar derrière un menu burger (fa-bars).

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
