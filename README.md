# Repro: ESLint using AssertionError that doesn't include failing rule

```shell
npm i
npx eslint eslint.config.js
```

With the current ESLint, `9.13.0`:

```plaintext
Oops! Something went wrong! :(

ESLint: 9.13.0

AssertionError [ERR_ASSERTION]: Fix objects must not be overlapped in a report.
    at mergeFixes (/Users/josh/repos/eslint/lib/linter/report-translator.js:165:9)
    at normalizeFixes (/Users/josh/repos/eslint/lib/linter/report-translator.js:197:16)
    at /Users/josh/repos/eslint/lib/linter/report-translator.js:371:49
    at FileContext.report (/Users/josh/repos/eslint/lib/linter/linter.js:1048:41)
    at Identifier (file:///Users/josh/repos/repros/eslint.config.js?mtime=1730210948185:8:21)
    at ruleErrorHandler (/Users/josh/repos/eslint/lib/linter/linter.js:1084:48)
    at /Users/josh/repos/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (/Users/josh/repos/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (/Users/josh/repos/eslint/lib/linter/node-event-generator.js:297:26)
```

With https://github.com/JoshuaKGoldberg/eslint/commit/7d075145ca7087873c41b3854fb7cc2e4a2f7cd6:

```plaintext
Oops! Something went wrong! :(

ESLint: 9.13.0

Error: Fix objects must not be overlapped in a report.
Occurred while linting /Users/josh/repos/repros/eslint.config.js:1
Rule: "example/fails"
    at assert (/Users/josh/repos/eslint/lib/shared/assert.js:17:15)
    at mergeFixes (/Users/josh/repos/eslint/lib/linter/report-translator.js:166:9)
    at normalizeFixes (/Users/josh/repos/eslint/lib/linter/report-translator.js:198:16)
    at /Users/josh/repos/eslint/lib/linter/report-translator.js:372:49
    at FileContext.report (/Users/josh/repos/eslint/lib/linter/linter.js:1048:41)
    at Identifier (file:///Users/josh/repos/repros/eslint.config.js?mtime=1730210948185:8:21)
    at ruleErrorHandler (/Users/josh/repos/eslint/lib/linter/linter.js:1084:48)
    at /Users/josh/repos/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (/Users/josh/repos/eslint/lib/linter/safe-emitter.js:45:38)
```
