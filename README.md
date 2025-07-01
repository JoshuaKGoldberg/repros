# `yaml-unist-parser` Throwing on an Empty String

```shell
npm i
node index.js
```

```plaintext
file:///Users/josh/repos/repros/node_modules/yaml-unist-parser/lib/transforms/context.js:31
        const { start: { line: startLine, col: startColumn }, end: { line: endLine, col: endColumn }, } = rangeAsLinePosGetter.call({
                       ^

TypeError: Cannot destructure property 'start' of 'rangeAsLinePosGetter.call(...)' as it is undefined.
    at #getRangePosition (file:///Users/josh/repos/repros/node_modules/yaml-unist-parser/lib/transforms/context.js:31:24)
    at Context.transformRange (file:///Users/josh/repos/repros/node_modules/yaml-unist-parser/lib/transforms/context.js:59:54)
    at parse (file:///Users/josh/repos/repros/node_modules/yaml-unist-parser/lib/parse.js:28:37)
    at file:///Users/josh/repos/repros/index.js:3:1
    at ModuleJob.run (node:internal/modules/esm/module_job:365:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:665:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:99:5)
```
