// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // Updated paths
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f8d7da",
          DEFAULT: "#f05454",
          dark: "#a4161a",
        },
        accent: {
          light: "#ffd6e0",
          DEFAULT: "#f28c8c",
          dark: "#91394d",
        },
        background: {
          light: "#fff5f7",
          DEFAULT: "#ffebee",
          dark: "#732c2c",
        },
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  safelist: ["hover:bg-pink-400"], // Prevent purge
  plugins: [],
};
