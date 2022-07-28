module.exports = {
  extends: [
    "../packages/lint/eslint.config.js",
    "plugin:jsx-a11y/recommended",
    "plugin:styled-components-a11y/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "import/no-default-export": "error",
    "unused-imports/no-unused-imports-ts": "error",
    "arrow-body-style": "error",
    quotes: ["error", "double", { avoidEscape: true }],
    "no-fallthrough": "error",
    "react/jsx-key": [2, { checkFragmentShorthand: true }],
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "@intouchhealth/ui-components/Illustrations",
            message: "Please use dynamic import for Illustrations",
          },
        ],
        patterns: [
          {
            group: ["superadmin/*", "patient/*", "provider/*"],
            message: "Cross-app imports are forbidden",
          },
        ],
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: ["Label"],
        controlComponents: ["Input", "CheckBox"],
      },
    ],
    "jsx-a11y/label-has-for": "off", //deprecated rule, active because of styled-components-a11y 0.34 version
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [1, { variables: false }],
  },
  overrides: [
    {
      files: ["./src/**/*.d.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
}
