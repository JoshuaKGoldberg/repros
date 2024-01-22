# Repro: VSCode + ESLint Re-Parsing Type Information

Reproduction case for the [VSCode ESLint](https://github.com/microsoft/vscode-eslint) not triggering an ESLint re-parse of all files when one is changed.
The result is that type information is not re-computed for downstream files.
That can cause erroneous lint rule reports.

https://github.com/JoshuaKGoldberg/repros/assets/3335181/8d30ee60-3c5e-4d67-813d-20c4fb623bdf

## Setup

```shell
npm i
```

## Reproduction

1. Open in VS Code with the [ESLint extension](https://github.com/microsoft/vscode-eslint) enabled
2. Observe that `sink.ts` has a [``](https://typescript-eslint.io/rules/no-unsafe-assignment) ESLint error
3. Change the type in `source.ts` from `any` to `unknown`
4. Observe that `sink.ts` still has an ESLint error, even though `source.ts` was fixed.

Restarting the ESLint server at this point will cause the error to clear.
