export const site = {
  name: "Varelon Energy",
  legalName: "Varelon Energy NG LTD",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://varelonenergy.com",
  description:
    "Varelon Energy NG LTD delivers solar-powered cold rooms, refrigeration, ice block machines, cold-chain logistics, solar installation and camera installation for businesses and institutions in Nigeria.",
  country: "Nigeria",
  // Contact details are rendered only when supplied. Do not add placeholder values.
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  },
} as const;

// One label per intent across the whole site (nav, hero, CTAs, footer).
export const ctaLabels = {
  contact: "Start a Project",
  solutions: "Explore Our Solutions",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Future Energy", href: "/future-energy" },
];

export const contactNav: NavItem = { label: "Contact", href: "/contact" };

export const vision =
  "To become a leading African energy company delivering reliable, innovative and sustainable energy solutions that power businesses, communities, industries and economic development.";

export const mission =
  "To bridge energy gaps by deploying innovative technologies, developing sustainable energy infrastructure, and providing affordable and reliable energy solutions that create long-term economic and environmental value.";

export const audiences = [
  "Commercial operators",
  "Agricultural enterprises",
  "Food producers",
  "Cold-chain operators",
  "Industrial facilities",
  "Communities",
  "Public institutions",
  "Development partners",
];
