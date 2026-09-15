import { motion } from 'framer-motion'
import { FEATURED_PROJECTS } from '../data/placeholders'
import { useInView } from '../hooks/useInView'
import ProjectTile from './ProjectTile'
import ScrollArrow from './ScrollArrow'

export default function FilmSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const projects = FEATURED_PROJECTS.filter(p => p.section === 'Film')

  return (
    <section id="film" className="relative py-24 md:py-36 bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div ref={ref} className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="font-type text-[0.6rem] tracking-[0.35em] uppercase text-accent mb-4"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[clamp(3rem,8vw,7rem)] text-ink leading-none"
          >
            Film
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <ProjectTile key={project.id} project={project} index={i} spanFirst />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-20 md:mt-28 flex justify-center">
        <ScrollArrow to="theater" label="Scroll to Theater section" />
      </div>
    </section>
  )
}
