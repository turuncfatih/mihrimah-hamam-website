'use client'

import { useI18n } from '@/contexts/I18nContext'
import { HERO_IMAGE, waLink } from '@/lib/site'
import { WhatsAppIcon } from './icons'

export function HeroSection() {
  const { t, lang } = useI18n()

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="Tarihi Mihrimah Sultan Hamamı iç mekânından bir görünüm"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg,rgba(20,17,14,0.55) 0%,rgba(20,17,14,0.42) 40%,rgba(20,17,14,0.88) 100%),linear-gradient(100deg,rgba(20,17,14,0.62) 0%,rgba(20,17,14,0.18) 62%,rgba(20,17,14,0) 100%)',
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
