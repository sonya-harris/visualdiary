import { n as getArtwork } from "./artworks-joMfSfGV.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/projects.$slug.tsx
var $$splitNotFoundComponentImporter = () => import("./projects._slug-DHnPfI9m.js");
var $$splitErrorComponentImporter = () => import("./projects._slug-DP7CqXGb.js");
var $$splitComponentImporter = () => import("./projects._slug-DYpOnC34.js");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const artwork = getArtwork(params.slug);
		if (!artwork) throw notFound();
		return { artwork };
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.artwork.title} — Sonya Harris` },
		{
			name: "description",
			content: loaderData.artwork.description
		},
		{
			property: "og:title",
			content: `${loaderData.artwork.title} — Sonya Harris`
		},
		{
			property: "og:description",
			content: loaderData.artwork.description
		},
		{
			property: "og:image",
			content: loaderData.artwork.featuredImage
		},
		{
			property: "og:type",
			content: "article"
		}
	] : [] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
