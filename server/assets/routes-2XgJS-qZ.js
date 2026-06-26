import { t as artworks } from "./artworks-joMfSfGV.js";
import { t as SiteLayout } from "./site-layout-DxGX2wUm.js";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/artwork-tile.tsx
function ArtworkTile({ artwork }) {
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);
	const images = [artwork.featuredImage, ...artwork.gallery.filter((src) => src !== artwork.featuredImage)];
	const hasMultiple = images.length > 1;
	const label = artwork.tags?.join(", ") || artwork.medium || artwork.category;
	const openArtwork = () => {
		navigate({
			to: "/projects/$slug",
			params: { slug: artwork.slug }
		});
	};
	const go = (e, dir) => {
		e.preventDefault();
		e.stopPropagation();
		setIndex((i) => (i + dir + images.length) % images.length);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "group cursor-pointer",
		onClick: openArtwork,
		role: "button",
		tabIndex: 0,
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				openArtwork();
			}
		},
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-square overflow-hidden bg-secondary",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0",
				children: images.map((src, i) => /* @__PURE__ */ jsx("img", {
					src,
					alt: artwork.title,
					width: 1024,
					height: 1024,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out",
					style: { opacity: i === index ? 1 : 0 }
				}, src))
			}), hasMultiple && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: (e) => go(e, -1),
				"aria-label": "Previous image",
				className: "absolute left-2 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center bg-transparent text-[#777777] transition-colors hover:text-black sm:left-3",
				children: /* @__PURE__ */ jsx(Chevron, { dir: "left" })
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: (e) => go(e, 1),
				"aria-label": "Next image",
				className: "absolute right-2 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center bg-transparent text-[#777777] transition-colors hover:text-black sm:right-3",
				children: /* @__PURE__ */ jsx(Chevron, { dir: "right" })
			})] })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1",
			children: [/* @__PURE__ */ jsx("div", {
				className: "font-display text-[14px] font-bold leading-[1.1] tracking-[-0.03em] text-black transition-colors group-hover:text-[#777777]",
				children: artwork.title
			}), /* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center bg-[#F2F2F2] font-bold text-[10px] text-[#7F7F7F] tracking-[-0.03em] px-1 py-0.5 inline-block",
				children: label
			})]
		})]
	});
}
function Chevron({ dir }) {
	return /* @__PURE__ */ jsx("svg", {
		width: "22",
		height: "22",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.25",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: dir === "left" ? /* @__PURE__ */ jsx("path", { d: "m15 6-6 6 6 6" }) : /* @__PURE__ */ jsx("path", { d: "m9 6 6 6-6 6" })
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "mt-6 px-4 pt-6 pb-10 sm:px-6 sm:pt-12 sm:pb-12 lg:px-6 lg:pt-16 lg:pb-10",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-[1600px]",
				children: /* @__PURE__ */ jsx("h1", {
					className: "font-display text-[36px] font-bold leading-[0.98] tracking-[-0.05em] text-black sm:text-[36px] lg:text-[36px]",
					children: "Visual Diary"
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-4 sm:px-6 lg:px-7",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto grid max-w-[1600px] grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-16",
				children: artworks.map((a) => /* @__PURE__ */ jsx(ArtworkTile, { artwork: a }, a.slug))
			})
		}),
		/* @__PURE__ */ jsx(AboutSection, {})
	] });
}
function AboutSection() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "scroll-mt-10 px-4 pt-24 sm:px-6 sm:pt-32 lg:px-7",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-[1600px] gap-12 md:grid-cols-2 md:gap-16",
			children: [/* @__PURE__ */ jsx("div", { className: "justify-self-end aspect-[1/1] bg-secondary md:aspect-[1/1] md:max-h-[300 px] md:max-w-[300px]" }), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-display text-[12px] font-bold uppercase tracking-[-0.03em] text-[#000000]",
					children: "About"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-5 font-display text-[32px] font-bold leading-[0.95] tracking-[-0.03em] text-black sm:text-[32px]",
					children: "Hello, I'm Son."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 text-[24px] tracking-[-0.03em] font-bold leading-[1.25] text-[#777777]",
					children: "Welcome to my visual diary."
				}),
				/* @__PURE__ */ jsxs("dl", {
					className: "mt-5 tracking-[-0.03em] divide-y divide-border border-t border-b border-border text-[12px] leading-[0px] font-bold uppercase text-black",
					children: [
						/* @__PURE__ */ jsx(Row, { children: "B Creative Industries" }),
						/* @__PURE__ */ jsx(Row, { children: "B Mass Communication" }),
						/* @__PURE__ */ jsx(Row, { children: "Cert IV Mental Health" }),
						/* @__PURE__ */ jsx(Row, { children: "Cert III Visual Art (current)" })
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 font-display text-[14px] font-bold  tracking-[-0.03em] text-[#000000]",
					children: "Currently based in Brisbane / Magandjin"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative",
					children: /* @__PURE__ */ jsx("a", {
						href: "mailto:sonyakateharris@gmail.com",
						"aria-label": "Contact",
						className: "flex items-LEFT justify-left mt-4 leading-none",
						children: /* @__PURE__ */ jsxs("svg", {
							className: "block translate-y-[5px]",
							width: "24",
							height: "20",
							viewBox: "0 0 24 24",
							fill: "white",
							stroke: "black",
							strokeWidth: "2",
							strokeLinecap: "square",
							strokeLinejoin: "miter",
							children: [/* @__PURE__ */ jsx("rect", {
								x: "3",
								y: "5",
								width: "20",
								height: "14",
								rx: "0"
							}), /* @__PURE__ */ jsx("path", { d: "m3 7 9 6 9-6" })]
						})
					})
				})
			] })]
		})
	});
}
function Row({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: "py-3.5 text-foreground",
		children
	});
}
//#endregion
export { Index as component };
