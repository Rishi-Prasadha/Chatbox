/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-10": "#fff",
        whitesmoke: {
          100: "rgba(242, 242, 242, 0.6)",
          200: "rgba(242, 242, 242, 0.4)",
        },
        "neutral-50": "#c2c2c2",
        "adventure-blue-adventure-blue-500": "#4335ef",
        "neutral-neutral-100": "#f5f5f5",
        "neutral-60": "#9e9e9e",
        "power-black-power-black-50": "#e7e7e7",
        "adventure-blue-adventure-blue-50": "#ecebfe",
        black: "#000",
        "young-teal-young-teal-500": "#5de4d7",
        dimgray: "#5f6368",
        "power-black-power-black-100": "#b3b3b3",
        "black-text": "#212121",
        darkgreen: "rgba(0, 99, 34, 0.5)",
        "power-black-power-black-200": "#8e8e8e",
        yellowgreen: "rgba(193, 197, 0, 0.5)",
        darkred: "rgba(157, 0, 0, 0.5)",
        "power-black-power-black-500": "#0a0a0a",
        "neutral-90": "#404040",
        gray: "#090909",
        darkslategray: "#3b3b3b",
        "energy-red-energy-red-50": "#ffedee",
      },
      spacing: {},
      fontFamily: {
        "text-l-medium": "Inter",
      },
      borderRadius: {
        "3xl": "22px",
        "3xs": "10px",
        "81xl": "100px",
        "6xs": "7px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
