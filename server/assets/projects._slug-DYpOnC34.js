import { t as Route } from "./projects._slug-D92GVkXB.js";
import { t as SiteLayout } from "./site-layout-DxGX2wUm.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/projects.$slug.tsx?tsr-split=component
function ProjectPage() {
	const { artwork } = Route.useLoaderData();
	const [lightbox, setLightbox] = useState(null);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx("article", {
		className: "mt-6 px-4 sm:px-6 lg:px-7",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-[1400px] gap-12 pt-6 sm:pt-8 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16 lg:grid-cols-[320px_minmax(0,1fr)]",
			children: [/* @__PURE__ */ jsxs("aside", {
				className: "md:sticky md:top-10 md:self-start",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "font-display text-[36px] font-bold leading-[1] tracking-[-0.055em] text-black sm:text-[36px]",
						children: artwork.title
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-3 flex flex-wrap items-center gap-x-2 gap-y-2",
						children: [artwork.category ? /* @__PURE__ */ jsx("p", {
							className: "text-[11px] font-bold leading-[1.2]  font-normal leading-[1.2] inline-flex items-center bg-[#F2F2F2] font-bold text-[10px] text-[#7F7F7F] tracking-[-0.03em] px-1 py-0.5 inline-block",
							children: artwork.category
						}) : null, artwork.tags?.length || artwork.medium ? /* @__PURE__ */ jsx("span", {
							className: "text-[11px] font-bold leading-[1.2] inline-flex items-center bg-[#F2F2F2] font-bold text-[10px] text-[#7F7F7F] tracking-[-0.03em] px-1 py-0.5 inline-block",
							children: artwork.tags?.join(", ") || artwork.medium
						}) : null]
					}),
					artwork.description ? /* @__PURE__ */ jsx("p", {
						className: "mt-8 max-w-sm text-[13px] font-bold leading-[1.1] text-black sm:text-[14px]",
						children: artwork.description
					}) : null,
					/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "mt-10 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[-0.03em] text-black transition-colors hover:text-[#777777]",
						children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							children: "←"
						}), " Back"]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6",
				children: artwork.gallery.map((src) => /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setLightbox(src),
					className: "block aspect-square overflow-hidden bg-secondary",
					children: /* @__PURE__ */ jsx("img", {
						src,
						alt: artwork.title,
						width: 1024,
						height: 1024,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
					})
				}, src))
			})]
		})
	}), lightbox && /* @__PURE__ */ jsxs("div", {
		role: "dialog",
		"aria-modal": "true",
		onClick: () => setLightbox(null),
		className: "fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6 fade-in",
		children: [/* @__PURE__ */ jsx("img", {
			src: lightbox,
			alt: artwork.title,
			className: "max-h-full max-w-full object-contain"
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			"aria-label": "Close",
			onClick: () => setLightbox(null),
			className: "absolute right-6 top-6 text-sm tracking-wide text-muted-foreground hover:text-foreground",
			children: "Close"
		})]
	})] });
}
//#endregion
export { ProjectPage as component };
