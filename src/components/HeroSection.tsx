'use client'

import { useI18n } from '@/contexts/I18nContext'
import { Logo } from './Logo'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section id="home" className="relative h-[70vh] bg-stone-100 flex items-center justify-center text-gray-800">
      <div className="absolute inset-0 bg-grid-stone-200 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="relative z-10 text-center px-6">
        <div className="mb-6 flex justify-center">
          <Logo 
            width={200} 
            height={60} 
            className="h-16 w-auto"
            priority={true}
          />
        </div>
        <h1 className="text-4xl font-extrabold md:text-5xl text-stone-900">
          Tarihi Mihrimah Sultan Hamamı
        </h1>
        <h2 className="mt-2 text-xl md:text-2xl font-semibold text-stone-700">
          Mimar Sinan Eseri | 16. Yüzyıl Osmanlı Mimarisi
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-stone-600">
          İstanbul'un tarihi yarımadasında, Mimar Sinan'ın 16. yüzyılda inşa ettiği otantik hamam deneyimini yaşayın. Geleneksel Osmanlı hamam kültürünün en güzel örneklerinden biri.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105" 
            href="#packages"
            aria-label="Hamam paketlerini inceleyin"
          >
            Paketleri İncele
          </a>
          <a 
            className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-white transition-all" 
            href="#about"
            aria-label="Hamam hakkında daha fazla bilgi alın"
          >
            Hakkımızda
          </a>
        </div>
      </div>
    </section>
  )
}