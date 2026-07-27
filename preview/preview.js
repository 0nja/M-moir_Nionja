import { bgLayers, bgSize, fontStack, googleFontsHref, px, typeSpec, hexA } from '../lib/tokens.js';

/* Le rendu complet d'un front-end à partir des seuls tokens du style. */

const id = new URLSearchParams(location.search).get('id');

boot().catch((err) => {
    document.body.innerHTML = `<pre style="padding:40px;font:14px monospace">Aperçu indisponible : ${err.message}</pre>`;
});

async function boot() {
    const categories = await fetch('../taxonomy/categories.json').then((r) => r.json());
    const lists = await Promise.all(
        categories.map((c) =>
            fetch(`../taxonomy/styles/${c.id}.json`).then((r) => (r.ok ? r.json() : []))
        )
    );

    let style = null;
    let category = null;
    lists.forEach((list, i) => {
        const found = list.find((s) => s.id === id);
        if (found) { style = found; category = categories[i]; }
    });

    if (!style) throw new Error(`style « ${id} » introuvable`);

    document.title = `${style.name} — aperçu`;
    injectFonts(style);
    applyTokens(style);
    document.body.insertAdjacentHTML('afterbegin', render(style, category));
    setupReveal(style);
}

/* ----------------------------- Tokens -> CSS ----------------------------- */

function injectFonts(s) {
    const href = googleFontsHref(s);
    if (!href) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
}

function applyTokens(s) {
    const c = s.colors;
    const hero = typeSpec(s.font.hero, 56);
    const h2 = typeSpec(s.font.h2, 32);
    const radius = px(s.shape.radius, 12);
    const gap = px(s.layout.spacing, 96);
    const container = px(s.layout.container, 1200);

    const surface = c.surface.startsWith('rgba')
        ? c.surface
        : c.surface;

    const shadow = /aucune|none/i.test(s.shape.shadow) ? 'none' : firstShadow(s.shape.shadow);
    const border = /aucune|none|transparent/i.test(s.shape.border)
        ? '1px solid transparent'
        : normalizeBorder(s.shape.border, c.border);

    const root = document.documentElement.style;
    const set = (k, v) => root.setProperty(k, v);

    set('--p', c.primary);
    set('--sec', c.secondary);
    set('--bg', c.bg);
    set('--surface', surface);
    set('--text', c.text);
    set('--muted', c.muted);
    set('--border-color', c.border);
    set('--on-primary', readableOn(c.primary));

    set('--fh', fontStack(s.font.heading));
    set('--fb', fontStack(s.font.body));
    set('--fm', fontStack('JetBrains Mono', 'mono'));

    set('--hero-size', `clamp(30px, ${(hero.size / 14).toFixed(1)}vw, ${hero.size}px)`);
    set('--hero-weight', hero.weight);
    set('--hero-tracking', hero.tracking);
    set('--h2-size', `clamp(24px, ${(h2.size / 16).toFixed(1)}vw, ${h2.size}px)`);
    set('--h2-weight', h2.weight);
    set('--body-size', `${px(s.font.body_size, 16)}px`);
    set('--case', s.font.case === 'upper' ? 'uppercase' : 'none');

    set('--radius', `${Math.min(radius, 40)}px`);
    set('--radius-btn', radius >= 999 ? '999px' : `${Math.min(radius, 16)}px`);
    set('--shadow-css', shadow);
    set('--border-css', border);
    set('--container', `${container}px`);
    set('--gap', `${Math.min(gap, 140)}px`);

    set('--bg-layers', bgLayers(s));
    set('--bg-size', bgSize(s));
    set('--hero-media', `linear-gradient(135deg, ${hexA(c.primary, 0.55)}, ${hexA(c.secondary, 0.65)})`);
}

function firstShadow(str) {
    const m = String(str).match(/(-?[\d.]+px[^,;]*?rgba?\([^)]*\)|-?[\d.]+px[^,;]*?#[0-9a-f]{3,8})/i);
    return m ? m[0].trim() : '0 10px 30px -20px rgba(0,0,0,.35)';
}

function normalizeBorder(str, color) {
    const width = (String(str).match(/(\d+)px/) || [, '1'])[1];
    const styleName = /dashed/.test(str) ? 'dashed' : /double/.test(str) ? 'double' : 'solid';
    const hex = (String(str).match(/#[0-9a-f]{6}/i) || [])[0]
        || (String(str).match(/rgba?\([^)]*\)/) || [])[0]
        || color;
    return `${Math.min(+width, 4)}px ${styleName} ${hex}`;
}

function readableOn(hex) {
    const m = /^#?([0-9a-f]{6})$/i.exec(String(hex).trim());
    if (!m) return '#fff';
    const n = parseInt(m[1], 16);
    const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
        const x = v / 255;
        return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    });
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return lum > 0.45 ? '#111111' : '#FFFFFF';
}

/* -------------------------------- Rendu -------------------------------- */

function render(s, cat) {
    const brand = brandName(s);
    const words = s.keywords.split(',').map((w) => w.trim());
    const has = (re) => s.components.some((c) => re.test(c.toLowerCase()));

    const showPricing = has(/pricing|tarif|formule|abonnement|prix|plan|billetterie|don/);
    const showStats = has(/chiffre|statistique|métrique|kpi|score|impact|benchmark/) || s.layout.features === 'bento';
    const showMarquee = s.layout.features === 'marquee' || has(/marquee|défilant/);
    const featureVariant = ['marquee', 'split-alt'].includes(s.layout.features) ? 'grid-3' : s.layout.features;

    return `
${navBar(s, brand)}
${heroSection(s, brand, words)}
${showMarquee ? marquee(words) : logosBand(s)}

<section class="section reveal">
    <div class="wrap">
        <span class="eyebrow">${cat.name}</span>
        <h2 class="h2">${escapeHtml(s.tagline)}</h2>
        <p class="lead">${escapeHtml(s.intent)}</p>
    </div>
</section>

<section class="section reveal">
    <div class="wrap">
        <div class="cards" data-variant="${featureVariant}">
            ${(s.style || []).map((rule, i) => featureCard(s, rule, i, words)).join('')}
        </div>
    </div>
</section>

${s.layout.features === 'split-alt' || s.layout.hero === 'editorial' ? altSection(s) : ''}
${showStats ? statsSection(s) : ''}
${showPricing ? pricingSection(s) : gallerySection(s)}

<section class="section reveal">
    <div class="wrap">
        <blockquote class="quote">
            <p>« ${escapeHtml(capitalize(words[0] || 'Cohérent'))} avant tout : ${escapeHtml(lower(s.tagline))} »</p>
            <footer>Direction artistique — ${escapeHtml(brand)}</footer>
        </blockquote>
    </div>
</section>

<section class="section reveal">
    <div class="wrap">
        <div class="cta-band">
            <h2>${escapeHtml(s.name)}</h2>
            <p class="lead" style="margin:0 auto 26px">${escapeHtml(s.responsive)}</p>
            <a class="btn" href="#">Commencer</a>
        </div>
    </div>
</section>

${footer(s, brand, cat)}`;
}

function navBar(s, brand) {
    const [first, ...rest] = brand.split(' ');
    return `
<header class="nav">
    <div class="wrap nav-in">
        <div class="logo">${escapeHtml(first)}<span>${escapeHtml(rest.join(' ') || '.')}</span></div>
        <nav class="nav-links">
            <a href="#">Accueil</a><a href="#">Approche</a><a href="#">Références</a><a href="#">Contact</a>
        </nav>
        <a class="btn btn-sm" href="#">${s.mode === 'dark' ? 'Accéder' : 'Démarrer'}</a>
    </div>
</header>`;
}

function heroSection(s, brand, words) {
    const variant = s.layout.hero;
    const title = heroTitle(s, words);
    const lead = `<p class="lead">${escapeHtml(s.intent)}</p>`;
    const ctas = `
        <div class="cta-row">
            <a class="btn" href="#">${s.mode === 'dark' ? 'Explorer' : 'Essayer maintenant'}</a>
            <a class="btn btn-ghost" href="#">Voir la démarche</a>
        </div>`;

    const visual = variant === 'terminal' ? terminalBlock(s) : mockBlock();

    if (variant === 'split' || variant === 'sidebar' || variant === 'terminal') {
        return `
<section class="hero" data-variant="${variant}">
    <div class="wrap hero-in">
        <div class="reveal">${title}${lead}${ctas}</div>
        <div class="reveal">${visual}</div>
    </div>
</section>`;
    }

    if (variant === 'editorial') {
        return `
<section class="hero" data-variant="editorial">
    <div class="wrap hero-in">
        <div class="reveal">${title}</div>
        <div class="reveal">${lead}${ctas}</div>
    </div>
</section>`;
    }

    if (variant === 'fullbleed') {
        // Le fond du hero ne porte pas .reveal : il doit rester visible même sans animation.
        return `
<section class="hero" data-variant="fullbleed">
    <div class="hero-in">
        <div class="wrap reveal" style="padding:0">${title}${lead}${ctas}</div>
    </div>
</section>`;
    }

    return `
<section class="hero" data-variant="${variant}">
    <div class="wrap hero-in reveal">${title}${lead}${ctas}</div>
</section>`;
}

function heroTitle(s, words) {
    // On n'ajoute le mot d'accent que s'il n'est pas déjà dans le nom du style.
    const name = s.name.toLowerCase();
    const key = words.find((w) => w && !name.includes(w.toLowerCase().slice(0, 5)));
    return key
        ? `<h1>${escapeHtml(s.name)} <span class="accent">${escapeHtml(capitalize(key))}</span></h1>`
        : `<h1>${escapeHtml(s.name)}</h1>`;
}

function mockBlock() {
    return `
<div class="mock">
    <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span></div>
    <div class="mock-body">
        <span class="mock-line w40"></span>
        <span class="mock-line tall"></span>
        <div class="mock-grid"><span></span><span></span><span></span></div>
        <span class="mock-line w60"></span>
        <span class="mock-line w40"></span>
    </div>
</div>`;
}

function terminalBlock(s) {
    return `
<div class="term">
<div><span class="prompt">$</span> npx create-${s.id}@latest</div>
<div class="cmt"># installation des dépendances…</div>
<div><span class="prompt">✓</span> tokens de style appliqués</div>
<div><span class="prompt">✓</span> ${escapeHtml(s.font.heading)} chargée</div>
<div><span class="prompt">$</span> <span style="opacity:.6">_</span></div>
</div>`;
}

function logosBand(s) {
    const names = ['Nordio', 'Kestrel', 'Vantia', 'Halcyon', 'Meridio'];
    return `
<div class="wrap reveal">
    <div class="logos">${names.map((n) => `<span>${n}</span>`).join('')}</div>
</div>`;
}

function marquee(words) {
    const items = [...words, ...words, ...words].map((w) => `<span>${escapeHtml(w.toUpperCase())}</span>`).join(' • ');
    return `<div class="marquee reveal"><div class="marquee-track">${items} ${items}</div></div>`;
}

function featureCard(s, rule, i, words) {
    const variant = s.layout.features;
    const label = capitalize(words[i % words.length] || 'Détail');

    if (variant === 'gallery') {
        return `
<article class="card">
    <div class="card-media"></div>
    <div class="card-txt"><h3>${escapeHtml(label)}</h3><p>${escapeHtml(rule)}</p></div>
</article>`;
    }

    const head = variant === 'steps'
        ? `<span class="card-num">0${i + 1}</span>`
        : `<span class="card-ico">${i + 1}</span>`;

    return `
<article class="card">
    ${variant === 'list' || variant === 'table' ? '' : head}
    <h3>${escapeHtml(label)}</h3>
    <p>${escapeHtml(rule)}</p>
</article>`;
}

function altSection(s) {
    return `
<section class="section reveal">
    <div class="wrap">
        ${(s.components || []).slice(1, 3).map((comp) => `
        <div class="alt">
            <div class="alt-txt">
                <span class="eyebrow">Composant</span>
                <h2 class="h2">${escapeHtml(comp.split('(')[0])}</h2>
                <p class="lead">${escapeHtml(s.motion.hover)}. ${escapeHtml(s.motion.scroll)}.</p>
            </div>
            <div class="alt-media"></div>
        </div>`).join('')}
    </div>
</section>`;
}

function statsSection(s) {
    const stats = [
        ['100', 'styles décrits'],
        [px(s.layout.spacing, 96) + 'px', 'entre les sections'],
        [px(s.shape.radius, 12) + 'px', 'de rayon'],
        [s.font.heading.split(' ')[0], 'police de titre'],
    ];
    return `
<section class="section reveal">
    <div class="wrap">
        <div class="stats">
            ${stats.map(([v, l]) => `<div><div class="stat-v">${escapeHtml(String(v))}</div><div class="stat-l">${escapeHtml(l)}</div></div>`).join('')}
        </div>
    </div>
</section>`;
}

function pricingSection(s) {
    const plans = [
        ['Découverte', '0', ['1 projet', 'Export design.md', 'Communauté']],
        ['Studio', '24', ['Projets illimités', 'Variantes de palette', 'Support prioritaire']],
        ['Équipe', '89', ['Espace partagé', 'Design system', 'Accompagnement']],
    ];
    return `
<section class="section reveal">
    <div class="wrap">
        <span class="eyebrow">Formules</span>
        <h2 class="h2">Trois niveaux, une seule esthétique</h2>
        <div class="pricing" style="margin-top:32px">
            ${plans.map(([name, price, feats], i) => `
            <div class="plan ${i === 1 ? 'featured' : ''}">
                <div class="plan-name">${name}</div>
                <div class="plan-price">${price}€</div>
                <ul>${feats.map((f) => `<li>${f}</li>`).join('')}</ul>
                <a class="btn ${i === 1 ? '' : 'btn-ghost'}" href="#">Choisir</a>
            </div>`).join('')}
        </div>
    </div>
</section>`;
}

function gallerySection(s) {
    return `
<section class="section reveal">
    <div class="wrap">
        <span class="eyebrow">Sélection</span>
        <h2 class="h2">Composants de la page</h2>
        <div class="cards" data-variant="gallery" style="margin-top:32px">
            ${(s.components || []).slice(0, 6).map((comp, i) => `
            <article class="card">
                <div class="card-media"></div>
                <div class="card-txt">
                    <h3>0${i + 1}</h3>
                    <p>${escapeHtml(comp)}</p>
                </div>
            </article>`).join('')}
        </div>
    </div>
</section>`;
}

function footer(s, brand, cat) {
    const cols = [
        ['Design', [s.font.heading, s.font.body, `Rayon ${s.shape.radius.split(',')[0]}`]],
        ['Mouvement', [s.motion.load, s.motion.hover]],
        ['Catégorie', [cat.name, s.difficulty, s.mode === 'dark' ? 'Mode sombre' : 'Mode clair']],
    ];
    return `
<footer class="footer">
    <div class="wrap">
        <div class="footer-in">
            <div class="footer-col" style="max-width:280px">
                <div class="logo" style="margin-bottom:10px">${escapeHtml(brand)}</div>
                <p style="font-size:.9em">${escapeHtml(s.tagline)}</p>
            </div>
            ${cols.map(([title, items]) => `
            <div class="footer-col">
                <h4>${title}</h4>
                ${items.map((it) => `<a href="#">${escapeHtml(String(it))}</a>`).join('')}
            </div>`).join('')}
        </div>
        <div class="footer-bottom">© ${escapeHtml(brand)} — aperçu généré depuis ${escapeHtml(s.id)}.design.md</div>
    </div>
</footer>`;
}

/* -------------------------------- Utilitaires -------------------------------- */

function brandName(s) {
    const parts = s.name.split(/[\s&]+/).filter(Boolean);
    return parts.slice(0, 2).join(' ');
}

function setupReveal() {
    const nodes = [...document.querySelectorAll('.reveal')];

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        nodes.forEach((n) => n.classList.add('in'));
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
    }, { threshold: 0.08 });

    // Ce qui est déjà visible au chargement s'affiche sans attendre l'observateur.
    nodes.forEach((n) => {
        if (n.getBoundingClientRect().top < innerHeight * 0.92) n.classList.add('in');
        else io.observe(n);
    });
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

const capitalize = (w) => (w ? w[0].toUpperCase() + w.slice(1) : '');
const lower = (w) => (w ? w[0].toLowerCase() + w.slice(1) : '');
