import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/signature-logo.asset.json";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="fade-in">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="px-6 pt-8 pb-2 sm:px-10 sm:pt-10">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <Link to="/" className="block" aria-label="Home">
          <img
            src={logoAsset.url}
            alt="Sonya Harris"
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <nav className="text-sm tracking-wide text-muted-foreground">
          <Link
            to="/about"
            className="transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="mt-24 px-6 pb-8 sm:px-10">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between">
        <p className="text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} Sonya Harris
        </p>
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Contact"
            className="grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="1" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </button>
          {open && (
            <a
              href="mailto:hello@sonyaharris.com"
              className="absolute right-0 bottom-11 whitespace-nowrap rounded-sm border border-border bg-background px-3 py-2 text-xs tracking-wide text-foreground shadow-sm"
            >
              hello@sonyaharris.com
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
