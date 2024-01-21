# Repro: Mocha API Not Respecting Root Hook `beforeAll`

Standalone reproduction for <https://github.com/mochajs/mocha/issues/5006>.

## Setup

```shell
npm i
```

## Running

Running on the CLI correctly logs via the `beforeAll`:

```plaintext
$ npx mocha --require root-hook.js --file test.js


before all
  dummy test
inside the test
    ✔ works


  1 passing (2ms)
```

...but `node index.js` does not:

```plaintext
$ node index.js


  dummy test
inside the test
    ✔ works


  1 passing (2ms)
```
