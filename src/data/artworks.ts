import inFluxA from "@/assets/in-flux-a.png.asset.json";
import inFluxB from "@/assets/in-flux-b.jpg.asset.json";
import abbeyRoad from "@/assets/abbey-road.jpg.asset.json";
import bougainvillia from "@/assets/bougainvillia.jpg.asset.json";
import boxes from "@/assets/boxes.jpg.asset.json";
import brownSnake from "@/assets/brown-snake.jpg.asset.json";
import calendar from "@/assets/calendar.jpg.asset.json";
import champsElysees from "@/assets/champs-elysees.jpg.asset.json";
import conch from "@/assets/conch.jpg.asset.json";
import crown from "@/assets/crown.jpg.asset.json";

export type Artwork = {
  slug: string;
  title: string;
  medium: string;
  category: string;
  year: number | string;
  dimensions: string;
  description: string;
  featuredImage: string;
  gallery: string[];
};

export const artworks: Artwork[] = [
  {
    slug: "in-flux",
    title: "In Flux",
    medium: "",
    category: "Sculpture",
    year: "",
    dimensions: "",
    description: "",
    featuredImage: inFluxA.url,
    gallery: [inFluxA.url, inFluxB.url],
  },
  {
    slug: "abbey-road",
    title: "Abbey Road",
    medium: "",
    category: "",
    year: "",
    dimensions: "",
    description: "",
    featuredImage: abbeyRoad.url,
    gallery: [abbeyRoad.url],
  },
  {
    slug: "bougainvillia",
    title: "Bougainvillia",
    medium: "",
    category: "",
    year: "",
    dimensions: "",
    description: "",
    featuredImage: bougainvillia.url,
    gallery: [bougainvillia.url],
  },
  {
    slug: "boxes",
    title: "Boxes",
    medium: "",
    category: "",
    year: "",
    dimensions: "",
    description: "",
    featuredImage: boxes.url,
    gallery: [boxes.url],
  },
  {
    slug: "brown-snake",
    title: "Brown Snake",
    medium: "",
    category: "",
    year: "",
    dimensions: "",
    description: "",
    featuredImage: brownSnake.url,
    gallery: [brownSnake.url],
  },
  {
    slug: "calendar",
    title: "Calendar",
    medium: "",
    category: "",
    year: "",
    dimensions: "",
    description: "",
    featuredImage: calendar.url,
    gallery: [calendar.url],
  },
  {
    slug: "champs-elysees",
    title: "Champs-Élysées",
    medium: "",
    category: "",
    year: "",
    dimensions: "",
    description: "",
    featuredImage: champsElysees.url,
    gallery: [champsElysees.url],
  },
  {
    slug: "conch",
    title: "Conch",
    medium: "",
    category: "",
    year: "",
    dimensions: "",
    description: "",
    featuredImage: conch.url,
    gallery: [conch.url],
  },
  {
    slug: "crown",
    title: "Crown",
    medium: "",
    category: "",
    year: "",
    dimensions: "",
    description: "",
    featuredImage: crown.url,
    gallery: [crown.url],
  },
];

export const getArtwork = (slug: string) =>
  artworks.find((a) => a.slug === slug);

export const getRelated = (slug: string, count = 3) =>
  artworks.filter((a) => a.slug !== slug).slice(0, count);
