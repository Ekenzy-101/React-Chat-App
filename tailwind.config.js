module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#000000",
      border: "#E2E2E2",
      current: "currentColor",
      "dark-gray": "#808080",
      "dark-green": "#1DAB67",
      gray: "#BEBEBE",
      green: "#1EBE71",
      "light-gray": "#F2F2F2",
      "milk-white": "#FCFCFC",
      red: "#CF3232",
      transparent: "transparent",
      white: "#FFFFFF",
    },
    fontFamily: {
      "nova-bold": ["Proxima Nova Bold", "sans-serif"],
      "nova-light": ["Proxima Nova Light", "sans-serif"],
      "nova-regular": ["Proxima Nova Regular", "sans-serif"],
      "geo-bold": ["Geometria Bold", "sans-serif"],
      "geo-medium": ["Geometria Medium", "sans-serif"],
      "geo-regular": ["Geometria Regular", "sans-serif"],
    },
    extend: {
      borderRadius: {
        2.5: "0.625rem",
        "2.5xl": "1.25rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      height: {
        11.5: "2.875rem",
        38.75: "9.6875rem",
      },
      inset: {
        0.5: "0.125rem",
      },
      margin: {
        2.5: "0.625rem",
        5.5: "1.375rem",
        22: "5.5rem",
        "-19.5": "-4.875rem",
        120: "30rem",
      },
      maxHeight: {
        "fit-150": "calc(100vh - 150px)",
        "fit-270": "calc(100vh - 310px)",
      },
      maxWidth: {
        72: "18rem",
        198: "49.5rem",
      },
      padding: {
        1.5: "0.375rem",
        5.5: "1.375rem",
      },
      width: {
        11.5: "2.875rem",
        22.5: "5.625rem",
        125: "31.25rem",
        fit: "fit-content",
      },
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      12.5: "3.125rem",
      38.75: "9.6875rem",
      full: "100%",
      screen: "100vh",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
