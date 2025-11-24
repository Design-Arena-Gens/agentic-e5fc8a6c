import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      colors: {
        cosmic: {
          50: "#f4f5ff",
          100: "#e3e6ff",
          200: "#c2c6ff",
          300: "#8e95ff",
          400: "#5b64ff",
          500: "#363af9",
          600: "#1f23d7",
          700: "#1a1faf",
          800: "#191f8a",
          900: "#141a6f",
          950: "#0d1040"
        }
      },
      backgroundImage: {
        "cosmic-gradient":
          "radial-gradient(circle at top left, rgba(91,100,255,0.45), transparent 55%), radial-gradient(circle at top right, rgba(54,58,249,0.4), transparent 50%), radial-gradient(circle at bottom, rgba(26,31,175,0.35), transparent 55%)"
      },
      boxShadow: {
        halo: "0 0 60px rgba(91, 100, 255, 0.35)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
