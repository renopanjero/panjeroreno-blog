import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        xs1: "420px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navdark: "#030637",
        navlight: "#E4E0E1",
      },
    },
  },
  plugins: [],
};
export default config;
