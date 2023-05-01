# Repros

Reproduction cases for open source issues I find online.
See [branches](https://github.com/JoshuaKGoldberg/repros/branches).

## Repro

This branch is for a bug report on [all-contributors/cli](https://github.com/all-contributors/cli).

Adding a single contribution for a contributor successfully adds them to `.all-contributorsrc`:

```shell
npx all-contributors add joshuakgoldberg content
```

```diff
"contributions": [
  "bug",
+  "content"
]
```

But, adding multiple contributions partially overrides any existing contributions:

```shell
npx all-contributors add joshuakgoldberg docs,example
```

```diff
"contributions": [
  "bug",
+  "example"
]
```

...and then running the same command again ends up with just `"example"` listed (?!):

```diff
"contributions": [
-  "bug",
+  "example"
]
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="#example-JoshuaKGoldberg" title="Examples">💡</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
