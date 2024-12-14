import { pxToRemTailwind } from "@/app/styles/pxToRem";
import type { Config } from "tailwindcss";
import type { PluginCreator } from "tailwindcss/types/config";

const utilities: PluginCreator = ({ addUtilities }) => {
  addUtilities([]);
};

const extendedSizes: Record<string, string> = {};

/**
 * size 0 ~ 200
 */
for (let i = 0; i <= 400; i++) {
  extendedSizes[`${i * 0.5}`] = `${i * 0.125}rem`;
}

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    maxWidth: {
      pc: "1200px",
      tablet: "640px",
      mobile: "460px",
    },
    screens: {
      pc: "1200px",
      tablet: { max: "640px" },
      mobile: { max: "460px" },
    },
    fontSize: {
      ...pxToRemTailwind.fontSize,
    },
    extend: {
      ...pxToRemTailwind,
    },
  },
  plugins: [utilities],
};

export default config;
