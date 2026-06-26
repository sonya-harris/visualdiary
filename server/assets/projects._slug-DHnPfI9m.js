import { t as SiteLayout } from "./site-layout-DxGX2wUm.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/projects.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
	className: "px-6 py-20 text-center",
	children: [/* @__PURE__ */ jsx("p", {
		className: "text-sm text-muted-foreground",
		children: "Project not found."
	}), /* @__PURE__ */ jsx(Link, {
		to: "/",
		className: "mt-4 inline-block text-sm underline",
		children: "← Back"
	})]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
