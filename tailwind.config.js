/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueEcommerce': '#1190CB',
        'blueLightEcommerce': '#60cdff',
        'redEcommerce': '#D0011C',
        'blueStrongEcommerce': '#1f82b1'
      },
    },

  },
  plugins: [],
}

