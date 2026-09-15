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
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[55] flex items-center gap-2 bg-paper border border-ink/25 rounded-full pl-3.5 pr-4 py-2.5 shadow-[0_2px_10px_rgba(27,25,22,0.1)] hover:border-accent transition-colors duration-300"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
      <span className="font-type text-[0.58rem] tracking-[0.2em] uppercase text-ink">
        Contact Me
      </span>
    </motion.a>
  )
}
