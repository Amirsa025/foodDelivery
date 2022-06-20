/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.425)',
      },
      boxShadow: {
        'Sticky': '5px 5px 15px -5px #fde4e4',
      }
    },
    backgroundImage: {
      'Banner-Allfoods': "url('config/images/banner.jpg')",
    }
  },
  plugins: [],
}
