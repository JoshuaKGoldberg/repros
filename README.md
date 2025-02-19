# ESLint Flat Config Empty Parse

```shell
npm i
npm run lint
```

```plaintext
joshgoldberg ~/repos/repros $ npm run lint

> repros@1.0.0 lint
> eslint index.js

Parsing with: {
  args: [
    'console.log("Hello, world!");\n',
    {
      ecmaVersion: 2025,
      sourceType: 'module',
      loc: true,
      range: true,
      raw: true,
      tokens: true,
      comment: true,
      eslintVisitorKeys: true,
      eslintScopeManager: true,
      filePath: '/Users/josh/repos/repros/index.js'
    }
  ]
}

Oops! Something went wrong! :(

ESLint: 9.20.1

TypeError: Cannot read properties of undefined (reading 'tokens')
    at validate (/Users/josh/repos/repros/node_modules/eslint/lib/languages/js/source-code/source-code.js:61:14)
    at new SourceCode (/Users/josh/repos/repros/node_modules/eslint/lib/languages/js/source-code/source-code.js:365:9)
    at Object.createSourceCode (/Users/josh/repos/repros/node_modules/eslint/lib/languages/js/index.js:326:16)
    at ParserService.parseSync (/Users/josh/repos/repros/node_modules/eslint/lib/services/parser-service.js:45:38)
    at #flatVerifyWithoutProcessors (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:1752:47)
    at Linter._verifyWithFlatConfigArrayAndWithoutProcessors (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:2083:49)
    at Linter._verifyWithFlatConfigArray (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:2172:21)
    at Linter.verify (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:1626:61)
    at Linter.verifyAndFix (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:2410:29)
    at verifyText (/Users/josh/repos/repros/node_modules/eslint/lib/eslint/eslint.js:327:48)
```
