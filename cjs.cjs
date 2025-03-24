const { parseWorkflow } = require("@actions/workflow-parser");
const fs = require("node:fs/promises");

async function main() {
  const parsed = parseWorkflow({
    content: await fs.readFile("ci.yml", "utf-8"),
    name: "ci.yml",
  });

  console.log({ parsed });
}

main().catch((error) => {
  console.error(error);
});
