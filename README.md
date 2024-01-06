# Repro: typescript-eslint and TypeScript's `AssertClause` & `AssertEntry` clashes

Minimum reproduction case for https://github.com/microsoft/TypeScript/issues/56954 <- https://github.com/typescript-eslint/typescript-eslint/issues/8047.

```shell
npm i
npm run tsc
```

```plaintext
node_modules/typescript/lib/typescript.d.ts:6021:15 - error TS2320: Interface 'AssertEntry' cannot simultaneously extend types 'ImportAttribute' and 'Node'.
  Named property 'kind' of types 'ImportAttribute' and 'Node' are not identical.

6021     interface AssertEntry extends ImportAttribute {
                   ~~~~~~~~~~~

node_modules/typescript/lib/typescript.d.ts:6021:15 - error TS2320: Interface 'AssertEntry' cannot simultaneously extend types 'ImportAttribute' and 'Node'.
  Named property 'parent' of types 'ImportAttribute' and 'Node' are not identical.

6021     interface AssertEntry extends ImportAttribute {
                   ~~~~~~~~~~~

node_modules/typescript/lib/typescript.d.ts:6024:15 - error TS2320: Interface 'AssertClause' cannot simultaneously extend types 'ImportAttributes' and 'Node'.
  Named property 'kind' of types 'ImportAttributes' and 'Node' are not identical.

6024     interface AssertClause extends ImportAttributes {
                   ~~~~~~~~~~~~

node_modules/typescript/lib/typescript.d.ts:6024:15 - error TS2320: Interface 'AssertClause' cannot simultaneously extend types 'ImportAttributes' and 'Node'.
  Named property 'parent' of types 'ImportAttributes' and 'Node' are not identical.

6024     interface AssertClause extends ImportAttributes {
                   ~~~~~~~~~~~~


Found 4 errors in the same file, starting at: node_modules/typescript/lib/typescript.d.ts:6021
```
