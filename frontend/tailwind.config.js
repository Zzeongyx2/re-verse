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
        sub1: "#1587F1",
        sub2: "#98DF23",
        sub3: "#FF7067",
        sub4: "#EF5DA8",
        extra1: "#FACC04",
        extra2: "#FAB504",
      },
      fontFamily: {
        neon: ["Beon", "sans-serif"],
        travel: ["Jeju Gothic", "sans-serif"],
        diary: ["KNPSKkomi-Regular00"],
        monitor: ["HBIOS-SYS"],
      },
      dropShadow: {
        "3xl": [
          "0 0 0 transparent",
          // "0 0 0px #0044ed",
          "0 0 2px #0049ff",
          "0 0 5px rgba(0, 73, 255, 0.5)",
          "0 0 4px #0049ff",
          // "0 0 6px #0049ff",
          "0 0 6px rgba(0, 73, 255, 0.5)",
        ],
        // "3xl": [
        //   "0 0 0 transparent",
        //   "0 0 10px #0049ff",
        //   "0 0 20px rgba(0, 73, 255, 0.5)",
        //   "0 0 40px #0049ff",
        //   "0 0 300px #0049ff",
        //   "0 0 200px #0049ff",
        //   "0 0 300px #0049ff",
        //   "0 0 500px #0049ff",
        // ],
        "4xl": ["0 0 2px #fa61bf", "0 0 6px #fa61bf"],
        "5xl": [
          "0 0 0 transparent",
          "0 0 10px #0049ff",
          "0 0 20px rgba(0, 73, 255, 0.5)",
          "0 0 10px rgba(0, 73, 255, 0.5)",
          "0 0 40px #0049ff",
          "0 0 300px #0049ff",
          "0 0 200px #0049ff",
        ],
      },
      animation: {
        flicker: "flicker 5s infinite alternate",
        blinking: "blinking 0.01s infinite alternate",
        blinking2: "blinking 0.02s infinite alternate",
      },
      keyframes: {
        flicker: {
          "10%, 13%, 40%, 43%, 46%": { opacity: 1 },
          "12%": { opacity: 0.7 },
          "42%": { opacity: 0.8 },
          "45%": { opacity: 0.2 },
        },
        blinking: {
          "75%": { opacity: 0.8 },
        },
      },
      boxShadow: {
        "3xl":
          "inset 0 0 22px 3px rgba(0, 73, 255, 0.35), 0 0 20px 1px rgba(72, 120, 239, 0.5), 0 0 28px 5px rgba(0, 73, 255, 0.5)",

        "4xl":
          "inset 0 0 18px rgba(251, 255, 0, 0.35), 0 0 18px 5px rgba(251, 255, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
