import { interfaces, Test } from "mocha";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

/**
 * A simple UI that only exposes a single function: test
 */
export default interfaces["simple-ui"] = function (suite) {
    suite.on("pre-require", function (context, file, mocha) {
        var common = require("mocha/lib/interfaces/common")([suite], context);

        context.run = common.runWithSuite(suite);
        console.log("Set run.")

        /**
         * Describes a specification or test-case with the given `title`
         * and callback `fn` acting as a thunk.
         */
        context.test = function (title, fn) {
            var test = new Test(title, fn);
            test.file = file;
            suite.addTest(test);
            console.log("Adding test.")


            return test;
        };
    });
};
