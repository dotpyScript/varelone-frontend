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
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Future Energy", href: "/future-energy" },
];

export const contactNav: NavItem = { label: "Contact", href: "/contact" };

/**
 * Company positioning, from the client's own write-up. "Integrated energy
 * company" is the positioning; only the six services in solutions.ts are
 * current, so value-chain breadth is always written as strategy, not delivery.
 */
export const companyOverview =
  "Varelon Energy NG LTD is an integrated energy company focused on developing, delivering and managing reliable, affordable and sustainable energy solutions across Nigeria and, ultimately, the African market.";

export const objective =
  "Our objective is to provide innovative energy solutions that help businesses, industries, communities and households reduce energy costs, improve energy reliability, increase productivity and transition toward cleaner, more sustainable sources of power.";

export const approachStatement =
  "We combine engineering expertise, technology, project development, energy services and strategic partnerships to deliver practical energy solutions tailored to the needs of our customers.";

export const longTermStrategy =
  "Our long-term strategy is to build an integrated energy group capable of participating across multiple segments of the energy industry, while maintaining a strong focus on renewable energy, energy access, energy efficiency, energy infrastructure and the transition toward cleaner energy systems.";

export const vision =
  "To become a leading African energy company delivering reliable, innovative and sustainable energy solutions that power businesses, communities, industries and economic development.";

export const mission =
  "To bridge energy gaps by deploying innovative technologies, developing sustainable energy infrastructure, and providing affordable and reliable energy solutions that create long-term economic and environmental value.";

export const audiences = [
  "Private businesses",
  "Industries",
  "Agricultural enterprises",
  "Food producers",
  "Cold-chain operators",
  "Communities",
  "Government institutions",
  "Development organisations",
  "Investors",
];
