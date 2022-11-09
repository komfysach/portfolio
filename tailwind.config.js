/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vercetti: ['Vercetti','sans-serif'],
        inconsolata: ['Inconsolata-Light', 'monospace'],
      },
      cursor: {
        'atom-default': 'url(https://cdn.custom-cursor.com/db/10794/32/minimal-atom-cursor.png), default',
        'atom-pointer': 'url(https://cdn.custom-cursor.com/db/10793/32/minimal-atom-pointer.png), pointer',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
};
