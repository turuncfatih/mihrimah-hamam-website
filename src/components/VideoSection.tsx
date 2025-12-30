'use client'

import { useEffect } from 'react'
import { useI18n } from '@/contexts/I18nContext'

export function VideoSection() {
  const { t } = useI18n()

  useEffect(() => {
    // Vimeo player script'ini yükle
    const script = document.createElement('script')
    script.src = 'https://player.vimeo.com/api/player.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="video" className="py-20 bg-stone-100/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {t('videoTitle')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('videoSubtitle')}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/1149173872?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title="Tarihi Mihrimah Sultan Hamamı Tanıtım"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

