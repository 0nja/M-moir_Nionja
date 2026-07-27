---
id: dev-portfolio-terminal
name: Developer Portfolio Terminal
category: creative-portfolio
tags: ["dark", "mono", "terminal", "developer", "portfolio"]
mode: dark
difficulty: intermediate
preview_url: /preview/?id=dev-portfolio-terminal
---

# Developer Portfolio Terminal

## Intent
Développeur qui présente son parcours sous forme de commandes et de sorties console.

Catégorie : Créatif & Portfolio. Ton : technique, ludique, sobre, personnel.

## Style
- Fenêtre de terminal centrée avec barre de titre
- Commandes tapées automatiquement, sorties formatées
- Palette sombre avec accents ambre
- Le reste de la page suit la même esthétique mono

## Colors
- Mode: dark
- Primary: #F5A524
- Secondary: #1E1E24
- Background: #111116
- Surface: #1A1A20
- Text: #E6E6EA
- Text Muted: #8A8A94
- Border: #2A2A32
- Background treatment: plain

## Typography
- Heading font: JetBrains Mono
- Body font: JetBrains Mono
- Hero: 36px, weight 700, tracking 0
- H2: 22px, weight 600, tracking 0
- Body: 15px, line-height 1.7
- Case: none
- Détail: Invite de commande colorée : utilisateur en vert, chemin en bleu

## Layout
- Container: 900px
- Hero: terminal
- Section principale: list
- Espacement entre sections: 64px entre sections
- Grille: colonne unique

## Spacing & Shape
- Border radius: 10px
- Borders: 1px solid #2A2A32
- Shadows: 0 20px 50px -30px rgba(0,0,0,0.8)

## Animation
- Load: frappe automatique de la première commande
- Hover: surlignage de la ligne
- Scroll: nouvelles commandes qui s'exécutent

## Components
- Fenêtre de terminal avec boutons macOS
- Commande whoami en guise de présentation
- ls des projets
- cat du parcours
- Liens sociaux en sortie de commande
- Pied de page en ligne de statut

## Sections Order
1. Fenêtre de terminal avec boutons macOS
2. Commande whoami en guise de présentation
3. ls des projets
4. cat du parcours
5. Liens sociaux en sortie de commande
6. Pied de page en ligne de statut

## Do / Don't for AI
**Do:**
- Garder des sorties de commande réalistes
- Permettre de sauter l'animation de frappe
- Rendre le contenu accessible sans JavaScript

**Don't:**
- Pas d'attente longue avant d'afficher le contenu
- Pas de fausse commande incompréhensible
- Ne pas cacher le contact dans une commande obscure

## Responsive
Mobile : terminal en pleine largeur, taille de police 14px.

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
