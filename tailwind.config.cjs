/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      top: {
        "2/5": "40%",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
