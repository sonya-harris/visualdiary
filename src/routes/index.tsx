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
          <h1 className="font-display text-[44px] font-bold leading-[0.95] tracking-tight sm:text-[64px]">
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

      <AboutSection />
    </SiteLayout>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-10 px-6 pt-32 sm:px-10 sm:pt-40"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-2 md:gap-16">
        <div className="aspect-[4/5] bg-secondary md:aspect-auto md:min-h-[520px]" />
        <div>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
            About
          </p>
          <h2 className="mt-4 font-display text-[40px] font-bold leading-[0.95] tracking-tight sm:text-[56px]">
            Hi, I'm Son.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Welcome to my visual diary.
          </p>

          <dl className="mt-10 divide-y divide-border border-t border-b border-border text-sm">
            <Row>B Creative Industries</Row>
            <Row>B Mass Communication</Row>
            <Row>Cert IV Mental Health</Row>
            <Row>Cert III Visual Art (current)</Row>
          </dl>

          <p className="mt-10 font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Currently based in Brisbane / Magandjin
          </p>
        </div>
      </div>
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="py-3.5 text-foreground">{children}</div>;
}
