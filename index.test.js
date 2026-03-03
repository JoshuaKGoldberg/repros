const { RuleTester } = require("@typescript-eslint/rule-tester");

const { rule } = require("./index.js");

const ruleTester = new RuleTester({
    languageOptions: {
        parserOptions: {
            projectService: {
                allowDefaultProject: ['*.ts'],
            }
        }
    }
})

ruleTester.run('...', rule, {
    valid: [''],
    invalid: []
})