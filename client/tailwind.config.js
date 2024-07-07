/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgimage': "url('https://images.unsplash.com/photo-1611077543575-445af69a7adf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpZXR8ZW58MHx8MHx8fDA%3D')",
        
      }
    },
  },
  plugins: [],
}