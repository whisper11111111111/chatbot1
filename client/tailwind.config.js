/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'apple-light': '#ffffff',
        'apple-dark': '#1d1d1f',
        'apple-blue': '#0071e3',
        'apple-gray': '#f5f5f7',
        'apple-gray-dark': '#86868b',
        'apple-gray-light': '#fbfbfd'
      },
      fontFamily: {
        'apple': ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'apple': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}