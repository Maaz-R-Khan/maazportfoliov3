/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          light: '#1B263B',
        },
        slate: {
          DEFAULT: '#415a77',
        },
        accent: '#778DA9',
        mist: '#E0E1DD',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(119, 141, 169, 0.35)',
        'glow-lg': '0 0 60px rgba(119, 141, 169, 0.25)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(119,141,169,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(119,141,169,0.08) 1px, transparent 1px)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'grow-line': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        'grow-line': 'grow-line 1.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
