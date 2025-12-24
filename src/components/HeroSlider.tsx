'use client'

import { useState, useEffect, useCallback } from 'react'
import { useI18n } from '@/contexts/I18nContext'
import type { SlideItem } from '@/types/slider'
import { HERO_SLIDER_IMAGES, FALLBACK_IMAGES, IMAGE_ALT_TEXTS } from '@/constants/images'

export function HeroSlider() {
  const { t } = useI18n()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Vimeo player script'ini yükle
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://player.vimeo.com/api/player.js'
    script.async = true
    if (!document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) {
      document.body.appendChild(script)
    }
  }, [])

  const slides: SlideItem[] = [
    {
      id: '1',
      title: t('heroTitle'),
      subtitle: t('heroSubtitle'),
      image: HERO_SLIDER_IMAGES.slide1,
      fallbackImage: FALLBACK_IMAGES.heroSlide1,
      alt: IMAGE_ALT_TEXTS.hero.slide1,
      videoUrl: 'https://player.vimeo.com/video/1149173872?badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1&autoplay=1&loop=1',
      isVideo: true,
    },
    {
      id: '2',
      title: t('slide2Title'),
      subtitle: t('slide2Subtitle'),
      image: HERO_SLIDER_IMAGES.slide2,
      fallbackImage: FALLBACK_IMAGES.heroSlide2,
      alt: IMAGE_ALT_TEXTS.hero.slide2,
    },
    {
      id: '3',
      title: t('slide3Title'),
      subtitle: t('slide3Subtitle'),
      image: HERO_SLIDER_IMAGES.slide3,
      fallbackImage: FALLBACK_IMAGES.heroSlide3,
      alt: IMAGE_ALT_TEXTS.hero.slide3,
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false)
  }, [])

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 60000) // 1 dakika (60 saniye)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="relative h-[70vh] bg-stone-100 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-stone-200 [mask-image:linear-gradient(to_bottom,white,transparent)] z-0" />
      
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background video or image */}
            {slide.isVideo && slide.videoUrl ? (
              <div className="absolute inset-0">
                <iframe
                  src={slide.videoUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            ) : (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundImage: `url(${slide.fallbackImage})` // Fallback için
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
            )}
            
            {/* Content - Only show for non-video slides */}
            {!slide.isVideo && (
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <a 
                    className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
                    href="#services"
                  >
                    {t('exploreServices')}
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide()
          pauseAutoPlay()
          setTimeout(resumeAutoPlay, 10000)
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => {
          nextSlide()
          pauseAutoPlay()
          setTimeout(resumeAutoPlay, 10000)
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index)
              pauseAutoPlay()
              setTimeout(resumeAutoPlay, 10000)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full z-20">
        <div 
          className="h-full bg-white transition-all duration-1000 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  )
}
