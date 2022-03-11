module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      color: {
        icelandBlue: '#004DF9'
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
