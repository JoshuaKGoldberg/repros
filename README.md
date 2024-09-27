# Repro: 'export type' in typescript-eslint with TypeScript@4

```shell
npm i
npm run tsc
```

```plaintext
node_modules/@typescript-eslint/scope-manager/dist/definition/index.d.ts:3:1 - error TS1383: Only named exports may use 'export type'.

3 export type * from './Definition';
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@typescript-eslint/scope-manager/dist/scope/index.d.ts:13:1 - error TS1383: Only named exports may use 'export type'.

13 export type * from './Scope';
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@typescript-eslint/types/dist/index.d.ts:2:1 - error TS1383: Only named exports may use 'export type'.

2 export type * from './lib';
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@typescript-eslint/types/dist/index.d.ts:3:1 - error TS1383: Only named exports may use 'export type'.

3 export type * from './parser-options';
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```
