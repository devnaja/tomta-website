/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // extend: {
    backgroundImage: (theme) => ({
      "hero-pattern": "url('/src/assets/images/banner1.jpg')",
      "hero-homepage": "url('/src/assets/images/bg.jpg')",
      "img-logo": "url('/src/assets/images/logo/logo-ori-transparent.png')",
    }),
    colors: ({ colors }) => ({
      primary: "#002349", //dark blue
      secondary: "#00E0E0", // caribbean current green
      background: "#DAF5FF", // light cream
      button: "#FFD3D3", //pink
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "767px",
      lg: "1024px",
      xl: "1280px",
    },
    // },
  },
  plugins: [],
};
