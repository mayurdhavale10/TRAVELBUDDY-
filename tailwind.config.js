/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#f59e0b',
        accent: '#f87171',
        backgroundLight: '#f3f4f6',
        backgroundDark: '#111827',
        textDark: '#374151',
        textLight: '#d1d5db',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Remove the line-clamp plugin since it's included by default
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp'), // Remove this line
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#1e3a8a',
          secondary: '#f59e0b',
          accent: '#f87171',
          neutral: '#3d4451',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
      {
        dark: {
          primary: '#2563eb',
          secondary: '#f59e0b',
          accent: '#f87171',
          neutral: '#1f2937',
          'base-100': '#111827',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
  },
}
