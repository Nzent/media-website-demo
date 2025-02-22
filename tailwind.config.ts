import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontSize: {
      display: "3.5rem", // 56px for large headlines
      heading: "2.25rem", // 36px for section headings
      subheading: "1.5rem", // 24px for subheadings
      body: "1.125rem", // 16px for body text
      caption: "0.875rem", // 14px for captions or small text
    },
  },
  plugins: [],
} satisfies Config;
