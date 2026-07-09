import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CreditsTicker from './CreditsTicker'

// writing-mode: vertical-lr + text-orientation: mixed
// Measured from screenshot: Permanent Marker advance ≈ 0.67em per char.
// Targeting ~95vh so the text bleeds close to the edges (clips a touch at top/bottom).
// Kristiana = 9 chars  → 95vh / (9  × 0.67) ≈ 15.7vh → use 16vh
// Priscantelli = 12 chars → 95vh / (12 × 0.67) ≈ 11.8vh → use 12vh
// min(vh, vw) caps the size on narrow/tall phone screens — vh alone ignores width
// and blows the name up disproportionately on portrait mobile aspect ratios.
const FONT_KRISTIANA    = 'clamp(3rem, min(16vh, 20vw), 20rem)'
const FONT_PRISCANTELLI = 'clamp(2.4rem, min(12vh, 15vw), 15rem)'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    let raf = null
    const update = () => {
      if (!bgRef.current) return
      const offset = Math.min(80, window.scrollY * 0.08)
      bgRef.current.style.transform = `translateY(${offset}px)`
    }
    const handler = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', handler, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', handler)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen min-h-[680px] overflow-hidden">

      {/* Full-bleed photo */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ transform: 'translateY(0px)' }}>
        <img
          src="/images/hero.jpg"
          alt="Portrait of Kristiana Priscantelli"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Slight side vignettes — keeps edge labels readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/25 via-transparent to-ink/25" />
      </div>

      {/* ── LEFT EDGE COLUMN ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="hidden md:flex absolute left-5 md:left-7 top-0 bottom-0 z-20 pointer-events-none flex-col items-center justify-center gap-5"
      >
        <span
          className="font-body text-[0.4rem] uppercase tracking-[0.35em] text-cobalt/65"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', lineHeight: 1.4 }}
        >
          Actress · Film · Stage · New York
        </span>
        <span className="w-px h-6 bg-cobalt/30" />
        <span
          className="font-hand text-[0.6rem] text-cobalt/45"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', lineHeight: 1.4 }}
        >
          @kristianapriscantelli
        </span>
      </motion.div>

      {/* ── RIGHT EDGE COLUMN ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="hidden md:flex absolute right-5 md:right-7 top-0 bottom-0 z-20 pointer-events-none flex-col items-center justify-center gap-5"
      >
        <span
          className="font-body text-[0.4rem] uppercase tracking-[0.35em] text-cobalt/55"
          style={{ writingMode: 'vertical-lr', lineHeight: 1.4 }}
        >
          Available · Film · Television · Theatre
        </span>
        <span className="w-px h-6 bg-cobalt/25" />
        <span
          className="font-body text-[0.4rem] uppercase tracking-[0.35em] text-cobalt/40"
          style={{ writingMode: 'vertical-lr', lineHeight: 1.4 }}
        >
          New York · 2024
        </span>
      </motion.div>

      {/* ── NAME — two brushstrokes, top-to-bottom, centered on face ── */}
      {/* vertical-lr = left-to-right column order (Kristiana left, Priscantelli right) */}
      {/* text-orientation: mixed = letters rotated 90°, reads like a book spine */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center"
          style={{ gap: 'clamp(0.5rem, 1.5vw, 2.5rem)' }}
        >
          <span
            className="font-hand text-cobalt"
            style={{
              writingMode: 'vertical-lr',
              textOrientation: 'mixed',
              fontSize: FONT_KRISTIANA,
              letterSpacing: '0.06em',
              lineHeight: 1,
              display: 'block',
            }}
          >
            Kristiana
          </span>
          <span
            className="font-hand text-cobalt"
            style={{
              writingMode: 'vertical-lr',
              textOrientation: 'mixed',
              fontSize: FONT_PRISCANTELLI,
              letterSpacing: '0.06em',
              lineHeight: 1,
              display: 'block',
            }}
          >
            Priscantelli
          </span>
        </motion.div>
      </div>

      {/* Rolling credits — anchored to the bottom of the hero so it reads on the first screen, no scroll needed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <CreditsTicker />
      </motion.div>
    </section>
  )
}
