import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Player from '@vimeo/player'
import { REEL } from '../data/placeholders'
import { useInView } from '../hooks/useInView'
import ScrollArrow from './ScrollArrow'

export default function ReelSection() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [started, setStarted] = useState(false)
  const iframeRef = useRef(null)
  const playerRef = useRef(null)

  // The iframe is mounted with its real src from the start (just visually
  // covered by our play button) so the Vimeo Player SDK can bind to it ahead
  // of any click — its play()/requestFullscreen() calls are queued internally
  // until the player reports ready, so there's no race with the click handler.
  useEffect(() => {
    if (!REEL.embedSrc || !iframeRef.current) return
    playerRef.current = new Player(iframeRef.current)
    return () => {
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [])

  // A direct `iframe.requestFullscreen()` from the parent page works on desktop
  // and Android Chrome, but iOS Safari/Chrome (both WebKit) refuse to fullscreen
  // a cross-origin iframe from outside it. Going through Vimeo's own Player SDK
  // instead routes the request through Vimeo's own script running *inside* its
  // iframe, fullscreening its own <video> element — the same legacy path every
  // native <video> tag has always been allowed to use on iOS. Both calls fire
  // from this one synchronous click handler so the tap counts as the user
  // gesture for both.
  const handlePlay = () => {
    setStarted(true)
    const player = playerRef.current
    if (!player) return
    player.requestFullscreen().catch(() => {
      // No fullscreen support at all on this browser — video still plays inline.
    })
    player.play().catch(() => {})
  }

  return (
    <section id="reel" className="relative py-24 md:py-36 bg-paper">
      <div ref={ref} className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="px-2 md:px-2 mb-8 md:mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="font-type text-[0.6rem] tracking-[0.35em] uppercase text-accent mb-4"
          >
            On Camera
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif italic text-[clamp(2.75rem,7vw,5.5rem)] text-ink leading-none"
          >
            {REEL.title}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative w-full aspect-video bg-ink"
        >
          {REEL.embedSrc && (
            <iframe
              ref={iframeRef}
              src={REEL.embedSrc}
              title="Kristiana Priscantelli — Reel"
              className="absolute inset-0 w-full h-full border-0 bg-ink"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            />
          )}

          {!started && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play reel, fullscreen"
              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            >
              <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-paper flex items-center justify-center shadow-[0_2px_16px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1" aria-hidden="true">
                  <path d="M6 3.5v13l11-6.5-11-6.5Z" fill="#1B1916" />
                </svg>
              </span>
            </button>
          )}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-20 md:mt-28 flex justify-center">
        <ScrollArrow to="resume" label="Scroll to Resume section" />
      </div>
    </section>
  )
}
