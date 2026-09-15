import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const ASPECT = {
  landscape: 'aspect-[16/10]',
  portrait:  'aspect-[3/4]',
  square:    'aspect-square',
}

export default function ProjectTile({ project, index, spanFirst = false }) {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={spanFirst && index === 0 ? 'lg:col-span-2' : ''}
    >
      <div className={`relative overflow-hidden ${ASPECT[project.aspect] || 'aspect-[4/3]'}`}>
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="tile-placeholder absolute inset-0 px-6">
            <span className="font-serif italic text-[1.4rem] md:text-[1.7rem] text-ink leading-tight">
              {project.title}
            </span>
          </div>
        )}
      </div>

      {project.imageSrc && (
        <h3 className="mt-3 font-serif italic text-[1.15rem] text-ink leading-tight">
          {project.title}
        </h3>
      )}
    </motion.article>
  )
}
