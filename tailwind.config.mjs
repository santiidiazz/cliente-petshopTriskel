/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f2f7eb',
          100: '#e0edcc',
          200: '#c2db99',
          300: '#9dc466',
          400: '#7aab3a',
          500: '#639922',
          600: '#4e7a1a',
          700: '#3a5c13',
          800: '#27400d',
          900: '#152308',
        },
        cream: '#faf8f2',
        paw:   '#f5f0e8',
        amber: {
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'card':       '0 2px 12px 0 rgba(0,0,0,0.06)',
        'card-hover': '0 8px 30px 0 rgba(0,0,0,0.12)',
        'float':      '0 20px 60px 0 rgba(0,0,0,0.15)',
      },
      fontFamily: {
        display: ['Nunito', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}