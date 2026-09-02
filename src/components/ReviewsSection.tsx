'use client'

import { useI18n } from '@/contexts/I18nContext'
import { getReviews } from '@/lib/content'
import { MAPS_LINK } from '@/lib/site'
import { GoogleIcon, Stars } from './icons'

export function ReviewsSection() {
  const { t, lang } = useI18n()
  const reviews = getReviews(lang)
  const track = [...reviews, ...reviews]

  return (
    <>
      <section className="msh-shell" style={{ paddingTop: 'clamp(72px,9vw,130px)' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 26,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              {t('rev.k')}
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
              {t('rev.title')}
            </h2>
          </div>
          <a
            className="card-outline"
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              borderRadius: 16,
              padding: '16px 22px',
              color: 'var(--ink)',
            }}
          >
            <GoogleIcon size={18} />
            <span style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <span style={{ fontSize: 22, fontWeight: 400, lineHeight: 1 }}>4,8</span>
                <Stars />
              </span>
              <span style={{ fontSize: 12, letterSpacing: '0.06em', color: 'var(--muted-2)' }}>
                {t('rev.count')}
              </span>
            </span>
          </a>
        </div>
      </section>

      <div
        className="msh-rail"
        style={{ padding: 'clamp(34px,4vw,54px) 0 clamp(72px,9vw,130px)' }}
      >
        <div className="msh-track">
          {track.map((review, i) => (
            <figure
              key={`${review.name}-${i}`}
              style={{
                margin: 0,
                width: 'clamp(280px,26vw,368px)',
                flexShrink: 0,
                background: 'var(--card)',
                border: '1px solid #E7E0D4',
                borderRadius: 18,
                padding: '26px 26px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                <span
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: 'var(--bg-alt)',
                    color: 'var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15,
                    flexShrink: 0,
                  }}
                >
                  {review.name.slice(0, 1)}
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
                  <span style={{ fontSize: 15, fontWeight: 400, color: 'var(--ink)' }}>
                    {review.name}
                  </span>
                  <span
                    style={{
                      fontSize: 11.5,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-3)',
                    }}
                  >
                    {review.city}
                  </span>
                </span>
                <span style={{ marginInlineStart: 'auto', flexShrink: 0 }}>
                  <GoogleIcon size={18} />
                </span>
              </div>
              <Stars />
              <blockquote
                style={{
                  margin: 0,
                  fontSize: 15.5,
                  fontWeight: 300,
                  lineHeight: 1.68,
                  color: 'var(--body)',
                }}
              >
                {review.text}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </>
  )
}
