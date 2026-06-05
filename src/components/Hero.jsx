import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// ─── HERO IMAGE ────────────────────────────────────────────────────────────────
// Replace the placeholder below with the real hero image:
//   <img src="/images/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
// High-contrast editorial portrait works best — tight crop, strong light.
// ──────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    let raf = null
    const update = () => {
      if (!bgRef.current) return
      const offset = Math.min(100, window.scrollY * 0.1)
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
    <section
      id="hero"
      className="relative w-full h-screen min-h-[680px] overflow-hidden grain-overlay"
    >
      {/* Background image */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ transform: 'translateY(0px)' }}>
        <img
          src="/images/hero.jpg"
          alt="Portrait of Kristiana Priscantelli"
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Gradient: lighter at top, heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      </div>

      {/* Editorial index — top right, very small */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute top-8 right-6 md:right-10 z-20 flex flex-col items-end gap-1"
      >
        <span className="font-body text-[0.5rem] tracking-[0.3em] uppercase text-ash">New York</span>
        <span className="font-body text-[0.5rem] tracking-[0.3em] uppercase text-ash">Film · Stage</span>
      </motion.div>

      {/* Main content — bottom-left, magazine cover anchored */}
      <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 pb-10 md:pb-14 z-10">

        {/* Rouge accent line above tagline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="w-14 h-px bg-rouge mb-4"
        />

        {/* Tagline — Cormorant italic */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
          className="font-serif italic text-[0.95rem] md:text-[1.1rem] text-silver mb-3 tracking-wide"
        >
          Actress · Performer · Storyteller
        </motion.p>

        {/* Name — Bebas Neue, full editorial impact */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            className="font-display uppercase text-[clamp(4.5rem,16vw,14rem)] leading-none text-chalk tracking-wide"
          >
            Kristiana
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.78 }}
            className="font-display uppercase text-[clamp(4.5rem,16vw,14rem)] leading-none text-chalk tracking-wide"
          >
            Priscantelli
          </motion.h1>
        </div>

        {/* Bottom row: now screening + scroll cue */}
        <div className="mt-8 md:mt-10 flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="border-l-2 border-rouge pl-4 max-w-[16rem]"
          >
            <p className="font-body text-[0.5rem] tracking-[0.3em] uppercase text-rouge mb-1">Now in post</p>
            <p className="font-body text-[0.72rem] text-silver leading-relaxed">
              The Longest Hour — feature film, currently in post-production
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col items-center gap-2 shrink-0"
          >
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
              className="w-px h-10 bg-gradient-to-b from-ash to-transparent"
            />
            <span className="font-body text-[0.48rem] tracking-[0.3em] uppercase text-ash">Scroll</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
