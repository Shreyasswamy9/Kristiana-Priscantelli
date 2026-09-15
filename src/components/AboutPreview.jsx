import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import ScrollArrow from './ScrollArrow'

const BIO = `Kristiana Priscantelli is a New York-based actress whose work lives at the intersection of stillness and rupture. She trained at the Atlantic Acting School and has performed on Off-Broadway stages, independent film sets, and in collaboration with emerging directors across the country. She is drawn to stories that resist easy resolution, and to characters who hold more than they say.`

export default function AboutPreview() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-40 bg-paper">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-type text-[0.6rem] tracking-[0.35em] uppercase text-accent mb-8"
        >
          About
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-[1.6rem] md:text-[2.4rem] text-ink leading-[1.35] font-light"
        >
          {BIO}
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 mt-20 md:mt-28 flex justify-center">
        <ScrollArrow to="reel" label="Scroll to Reel section" />
      </div>
    </section>
  )
}
