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
      },
      lineHeight: {
        '0': '0',
      },
    },
  },
  plugins: [],
}

