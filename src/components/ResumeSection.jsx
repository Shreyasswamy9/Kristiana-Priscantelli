import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CREDITS,
  CREDIT_CATEGORIES,
  TRAINING,
  EDUCATION,
  SKILLS,
  DIALECTS,
  RESUME_PDF_URL,
  RESUME_STATUS,
} from '../data/placeholders'
import { useInView } from '../hooks/useInView'

const TIER_STYLE = {
  Lead: 'border-cobalt text-cobalt',
  Supporting: 'border-smoke text-smoke',
  'Day Player': 'border-veil text-silver',
}

function CreditRow({ credit, index }) {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-[2.25rem_1fr] md:grid-cols-[3.5rem_1fr_auto] gap-x-4 md:gap-x-8 items-baseline py-5 border-b border-ink/[0.07] hover:pl-1 md:hover:pl-2 transition-all duration-300"
    >
      <span className="font-display text-[1.1rem] md:text-[1.3rem] text-ink/15 leading-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <h3 className="font-serif italic text-[1.1rem] md:text-[1.3rem] text-ink leading-snug group-hover:text-cobalt transition-colors duration-300">
            {credit.title}
          </h3>
          {credit.tier && (
            <span className={`px-2 py-0.5 border text-[0.48rem] tracking-[0.2em] uppercase shrink-0 ${TIER_STYLE[credit.tier]}`}>
              {credit.tier}
            </span>
          )}
        </div>
        {credit.role && (
          <p className="font-body text-[0.68rem] text-ash mt-1">{credit.role}</p>
        )}
        {credit.note && (
          <p className="font-body text-[0.6rem] italic text-ash/70 mt-1">{credit.note}</p>
        )}
      </div>

      <div className="col-span-2 md:col-span-1 mt-1 md:mt-0 md:text-right">
        <p className="font-body text-[0.58rem] tracking-[0.18em] uppercase text-ash">
          {credit.format}
        </p>
        {credit.director && (
          <p className="font-body text-[0.62rem] text-silver mt-0.5">dir. {credit.director}</p>
        )}
      </div>
    </motion.div>
  )
}

export default function ResumeSection() {
  const [active, setActive] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.1 })

  const filtered = active === 'All' ? CREDITS : CREDITS.filter(c => c.category === active)

  return (
    <section id="resume" className="relative py-24 md:py-36 bg-chalk">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div ref={ref} className="mb-10 md:mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="font-body text-[0.55rem] tracking-[0.35em] uppercase text-ash mb-4"
          >
            Curriculum Vitae
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display uppercase text-[clamp(3rem,7vw,6rem)] text-ink leading-none"
            >
              Resume
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-5 md:mb-2"
            >
              <span className="font-body text-[0.55rem] tracking-[0.22em] uppercase text-ash border border-ink/15 px-3 py-1.5">
                {RESUME_STATUS}
              </span>
              <a
                href={RESUME_PDF_URL}
                download
                className="group flex items-center gap-2 font-body text-[0.58rem] tracking-[0.25em] uppercase text-cobalt hover:text-ink transition-colors duration-300"
              >
                <span>Download PDF</span>
                <span className="block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
              </a>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif italic text-[1rem] md:text-[1.1rem] text-ash mt-6 max-w-lg"
          >
            Selected film, theater, and voice credits — partial; full CV available on request.
          </motion.p>
        </div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {CREDIT_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-[0.55rem] tracking-[0.22em] uppercase px-4 py-2 border transition-all duration-200 ${
                active === cat
                  ? 'border-cobalt text-cobalt bg-cobalt/[0.06]'
                  : 'border-veil text-ash hover:border-ash hover:text-smoke'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-2 font-body text-[0.55rem] tracking-[0.22em] uppercase text-ash"
        >
          {active === 'All' ? `${filtered.length} credits` : `${filtered.length} — ${active}`}
        </motion.p>

        {/* Credits list */}
        <motion.div layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((credit, i) => (
              <CreditRow key={`${credit.category}-${credit.title}`} credit={credit} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Training + Skills */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-20 md:mt-28">
          <div>
            <p className="font-body text-[0.55rem] tracking-[0.3em] uppercase text-ash mb-5">
              Training &amp; Education
            </p>
            <p className="font-serif italic text-[0.95rem] text-ink mb-6">{EDUCATION}</p>
            <ul className="space-y-4">
              {TRAINING.map(t => (
                <li key={t.discipline} className="border-l border-veil pl-4">
                  <p className="font-body text-[0.55rem] tracking-[0.2em] uppercase text-cobalt mb-1">
                    {t.discipline}
                  </p>
                  <p className="font-body text-[0.72rem] text-smoke leading-relaxed">{t.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[0.55rem] tracking-[0.3em] uppercase text-ash mb-5">
              Skills &amp; Dialects
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {SKILLS.map(s => (
                <span
                  key={s}
                  className="font-body text-[0.6rem] tracking-[0.05em] text-smoke border border-veil px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {DIALECTS.map(d => (
                <span
                  key={d}
                  className="font-serif italic text-[0.72rem] text-ash border border-veil/60 px-3 py-1.5"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24 md:mt-36">
        <hr className="rule-thin" />
      </div>
    </section>
  )
}
