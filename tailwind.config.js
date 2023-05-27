/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      title: ["'Roboto Mono'", "cursive"],
      devTips: ["'Delicious Handrawn'", "cursive"],
      contrastTool: ["Poppins", "sans-serif"],
      colourmatic: ["'Press Start 2P'", "cursive"],
    },
    extend: {
      backgroundImage: {
        herocta: "linear-gradient(0deg, #d4cdfa 20%, rgba(0,0,0,0) 50%)",
        heroctadk: "linear-gradient(0deg, #050214 20%, rgba(0,0,0,0) 50%)",
      },
      gradientColorStopPositions: {
        late: "5%",
      },
      screens: {
        xxs: "320px",
        xs: "420px",
      },

      fontSize: {
        "3.5xl": "2.2rem",
      },
      textShadow: {
        colourmatic: "4px 0px #757575",
        title: "1px 1px 4px #000000",
      },
      dropShadow: {
        logo: "1px 2px 3px rgba(0, 0, 0, 1)",
        hero: "-0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.75)",
        "hero-dk": "-1vw 1vw 2vw #999",
        star: "-1px 1px 7px rgba(0, 0, 0, 1)",
        "star-dk": "-1px 1px 200px white",
      },
      gridTemplateColumns: {
        frAutoFr: "1fr auto 1fr",
        autoFrAuto: "auto 1fr auto",
        autoAuto: "auto auto",
        autoFr: "auto 1fr",
      },
      gridTemplateRows: {
        frAutoFr: "1fr auto 1fr",
        autoFrAuto: "auto 1fr auto",
        autoAuto: "auto auto",
        autoFr: "auto 1fr",
      },
      minWidth: {
        body: "280px",
      },
      maxWidth: {
        body: "1250px",
      },
      minHeight: {
        body: "1250px",
      },
      width: {
        body: "calc(100vw - 4rem)",
        "body-sm": "calc(100vw - 2rem)",
      },
      colors: {
        // primary: "#417b9b", // mild blue
        // primary: "#53655f", // murky green
        // primary: "#419b7d", // mint green
        "primary-dk": "#e0e0e0",
        primary: "#37836a",
        secondary: "#050214",
        "secondary-light": "#d4cdfa",

        "bg-var-dk": "#000000",
        "bg-dk": "#1f1f1f",
        "deco-dk": "#3d3d3d",
        "border-dk": "#6b6b6b",
        "txt-low-dk": "#878787",
        "txt-mid-dk": "#ababab",
        "txt-main-dk": "#ffffff",

        "txt-main": "#000000",
        "txt-mid": "#474747",
        "txt-low": "#636363",
        border: "#919191",
        deco: "#e0e0e0",
        "bg-var": "#fafafa",
        bg: "#ffffff",
      },
      boxShadow: {
        bottom: "1px 3px 0px -2px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
