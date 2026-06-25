import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sonya Harris" },
      {
        name: "description",
        content:
          "Sonya Harris is a contemporary artist working across painting, sculpture, drawing and photography. Based in Brisbane / Magandjin.",
      },
      { property: "og:title", content: "About — Sonya Harris" },
      {
        property: "og:description",
        content: "Sonya Harris — contemporary artist based in Brisbane / Magandjin.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="px-6 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-12 pt-4 md:grid-cols-2 md:gap-16">
          <div className="aspect-[4/5] bg-secondary md:aspect-auto md:min-h-[520px]" />
          <div>
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              About
            </p>
            <h1 className="mt-4 text-[36px] font-bold leading-tight tracking-tight sm:text-[44px]">
              Hi, I'm Son.
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              Welcome to my visual diary.
            </p>

            <dl className="mt-10 divide-y divide-border border-t border-b border-border text-sm">
              <Row>B Creative Industries</Row>
              <Row>B Mass Communication</Row>
              <Row>Cert IV Mental Health</Row>
              <Row>Cert III Visual Art (current)</Row>
            </dl>

            <p className="mt-10 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Currently based in Brisbane / Magandjin
            </p>

            <Link
              to="/"
              className="mt-12 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-muted-foreground"
            >
              <span aria-hidden>←</span> Back to works
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="py-3.5 text-foreground">{children}</div>;
}
