import { images, type SiteImage } from "./images";

/**
 * CURRENT commercial offerings only. These are the services Varelon has
 * confirmed it provides today. Do not add anything here without confirmation,
 * and do not add capacities, temperatures or other specifications unless the
 * company supplies them.
 *
 * Varelon does not sell products to customers: everything here is a service
 * (designed, installed, operated or supported by Varelon). Never use
 * "buy", "sell", "shop", "price" or product-sales language.
 */
export type Solution = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  problems: string[];
  applications: string[];
  image: SiteImage;
};

export const coldChainSolutions: Solution[] = [
  {
    slug: "solar-cold-rooms",
    title: "Solar Cold Rooms",
    short: "Walk-in cold storage powered by solar energy.",
    summary:
      "Reliable cold storage powered by clean energy, built for places where grid electricity cannot be counted on.",
    problems: [
      "Unreliable grid electricity",
      "Spoilage of food and agricultural products",
      "High refrigeration operating costs",
      "Too little dependable cold-storage capacity",
    ],
    applications: [
      "Agricultural aggregation points",
      "Food producers and processors",
      "Distributors and wholesalers",
      "Markets and trading hubs",
    ],
    image: images.coldStorage,
  },
  {
    slug: "solar-refrigeration",
    title: "Solar Refrigeration",
    short: "Energy-efficient refrigeration run on solar power.",
    summary:
      "Refrigeration systems powered by solar energy, keeping products at temperature without depending on the grid or constant generator fuel.",
    problems: [
      "Frequent power interruptions",
      "Generator fuel and running costs",
      "Inconsistent product temperatures",
    ],
    applications: [
      "Food businesses",
      "Agricultural enterprises",
      "Commercial refrigeration",
      "Sites with unreliable grid power",
    ],
    image: images.refrigerationPlant,
  },
  {
    slug: "solar-ice-block-machines",
    title: "Solar Ice Block Machines",
    short: "Ice production powered by the sun.",
    summary:
      "Solar-powered ice production for the traders, fishing communities and distributors who rely on ice to keep goods fresh.",
    problems: [
      "Costly or unreliable ice supply",
      "Losses in fresh fish and produce",
      "Dependence on grid power for production",
    ],
    applications: [
      "Markets",
      "Fishing communities",
      "Food distribution",
      "Commercial ice production",
    ],
    image: images.market,
  },
  {
    slug: "cold-chain-logistics",
    title: "Cold-Chain Logistics",
    short: "Moving temperature-sensitive products with care.",
    summary:
      "Infrastructure and logistics support for temperature-sensitive products, connecting storage to the markets and customers that depend on it.",
    problems: [
      "Breaks in temperature control between sites",
      "Product losses in transit",
      "Disconnected storage and distribution",
    ],
    applications: [
      "Agricultural supply chains",
      "Food distribution networks",
      "Producers serving distant markets",
      "Cold-chain operators",
    ],
    image: images.logistics,
  },
];

export const solarInstallation: Solution = {
  slug: "solar-installation",
  title: "Solar Installation",
  short: "Solar power systems, designed and installed.",
  summary:
    "Design and installation of solar power systems for businesses and facilities that need dependable electricity without relying on the grid.",
  problems: [
    "Unreliable grid electricity",
    "Generator fuel and running costs",
    "Power interruptions that stop operations",
  ],
  applications: [
    "Commercial premises",
    "Agricultural facilities",
    "Cold-chain and storage sites",
    "Institutional and community buildings",
  ],
  image: images.solarInstall,
};

export const cameraInstallation: Solution = {
  slug: "camera-installation",
  title: "Camera Installation",
  short: "Camera systems for facilities and infrastructure.",
  summary:
    "Camera installation for commercial and infrastructure sites, extending the same engineering care we bring to energy and cold-chain facilities.",
  problems: ["Limited visibility across facilities", "Unprotected equipment and stock"],
  applications: [
    "Commercial facilities",
    "Warehouses and cold-chain sites",
    "Energy infrastructure",
    "Agricultural facilities and business premises",
  ],
  image: images.installation,
};

export const coldChainFlow = [
  {
    title: "Solar energy",
    body: "The sun is the starting point: a power source that does not depend on the grid.",
  },
  {
    title: "Power",
    body: "Solar generation is turned into dependable electricity for the equipment that needs it.",
  },
  {
    title: "Refrigeration",
    body: "That power runs refrigeration that holds temperature through the working day.",
  },
  {
    title: "Cold storage",
    body: "Cold rooms give producers and traders somewhere safe to keep perishable goods.",
  },
  {
    title: "Ice",
    body: "Ice production supports markets and fishing communities that move fresh goods daily.",
  },
  {
    title: "Logistics",
    body: "Temperature-sensitive products travel from storage to the people who need them.",
  },
  {
    title: "Preservation",
    body: "More of what is produced reaches market in good condition, and keeps its value.",
  },
];

/** Energy and infrastructure services that sit alongside the cold chain. */
export const infrastructureSolutions: Solution[] = [solarInstallation, cameraInstallation];

/** Every current service, in display order. */
export const currentSolutions: Solution[] = [...coldChainSolutions, ...infrastructureSolutions];
