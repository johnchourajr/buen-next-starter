import { buenTypeTailwind } from "@muybuen/type";
import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/plugin";

import { customHeadlines, customTexts } from "./src/config/typography";

function typePlugin(api: PluginAPI) {
  buenTypeTailwind(
    api,
    {
      customHeadlines,
      customTexts,
      disableDefaults: true,
    },
  );
}

const config: Config = {
  content: [
    "./src/template/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/config/**/*.{js,ts,jsx,tsx,css}",
    "./src/styles/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {},
  },
  plugins: [typePlugin],
};

export default config;
