/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair_display: ["Playfair Display", 'serif'],
        oswald: ["Oswald", 'sans-serif']
      },
      backgroundImage: {
        'custom-bg1': "url('./src/assets/abstract-black-line-contour-pattern-white-background-wallpaper_34959020.png')",
        'custom-bg2': "url('./src/assets/abstract-black-line-contour-pattern2-white-background-wallpaper_34959020 copy.png')",
        'myImage' : "url('./src/assets/MyPhoto.png')"
      },
      lineHeight: {
        '0': '0',
      },
      keyframes: {
        spinAndMove: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(50px) translateY(0) rotate(90deg)' },
          '50%': { transform: 'translateX(50px) translateY(50px) rotate(180deg)' },
          '75%': { transform: 'translateX(0) translateY(50px) rotate(270deg)' },
          '100%': { transform: 'translateX(0) translateY(0) rotate(360deg)' },
        },
        moveCircular: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(100px) translateY(0)' },
          '50%': { transform: 'translateX(100px) translateY(100px)' },
          '75%': { transform: 'translateX(0) translateY(100px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        bounceOnHover: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
      animation: {
        'spin-and-move': 'spinAndMove 4s linear infinite',
        'move-circular': 'moveCircular 4s linear infinite',
        'move-fast-circular': 'moveCircular 3s linear infinite',
        'bounce-on-hover': 'bounceOnHover 1s ease-in-out',
      },
    },
  },
  plugins: [],
}

