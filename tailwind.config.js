/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cjsWhite: "#eae5dc",
        cjsPink: "#DF9C76",
        cjsYellow: "#d59429",
        cjsBrown: "#b1582d",
      },
    },
  },
  plugins: [],
};
