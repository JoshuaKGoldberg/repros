# Astro + Knip `ignoreExportsUsedInFile`

Reproduction showing Knip's `ignoreExportsUsedInFile` seeming to not take effect with Astro files.

```shell
npm i
npx knip
```

```plaintext
Unused exported types (1)
Props  interface  src/components/Welcome.astro:1:18
```
