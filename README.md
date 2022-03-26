# Repros

Reproduction cases for open source issues I find online.
See [branches](https://github.com/JoshuaKGoldberg/repros/branches).

## TypeScript ESLint Performance with `typescript.js`

Run these commands to set up the repository and then time linting:

```shell
npm i
npm run lint
```

On my Surface Laptop 4, WSL 2.0 Ubuntu on Windows 10:

```
$ npm run lint

> eslint-repro@0.1.0 lint
> DEBUG=typescript-eslint* time eslint --max-warnings 0 --ext .ts src

  typescript-eslint:typescript-estree:parser parserOptions.project (excluding ignored) matched projects: Set(1) { '/home/josh/repos/repros/tsconfig.json' } +0ms
  typescript-eslint:typescript-estree:createProjectProgram Creating project program for: /home/josh/repos/repros/src/index.ts +0ms
  typescript-eslint:typescript-estree:createWatchProgram File did not belong to any existing programs, moving to create/update. /home/josh/repos/repros/src/index.ts +0ms
  typescript-eslint:typescript-estree:createWatchProgram Creating watch program for /home/josh/repos/repros/tsconfig.json. +0ms
  typescript-eslint:typescript-estree:createWatchProgram Found program for file. /home/josh/repos/repros/src/index.ts +1s
  typescript-eslint:parser:parser Resolved libs from program: [ 'esnext.full' ] +0ms
  typescript-eslint:typescript-estree:parser parserOptions.project (excluding ignored) matched projects: Set(1) { '/home/josh/repos/repros/tsconfig.json' } +1s
  typescript-eslint:typescript-estree:createProjectProgram Creating project program for: /home/josh/repos/repros/src/parsing.ts +1s
  typescript-eslint:typescript-estree:createWatchProgram Found existing program for file. /home/josh/repos/repros/src/parsing.ts +104ms
  typescript-eslint:parser:parser Resolved libs from program: [ 'esnext.full' ] +119ms
  typescript-eslint:typescript-estree:createIsolatedProgram Getting isolated program in TS mode for: /home/josh/repos/repros/node_modules/typescript/lib/typescript.js +0ms
  typescript-eslint:typescript-estree:createIsolatedProgram Getting isolated program in TS mode for: /home/josh/repos/repros/node_modules/typescript/lib/typescript.js +9s
  typescript-eslint:typescript-estree:createIsolatedProgram Getting isolated program in TS mode for: /home/josh/repos/repros/node_modules/typescript/lib/typescript.js +7s
  typescript-eslint:typescript-estree:parser parserOptions.project (excluding ignored) matched projects: Set(1) { '/home/josh/repos/repros/tsconfig.json' } +25s
  typescript-eslint:typescript-estree:createProjectProgram Creating project program for: /home/josh/repos/repros/src/public.ts +25s
  typescript-eslint:typescript-estree:createWatchProgram Found existing program for file. /home/josh/repos/repros/src/public.ts +25s
  typescript-eslint:parser:parser Resolved libs from program: [ 'esnext.full' ] +25s
  typescript-eslint:typescript-estree:parser parserOptions.project (excluding ignored) matched projects: Set(1) { '/home/josh/repos/repros/tsconfig.json' } +55ms
  typescript-eslint:typescript-estree:createProjectProgram Creating project program for: /home/josh/repos/repros/src/service.ts +54ms
  typescript-eslint:typescript-estree:createWatchProgram Found existing program for file. /home/josh/repos/repros/src/service.ts +53ms
  typescript-eslint:parser:parser Resolved libs from program: [ 'esnext.full' ] +53ms
  typescript-eslint:typescript-estree:createIsolatedProgram Getting isolated program in TS mode for: /home/josh/repos/repros/node_modules/typescript/lib/typescript.js +9s
  typescript-eslint:typescript-estree:createIsolatedProgram Getting isolated program in TS mode for: /home/josh/repos/repros/node_modules/typescript/lib/typescript.js +7s
  typescript-eslint:typescript-estree:createIsolatedProgram Getting isolated program in TS mode for: /home/josh/repos/repros/node_modules/typescript/lib/typescript.js +7s
61.08user 4.18system 0:48.81elapsed 133%CPU (0avgtext+0avgdata 2790708maxresident)k
2680inputs+9512outputs (0major+1539531minor)pagefaults 0swaps
```
