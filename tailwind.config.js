/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.html"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        "deep-green": "#2E3D36",
        "green-light": "#3A4F45",
        cream: "#E8E4D9",
        leather: "#6B4423",
        "leather-light": "#8B5E3C",
        "soft-grey": "#F5F5F5",
        "text-dark": "#1A2420",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Lora", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        warm: "0 20px 60px -20px rgba(26, 36, 32, 0.35)",
        "warm-sm": "0 8px 24px -8px rgba(26, 36, 32, 0.25)",
        "warm-lg": "0 30px 80px -24px rgba(26, 36, 32, 0.45)",
      },
      backgroundImage: {
        "diagonal-green": "linear-gradient(135deg, #2E3D36 0%, #3A4F45 55%, #2E3D36 100%)",
        "diagonal-leather": "linear-gradient(135deg, #6B4423 0%, #8B5E3C 100%)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
