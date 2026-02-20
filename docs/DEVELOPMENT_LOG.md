# Kohrus Landing — Development Log

Landing page for **Kohrus** (“The Stock Market for Music”). Standalone repo; deploys to GitHub Pages.

---

## Setup and scope

- **Repo:** `kohrus-landing` — only the Kohrus marketing landing (no game or other apps).
- **Stack:** React 19, TypeScript, Vite, Framer Motion, Lucide React.
- **Deploy:** GitHub Actions → build `dist` → push to `gh-pages`. Live at **https://swamisaur.github.io/kohrus-landing/**.
- **Base path:** `/kohrus-landing/` in production (Vite `base`).

---

## Sections

| Section         | Role                                      |
|-----------------|-------------------------------------------|
| Navigation      | Fixed nav, logo, links, CTAs, mobile menu |
| Hero            | Value prop, primary CTA, trust row, live deal card |
| Social Proof    | Trust metrics (investors, artists, deployed) |
| How It Works    | 3 steps: Browse, Invest, Earn & Trade      |
| Featured Assets | Live deals grid (4 cards)                 |
| CTA             | Final pitch + Create account              |
| Footer          | Brand, platform/artists/legal links, social |

---

## Changelog

### 2026-02 — Micro-animations, pitch, mobile, images

- **Micro-animations:** Shared `utils/motion.ts` (ease, stagger, transition). Staggered entrances, hover lifts, card/image scale, progress fill, nav link motion, CTA and footer button feedback. Subtle only.
- **Pitch:** Stronger copy across Hero (“Own a piece of the songs that move the world”), How It Works (“Join India’s first music exchange…”), Featured (“Invest in music that’s trending now”), CTA (“Your favourite songs could be paying you”), Footer tagline.
- **Mobile:** Nav hamburger + slide-out drawer on small screens. Touch targets ≥44–48px for buttons and footer links. Breakpoints at 768px and 380px; container padding and section spacing tuned for small viewports.
- **Images:** Hero and Featured use **Pexels** URLs with fallbacks; How It Works steps use Pexels + fallback. All images: `loading="lazy"` (except hero), `decoding="async"`, descriptive `alt`, `onError` fallback. No Unsplash; consistent Pexels CDN.
- **Misc:** 404.html redirects to full GitHub Pages URL. Scoped CSS for Hero vs Featured card styles to avoid clashes.

### Earlier

- **Project creation:** Extracted from main Kohrus/Epic Emoji repo. Vite base `/kohrus-landing/`, deploy workflow with `contents: write`, concurrency, `allow_empty_commit`.
- **Hero:** Conversion-focused copy, single primary CTA, trust row, live deal card (image + metrics + progress + CTA).
- **How It Works:** 3 steps with Pexels images, number+icon badges, gradient overlays.

---

## File reference

| Path | Purpose |
|------|---------|
| `App.tsx` | Root; renders all sections in order |
| `components/*.tsx` / `*.css` | Section UI and styles |
| `utils/motion.ts` | Shared Framer Motion config |
| `public/404.html` | GitHub Pages 404 → redirect to site root |
| `public/hero-card.svg` | Legacy hero image (optional; hero uses Pexels) |
| `.github/workflows/deploy.yml` | Build + deploy to `gh-pages` |

Future changes: add a short dated entry above under **Changelog**.
