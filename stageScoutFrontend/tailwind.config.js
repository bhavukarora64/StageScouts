/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          200: '#738fb2'
        },
        green: {
          600: '#39dcc9'
        }
      }
    },
  },
  plugins: [],
}

