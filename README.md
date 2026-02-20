# Kohrus — The Stock Market for Music

[![Deploy to GitHub Pages](https://github.com/Swamisaur/kohrus-landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/Swamisaur/kohrus-landing/actions/workflows/deploy.yml)

Landing page for **Kohrus**: invest in songs and albums, earn royalty payouts, trade shares on a live market.

- **Stack:** React 19, TypeScript, Vite, Framer Motion, Lucide React
- **Run locally:** `npm install` then `npm run dev` → http://localhost:5173
- **Build:** `npm run build`
- **Live site (after enabling Pages):** https://swamisaur.github.io/kohrus-landing/

## GitHub Pages setup (one-time)

1. Open **Settings → Pages**: https://github.com/Swamisaur/kohrus-landing/settings/pages  
2. Under **Build and deployment**:  
   - **Source:** Deploy from a branch  
   - **Branch:** `gh-pages` → `/ (root)`  
3. Click **Save**.  
4. After each push to `master`, the workflow deploys the build to `gh-pages`; the site updates in a minute or two.

## Project layout

```
kohrus-landing/
├── components/     # Navigation, Hero, SocialProof, HowItWorks, FeaturedAssets, CTA, Footer
├── public/         # Static assets (e.g. hero-card.svg)
├── App.tsx
├── index.tsx
├── index.css
├── vite.config.ts
└── package.json
```

## Devlog

See [docs/DEVELOPMENT_LOG.md](docs/DEVELOPMENT_LOG.md).
