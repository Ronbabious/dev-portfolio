module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        icelandBlue: "#004DF9",
        linen: "##BDD4E7",
      },
      fontFamily: {
        bebasN: ['"Bebas Neue"', '"cursive"'],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tw-elements/dist/plugin"),
    // ...
  ],
};
