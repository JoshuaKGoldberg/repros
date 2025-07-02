# Mocha with different diff colon formatting

Reproduction showing the proposed behavior change in Mocha from [mocha#5385 🐛 Bug: diff formatter stops at first colon](https://github.com/mochajs/mocha/issues/5385).
It uses `patch-package` to switch Mocha to the suggested regular expression when a `NEW_BEHAVIOR` environment variable is truthy.

```shell
npm i
npm run test
NEW_BEHAVIOR=1 npm run test
```

Comparing the outputs from the two commands:

```diff
  2) Should print message with a colon(:):

-     Error: message with a colon(:): expected something else
+     message with a colon(:)
      + expected - actual
```

```diff
  3) reporter
       should log with colon:

-     Test
+     Test: expected something
      + expected - actual
```
