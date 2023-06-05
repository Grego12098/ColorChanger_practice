/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
        },
      },
    },
  plugins: [],
  },
}
