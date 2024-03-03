/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #274C5B",
        green: "#7EB693",
        white_input: "#FAFAFA",
        gray_border: "#E0E0E0",
        yellow_btn: "#EFD372",
        yellowTail_green: "#68A47F",
        text_green: "#525C60",
        about_bg: "#F9F8F8",
        cost_gray:"#B8B8B8",
        gray_bg:"#ECECEC",
      },
      fontFamily: {
        font1: ["Yellowtail"],
        font2: ["Open Sans"],
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1440px",
        },
      },
    },
  },
  plugins: [],
};
