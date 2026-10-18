import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#171717", muted: "#737373", accent: "#2563eb" }, boxShadow: { soft: "0 12px 40px rgba(15,23,42,.07)" } } },
  plugins: []
};
export default config;