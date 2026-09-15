import { motion } from 'framer-motion'
import { RECENT_ITEMS } from '../data/placeholders'
import { useInView } from '../hooks/useInView'
import ScrollArrow from './ScrollArrow'

function NewsRow({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 6) * 0.05 }}
      className="grid grid-cols-[5rem_1fr] md:grid-cols-[8rem_1fr] gap-x-6 md:gap-x-10 items-baseline py-6 border-b border-ink/[0.08]"
    >
      <span className="font-type text-[0.6rem] tracking-[0.1em] text-muted">{item.date}</span>
      <div>
        <h3 className="font-serif italic text-[1.3rem] md:text-[1.6rem] text-ink leading-snug">{item.title}</h3>
        {item.detail && (
          <p className="font-body text-[0.75rem] text-muted mt-1.5">{item.detail}</p>
        )}
      </div>
    </motion.div>
  )
}

export default function NewsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="news" className="relative py-24 md:py-36 bg-paper">
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        <div ref={ref} className="mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="font-type text-[0.6rem] tracking-[0.35em] uppercase text-accent mb-4"
          >
            Field Notes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[clamp(3rem,8vw,7rem)] text-ink leading-none"
          >
            News
          </motion.h2>
        </div>

        <div>
          {RECENT_ITEMS.map((item, i) => (
            <NewsRow key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 mt-20 md:mt-28 flex justify-center">
        <ScrollArrow to="testimonials" label="Scroll to Testimonials section" />
      </div>
    </section>
  )
}
