/** @type {import('tailwindcss').Config} */
module.exports = {
  // preflight 설정 해제해야지 기존 태그들 사용 가능 for react quill
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base0: "#ebedf2",
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
        extra3: "#7186B2",
      },
      fontFamily: {
        neon: ["Beon", "sans-serif"],
        travel: ["Jeju Gothic", "sans-serif"],
        diary: ["KNPSKkomi-Regular00"],
        monitor: ["HBIOS-SYS"],
        hand: ["LeeSeoyun"],
      },
      dropShadow: {
        "3xl": [
          "0 0 0 transparent",
          "0 0 2px #0049ff",
          "0 0 5px rgba(0, 73, 255, 0.5)",
          "0 0 4px #0049ff",
          "0 0 6px rgba(0, 73, 255, 0.5)",
        ],
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
        flicker2: "flicker 8s infinite alternate",
        blinking: "blinking 0.01s infinite alternate",
        blinking2: "blinking 0.02s infinite alternate",
        fadein: "fadein 1s ease-in-out",
        fadeout: "fadeout 1s ease-in-out",
        light: "light 15s linear infinite",
        "spin-slow": "spin 3s linear infinite",
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
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeout: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        light: {
          "0%": { transform: "translateY(100vh) scale(0)" },
          "100%": { transform: "translateY(-10vh) scale(1)" },
        },
      },
      boxShadow: {
        "3xl":
          "inset 0 0 22px 3px rgba(0, 73, 255, 0.35), 0 0 20px 1px rgba(72, 120, 239, 0.5), 0 0 28px 5px rgba(0, 73, 255, 0.5)",

        "4xl":
          "inset 0 0 18px rgba(251, 255, 0, 0.35), 0 0 18px 5px rgba(251, 255, 0, 0.35)",
        "5xl": "0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc",
        "6xl": "0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
