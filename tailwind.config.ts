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
          primary: "#0B0F19",
          secondary: "#0D1117",
          card: "#111827",
          "card-hover": "#1A2235",
          border: "#1E293B",
        },
        accent: {
          DEFAULT: "#00D9FF",
          blue: "#3B82F6",
          glow: "rgba(0, 217, 255, 0.15)",
          "border": "rgba(0, 217, 255, 0.25)",
        },
        text: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
          muted: "#64748B",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,217,255,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0,217,255,0.5)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(30,41,59,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.5) 1px, transparent 1px)",
        "accent-gradient": "linear-gradient(135deg, #00D9FF 0%, #3B82F6 100%)",
        "card-gradient": "linear-gradient(135deg, #111827 0%, #1A2235 100%)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
