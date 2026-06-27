import { Link, useLocation } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logoAssetUrl from "@/assets/SH.PNG";

export function SiteLayout({
  children,
  showAboutLink = true,
}: {
  children: ReactNode;
  showAboutLink?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header showAboutLink={showAboutLink} />
      <main className="fade-in">{children}</main>
      <Footer />
    </div>
  );
}

function Header({ showAboutLink }: { showAboutLink: boolean }) {
  const logoSrc = logoAssetUrl;
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="px-4 pt-6 pb-2 sm:px-6 sm:pt-8 lg:px-7">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <Link to="/" className="block" aria-label="Home">
          <img src={logoSrc} alt="Sonya Harris" className="h-14 w-auto sm:h-16 lg:h-20" />
        </Link>
        {showAboutLink && (
          <nav className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.02em] text-black">
            {!isHome && (
              <Link to="/" className="transition-colors hover:text-[#777777]">
                Home
              </Link>
            )}
            <Link
              to="/"
              hash="about"
              className="transition-colors hover:text-[#777777]"
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="mt-24 border-t border-[#000000] px-4 pb-8 pt-6 sm:px-6 lg:px-7">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between">
        <p className="text-[11px] font-medium uppercase tracking-[0.02em] text-black">
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
              className="absolute right-0 bottom-11 whitespace-nowrap rounded-sm border border-[#ececec] bg-background px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.02em] text-black shadow-sm"
            >
              hello@sonyaharris.com
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
