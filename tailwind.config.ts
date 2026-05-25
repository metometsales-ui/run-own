import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        wind: {
          black: "#0B0B0B",
          lime: "#B7FF00",
          fog: "#F5F5F5",
          ink: "#171717",
          muted: "#737373"
        }
      },
      boxShadow: {
        premium: "0 18px 60px rgba(11, 11, 11, 0.10)",
        lift: "0 12px 32px rgba(11, 11, 11, 0.08)"
      }
    }
  },
  plugins: [tailwindAnimate]
} satisfies Config;
