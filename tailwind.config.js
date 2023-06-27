/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "850px",
    },
    colors: {
      primary: {
        100 : "hsl(220, 98%, 61%)",
        gradient100: "hsl(192, 100%, 67%)",
        gradient200: "hsl(280, 87%, 65%)"
      },
      secondary: {
        100: "hsl(0, 0%, 98%)",
        200: "hsl(236, 33%, 92%)",
        300: "hsl(233, 11%, 84%)",
        400: "hsl(236, 9%, 61%)",
        500: "hsl(235, 19%, 35%)",
      },
      dark: {
        100: "hsl(235, 21%, 11%)",
        200: "hsl(235, 24%, 19%)",
        300: "hsl(234, 39%, 85%)",
        400: "hsl(236, 33%, 92%)",
        500: "hsl(234, 11%, 52%)",
        600: "hsl(233, 14%, 35%)",
        700: "hsl(237, 14%, 26%)",
      },
      white : "#fff",
    },
    extend: {
      backgroundImage: {
        'hero-pattern-dark': 'url("/images/bg-desktop-dark.jpg")',
        'hero-pattern-light': 'url("/images/bg-desktop-light.jpg")',
      },
    },
  },
  plugins: [],
};
