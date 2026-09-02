import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { StorySection } from '@/components/StorySection'
import { RitualSection } from '@/components/RitualSection'
import { PackagesSection } from '@/components/PackagesSection'
import { GallerySection } from '@/components/GallerySection'
import { ReviewsSection } from '@/components/ReviewsSection'
import { VisitSection } from '@/components/VisitSection'
import { FaqSection } from '@/components/FaqSection'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { StructuredData } from '@/components/StructuredData'

export default function HomePage() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <StructuredData />
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <RitualSection />
        <PackagesSection />
        <GallerySection />
        <ReviewsSection />
        <VisitSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
