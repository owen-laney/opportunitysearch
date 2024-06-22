/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FBFBFA',
        'bg-secondary': '#F4F3F1',

        'border-primary': '#E5E3DF',

        'hover': '#EAE7E0',

        'fg-primary': '#333',
        'fg-secondary': '#666',
      }
    },
  },
  plugins: [],
}

