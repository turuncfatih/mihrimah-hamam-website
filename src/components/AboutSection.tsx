'use client'

import { useI18n } from '@/contexts/I18nContext'
import { ABOUT_IMAGES, FALLBACK_IMAGES, IMAGE_ALT_TEXTS } from '@/constants/images'

export function AboutSection() {
  const { t } = useI18n()

  const experiences = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z" fill="currentColor" strokeWidth="0" />
        </svg>
      ),
      title: t('traditionalRituals'),
      description: t('traditionalRitualsDesc'),
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z" fill="currentColor" strokeWidth="0" />
        </svg>
      ),
      title: t('specialMassage'),
      description: t('specialMassageDesc'),
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {t('aboutTitle')}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('aboutDescription')}
            </p>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('customExperiences')}
              </h3>
              <div className="space-y-4">
                {experiences.map((experience, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center">
                      {experience.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{experience.title}</h4>
                      <p className="text-gray-600">{experience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <img 
                alt={IMAGE_ALT_TEXTS.about.mainImage}
                className="rounded-lg shadow-2xl w-full h-80 md:h-96 object-cover" 
                src={ABOUT_IMAGES.mainImage}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = FALLBACK_IMAGES.aboutMain
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
