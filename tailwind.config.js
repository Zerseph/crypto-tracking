/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl-dark": "0 15px 25px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
