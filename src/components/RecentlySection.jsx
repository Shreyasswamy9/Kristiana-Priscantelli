import { motion } from 'framer-motion'
import { RECENT_ITEMS } from '../data/placeholders'
import { useInView } from '../hooks/useInView'

const TYPE_COLOR = {
  Festival:    'text-mist',
  Performance: 'text-silver',
  Film:        'text-silver',
  Award:       'text-rouge',
  Press:       'text-silver',
  Workshop:    'text-ash',
}

function TimelineRow({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: 'easeOut' }}
      className="group grid grid-cols-[5rem_1px_1fr] md:grid-cols-[8rem_1px_1fr] gap-x-6 md:gap-x-10 items-start py-6"
    >
      {/* Date */}
      <span className="font-body text-[0.6rem] tracking-[0.1em] text-ash pt-0.5 text-right">
        {item.date}
      </span>

      {/* Timeline line + dot */}
      <div className="relative flex flex-col items-center">
        <div className="mt-1.5 w-1.5 h-1.5 bg-smoke group-hover:bg-rouge transition-colors duration-300" />
        <div className="flex-1 w-px bg-gradient-to-b from-smoke to-transparent mt-1" />
      </div>

      {/* Content */}
      <div className="pb-2">
        <div className="flex items-center gap-3 mb-1.5">
          <span className={`font-body text-[0.5rem] tracking-[0.25em] uppercase ${TYPE_COLOR[item.type] || 'text-ash'}`}>
            {item.type}
          </span>
        </div>
        <h3 className="font-display uppercase text-[1.3rem] md:text-[1.5rem] text-chalk leading-none tracking-wide">
          {item.title}
        </h3>
        <p className="font-body text-[0.72rem] text-ash mt-2 leading-relaxed">{item.detail}</p>
      </div>
    </motion.div>
  )
}

export default function RecentlySection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="recently" className="relative py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div ref={ref} className="mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="font-body text-[0.55rem] tracking-[0.35em] uppercase text-ash mb-4"
          >
            Field Notes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display uppercase text-[clamp(3rem,7vw,6rem)] text-chalk leading-none"
          >
            News &amp; Activity
          </motion.h2>
        </div>

        <div className="divide-y divide-white/[0.05]">
          {RECENT_ITEMS.map((item, i) => (
            <TimelineRow key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24 md:mt-36">
        <hr className="rule-thin" />
      </div>
    </section>
  )
}
