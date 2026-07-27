/**
 * Helpers partagés entre la galerie (miniatures) et le rendu d'aperçu.
 * Traduit les tokens d'un style (taxonomy/styles/*.json) en CSS réel.
 */

/** Traitement de fond -> couches CSS posées par-dessus la couleur de fond. */
export function bgLayers(s) {
    const p = s.colors.primary;
    const sec = s.colors.secondary;
    const line = hexA(s.colors.text, s.mode === 'dark' ? 0.07 : 0.05);

    switch (s.bg) {
        case 'soft-gradient':
            return `radial-gradient(120% 80% at 50% -20%, ${hexA(p, 0.12)}, transparent 60%)`;
        case 'radial-glow':
            return `radial-gradient(70% 50% at 50% -10%, ${hexA(p, 0.35)}, transparent 65%)`;
        case 'mesh':
            return [
                `radial-gradient(45% 45% at 12% 18%, ${hexA(p, 0.28)}, transparent 60%)`,
                `radial-gradient(50% 50% at 88% 10%, ${hexA(sec, 0.32)}, transparent 62%)`,
                `radial-gradient(45% 45% at 70% 88%, ${hexA(p, 0.18)}, transparent 60%)`,
            ].join(', ');
        case 'aurora':
            return [
                `radial-gradient(40% 38% at 18% 12%, ${hexA(p, 0.5)}, transparent 65%)`,
                `radial-gradient(42% 40% at 82% 22%, ${hexA(sec, 0.45)}, transparent 65%)`,
                `radial-gradient(50% 45% at 50% 95%, ${hexA(p, 0.3)}, transparent 70%)`,
            ].join(', ');
        case 'grid':
            return `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`;
        case 'dots':
            return `radial-gradient(${hexA(s.colors.text, 0.12)} 1.2px, transparent 1.2px)`;
        case 'stripes':
            return `repeating-linear-gradient(135deg, ${hexA(p, 0.08)} 0 2px, transparent 2px 12px)`;
        case 'scanlines':
            return `repeating-linear-gradient(to bottom, ${hexA(p, 0.09)} 0 1px, transparent 1px 3px)`;
        case 'noise':
        case 'paper':
            return `url("${noiseDataUri(s.bg === 'paper' ? 0.5 : 0.85)}")`;
        case 'starfield':
            return [
                `radial-gradient(1.4px 1.4px at 18% 24%, #fff, transparent)`,
                `radial-gradient(1.2px 1.2px at 64% 14%, #fff, transparent)`,
                `radial-gradient(1.6px 1.6px at 82% 62%, #fff, transparent)`,
                `radial-gradient(1px 1px at 34% 76%, #fff, transparent)`,
                `radial-gradient(1.2px 1.2px at 8% 62%, #fff, transparent)`,
                `radial-gradient(60% 50% at 50% 0%, ${hexA(p, 0.22)}, transparent 70%)`,
            ].join(', ');
        default:
            return 'none';
    }
}

/** Taille du motif de fond, alignée sur bgLayers. */
export function bgSize(s, scale = 1) {
    switch (s.bg) {
        case 'grid': return `${40 * scale}px ${40 * scale}px, ${40 * scale}px ${40 * scale}px`;
        case 'dots': return `${16 * scale}px ${16 * scale}px`;
        case 'noise':
        case 'paper': return '180px 180px';
        default: return 'auto';
    }
}

/** Pile de polices utilisable telle quelle dans font-family. */
export function fontStack(name, kind = 'sans') {
    const fallback = {
        sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        serif: "Georgia, 'Times New Roman', serif",
        mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
    };
    const n = (name || '').toLowerCase();
    let kindGuess = kind;
    if (/serif|garamond|playfair|lora|baskerville|bitter|marcellus|cinzel|newsreader|fraunces|abril|merriweather|instrument|cormorant|slab/.test(n)) kindGuess = 'serif';
    if (/mono|code|vt323|press start/.test(n)) kindGuess = 'mono';
    return `'${name}', ${fallback[kindGuess] || fallback.sans}`;
}

/** URL Google Fonts construite depuis le champ font.google ("Inter:wght@400;700|Lora:wght@400"). */
export function googleFontsHref(s) {
    const spec = (s.font && s.font.google) || '';
    if (!spec.trim()) return null;
    const families = spec.split('|').map((f) => `family=${f.trim()}`).join('&');
    return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

/** Premier nombre de pixels trouvé dans une valeur de rayon ("12px sur les cartes" -> 12). */
export function px(value, fallback = 12) {
    const m = String(value || '').match(/(\d+(?:\.\d+)?)px/);
    if (m) return parseFloat(m[1]);
    if (/999|full|pill/.test(String(value))) return 999;
    return fallback;
}

/** "64px/700/-0.03em" -> { size, weight, tracking } */
export function typeSpec(spec, fallbackSize = 32) {
    const [size, weight, tracking] = String(spec || '').split('/');
    return {
        size: px(size, fallbackSize),
        weight: parseInt(weight, 10) || 700,
        tracking: (tracking || '0').trim(),
    };
}

/** #RRGGBB + alpha -> rgba(). Renvoie la valeur telle quelle si ce n'est pas un hex. */
export function hexA(hex, alpha) {
    const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || '').trim());
    if (!m) return `rgba(128,128,128,${alpha})`;
    const int = parseInt(m[1], 16);
    return `rgba(${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}, ${alpha})`;
}

function noiseDataUri(opacity) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3"/><feColorMatrix type="saturate" values="0"/></filter><rect width="180" height="180" filter="url(#n)" opacity="${opacity * 0.12}"/></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
