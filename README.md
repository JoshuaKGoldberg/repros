# Repro: TypeScript native API panics opening a file beside a composite project

Opening a file that isn't included by a sibling `composite: true` `tsconfig.json` makes the TypeScript 7.1 native process panic with a nil pointer dereference.
The same layout without `composite` resolves the file to an inferred project.

```plaintext
composite/
  outside.ts         (not included)
  src/index.ts
  tsconfig.json      ({ "compilerOptions": { "composite": true }, "include": ["src"] })
non-composite/
  outside.ts         (not included)
  src/index.ts
  tsconfig.json      ({ "include": ["src"] })
```

[`repro.js`](./repro.js) creates a snapshot with `outside.ts` open and asks for its default project.

## Setup

```shell
npm install
```

## Command Outputs

Versions: `typescript@7.1.0-dev.20261001.1`, Node.js 24.15.0, macOS arm64.

### `npm run repro:non-composite`

```plaintext
Default project for outside.ts: (an inferred project)
```

### `npm run repro:composite`

```plaintext
panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x2 addr=0x0 pc=0x100d6c064]

goroutine 141 [running]:
github.com/microsoft/TypeScript/tsc/internal/project/dirty.(*SyncMapEntry[...]).ChangeIf(0x1018dc480?, 0x715eb93a8960?, 0x30?)
	github.com/microsoft/TypeScript/tsc/internal/project/dirty/syncmap.go:128 +0x24
github.com/microsoft/TypeScript/tsc/internal/project.(*configFileRegistryBuilder).acquireConfigForFile(0x715eb94d6000, {0x715eb93a8900, 0x30}, {0x715eb93a8960, 0x30}, {0x715eb94ca150, 0x2d}, 0x0)
	github.com/microsoft/TypeScript/tsc/internal/project/configfileregistrybuilder.go:317 +0x200
github.com/microsoft/TypeScript/tsc/internal/project.(*configFileRegistryBuilder).findOrAcquireConfigForFile(0x715eb93a8900?, {0x715eb93a8900?, 0x715eb93efe48?}, {0x715eb93a8960?, 0x715eb9a60f08?}, {0x715eb94ca150?, 0x715eb93efea8?}, 0x715eb93efe20?, 0x715eb93efe88?)
	github.com/microsoft/TypeScript/tsc/internal/project/configfileregistrybuilder.go:139 +0x38
github.com/microsoft/TypeScript/tsc/internal/project.(*ProjectCollectionBuilder).findOrCreateDefaultConfiguredProjectWorker.func2({{0x715eb93a8900?, 0x101ced930?}, 0x715eb93a8900?, 0x0?})
	github.com/microsoft/TypeScript/tsc/internal/project/projectcollectionbuilder.go:1094 +0xa4
github.com/microsoft/TypeScript/tsc/internal/core.BreadthFirstSearchParallelEx[...].func1-range1.1(0x715ebae6e2d0)
	github.com/microsoft/TypeScript/tsc/internal/core/bfs.go:115 +0xfc
created by github.com/microsoft/TypeScript/tsc/internal/core.BreadthFirstSearchParallelEx[...].func1-range1 in goroutine 1
	github.com/microsoft/TypeScript/tsc/internal/core/bfs.go:100 +0x1c8

Error: Unexpected EOF while reading from child process (unknown reason)
    at SyncRpcChannel.eofError (node_modules/typescript/dist/api/syncChannel.js:398:16)
    ...
    at API.createSnapshot (node_modules/typescript/dist/api/sync/api.js:361:39)
```

This came up in typescript-eslint's experimental native backend ([typescript-eslint#12803](https://github.com/typescript-eslint/typescript-eslint/pull/12803)), linting files such as `astro.config.ts` in a monorepo package whose `tsconfig.json` is composite.
After the panic, every later request fails with `EPIPE`.
