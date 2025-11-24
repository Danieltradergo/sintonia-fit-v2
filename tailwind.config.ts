import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink-primary': '#f472b6',
        'pink-light': '#fbcfe8',
        'pink-pastel': '#fce7f3',
        'gray-text': '#6b7280',
        'gray-bg': '#f9fafb',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
