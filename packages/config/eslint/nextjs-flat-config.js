const nextPlugin = require("@next/eslint-plugin-next");
const createBaseConfig = require("./flat-config");

const createNextConfig = (options = {}) => [
  ...createBaseConfig(options),
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

module.exports = createNextConfig;
