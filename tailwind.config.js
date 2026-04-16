/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030014",
        primary: "#7000ff",
        secondary: "#ff00d9",
        accent: "#00d4ff",
        glass: "rgba(255, 255, 255, 0.05)",
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgba(112, 0, 255, 0.5)' },
          '100%': { 'box-shadow': '0 0 20px rgba(112, 0, 255, 0.8), 0 0 40px rgba(255, 0, 217, 0.6)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
