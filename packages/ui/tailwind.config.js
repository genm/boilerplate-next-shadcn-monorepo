const sharedTailwind = require("@repo/config/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...sharedTailwind.theme.extend,
    },
  },
  plugins: [...sharedTailwind.plugins],
};
