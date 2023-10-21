/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customPurple': 'hsl(259, 100%, 65%)',
      },
    },
  },
  plugins: [],
}

