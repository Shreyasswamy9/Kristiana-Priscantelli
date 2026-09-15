/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial paper palette — warm white ground, ink text, one muted accent.
        // Centralized here so the client can adjust after review.
        paper:  '#F4F1EA',
        ink:    '#1B1916',
        muted:  '#716B63',
        accent: '#9A604D',
      },
      fontFamily: {
        // Cormorant Garamond — editorial serif headings + italic detail
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Caveat — handwritten name / signature treatment
        hand:  ['Caveat', 'cursive'],
        // Special Elite — small typewriter-style labels, film-credit details
        type:  ['"Special Elite"', '"Courier New"', 'monospace'],
        // Inter — retained only for small, highly legible interface text
        body:  ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
