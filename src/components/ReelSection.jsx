import { motion } from 'framer-motion'
import { REEL } from '../data/placeholders'
import { useInView } from '../hooks/useInView'
import ScrollArrow from './ScrollArrow'

export default function ReelSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="reel" className="relative py-24 md:py-36 bg-paper">
      <div ref={ref} className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="px-2 md:px-2 mb-8 md:mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="font-type text-[0.6rem] tracking-[0.35em] uppercase text-accent mb-4"
          >
            On Camera
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif italic text-[clamp(2.75rem,7vw,5.5rem)] text-ink leading-none"
          >
            {REEL.title}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative w-full aspect-video bg-ink"
        >
          {REEL.embedSrc && (
            <iframe
              src={REEL.embedSrc}
              title="Kristiana Priscantelli — Reel"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-20 md:mt-28 flex justify-center">
        <ScrollArrow to="resume" label="Scroll to Resume section" />
      </div>
    </section>
  )
}
