import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f1f1",
        buttonColor: "#F98585",
        sectionbg: "#F4E2E2",
        textColor: "#21243D",
        footerColor: "#faf5f5",
        eclipseColor: "#dfd8d8",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
