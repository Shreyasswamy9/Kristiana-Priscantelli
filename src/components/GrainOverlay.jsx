export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] pointer-events-none bg-grain mix-blend-overlay opacity-[0.05]"
      style={{ backgroundSize: '180px 180px' }}
    />
  )
}
