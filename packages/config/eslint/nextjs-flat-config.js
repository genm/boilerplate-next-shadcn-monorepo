const nextPlugin = require("@next/eslint-plugin-next");
const baseConfig = require("./flat-config");

module.exports = [
  ...baseConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
