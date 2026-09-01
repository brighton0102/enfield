# Domain and branded email plan

The company profile already uses `@enfield.co.zw` email addresses. Confirm ownership and current DNS before changing anything. Never assume a domain is available until checked at purchase or transfer time.

## Recommended architecture

Use one canonical hostname and permanently redirect the alternative hostname:

`Visitor → Cloudflare DNS → Cloudflare CDN → Cloudflare Pages → Astro site`

Cloudflare Registrar does not support every country-code TLD. If `.co.zw` is unsupported, retain an accredited registrar, delegate DNS to Cloudflare where permitted, and connect the domain to Pages.

## Setup

1. Confirm who controls the domain, registrar, nameservers and email DNS.
2. Back up all DNS, especially MX, SPF, DKIM and DMARC records.
3. Add the domain to Cloudflare without removing mail records.
4. Connect the Pages project under **Custom domains**.
5. Choose `www` or apex as canonical and configure a 301 redirect for the other.
6. Update `astro.config.ts`, `robots.txt` and `PUBLIC_SITE_URL`.
7. Confirm SSL, redirects and email delivery.

## Professional email

Retain or create `sales@`, `info@`, `accounts@` and `support@`. Compare Microsoft 365 and Google Workspace for management, security, retention and support. Configure SPF, DKIM and DMARC from the chosen provider; do not overwrite existing records blindly.
