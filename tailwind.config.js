/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        green1:"#124A54",
        green2: "#223D3E",
        green3: "#8E999B",
        green4: "#039EA3"
      }, 
      maxWidth: {
        "7rem": "7rem"
      },
      padding: {
        "2rem": "2rem"
      }
    },
  },
  plugins: [],
}
