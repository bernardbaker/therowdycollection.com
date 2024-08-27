import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "landscape-max-500": {
          raw: "(orientation: landscape) and (max-height: 500px)",
        },
        xxl: {
          raw: "(min-width: 1440px)",
        },
      },
    },
  },
};
export default config;
