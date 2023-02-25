module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "rotate-hehe": "rotate-hehe 10s linear infinite",
      },
      keyframes: {
        "rotate-hehe": {
          "0%": { rotate: "0deg" },
          "50%": { scale: "1 1.5" },
          "100%": { rotate: "360deg" },
        },
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
