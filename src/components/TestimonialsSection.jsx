import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../data/placeholders'
import { useInView } from '../hooks/useInView'
import ScrollArrow from './ScrollArrow'

function Testimonial({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <div ref={ref} className={index > 0 ? 'mt-20 md:mt-28' : ''}>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="font-serif italic text-[1.6rem] md:text-[2.4rem] text-ink leading-[1.35] text-center"
      >
        &ldquo;{item.quote}&rdquo;
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-8 font-type text-[0.62rem] tracking-[0.2em] uppercase text-muted text-center"
      >
        {item.attribution}{item.context ? `, ${item.context}` : ''}
      </motion.p>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-40 bg-paper">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {TESTIMONIALS.map((item, i) => (
          <Testimonial key={item.id} item={item} index={i} />
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 mt-20 md:mt-28 flex justify-center">
        <ScrollArrow to="contact" label="Scroll to Contact section" />
      </div>
    </section>
  )
}
