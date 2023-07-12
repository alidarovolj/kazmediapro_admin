/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainColor: "#2058AA",
        secondaryColor: "#F18A02",
      },
      width: {
        half: "49%",
        third: "32%",
      },
      minWidth: {
        half: "49%",
      },
    },
  },
  plugins: [],
};
