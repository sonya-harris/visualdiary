import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Artwork } from "@/data/artworks";

export function ArtworkTile({ artwork }: { artwork: Artwork }) {
  const [index, setIndex] = useState(0);
  const images = artwork.gallery;
  const hasMultiple = images.length > 1;

  const go = (e: React.MouseEvent, dir: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Link
          to="/projects/$slug"
          params={{ slug: artwork.slug }}
          className="absolute inset-0 block"
          aria-label={artwork.title}
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={artwork.title}
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
        </Link>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={(e) => go(e, -1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center text-foreground/50 transition-colors hover:text-foreground sm:left-3"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={(e) => go(e, 1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center text-foreground/50 transition-colors hover:text-foreground sm:right-3"
            >
              <Chevron dir="right" />
            </button>
          </>
        )}
      </div>


      <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <Link
          to="/projects/$slug"
          params={{ slug: artwork.slug }}
          className="font-display text-[17px] font-bold tracking-tight text-foreground transition-colors hover:text-muted-foreground"
        >
          {artwork.title}
        </Link>
        <span className="text-xs tracking-wide text-muted-foreground">
          {artwork.category}
        </span>
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "left" ? <path d="m15 6-6 6 6 6" /> : <path d="m9 6 6 6-6 6" />}
    </svg>
  );
}
