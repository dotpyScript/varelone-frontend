@AGENTS.md

# Varelon Energy NG LTD — Corporate Website

Before designing, writing copy or implementing anything, read [VARELON_BRIEF.md](VARELON_BRIEF.md). It is the source of truth; its §0 "Non-Negotiable Rules" override everything else. The implemented design system is documented in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md).

## Critical rules (summary)

- **Current services are only:** solar-powered cold rooms, solar-powered refrigeration, solar-powered ice block machines, cold-chain logistics, solar installation, camera installation.
- **Varelon does not sell products.** Everything is a service; never use buy/sell/shop/price or equipment-supply-as-sales language.
- **Everything else is future/strategic** (renewables, storage, power, efficiency, e-mobility, oil & gas, alternative fuels, agriculture). Write "Varelon is expanding its capabilities in…", never "Varelon provides…".
- **Never invent** projects, stats, clients, logos, testimonials, certifications, partnerships, locations, years, staff, revenue or technical specs.
- **Design:** premium B2B/B2G energy-infrastructure brand, one coherent design system, mobile-first, accessible, lightweight. No generic AI/SaaS aesthetics (gradients, glass, blobs, glowing green, card overload, fake dashboards).

## Stack

Next.js (App Router, `src/`) · TypeScript · Tailwind CSS v4 · lucide-react · sonner · axios · TanStack Query · prettier · eslint.
Use reusable section components (see brief §29); no monolithic pages. All site copy lives in `src/content/`. Preserve existing repo conventions and functionality.
