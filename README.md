# Kohrus — The Stock Market for Music

Landing page for **Kohrus**: invest in songs and albums, earn royalty payouts, trade shares on a live market.

- **Stack:** React 19, TypeScript, Vite, Framer Motion, Lucide React
- **Run locally:** `npm install` then `npm run dev` → http://localhost:5173
- **Build:** `npm run build`
- **Deploy:** GitHub Actions deploys `dist` to the `gh-pages` branch on push to `master`. Set repo **Settings → Pages** to use branch `gh-pages`.

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
