/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm near-neutral scale — a faint film-stock/darkroom undertone instead of
        // clinical cool gray, so it sits comfortably alongside both cobalt and gold.
        ink:     '#14110d',
        carbon:  '#1d1812',
        charcoal:'#27211a',
        smoke:   '#362f27',
        ash:     '#6b6255',
        silver:  '#948c7d',
        mist:    '#bfb7a9',
        veil:    '#dad3c5',
        linen:   '#f0ede8',
        chalk:   '#fafaf8',
        paper:   '#f2f0eb',
        cobalt:  '#3535E8', // primary accent — unchanged, everywhere
        gold:    '#ae8f3d', // secondary accent — awards/accolades only, never mixed with cobalt in the same element
      },
      fontFamily: {
        display: ['Bebas Neue', 'system-ui', 'sans-serif'],
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        hand:    ['Permanent Marker', 'Caveat', 'cursive'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'sprockets': "url(\"data:image/svg+xml,%3Csvg width='28' height='14' viewBox='0 0 28 14' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='9' y='2' width='10' height='10' rx='2' fill='%23fafaf8' fill-opacity='0.4'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 36s linear infinite',
      },
    },
  },
  plugins: [],
}
