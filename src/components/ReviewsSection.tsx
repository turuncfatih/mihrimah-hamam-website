'use client'

import { useI18n } from '@/contexts/I18nContext'
import { useState } from 'react'

export function ReviewsSection() {
  const { t } = useI18n()
  const [isHovered, setIsHovered] = useState(false)

  const reviews = [
    {
      text: t('review1'),
      author: t('review1Author'),
      rating: 5,
    },
    {
      text: t('review2'),
      author: t('review2Author'),
      rating: 5,
    },
    {
      text: t('review3'),
      author: t('review3Author'),
      rating: 4,
    },
    {
      text: t('review1'),
      author: 'Ayşe Özkan',
      rating: 5,
    },
    {
      text: t('review2'),
      author: 'Mustafa Çelik',
      rating: 5,
    },
    {
      text: t('review3'),
      author: 'Zeynep Arslan',
      rating: 5,
    },
    {
      text: t('review1'),
      author: 'Ali Yıldız',
      rating: 5,
    },
    {
      text: t('review2'),
      author: 'Elif Korkmaz',
      rating: 5,
    },
    {
      text: t('review3'),
      author: 'Hasan Demir',
      rating: 5,
    },
    {
      text: t('review1'),
      author: 'Selin Yılmaz',
      rating: 5,
    },
    {
      text: t('review2'),
      author: 'Emre Kaya',
      rating: 5,
    },
    {
      text: t('review3'),
      author: 'Deniz Özkan',
      rating: 5,
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg 
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('customerReviews')}</h2>
        
        <div 
          className="relative overflow-hidden w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`flex space-x-6 pb-8 ${
              isHovered ? 'animate-none' : 'animate-scroll'
            }`}
            style={{ 
              width: 'max-content',
              animationDuration: '30s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear'
            }}
          >
            {/* İlk set */}
            {reviews.map((review, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-80">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-stone-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4 text-yellow-400">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600 italic mb-4 flex-grow text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="font-bold text-gray-800 text-sm">- {review.author}</p>
                </div>
              </div>
            ))}
            
            {/* İkinci set (loop için) */}
            {reviews.map((review, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-80">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full border border-stone-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4 text-yellow-400">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600 italic mb-4 flex-grow text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="font-bold text-gray-800 text-sm">- {review.author}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlay for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-stone-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-stone-50 to-transparent pointer-events-none z-10"></div>
          

        </div>
      </div>
    </section>
  )
}
