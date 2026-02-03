/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fc-green': '#00ff85',
        'fc-blue': '#021024',
        'fc-dark': '#050505',
      },
    },
  },
  plugins: [],
}