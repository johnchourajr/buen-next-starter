import { buenTypeTailwind } from "@muybuen/type";
import { PluginAPI } from "tailwindcss/types/config";

import { customHeadlines, customTexts } from "./src/config/typography";

function typePlugin({ addUtilities }: PluginAPI) {
  buenTypeTailwind(
    { addUtilities },
    {
      customHeadlines,
      customTexts,
      disableDefaults: true,
    },
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
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
  plugins: [require("@tailwindcss/aspect-ratio"), typePlugin],
};
