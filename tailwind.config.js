/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: {
            50: "#f7f8f8",
            100: "#edf0f1",
            200: "#c8d2d2",
            300: "#b6c3c3",
            400: "#8ea2a1",
            500: "#708786",
            600: "#5a6f6f",
            700: "#4a595a",
            800: "#3f4d4d",
            900: "#384142",
            950: "#252b2c",
          },
          blue: {
            50: "#f0f7fe",
            100: "#deecfb",
            200: "#c5dff8",
            300: "#9dccf3",
            400: "#6eafec",
            500: "#5596e6",
            600: "#3775d9",
            700: "#2e60c7",
            800: "#2b4fa2",
            900: "#284580",
            950: "#1d2b4e",
          },
        },
      },
      spacing: {
        15: "3.75rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
