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
          "Welcome.",
      },
      { property: "og:title", content: "Sonya Harris — Visual Diary" },
      {
        property: "og:description",
        content: "Welcome.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="px-4 pt-6 pb-10 sm:px-6 sm:pt-8 sm:pb-12 lg:px-7">
        <div className="mx-auto max-w-[1600px]">
          <h1 className="font-display text-[36px] font-bold leading-[0.98] tracking-[-0.05em] text-black sm:text-[40px] lg:text-[44px]">
            Visual Diary
          </h1>
          <p className="mt-2 text-[12px] font-normal leading-[1.25] text-[#777777]">
            Welcome.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-7">
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
      className="scroll-mt-10 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-7"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-2 md:gap-16">
        <div className="aspect-[4/5] bg-secondary md:aspect-auto md:min-h-[520px]" />
        <div>
          <p className="font-display text-[11px] font-medium uppercase tracking-[0.22em] text-[#777777]">
            About
          </p>
          <h2 className="mt-4 font-display text-[36px] font-bold leading-[0.95] tracking-[-0.02em] text-black sm:text-[40px]">
            Hi, I'm Son.
          </h2>
          <p className="mt-3 text-[12px] font-normal leading-[1.25] text-[#777777]">
            Welcome to my visual diary.
          </p>

          <dl className="mt-10 divide-y divide-border border-t border-b border-border text-[12px] font-normal text-black">
            <Row>B Creative Industries</Row>
            <Row>B Mass Communication</Row>
            <Row>Cert IV Mental Health</Row>
            <Row>Cert III Visual Art (current)</Row>
          </dl>

          <p className="mt-10 font-display text-[11px] font-medium uppercase tracking-[0.22em] text-[#777777]">
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
