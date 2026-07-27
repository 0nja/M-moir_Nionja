import { buildDesignMd } from './lib/designmd.js';
import { bgLayers, bgSize, px } from './lib/tokens.js';

/* ------------------------------- État ------------------------------- */

let categories = [];
let styles = [];          // tous les styles, enrichis de { category }
let filtered = [];
let current = null;

const state = { cat: 'all', mode: 'all', q: '' };

const $ = (id) => document.getElementById(id);
const el = {
    grid: $('grid'), chips: $('chips'), search: $('search'), mode: $('mode-filter'),
    resultLine: $('result-line'), home: $('view-home'), detail: $('detail'),
    title: $('d-title'), tagline: $('d-tagline'), md: $('d-md'), url: $('d-url'),
    frame: $('frame'), toast: $('toast'), download: $('btn-download'),
    statCount: $('stat-count'), statCats: $('stat-cats'),
};

/* ------------------------------ Chargement ------------------------------ */

async function init() {
    applyStoredTheme();

    categories = await fetch('taxonomy/categories.json').then((r) => r.json());

    const lists = await Promise.all(
        categories.map((c) =>
            fetch(`taxonomy/styles/${c.id}.json`)
                .then((r) => (r.ok ? r.json() : []))
                .catch(() => [])
        )
    );

    styles = lists.flatMap((list, i) =>
        list.map((s) => ({ ...s, category: categories[i] }))
    );

    el.statCount.textContent = styles.length;
    el.statCats.textContent = categories.length;

    renderChips();
    applyFilters();
    bindEvents();
    openFromHash();
}

/* ------------------------------- Filtres ------------------------------- */

function renderChips() {
    const make = (id, label, count, active) =>
        `<button class="chip" data-cat="${id}" aria-pressed="${active}">${label}<span class="count">${count}</span></button>`;

    el.chips.innerHTML =
        make('all', 'Tout', styles.length, true) +
        categories
            .map((c) => make(c.id, c.name, styles.filter((s) => s.category.id === c.id).length, false))
            .join('');

    el.chips.querySelectorAll('.chip').forEach((chip) => {
        chip.addEventListener('click', () => {
            state.cat = chip.dataset.cat;
            el.chips.querySelectorAll('.chip').forEach((c) =>
                c.setAttribute('aria-pressed', String(c === chip))
            );
            applyFilters();
        });
    });
}

function applyFilters() {
    const q = state.q.trim().toLowerCase();

    filtered = styles.filter((s) => {
        if (state.cat !== 'all' && s.category.id !== state.cat) return false;
        if (state.mode !== 'all' && s.mode !== state.mode) return false;
        if (!q) return true;
        const haystack = [
            s.name, s.tagline, s.keywords, s.category.name,
            s.font.heading, s.font.body, (s.tags || []).join(' '), (s.style || []).join(' '),
        ].join(' ').toLowerCase();
        return q.split(/\s+/).every((word) => haystack.includes(word));
    });

    el.resultLine.textContent =
        `${filtered.length} style${filtered.length > 1 ? 's' : ''} affiché${filtered.length > 1 ? 's' : ''}` +
        (state.q ? ` pour « ${state.q} »` : '');

    renderGrid();
}

/* ------------------------------- Galerie ------------------------------- */

function renderGrid() {
    if (!filtered.length) {
        el.grid.innerHTML = `<p class="empty">Aucun style ne correspond. Essayez « sombre », « serif », « bento »…</p>`;
        return;
    }

    el.grid.innerHTML = filtered.map(cardHtml).join('');
    el.grid.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => openDetail(card.dataset.id));
    });
}

function cardHtml(s) {
    return `
    <button class="card" data-id="${s.id}" type="button">
        ${thumbHtml(s)}
        <div class="card-body">
            <span class="card-cat">${s.category.name}</span>
            <span class="card-title">${s.name}</span>
            <span class="card-desc">${s.tagline}</span>
            <span class="card-meta">
                <span class="swatches">
                    ${['primary', 'secondary', 'bg', 'text'].map((k) => `<span class="swatch" style="background:${s.colors[k]}"></span>`).join('')}
                </span>
                ${s.mode === 'dark' ? 'Sombre' : 'Clair'}
                <span class="card-font">${s.font.heading}</span>
            </span>
        </div>
    </button>`;
}

/** Miniature construite uniquement à partir des tokens du style. */
function thumbHtml(s) {
    const c = s.colors;
    const r = Math.min(px(s.shape.radius, 10), 18);
    const surface = c.surface.startsWith('rgba') ? 'rgba(255,255,255,0.12)' : c.surface;
    const hero = s.layout.hero;
    const feat = s.layout.features;

    const heroClass = ['split', 'sidebar', 'terminal'].includes(hero) ? 'is-split'
        : ['centered', 'poster'].includes(hero) ? 'is-centered' : '';
    const blocksClass = feat === 'bento' ? 'is-bento' : (feat === 'list' || feat === 'table' || feat === 'steps') ? 'is-list' : '';

    const visual = ['split', 'fullbleed', 'sidebar', 'terminal', 'gallery'].includes(hero)
        ? `<span class="t-visual" style="background:${surface};border:1px solid ${c.border}"></span>` : '';

    const blocks = [0, 1, 2].map(() =>
        `<span class="t-block" style="background:${surface};border:1px solid ${c.border};border-radius:${r}px"></span>`
    ).join('');

    return `
    <div class="thumb" style="background-color:${c.bg};background-image:${bgLayers(s)};background-size:${bgSize(s, 0.55)}">
        <div class="t-bar">
            <span class="t-logo" style="background:${c.text}"></span>
            <span class="t-navlink" style="background:${c.text}"></span>
            <span class="t-navlink" style="background:${c.text}"></span>
            <span class="t-cta" style="background:${c.primary};border-radius:${Math.min(r, 8)}px"></span>
        </div>
        <div class="t-hero ${heroClass}">
            <span style="display:flex;flex-direction:column;gap:6px;flex:1;${heroClass === 'is-centered' ? 'align-items:center' : ''}">
                <span class="t-h1" style="background:${c.text}"></span>
                <span class="t-h1 small" style="background:${c.text};opacity:.75"></span>
                <span class="t-h2" style="background:${c.muted}"></span>
                <span class="t-btn" style="background:${c.primary};border-radius:${Math.min(r, 10)}px"></span>
            </span>
            ${visual}
        </div>
        <div class="t-blocks ${blocksClass}">${blocks}</div>
    </div>`;
}

/* ------------------------------- Détail ------------------------------- */

function openDetail(id) {
    const s = styles.find((x) => x.id === id);
    if (!s) return;
    current = s;

    el.title.textContent = s.name;
    el.tagline.textContent = s.tagline;

    const md = buildDesignMd(s, s.category);
    el.md.innerHTML = highlight(md);

    el.download.href = URL.createObjectURL(new Blob([md], { type: 'text/markdown' }));
    el.download.download = `${s.id}.design.md`;

    const src = s.demo ? `.${s.demo}/index.html` : `preview/index.html?id=${s.id}`;
    el.frame.src = src;
    el.url.textContent = `designhub.ai/${s.category.id}/${s.id}`;

    el.detail.hidden = false;
    el.home.style.display = 'none';
    document.body.style.overflow = 'hidden';
    history.replaceState(null, '', `#${s.id}`);
}

function closeDetail() {
    el.detail.hidden = true;
    el.home.style.display = '';
    document.body.style.overflow = '';
    el.frame.src = 'about:blank';
    current = null;
    history.replaceState(null, '', location.pathname);
}

function step(delta) {
    if (!current) return;
    const pool = filtered.length ? filtered : styles;
    const i = pool.findIndex((s) => s.id === current.id);
    const next = pool[(i + delta + pool.length) % pool.length];
    if (next) openDetail(next.id);
}

function openFromHash() {
    const id = location.hash.slice(1);
    if (id && styles.some((s) => s.id === id)) openDetail(id);
}

/** Coloration légère du markdown affiché dans le panneau. */
function highlight(md) {
    return md
        .replace(/[&<>]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch]))
        .replace(/^(#{1,3} .*)$/gm, '<span class="h">$1</span>')
        .replace(/^(- [A-Za-zÀ-ÿ0-9 ()/&'’.-]+:)/gm, '<span class="k">$1</span>');
}

/* ------------------------------- Actions ------------------------------- */

async function copyMd() {
    if (!current) return;
    const md = buildDesignMd(current, current.category);
    try {
        await navigator.clipboard.writeText(md);
    } catch {
        const ta = document.createElement('textarea');
        ta.value = md;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
    }
    showToast();
}

let toastTimer;
function showToast() {
    el.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('show'), 2600);
}

/* -------------------------------- Thème -------------------------------- */

function applyStoredTheme() {
    // Le thème clair est l'identité par défaut du hub ; le sombre reste un choix explicite.
    setTheme(localStorage.getItem('dh-theme') || 'light');
}

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('dh-theme', theme);
    $('theme-toggle').textContent = theme === 'dark' ? '☾' : '☀';
}

/* ------------------------------ Événements ------------------------------ */

function bindEvents() {
    el.search.addEventListener('input', (e) => { state.q = e.target.value; applyFilters(); });
    el.mode.addEventListener('change', (e) => { state.mode = e.target.value; applyFilters(); });

    $('btn-back').addEventListener('click', closeDetail);
    $('btn-copy').addEventListener('click', copyMd);
    $('btn-prev').addEventListener('click', () => step(-1));
    $('btn-next').addEventListener('click', () => step(1));
    $('theme-toggle').addEventListener('click', () =>
        setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')
    );

    document.addEventListener('keydown', (e) => {
        if (el.detail.hidden) {
            if (e.key === '/' && document.activeElement !== el.search) {
                e.preventDefault();
                el.search.focus();
            }
            return;
        }
        if (e.key === 'Escape') closeDetail();
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') step(1);
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') step(-1);
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'c' && !window.getSelection().toString()) copyMd();
    });
}

init();
