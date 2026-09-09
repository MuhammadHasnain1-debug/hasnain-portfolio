import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F26A21",
        "orange-soft": "#FF8A47",
        "orange-deep": "#C9531A",
        cream: "#FFF7EF",
        paper: "#FFFFFF",
        ink: "#1B1408",
        "ink-soft": "#4A3D2C",
      },
      fontFamily: {
        kanit: ["var(--font-kanit)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 26s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
