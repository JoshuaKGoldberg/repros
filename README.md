# `allowDefaultProjectForFiles` Demonstration

Shows using <https://github.com/typescript-eslint/typescript-eslint/pull/7752>'s `allowDefaultProjectForFiles` in a project.

The project has two files that it wants to lint:

- `.eslintrc.cjs`: not included in the `tsconfig.json`
- `src/index.ts`: included in the `tsconfig.json`

## Setup

```shell
npm i
npm link @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- `npm run lint:default`: Uses the project service but without any configurations
  - ❌ This is an issue because `.eslintrc.cjs` is not included in the TSConfig
- `npm run lint:duplicated`: Includes both files in `allowDefaultProjectForFiles`
  - ❌ This is an issue because `src/index.ts` is also included in the TSConfig
- `npm run lint:fixed`: Includes just `.eslintrc.cjs` in `allowDefaultProjectForFiles`
  - ✅ This successfully lints with type info

## Command Outputs

### `npm run lint:default`

```plaintext
/Users/josh/repos/repros/.eslintrc.cjs
  0:0  error  Parsing error: /Users/josh/repos/repros/.eslintrc.cjs was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProjectForFiles
```

### `npm run lint:duplicated`

```plaintext

/Users/josh/repos/repros/.eslintrc.cjs
  0:0  error  Parsing error: /Users/josh/repos/repros/.eslintrc.cjs was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProjectForFiles

/Users/josh/repos/repros/src/index.ts
  0:0  error  Parsing error: /Users/josh/repos/repros/src/index.ts was included by allowDefaultProjectForFiles but also was found in the project service. Consider removing it from allowDefaultProjectForFiles
```

### `npm run lint:fixed`

```plaintext
/Users/josh/repos/repros/.eslintrc.cjs
  5:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
```
