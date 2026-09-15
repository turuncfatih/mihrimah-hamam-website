'use client'

import { useEffect, useState } from 'react'
import { useI18n } from '@/contexts/I18nContext'
import { HERO_SLIDES, hamamPhoto, hamamPhotoSrcSet, waLink } from '@/lib/site'
import { WhatsAppIcon } from './icons'

/** Her kare yaklaşık bu kadar ekranda kalır (ms). */
const SLIDE_DURATION_MS = 6000
/** Kareler arası yumuşak geçiş süresi (ms). */
const FADE_DURATION_MS = 1400

export function HeroSection() {
  const { t, lang } = useI18n()
  const [active, setActive] = useState(0)
  // İlk boyamayı yavaşlatmamak için ilk kare dışındakiler mount sonrasında eklenir.
  const [showAllSlides, setShowAllSlides] = useState(false)
  const [autoplay, setAutoplay] = useState(false)

  useEffect(() => {
    setShowAllSlides(true)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setAutoplay(!mq.matches)
    const onChange = (e: MediaQueryListEvent) => setAutoplay(!e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!autoplay || HERO_SLIDES.length <= 1) return
    const id = setInterval(() => {
      // Sekme arka plandayken ilerleme durur.
      if (document.hidden) return
      setActive((i) => (i + 1) % HERO_SLIDES.length)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(id)
  }, [autoplay])

  return (
    <>
      <section
        id="top"
        style={{
          position: 'relative',
          minHeight: '86vh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
          background: 'var(--dark)',
        }}
      >
        {HERO_SLIDES.map((slide, i) => {
          if (i > 0 && !showAllSlides) return null
          const isFirst = i === 0
          const isActive = i === active
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={slide.file}
              src={hamamPhoto(slide.file)}
              srcSet={hamamPhotoSrcSet(slide.file)}
              sizes="100vw"
              decoding="async"
              loading="eager"
              fetchPriority={isFirst ? 'high' : undefined}
              alt={isFirst ? 'Tarihi Mihrimah Sultan Hamamı iç mekânından bir görünüm' : ''}
              aria-hidden={isFirst ? undefined : true}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: isActive ? 1 : 0,
                transition: `opacity ${FADE_DURATION_MS}ms ease`,
              }}
            />
          )
        })}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg,rgba(20,17,14,0.42) 0%,rgba(20,17,14,0.26) 42%,rgba(20,17,14,0.85) 100%),linear-gradient(100deg,rgba(20,17,14,0.55) 0%,rgba(20,17,14,0.12) 60%,rgba(20,17,14,0) 100%)',
          }}
        />
        <div
          className="msh-shell msh-rise"
          style={{ position: 'relative', paddingBottom: 68, width: '100%' }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.34em',
              textTransform: 'uppercase',
              color: 'var(--sand)',
              marginBottom: 22,
            }}
          >
            {t('hero.eyebrow')}
          </p>
          <span
            style={{
              display: 'block',
              width: 64,
              height: 1,
              background: 'linear-gradient(90deg,#DEC9A5,rgba(222,201,165,0))',
              marginBottom: 26,
            }}
          />
          <h1
            style={{
              fontSize: 'clamp(38px,6.4vw,88px)',
              fontWeight: 200,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: '#FBF8F3',
              maxWidth: '16em',
              textWrap: 'balance',
            }}
          >
            {t('hero.title')}
          </h1>
          <p
            style={{
              marginTop: 26,
              maxWidth: '34em',
              fontSize: 'clamp(16px,1.5vw,19px)',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'rgba(251,248,243,0.94)',
              textWrap: 'pretty',
            }}
          >
            {t('hero.sub')}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 38 }}>
            <a
              className="btn btn-cream"
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 14, padding: '16px 30px' }}
            >
              <WhatsAppIcon size={17} fill="#1F7A44" />
              <span>{t('cta.reserve')}</span>
            </a>
            <a
              className="btn btn-outline-light"
              href="#packages"
              style={{ fontSize: 14, padding: '16px 30px' }}
            >
              {t('cta.prices')}
            </a>
          </div>
        </div>
      </section>

      <div
        style={{
          background: 'var(--dark)',
          color: 'var(--sand)',
          borderTop: '1px solid rgba(222,201,165,0.18)',
        }}
      >
        <div
          className="msh-shell"
          style={{
            paddingBlock: 20,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px 46px',
            fontSize: 12.5,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          <span>{t('strip.1')}</span>
          <span>{t('strip.2')}</span>
          <span>{t('strip.3')}</span>
          <span>{t('strip.4')}</span>
        </div>
      </div>
    </>
  )
}
