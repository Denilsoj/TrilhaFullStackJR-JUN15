import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     boxShadow: {
      '3xl': '0px -1px 6px rgba(229, 57, 57, 1)',
      'xl': '0 0 4px rgba(229, 57, 57, 1)',
      '2xl': '0 0 6px rgba(229, 57, 57, 1)'
     }
    },
    colors: {
      'primary': 'rgba(229, 57, 57, 1)',
      'secundary': 'rgba(0, 0, 0, 1)',
      'white': '#FFFF'
    }
  },
  plugins: [],
};
export default config;
