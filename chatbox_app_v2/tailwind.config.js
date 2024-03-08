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
        "adventure-blue-adventure-blue-50": "#ecebfe",
        "neutral-50": "#c2c2c2",
        "adventure-blue-100": "#4335ef",
        "neutral-60": "#9e9e9e",
        "black-text": "#212121",
        "energy-red-energy-red-50": "#ffedee",
        "power-black-power-black-100": "#b3b3b3",
        dimgray: "#5f6368",
        black: "#000",
        "neutral-neutral-100": "#f5f5f5",
        "power-black-power-black-50": "#e7e7e7",
        "young-teal-young-teal-500": "#5de4d7",
        darkgreen: "rgba(0, 99, 34, 0.5)",
        "power-black-power-black-200": "#8e8e8e",
        yellowgreen: "rgba(193, 197, 0, 0.5)",
        darkred: "rgba(157, 0, 0, 0.5)",
        "power-black-power-black-500": "#0a0a0a",
        "neutral-90": "#404040",
        gray: "#090909",
        darkslategray: "#3b3b3b",
      },
      spacing: {},
      fontFamily: {
        "text-m-medium": "Inter",
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
      xl: "20px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
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
