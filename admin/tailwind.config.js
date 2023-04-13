/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'logo': 'Dongle, sans-serif',
      'text': 'Ubuntu, sans-serif'
    }
  },
  plugins: [],
}

