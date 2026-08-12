# Repro: `toHaveValue()` ignoring `aria-valuenow` on `scrollbar` and `separator` roles

Reproduction showing [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom)'s `toHaveValue()` reading `aria-valuenow` for four roles only, so an assertion on a `role="separator"` element cannot pass for any argument.
WAI-ARIA supports [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.2/#aria-valuenow) on six roles: `meter`, `progressbar`, `scrollbar`, `separator` (when focusable), `slider`, and `spinbutton`.
`getAccessibleValue` allowlists four of them, leaving out `separator` — the [window splitter](https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter) pattern — and `scrollbar`.

## Setup

```shell
npm install
npm run build:browser
```

### Runtime Results in jsdom

```shell
npm run runtime:jsdom
```

```plaintext
┌───────────────┬──────────────────────────────────┬─────────────────┬──────────────────┐
│ role          │ el.getAttribute('aria-valuenow') │ el.ariaValueNow │ toHaveValue(120) │
├───────────────┼──────────────────────────────────┼─────────────────┼──────────────────┤
│ 'meter'       │ '120'                            │ '120'           │ '✅ passes'      │
│ 'progressbar' │ '120'                            │ '120'           │ '✅ passes'      │
│ 'scrollbar'   │ '120'                            │ '120'           │ '❌ FAILS'       │
│ 'separator'   │ '120'                            │ '120'           │ '❌ FAILS'       │
│ 'slider'      │ '120'                            │ '120'           │ '✅ passes'      │
│ 'spinbutton'  │ '120'                            │ '120'           │ '✅ passes'      │
└───────────────┴──────────────────────────────────┴─────────────────┴──────────────────┘
```

### Runtime Results in a Browser

```shell
npm run runtime:browser
```


On Chrome 151:

| role          | `el.getAttribute('aria-valuenow')` | `el.ariaValueNow` | `toHaveValue(120)`  |
| ------------- | ---------------------------------- | ----------------- | ------------------- |
| `meter`       | `120`                              | `120`             | ✅ passes           |
| `progressbar` | `120`                              | `120`             | ✅ passes           |
| `scrollbar`   | `120`                              | `120`             | ❌ FAILS            |
| `separator`   | `120`                              | `120`             | ❌ FAILS            |
| `slider`      | `120`                              | `120`             | ✅ passes           |
| `spinbutton`  | `120`                              | `120`             | ✅ passes           |
