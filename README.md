# Prettier's `--experimental-cli` and `prettier-plugin-curly`

Reproduction showing that [`prettier-plugin-curly`](https://github.com/JoshuaKGoldberg/prettier-plugin-curly) cannot be loaded with [Prettier 3.6's new `--experimental-cli`](https://prettier.io/blog/2025/06/23/3.6.0).

```shell
npm i
npm run format
```

```plaintext
  The plugin "prettier-plugin-curly" could not be loaded


  The plugin "prettier-plugin-curly" could not be loaded


  The plugin "prettier-plugin-curly" could not be loaded


  The plugin "prettier-plugin-curly" could not be loaded


  The plugin "prettier-plugin-curly" could not be loaded


  The plugin "prettier-plugin-curly" could not be loaded


  The plugin "prettier-plugin-curly" could not be loaded

[error] .gitignore: WorkTankWorkerError (prettier (1)): Exited with exit code 1
[error] .prettierrc: WorkTankWorkerError (prettier (2)): Exited with exit code 1
[error] LICENSE.md: WorkTankWorkerError (prettier (5)): Exited with exit code 1
[error] README.md: WorkTankWorkerError (prettier (3)): Exited with exit code 1
[error] index.js: WorkTankWorkerError (prettier (6)): Exited with exit code 1
[error] package-lock.json: WorkTankWorkerError (prettier (7)): Exited with exit code 1
[error] package.json: WorkTankWorkerError (prettier (4)): Exited with exit code 1
```

Originally reported in: [JoshuaKGoldberg/prettier-plugin-curly#748 🐛 Bug: Plugin does not work with --experimental-cli #748](https://github.com/JoshuaKGoldberg/prettier-plugin-curly/issues/748).
