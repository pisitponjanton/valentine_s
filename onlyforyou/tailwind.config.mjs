import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
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
      },
      fontFamily: {
        Line: ['Line', 'sans-serif'],
      },
      animation: {
        stalk: "stalk 3s ease-in-out",
        flower: "flower 4s ease-in-out forwards",
        flower1: "flower 2s 3s ease-in-out forwards",
        flower2: "flower 2s 3.5s ease-in-out forwards",
        flower3: "flower 2s 4s ease-in-out forwards",
        flower4: "flower 2s 4.5s ease-in-out forwards",
        skew: "skew 1s ease-in-out forwards",
        opacity: "opacitys 0.7s ease-in-out",
        up:"up 3s ease-in-out infinite",
      },
      keyframes: {
        stalk: {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" }
        },
        flower: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        skew:{
          "0%": {transform: "skew(0)"},
          "100%":   {transform: "skew(6deg)",display: "none"},
        },
        opacitys:{
          "0%":{opacity: "0"},
          "100%":{opacity: "1"},
        },
        up:{
          "0%":{transform:"translateY(0px)"},
          "100%":{transform:"translateY(-1000px)"},
        },
      },
    },
  },
  plugins: [],
};
