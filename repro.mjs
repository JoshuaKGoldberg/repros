import fs from "node:fs/promises";
import { PptxRenderer } from "pptx-svg";
import PptxGenJS from "pptxgenjs";

const renderer = new PptxRenderer();
await renderer.init(await fs.readFile("node_modules/pptx-svg/dist/main.wasm"));

for (const title of ["TypeScript ♥ ESLint", "TypeScript 💙 ESLint"]) {
	const pptx = new PptxGenJS();
	pptx.addSection({ title });
	pptx.addSlide({ sectionTitle: title });

	try {
		const { slideCount } = await renderer.loadPptx(
			await pptx.write({ outputType: "arraybuffer" }),
		);
		console.log(`${title}: loaded ${slideCount} slide`);
	} catch (error) {
		console.log(`${title}: ${error}`);
	}
}
