'use client'

import { Header } from '@/components/Header'
import { HeroSlider } from '@/components/HeroSlider'
import { FeaturesSection } from '@/components/FeaturesSection'
import { AboutSection } from '@/components/AboutSection'
import { PackagesSection } from '@/components/PackagesSection'
import { GallerySection } from '@/components/GallerySection'
import { ReviewsSection } from '@/components/ReviewsSection'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSlider />
        <FeaturesSection />
        <AboutSection />
        <PackagesSection />
        <GallerySection />
        <ReviewsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
