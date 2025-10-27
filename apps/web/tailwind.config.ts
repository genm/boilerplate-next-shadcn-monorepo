import sharedTailwind from "@repo/config/tailwind";
import type { Config } from "tailwindcss";

const sharedThemeExtend = sharedTailwind.theme?.extend ?? {};
const sharedPlugins = sharedTailwind.plugins ?? [];

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...sharedThemeExtend,
    },
  },
  plugins: [...sharedPlugins],
} satisfies Config;

export default config;
