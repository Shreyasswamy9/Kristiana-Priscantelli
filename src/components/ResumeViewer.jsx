import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

// Renders the PDF itself (same-origin, via pdf.js) instead of embedding a
// third-party viewer — Google Docs Viewer needs a public URL (breaks locally)
// and letterboxes the page inside its own dark chrome. This sizes each page
// canvas to exactly the container width, so it fills the box cleanly on any
// screen and works identically on desktop and mobile.
export default function ResumeViewer({ url }) {
  const containerRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [numPages, setNumPages] = useState(0)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  if (failed) {
    return (
      <p className="text-center font-serif italic text-lg text-muted py-16">
        This browser can't preview the PDF here — use View Resume or Download PDF above.
      </p>
    )
  }

  return (
    <div ref={containerRef} className="border border-ink/15 bg-white">
      <Document
        file={url}
        loading={
          <p className="text-center font-serif italic text-lg text-muted py-16">
            Loading resume…
          </p>
        }
        onLoadError={() => setFailed(true)}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {width > 0 && Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            width={width}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className={i > 0 ? 'border-t border-ink/10' : undefined}
          />
        ))}
      </Document>
    </div>
  )
}
