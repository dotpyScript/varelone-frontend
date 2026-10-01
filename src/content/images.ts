import manifest from "./image-manifest.json";

/**
 * Every image on the site is referenced from here so photography can be
 * swapped for Varelon's own project photography in one place.
 * Varelon's own photos live in /public/images (run `pnpm images` after adding
 * one); the rest are Unsplash photos chosen to match their section.
 */
export type SiteImage = {
  src: string;
  alt: string;
  blurDataURL?: string;
  /** CSS object-position, for photos whose subject must survive cropping. */
  position?: string;
};

const u = (id: string) => `https://images.unsplash.com/${id}`;

const local = (file: string, alt: string): SiteImage => {
  const src = `/images/${file}`;
  const entry = (manifest as Record<string, { blurDataURL: string }>)[src];
  if (!entry) throw new Error(`${src} is not optimised yet. Run \`pnpm images\`.`);
  return { src, alt, blurDataURL: entry.blurDataURL };
};

/** Spread onto next/image so local photos show a blurred preview while loading. */
export const blurProps = (image: SiteImage) =>
  image.blurDataURL ? { placeholder: "blur" as const, blurDataURL: image.blurDataURL } : {};

export const images = {
  hero: {
    src: u("photo-1497435334941-8c899ee9e8e9"),
    alt: "Aerial view of rows of solar panels across open land",
  },
  solarField: {
    src: u("photo-1509391366360-2e959784a276"),
    alt: "Ground-mounted solar array under a bright sky",
  },
  solarWide: {
    src: u("photo-1508514177221-188b1cf16e9d"),
    alt: "Long rows of solar panels stretching toward the horizon",
  },
  refrigerationPlant: {
    src: u("photo-1513828583688-c52646db42da"),
    alt: "Industrial refrigeration compressor and stainless steel pipework",
  },
  refrigeration: local(
    "varelon-refrigirator.jpeg",
    "Chest refrigeration unit with a digital temperature controller",
  ),
  coldStorage: local(
    "varelon-cold room.jpeg",
    "Walk-in cold room with its door open onto racks of fresh produce",
  ),
  iceBlocks: local("ice-block-machine.jpeg", "Clear blocks of ice on a stainless steel table"),
  logistics: local("cold-chain-logistics.jpeg", "Refrigerated truck in Varelon Energy livery"),
  engineering: {
    src: u("photo-1504328345606-18bbc8c9d7d1"),
    alt: "Welder at work with sparks in an industrial workshop",
  },
  pylons: {
    src: u("photo-1473341304170-971dccb5ac1e"),
    alt: "Power transmission towers at sunset",
  },
  pylonsDay: {
    src: u("photo-1413882353314-73389f63b6fd"),
    alt: "Steel electricity pylons carrying high-voltage lines",
  },
  harvest: {
    src: u("photo-1605000797499-95a51c5269ae"),
    alt: "Farm workers carrying harvested produce across a field",
  },
  farmAerial: {
    src: u("photo-1535379453347-1ffd615e2e08"),
    alt: "Aerial view of a tractor working a cultivated field",
  },
  produce: {
    src: u("photo-1464226184884-fa280b87c399"),
    alt: "Baskets of fresh vegetables including carrots, chillies and gourds",
  },
  energyStorage: local(
    "energy-storage.jpeg",
    "Concept image of an open battery storage cabinet with rows of cabled battery modules",
  ),
  energyEfficiency: {
    ...local(
      "Energy efficiency.png",
      "Light bulb with a green seedling inside, set against solar panels and wind turbines, with the words “Energy Efficiency: smarter energy use today, a cleaner, more sustainable tomorrow”",
    ),
    // The artwork's text sits on the left edge, so crop from the right.
    position: "left center",
  },
  gasFuels: local(
    "Gas & Alternative Fuels.jpeg",
    "Concept image of a CNG fuelling station at dusk with a truck and pickup at the pumps",
  ),
  evCharging: {
    src: u("photo-1593941707882-a5bba14938c7"),
    alt: "Electric vehicle connected to a charging cable",
  },
  commercialSolar: local(
    "Solar-installation.jpeg",
    "Installer in a safety harness fixing solar panels to a rooftop",
  ),
  solarInstall: local(
    "Solar-installation.jpeg",
    "Installer in a safety harness fixing solar panels to a rooftop",
  ),
  cameraInstall: local(
    "Camera-Installation.jpeg",
    "Varelon technician wiring an electronic access-control unit on an office door",
  ),
} satisfies Record<string, SiteImage>;
