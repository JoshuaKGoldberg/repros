import fs from "node:fs/promises";
import { Renderer } from "@takumi-rs/core";

const renderer = new Renderer();

for (const file of ["dot.png", "dot.gif"]) {
	const src = await fs.readFile(file);

	for (const devicePixelRatio of [1, 2]) {
		const pixels = await renderer.render(
			{ src, type: "image" },
			{ devicePixelRatio, format: "raw" },
		);

		console.log(
			`${file} at ${devicePixelRatio}x: red square ${redSquare(pixels, devicePixelRatio)}`,
		);
	}
}

/** Where the red pixels in an RGBA render of a 20x20 image are, in CSS pixels. */
function redSquare(pixels, devicePixelRatio) {
	const width = 20 * devicePixelRatio;
	const xs = [];
	const ys = [];

	for (let index = 0; index < pixels.length; index += 4) {
		if (pixels[index] > 128 && pixels[index + 1] < 128) {
			xs.push((index / 4) % width);
			ys.push(Math.floor(index / 4 / width));
		}
	}

	const css = (value) => value / devicePixelRatio;
	const left = Math.min(...xs);
	const top = Math.min(...ys);
	const right = Math.max(...xs) + 1;
	const bottom = Math.max(...ys) + 1;

	return `${css(right - left)}x${css(bottom - top)} at (${css(left)}, ${css(top)})`;
}
