/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Specify the files you want Tailwind to analyze
    './public/index.html',   // Add other relevant file paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

