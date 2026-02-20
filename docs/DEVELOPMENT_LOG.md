# Kohrus Landing — Development Log

This project is the **Kohrus** marketing landing page (“The Stock Market for Music”). It was separated from the Epic Emoji Expedition repo so Kohrus has its own codebase and deployment.

---

### **Project creation and transfer**

- **New repo:** Standalone `kohrus-landing` project containing only the Kohrus landing page.
- **Scope:** Single-page site with Navigation, Hero, Social Proof, How It Works, Featured Assets, CTA, and Footer. No game or Epic Emoji Expedition code.
- **Stack:** React 19, TypeScript, Vite, Framer Motion, Lucide React. Build: `npm run build`. Dev: `npm run dev` (base path `/` locally).
- **Deployment:** GitHub Actions workflow deploys `dist` to the `gh-pages` branch. Production base path: `/kohrus/` for repo `Swamisaur/kohrus`.
- **Assets:** Hero card uses local `public/hero-card.svg` with Unsplash fallback on image error. All section images use Unsplash URLs.
- **Copy and design:** Hero is conversion-focused (single primary CTA, trust line, “Earn from music. Like the stock market.”). Rest of sections aligned with existing Kohrus messaging.

---

### **File layout**

- `App.tsx` — Root: renders all sections in order.
- `components/` — Navigation, Hero, SocialProof, HowItWorks, FeaturedAssets, CTA, Footer (each with `.tsx` + `.css`).
- `public/hero-card.svg` — Local hero card image.
- `index.html`, `index.tsx`, `index.css` — Entry and global styles.
- `vite.config.ts` — Base path: `/` in dev, `/kohrus/` in production.
- `.github/workflows/deploy.yml` — Build and push to `gh-pages`.

Future work (new features, copy changes, or deployment tweaks) can be logged below with date and short description.
