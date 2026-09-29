# Varelon Energy NG LTD: Corporate Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react · sonner · axios · TanStack Query.

- **Brief and content rules:** [VARELON_BRIEF.md](VARELON_BRIEF.md). Read §0 before changing any copy.
- **Design system:** [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` / `start` | Production build / serve |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm run format` / `format:check` | Prettier (with Tailwind class sorting) |

## Structure

```
src/
  app/                 routes: /, /solutions, /about, /approach, /future-energy, /contact, /api/contact
  components/
    ui/                buttons, status tags, headings, image reveal, logo
    layout/            navbar, footer, providers (TanStack Query + sonner)
    sections/          hero, solutions, cold chain story, business model, video, vision, CTA…
    forms/             contact form
    motion/            the single scroll-reveal observer
  content/             ALL site copy and image references (edit here, not in components)
  lib/                 api client, contact validation, image loader
```

## Before launch: items needed from Varelon

These are intentionally left out rather than invented:

- **Logo:** `src/components/ui/logo.tsx` is an interim wordmark.
- **Contact details:** set `email`, `phone` and `address` in `src/content/site.ts`. They render automatically once set.
- **Enquiry delivery:** set `CONTACT_WEBHOOK_URL`. In production the form refuses to accept enquiries until it is set.
- **Company film:** pass `videoSrc` to `<VideoPlaceholder>` in `src/app/page.tsx`.
- **Own photography:** replace the Unsplash references in `src/content/images.ts`.
- **Domain:** set `NEXT_PUBLIC_SITE_URL`.
- Any newly confirmed service moves from `src/content/future.ts` to `src/content/solutions.ts`, and only after the company confirms it.
