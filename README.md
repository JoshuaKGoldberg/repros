# All Contributors CLI Adding Existing Contributions

Reproduction showing that giving _existing_ contributions to `npx all-contributors-cli add <owner> <...contributions>` removes _all other_ contributions.

```shell
npm i
```

## Behaviors

This repro starts with the following contributions under `joshuakgoldberg`:

`["audio", "bug", "code"]`

Each of the _Added_ below is what's passed as `<...contributions>`.
For example, for the first row, `audio`:

```shell
npx all-contributors-cli add joshuakgoldberg audio
```

The resultant contributions array is `["audio"]`.
`"bug"` and `"code"` have been removed.
❌

| Added            | Result                                        | Status |
| ---------------- | --------------------------------------------- | ------ |
| `audio`          | `["audio"]`                                   | ❌     |
| `audio,bug`      | `["audio", "bug"]`                            | ❌     |
| `audio,bug,code` | `["audio", "bug", "code"]`                    | ✅     |
| `audio,code`     | `["audio", "code"]`                           | ❌     |
| `audio,data`     | `["audio"]`                                   | ❌     |
| `bug`            | `["bug"]`                                     | ❌     |
| `bug,code`       | `["bug", "code"]`                             | ❌     |
| `bug,data`       | `["bug"]`                                     | ❌     |
| `code`           | `["code"]`                                    | ❌     |
| `code,data`      | `["code"]`                                    | ❌     |
| `data`           | `["audio", "bug", "code", "data"]`            | ✅     |
| `data,example`   | `["audio", "bug", "code", "data", "example"]` | ✅     |
