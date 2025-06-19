/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-primary": "#cc0000",
        charcoal: "#333333",
      },
    },
  },
  plugins: [],
}
