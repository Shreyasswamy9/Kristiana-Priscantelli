import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { REEL, SCENE_CLIPS } from '../data/placeholders'
import { useInView } from '../hooks/useInView'

// ─── REEL EMBED ────────────────────────────────────────────────────────────────
// Set REEL.embedSrc in /src/data/placeholders.js to a Vimeo or YouTube URL.
//   embedSrc: "https://player.vimeo.com/video/YOUR_ID?color=ffffff&title=0&byline=0&portrait=0"
// ──────────────────────────────────────────────────────────────────────────────

function VideoSlot({ src, title, isMain }) {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded && inView && !isMain) setLoaded(true)
  }, [inView, isMain, loaded])

  const handlePlay = () => setLoaded(true)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full bg-carbon overflow-hidden aspect-video"
    >
      {loaded && src ? (
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <div className="img-placeholder absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <button
              onClick={handlePlay}
              className="inline-flex items-center justify-center w-12 h-12 border border-rouge/40 hover:border-rouge hover:bg-rouge/10 transition-all duration-200"
              aria-label={`Play ${title}`}
            >
              <svg className="w-4 h-4 text-rouge" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4l14 8-14 8V4z" />
              </svg>
            </button>
            <div className="mt-3 font-body text-[0.58rem] tracking-[0.2em] uppercase text-smoke">
              {src ? 'Click to play' : (isMain ? 'Demo Reel — add Vimeo embed' : title)}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function ReelSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="reel" className="relative py-24 md:py-36 bg-carbon">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div ref={ref} className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="font-body text-[0.55rem] tracking-[0.35em] uppercase text-ash mb-4"
            >
              On Camera
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display uppercase text-[clamp(3rem,6vw,5rem)] text-chalk leading-none"
            >
              Demo Reel
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-body text-[0.75rem] text-rouge mt-3 tracking-wide"
            >
              {REEL.year}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-4 font-serif text-[1rem] md:text-[1.1rem] text-silver leading-relaxed italic"
            >
              Tension, range, and restraint — the range of what she can do in under three minutes.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 border border-white/[0.05] p-3 md:p-4"
          >
            <VideoSlot src={REEL.embedSrc} title={REEL.title} isMain={true} />
          </motion.div>
        </div>

        {/* Scene clips */}
        <div className="mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex items-end justify-between gap-6 mb-6"
          >
            <p className="font-body text-[0.55rem] tracking-[0.3em] uppercase text-ash">Scene Clips</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {SCENE_CLIPS.map((clip) => (
              <div key={clip.id}>
                <VideoSlot src={clip.embedSrc} title={clip.title} isMain={false} />
                <p className="mt-2.5 font-body text-[0.6rem] tracking-[0.15em] text-ash uppercase">{clip.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24 md:mt-36">
        <hr className="rule-thin" />
      </div>
    </section>
  )
}
