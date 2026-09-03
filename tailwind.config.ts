import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--color-void)",
        surface: "var(--color-surface)",
        glass: "var(--glass-bg-1)",
        "glass-border": "var(--glass-border)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        cyan: {
          DEFAULT: "var(--color-cyan)",
          soft: "var(--color-cyan)",
        },
        violet: {
          DEFAULT: "var(--color-violet)",
          soft: "var(--color-violet)",
        },
        rose: {
          DEFAULT: "var(--color-rose)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-glow": "var(--grid-glow)",
        "noise": "url('/assets/noise.png')",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
        neon: "0 0 20px rgba(95,240,224,0.35), 0 0 60px rgba(124,92,255,0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        "spin-slower": "spin-slow 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
