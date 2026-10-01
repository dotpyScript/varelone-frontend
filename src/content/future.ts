import { images, type SiteImage } from "./images";

/**
 * EXPANSION AREAS: long-term strategy, NOT current services.
 * Copy must always use "expanding", "exploring", "building toward" and
 * similar language. Never "we provide" / "we deliver".
 */
export type FutureArea = {
  slug: string;
  title: string;
  line: string;
  scope: string[];
  image?: SiteImage;
};

export const futureAreas: FutureArea[] = [
  {
    slug: "renewable-energy",
    title: "Renewable Energy",
    line: "Building on our solar installation and solar cold-chain work toward larger-scale renewable energy.",
    scope: [
      "Larger commercial and industrial solar systems",
      "Solar-powered infrastructure",
      "Renewable-energy-powered facilities",
    ],
    image: images.commercialSolar,
  },
  {
    slug: "energy-storage",
    title: "Energy Storage",
    line: "Expanding our capabilities in battery storage and backup power for commercial and industrial users.",
    scope: [
      "Lithium-ion and LiFePO4 battery systems",
      "Battery energy storage systems (BESS)",
      "Backup power",
      "Commercial and industrial storage",
      "Battery management systems",
    ],
    image: images.energyStorage,
  },
  {
    slug: "power-infrastructure",
    title: "Power Infrastructure",
    line: "Working toward power generation, distribution and electrical infrastructure projects.",
    scope: [
      "Power generation projects",
      "Power distribution solutions",
      "Electrical infrastructure",
      "Engineering, procurement and construction (EPC)",
      "Operations and maintenance",
    ],
    image: images.pylonsDay,
  },
  {
    slug: "energy-efficiency",
    title: "Energy Efficiency",
    line: "Exploring services that help organisations understand and reduce their energy use.",
    scope: [
      "Energy audits and management",
      "Energy monitoring",
      "Power-quality and power-factor correction",
      "Energy-efficient equipment",
      "Industrial and building energy optimisation",
    ],
    image: images.energyEfficiency,
  },
  {
    slug: "energy-agriculture",
    title: "Energy & Agriculture",
    line: "Extending our cold-chain work toward energy for farms, processing and food systems.",
    scope: [
      "Solar irrigation and water pumping",
      "Solar drying",
      "Solar-powered agro-processing",
      "Agricultural cold storage",
      "Renewable-energy-powered farms",
    ],
    image: images.farmAerial,
  },
  {
    slug: "clean-mobility",
    title: "Clean Mobility",
    line: "Exploring clean transportation and the infrastructure it will need.",
    scope: [
      "Electric motorcycles, tricycles and buses",
      "EV charging infrastructure",
      "EV fleet solutions",
      "Solar-powered mobility infrastructure",
      "CNG mobility",
    ],
    image: images.evCharging,
  },
  {
    slug: "alternative-fuels",
    title: "Gas & Alternative Fuels",
    line: "A longer-term strategic interest in gas and alternative fuels as part of Nigeria's energy mix.",
    scope: [
      "Natural gas, CNG, LNG and LPG",
      "Gas processing and distribution",
      "Fuel logistics and storage",
    ],
    image: images.gasFuels,
  },
];

export const businessModel = [
  {
    key: "develop",
    title: "Develop",
    body: "Identifying energy and infrastructure needs, then shaping projects around them.",
    horizon: "growing" as const,
  },
  {
    key: "source",
    title: "Source",
    body: "Selecting and procuring the right technology for each project we deliver, as part of the service rather than as a product sale.",
    horizon: "now" as const,
  },
  {
    key: "engineer",
    title: "Engineer",
    body: "Engineering, procurement, installation and commissioning.",
    horizon: "now" as const,
  },
  {
    key: "operate",
    title: "Operate",
    body: "Supporting installed systems beyond handover, including maintenance and, over time, energy delivered as a service.",
    horizon: "growing" as const,
  },
  {
    key: "partner",
    title: "Partner",
    body: "Working with technology providers, contractors, investors and development organisations on shared projects.",
    horizon: "growing" as const,
  },
  {
    key: "invest",
    title: "Invest",
    body: "A long-term goal: investing in, owning and operating energy infrastructure.",
    horizon: "long-term" as const,
  },
];

export const processSteps = [
  {
    title: "Understand",
    body: "We start with the operating problem: what needs power, cooling or protection, and what is failing today.",
  },
  {
    title: "Design",
    body: "We shape a solution around the site, the load and the realities of the local operating environment.",
  },
  {
    title: "Deliver",
    body: "We engineer and install the infrastructure, then commission it to work as intended.",
  },
  {
    title: "Support",
    body: "Where it applies, we stay involved with maintenance and operational support after handover.",
  },
];

export const approachPillars = [
  {
    title: "Engineering expertise",
    body: "Systems are specified and installed around real loads and site conditions.",
  },
  {
    title: "Technology",
    body: "Proven solar, refrigeration and monitoring technology, chosen for the environment it will work in.",
  },
  {
    title: "Project development",
    body: "Needs are turned into defined, deliverable projects.",
  },
  {
    title: "Energy services",
    body: "Support that continues after installation, where customers need it.",
  },
  {
    title: "Strategic partnerships",
    body: "Collaboration with technology providers, contractors and development organisations.",
  },
];
