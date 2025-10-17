const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@repo/tailwind-config")],
  plugins: [],
};
