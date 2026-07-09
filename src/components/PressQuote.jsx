import { motion } from 'framer-motion'
import { PRESS_QUOTE } from '../data/placeholders'
import { useInView } from '../hooks/useInView'

export default function PressQuote() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <section className="relative py-16 md:py-40 bg-chalk overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto px-6 md:px-10 text-center">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="block font-serif text-[6rem] md:text-[9rem] leading-none text-cobalt/12 select-none"
          aria-hidden="true"
        >
          &ldquo;
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-[2.4rem] md:text-[4rem] text-ink leading-[1.1] -mt-8 md:-mt-12"
        >
          {PRESS_QUOTE.quote}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <span className="w-8 h-px bg-cobalt" />
          <span className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-ash">
            {PRESS_QUOTE.source}
          </span>
          <span className="w-8 h-px bg-cobalt" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-3 font-body text-[0.65rem] text-ash/80"
        >
          {PRESS_QUOTE.context}
        </motion.p>
      </div>
    </section>
  )
}
