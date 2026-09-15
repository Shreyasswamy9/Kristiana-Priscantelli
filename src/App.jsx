import Header from './components/Header'
import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview'
import ReelSection from './components/ReelSection'
import ResumeSection from './components/ResumeSection'
import FilmSection from './components/FilmSection'
import TheaterSection from './components/TheaterSection'
import GalleryGrid from './components/GalleryGrid'
import NewsSection from './components/NewsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import GrainOverlay from './components/GrainOverlay'

export default function App() {
  return (
    <>
      <div className="bg-paper text-ink selection:bg-accent/20">
        <Header />
        <main>
          <Hero />
          <AboutPreview />
          <ReelSection />
          <ResumeSection />
          <FilmSection />
          <TheaterSection />
          <GalleryGrid />
          <NewsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <GrainOverlay />
    </>
  )
}
