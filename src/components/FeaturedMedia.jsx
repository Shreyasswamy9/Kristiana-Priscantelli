import { motion } from 'framer-motion'
import { FEATURED_PROJECTS } from '../data/placeholders'
import { useInView } from '../hooks/useInView'

const ASPECT = {
  landscape: 'aspect-[16/10]',
  portrait:  'aspect-[3/4]',
  square:    'aspect-square',
}

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative ${index === 0 ? 'lg:col-span-2' : ''}`}
    >
      {/* Image area */}
      <div className={`relative overflow-hidden ${ASPECT[project.aspect]} bg-carbon ${index === 0 ? 'lg:aspect-[16/9]' : ''}`}>
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="img-placeholder absolute inset-0" />
        )}

        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/45 transition-all duration-500" />

        {index === 0 && (
          <div className="absolute top-4 left-4 bg-rouge px-3 py-1">
            <span className="font-body text-[0.5rem] tracking-[0.28em] uppercase text-chalk">Featured</span>
          </div>
        )}

        {/* Hover text reveal */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <p className="font-body text-[0.58rem] tracking-[0.22em] uppercase text-mist">{project.role}</p>
          <p className="font-body text-[0.7rem] text-silver mt-1 leading-snug">{project.description}</p>
        </div>
      </div>

      {/* Card metadata */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display uppercase text-[1.4rem] text-chalk leading-none tracking-wide">{project.title}</h3>
          <p className="font-body text-[0.58rem] tracking-[0.18em] uppercase text-ash mt-2">{project.type}</p>
        </div>
        <span className="font-body text-[0.6rem] text-ash shrink-0 mt-1">{project.year}</span>
      </div>
    </motion.article>
  )
}

export default function FeaturedMedia() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div ref={ref} className="mb-14 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="font-body text-[0.55rem] tracking-[0.35em] uppercase text-ash mb-4"
          >
            Selected Work
          </motion.p>
          <div className="flex items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display uppercase text-[clamp(3rem,7vw,6rem)] text-chalk leading-none"
            >
              Film &amp; Theatre
            </motion.h2>
            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              href="https://www.imdb.com/name/nm0000000/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex shrink-0 items-center gap-2 font-body text-[0.58rem] tracking-[0.25em] uppercase text-ash hover:text-rouge transition-colors duration-300 group mb-1"
            >
              <span>Full credits</span>
              <span className="block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
            </motion.a>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24 md:mt-36">
        <hr className="rule-thin" />
      </div>
    </section>
  )
}
