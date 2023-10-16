/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CCDDB7',
        secondary: '#6A5B6E',
        tetriatry: '#F0B7B3'
      },
      fontFamily: {
        chelsea: ["chelsea","sans-serif"],
        scriber: ["scriber","sans-serif"],
        mono: ["mono","sans-serif"],
        righteous: ["righteous","sans-serif"],
        caviar: ["caviar","sans-serif"]
      }
    },
  },
  plugins: [],
}

