#!/usr/bin/env node
/**
 * Génère, à partir de taxonomy/styles/*.json :
 *   - designs/<categorie>/<id>.md   les 100 fichiers design.md
 *   - designs/manifest.json         l'index machine
 *   - taxonomy/STYLES.md            le catalogue lisible des 100 thèmes
 *
 * Usage : node tools/build.mjs
 */

import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDesignMd } from '../lib/designmd.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = async (p) => JSON.parse(await readFile(join(ROOT, p), 'utf8'));

const categories = await read('taxonomy/categories.json');
const manifest = [];
const catalogue = [];
let count = 0;

// Ancienne arborescence remplacée par les identifiants normalisés
for (const stale of ['designs/tendances-ui', 'designs/saas-tech/modern-saas-01.md',
    'designs/minimal-editorial/brutalist-01.md']) {
    if (existsSync(join(ROOT, stale))) await rm(join(ROOT, stale), { recursive: true, force: true });
}

for (const category of categories) {
    const styles = await read(`taxonomy/styles/${category.id}.json`);
    const dir = join(ROOT, 'designs', category.id);
    await mkdir(dir, { recursive: true });

    catalogue.push(`\n## ${category.name}\n\n_${category.description}_\n`);
    catalogue.push('| # | Style | Ambiance | Titre / Corps | Palette | Layout |');
    catalogue.push('| - | ----- | -------- | ------------- | ------- | ------ |');

    for (const style of styles) {
        const md = buildDesignMd(style, category);
        const rel = `designs/${category.id}/${style.id}.md`;
        await writeFile(join(ROOT, rel), md, 'utf8');

        manifest.push({
            id: style.id,
            name: style.name,
            category: category.id,
            mode: style.mode,
            tags: style.tags,
            path: rel,
            preview: style.demo ? `.${style.demo}/index.html` : `preview/index.html?id=${style.id}`,
        });

        count += 1;
        catalogue.push([
            '',
            count,
            `**${style.name}**`,
            style.keywords,
            `${style.font.heading} / ${style.font.body}`,
            `${style.colors.primary} · ${style.colors.bg}`,
            `${style.layout.hero} + ${style.layout.features}`,
            '',
        ].join(' | ').trim());
    }
}

await writeFile(join(ROOT, 'designs/manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

// Vocabulaire réellement utilisé, reconstruit depuis les styles
const vocab = { modes: {}, tags: {}, heroLayouts: {}, sectionLayouts: {}, backgrounds: {}, fonts: {} };
const bump = (bag, key) => { bag[key] = (bag[key] || 0) + 1; };

for (const category of categories) {
    for (const s of await read(`taxonomy/styles/${category.id}.json`)) {
        bump(vocab.modes, s.mode);
        bump(vocab.heroLayouts, s.layout.hero);
        bump(vocab.sectionLayouts, s.layout.features);
        bump(vocab.backgrounds, s.bg);
        bump(vocab.fonts, s.font.heading);
        for (const t of s.tags) bump(vocab.tags, t);
    }
}

const sorted = (bag) => Object.fromEntries(Object.entries(bag).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
await writeFile(
    join(ROOT, 'taxonomy/tags.json'),
    JSON.stringify(Object.fromEntries(Object.entries(vocab).map(([k, v]) => [k, sorted(v)])), null, 2),
    'utf8'
);

const header = `# Catalogue des ${count} styles

Base de connaissances de DesignHub AI : ${count} styles répartis en ${categories.length} catégories.
Chaque style dispose d'un \`design.md\` complet dans \`designs/<categorie>/<id>.md\`.

> Fichier généré par \`node tools/build.mjs\` — ne pas modifier à la main.
`;

await writeFile(join(ROOT, 'taxonomy/STYLES.md'), header + catalogue.join('\n') + '\n', 'utf8');

console.log(`✓ ${count} design.md générés dans designs/`);
console.log(`✓ designs/manifest.json (${manifest.length} entrées)`);
console.log(`✓ taxonomy/STYLES.md`);
