/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#181A1B',
      },
      backgroundImage: {
        'custom-grid': "url('./src/assets/bg-image.jpg')",
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        appear: 'appear linear',
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        appear: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1) translateX(0px)' },
        },

      },
    },
  },
  plugins: [
    
  ],
}
