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
        forest: {
          DEFAULT: "#1A472A",
          50: "#E8F5EC",
          100: "#C5E5CE",
          200: "#9DD4AD",
          300: "#74C38C",
          400: "#4EB36A",
          500: "#2A8B4A",
          600: "#1A472A",
          700: "#153A22",
          800: "#102D1A",
          900: "#0B2013",
        },
        navy: {
          DEFAULT: "#1B2E56",
          50: "#E8ECF3",
          100: "#C5D0E1",
          200: "#9FB1CB",
          300: "#7892B5",
          400: "#517399",
          500: "#355A84",
          600: "#1B2E56",
          700: "#162546",
          800: "#111C36",
          900: "#0C1326",
        },
        cream: {
          DEFAULT: "#FAF9F6",
          50: "#FFFFFF",
          100: "#FAF9F6",
          200: "#F5F3ED",
          300: "#EFEBE1",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FCF8E8",
          100: "#F7ECC5",
          200: "#F1DF9D",
          300: "#EBD275",
          400: "#E5C54D",
          500: "#D4AF37",
          600: "#B8962D",
          700: "#967A24",
          800: "#745E1B",
          900: "#524312",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
