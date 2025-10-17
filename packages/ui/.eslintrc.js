module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-library"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: true,
  },
  ignorePatterns: [
    "tailwind.config.js",
    "vite.config.ts",
    "vitest.config.ts",
    "tsup.config.ts",
    ".storybook/**",
    ".eslintrc.js",
    "dist/**",
    "node_modules/**",
  ],
};
