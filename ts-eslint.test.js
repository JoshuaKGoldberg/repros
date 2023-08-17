const rule = require("./myRule");
const { RuleTester } = require("@typescript-eslint/rule-tester");

RuleTester.afterAll = () => {};

const ruleTester = new RuleTester();

ruleTester.run("my-rule", rule, {
  valid: [
    // {
    //   code: "var other = true",
    // },
  ],

  invalid: [
    // {
    //   code: "var foo = true",
    //   errors: [{ message: "Don't call it foo." }],
    // },
  ],
});
