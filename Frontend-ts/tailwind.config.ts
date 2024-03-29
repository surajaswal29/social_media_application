/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  // prefix:"uttara",
  darkMode: "class",
  plugins: [
    require("tailwindcss-animate"),
    require("@vidstack/react/tailwind.cjs")({
      prefix: "media",
    }),
  ],
} satisfies Config
