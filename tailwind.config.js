// nullab-design-system/tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Instrument Serif', 'serif'],
        'sans': ['"Be Vietnam Pro"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          0: 'var(--ink-0)',
          100: 'var(--ink-100)',
          200: 'var(--ink-200)',
          300: 'var(--ink-300)',
          400: 'var(--ink-400)',
          500: 'var(--ink-500)',
          600: 'var(--ink-600)',
          700: 'var(--ink-700)',
          800: 'var(--ink-800)',
          900: 'var(--ink-900)',
          1000: 'var(--ink-1000)',
        },
        system: {
          primary: 'var(--system-primary)',
          primary_hover: 'var(--system-primary_hover)',
          danger: 'var(--system-danger)',
          danger_hover: 'var(--system-danger_hover)'
        },
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.h0': {
          fontSize: '15rem',
          fontFamily: theme('fontFamily.serif'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.none'),
        },
        '.h1': {
          fontSize: '3.5rem',
          fontFamily: theme('fontFamily.serif'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.none'),
        },
        '.h2': {
          fontSize: '1.25rem',
          fontFamily: theme('fontFamily.serif'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.none'),
        },
        '.body-strong': {
          fontSize: '0.875rem',
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.relaxed'),
        },
        '.body': {
          fontSize: '0.875rem',
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.light'),
          lineHeight: theme('lineHeight.relaxed'),
        },
        '.body-small': {
          fontSize: '0.75rem',
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.light'),
          lineHeight: theme('lineHeight.relaxed'),
        },
        '.label': {
          fontSize: '0.75rem',
          fontFamily: theme('fontFamily.mono'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.tight'),
          textTransform: 'uppercase',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

module.exports = config;
