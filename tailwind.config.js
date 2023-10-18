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
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px"
        }
      },
      colors: {
        primary: '#F0B7B3',
        secondary: '#222831',
        tetriatry: '#CCDDB7'
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

