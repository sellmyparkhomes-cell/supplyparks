import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1c3d33",
        "forest-deep": "#0f2b23",
        paper: "#f5f1e8",
        "paper-dim": "#ece5d3",
        rust: "#c1502e",
        "rust-deep": "#8f3a20",
        ink: "#231f1a",
        "ink-soft": "#5c564a",
        line: "#d8d0bc",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["IBM Plex Sans", "sans-serif"],
      },
      borderRadius: {
        card: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
