export * as nested1 from "./nested1/index.js";
export * as nested2 from "./nested2/index.js";
export * as nested3 from "./nested3/index.js";
export * as nested4 from "./nested4/index.js";
export * as nested5 from "./nested5/index.js";
export * as nested6 from "./nested6/index.js";

export async function example6(prefix: string) {
	await Promise.resolve();
	return prefix + "" + 6;
}
