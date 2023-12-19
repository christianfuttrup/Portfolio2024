/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'raisin': '#232528',
        'orange': '#FFA400',
        'lightblue': '#009FFD',
        'darkblue': '#2A2A72',
        'aliceblue': '#EAF6FF'
      }
    }
  },
  plugins: []
};