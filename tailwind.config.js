/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      primary: '#0d6efd',
      secondary: '#6c757d',
     },
     fontFamily: {
sans:['Poppins', 'sans-serif'],
  },
  },
 },
  plugins: [],
}
