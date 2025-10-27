import sharedTailwind from "@repo/config/tailwind";
import type { Config } from "tailwindcss";

const sharedThemeExtend = sharedTailwind.theme?.extend ?? {};
const sharedPlugins = sharedTailwind.plugins ?? [];

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...sharedThemeExtend,
    },
  },
  plugins: [...sharedPlugins],
} satisfies Config;

export default config;
