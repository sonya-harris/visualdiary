import quietField1 from "@/assets/art-quiet-field-1.jpg";
import quietField2 from "@/assets/art-quiet-field-2.jpg";
import vessel1 from "@/assets/art-vessel-1.jpg";
import vessel2 from "@/assets/art-vessel-2.jpg";
import notation1 from "@/assets/art-notation-1.jpg";
import deepwater1 from "@/assets/art-deepwater-1.jpg";
import deepwater2 from "@/assets/art-deepwater-2.jpg";
import coastline1 from "@/assets/art-coastline-1.jpg";
import heldform1 from "@/assets/art-heldform-1.jpg";
import bloom1 from "@/assets/art-bloom-1.jpg";

export type Artwork = {
  slug: string;
  title: string;
  medium: string;
  category: string;
  year: number;
  dimensions: string;
  description: string;
  featuredImage: string;
  gallery: string[];
};

export const artworks: Artwork[] = [
  {
    slug: "quiet-field",
    title: "Quiet Field",
    medium: "Oil on linen",
    category: "Painting",
    year: 2024,
    dimensions: "180 × 180 cm",
    description:
      "Part of an ongoing series exploring stillness and erosion. The painting begins with a flooded ground of warm ochre, then is built up and scraped back over many weeks until only the residue of gesture remains.",
    featuredImage: quietField1,
    gallery: [quietField1, quietField2],
  },
  {
    slug: "vessel-i",
    title: "Vessel I",
    medium: "Hand-built porcelain",
    category: "Sculpture",
    year: 2024,
    dimensions: "24 × 22 × 22 cm",
    description:
      "A single vessel coiled from unglazed porcelain, finished with a soft burnish. The form was guided by the weight of the clay in the hand rather than by any predetermined plan.",
    featuredImage: vessel1,
    gallery: [vessel1, vessel2],
  },
  {
    slug: "coastline-dawn",
    title: "Coastline, Dawn",
    medium: "Archival pigment print",
    category: "Photography",
    year: 2023,
    dimensions: "100 × 100 cm, edition of 5",
    description:
      "Photographed on a single morning along the southern coast. The image is printed at scale to preserve the soft drift of mist along the horizon line.",
    featuredImage: coastline1,
    gallery: [coastline1],
  },
  {
    slug: "notation-ix",
    title: "Notation IX",
    medium: "Sumi ink on paper",
    category: "Drawing",
    year: 2024,
    dimensions: "76 × 56 cm",
    description:
      "From a series of one-stroke drawings made without lifting the brush. Each work is recorded in a single breath and kept only when the gesture lands intact.",
    featuredImage: notation1,
    gallery: [notation1],
  },
  {
    slug: "deep-water",
    title: "Deep Water",
    medium: "Oil on canvas",
    category: "Painting",
    year: 2025,
    dimensions: "200 × 200 cm",
    description:
      "A large work in cobalt and ultramarine, layered wet on wet over several sessions. The painting holds a single field of blue as it shifts between weight and air.",
    featuredImage: deepwater1,
    gallery: [deepwater1, deepwater2],
  },
  {
    slug: "held-form",
    title: "Held Form",
    medium: "Carved walnut",
    category: "Sculpture",
    year: 2023,
    dimensions: "62 × 38 × 30 cm",
    description:
      "Carved from a single block of walnut over three months. The interior void was opened slowly, leaving the outer surface continuous and unbroken.",
    featuredImage: heldform1,
    gallery: [heldform1],
  },
  {
    slug: "bloom-study",
    title: "Bloom Study",
    medium: "Watercolour on cotton paper",
    category: "Drawing",
    year: 2024,
    dimensions: "42 × 42 cm",
    description:
      "A small study from a series observing garden cuttings across a single season. Painted wet into wet so that the pigments find their own edges.",
    featuredImage: bloom1,
    gallery: [bloom1],
  },
];

export const getArtwork = (slug: string) =>
  artworks.find((a) => a.slug === slug);

export const getRelated = (slug: string, count = 3) =>
  artworks.filter((a) => a.slug !== slug).slice(0, count);
