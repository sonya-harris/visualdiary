import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArtworkTile } from "@/components/artwork-tile";
import { artworks } from "@/data/artworks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonya Harris — Visual Diary" },
      {
        name: "description",
        content:
          "Selected works by Sonya Harris. A contemporary visual diary of painting, sculpture, drawing and photography.",
      },
      { property: "og:title", content: "Sonya Harris — Visual Diary" },
      {
        property: "og:description",
        content: "Selected works by Sonya Harris.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="px-6 pt-8 pb-12 sm:px-10 sm:pt-12">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="text-[34px] font-bold leading-tight tracking-tight sm:text-[44px]">
            Visual Diary
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Selected works by Sonya Harris.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-16">
          {artworks.map((a) => (
            <ArtworkTile key={a.slug} artwork={a} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
