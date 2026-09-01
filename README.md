# Enfield Zimbabwe website

A production-ready static corporate website for Enfield Zimbabwe (Private) Limited. It uses Astro and strict TypeScript, ships mostly static HTML, and is prepared for Cloudflare Pages.

## Local setup

Prerequisites: Node.js 20.11+ and pnpm 10+.

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Quality commands: `pnpm typecheck`, `pnpm lint`, `pnpm test`, and `pnpm build`. The production output is `dist/`.

## Project map

- `src/data/site.ts`: company details, navigation and product catalogue
- `src/styles/global.css`: brand tokens, typography, spacing and responsive design
- `src/components/`: reusable header, footer, SEO, CTA and contact form
- `src/pages/`: public pages and legal drafts
- `functions/api/contact.ts`: Cloudflare Pages Function for validated email enquiries
- `public/_headers`: browser security headers

## Contact form

The browser posts to `/api/contact`. The Pages Function validates fields, rejects a honeypot, optionally verifies Cloudflare Turnstile, then calls Resend server-side. API keys never reach the browser.

Copy `.env.example` and configure the same variables in Cloudflare Pages. `FROM_EMAIL` must use a sender domain verified in Resend. When `TURNSTILE_SECRET_KEY` is set, add a Turnstile widget that writes `cf-turnstile-response`; the server already verifies it.

## Deploy to Cloudflare Pages

1. Push the repository to GitHub.
2. In Cloudflare, create a Pages project and connect the repository.
3. Choose Astro; use `pnpm build` and output directory `dist`.
4. Add `.env.example` variables for production and previews.
5. Deploy, test every route and submit a real form enquiry.
6. Add the custom domain and permanently redirect the alternative hostname.

Pull requests create preview deployments; merging to `main` updates production.

## Search and launch checklist

1. Update `site` in `astro.config.ts`, the sitemap URL in `public/robots.txt`, and `PUBLIC_SITE_URL`.
2. Create a Google Search Console Domain property and verify it with Google’s DNS record.
3. Submit `/sitemap-index.xml`, inspect key pages, and request indexing.
4. Monitor coverage, queries, impressions and clicks.
5. Consider a Google Business Profile only if Enfield meets Google’s current eligibility rules.
6. Choose Cloudflare Web Analytics or Google Analytics after privacy and consent review.
7. Obtain legal approval for the legal-page drafts.
8. Test forms, email delivery, redirects, SSL and real mobile devices.

## Git workflow

Create a `feature/*` branch, commit, open a pull request, review the Cloudflare preview, run all quality commands, then merge to `main`.

## Future changes

- Colours and spacing: CSS variables in `src/styles/global.css`
- Fonts: local `@fontsource` imports and `--display` / `--body` tokens
- Navigation, products and contact details: `src/data/site.ts`
- Page copy: the relevant file under `src/pages/`

The legal pages are drafts and are not legal advice.
