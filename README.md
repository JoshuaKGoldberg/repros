# Repro: typescript-eslint Project Service and Non-Included File

Reproduction case showing the [typescript-eslint project service](https://typescript-eslint.io/blog/announcing-typescript-eslint-v8#project-service) not being able to pick up a file that isn't included in its nearest `tsconfig.json`.

```plaintext
$ npm run lint
> eslint packages

/Users/josh/repos/repros/packages/b/test/index.test.ts
  0:0  error  Parsing error: /Users/josh/repos/repros/packages/b/test/index.test.ts was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject
```

This is because `packages/b/tsconfig.json` only has `include: ["src"]`, while the file is in the package's `test/` directory.
