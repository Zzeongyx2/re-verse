/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base1: "#333333",
        base2: "#242C39",
        basic1: "#757575",
        basic2: "#D9D9D9",
        basic3: "#B7C6E7",
        basic4: "#F3F3F3",
        main1: "#00BEFF",
        main2: "#D2DF23",
        main3: "#C940E4",
        sub1: "1587F1",
        sub2: "#98DF23",
        sub3: "#FF7067",
        sub4: "#EF5DA8",
      },
      fontFamily: {
        travel: ["Jeju Gothic", "sans-serif"],
        diary: ["KNPSKkomi-Regular00"],
        monitor: ["HBIOS-SYS"],
      },
    },
  },
  plugins: [],
};
