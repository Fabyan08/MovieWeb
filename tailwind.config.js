/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#FE024E",
        secondary: "#EB507F",
        gray: "#8C8989",
        gray2: "#CDCDCD"
      },
    },
  },
  plugins: [],
};
