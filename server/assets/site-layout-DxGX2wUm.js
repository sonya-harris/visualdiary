import { t as SH_default } from "./SH-BubrUsgS.js";
import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site-layout.tsx
function SiteLayout({ children, showAboutLink = true }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(Header, { showAboutLink }),
			/* @__PURE__ */ jsx("main", {
				className: "fade-in",
				children
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function Header({ showAboutLink }) {
	const logoSrc = SH_default;
	const isHome = useLocation().pathname === "/";
	return /* @__PURE__ */ jsx("header", {
		className: "px-4 pt-6 pb-2 sm:px-6 sm:pt-3 lg:px-7",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-[1600px] items-center justify-between",
			children: [/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "block",
				"aria-label": "Home",
				children: /* @__PURE__ */ jsx("img", {
					src: logoSrc,
					alt: "Sonya Harris",
					className: "h-14 w-auto sm:h-16 lg:h-20"
				})
			}), showAboutLink && /* @__PURE__ */ jsxs("nav", {
				className: " self-start mt-3 flex items-center gap-4 text-[14px] font-bold uppercase tracking-[-0.03em] text-black",
				children: [!isHome && /* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "transition-colors hover:text-[#777777]",
					children: "Home"
				}), /* @__PURE__ */ jsx(Link, {
					to: "/",
					hash: "about",
					className: "transition-colors hover:text-[#777777]",
					children: "About"
				})]
			})]
		})
	});
}
function Footer() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsx("footer", {
		className: "mt-20 h-20 px-4 pb-8 pt-6 sm:px-6 lg:px-7 flex",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex w-full max-w-[1600px] justify-end items-end mt-8",
			children: /* @__PURE__ */ jsxs("p", {
				className: "text-[12px] font-bold uppercase tracking-[-0.03em] text-black",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Sonya Harris"
				]
			})
		})
	});
}
//#endregion
export { SiteLayout as t };
