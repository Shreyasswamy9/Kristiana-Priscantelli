import { TICKER_CREDITS } from '../data/placeholders'

export default function CreditsTicker() {
  const items = [...TICKER_CREDITS, ...TICKER_CREDITS]

  return (
    <div
      aria-hidden="true"
      className="relative bg-ink overflow-hidden py-4 border-y border-white/[0.06]"
    >
      <div className="flex items-center whitespace-nowrap w-max animate-ticker">
        {items.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-silver/80 px-6">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-cobalt shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
