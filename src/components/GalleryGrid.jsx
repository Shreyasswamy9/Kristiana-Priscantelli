import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/placeholders'
import { useInView } from '../hooks/useInView'

const HEIGHT_CLASS = {
  tall:   'h-80 md:h-96',
  medium: 'h-52 md:h-64',
}

function GalleryItem({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden group ${HEIGHT_CLASS[item.height]}`}
    >
      {item.imageSrc ? (
        <img
          src={item.imageSrc}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out grayscale-0 group-hover:grayscale group-hover:scale-[1.04]"
        />
      ) : (
        <div className="img-placeholder absolute inset-0" />
      )}

      {/* Duotone tint — matches the Work grid's hover language */}
      <div className="absolute inset-0 bg-cobalt opacity-0 group-hover:opacity-50 mix-blend-color transition-opacity duration-500" />

      {/* Caption — always visible on touch devices, hover-gated on desktop */}
      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/85 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-body text-[0.5rem] tracking-[0.2em] text-cobalt uppercase">{item.category}</p>
        <p className="font-body text-[0.62rem] text-chalk/80 mt-0.5 leading-tight">{item.alt}</p>
      </div>
    </motion.div>
  )
}

export default function GalleryGrid() {
  const [active, setActive] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.1 })

  const filtered = active === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === active)

  return (
    <section id="gallery" className="relative py-24 md:py-36 bg-chalk">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div ref={ref} className="mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="font-body text-[0.55rem] tracking-[0.35em] uppercase text-ash mb-4"
          >
            Archive
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display uppercase text-[clamp(3rem,7vw,6rem)] text-ink leading-none"
          >
            Gallery
          </motion.h2>
        </div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10 md:mb-14"
        >
          {GALLERY_CATEGORIES.map(cat => (
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

        {/* Count line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-4 font-body text-[0.55rem] tracking-[0.22em] uppercase text-ash"
        >
          {active === 'All' ? 'Showing all' : `Showing — ${active}`}
        </motion.p>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <GalleryItem key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24 md:mt-36">
        <hr className="rule-thin" />
      </div>
    </section>
  )
}
