/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'herobg': "url('https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg')",
      }
    },
  },
  plugins: [],
}