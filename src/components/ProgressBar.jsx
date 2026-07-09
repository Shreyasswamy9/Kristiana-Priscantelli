import { useEffect, useState } from 'react'

export default function ProgressBar() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let raf = null
    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const p = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0
      setPct(p)
    }

    const handler = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(onScroll)
    }

    window.addEventListener('scroll', handler, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', handler)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] pointer-events-none">
      <div className="h-1 bg-ink/[0.06] w-full">
        <div
          className="h-1 bg-cobalt origin-left will-change-transform"
          style={{ transform: `scaleX(${pct / 100})`, transformOrigin: 'left center', transition: 'transform 120ms linear' }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
