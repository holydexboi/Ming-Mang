/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    colors: {
      'primary': '#E6F2F8',
      'gradient1': '#0995E4',
      'gradient2': '#FFFFFF',
      'balancegrad1': '#84FC57',
      'balancegrad2': '#FFFFFF',
      'glograd': '#6FE044',
      'airtelgrad': '#E99CA3',
      'mtngrad': '#FEC528'
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
}
}
