import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { getArtwork } from "@/data/artworks";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const artwork = getArtwork(params.slug);
    if (!artwork) throw notFound();
    return { artwork };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.artwork.title} — Sonya Harris` },
          { name: "description", content: loaderData.artwork.description },
          {
            property: "og:title",
            content: `${loaderData.artwork.title} — Sonya Harris`,
          },
          { property: "og:description", content: loaderData.artwork.description },
          { property: "og:image", content: loaderData.artwork.featuredImage },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: ProjectPage,
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="px-6 py-20 text-center text-sm text-muted-foreground">
        {error.message}
      </div>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="px-6 py-20 text-center">
        <p className="text-sm text-muted-foreground">Project not found.</p>
        <Link to="/" className="mt-4 inline-block text-sm underline">
          ← Back
        </Link>
      </div>
    </SiteLayout>
  ),
});

function ProjectPage() {
  const { artwork } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <SiteLayout>
      <article className="px-6 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-12 pt-8 sm:pt-12 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16 lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* Meta column */}
          <aside className="md:sticky md:top-10 md:self-start">
            <h1 className="font-display text-[36px] font-bold leading-[0.95] tracking-tight sm:text-[48px]">
              {artwork.title}
            </h1>
            <p className="mt-3 inline-block text-xs tracking-wide text-muted-foreground">
              {artwork.category}
            </p>

            <dl className="mt-8 space-y-1.5 text-sm text-foreground">
              <div>{artwork.dimensions}</div>
              <div>{artwork.medium}</div>
              <div>{artwork.year}</div>
            </dl>

            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {artwork.description}
            </p>

            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-muted-foreground"
            >
              <span aria-hidden>←</span> Back
            </Link>
          </aside>

          {/* Gallery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {artwork.gallery.map((src: string) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightbox(src)}
                className="block aspect-square overflow-hidden bg-secondary"
              >
                <img
                  src={src}
                  alt={artwork.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
                />
              </button>
            ))}
          </div>
        </div>

      </article>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6 fade-in"
        >
          <img
            src={lightbox}
            alt={artwork.title}
            className="max-h-full max-w-full object-contain"
          />
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-sm tracking-wide text-muted-foreground hover:text-foreground"
          >
            Close
          </button>
        </div>
      )}
    </SiteLayout>
  );
}
