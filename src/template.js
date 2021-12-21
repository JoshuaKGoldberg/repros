module.exports = function iconTemplate({ componentName }, { tpl }) {
  return tpl`
      export const test: string = '';
      export const ${componentName}: string = '';
    `;
};
