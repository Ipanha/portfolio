/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D", // Dark background
        secondary: "#171717", // Lighter dark for cards/sections
        accent: "#4f46e5", // A vibrant indigo for highlights
        "text-main": "#F2F2F2", // Primary text
        "text-secondary": "#A6A6A6", // Subdued text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "subtle-glow": "subtleGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        subtleGlow: {
          "0%": { boxShadow: "0 0 10px -5px #4f46e5" },
          "100%": { boxShadow: "0 0 25px -5px #4f46e5" },
        },
      },
    },
  },
  plugins: [],
};
