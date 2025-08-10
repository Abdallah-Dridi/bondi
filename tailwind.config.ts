/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#10B981', // A modern, vibrant green
        'light-green': '#ECFDF5',   // A very light green for backgrounds
        'background': '#F9FAFB',    // A soft off-white background
        'text-dark': '#111827',     // A deep gray for primary text
        'text-light': '#6B7280',    // A lighter gray for secondary text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(16, 185, 129, 0.3)', // A green glow effect
      }
    },
  },
  plugins: [],
};

export default config;