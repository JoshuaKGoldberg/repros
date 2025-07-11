# `ts-ast-to-literal` with ESM Importing

Reproduction of [`ts-ast-to-literal`](https://github.com/dword-design/ts-ast-to-literal) type errors in a `"type": "module"` package.

```shell
npm i
npm run tsc
```

```plaintext
index.ts:1:22 - error TS7016: Could not find a declaration file for module 'ts-ast-to-literal'. '/Users/josh/repos/repros/node_modules/ts-ast-to-literal/dist/index.js' implicitly has an 'any' type.
  There are types at '/Users/josh/repos/repros/node_modules/ts-ast-to-literal/types.d.ts', but this result could not be resolved when respecting package.json "exports". The 'ts-ast-to-literal' library may need to update its package.json or typings.

1 import traverse from "ts-ast-to-literal";
                       ~~~~~~~~~~~~~~~~~~~


Found 1 error in index.ts:1
```

Additionally:

```shell
npx @arethetypeswrong/cli -p ts-ast-to-literal
```

```plaintext

ts-ast-to-literal v4.0.0

Build tools:
- typescript@^5.3.3

❌ Import resolved to JavaScript files, but no type declarations were found. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/UntypedResolution.md

⚠️ A require call resolved to an ESM JavaScript file, which is an error in Node and some bundlers. CommonJS consumers will need to use a dynamic import. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/CJSResolvesToESM.md


┌───────────────────┬──────────────────────────────┐
│                   │ "ts-ast-to-literal"          │
├───────────────────┼──────────────────────────────┤
│ node10            │ 🟢                           │
├───────────────────┼──────────────────────────────┤
│ node16 (from CJS) │ ❌ No types                  │
│                   │ ⚠️ ESM (dynamic import only) │
├───────────────────┼──────────────────────────────┤
│ node16 (from ESM) │ ❌ No types                  │
├───────────────────┼──────────────────────────────┤
│ bundler           │ ❌ No types                  │
└───────────────────┴──────────────────────────────┘
```
