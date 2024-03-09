import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      // poppins: ["Poppins", "sans-serif"],
      // roboto: ["Roboto", "sans-serif"],
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  // prefix:"uttara",
  darkMode: "class",
  plugins: [],
} satisfies Config
