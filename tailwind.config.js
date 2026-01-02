/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/sections/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mist: {
          50: '#F3F6FB',
          100: '#E5EDF7',
          200: '#D5E6FF',
          300: '#B7CFF2',
          400: '#9ABFFB',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mistblue: {
          primary: '#9ABFFB',
          'primary-content': '#0B1120',
          secondary: '#D5E6FF',
          accent: '#38BDF8',
          neutral: '#111827',
          'base-100': '#F3F6FB',
          'base-200': '#E5EDF7',
          'base-300': '#D1D9E6',
          info: '#0EA5E9',
          success: '#22C55E',
          warning: '#FACC15',
          error: '#EF4444',
        },
      },
    ],
    base: true,
    styled: true,
    logs: false,
  },
}
