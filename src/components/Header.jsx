import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProgressBar from './ProgressBar'

const SECTIONS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Reel',         href: '#reel' },
  { label: 'Resume',       href: '#resume' },
  { label: 'Film',         href: '#film' },
  { label: 'Theater',      href: '#theater' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'News',         href: '#news' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <>
      <ProgressBar />

      <button
        ref={buttonRef}
        onClick={() => setMenuOpen(v => !v)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="site-menu"
        className="fixed top-5 right-5 md:top-7 md:right-7 z-[70] flex items-center gap-2 bg-paper border border-ink/25 px-3.5 py-2 hover:border-accent transition-colors duration-300"
      >
        <span className="font-type text-[0.62rem] tracking-[0.2em] uppercase text-ink">
          {menuOpen ? 'Close' : 'Menu'}
        </span>
        <span className="flex flex-col gap-[3px]" aria-hidden="true">
          <span className={`block w-4 h-px bg-ink transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-4 h-px bg-ink transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-4 h-px bg-ink transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </span>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="site-menu"
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[65] bg-paper flex flex-col items-start justify-center gap-3 px-8 md:px-16"
          >
            <span className="font-type text-[0.6rem] tracking-[0.3em] uppercase text-muted mb-4">
              Sections
            </span>
            {SECTIONS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-serif italic text-[2rem] md:text-[2.75rem] text-ink hover:text-accent transition-colors duration-200 leading-tight"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
