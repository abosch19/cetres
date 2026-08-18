# CETRES Enginyers

Static Astro 5 marketing site for CETRES Enginyers, SLP, a civil engineering consultancy in Barcelona.

## URLs

- Production: https://www.cetres.cat
- Vercel preview: https://cetres.vercel.app
- GitHub: https://github.com/abosch19/cetres
- Legacy domain (old site, not this repo): https://www.cetresenginyers.com

## Commands

- Dev: `bun run dev` (`astro dev --host`; next free port if 4321 is taken)
- Build: `bun run build` → `dist/`
- Preview: `bun run preview`
- Typecheck: `bunx astro check`

Package manager: bun. No ESLint, Prettier, Jest, or CI.

## i18n

- `/` is Catalan (canonical)
- `/es/` Spanish, `/en/` English
- `/cat/` is a Catalan alias; its canonical is `/`. Do not add `/cat/` to the sitemap.
- Returning visitors with a `lang` cookie/localStorage, and humans without one, may be redirected from `/` by Accept-Language. Unknown language falls back to English (`/en/`).
- **Do not redirect crawlers** on `/`. Middleware and the inline script skip known bots so Googlebot can index the Catalan homepage. `x-default` is `/en/`.

## SEO

Follow [Claude SEO](https://claude-seo.md/) for technical, schema, local, hreflang, sitemap, image, and GEO work.

Hard rules for this site:

- `site` in `astro.config.mjs` is `https://www.cetres.cat`. Keep canonicals, hreflang, Open Graph, JSON-LD, sitemap, and robots on that origin, with trailing slashes and absolute HTTPS URLs.
- NAP lives in `src/site.ts` (`business`). Visible contact/footer and JSON-LD must stay in sync.
- JSON-LD is a `ProfessionalService` graph in `src/layouts/Base.astro`. Keep it in the initial HTML, not injected by JavaScript.
- `public/robots.txt` must point at `https://www.cetres.cat/sitemap.xml`. The sitemap includes only `/`, `/es/`, and `/en/`, with a full hreflang mesh plus `x-default`.
- `public/llms.txt` is for non-Google AI crawlers. Google Search ignores it; do not treat it as a ranking lever.
- Hero image: `fetchpriority="high"`, never `loading="lazy"`. Below-the-fold images: `loading="lazy"` and `decoding="async"`.
- Open Graph image: `public/og.jpg` (1200×630).

## Analytics

`@vercel/analytics` in `src/layouts/Base.astro` covers `/`, `/es/`, and `/en/`.
