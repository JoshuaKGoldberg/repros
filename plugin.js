function print(path, options, print, ...rest) {
  console.log("Printing", path, "with", options);
  return print(path, options, print, ...rest);
}

export const printers = {
  babel: { print },
  typescript: { print },
};

export default { printers };

console.log("Loaded plugin.js.");
