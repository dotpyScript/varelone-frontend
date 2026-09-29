# Varelon Design System

The implemented visual system for the Varelon Energy website. Tokens live in
[src/app/globals.css](src/app/globals.css); content rules live in [VARELON_BRIEF.md](VARELON_BRIEF.md).

**Design read:** a B2B/B2G energy-infrastructure corporate site for procurement teams, operators,
public bodies and investors. Swiss-modernist and editorial, with restrained, engineered motion.
Taste dials: variance 6 · motion 4 · density 3.

Sources: UI/UX Pro Max data (the Sustainable Energy/Climate Tech and Industrial profiles point to
"Swiss Modernism 2.0": earth green + sky blue, industrial slate) and Taste Skill anti-slop rules
(one accent, one radius system, eyebrow restraint, one label per CTA intent, no fake numbers).

---

## Color

| Token | Hex | Use |
|---|---|---|
| `ink-950` | `#0b0f0d` | Dark sections, footer, hero base |
| `ink-900` | `#111714` | Body text on light, contact section |
| `ink-800` / `700` / `600` | `#1a221e` / `#27312c` / `#3a4540` | Image placeholders, dark surfaces |
| `steel-500` | `#5c6661` | Secondary text on light (≥ 5:1 on paper) |
| `steel-400` | `#8a938e` | Indices, de-emphasised display text (large only) |
| `steel-300` | `#b3bab5` | Secondary text on dark |
| `paper` | `#f4f5f2` | Page background (cool off-white, not cream) |
| `paper-2` | `#e9ece7` | Alternate light band |
| `white` | `#ffffff` | Elevated light band (solutions, model) |
| `line` / `line-dark` | `#d5dad4` / `#2c3631` | Hairlines on light / dark |
| `signal` | `#1b7a51` | **The accent.** CTAs, active states, links (white text ≥ 5:1) |
| `signal-deep` | `#135c3c` | Hover for `signal` |
| `signal-bright` | `#6ccb98` | Accent on dark backgrounds |
| `frost` / `frost-bright` | `#2f5f80` / `#8fb8d6` | **Temperature meaning only**: the cold half of the Cold Chain Story |

Rules
- One accent (signal green) across the whole site. Frost blue is semantic, not decorative.
- Dark sections are deliberate chapters: *cold chain + film* and *vision + contact + footer*.
- The only gradients are photographic legibility scrims.

## Typography

| Role | Family | Notes |
|---|---|---|
| Display / headings | **Archivo** (variable, `wdth` axis) | Semi-expanded (105–115%) for an engineered feel |
| Body / UI | **Geist** | Highly legible grotesk |
| Technical labels | **Geist Mono** | Uppercase, 0.08em tracking, **sparingly** |

All fonts are loaded through `next/font` (self-hosted, `display: swap`).

| Utility | Size (fluid) | Line height |
|---|---|---|
| `text-display` | 2.6 → 5.25rem | 0.98 |
| `text-h1` | 2.25 → 4.25rem | 1.0 |
| `text-h2` | 1.9 → 3.25rem | 1.04 |
| `text-h3` | 1.35 → 1.85rem | 1.15 |
| `text-statement` | 1.6 → 2.85rem | 1.16 |
| `text-lead` | 1.075 → 1.3rem | 1.55 |
| body | 1rem | 1.65 |
| `text-label` | 0.75rem mono | 1 |

Headings use `text-wrap: balance`; paragraphs use `pretty`. Measure is capped at roughly 40–62ch.

## Layout & spacing

- Container: `container-site`, max 1360px, gutters 20 / 32 / 48px (mobile / md / xl).
- Section rhythm: `section-y`, fluid vertical padding of 5 → 10rem.
- Grid: 12 columns on desktop; every multi-column layout declares its mobile fallback explicitly.
- Breakpoints: Tailwind defaults (sm 640, md 768, lg 1024, xl 1280, 2xl 1536).
- Spacing follows Tailwind's 4px scale. Common steps: 6, 8, 10, 14, 16, 20, 24.

## Shape, depth, surfaces

- **Radius rule:** interactive pills are round, everything else is sharp. Buttons are full pills
  (`rounded-full`) with the icon set in a circular badge at the trailing end; the video play button
  and the form success mark are circles. Images, panels, inputs, tags and tabs stay at radius 0.
- **No drop shadows.** Hierarchy comes from hairlines, surface shifts (paper → white → ink) and scale.
- Cards are avoided. Items are grouped with `border-t` / `divide` rules and whitespace.

## Components

| Component | File | Notes |
|---|---|---|
| `ButtonLink` / `Button` | `ui/button.tsx` | `primary` (signal), `outline`, `outline-light`, `text`; ≥ 48px tall |
| `StatusTag` | `ui/status-tag.tsx` | **The honesty device**: Available now · Building · Expansion area · Long-term goal |
| `SectionHeading` | `ui/section-heading.tsx` | Optional label, but no more than one label per three sections |
| `ImageReveal` | `ui/image-reveal.tsx` | Fixed-ratio photo with upward unmask on entry |
| `Logo` | `ui/logo.tsx` | **Interim wordmark**, to be replaced with the official asset |
| `Navbar` / `Footer` | `layout/` | Transparent over heroes, solid on scroll; accessible mobile menu |
| `Hero` / `PageHero` | `sections/` | Full-bleed photo + scrim, bottom-left copy |
| `SolutionsExplorer` | `sections/solutions-explorer.tsx` | ARIA tabs (desktop), stacked (mobile) |
| `ColdChainStory` | `sections/cold-chain-story.tsx` | Scroll-linked steps + sticky crossfading image |
| `BusinessModel` | `sections/business-model.tsx` | Six-stage lifecycle tabs with status per stage |
| `VideoPlaceholder` | `sections/video-placeholder.tsx` | Pass `videoSrc` to turn it into a real player |
| `CTASection` / `ContactForm` | `sections/`, `forms/` | axios + TanStack Query + sonner |

**One label per intent:** every contact CTA says "Start a Project"; every solutions CTA says
"Explore Our Solutions". Change them in `src/content/site.ts`.

## Imagery

- All photos are referenced from `src/content/images.ts`. Swap in Varelon's own photography there.
- Unsplash images are sized by Unsplash's CDN through a custom loader (`src/lib/image-loader.ts`).
- Every image supports its section's message. No handshakes and no generic eco imagery.

## Motion

| Pattern | Where | Timing |
|---|---|---|
| Hero rise + image settle | Heroes | 1s / 2.4s, `cubic-bezier(0.16,1,0.3,1)` |
| Scroll reveal (fade + 24px) | Headings, lists | 0.8–0.9s, staggered 90ms where sequential |
| Image unmask | `ImageReveal` | 1.2s clip-path + 1.6s scale |
| Cold chain progression | `ColdChainStory` | 0.5–1s color / crossfade |
| Micro-interactions | Buttons, links, tabs | 200–300ms, 1px press |

- One global `IntersectionObserver` (`motion/reveal-observer.tsx`) drives every `data-reveal`.
- Content stays visible without JS. `prefers-reduced-motion` disables every animation.
- No motion libraries, no 3D, and no infinite loops.

## Accessibility checklist

Skip link · semantic landmarks · one `h1` per page · visible `:focus-visible` rings (signal / signal-bright) ·
ARIA tabs with arrow/Home/End keys · menu with focus trap + Esc · labels above inputs, errors below,
`aria-invalid` / `aria-describedby` · ≥ 44px touch targets · decorative images `alt=""`.
