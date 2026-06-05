import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Footer() {
  const { ref, inView } = useInView({ threshold: 0.3 })
  const year = new Date().getFullYear()

  return (
    <footer ref={ref} className="relative bg-ink py-10 md:py-14 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="font-serif italic text-[1rem] text-ash"
        >
          Kristiana Priscantelli
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-body text-[0.52rem] tracking-[0.25em] uppercase text-smoke text-center"
        >
          &copy; {year} &nbsp;&middot;&nbsp; All rights reserved
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex items-center gap-5"
        >
          <a
            href="https://www.instagram.com/kristianapriscantelli/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[0.55rem] tracking-[0.25em] uppercase text-ash hover:text-rouge transition-colors duration-300"
          >
            Instagram
          </a>
          <span className="w-px h-3 bg-smoke" />
          <a
            href="https://www.imdb.com/name/nm0000000/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[0.55rem] tracking-[0.25em] uppercase text-ash hover:text-rouge transition-colors duration-300"
          >
            IMDb
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
