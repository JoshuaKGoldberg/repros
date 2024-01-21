const Mocha = require("mocha");

const mocha = new Mocha({
  require: ["./root-hook.js"],
});

mocha.addFile("./test.js");

mocha.run();
