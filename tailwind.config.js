/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#141414",
        gray: "#808080",
        royalblue: "#2659c3",
      },
      fontFamily: {
        "netflix-sans-medium-26": "'Netflix Sans'",
        helvetica: "Helvetica",
      },
      borderRadius: {
        "mid-7": "17.7px",
        "4xs-9": "8.9px",
        "16xl-4": "35.4px",
        "4xl-2": "23.2px",
        lg: "18px",
        "13xl": "32px",
      },
    },
    fontSize: {
      "mid-7": "17.7px",
      "7xl-6": "26.6px",
      "7xl": "26px",
      "smi-2": "12.2px",
      smi: "13px",
      "mini-4": "14.4px",
      "16xl-4": "35.4px",
      "base-5": "15.5px",
      "3xl-1": "22.1px",
      "34xl-1": "53.1px",
      "13xl": "32px",
      "5xl": "24px",
      "53xl": "72px",
      "25xl": "44px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
