import { motion } from 'framer-motion'
import { CONTACT_LINKS } from '../data/placeholders'
import { useInView } from '../hooks/useInView'

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <section id="contact" className="relative py-32 md:py-48 bg-carbon">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div ref={ref} className="grid md:grid-cols-12 gap-12 md:gap-0">

          {/* Left — heading */}
          <div className="md:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="font-body text-[0.55rem] tracking-[0.35em] uppercase text-ash mb-4"
            >
              Connect
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display uppercase text-[clamp(3.5rem,8vw,7rem)] text-chalk leading-none"
            >
              Get in<br />touch.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-serif italic text-[1rem] md:text-[1.1rem] text-silver mt-8 max-w-xs leading-relaxed"
            >
              For representation, casting, or collaboration — reach out directly or through the profiles below.
            </motion.p>
          </div>

          {/* Right — link list */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <ul className="divide-y divide-white/[0.05]">
              {CONTACT_LINKS.map(({ label, value, href, external }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
                >
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between py-5 md:py-6 hover:pl-2 transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-body text-[0.55rem] tracking-[0.25em] uppercase text-ash w-24 shrink-0 group-hover:text-rouge transition-colors duration-300">
                        {label}
                      </span>
                      <span className="font-body text-[0.82rem] text-silver group-hover:text-chalk transition-colors duration-300">
                        {value}
                      </span>
                    </div>
                    {external && (
                      <svg
                        className="w-3 h-3 text-smoke group-hover:text-rouge transition-colors duration-300"
                        fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={1.5}
                      >
                        <path d="M1 11L11 1M11 1H4M11 1v7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 font-body text-[0.68rem] text-ash leading-relaxed max-w-lg"
            >
              Prefer concise outreach. Include the project, dates, and a short sense of tone.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
