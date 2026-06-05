import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const SHORT_BIO = `Kristiana Priscantelli is a New York-based actress whose work lives at the intersection of stillness and rupture. She trained at the Atlantic Acting School and has performed on Off-Broadway stages, independent film sets, and in collaboration with emerging directors across the country.`

const EXTENDED_BIO = `Her approach to performance is rooted in close attention — to silence, to contradiction, to the moments just before and after the expected. She is drawn to stories that resist easy resolution, and to characters who hold more than they say.

Recent work includes the lead role in the feature film The Longest Hour, currently in post-production, and the Off-Broadway production Everything Still at the Atlantic Theater Company. She received a Best Actress nomination at the Brooklyn Horror Film Festival for A Quiet Violence (2022).

She is a graduate of the Atlantic Acting School's Conservatory program and has studied with Anne Bogart, Philip Seymour Hoffman Studios, and the Steppenwolf Theatre Ensemble.

Currently based in New York. Available for film, television, and theatre.`

export default function AboutPreview() {
  const [expanded, setExpanded] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-0">

        {/* Left label column */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-2 flex md:flex-col items-start md:items-end md:pt-2 gap-3"
        >
          <div className="w-4 h-px bg-rouge mt-1.5 shrink-0" />
          <span className="font-body text-[0.55rem] tracking-[0.35em] uppercase text-ash">About</span>
        </motion.div>

        {/* Main content */}
        <div className="md:col-span-8 md:col-start-4">
          {/* Bio — Cormorant Garamond, large and elegant */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-[1.5rem] md:text-[2rem] text-chalk leading-relaxed font-light"
          >
            {SHORT_BIO}
          </motion.p>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="extended"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-8 space-y-5 border-l border-smoke pl-8">
                  {EXTENDED_BIO.trim().split('\n\n').map((para, i) => (
                    <p key={i} className="font-body text-[0.88rem] text-silver leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            onClick={() => setExpanded(v => !v)}
            className="mt-10 group flex items-center gap-4 font-body text-[0.58rem] tracking-[0.3em] uppercase text-ash hover:text-rouge transition-colors duration-300"
          >
            <span className="w-8 h-px bg-current transition-colors duration-300" />
            <span>{expanded ? 'Read less' : 'Read more'}</span>
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-32 md:mt-44">
        <hr className="rule-thin" />
      </div>
    </section>
  )
}
