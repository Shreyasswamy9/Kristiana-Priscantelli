import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProgressBar from './ProgressBar'

const NAV_LINKS = [
  { label: 'About',   href: '#about' },
  { label: 'Work',    href: '#work' },
  { label: 'Reel',    href: '#reel' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Resume',  href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <ProgressBar />
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 1.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'py-4 bg-chalk/95 backdrop-blur-md border-b border-ink/[0.06]'
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

          <a
            href="#hero"
            className={`font-serif italic text-[1.1rem] tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-ink hover:text-cobalt' : 'text-chalk hover:text-cobalt'
            }`}
          >
            Kristiana Priscantelli
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`font-body text-[0.6rem] tracking-[0.28em] uppercase transition-colors duration-300 group relative ${
                  scrolled ? 'text-ash hover:text-ink' : 'text-chalk/65 hover:text-chalk'
                }`}
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cobalt group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-[5px]"
          >
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''} ${scrolled ? 'bg-ink' : 'bg-chalk'}`} />
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-ink' : 'bg-chalk'}`} />
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''} ${scrolled ? 'bg-ink' : 'bg-chalk'}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu — cobalt colorblock */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cobalt flex flex-col items-start justify-center gap-8 px-10"
          >
            <div className="w-10 h-px bg-chalk/40 mb-2" />
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="font-display uppercase text-[3.5rem] text-chalk hover:text-chalk/70 transition-colors duration-200"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
