// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ✅ VERY IMPORTANT for Vite + Tailwind to scan all files
  ],
  theme: {
    extend: {
      colors: {
        "red-primary": "#E50914",
        charcoal: "#1e1e1e",
      },
    },
  },
  plugins: [],
};
