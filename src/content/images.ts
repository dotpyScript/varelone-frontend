/**
 * Every image on the site is referenced from here so photography can be
 * swapped for Varelon's own project photography in one place.
 * All are Unsplash photos, chosen to match the section they illustrate.
 */
export type SiteImage = { src: string; alt: string };

const u = (id: string) => `https://images.unsplash.com/${id}`;

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
  coldStorage: {
    src: u("photo-1616401784845-180882ba9ba8"),
    alt: "Storage facility with stacked pallets and a forklift",
  },
  market: {
    src: u("photo-1488459716781-31db52582fe9"),
    alt: "Fresh produce laid out at a busy food market",
  },
  logistics: {
    src: u("photo-1601584115197-04ecc0da31d7"),
    alt: "Truck travelling along a road through open savanna",
  },
  installation: {
    src: u("photo-1621905251189-08b45d6a269e"),
    alt: "Technician in a hard hat working on a wall-mounted electrical installation",
  },
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
  evCharging: {
    src: u("photo-1593941707882-a5bba14938c7"),
    alt: "Electric vehicle connected to a charging cable",
  },
  commercialSolar: {
    src: u("photo-1611365892117-00ac5ef43c90"),
    alt: "Solar panels installed beside a commercial building at dusk",
  },
  solarInstall: {
    src: u("photo-1559302504-64aae6ca6b6d"),
    alt: "Gloved hands connecting wiring on a solar panel installation",
  },
} satisfies Record<string, SiteImage>;
