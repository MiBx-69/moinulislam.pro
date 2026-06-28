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
        navy: {
          primary: "#F4F1EA",
          secondary: "#EFEAE1",
          card: "#FFFFFF",
          "card-hover": "#FBF9F4",
          border: "#E6E0D5",
        },
        accent: {
          DEFAULT: "#177D63",
          blue: "#BF8230",
          glow: "rgba(23, 125, 99, 0.10)",
          "border": "rgba(23, 125, 99, 0.30)",
        },
        text: {
          primary: "#1F1B17",
          secondary: "#5A534B",
          muted: "#8C8278",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(23,125,99,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(23,125,99,0.3)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(31,27,23,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(31,27,23,0.05) 1px, transparent 1px)",
        "accent-gradient": "linear-gradient(135deg, #177D63 0%, #BF8230 100%)",
        "card-gradient": "linear-gradient(135deg, #FFFFFF 0%, #FBF9F4 100%)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
