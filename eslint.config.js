// CSE 195 ESLint Config (2026 v0.1)
// Inspired by CSE 154's ESLint config:
// https://courses.cs.washington.edu/courses/cse154/24sp/resources/assets/.eslintrc.json
export default [
    {
        languageOptions: {
            sourceType: "script",
            globals: {
                console: "writable",
                document: "writable",
                window: "writable",
            },
        },
        rules: {
            // Rules that enforce items in the code quality guide.
            // Sorted by order of appearance, not lexicographically.
            "no-var": "error", // Prefer let over var
            "no-multi-assign": "error", //  Use one let per assignment
            camelcase: "warn", // Use camelCase for variable and function names
            eqeqeq: ["error", "always"], // Prefer strict equality
            "no-eq-null": "error", // Prefer strict equality
            "no-nested-ternary": "error", // Avoid nested or complex ternaries
            "no-unneeded-ternary": "error", // Avoid nested or complex ternaries
            "no-continue": "error", // Avoid break and continue
            curly: "error", // Always start blocks with braces

            // The rest of these rules do not incur a grade penalty (i.e., they are warnings
            // and not errors). However, we encourage you to look at them, since they
            // may indicate a mistake!

            // Rules about variable definitions and scope. In most cases, these will
            // flag legitimate issues; however, in some cases they may be a "false positive".
            "no-shadow": ["warn", { allow: ["id"] }],
            "no-shadow-restricted-names": "warn",
            "no-undef": "warn",
            "no-use-before-define": ["warn", { functions: false }],

            // Rules that disallow certain JS programming features that trip up beginners.
            "no-alert": "warn",
            "no-bitwise": "warn",
            "no-eval": "warn",
            "no-labels": "warn",
            "no-with": "warn",

            // Rules that disallow style decisions that are likely mistakes.
            "no-lone-blocks": "warn",
            "no-lonely-if": "warn",
            "no-octal": "warn",
            "no-octal-escape": "warn",

            // Rules that try to catch incomplete code.
            "no-empty-function": "warn",
            "no-debugger": "warn",
            "no-warning-comments": "warn",

            // Rules about complexity
            "max-depth": ["warn", 6],
            "max-params": ["warn", 6],

            // Other rules that catch potentially incorrect code, common with beginners.
            // Most cover JS features that are not taught in CSE 195.
            "array-callback-return": "warn",
            "block-scoped-var": "warn",
            "callback-return": "warn",
            "consistent-return": "warn",
            "func-name-matching": "warn",
            "global-require": "warn",
            "handle-callback-err": "warn",
            "max-nested-callbacks": "warn",
            "new-cap": "warn",
            "no-array-constructor": "warn",
            "no-extend-native": "warn",
            "no-extra-bind": "warn",
            "no-div-regex": "warn",
            "no-implied-eval": "warn",
            "no-iterator": "warn",
            "no-new-wrappers": "warn",
            "no-proto": "warn",
            "no-redeclare": "warn",
            "no-return-assign": "warn",
            "no-return-await": "warn",
            "no-script-url": "warn",
            "no-self-assign": "warn",
            "no-self-compare": "warn",
            "no-sequences": "warn",
            "no-mixed-requires": "warn",
            "no-new-object": "warn",
            "no-path-concat": "warn",
            "no-process-exit": "warn",
            "no-template-curly-in-string": "warn",
            "no-throw-literal": "warn",
            "no-underscore-dangle": "warn",
            "no-unmodified-loop-condition": "warn",
            "no-unreachable-loop": "warn",
            "no-unused-expressions": "warn",
            "no-unused-vars": "warn",
            "no-useless-call": "warn",
            "no-useless-catch": "warn",
            "no-useless-concat": "warn",
            "no-useless-return": "warn",
            "no-void": "warn",
            "prefer-promise-reject-errors": "warn",
            "require-await": "warn",
            "wrap-iife": ["warn", "inside"],
        },
    },
];
