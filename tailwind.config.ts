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
        // PRD Color Palette
        navy: {
          DEFAULT: "#1f2f5f",
          50: "#f0f2f7",
          100: "#d9dde9",
          200: "#b3bbd3",
          300: "#8d99bd",
          400: "#6777a7",
          500: "#415591",
          600: "#1f2f5f",
          700: "#19264c",
          800: "#131d39",
          900: "#0d1426",
        },
        green: {
          DEFAULT: "#245532",
          50: "#f0f7f2",
          100: "#d6eadb",
          200: "#add5b7",
          300: "#84c093",
          400: "#5bab6f",
          500: "#32964b",
          600: "#245532",
          700: "#1d4428",
          800: "#16331e",
          900: "#0f2214",
        },
        // Clinical Canvas
        white: "#ffffff",
        // Accent Shadow
        shadow: "rgba(31, 47, 95, 0.05)",
        // Legacy support
        cream: {
          DEFAULT: "#ffffff",
          50: "#ffffff",
          100: "#fafafa",
          200: "#f5f5f5",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        typewriter: "typewriter 0.05s steps(1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shimmer-gradient": "linear-gradient(90deg, transparent, rgba(36, 85, 50, 0.08), transparent)",
      },
      boxShadow: {
        "clinical": "0 4px 60px rgba(31, 47, 95, 0.08)",
        "clinical-lg": "0 8px 80px rgba(31, 47, 95, 0.12)",
        "clinical-hover": "0 12px 100px rgba(31, 47, 95, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
