/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '500px': '500px',
      },
    },
    fontFamily: {
      'logo': 'Dongle, sans-serif',
      'text': 'Ubuntu, sans-serif'
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base',
    }),
  ],
}

