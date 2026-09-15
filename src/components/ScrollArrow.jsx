export default function ScrollArrow({ to, label, tone = 'ink' }) {
  const toneClass = tone === 'paper'
    ? 'text-paper/70 hover:text-paper'
    : 'text-ink/50 hover:text-accent'

  return (
    <a
      href={`#${to}`}
      aria-label={label}
      className={`inline-flex items-center justify-center w-9 h-9 transition-opacity duration-300 opacity-70 hover:opacity-100 ${toneClass}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1v12.5M8 13.5L2.5 8M8 13.5L13.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
