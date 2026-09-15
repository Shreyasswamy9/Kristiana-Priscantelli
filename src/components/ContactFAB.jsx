import { motion } from 'framer-motion'

export default function ContactFAB() {
  return (
    <motion.a
      href="#contact"
      aria-label="Jump to contact section"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed z-[55] flex items-center justify-center bg-paper border border-ink/25 rounded-full shadow-[0_2px_10px_rgba(27,25,22,0.1)] hover:border-accent transition-colors duration-300
        bottom-4 right-4 w-10 h-10
        md:bottom-7 md:right-7 md:w-auto md:h-auto md:gap-2 md:pl-3.5 md:pr-4 md:py-2.5"
    >
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="text-accent shrink-0" aria-hidden="true">
        <path d="M2 4h12v8H2V4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M2.5 4.5 8 8.5l5.5-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="hidden md:inline font-type text-[0.58rem] tracking-[0.2em] uppercase text-ink">
        Contact Me
      </span>
    </motion.a>
  )
}
