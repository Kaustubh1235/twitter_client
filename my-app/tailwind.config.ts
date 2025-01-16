module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f8d7da", // Light pink
          DEFAULT: "#f05454", // Vibrant pinkish-red
          dark: "#a4161a", // Deep red
        },
        accent: {
          light: "#ffd6e0", // Soft pink
          DEFAULT: "#f28c8c", // Pastel red
          dark: "#91394d", // Dark accent
        },
        background: {
          light: "#fff5f7", // Light background
          DEFAULT: "#ffebee", // Default background
          dark: "#732c2c", // Dark theme background
        },
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ["hover"], // Explicitly enable hover for background colors
      textColor: ["hover"], // Enable hover for text colors
    },
  },
};
