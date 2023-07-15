/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainColor: "#2058AA",
        secondaryColor: "#F18A02",
        darkBg: "#181635",
        darkerBg: "#0B0C21",
      },
      width: {
        half: "49%",
        third: "32%",
        fourth: "23%",
        fifth: "19%",
      },
      minWidth: {
        half: "49%",
      },
    },
  },
  plugins: [],
};
