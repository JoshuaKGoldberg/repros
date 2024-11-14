# Repro: astro-eslint-parser and tseslint projectService

```shell
npm i
npm run lint
```

```plaintext
`astro-eslint-parser` does not support the `projectService` option, it will parse it as `project: true` instead.

/Users/josh/repos/repros/src/index.astro
  1:1  error  Parsing error: Type expected

✖ 1 problem (1 error, 0 warnings)
```

## Initial Debugging

The `code` being passed to `tsEslint.parseForESLint` is the raw Astro syntax: `<h1>Hello, world!</h1>`:

```js
// console.log("/* Parsing in parseTsxForTypeScript: */", { code, parserOptions });
/* Parsing in parseTsxForTypeScript: */ {
  code: '<><h1>Hello, world!</h1>\n</>;',
  parserOptions: {
    ecmaVersion: 2025,
    sourceType: 'module',
    loc: true,
    range: true,
    raw: true,
    tokens: true,
    comment: true,
    eslintVisitorKeys: true,
    parser: {
      parse: [Getter],
      parseForESLint: [Getter],
      clearCaches: [Getter],
      createProgram: [Getter],
      withoutProjectParserOptions: [Getter],
      version: '8.14.0',
      meta: [Object]
    },
    extraFileExtensions: [ '.astro' ],
    projectService: true,
    eslintScopeManager: true,
    filePath: '/Users/josh/repos/repros/src/index.astro',
    ecmaFeatures: { jsx: true },
    project: true,
    programs: [ [Object] ]
  }
}
```

From `DEBUG=* npx eslint index.astro`:

```plaintext
$ DEBUG=* npm run lint

> lint
> eslint src/index.astro

  eslint:cli CLI args: [ 'src/index.astro' ] +0ms
  eslint:cli Using flat config? true +1ms
  eslint:cli Running on files +3ms
  eslint:eslint Using config loader LegacyConfigLoader +0ms
  eslint:eslint Using file patterns: src/index.astro +0ms
  eslint:eslint Deleting cache file at /Users/josh/repos/repros/.eslintcache +0ms
  eslint:eslint 1 files found in: 1ms +1ms
  eslint:config-loader Calculating config for file /Users/josh/repos/repros/src/index.astro +0ms
  eslint:config-loader Searching for eslint.config.js +0ms
  eslint:config-loader [Legacy]: Calculating config for /Users/josh/repos/repros/src/index.astro +1ms
  eslint:config-loader [Legacy]: Using config file /Users/josh/repos/repros/eslint.config.js and base path /Users/josh/repos/repros +0ms
  eslint:config-loader Calculating config array from config file /Users/josh/repos/repros/eslint.config.js and base path /Users/josh/repos/repros +0ms
  eslint:config-loader Loading config file /Users/josh/repos/repros/eslint.config.js +0ms
  eslint:config-loader Loading config from /Users/josh/repos/repros/eslint.config.js +0ms
  eslint:config-loader Config file URL is file:///Users/josh/repos/repros/eslint.config.js +0ms
  @eslint/config-array Anonymous universal config found for /Users/josh/repos/repros/src/index.astro +0ms
  @eslint/config-array Skipped config found for /Users/josh/repos/repros/src/index.astro (based on ignores: **/node_modules/,.git/) +0ms
  @eslint/config-array Anonymous universal config found for /Users/josh/repos/repros/src/index.astro +1ms
  @eslint/config-array Matching config found for /Users/josh/repos/repros/src/index.astro +0ms
  @eslint/config-array Anonymous universal config found for /Users/josh/repos/repros/src/index.astro +0ms
  @eslint/config-array Matching config found for /Users/josh/repos/repros/src/index.astro +0ms
  @eslint/config-array Anonymous universal config found for /Users/josh/repos/repros/src/index.astro +0ms
  eslint:eslint Lint /Users/josh/repos/repros/src/index.astro +231ms
  eslint:linter Linting code for /Users/josh/repos/repros/src/index.astro (pass 1) +0ms
  eslint:linter Verify +0ms
  eslint:linter With flat config: /Users/josh/repos/repros/src/index.astro +0ms
  eslint:linter Apply the processor: { preprocess: [Function: preprocess], postprocess: [Function: postprocess], supportsAutofix: true, meta: { name: 'astro/client-side-ts', version: '1.3.1' } } +0ms
  eslint:linter A code block was found: '(unnamed)' +52ms
  eslint:languages:js Parsing: /Users/josh/repos/repros/src/index.astro +0ms
`astro-eslint-parser` does not support the `projectService` option, it will parse it as `project: true` instead.
  typescript-eslint:typescript-estree:createProjectService Creating project service with: { defaultProject: 'tsconfig.json' } +0ms
  typescript-eslint:typescript-estree:createProjectService Enabling default project: tsconfig.json +1ms
  typescript-eslint:typescript-estree:parser:parseSettings:createParseSettings parserOptions.programs was provided, so parserOptions.project will be ignored. +0ms
  typescript-eslint:typescript-estree:useProgramFromProjectService Updating extra file extensions: before=[]: after=[ '.astro' ] +0ms
  typescript-eslint:typescript-estree:tsserver:info reload projects. +0ms
  typescript-eslint:typescript-estree:tsserver:info Before ensureProjectForOpenFiles: +0ms
  typescript-eslint:typescript-estree:tsserver:info Open files:  +0ms
  typescript-eslint:typescript-estree:tsserver:info After ensureProjectForOpenFiles: +0ms
  typescript-eslint:typescript-estree:tsserver:info Open files:  +0ms
  typescript-eslint:typescript-estree:tsserver:info After reloading projects.. +0ms
  typescript-eslint:typescript-estree:tsserver:info Open files:  +0ms
  typescript-eslint:typescript-estree:tsserver:info Host file extension mappings updated +0ms
  typescript-eslint:typescript-estree:useProgramFromProjectService Extra file extensions updated: [ '.astro' ] +1ms
  typescript-eslint:typescript-estree:useProgramFromProjectService Opening project service file for: /Users/josh/repos/repros/src/index.astro at absolute path /Users/josh/repos/repros/src/index.astro +0ms
  typescript-eslint:typescript-estree:useProgramFromProjectService Opening project service client file at path: /Users/josh/repos/repros/src/index.astro +0ms
  typescript-eslint:typescript-estree:tsserver:info getConfigFileNameForFile:: File: /Users/josh/repos/repros/src/index.astro ProjectRootPath: /Users/josh/repos/repros:: Result: /Users/josh/repos/repros/tsconfig.json +1ms
  typescript-eslint:typescript-estree:tsserver:info Creating configuration project /Users/josh/repos/repros/tsconfig.json +0ms
  typescript-eslint:typescript-estree:tsserver:info FileWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/tsconfig.json 2000 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: Config file +1ms
  typescript-eslint:typescript-estree:tsserver:event {
  typescript-eslint:typescript-estree:tsserver:event   eventName: 'projectLoadingStart',
  typescript-eslint:typescript-estree:tsserver:event   data: {
  typescript-eslint:typescript-estree:tsserver:event     project: ConfiguredProject2 {
  typescript-eslint:typescript-estree:tsserver:event       projectKind: 1,
  typescript-eslint:typescript-estree:tsserver:event       projectService: [_ProjectService],
  typescript-eslint:typescript-estree:tsserver:event       documentRegistry: [Object],
  typescript-eslint:typescript-estree:tsserver:event       compilerOptions: [Object],
  typescript-eslint:typescript-estree:tsserver:event       compileOnSaveEnabled: false,
  typescript-eslint:typescript-estree:tsserver:event       watchOptions: undefined,
  typescript-eslint:typescript-estree:tsserver:event       rootFilesMap: Map(0) {},
  typescript-eslint:typescript-estree:tsserver:event       plugins: [],
  typescript-eslint:typescript-estree:tsserver:event       cachedUnresolvedImportsPerFile: Map(0) {},
  typescript-eslint:typescript-estree:tsserver:event       hasAddedorRemovedFiles: false,
  typescript-eslint:typescript-estree:tsserver:event       hasAddedOrRemovedSymlinks: false,
  typescript-eslint:typescript-estree:tsserver:event       lastReportedVersion: 0,
  typescript-eslint:typescript-estree:tsserver:event       projectProgramVersion: 0,
  typescript-eslint:typescript-estree:tsserver:event       projectStateVersion: 1,
  typescript-eslint:typescript-estree:tsserver:event       isInitialLoadPending: [Function: returnFalse],
  typescript-eslint:typescript-estree:tsserver:event       dirty: true,
  typescript-eslint:typescript-estree:tsserver:event       typingFiles: [],
  typescript-eslint:typescript-estree:tsserver:event       moduleSpecifierCache: [Object],
  typescript-eslint:typescript-estree:tsserver:event       createHash: [Function: bound createSHA256Hash],
  typescript-eslint:typescript-estree:tsserver:event       globalCacheResolutionModuleName: [Function: nonRelativeModuleNameForTypingCache],
  typescript-eslint:typescript-estree:tsserver:event       updateFromProjectInProgress: false,
  typescript-eslint:typescript-estree:tsserver:event       projectName: '/Users/josh/repos/repros/tsconfig.json',
  typescript-eslint:typescript-estree:tsserver:event       directoryStructureHost: [Object],
  typescript-eslint:typescript-estree:tsserver:event       currentDirectory: '/Users/josh/repos/repros',
  typescript-eslint:typescript-estree:tsserver:event       getCanonicalFileName: [Function: toFileNameLowerCase],
  typescript-eslint:typescript-estree:tsserver:event       jsDocParsingMode: 0,
  typescript-eslint:typescript-estree:tsserver:event       cancellationToken: [ThrottledCancellationToken],
  typescript-eslint:typescript-estree:tsserver:event       languageServiceEnabled: true,
  typescript-eslint:typescript-estree:tsserver:event       trace: [Function (anonymous)],
  typescript-eslint:typescript-estree:tsserver:event       realpath: [Function: bound realpath],
  typescript-eslint:typescript-estree:tsserver:event       preferNonRecursiveWatch: false,
  typescript-eslint:typescript-estree:tsserver:event       resolutionCache: [Object],
  typescript-eslint:typescript-estree:tsserver:event       languageService: [Object],
  typescript-eslint:typescript-estree:tsserver:event       canonicalConfigFilePath: '/users/josh/repos/repros/tsconfig.json',
  typescript-eslint:typescript-estree:tsserver:event       openFileWatchTriggered: Map(0) {},
  typescript-eslint:typescript-estree:tsserver:event       canConfigFileJsonReportNoInputFiles: false,
  typescript-eslint:typescript-estree:tsserver:event       sendLoadingProjectFinish: true,
  typescript-eslint:typescript-estree:tsserver:event       pendingUpdateLevel: 0,
  typescript-eslint:typescript-estree:tsserver:event       pendingUpdateReason: undefined,
  typescript-eslint:typescript-estree:tsserver:event       triggerFileForConfigFileDiag: '/Users/josh/repos/repros/src/index.astro'
  typescript-eslint:typescript-estree:tsserver:event     },
  typescript-eslint:typescript-estree:tsserver:event     reason: 'Creating possible configured project for /Users/josh/repos/repros/src/index.astro to open'
  typescript-eslint:typescript-estree:tsserver:event   }
  typescript-eslint:typescript-estree:tsserver:event } +0ms
  typescript-eslint:typescript-estree:tsserver:info Config: /Users/josh/repos/repros/tsconfig.json : {
  typescript-eslint:typescript-estree:tsserver:info  "rootNames": [
  typescript-eslint:typescript-estree:tsserver:info   "/Users/josh/repos/repros/src/index.astro",
  typescript-eslint:typescript-estree:tsserver:info   "/Users/josh/repos/repros/src/unused.ts"
  typescript-eslint:typescript-estree:tsserver:info  ],
  typescript-eslint:typescript-estree:tsserver:info  "options": {
  typescript-eslint:typescript-estree:tsserver:info   "jsx": 1,
  typescript-eslint:typescript-estree:tsserver:info   "strict": true,
  typescript-eslint:typescript-estree:tsserver:info   "configFilePath": "/Users/josh/repos/repros/tsconfig.json"
  typescript-eslint:typescript-estree:tsserver:info  }
  typescript-eslint:typescript-estree:tsserver:info } +2ms
  typescript-eslint:typescript-estree:tsserver:info DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/src 1 undefined Config: /Users/josh/repos/repros/tsconfig.json WatchType: Wild card directory +1ms
  typescript-eslint:typescript-estree:tsserver:info Elapsed:: 0.0030829999999468782ms DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/src 1 undefined Config: /Users/josh/repos/repros/tsconfig.json WatchType: Wild card directory +0ms
  typescript-eslint:typescript-estree:tsserver:info FileWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/src/unused.ts 500 undefined WatchType: Closed Script info +0ms
  typescript-eslint:typescript-estree:tsserver:info Starting updateGraphWorker: Project: /Users/josh/repos/repros/tsconfig.json +0ms
  typescript-eslint:typescript-estree:tsserver:info FileWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/node_modules/@types/estree/package.json 2000 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: File location affecting resolution +4ms
  typescript-eslint:typescript-estree:tsserver:info FileWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/node_modules/@types/json-schema/package.json 2000 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: File location affecting resolution +0ms
  typescript-eslint:typescript-estree:tsserver:info DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache +0ms
  typescript-eslint:typescript-estree:tsserver:info Elapsed:: 0.003375000000005457ms DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache +0ms
  typescript-eslint:typescript-estree:tsserver:info DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/node_modules 1 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: Failed Lookup Locations +7ms
  typescript-eslint:typescript-estree:tsserver:info Elapsed:: 0.0026250000000800355ms DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/node_modules 1 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: Failed Lookup Locations +0ms
  typescript-eslint:typescript-estree:tsserver:info DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/node_modules 1 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: Failed Lookup Locations +0ms
  typescript-eslint:typescript-estree:tsserver:info Elapsed:: 0.009208000000057837ms DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/node_modules 1 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: Failed Lookup Locations +0ms
  typescript-eslint:typescript-estree:tsserver:info FileWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/node_modules/typescript/lib/package.json 2000 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: File location affecting resolution +86ms
  typescript-eslint:typescript-estree:tsserver:info FileWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/node_modules/typescript/package.json 2000 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: File location affecting resolution +0ms
  typescript-eslint:typescript-estree:tsserver:info DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/node_modules/@types 1 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: Type roots +1ms
  typescript-eslint:typescript-estree:tsserver:info Elapsed:: 0.00483299999996234ms DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/repros/node_modules/@types 1 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: Type roots +0ms
  typescript-eslint:typescript-estree:tsserver:info DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/node_modules/@types 1 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: Type roots +0ms
  typescript-eslint:typescript-estree:tsserver:info Elapsed:: 0.0007080000000314612ms DirectoryWatcher:: Added:: WatchInfo: /Users/josh/repos/node_modules/@types 1 undefined Project: /Users/josh/repos/repros/tsconfig.json WatchType: Type roots +0ms
  typescript-eslint:typescript-estree:tsserver:info Finishing updateGraphWorker: Project: /Users/josh/repos/repros/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed: 97.301334ms +0ms
  typescript-eslint:typescript-estree:tsserver:info Project '/Users/josh/repos/repros/tsconfig.json' (Configured) +0ms
  typescript-eslint:typescript-estree:tsserver:info     Files (11)
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/node_modules/typescript/lib/lib.d.ts
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/node_modules/typescript/lib/lib.es5.d.ts
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/node_modules/typescript/lib/lib.dom.d.ts
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/node_modules/typescript/lib/lib.webworker.importscripts.d.ts
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/node_modules/typescript/lib/lib.scripthost.d.ts
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/node_modules/typescript/lib/lib.decorators.d.ts
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/node_modules/typescript/lib/lib.decorators.legacy.d.ts
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/src/index.astro
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/src/unused.ts
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/node_modules/@types/estree/index.d.ts
  typescript-eslint:typescript-estree:tsserver:info     /Users/josh/repos/repros/node_modules/@types/json-schema/index.d.ts
  typescript-eslint:typescript-estree:tsserver:info
  typescript-eslint:typescript-estree:tsserver:info
  typescript-eslint:typescript-estree:tsserver:info     node_modules/typescript/lib/lib.d.ts
  typescript-eslint:typescript-estree:tsserver:info       Default library for target 'es5'
  typescript-eslint:typescript-estree:tsserver:info     node_modules/typescript/lib/lib.es5.d.ts
  typescript-eslint:typescript-estree:tsserver:info       Library referenced via 'es5' from file 'node_modules/typescript/lib/lib.d.ts'
  typescript-eslint:typescript-estree:tsserver:info     node_modules/typescript/lib/lib.dom.d.ts
  typescript-eslint:typescript-estree:tsserver:info       Library referenced via 'dom' from file 'node_modules/typescript/lib/lib.d.ts'
  typescript-eslint:typescript-estree:tsserver:info     node_modules/typescript/lib/lib.webworker.importscripts.d.ts
  typescript-eslint:typescript-estree:tsserver:info       Library referenced via 'webworker.importscripts' from file 'node_modules/typescript/lib/lib.d.ts'
  typescript-eslint:typescript-estree:tsserver:info     node_modules/typescript/lib/lib.scripthost.d.ts
  typescript-eslint:typescript-estree:tsserver:info       Library referenced via 'scripthost' from file 'node_modules/typescript/lib/lib.d.ts'
  typescript-eslint:typescript-estree:tsserver:info     node_modules/typescript/lib/lib.decorators.d.ts
  typescript-eslint:typescript-estree:tsserver:info       Library referenced via 'decorators' from file 'node_modules/typescript/lib/lib.es5.d.ts'
  typescript-eslint:typescript-estree:tsserver:info     node_modules/typescript/lib/lib.decorators.legacy.d.ts
  typescript-eslint:typescript-estree:tsserver:info       Library referenced via 'decorators.legacy' from file 'node_modules/typescript/lib/lib.es5.d.ts'
  typescript-eslint:typescript-estree:tsserver:info     src/index.astro
  typescript-eslint:typescript-estree:tsserver:info       Matched by include pattern 'src' in 'tsconfig.json'
  typescript-eslint:typescript-estree:tsserver:info     src/unused.ts
  typescript-eslint:typescript-estree:tsserver:info       Matched by include pattern 'src' in 'tsconfig.json'
  typescript-eslint:typescript-estree:tsserver:info     node_modules/@types/estree/index.d.ts
  typescript-eslint:typescript-estree:tsserver:info       Entry point for implicit type library 'estree' with packageId '@types/estree/index.d.ts@1.0.6'
  typescript-eslint:typescript-estree:tsserver:info     node_modules/@types/json-schema/index.d.ts
  typescript-eslint:typescript-estree:tsserver:info       Entry point for implicit type library 'json-schema' with packageId '@types/json-schema/index.d.ts@7.0.15'
  typescript-eslint:typescript-estree:tsserver:info  +1ms
  typescript-eslint:typescript-estree:tsserver:info ----------------------------------------------- +0ms
  typescript-eslint:typescript-estree:tsserver:event {
  typescript-eslint:typescript-estree:tsserver:event   eventName: 'projectLoadingFinish',
  typescript-eslint:typescript-estree:tsserver:event   data: {
  typescript-eslint:typescript-estree:tsserver:event     project: ConfiguredProject2 {
  typescript-eslint:typescript-estree:tsserver:event       projectKind: 1,
  typescript-eslint:typescript-estree:tsserver:event       projectService: [_ProjectService],
  typescript-eslint:typescript-estree:tsserver:event       documentRegistry: [Object],
  typescript-eslint:typescript-estree:tsserver:event       compilerOptions: [Object],
  typescript-eslint:typescript-estree:tsserver:event       compileOnSaveEnabled: false,
  typescript-eslint:typescript-estree:tsserver:event       watchOptions: undefined,
  typescript-eslint:typescript-estree:tsserver:event       rootFilesMap: [Map],
  typescript-eslint:typescript-estree:tsserver:event       plugins: [],
  typescript-eslint:typescript-estree:tsserver:event       cachedUnresolvedImportsPerFile: [Map],
  typescript-eslint:typescript-estree:tsserver:event       hasAddedorRemovedFiles: false,
  typescript-eslint:typescript-estree:tsserver:event       hasAddedOrRemovedSymlinks: false,
  typescript-eslint:typescript-estree:tsserver:event       lastReportedVersion: 0,
  typescript-eslint:typescript-estree:tsserver:event       projectProgramVersion: 1,
  typescript-eslint:typescript-estree:tsserver:event       projectStateVersion: 1,
  typescript-eslint:typescript-estree:tsserver:event       isInitialLoadPending: [Function: returnFalse],
  typescript-eslint:typescript-estree:tsserver:event       dirty: false,
  typescript-eslint:typescript-estree:tsserver:event       typingFiles: [],
  typescript-eslint:typescript-estree:tsserver:event       moduleSpecifierCache: [Object],
  typescript-eslint:typescript-estree:tsserver:event       createHash: [Function: bound createSHA256Hash],
  typescript-eslint:typescript-estree:tsserver:event       globalCacheResolutionModuleName: [Function: nonRelativeModuleNameForTypingCache],
  typescript-eslint:typescript-estree:tsserver:event       updateFromProjectInProgress: false,
  typescript-eslint:typescript-estree:tsserver:event       projectName: '/Users/josh/repos/repros/tsconfig.json',
  typescript-eslint:typescript-estree:tsserver:event       directoryStructureHost: [Object],
  typescript-eslint:typescript-estree:tsserver:event       currentDirectory: '/Users/josh/repos/repros',
  typescript-eslint:typescript-estree:tsserver:event       getCanonicalFileName: [Function: toFileNameLowerCase],
  typescript-eslint:typescript-estree:tsserver:event       jsDocParsingMode: 0,
  typescript-eslint:typescript-estree:tsserver:event       cancellationToken: [ThrottledCancellationToken],
  typescript-eslint:typescript-estree:tsserver:event       languageServiceEnabled: true,
  typescript-eslint:typescript-estree:tsserver:event       trace: [Function (anonymous)],
  typescript-eslint:typescript-estree:tsserver:event       realpath: [Function: bound realpath],
  typescript-eslint:typescript-estree:tsserver:event       preferNonRecursiveWatch: false,
  typescript-eslint:typescript-estree:tsserver:event       resolutionCache: [Object],
  typescript-eslint:typescript-estree:tsserver:event       languageService: [Object],
  typescript-eslint:typescript-estree:tsserver:event       canonicalConfigFilePath: '/users/josh/repos/repros/tsconfig.json',
  typescript-eslint:typescript-estree:tsserver:event       openFileWatchTriggered: Map(0) {},
  typescript-eslint:typescript-estree:tsserver:event       canConfigFileJsonReportNoInputFiles: true,
  typescript-eslint:typescript-estree:tsserver:event       sendLoadingProjectFinish: false,
  typescript-eslint:typescript-estree:tsserver:event       pendingUpdateLevel: 0,
  typescript-eslint:typescript-estree:tsserver:event       pendingUpdateReason: undefined,
  typescript-eslint:typescript-estree:tsserver:event       triggerFileForConfigFileDiag: '/Users/josh/repos/repros/src/index.astro',
  typescript-eslint:typescript-estree:tsserver:event       projectOptions: [Object],
  typescript-eslint:typescript-estree:tsserver:event       projectErrors: [],
  typescript-eslint:typescript-estree:tsserver:event       projectReferences: undefined,
  typescript-eslint:typescript-estree:tsserver:event       potentialProjectReferences: undefined,
  typescript-eslint:typescript-estree:tsserver:event       lastCachedUnresolvedImportsList: [],
  typescript-eslint:typescript-estree:tsserver:event       typeAcquisition: [Object],
  typescript-eslint:typescript-estree:tsserver:event       hasInvalidatedResolutions: [Function: hasInvalidatedResolutions],
  typescript-eslint:typescript-estree:tsserver:event       hasInvalidatedLibResolutions: [Function: hasInvalidatedLibResolutions],
  typescript-eslint:typescript-estree:tsserver:event       compilerHost: undefined,
  typescript-eslint:typescript-estree:tsserver:event       symlinks: [Object],
  typescript-eslint:typescript-estree:tsserver:event       program: [Object],
  typescript-eslint:typescript-estree:tsserver:event       missingFilesMap: Map(0) {},
  typescript-eslint:typescript-estree:tsserver:event       externalFiles: [],
  typescript-eslint:typescript-estree:tsserver:event       autoImportProviderHost: undefined
  typescript-eslint:typescript-estree:tsserver:event     }
  typescript-eslint:typescript-estree:tsserver:event   }
  typescript-eslint:typescript-estree:tsserver:event } +102ms
  typescript-eslint:typescript-estree:tsserver:event {
  typescript-eslint:typescript-estree:tsserver:event   eventName: 'projectInfo',
  typescript-eslint:typescript-estree:tsserver:event   data: {
  typescript-eslint:typescript-estree:tsserver:event     projectId: '763e553426fa6062630af84dc8d9f48b28fbef3d472b24a719cf964a5df76a51',
  typescript-eslint:typescript-estree:tsserver:event     fileStats: {
  typescript-eslint:typescript-estree:tsserver:event       js: 0,
  typescript-eslint:typescript-estree:tsserver:event       jsSize: 0,
  typescript-eslint:typescript-estree:tsserver:event       jsx: 0,
  typescript-eslint:typescript-estree:tsserver:event       jsxSize: 0,
  typescript-eslint:typescript-estree:tsserver:event       ts: 1,
  typescript-eslint:typescript-estree:tsserver:event       tsSize: 30,
  typescript-eslint:typescript-estree:tsserver:event       tsx: 0,
  typescript-eslint:typescript-estree:tsserver:event       tsxSize: 0,
  typescript-eslint:typescript-estree:tsserver:event       dts: 9,
  typescript-eslint:typescript-estree:tsserver:event       dtsSize: 1594468,
  typescript-eslint:typescript-estree:tsserver:event       deferred: 0,
  typescript-eslint:typescript-estree:tsserver:event       deferredSize: 0
  typescript-eslint:typescript-estree:tsserver:event     },
  typescript-eslint:typescript-estree:tsserver:event     compilerOptions: { jsx: 'preserve', strict: true },
  typescript-eslint:typescript-estree:tsserver:event     typeAcquisition: { enable: false, include: false, exclude: false },
  typescript-eslint:typescript-estree:tsserver:event     extends: false,
  typescript-eslint:typescript-estree:tsserver:event     files: false,
  typescript-eslint:typescript-estree:tsserver:event     include: true,
  typescript-eslint:typescript-estree:tsserver:event     exclude: false,
  typescript-eslint:typescript-estree:tsserver:event     compileOnSave: false,
  typescript-eslint:typescript-estree:tsserver:event     configFileName: 'tsconfig.json',
  typescript-eslint:typescript-estree:tsserver:event     projectType: 'configured',
  typescript-eslint:typescript-estree:tsserver:event     languageServiceEnabled: true,
  typescript-eslint:typescript-estree:tsserver:event     version: '5.6.3'
  typescript-eslint:typescript-estree:tsserver:event   }
  typescript-eslint:typescript-estree:tsserver:event } +1ms
  typescript-eslint:typescript-estree:tsserver:event {
  typescript-eslint:typescript-estree:tsserver:event   eventName: 'configFileDiag',
  typescript-eslint:typescript-estree:tsserver:event   data: {
  typescript-eslint:typescript-estree:tsserver:event     configFileName: '/Users/josh/repos/repros/tsconfig.json',
  typescript-eslint:typescript-estree:tsserver:event     diagnostics: [],
  typescript-eslint:typescript-estree:tsserver:event     triggerFile: '/Users/josh/repos/repros/src/index.astro'
  typescript-eslint:typescript-estree:tsserver:event   }
  typescript-eslint:typescript-estree:tsserver:event } +1ms
  typescript-eslint:typescript-estree:tsserver:info Project '/Users/josh/repos/repros/tsconfig.json' (Configured) +2ms
  typescript-eslint:typescript-estree:tsserver:info     Files (11)
  typescript-eslint:typescript-estree:tsserver:info  +0ms
  typescript-eslint:typescript-estree:tsserver:info ----------------------------------------------- +0ms
  typescript-eslint:typescript-estree:tsserver:info Open files:  +0ms
  typescript-eslint:typescript-estree:tsserver:info     FileName: /Users/josh/repos/repros/src/index.astro ProjectRootPath: /Users/josh/repos/repros +0ms
  typescript-eslint:typescript-estree:tsserver:info             Projects: /Users/josh/repos/repros/tsconfig.json +0ms
  typescript-eslint:typescript-estree:useProgramFromProjectService Result from attempting to open client file: { configFileName: '/Users/josh/repos/repros/tsconfig.json', configFileErrors: [] } +106ms
  typescript-eslint:typescript-estree:useProgramFromProjectService Default project allowed path: false, based on config file: /Users/josh/repos/repros/tsconfig.json +0ms
  typescript-eslint:typescript-estree:useProgramFromProjectService Opened project service file: { configFileName: '/Users/josh/repos/repros/tsconfig.json', configFileErrors: [] } +0ms
  typescript-eslint:typescript-estree:useProgramFromProjectService Retrieving script info and then program for: /Users/josh/repos/repros/src/index.astro +0ms
  typescript-eslint:typescript-estree:useProgramFromProjectService Found project service program for: /Users/josh/repos/repros/src/index.astro +1ms
  typescript-eslint:typescript-estree:createProjectProgram Creating project program for: /Users/josh/repos/repros/src/index.astro +0ms
  astro-eslint-parser [script] parsing error: Type expected. @ "<><h1>Hello, world!</h1>\n</>;"

<><h1>Hello, world!</h1>
</>; +0ms
  eslint:languages:js Type expected.
  eslint:languages:js TSError: Type expected.
    at createError (/Users/josh/repos/repros/node_modules/@typescript-eslint/typescript-estree/dist/node-utils.js:619:12)
    at convertError (/Users/josh/repos/repros/node_modules/@typescript-eslint/typescript-estree/dist/convert.js:41:41)
    at astConverter (/Users/josh/repos/repros/node_modules/@typescript-eslint/typescript-estree/dist/ast-converter.js:15:42)
    at parseAndGenerateServices (/Users/josh/repos/repros/node_modules/@typescript-eslint/typescript-estree/dist/parser.js:162:66)
    at Object.parseForESLint (/Users/josh/repos/repros/node_modules/@typescript-eslint/parser/dist/parser.js:99:80)
    at parseTsxForTypeScript (/Users/josh/repos/repros/node_modules/astro-eslint-parser/lib/index.js:356:25)
    at Object.parse (/Users/josh/repos/repros/node_modules/astro-eslint-parser/lib/index.js:437:14)
    at parseScriptInternal (/Users/josh/repos/repros/node_modules/astro-eslint-parser/lib/index.js:899:86)
    at parseScript (/Users/josh/repos/repros/node_modules/astro-eslint-parser/lib/index.js:853:18)
    at parseForESLint (/Users/josh/repos/repros/node_modules/astro-eslint-parser/lib/index.js:2734:24) +277ms
  eslint:linter Generating fixed text for /Users/josh/repos/repros/src/index.astro (pass 1) +278ms
  eslint:source-code-fixer Applying fixes +0ms
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +0ms

/Users/josh/repos/repros/src/index.astro
  1:1  error  Parsing error: Type expected

✖ 1 problem (1 error, 0 warnings)
```
