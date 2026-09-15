import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { RESUME_PDF_URL } from '../data/placeholders'
import { useInView } from '../hooks/useInView'
import ScrollArrow from './ScrollArrow'

// Lazy-loaded so the pdf.js chunk only downloads once this section is
// actually about to be seen, not as part of the main bundle.
const ResumeViewer = lazy(() => import('./ResumeViewer'))

export default function ResumeSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="resume" className="relative py-24 md:py-36 bg-paper">
      <div ref={ref} className="max-w-4xl mx-auto px-6 md:px-10">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="font-type text-[0.6rem] tracking-[0.35em] uppercase text-accent mb-4"
        >
          Curriculum Vitae
        </motion.p>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif italic text-[clamp(2.75rem,7vw,5.5rem)] text-ink leading-none"
          >
            Resume
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-6 mb-1"
          >
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-type text-[0.6rem] tracking-[0.25em] uppercase text-ink hover:text-accent transition-colors duration-300"
            >
              View Resume
            </a>
            <a
              href={RESUME_PDF_URL}
              download
              className="font-type text-[0.6rem] tracking-[0.25em] uppercase text-ink hover:text-accent transition-colors duration-300"
            >
              Download PDF
            </a>
          </motion.div>
        </div>

        {/* Renders the PDF itself, sized exactly to the container on any
            screen — same component for desktop and mobile. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          {inView && (
            <Suspense fallback={
              <p className="text-center font-serif italic text-lg text-muted py-16">
                Loading resume…
              </p>
            }>
              <ResumeViewer url={RESUME_PDF_URL} />
            </Suspense>
          )}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 mt-20 md:mt-28 flex justify-center">
        <ScrollArrow to="film" label="Scroll to Film section" />
      </div>
    </section>
  )
}
