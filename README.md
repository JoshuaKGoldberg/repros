# Repro: `konami-code-js` in ESM (Nuxt)

```shell
npm i
npm run dev
```

Then visit <http://localhost:3000>.
In the browser console you'll see something like:

```plaintext
Uncaught TypeError: Cannot read properties of undefined (reading 'KonamiCode')
    at konami-code.js?v=298ff127:14:29
    at konami-code.js?v=298ff127:44:2
```