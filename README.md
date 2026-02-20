# Kohrus — The Stock Market for Music

[![Deploy to GitHub Pages](https://github.com/Swamisaur/kohrus-landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/Swamisaur/kohrus-landing/actions/workflows/deploy.yml)

Landing page for **Kohrus**: India’s first music exchange. Invest in songs, earn monthly royalties, trade shares on a live market.

**Live site:** [https://swamisaur.github.io/kohrus-landing/](https://swamisaur.github.io/kohrus-landing/)

---

## Quick start

```bash
npm install
npm run dev    # → http://localhost:5173
npm run build  # → ./dist
```

## Stack

- **React 19** + **TypeScript**
- **Vite** (dev + build)
- **Framer Motion** (micro-animations, scroll-in, hover)
- **Lucide React** (icons)

## Project layout

```
kohrus-landing/
├── components/     # Navigation, Hero, SocialProof, HowItWorks, FeaturedAssets, CTA, Footer
├── public/         # Static assets (404.html, hero-card.svg)
├── utils/          # Shared motion config (ease, stagger, transition)
├── docs/           # DEVELOPMENT_LOG.md
├── App.tsx
├── index.tsx
├── index.css
├── vite.config.ts
└── package.json
```

## Deployment (GitHub Pages)

- **Branch:** Push to `master` triggers the workflow; build is deployed to `gh-pages`.
- **Settings:** Repo **Settings → Pages** → Source: **Deploy from a branch** → Branch: `gh-pages` → `/ (root)`.
- **URL:** `https://<user>.github.io/kohrus-landing/` (this repo uses base path `/kohrus-landing/` in production).

## Devlog

See **[docs/DEVELOPMENT_LOG.md](docs/DEVELOPMENT_LOG.md)** for change history and notes.
