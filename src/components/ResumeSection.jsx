import { motion } from 'framer-motion'
import { RESUME_PDF_URL } from '../data/placeholders'
import { useInView } from '../hooks/useInView'
import ScrollArrow from './ScrollArrow'

export default function ResumeSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  // Absolute URL required by Google's viewer (it fetches the PDF itself).
  // Only resolves once deployed to a public domain — falls back gracefully
  // to the view/download links below it if the embed can't load.
  const resumeAbsoluteUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${RESUME_PDF_URL}`
    : RESUME_PDF_URL
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(resumeAbsoluteUrl)}&embedded=true`

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

        {/* Embedded viewer — desktop/tablet only; mobile PDF embeds are unreliable */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="hidden md:block border border-ink/15 bg-white h-[80vh]"
        >
          <object data={RESUME_PDF_URL} type="application/pdf" className="w-full h-full">
            <div className="w-full h-full flex items-center justify-center text-center px-8">
              <p className="font-serif italic text-lg text-muted">
                This browser can't preview the PDF here — use View Resume or Download PDF above.
              </p>
            </div>
          </object>
        </motion.div>

        {/* Mobile — inline viewer via Google Docs (native <object>/<embed> PDF
            rendering is unreliable across mobile browsers), so the resume stays
            on-site instead of forcing a new-tab hop. Requires a public URL. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="md:hidden border border-ink/15 bg-white h-[70vh]"
        >
          <iframe
            src={googleViewerUrl}
            title="Kristiana Priscantelli — Resume"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="md:hidden mt-4 text-center font-body text-[0.7rem] text-muted"
        >
          Not loading? Use View Resume or Download PDF above.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 mt-20 md:mt-28 flex justify-center">
        <ScrollArrow to="film" label="Scroll to Film section" />
      </div>
    </section>
  )
}
