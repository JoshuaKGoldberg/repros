export * as nested1 from "./nested1/index.js";
export * as nested2 from "./nested2/index.js";
export * as nested3 from "./nested3/index.js";
export * as nested4 from "./nested4/index.js";
export * as nested5 from "./nested5/index.js";
export * as nested6 from "./nested6/index.js";
export * as nested7 from "./nested7/index.js";
export * as nested8 from "./nested8/index.js";
export * as nested9 from "./nested9/index.js";

export async function example9(prefix: string) {
	await Promise.resolve();
	return prefix + "" + 9;
}
