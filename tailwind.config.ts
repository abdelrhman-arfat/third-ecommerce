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
        hero: {
          50: "#fff0f3",
          100: "#ffccd5",
          200: "#ffb3c1",
          300: "#ff8fa3",
          400: "#ff758f",
          500: "#ff4d6d",
          600: "#c9184a",
          700: "#a4133c",
          800: "#800f2f",
          900: "#590d22",
        },
        prim: "#fdffff",
        secon: "#131313",
      },
    },
  },
  plugins: [],
} satisfies Config;
