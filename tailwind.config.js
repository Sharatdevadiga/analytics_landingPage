/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
      },
      colors: {
        primary: {
          tint2: "#E9D7FE",
          tint1: "#D6BBFB",
          DEFAULT: "#7F56D9",
          shade1: "#6941C6",
          shade2: "#9E77ED",
        },
        white: "#FFFFFF",
        gray: {
          tint3: "#f9f5ff",
          tint2: "#EAECF0",
          tint1: "#cfcdc7",
          DEFAULT: "#D0D5DD",
          shade1: "#98A2B3",
          shade2: "#475467",
          shade3: "#344054",
        },
        success: {
          tint1: "#ecfdf3",
          DEFAULT: "#067647",
          shade1: "#ABEFC6",
        },
        shadow: {
          DEFAULT: "#1018280D",
        },
      },
      boxShadow: {
        custom: "0px 1px 2px 0px #1018280D",
      },
    },
  },
  plugins: [],
};
