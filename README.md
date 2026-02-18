# Battlecry Initiative

Next.js site for [battlecryinitiative.org](https://battlecryinitiative.org).

## Stack

- **Next.js** (App Router)
- **Tailwind CSS** (grunge palette, Bebas Neue + Karla)
- **Vercel** (hosting + CDN + SSL)
- **GitHub** (code)
- **Cloudflare** (domain)
- **Google Workspace** (info@battlecryinitiative.com)

## Design

- **Tone:** Strong, grunge, community-focused, still welcoming.
- **Colors:** Dark grit (charcoal/warm black), rust accent, cream/sand text.
- **Fonts:** Bebas Neue (display), Karla (body).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Page         | Route          |
|-------------|----------------|
| Home        | `/`            |
| About       | `/about`       |
| Get Involved| `/get-involved`|
| Events      | `/events`      |
| Shop        | `/shop`        |
| Donate      | `/donate`      |

## Assets

- **Logo (B&W):** `public/logo-bw.png` — used in header and footer.
- **Pink lion (women's events):** Save the pink lion image from [Instagram](https://www.instagram.com/battlecry_initiative/) as `public/pink-lion.png` to show it on the Events page in the Women's Events section. Until then, a rose-accent placeholder appears.

## Next steps

1. **Donations:** Connect Donate page to Stripe, Donorbox, or your processor; add thank-you page and email receipt.
2. **Shop:** Embed Shopify (Buy Buttons or storefront) on `/shop` or link to a subdomain with same header/footer.
3. **Events:** Replace mock events with real data (CMS, Google Calendar, or Eventbrite).
4. **Domain:** Point battlecryinitiative.org to Vercel (or Cloudflare → Vercel).
5. **Imagery:** Swap Unsplash hero/section URLs for your own photos if desired (see `src/app/page.tsx`).
