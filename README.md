# Repro: symlinked directories cause `parserOptions.project` errors

Reproduction for [typescript-eslint#2987](https://github.com/typescript-eslint/typescript-eslint/issues/2987).

A directory that is reachable both directly and through a symlink is only linted under one of the two paths.
Linting it under the other path fails with a parsing error, in all three type-aware configurations:
`parserOptions.project`, `parserOptions.project: true`, and `parserOptions.projectService`.

```plaintext
apps/
  legacy-app/
    libs -> ../../libs   (symlink)
    src/
      index.ts
libs/
  symlinked-lib/
    src/
      floating.ts        (contains a floating promise, so a type-aware rule reports on it)
      index.ts
tsconfig.json            (include: ["apps/**/*.ts", "libs/**/*.ts"])
```

`apps` sorts before `libs`, so TypeScript reaches the files through the symlink first.

## Setup

```shell
npm install
```

## Command Outputs

Versions: `typescript-eslint@8.67.0`, `typescript@5.9.3`, `eslint@10.8.1`.

### `npm run lint:project`

```plaintext
/Users/josh/code/repros/libs/symlinked-lib/src/floating.ts
  0:0  error  Parsing error: "parserOptions.project" has been provided for @typescript-eslint/parser.
The file was not found in any of the provided project(s): libs/symlinked-lib/src/floating.ts

/Users/josh/code/repros/libs/symlinked-lib/src/index.ts
  0:0  error  Parsing error: "parserOptions.project" has been provided for @typescript-eslint/parser.
The file was not found in any of the provided project(s): libs/symlinked-lib/src/index.ts

✖ 2 problems (2 errors, 0 warnings)
```

### `npm run lint:project-true`

```plaintext
/Users/josh/code/repros/libs/symlinked-lib/src/floating.ts
  0:0  error  Parsing error: "parserOptions.project" has been provided for @typescript-eslint/parser.
The file was not found in any of the provided project(s): libs/symlinked-lib/src/floating.ts

/Users/josh/code/repros/libs/symlinked-lib/src/index.ts
  0:0  error  Parsing error: "parserOptions.project" has been provided for @typescript-eslint/parser.
The file was not found in any of the provided project(s): libs/symlinked-lib/src/index.ts

✖ 2 problems (2 errors, 0 warnings)
```

### `npm run lint:project-service`

The project service is impacted too, so it isn't a workaround for this issue:

```plaintext
/Users/josh/code/repros/libs/symlinked-lib/src/floating.ts
  0:0  error  Parsing error: /Users/josh/code/repros/libs/symlinked-lib/src/floating.ts was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject

/Users/josh/code/repros/libs/symlinked-lib/src/index.ts
  0:0  error  Parsing error: /Users/josh/code/repros/libs/symlinked-lib/src/index.ts was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject

✖ 2 problems (2 errors, 0 warnings)
```

### `npm run lint:project-symlink-path`

Linting the same files through the symlinked path works, and reports the type-aware rule:

```plaintext
/Users/josh/code/repros/apps/legacy-app/libs/symlinked-lib/src/floating.ts
  4:3  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

✖ 1 problem (1 error, 0 warnings)
```

## Root Cause

TypeScript de-duplicates directories by real path while expanding a TSConfig's `include`s, so it visits the `libs` directory once: through `apps/legacy-app/libs`.
The files only exist in the project under that path.

```shell
node probe.mjs
```

```plaintext
TSConfig file names: [
  'apps/legacy-app/libs/symlinked-lib/src/floating.ts',
  'apps/legacy-app/libs/symlinked-lib/src/index.ts',
  'apps/legacy-app/src/index.ts'
]
```

`tsc` agrees — `npx tsc --noEmit --listFiles` lists only the `apps/legacy-app/libs/...` spelling of the files.

So typescript-eslint asks TypeScript for a path that TypeScript never visited, which is why every type-aware configuration reports the file as missing from the project.
The two paths are the same file on disk, so matching them by real path rather than by path spelling resolves it.

## Testing Against a Local typescript-eslint Checkout

With a [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) clone in a sibling directory:

```shell
cd ../typescript-eslint
npx nx run-many -t build -p eslint-plugin parser typescript-eslint
```

Then point every `@typescript-eslint/*` package at it — all of them, so the plugin and the parser share one TypeScript instance:

```shell
npm pkg set devDependencies.typescript-eslint="file:../typescript-eslint/packages/typescript-eslint"
for pkg in eslint-plugin parser typescript-estree utils type-utils scope-manager types visitor-keys project-service tsconfig-utils; do
  npm pkg set overrides.@typescript-eslint/$pkg="file:../typescript-eslint/packages/$pkg"
done
rm -rf node_modules package-lock.json
npm install
```

All three configurations then lint the files and report only the type-aware rule:

```plaintext
/Users/josh/code/repros/libs/symlinked-lib/src/floating.ts
  4:3  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

✖ 1 problem (1 error, 0 warnings)
```
