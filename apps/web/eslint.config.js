const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const nextPlugin = require("@next/eslint-plugin-next");
const prettier = require("eslint-config-prettier");

module.exports = [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "@next/next": nextPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@next/next/no-html-link-for-pages": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  prettier,
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      ".next/",
      "storybook-static/",
    ],
  },
];
