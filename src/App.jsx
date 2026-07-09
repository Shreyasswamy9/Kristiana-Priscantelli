import Header from './components/Header'
import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview'
import FeaturedMedia from './components/FeaturedMedia'
import ReelSection from './components/ReelSection'
import GalleryGrid from './components/GalleryGrid'
import PressQuote from './components/PressQuote'
import ResumeSection from './components/ResumeSection'
import RecentlySection from './components/RecentlySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import GrainOverlay from './components/GrainOverlay'

export default function App() {
  return (
    <>
      <div className="bg-ink text-veil selection:bg-white/10">
        <Header />
        <main>
          <Hero />
          <AboutPreview />
          <FeaturedMedia />
          <ReelSection />
          <GalleryGrid />
          <PressQuote />
          <ResumeSection />
          <RecentlySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <GrainOverlay />
    </>
  )
}
