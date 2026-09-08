// CSE 195 ESLint Config (2026 v0.1)
// Inspired by CSE 154's Stylelint config:
// https://courses.cs.washington.edu/courses/cse154/24sp/resources/assets/.stylelintrc.json
module.exports = {
    rules: {
        // This first section of rules disallows things that are likely errors.
        // Unless otherwise stated, these are all graded.
        // See: https://stylelint.io/user-guide/rules#avoid-errors

        // Rules that disallow deprecated CSS properties. These are graded.
        "at-rule-no-deprecated": [true, { severity: "error" }],
        "declaration-property-value-keyword-no-deprecated": [true, { severity: "error" }],
        "media-type-no-deprecated": [true, { severity: "error" }],
        "property-no-deprecated": [true, { severity: "error" }],
        "selector-no-deprecated": [true, { severity: "error" }],

        // Rules that disallow duplicated code. These are graded.
        "font-family-no-duplicate-names": [true, { severity: "error" }],
        "declaration-block-no-duplicate-properties": [true, { severity: "error" }],
        "no-duplicate-at-import-rules": [true, { severity: "error" }],
        "no-duplicate-selectors": [true, { severity: "error" }],

        // Rules that disallow empty code. These are graded.
        "block-no-empty": [true, { severity: "error" }], // Avoid empty code structures
        "comment-no-empty": [true, { severity: "error" }], // Avoid empty code structures

        "no-empty-source": [true, { severity: "error" }], // Avoid empty code structures

        // Rules that disallow invalid syntax. These are graded.
        "color-no-invalid-hex": [true, { severity: "error" }],
        "function-calc-no-unspaced-operator": [true, { severity: "error" }],
        "keyframe-declaration-no-important": [true, { severity: "error" }],
        "no-invalid-double-slash-comments": [true, { severity: "error" }],
        "string-no-newline": [true, { severity: "error" }],

        // Misc rules that address likely error cases. These are graded.
        "font-family-no-missing-generic-family-keyword": [true, { severity: "error" }], // "Missing"
        "function-linear-gradient-no-nonstandard-direction": [true, { severity: "error" }], // "Overrides"
        "declaration-block-no-shorthand-property-overrides": [true, { severity: "error" }], // "Unmatchable"

        // Rules that disallow unknown keywords, which are likely typos or errors. These are graded.
        "annotation-no-unknown": [true, { severity: "error" }],
        "at-rule-descriptor-no-unknown": [true, { severity: "error" }],
        "at-rule-descriptor-value-no-unknown": [true, { severity: "error" }],
        "at-rule-no-unknown": [true, { severity: "error" }],
        "declaration-property-value-no-unknown": [true, { severity: "error" }],
        "media-feature-name-no-unknown": [true, { severity: "error" }],
        "media-feature-name-value-no-unknown": [true, { severity: "error" }],
        "no-unknown-animations": [true, { severity: "error" }],
        "property-no-unknown": [true, { severity: "error" }],
        "selector-pseudo-class-no-unknown": [true, { severity: "error" }],
        "selector-pseudo-element-no-unknown": [true, { severity: "error" }],
        "selector-type-no-unknown": [true, { severity: "error" }],
        "unit-no-unknown": [true, { severity: "error" }],

        // This next section of rules enforces conventions. Generally speaking, these follow
        // either the CSE 195 Code Quality Guidelines, or best practices.
        // See: https://stylelint.io/user-guide/rules#enforce-conventions

        // First, rules that enforce items in the code quality guide. These are graded.
        // Sorted by order of appearance, not lexicographically.

        "declaration-block-single-line-max-declarations": [0, { severity: "error" }], // Write one rule per line.
        "declaration-empty-line-before": ["never", { severity: "error" }], // Write one rule per line
        "rule-empty-line-before": [
            "always", // Place exactly one blank line between rule sets. Place no blank lines between rules.
            {
                ignore: ["after-comment"],
                except: ["first-nested"],
                severity: "error",
            },
        ],
        "at-rule-empty-line-before": ["always", { severity: "error" }], // Place exactly one blank line between rule sets. Place no blank lines between rules.

        // Other stylistic rules that enforce best practices.

        // Disallow certain CSS features that are likely to be misused.
        "at-rule-no-vendor-prefix": [true, { severity: "error" }],
        "declaration-no-important": [true, { severity: "error" }],
        "function-url-no-scheme-relative": [true, { severity: "error" }],
        "media-feature-name-no-vendor-prefix": [true, { severity: "error" }],
        "selector-no-vendor-prefix": [true, { severity: "error" }],
        "property-no-vendor-prefix": [true, { severity: "error" }],
        "value-no-vendor-prefix": [true, { severity: "error" }],

        // Case rules (preferring lowercase)
        "function-name-case": ["lower", { severity: "error" }],
        "selector-type-case": ["lower", { severity: "error" }],
        "value-keyword-case": ["lower", { severity: "error" }],

        // Limit complexity
        "max-nesting-depth": [2, { severity: "error" }],

        // Notation
        "selector-pseudo-element-colon-notation": ["single", { severity: "error" }],

        // Quotes
        "font-family-name-quotes": ["always-unless-keyword", { severity: "error" }],
        "function-url-quotes": ["always", { severity: "error" }],
        "selector-attribute-quotes": ["always", { severity: "error" }],

        // Whitespace inside (comment formatting)
        "comment-whitespace-inside": ["always", { severity: "error" }],
    },
};
