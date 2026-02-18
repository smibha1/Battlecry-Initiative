import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grunge palette: dark + lighter greys for contrast
        grit: {
          950: "#0d0c0b",
          900: "#1a1816",
          800: "#2a2724",
          700: "#3d3935",
          600: "#524d48",
          500: "#6b655e",
          400: "#8a857d",
          300: "#a39e95",
        },
        // Darker red (not orange) for CTAs
        rust: {
          600: "#9e2a2a",
          500: "#b91c1c",
          400: "#c93a3a",
          300: "#dc5c5c",
        },
        cream: "#f5f0e8",
        sand: "#e8e0d4",
        sage: "#8b9a7d",
        // Blue logo / brand accent
        brand: {
          500: "#0ea5b0",
          400: "#22b8c4",
        },
        // Women's events / pink lion accent
        rose: {
          500: "#c45c6e",
          400: "#d97a8a",
          300: "#e89a9f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
