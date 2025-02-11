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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-light-cyan': 'hsl(180, 52%, 96%)',
      },
      backgroundImage: {
        'mobile-image': "url('/images/bg-header-mobile.svg')",
        'tablet-image': "url('/images/bg-header-mobile.svg')",
        'desktop-image': "url('/images/bg-header-desktop.svg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
