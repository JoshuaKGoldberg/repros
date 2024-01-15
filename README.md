# Mocha `--watch-files` Updates Repro

Corresponding to <https://github.com/mochajs/mocha/issues/4016>:

```shell
npm i
npm run test
```

> Now modify `lib-a/index.js` so that the exported value is `false`. This will retrigger the tests but they will still succeed.
>
> If lib-b is add to the `--watch-files` list then the modification results in a test failure.
