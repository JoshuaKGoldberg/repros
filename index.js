import chalk from "chalk";

console.clear();

console.log("$ npx @joshuakgoldberg/linter .\n");

console.log(
  [
    chalk.hex("ff7777")("./"),
    chalk.bold.hex("ff4949")("src/base.ts"),
    "                                                                                ",
    "    ",
    chalk.hex("888888")("["),
    chalk.hex("999999")("D"),
    chalk.hex("888888")("]"),
    chalk.gray("etails: enabled"),
    "    ",
    chalk.hex("888888")("["),
    chalk.hex("999999")("F"),
    chalk.hex("888888")("]"),
    chalk.gray("ocused view: enabled"),
    "\n\n",
    chalk.hex("ccaaaa")("["),
    chalk
      .hex("ff9999")
      .bold(`\u001b]8;;http://example.com\u0007awaitThenables\u001b]8;;\u0007`),
    chalk.hex("ccaaaa")("]"),
    " ",
    chalk.hex("#eeaa77")(
      `A non-Promise (non-"Thenable") value is being awaited.`
    ),
    "\n\n",
    chalk.hex("bbb")("  50:1 "),
    chalk.gray("│ "),
    chalk.hex("#dcf")("await "),
    chalk.hex("#cdf")("process"),
    chalk.hex("#cdd")("()"),
    chalk.hex("#aaa")(";"),
    "\n",
    chalk.gray("       │ "),
    chalk.hex("#fcc")("~~~~~~~~~~~~~~~"),
    "\n\n",
    chalk.hex("bbeeff")("Suggestions:"),
    "\n",
    chalk.hex("99aacc")(" • "),
    chalk.hex("bbccdd")("If the `"),
    chalk.hex("bbeeff")("process"),
    chalk.hex("bbccdd")(
      "` function doesn't need to be asynchronous, remove the `"
    ),
    chalk.hex("bbeeff")("await"),
    chalk.hex("bbccdd")("`."),
    "\n",
    chalk.hex("99aacc")(" • "),
    chalk.hex("bbccdd")(
      "Otherwise, ensure it returns a Promise, such as declaring it as `"
    ),
    chalk.hex("bbeeff")("async"),
    chalk.hex("bbccdd")("`."),
    "\n\n",
    chalk
      .hex("ccbbaa")
      .italic(
        `A "Thenable" is an object with a \`then\` method, such as a Promise. `
      ),
    chalk
      .hex("ccbbaa")
      .italic(
        "Using `await` on a non-Thenable value just returns the value after a tick."
      ),
    "\n",
    chalk.hex("ddccbb").italic("→ "),
    chalk
      .hex("aaccaa")
      .italic(
        `\u001b]8;;https://example.com/awaitThenables\u0007example.com/awaitThenables\u001b]8;;\u0007`
      ),
    "\n\n",
    chalk.hex("ff5656")("✖ Found "),
    chalk.hex("ff4949").bold("7"),
    chalk.hex("ff5656")(" reports across "),
    chalk.hex("ff4949").bold("3"),
    chalk.hex("ff5656")(" files"),
    "                                                                  ",
    chalk.hex("888888")("["),
    chalk.hex("999999")("v"),
    chalk.hex("888888")("]"),
    chalk.gray(" Report 2 of 3 "),
    chalk.hex("888888")("["),
    chalk.hex("999999")("^"),
    chalk.hex("888888")("]"),
    "    ",
    chalk.hex("888888")("["),
    chalk.hex("999999")("<"),
    chalk.hex("888888")("]"),
    chalk.gray(" File 2 of 3 "),
    chalk.hex("888888")("["),
    chalk.hex("999999")(">"),
    chalk.hex("888888")("]"),
    "\n",
  ].join("")
);
