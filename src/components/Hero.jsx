import ScrollArrow from './ScrollArrow'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[680px] overflow-hidden bg-ink">

      {/* Full-bleed photo — preserved until the client supplies a replacement */}
      <img
        src="/images/hero.jpg"
        alt="Portrait of Kristiana Priscantelli"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Soft gradient for legibility only — no color wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/10" />

      {/* Tiny vertical supporting credits — left edge */}
      <div className="hidden md:flex absolute left-6 lg:left-9 top-0 bottom-0 z-20 pointer-events-none flex-col items-center justify-center">
        <span
          className="font-type text-[0.55rem] uppercase tracking-[0.4em] text-paper/75"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          Actress · Film · Stage
        </span>
      </div>

      {/* Tiny vertical supporting credits — right edge */}
      <div className="hidden md:flex absolute right-6 lg:right-9 top-0 bottom-0 z-20 pointer-events-none flex-col items-center justify-center gap-6">
        <span
          className="font-type text-[0.55rem] uppercase tracking-[0.4em] text-paper/75"
          style={{ writingMode: 'vertical-lr' }}
        >
          New York
        </span>
        <span
          className="font-type text-[0.5rem] uppercase tracking-[0.35em] text-paper/55"
          style={{ writingMode: 'vertical-lr' }}
        >
          Available for Film, Television &amp; Theatre
        </span>
      </div>

      {/* Editorial masthead — horizontal signature name, lower third so the face reads clearly above it */}
      <div className="absolute inset-x-0 bottom-[16%] md:bottom-[12%] z-20 px-6 md:px-12">
        <h1
          className="font-hand text-paper text-center leading-none"
          style={{ fontSize: 'clamp(2.75rem, 11vw, 8rem)' }}
        >
          Kristiana Priscantelli
        </h1>
      </div>

      {/* Mobile supporting credit — single restrained line beneath the name */}
      <div className="md:hidden absolute inset-x-0 bottom-[9%] z-20 flex justify-center">
        <span className="font-type text-[0.5rem] uppercase tracking-[0.3em] text-paper/70">
          Actress · Film · Stage · New York
        </span>
      </div>

      <div className="absolute bottom-3 inset-x-0 z-20 flex justify-center">
        <ScrollArrow to="about" label="Scroll to About section" tone="paper" />
      </div>
    </section>
  )
}
