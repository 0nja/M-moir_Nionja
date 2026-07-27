/**
 * Génère le fichier design.md à partir d'un objet style (taxonomy/styles/*.json).
 * Utilisé côté navigateur (bouton "Copier design.md") ET côté Node (tools/build-md.mjs)
 * pour que le fichier copié et le fichier sur disque ne divergent jamais.
 */

const MODE_LABEL = { light: 'light', dark: 'dark', auto: 'auto' };

function list(items, bullet = '- ') {
  return (items || []).map((i) => bullet + i).join('\n');
}

/** "64px/700/-0.03em" -> "64px, weight 700, tracking -0.03em" */
function readType(spec) {
  if (!spec) return '';
  const [size, weight, tracking] = spec.split('/');
  return [
    size,
    weight ? `weight ${weight}` : null,
    tracking ? `tracking ${tracking}` : null,
  ]
    .filter(Boolean)
    .join(', ');
}

export function buildFrontmatter(s, category) {
  return [
    '---',
    `id: ${s.id}`,
    `name: ${s.name}`,
    `category: ${category.id}`,
    `tags: [${(s.tags || []).map((t) => `"${t}"`).join(', ')}]`,
    `mode: ${MODE_LABEL[s.mode] || 'light'}`,
    `difficulty: ${s.difficulty || 'intermediate'}`,
    `preview_url: /preview/?id=${s.id}`,
    '---',
  ].join('\n');
}

export function buildDesignMd(s, category) {
  const c = s.colors;
  const f = s.font;
  const sh = s.shape;
  const l = s.layout;
  const m = s.motion;

  return `${buildFrontmatter(s, category)}

# ${s.name}

## Intent
${s.intent}

Catégorie : ${category.name}. Ton : ${s.keywords}.

## Style
${list(s.style)}

## Colors
- Mode: ${MODE_LABEL[s.mode] || 'light'}
- Primary: ${c.primary}
- Secondary: ${c.secondary}
- Background: ${c.bg}
- Surface: ${c.surface}
- Text: ${c.text}
- Text Muted: ${c.muted}
- Border: ${c.border}
- Background treatment: ${s.bg}

## Typography
- Heading font: ${f.heading}
- Body font: ${f.body}
- Hero: ${readType(f.hero)}
- H2: ${readType(f.h2)}
- Body: ${f.body_size}
- Case: ${f.case}
- Détail: ${f.detail}

## Layout
- Container: ${l.container}
- Hero: ${l.hero}
- Section principale: ${l.features}
- Espacement entre sections: ${l.spacing}
- Grille: ${l.grid}

## Spacing & Shape
- Border radius: ${sh.radius}
- Borders: ${sh.border}
- Shadows: ${sh.shadow}

## Animation
- Load: ${m.load}
- Hover: ${m.hover}
- Scroll: ${m.scroll}

## Components
${list(s.components)}

## Sections Order
${(s.components || []).map((c2, i) => `${i + 1}. ${c2}`).join('\n')}

## Do / Don't for AI
**Do:**
${list(s.do)}

**Don't:**
${list(s.dont)}

## Responsive
${s.responsive}

---
_Généré par DesignHub AI — collez ce fichier dans ChatGPT / Claude / Gemini pour reproduire ce design._
`;
}
