/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kita buat warna 'brand-pink'
        'brand-pink': {
          light: '#FFF1F2',
          DEFAULT: '#EC4899',
          dark: '#BE185D',
        },
        'brand-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}