/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          primary: '#B80000',
        },
        charcoal: '#2C2C2C',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
