/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans your src directory
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0780D7',
      },
    },
  },
  plugins: [],
}