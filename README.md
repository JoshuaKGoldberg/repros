# Repro: Knip and `yarn --mode skip-build`

Reproduction showing Knip falsely reporting on `yarn --mode skip-build`.

```shell
npx knip
```

```plaintext
Unlisted binaries (2)
skip-build  .github/workflows/example.yml
skip-build  package.json
```

From [yarnpkg.com/cli/install](https://yarnpkg.com/cli/install):

> If the `--mode=<mode>` option is set, Yarn will change which artifacts are generated.
> The modes currently supported are:
>
> - `skip-build` will not run the build scripts at all. N
>   ...
