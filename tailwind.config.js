/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spinnaker: ["Spinnaker, Noto-Sans, Raleway, sans-serif"],
      },
    },
  },
  plugins: [],
};
