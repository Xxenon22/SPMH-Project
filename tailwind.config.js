import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#B88554',
        accent: '#654326',
      },
    },
  },
  plugins: [daisyui],
}
