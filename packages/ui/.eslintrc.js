module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-library"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [__dirname + "/tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
  },
  env: {
    node: true,
  },
  ignorePatterns: ["dist/**", "node_modules/**"],
};
