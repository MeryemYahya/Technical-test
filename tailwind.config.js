/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#fe5454",
        secondary: "#f7f7f7"
      },
      animation: {
        'appear': 'appear 0.5s linear',
      },
      keyframes: {
        appear: {
          '0%': { transform: 'translateY(1.5rem)' },
          '100%': { transform: 'translateX(0px)' },
        }
      }
    },
  },
  plugins: [],
}
