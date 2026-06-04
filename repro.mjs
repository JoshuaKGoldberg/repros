import { registerHooks } from "node:module";

// A no-op load hook is enough to trigger the bug.
registerHooks({
	load(url, context, nextLoad) {
		return nextLoad(url, context);
	},
});

// Throws: TypeError: Cannot convert undefined or null to object
//   at Object.keys (<anonymous>)
//   at get-linters.js:12   --> Object.keys(require.cache)
//   at patch.js:158
//   at no-unused-disable.js:8
//   at rules.js:10
await import("@eslint-community/eslint-plugin-eslint-comments");
console.log("ok");
