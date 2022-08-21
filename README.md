# tslint-no-config

Reproduction case for running TSLint with no tslint.json or no enabled rules.

## Setup

```shell
npm i
```

## Running

`npm run lint` runs TSLint without a `tslint.json`:

```plaintext
$ npm run lint

> tslint-no-config@0.0.1 lint
> tslint index.ts

Tried to lint index.ts but found no valid, enabled rules for this file type and file path in the resolved configuration.
```

`npm run lint:with-config` runs TSLint with a `tslint.json` that has no rules enabled:

```plaintext
$ npm run lint:with-config

> tslint-no-config@0.0.1 lint:with-config
> tslint --config tslint.alternate.json index.ts

Tried to lint index.ts but found no valid, enabled rules for this file type and file path in the resolved configuration.
```
