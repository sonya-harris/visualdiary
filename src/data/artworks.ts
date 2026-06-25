const assetModules = Object.fromEntries(
  Object.entries(
    import.meta.glob("/src/assets/*", {
      eager: true,
      import: "default",
    }) as Record<string, string>,
  ).filter(([assetPath]) => /\.(jpe?g|png|webp|svg)$/i.test(assetPath)),
) as Record<string, string>;

// The logo is imported separately in the layout component and is not part of the artwork list.

export type Artwork = {
  slug: string;
  title: string;
  medium: string;
  category: string;
  year: number | string;
  dimensions: string;
  description: string;
  tags: string[];
  featuredImage: string;
  gallery: string[];
};

function createArtwork(
  props: Partial<Artwork> & Pick<Artwork, "slug" | "title" | "featuredImage">,
): Artwork {
  return {
    medium: "",
    category: "",
    year: "",
    dimensions: "",
    description: "",
    tags: [],
    gallery: [props.featuredImage],
    ...props,
  };
}

function toArtworkTitle(assetPath: string) {
  const fileName = assetPath.split("/").pop() ?? assetPath;
  return fileName.replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " ").trim();
}

function toSlug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeAssetName(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\.[^/.]+$/, "")
    .replace(/\s+\((copy|duplicate|1|2|3)\)$/i, "")
    .replace(/\s+copy$/i, "")
    .replace(/[-_]+/g, " ");
}

function resolveAsset(...assetNames: string[]) {
  const assetLookup = Object.fromEntries(
    Object.entries(assetModules).map(([assetPath, assetUrl]) => {
      const fileName = assetPath.split("/").pop() ?? "";
      return [fileName.toLowerCase(), assetUrl];
    }),
  );

  const fallbackLookup = new Map<string, string>();
  for (const [fileName, assetUrl] of Object.entries(assetLookup)) {
    fallbackLookup.set(normalizeAssetName(fileName), assetUrl);
  }

  for (const assetName of assetNames) {
    const normalizedName = assetName.toLowerCase();
    const resolved = assetLookup[normalizedName];
    if (resolved) {
      return resolved;
    }

    const fallback = fallbackLookup.get(normalizeAssetName(assetName));
    if (fallback) {
      return fallback;
    }
  }

  throw new Error(`Could not resolve asset for ${assetNames.join(", ")}`);
}

const mediumBySlug: Record<string, { medium: string; tags: string[] }> = {
  "in-flux": { medium: "Stoneware clay", tags: ["Stoneware clay"] },
  depth: { medium: "Graphite pencil", tags: ["Graphite pencil"] },
  "the-grand-budapest-hotel": { medium: "Graphite pencil", tags: ["Graphite pencil"] },
  "sezane-cups": { medium: "Graphite pencil", tags: ["Graphite pencil"] },
  "champs-elysees": { medium: "Graphite pencil", tags: ["Graphite pencil"] },
  embrace: { medium: "Photogram", tags: ["Photogram"] },
  crown: { medium: "Photogram", tags: ["Photogram"] },
  "brown-snake": { medium: "Cyanotype", tags: ["Cyanotype"] },
  sheer: { medium: "Cyanotype", tags: ["Cyanotype"] },
  bougainvillia: { medium: "Cyanotype", tags: ["Cyanotype"] },
  "bougainvillea": { medium: "Cyanotype", tags: ["Cyanotype"] },
  "limoges-porcelain": { medium: "Graphite pencil", tags: ["Graphite pencil"] },
  jigsaw: {
    medium: "Watercolour paint / Colour pencil / Graphite pencil / Fineliner",
    tags: ["Watercolour paint", "Colour pencil", "Graphite pencil", "Fineliner"],
  },
  conch: { medium: "Graphite pencil", tags: ["Graphite pencil"] },
  "abbey-road": { medium: "Graphite pencil", tags: ["Graphite pencil"] },
  boxes: { medium: "Graphite pencil", tags: ["Graphite pencil"] },
  harleycat: { medium: "Graphite pencil", tags: ["Graphite pencil"] },
  "fka-twigs": { medium: "Graphite pencil", tags: ["Graphite pencil"] },
  "egoic-lotus": { medium: "Colour pencil", tags: ["Colour pencil"] },
  calendar: { medium: "Colour pencil", tags: ["Colour pencil"] },
  serotonin: { medium: "Colour pencil", tags: ["Colour pencil"] },
  "sunflower-theory": { medium: "Colour pencil", tags: ["Colour pencil"] },
  lineage: { medium: "Colour pencil", tags: ["Colour pencil"] },
};

function getArtworkMeta(slug: string) {
  return mediumBySlug[slug] ?? { medium: "", tags: [] };
}

const groupedArtworkConfigs = [
  {
    slug: "bougainvillea",
    title: "Bougainvillea",
    assets: ["Bougainvillia.jpg"],
  },
  {
    slug: "in-flux",
    title: "In Flux",
    assets: ["In Flux A.PNG", "In Flux B.jpg"],
  },
  {
    slug: "jigsaw",
    title: "Jigsaw",
    assets: [
      "Jigsaw_Colour pencil.jpg",
      "Jigsaw_Fineliner.jpg",
      "Jigsaw_Graphite.jpg",
      "Jigsaw_Outline.jpg",
      "Jigsaw_Watercolour.jpg",
    ],
  },
  {
    slug: "sunflower-theory",
    title: "Sunflower Theory",
    assets: ["Sunflower Theory.jpg"],
  },
];

const singleArtworkConfigs = Object.keys(assetModules)
  .filter((assetPath) => {
    const fileName = (assetPath.split("/").pop() ?? "").toLowerCase();
    return ![
      "signature-logo.svg",
      "signature-logo.png",
      "sh.png",
      "sh.PNG",
      "sh-png",
      "sh-png.png",
    ].includes(fileName);
  })
  .map((assetPath) => ({
    assetPath,
    title: toArtworkTitle(assetPath),
  }))
  .filter(({ assetPath }) => {
    return !groupedArtworkConfigs.some((config) =>
      config.assets.some((assetName) => assetPath.endsWith(assetName)),
    );
  });

// To add a new artwork, drop the image into src/assets and it will appear automatically.
export const artworks: Artwork[] = [
  ...groupedArtworkConfigs.map((config) => {
    const images = config.assets.map((assetName) => resolveAsset(assetName));
    const meta = getArtworkMeta(config.slug);
    return createArtwork({
      slug: config.slug,
      title: config.title,
      medium: meta.medium,
      tags: meta.tags,
      featuredImage: images[0],
      gallery: images,
    });
  }),
  ...singleArtworkConfigs.map(({ assetPath, title }) => {
    const slug = toSlug(title);
    const meta = getArtworkMeta(slug);
    return createArtwork({
      slug,
      title,
      medium: meta.medium,
      tags: meta.tags,
      featuredImage: assetModules[assetPath],
      gallery: [assetModules[assetPath]],
    });
  }),
].sort((a, b) => a.title.localeCompare(b.title));

export const getArtwork = (slug: string) =>
  artworks.find((a) => a.slug === slug);

export const getRelated = (slug: string, count = 3) =>
  artworks.filter((a) => a.slug !== slug).slice(0, count);
