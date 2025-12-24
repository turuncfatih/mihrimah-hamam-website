'use client'

import { useI18n } from '@/contexts/I18nContext'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section id="home" className="relative h-[70vh] bg-stone-100 flex items-center justify-center text-gray-800">
      <div className="absolute inset-0 bg-grid-stone-200 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="relative z-10 text-center px-6">
        <h2 className="text-5xl font-extrabold md:text-6xl text-stone-900">
          {t('heroTitle')}
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-stone-600">
          {t('heroSubtitle')}
        </p>
        <a 
          className="mt-8 inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105" 
          href="#services"
        >
          {t('exploreServices')}
        </a>
      </div>
    </section>
  )
}