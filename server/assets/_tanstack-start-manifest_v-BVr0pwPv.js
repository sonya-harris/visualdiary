//#region \0tanstack-start-manifest:v
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/home/codespace/visualdiary/src/routes/__root.tsx",
		children: [
			"/",
			"/sitemap.xml",
			"/projects/$slug"
		],
		preloads: ["/assets/index-CsYdX0ib.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-CsYdX0ib.js"
		} }]
	},
	"/": {
		filePath: "/home/codespace/visualdiary/src/routes/index.tsx",
		children: void 0,
		preloads: ["/assets/routes-Ujxz13uZ.js", "/assets/site-layout-C-R3rSgm.js"]
	},
	"/projects/$slug": {
		filePath: "/home/codespace/visualdiary/src/routes/projects.$slug.tsx",
		children: void 0,
		preloads: [
			"/assets/projects._slug-CXi1NHpC.js",
			"/assets/site-layout-C-R3rSgm.js",
			"/assets/projects._slug-UXsaOqY_.js",
			"/assets/projects._slug-cEKZjp0h.js"
		]
	}
} });
//#endregion
export { tsrStartManifest };
