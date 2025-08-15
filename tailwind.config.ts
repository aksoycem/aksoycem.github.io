import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A192F",
        gold: "#FFD700",
      },
        // Optional: Typography scale tweaks
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft": "0 10px 30px rgba(0,0,0,0.15)",
      }
    },
  },
  plugins: [],
};
export default config;
