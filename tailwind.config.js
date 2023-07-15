/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "bg-default": "#ffffff",
      "overlay": "rgba(0,0,0,0.5)",
      "light-green": "#9DD458",
      "darker-green": "#84bd3f",
    },
    fontSize: {
      "logo-fz": ["20px", "24px"],
      "text-logo-fz": ["14px", "17px"],
      "drawer-title": ["24px", "29px"]
    },
    extend: {
      boxShadow: {
        "main-shadow": "0px 10px 20px rgba(0, 0, 0, 0.04)",
        "card-shadow": "0px 14px 30px rgba(0, 0, 0, 0.05)",
        "drawer-shadow": "-10px 4px 24px rgba(0, 0, 0, 0.1)"
      },
    },
  },
  plugins: [],
}
