import { execa } from "execa";
import fs from "node:fs/promises";
import path from "node:path";
import prettier from "prettier";

const nonTemplateStrings = !!process.env.NON_TEMPLATE_STRINGS;

const casesPath = "cases";

const caseEntries = [
  {
    label: "files",
    values: [100, 150, 165, 170, 175, 200, 250, 300],
  },
  {
    label: "types",
    values: ["project", "projectService"],
  },
] as const;

type CaseEntry = (typeof caseEntries)[number];

type CaseData = {
  [K in CaseEntry["label"]]: ({ label: K } & CaseEntry)["values"][number];
};

interface NamedCaseData extends CaseData {
  name: string;
}

function createProjectName(data: CaseData) {
  return `files-${data.files}-types-${data.types}`;
}

function createIndexFile() {
  return `
		import { pipe0 } from "./pipe0.js";

		export async function pipes() {
			await Promise.resolve();
			console.log(pipe0(""));
		}
	`;
}

function createEndFile(index: number) {
  const contents = nonTemplateStrings
    ? `prefix + "-" + index`
    : `\`\${prefix}-${index}\`.substring(0, 10)`;

  return `
		export async function pipe${index}(prefix: string) {
			await Promise.resolve();
			return ${contents};
		}
	`;
}

function createPipeFile(index: number) {
  const nextPipe = `pipe${index + 1}`;
  const contents = nonTemplateStrings
    ? `(await ${nextPipe}(prefix)) + "-" + index`
    : `\`\${await ${nextPipe}(prefix)}-${index}\`.substring(0, 10)`;

  return `
		import { ${nextPipe} } from "./${nextPipe}.js";

		export async function pipe${index}(prefix: string) {
			await Promise.resolve();
			return ${contents};
		}
	`;
}

async function createProject(data: CaseData): Promise<NamedCaseData> {
  const name = createProjectName(data);
  const directory = path.join(casesPath, name);

  console.log(`Populating ${name}...`);

  await fs.mkdir(path.join(directory, "src"), { recursive: true });

  await writeFile(
    "eslint.config.js",
    `
			import eslint from '@eslint/js';
			import tseslint from "typescript-eslint";

			export default tseslint.config(
				tseslint.configs.base,
				{
					files: ["**/*.ts"],
					languageOptions: {
						parserOptions: {
							${data.types}: true,
							tsconfigRootDir: import.meta.dirname,
						},
					},
					rules: {
						"@typescript-eslint/no-unsafe-return": "error"
					}
				},
			);
		`,
  );

  await writeFile(
    "package.json",
    {
      name,
      private: true,
      devDependencies: {
        "@eslint/js": "*",
        eslint: "*",
        typescript: "*",
        "typescript-eslint": "rc-v8",
      },
      scripts: {
        lint: "eslint src",
      },
      type: "module",
    },
    "json",
  );

  await writeFile(
    "tsconfig.json",
    {
      compilerOptions: {
        module: "NodeNext",
        noEmit: true,
        skipLibCheck: true,
        strict: true,
        target: "ESNext",
      },
      include: ["src"],
    },
    "json",
  );

  await writeFile("src/index.ts", createIndexFile());
  await writeFile(`src/pipe${data.files}.ts`, createEndFile(data.files));

  for (let i = 0; i < data.files; i += 1) {
    await writeFile(`src/pipe${i}.ts`, createPipeFile(i));
  }

  return { ...data, name };

  async function writeFile(
    filePath: string,
    source: unknown,
    parser: prettier.BuiltInParserName = "typescript",
  ) {
    await fs.writeFile(
      path.join(directory, filePath),
      await prettier.format(
        typeof source === "string"
          ? source
          : JSON.stringify(source, null, "\t"),
        { parser, useTabs: true },
      ),
    );
  }
}

await fs.mkdir(casesPath, { recursive: true });

for (const nested of await fs.readdir(casesPath)) {
  await fs.rm(path.join(casesPath, nested), {
    force: true,
    recursive: true,
  });
}

const cases: NamedCaseData[] = [];

for (const files of caseEntries[0].values) {
  for (const types of caseEntries[1].values) {
    cases.push(await createProject({ files, types }));
  }
}

await execa({ stdio: "inherit" })`yarn`;

async function runProjectLint(data: CaseData) {
  const projectName = createProjectName(data);

  const result = await execa({
    cwd: path.join(casesPath, projectName),
    reject: false,
    stdio: "inherit",
  })`yarn lint`;

  return result.exitCode ? "❌" : "✅";
}

const results: unknown[] = [];

for (const files of caseEntries[0].values) {
  const projectRuns: string[] = [];
  const serviceRuns: string[] = [];

  const projectData = { files, types: "project" } satisfies CaseData;
  const projectName = createProjectName(projectData);

  const serviceData = { files, types: "projectService" } satisfies CaseData;
  const serviceName = createProjectName(serviceData);

  console.log(`Linting ${projectName} and ${serviceName}...`);

  for (let i = 0; i < 3; i += 1) {
    projectRuns.push(await runProjectLint(projectData));
    serviceRuns.push(await runProjectLint(serviceData));
  }

  results.push({
    files,
    ...Object.fromEntries(
      projectRuns.map((status, index) => [`project run ${index}`, status]),
    ),
    ...Object.fromEntries(
      serviceRuns.map((status, index) => [`service run ${index}`, status]),
    ),
  });
}

console.table(results);
