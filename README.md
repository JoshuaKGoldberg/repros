# Repro: Mocha Chokidar v4 PR Watching

## Setup

```shell
npm i
```

Then in two terminals, run:

* `npx mocha "*.test.js" --watch
* `node /path/to/your/local/mocha/bin/mocha.js "*.test.js" --watch

Both of those should show `a` and `b` passing.

## Reproduction

Then, rename `b.test.js` to `z.test.js`.
The two will differ:

* The current version of Mocha experiences a 0ms delay between full test re-runs
* The PR's version of Mocha experiences a ~200ms delay between full test re-runs

Current output:

```plaintext
joshgoldberg ~/repos/repros $ npx mocha "*.test.js" --watch


  a
    ✔ passes

  b
    ✔ passes


  2 passing (2ms)

ℹ [mocha] waiting for changes...


  a


  0 passing (2ms)



  a
    ✔ passes

  b
    ✔ passes


  2 passing (1ms)

ℹ [mocha] waiting for changes...
```

Output from the PR:

```plaintext
joshgoldberg ~/repos/repros $ node ~/repos/mocha/bin/mocha.js "*.test.js" --watch


  a
    ✔ passes

  b
    ✔ passes


  2 passing (2ms)

ℹ [mocha] waiting for changes...



  0 passing (209ms)



  a
    ✔ passes

  b
    ✔ passes


  2 passing (1ms)

ℹ [mocha] waiting for changes...
```

## Full Debug Output

```shell
DEBUG=* node ~/repos/mocha/bin/mocha.js "*.test.js" --watch
```

```plaintext
joshgoldberg ~/repos/repros $ DEBUG=* node ~/repos/mocha/bin/mocha.js "*.test.js" --watch
  mocha:cli:options no config found in /Users/josh/repos/repros/package.json +0ms
  mocha:cli:mocha loaded opts {
  _: [ '*.test.js' ],
  watch: true,
  config: false,
  package: false,
  diff: true,
  extension: [ 'js', 'cjs', 'mjs' ],
  reporter: 'spec',
  slow: 75,
  timeout: 2000,
  ui: 'bdd',
  'watch-ignore': [ 'node_modules', '.git' ]
} +0ms
  mocha:cli:mocha running Mocha in-process +1ms
  mocha:cli:cli entered main with raw args [] +0ms
  mocha:plugin-loader registered plugin def "mochaHooks" +0ms
  mocha:plugin-loader registered plugin def "mochaGlobalSetup" +1ms
  mocha:plugin-loader registered plugin def "mochaGlobalTeardown" +0ms
  mocha:plugin-loader registered 3 plugin defs (0 ignored) +0ms
  mocha:plugin-loader finalized plugins: [Object: null prototype] {} +0ms
  mocha:cli:run post-yargs config {
  package: [Getter/Setter],
  _: [],
  watch: true,
  config: false,
  diff: true,
  extension: [ 'js', 'cjs', 'mjs' ],
  reporter: 'spec',
  slow: 75,
  timeout: 2000,
  ui: 'bdd',
  'watch-ignore': [ 'node_modules', '.git' ],
  watchIgnore: [ 'node_modules', '.git' ],
  'pass-on-failing-test-suite': false,
  passOnFailingTestSuite: false,
  spec: [ '*.test.js' ],
  '$0': 'mocha'
} +0ms
  mocha:suite slow 75 +0ms
  mocha:suite timeout 2000 +0ms
  mocha:mocha configured 0 global setup functions +0ms
  mocha:mocha configured 0 global teardown functions +0ms
  mocha:cli:watch creating serial watcher +0ms
  mocha:cli:watch ignoring files matching: [ 'node_modules', '.git' ] +0ms
  mocha:cli:watch triggering global setup +539ms
  mocha:suite clone +539ms
  mocha:suite timeout 2000 +0ms
  mocha:suite retries -1 +0ms
  mocha:suite slow 75 +0ms
  mocha:suite bail false +0ms
  mocha:suite slow 75 +0ms
  mocha:suite timeout 2000 +0ms
  mocha:mocha configured 0 global setup functions +539ms
  mocha:mocha configured 0 global teardown functions +0ms
  mocha:cli:run:helpers test files (in order):  [
  '/Users/josh/repos/repros/a.test.js',
  '/Users/josh/repos/repros/b.test.js'
] +0ms
  mocha:suite timeout 2000 +9ms
  mocha:suite retries -1 +0ms
  mocha:suite slow 75 +0ms
  mocha:suite bail false +0ms
  mocha:runnable timeout 2000 +0ms
  mocha:runnable slow 75 +0ms
  mocha:suite timeout 2000 +0ms
  mocha:suite retries -1 +0ms
  mocha:suite slow 75 +0ms
  mocha:suite bail false +0ms
  mocha:runnable timeout 2000 +0ms
  mocha:runnable slow 75 +0ms
  mocha:runner grep(): setting to /.*/ +0ms
  mocha:runner globals(): setting to [
  mocha:runner   'global',          'clearImmediate',
  mocha:runner   'setImmediate',    'clearInterval',
  mocha:runner   'clearTimeout',    'setInterval',
  mocha:runner   'setTimeout',      'queueMicrotask',
  mocha:runner   'structuredClone', 'atob',
  mocha:runner   'btoa',            'performance',
  mocha:runner   'fetch',           'navigator',
  mocha:runner   'crypto',          'before',
  mocha:runner   'after',           'beforeEach',
  mocha:runner   'afterEach',       'run',
  mocha:runner   'context',         'describe',
  mocha:runner   'xcontext',        'xdescribe',
  mocha:runner   'specify',         'it',
  mocha:runner   'xspecify',        'xit',
  mocha:runner   'XMLHttpRequest',  'Date'
  mocha:runner ] +1ms
  mocha:runner globals(): setting to [] +0ms
  mocha:runner run(): got options: {
  mocha:runner   diff: true,
  mocha:runner   extension: [ 'js', 'cjs', 'mjs' ],
  mocha:runner   package: false,
  mocha:runner   reporter: 'spec',
  mocha:runner   slow: 75,
  mocha:runner   timeout: 2000,
  mocha:runner   ui: 'bdd',
  mocha:runner   'watch-ignore': [ 'node_modules', '.git' ],
  mocha:runner   _: [],
  mocha:runner   watch: true,
  mocha:runner   config: false,
  mocha:runner   watchIgnore: [ 'node_modules', '.git' ],
  mocha:runner   'pass-on-failing-test-suite': false,
  mocha:runner   passOnFailingTestSuite: false,
  mocha:runner   spec: [ '*.test.js' ],
  mocha:runner   '$0': 'mocha',
  mocha:runner   grep: undefined,
  mocha:runner   reporterOption: undefined,
  mocha:runner   reporterOptions: undefined,
  mocha:runner   global: [],
  mocha:runner   globalSetup: [],
  mocha:runner   globalTeardown: [],
  mocha:runner   enableGlobalSetup: false,
  mocha:runner   enableGlobalTeardown: false,
  mocha:runner   files: [
  mocha:runner     '/Users/josh/repos/repros/a.test.js',
  mocha:runner     '/Users/josh/repos/repros/b.test.js'
  mocha:runner   ]
  mocha:runner } +1ms
  mocha:runner trying to remove listener for untracked object process {
  version: 'v22.4.1',
  versions: [Object],
  arch: 'arm64',
  platform: 'darwin',
  release: [Object],
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [Array],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype],
  _eventsCount: 6,
  _maxListeners: undefined,
  domain: null,
  _exiting: [Getter/Setter],
  exitCode: [Getter/Setter],
  config: [Object],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  getActiveResourcesInfo: [Function: getActiveResourcesInfo],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  loadEnvFile: [Function: loadEnvFile],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function],
  constrainedMemory: [Function: constrainedMemory],
  availableMemory: [Function: availableMemory],
  kill: [Function: kill],
  exit: [Function: exit],
  hrtime: [Function],
  openStdin: [Function (anonymous)],
  getuid: [Function: getuid],
  geteuid: [Function: geteuid],
  getgid: [Function: getgid],
  getegid: [Function: getegid],
  getgroups: [Function: getgroups],
  allowedNodeEnvironmentFlags: [NodeEnvironmentFlagsSet [Set]],
  assert: [Function: deprecated],
  features: [Object],
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  sourceMapsEnabled: [Getter],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  getBuiltinModule: [Function: getBuiltinModule],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  env: [Object],
  title: 'node',
  argv: [Array],
  execArgv: [],
  pid: 11860,
  ppid: 2183,
  execPath: '/Users/josh/.nvm/versions/node/v22.4.1/bin/node',
  debugPort: 9229,
  argv0: 'node',
  _preload_modules: [],
  report: [Getter],
  mainModule: [Object],
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false
} +0ms
  mocha:runner trying to remove listener for untracked object process {
  version: 'v22.4.1',
  versions: [Object],
  arch: 'arm64',
  platform: 'darwin',
  release: [Object],
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [Array],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype],
  _eventsCount: 6,
  _maxListeners: undefined,
  domain: null,
  _exiting: [Getter/Setter],
  exitCode: [Getter/Setter],
  config: [Object],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  getActiveResourcesInfo: [Function: getActiveResourcesInfo],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  loadEnvFile: [Function: loadEnvFile],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function],
  constrainedMemory: [Function: constrainedMemory],
  availableMemory: [Function: availableMemory],
  kill: [Function: kill],
  exit: [Function: exit],
  hrtime: [Function],
  openStdin: [Function (anonymous)],
  getuid: [Function: getuid],
  geteuid: [Function: geteuid],
  getgid: [Function: getgid],
  getegid: [Function: getegid],
  getgroups: [Function: getgroups],
  allowedNodeEnvironmentFlags: [NodeEnvironmentFlagsSet [Set]],
  assert: [Function: deprecated],
  features: [Object],
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  sourceMapsEnabled: [Getter],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  getBuiltinModule: [Function: getBuiltinModule],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  env: [Object],
  title: 'node',
  argv: [Array],
  execArgv: [],
  pid: 11860,
  ppid: 2183,
  execPath: '/Users/josh/.nvm/versions/node/v22.4.1/bin/node',
  debugPort: 9229,
  argv0: 'node',
  _preload_modules: [],
  report: [Getter],
  mainModule: [Object],
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false
} +0ms
  mocha:runner _addEventListener(): adding for event uncaughtException; 0 current listeners +1ms
  mocha:runner _addEventListener(): adding for event unhandledRejection; 0 current listeners +0ms
  mocha:runner run(): starting +0ms
  mocha:runner run(): emitting start +0ms

  mocha:runner run(): emitted start +0ms
  mocha:runner runSuite(): running  +0ms

  mocha:runner runSuite(): running a +0ms
  a
  mocha:runner _addEventListener(): adding for event error; 0 current listeners +0ms
    ✔ passes

  mocha:runner runSuite(): running b +1ms
  b
  mocha:runner _addEventListener(): adding for event error; 0 current listeners +0ms
    ✔ passes

  mocha:runner run(): root suite completed; emitting end +0ms

  2 passing (1ms)

  mocha:runner run(): emitted end +1ms
  mocha:cli:watch finished watch run +14ms
  mocha:cli:watch deleted 22936 file(s) from the require cache +131ms
ℹ [mocha] waiting for changes...
  mocha:suite clone +2s
  mocha:suite timeout 2000 +0ms
  mocha:suite retries -1 +0ms
  mocha:suite slow 75 +0ms
  mocha:suite bail false +0ms
  mocha:suite slow 75 +0ms
  mocha:suite timeout 2000 +0ms
  mocha:mocha configured 0 global setup functions +2s
  mocha:mocha configured 0 global teardown functions +0ms
  mocha:cli:run:helpers test files (in order):  [
  '/Users/josh/repos/repros/a.test.js',
  '/Users/josh/repos/repros/z.test.js'
] +2s
  mocha:suite timeout 2000 +1ms
  mocha:suite retries -1 +0ms
  mocha:suite slow 75 +0ms
  mocha:suite bail false +0ms
  mocha:runnable timeout 2000 +2s
  mocha:runnable slow 75 +0ms
  mocha:suite timeout 2000 +1ms
  mocha:suite retries -1 +0ms
  mocha:suite slow 75 +0ms
  mocha:suite bail false +0ms
  mocha:runnable timeout 2000 +1ms
  mocha:runnable slow 75 +0ms
  mocha:runner grep(): setting to /.*/ +2s
  mocha:runner globals(): setting to [
  mocha:runner   'global',          'clearImmediate',
  mocha:runner   'setImmediate',    'clearInterval',
  mocha:runner   'clearTimeout',    'setInterval',
  mocha:runner   'setTimeout',      'queueMicrotask',
  mocha:runner   'structuredClone', 'atob',
  mocha:runner   'btoa',            'performance',
  mocha:runner   'fetch',           'navigator',
  mocha:runner   'crypto',          'before',
  mocha:runner   'after',           'beforeEach',
  mocha:runner   'afterEach',       'run',
  mocha:runner   'context',         'describe',
  mocha:runner   'xcontext',        'xdescribe',
  mocha:runner   'specify',         'it',
  mocha:runner   'xspecify',        'xit',
  mocha:runner   'XMLHttpRequest',  'Date'
  mocha:runner ] +0ms
  mocha:runner globals(): setting to [] +0ms
  mocha:runner run(): got options: {
  mocha:runner   diff: true,
  mocha:runner   extension: [ 'js', 'cjs', 'mjs' ],
  mocha:runner   package: false,
  mocha:runner   reporter: 'spec',
  mocha:runner   slow: 75,
  mocha:runner   timeout: 2000,
  mocha:runner   ui: 'bdd',
  mocha:runner   'watch-ignore': [ 'node_modules', '.git' ],
  mocha:runner   _: [],
  mocha:runner   watch: true,
  mocha:runner   config: false,
  mocha:runner   watchIgnore: [ 'node_modules', '.git' ],
  mocha:runner   'pass-on-failing-test-suite': false,
  mocha:runner   passOnFailingTestSuite: false,
  mocha:runner   spec: [ '*.test.js' ],
  mocha:runner   '$0': 'mocha',
  mocha:runner   grep: undefined,
  mocha:runner   reporterOption: undefined,
  mocha:runner   reporterOptions: undefined,
  mocha:runner   global: [],
  mocha:runner   globalSetup: [],
  mocha:runner   globalTeardown: [],
  mocha:runner   enableGlobalSetup: false,
  mocha:runner   enableGlobalTeardown: false,
  mocha:runner   files: [
  mocha:runner     '/Users/josh/repos/repros/a.test.js',
  mocha:runner     '/Users/josh/repos/repros/z.test.js'
  mocha:runner   ]
  mocha:runner } +0ms
  mocha:runner trying to remove listener for untracked object process {
  version: 'v22.4.1',
  versions: [Object],
  arch: 'arm64',
  platform: 'darwin',
  release: [Object],
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [Array],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype],
  _eventsCount: 6,
  _maxListeners: undefined,
  domain: null,
  _exiting: [Getter/Setter],
  exitCode: [Getter/Setter],
  config: [Object],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  getActiveResourcesInfo: [Function: getActiveResourcesInfo],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  loadEnvFile: [Function: loadEnvFile],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function],
  constrainedMemory: [Function: constrainedMemory],
  availableMemory: [Function: availableMemory],
  kill: [Function: kill],
  exit: [Function: exit],
  hrtime: [Function],
  openStdin: [Function (anonymous)],
  getuid: [Function: getuid],
  geteuid: [Function: geteuid],
  getgid: [Function: getgid],
  getegid: [Function: getegid],
  getgroups: [Function: getgroups],
  allowedNodeEnvironmentFlags: [NodeEnvironmentFlagsSet [Set]],
  assert: [Function: deprecated],
  features: [Object],
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  sourceMapsEnabled: [Getter],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  getBuiltinModule: [Function: getBuiltinModule],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  env: [Object],
  title: 'node',
  argv: [Array],
  execArgv: [],
  pid: 11860,
  ppid: 2183,
  execPath: '/Users/josh/.nvm/versions/node/v22.4.1/bin/node',
  debugPort: 9229,
  argv0: 'node',
  _preload_modules: [],
  report: [Getter],
  mainModule: [Object],
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false
} +0ms
  mocha:runner trying to remove listener for untracked object process {
  version: 'v22.4.1',
  versions: [Object],
  arch: 'arm64',
  platform: 'darwin',
  release: [Object],
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [Array],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype],
  _eventsCount: 6,
  _maxListeners: undefined,
  domain: null,
  _exiting: [Getter/Setter],
  exitCode: [Getter/Setter],
  config: [Object],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  getActiveResourcesInfo: [Function: getActiveResourcesInfo],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  loadEnvFile: [Function: loadEnvFile],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function],
  constrainedMemory: [Function: constrainedMemory],
  availableMemory: [Function: availableMemory],
  kill: [Function: kill],
  exit: [Function: exit],
  hrtime: [Function],
  openStdin: [Function (anonymous)],
  getuid: [Function: getuid],
  geteuid: [Function: geteuid],
  getgid: [Function: getgid],
  getegid: [Function: getegid],
  getgroups: [Function: getgroups],
  allowedNodeEnvironmentFlags: [NodeEnvironmentFlagsSet [Set]],
  assert: [Function: deprecated],
  features: [Object],
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  sourceMapsEnabled: [Getter],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  getBuiltinModule: [Function: getBuiltinModule],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  env: [Object],
  title: 'node',
  argv: [Array],
  execArgv: [],
  pid: 11860,
  ppid: 2183,
  execPath: '/Users/josh/.nvm/versions/node/v22.4.1/bin/node',
  debugPort: 9229,
  argv0: 'node',
  _preload_modules: [],
  report: [Getter],
  mainModule: [Object],
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false
} +0ms
  mocha:runner _addEventListener(): adding for event uncaughtException; 0 current listeners +1ms
  mocha:runner _addEventListener(): adding for event unhandledRejection; 0 current listeners +0ms
  mocha:runner run(): starting +0ms
  mocha:runner run(): emitting start +0ms

  mocha:runner run(): emitted start +0ms
  mocha:runner runSuite(): running  +0ms

  mocha:runner abort(): aborting +181ms
  mocha:runner run(): root suite completed; emitting end +1ms

  0 passing (182ms)

  mocha:runner run(): emitted end +0ms
  mocha:cli:watch finished watch run +2s
  mocha:cli:watch deleted 22936 file(s) from the require cache +138ms
  mocha:suite clone +322ms
  mocha:suite timeout 2000 +0ms
  mocha:suite retries -1 +0ms
  mocha:suite slow 75 +0ms
  mocha:suite bail false +0ms
  mocha:suite slow 75 +0ms
  mocha:suite timeout 2000 +0ms
  mocha:mocha configured 0 global setup functions +324ms
  mocha:mocha configured 0 global teardown functions +0ms
  mocha:cli:run:helpers test files (in order):  [
  '/Users/josh/repos/repros/a.test.js',
  '/Users/josh/repos/repros/z.test.js'
] +323ms
  mocha:suite timeout 2000 +0ms
  mocha:suite retries -1 +0ms
  mocha:suite slow 75 +0ms
  mocha:suite bail false +0ms
  mocha:runnable timeout 2000 +322ms
  mocha:runnable slow 75 +0ms
  mocha:suite timeout 2000 +1ms
  mocha:suite retries -1 +0ms
  mocha:suite slow 75 +0ms
  mocha:suite bail false +0ms
  mocha:runnable timeout 2000 +1ms
  mocha:runnable slow 75 +0ms
  mocha:runner grep(): setting to /.*/ +140ms
  mocha:runner globals(): setting to [
  mocha:runner   'global',          'clearImmediate',
  mocha:runner   'setImmediate',    'clearInterval',
  mocha:runner   'clearTimeout',    'setInterval',
  mocha:runner   'setTimeout',      'queueMicrotask',
  mocha:runner   'structuredClone', 'atob',
  mocha:runner   'btoa',            'performance',
  mocha:runner   'fetch',           'navigator',
  mocha:runner   'crypto',          'before',
  mocha:runner   'after',           'beforeEach',
  mocha:runner   'afterEach',       'run',
  mocha:runner   'context',         'describe',
  mocha:runner   'xcontext',        'xdescribe',
  mocha:runner   'specify',         'it',
  mocha:runner   'xspecify',        'xit',
  mocha:runner   'XMLHttpRequest',  'Date'
  mocha:runner ] +0ms
  mocha:runner globals(): setting to [] +0ms
  mocha:runner run(): got options: {
  mocha:runner   diff: true,
  mocha:runner   extension: [ 'js', 'cjs', 'mjs' ],
  mocha:runner   package: false,
  mocha:runner   reporter: 'spec',
  mocha:runner   slow: 75,
  mocha:runner   timeout: 2000,
  mocha:runner   ui: 'bdd',
  mocha:runner   'watch-ignore': [ 'node_modules', '.git' ],
  mocha:runner   _: [],
  mocha:runner   watch: true,
  mocha:runner   config: false,
  mocha:runner   watchIgnore: [ 'node_modules', '.git' ],
  mocha:runner   'pass-on-failing-test-suite': false,
  mocha:runner   passOnFailingTestSuite: false,
  mocha:runner   spec: [ '*.test.js' ],
  mocha:runner   '$0': 'mocha',
  mocha:runner   grep: undefined,
  mocha:runner   reporterOption: undefined,
  mocha:runner   reporterOptions: undefined,
  mocha:runner   global: [],
  mocha:runner   globalSetup: [],
  mocha:runner   globalTeardown: [],
  mocha:runner   enableGlobalSetup: false,
  mocha:runner   enableGlobalTeardown: false,
  mocha:runner   files: [
  mocha:runner     '/Users/josh/repos/repros/a.test.js',
  mocha:runner     '/Users/josh/repos/repros/z.test.js'
  mocha:runner   ]
  mocha:runner } +0ms
  mocha:runner trying to remove listener for untracked object process {
  version: 'v22.4.1',
  versions: [Object],
  arch: 'arm64',
  platform: 'darwin',
  release: [Object],
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [Array],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype],
  _eventsCount: 6,
  _maxListeners: undefined,
  domain: null,
  _exiting: [Getter/Setter],
  exitCode: [Getter/Setter],
  config: [Object],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  getActiveResourcesInfo: [Function: getActiveResourcesInfo],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  loadEnvFile: [Function: loadEnvFile],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function],
  constrainedMemory: [Function: constrainedMemory],
  availableMemory: [Function: availableMemory],
  kill: [Function: kill],
  exit: [Function: exit],
  hrtime: [Function],
  openStdin: [Function (anonymous)],
  getuid: [Function: getuid],
  geteuid: [Function: geteuid],
  getgid: [Function: getgid],
  getegid: [Function: getegid],
  getgroups: [Function: getgroups],
  allowedNodeEnvironmentFlags: [NodeEnvironmentFlagsSet [Set]],
  assert: [Function: deprecated],
  features: [Object],
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  sourceMapsEnabled: [Getter],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  getBuiltinModule: [Function: getBuiltinModule],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  env: [Object],
  title: 'node',
  argv: [Array],
  execArgv: [],
  pid: 11860,
  ppid: 2183,
  execPath: '/Users/josh/.nvm/versions/node/v22.4.1/bin/node',
  debugPort: 9229,
  argv0: 'node',
  _preload_modules: [],
  report: [Getter],
  mainModule: [Object],
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false
} +0ms
  mocha:runner trying to remove listener for untracked object process {
  version: 'v22.4.1',
  versions: [Object],
  arch: 'arm64',
  platform: 'darwin',
  release: [Object],
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [Array],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype],
  _eventsCount: 6,
  _maxListeners: undefined,
  domain: null,
  _exiting: [Getter/Setter],
  exitCode: [Getter/Setter],
  config: [Object],
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  getActiveResourcesInfo: [Function: getActiveResourcesInfo],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  loadEnvFile: [Function: loadEnvFile],
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function],
  constrainedMemory: [Function: constrainedMemory],
  availableMemory: [Function: availableMemory],
  kill: [Function: kill],
  exit: [Function: exit],
  hrtime: [Function],
  openStdin: [Function (anonymous)],
  getuid: [Function: getuid],
  geteuid: [Function: geteuid],
  getgid: [Function: getgid],
  getegid: [Function: getegid],
  getgroups: [Function: getgroups],
  allowedNodeEnvironmentFlags: [NodeEnvironmentFlagsSet [Set]],
  assert: [Function: deprecated],
  features: [Object],
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  sourceMapsEnabled: [Getter],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  getBuiltinModule: [Function: getBuiltinModule],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  env: [Object],
  title: 'node',
  argv: [Array],
  execArgv: [],
  pid: 11860,
  ppid: 2183,
  execPath: '/Users/josh/.nvm/versions/node/v22.4.1/bin/node',
  debugPort: 9229,
  argv0: 'node',
  _preload_modules: [],
  report: [Getter],
  mainModule: [Object],
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false
} +0ms
  mocha:runner _addEventListener(): adding for event uncaughtException; 0 current listeners +1ms
  mocha:runner _addEventListener(): adding for event unhandledRejection; 0 current listeners +0ms
  mocha:runner run(): starting +0ms
  mocha:runner run(): emitting start +0ms

  mocha:runner run(): emitted start +0ms
  mocha:runner runSuite(): running  +0ms

  mocha:runner runSuite(): running a +0ms
  a
  mocha:runner _addEventListener(): adding for event error; 0 current listeners +0ms
    ✔ passes

  mocha:runner runSuite(): running b +0ms
  b
  mocha:runner _addEventListener(): adding for event error; 0 current listeners +0ms
    ✔ passes

  mocha:runner run(): root suite completed; emitting end +1ms

  2 passing (1ms)

  mocha:runner run(): emitted end +0ms
  mocha:cli:watch finished watch run +4ms
  mocha:cli:watch deleted 22936 file(s) from the require cache +134ms
ℹ [mocha] waiting for changes...
```