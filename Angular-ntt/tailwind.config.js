/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Specify the files you want Tailwind to analyze
    './public/index.html',   // Add other relevant file paths
  ],
  theme: {
    extend: {colors:{"custom-primary":"#00C6B3", "custom-accent":"#686995", "custom-accent-hover":"#445A7E","custom-bg": "#111827", "custom-bg-light" : "#244A64", "custom-text": "#EBFBFF"}},
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

