import antfu from "@antfu/eslint-config";

export default antfu()
  .renamePlugins({
    ts: "@typescript-eslint",
  })
  .overrideRules({
    "@typescript-eslint/no-array-constructor": "error",
  });
