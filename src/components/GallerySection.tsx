'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '@/contexts/I18nContext'
import { GALLERY_IMAGES, FALLBACK_IMAGES, IMAGE_ALT_TEXTS } from '@/constants/images'

export function GallerySection() {
  const { t } = useI18n()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // ESC tuşu ile modal'ı kapat
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'hidden' // Scroll'u engelle
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'unset' // Scroll'u geri aç
    }
  }, [selectedImage])

  const galleryImages = [
    {
      src: GALLERY_IMAGES.marbleDetails,
      fallbackSrc: FALLBACK_IMAGES.galleryMarble,
      alt: IMAGE_ALT_TEXTS.gallery.marbleDetails,
    },
    {
      src: GALLERY_IMAGES.relaxationArea,
      fallbackSrc: FALLBACK_IMAGES.galleryRelaxation,
      alt: IMAGE_ALT_TEXTS.gallery.relaxationArea,
    },
    {
      src: GALLERY_IMAGES.traditionalTas,
      fallbackSrc: FALLBACK_IMAGES.galleryTas,
      alt: IMAGE_ALT_TEXTS.gallery.traditionalTas,
    },
    {
      src: GALLERY_IMAGES.gobekTasi,
      fallbackSrc: FALLBACK_IMAGES.galleryGobek,
      alt: IMAGE_ALT_TEXTS.gallery.gobekTasi,
    },
    {
      src: GALLERY_IMAGES.domeLight,
      fallbackSrc: FALLBACK_IMAGES.galleryDome,
      alt: IMAGE_ALT_TEXTS.gallery.domeLight,
    },
    {
      src: GALLERY_IMAGES.accessories,
      fallbackSrc: FALLBACK_IMAGES.galleryAccessories,
      alt: IMAGE_ALT_TEXTS.gallery.accessories,
    },
    {
      src: GALLERY_IMAGES.interiorView,
      fallbackSrc: FALLBACK_IMAGES.galleryInterior,
      alt: IMAGE_ALT_TEXTS.gallery.interiorView,
    },
    {
      src: GALLERY_IMAGES.architecturalDetail,
      fallbackSrc: FALLBACK_IMAGES.galleryArchitectural,
      alt: IMAGE_ALT_TEXTS.gallery.architecturalDetail,
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">{t('ourGallery')}</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            {t('gallerySubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden cursor-pointer">
              <img 
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transition-transform duration-300" 
                src={image.src}
                onClick={() => setSelectedImage(index)}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = image.fallbackSrc
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Çarpı butonu */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              aria-label="Kapat"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Fotoğraf */}
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = galleryImages[selectedImage].fallbackSrc
              }}
            />

            {/* Navigasyon butonları */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(prev => prev === 0 ? galleryImages.length - 1 : prev! - 1)
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
              aria-label="Önceki fotoğraf"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(prev => prev === galleryImages.length - 1 ? 0 : prev! + 1)
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
              aria-label="Sonraki fotoğraf"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Fotoğraf bilgisi */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
