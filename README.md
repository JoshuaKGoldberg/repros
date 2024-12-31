# Repro: `all-contributors-cli add` adding redundant `.all-contributorsrc` field defaults

Reproduction showing the `commitConvention` and `repoType` properties added to the `.all-contributorsrc` file when `all-contributors-cli` is run.

```shell
npm i
npx all-contributors-cli add JoshuaKGoldberg doc
```
