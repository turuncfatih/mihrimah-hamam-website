'use client'

import { useCallback, useEffect, useState } from 'react'
import { useI18n } from '@/contexts/I18nContext'
import { PHOTO_HEIGHT, PHOTO_WIDTH, PHOTOS, photoSrc, photoSrcSet } from '@/lib/site'
import { Reveal } from './Reveal'

export function GallerySection() {
  const { t } = useI18n()
  const [index, setIndex] = useState<number | null>(null)

  const step = useCallback((delta: number) => {
    setIndex((cur) => (cur === null ? cur : (cur + delta + PHOTOS.length) % PHOTOS.length))
  }, [])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
      else if (e.key === 'Escape') setIndex(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [index, step])

  return (
    <>
      <section id="gallery" style={{ scrollMarginTop: 90, background: 'var(--dark)', color: 'var(--bg)' }}>
        <div className="msh-shell" style={{ paddingBlock: 'clamp(72px,9vw,130px)' }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--sand)',
            }}
          >
            {t('gal.k')}
          </p>
          <h2
            style={{
              marginTop: 22,
              fontSize: 'clamp(30px,3.6vw,52px)',
              fontWeight: 200,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
            }}
          >
            {t('gal.title')}
          </h2>
          <Reveal
            style={{
              marginTop: 'clamp(40px,5vw,66px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
              gap: 14,
            }}
          >
            {PHOTOS.map((photo, i) => (
              <button
                key={photo.file}
                type="button"
                className="gal-btn"
                onClick={() => setIndex(i)}
                aria-label={`Fotoğrafı büyüt: ${photo.alt}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photoSrc(i)}
                  srcSet={photoSrcSet(i)}
                  sizes="(max-width: 640px) 46vw, (max-width: 1100px) 30vw, 300px"
                  width={PHOTO_WIDTH}
                  height={PHOTO_HEIGHT}
                  alt={`Tarihi Mihrimah Sultan Hamamı — ${photo.alt}`}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {index !== null && (
        <div
          onClick={() => setIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(16,13,10,0.95)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 22,
            padding: '5vh 4vw',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc(index)}
            alt={`Tarihi Mihrimah Sultan Hamamı — ${PHOTOS[index].alt}`}
            style={{ maxWidth: '100%', maxHeight: '78vh', objectFit: 'contain', borderRadius: 2 }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <button
              type="button"
              className="icon-btn"
              aria-label="Önceki"
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
              style={{
                width: 46,
                height: 46,
                borderRadius: '50%',
                border: '1px solid rgba(247,244,239,0.35)',
                background: 'transparent',
                color: '#F7F4EF',
                font: 'inherit',
                fontSize: 17,
                cursor: 'pointer',
              }}
            >
              ‹
            </button>
            <span
              style={{
                fontSize: 12.5,
                letterSpacing: '0.16em',
                color: 'rgba(247,244,239,0.7)',
                minWidth: 66,
                textAlign: 'center',
              }}
            >
              {index + 1} / {PHOTOS.length}
            </span>
            <button
              type="button"
              className="icon-btn"
              aria-label="Sonraki"
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
              style={{
                width: 46,
                height: 46,
                borderRadius: '50%',
                border: '1px solid rgba(247,244,239,0.35)',
                background: 'transparent',
                color: '#F7F4EF',
                font: 'inherit',
                fontSize: 17,
                cursor: 'pointer',
              }}
            >
              ›
            </button>
          </div>
          <button
            type="button"
            className="icon-btn"
            aria-label="Kapat"
            onClick={() => setIndex(null)}
            style={{
              position: 'absolute',
              top: 24,
              insetInlineEnd: 26,
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1px solid rgba(247,244,239,0.3)',
              background: 'transparent',
              color: '#F7F4EF',
              font: 'inherit',
              fontSize: 18,
              cursor: 'pointer',
            }}
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
