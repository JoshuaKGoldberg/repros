# Comparing `.js`+`.d.ts` to Direct `.ts`

This has two folders containing roughly equivalent code:

- `direct-ts`: The code implemented in a single `.ts` file
- `js-and-d-ts`: The code implemented in a split `.js` & `.d.ts` file situation

Both implement an `applyTextOperation` function that's meant to take in a string and an operation (either `"lower"` or `"upper"`) to be run on the text.
That operation type (`TextOperation`) is inferred from an `operators` object.

```shell
tsc -w
```

> **Warning**
> I don't use `.js`+`.d.ts` often, so I might be very wrong here.
> If you're familiar with the pattern and spot mistakes, please let me know!

## The Comparison

```shell
$ cat js-and-d-ts/* | wc
      27      83     641
$ cat direct-ts/* | wc
      19      59     447
```

See also the `operators` object.
We want to keep that internal, but still base the `TextOperator` type off its keys.
We have to either remember to add an `@internal` note to it, split it into its own file, or set up the types logic in JSDoc-land.
Irksome.
