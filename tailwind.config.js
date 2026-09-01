/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f0',
          100: '#f5ebe0',
          200: '#ebd7c1',
          300: '#ddb8a0',
          400: '#c7907a',
          500: '#b57660',
          600: '#a05c47',
          700: '#84483b',
          800: '#6d3a31',
          900: '#573029',
        },
        accent: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fecdca',
          300: '#faa29f',
          400: '#f67c72',
          500: '#f04438',
          600: '#d92d20',
          700: '#b42318',
          800: '#912018',
          900: '#55160c',
        },
        dark: '#1a1a1a',
        light: '#f8f8f8',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        display: ['serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
