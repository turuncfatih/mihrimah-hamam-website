'use client'

import Link from 'next/link'
import { useI18n } from '@/contexts/I18nContext'
import { ENTRANCE_IMAGE } from '@/lib/site'
import { Reveal } from './Reveal'

export function StorySection() {
  const { t } = useI18n()

  return (
    <section
      id="story"
      className="msh-shell"
      style={{ scrollMarginTop: 90, paddingBlock: 'clamp(72px,9vw,140px)' }}
    >
      <Reveal
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
          gap: 'clamp(40px,6vw,88px)',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 24,
            }}
          >
            {t('story.k')}
          </p>
          <h2
            style={{
              fontSize: 'clamp(30px,3.6vw,52px)',
              fontWeight: 200,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
              maxWidth: '20em',
              textWrap: 'balance',
            }}
          >
            {t('story.title')}
          </h2>
          <p
            style={{
              marginTop: 28,
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.72,
              color: 'var(--body)',
              maxWidth: '38em',
              textWrap: 'pretty',
            }}
          >
            {t('story.p1')}
          </p>
          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.72,
              color: 'var(--body)',
              maxWidth: '38em',
              textWrap: 'pretty',
            }}
          >
            {t('story.p2')}
          </p>
          <Link
            href="/mihrimah-sultan-tarihi"
            style={{
              display: 'inline-block',
              marginTop: 34,
              fontSize: 14,
              letterSpacing: '0.06em',
              borderBottom: '1px solid var(--gold-line)',
              paddingBottom: 5,
            }}
          >
            {t('cta.readhistory')}
          </Link>
        </div>

        <div style={{ position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ENTRANCE_IMAGE}
            width={718}
            height={1280}
            alt="Tarihi Mihrimah Sultan Hamamı girişi ve soğukluk bölümü"
            loading="lazy"
            decoding="async"
            style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 2 }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -1,
              left: -1,
              background: 'var(--bg)',
              padding: '22px 26px 6px 0',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(34px,4vw,54px)',
                fontWeight: 200,
                lineHeight: 1,
                color: 'var(--gold)',
              }}
            >
              465<span style={{ fontSize: '0.45em', verticalAlign: 'super' }}>+</span>
            </p>
            <p
              style={{
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--muted-2)',
                marginTop: 8,
              }}
            >
              {t('story.stat')}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
