const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      sans: ["Lato", "system-ui", "BlinkMacSystemFont", "-apple-system", "Segoe UI", "sans-serif"]
    },
    extend: {
      colors: {
        green: {
          ...colors.green,
          "050": "#fbfffc"
        },
        semi: {
          "75": "rgb(0,0,0,0.75)"
        }
      },
      fontSize: {
        xxs: ".65rem"
      },
      width: {
        "80": "20rem",
        "96": "24rem",
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "176": "44rem"
      },
      maxWidth: {
        "80": "20rem"
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "9/16": "56.25%"
      }
    }
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"]
  },
  plugins: [require("tailwindcss-transitions")()]
};
