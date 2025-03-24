import { parseWorkflow } from "@actions/workflow-parser";
import fs from "node:fs/promises";

const parsed = parseWorkflow({
	content: await fs.readFile("ci.yml", "utf-8"),
	name: "ci.yml",
});

console.log({ parsed });
