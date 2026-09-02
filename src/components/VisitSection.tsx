'use client'

import type { ReactNode } from 'react'
import { useI18n } from '@/contexts/I18nContext'
import { ADDRESS, CONTACT, HOURS, MAPS_EMBED, MAPS_LINK, waLink } from '@/lib/site'
import { PinIcon, WhatsAppIcon } from './icons'
import { Reveal } from './Reveal'

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(120px,0.42fr) 1fr',
        gap: '10px 26px',
        alignItems: 'baseline',
        padding: '18px 0',
        borderBottom: '1px solid var(--line-3)',
      }}
    >
      <span
        style={{
          fontSize: 10.5,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--muted-3)',
        }}
      >
        {label}
      </span>
      <span style={{ fontSize: 16.5, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink)' }}>
        {children}
      </span>
    </div>
  )
}

export function VisitSection() {
  const { t, lang } = useI18n()

  return (
    <section
      id="visit"
      style={{
        scrollMarginTop: 90,
        background: 'var(--bg-alt)',
        borderBlock: '1px solid var(--line)',
      }}
    >
      <div className="msh-shell" style={{ paddingBlock: 'clamp(72px,9vw,130px)' }}>
        <Reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))',
            gap: 'clamp(40px,5vw,74px)',
            alignItems: 'start',
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
              {t('visit.k')}
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
              {t('visit.title')}
            </h2>

            <div style={{ marginTop: 'clamp(34px,4vw,46px)', borderTop: '1px solid var(--line-3)' }}>
              <Row label={t('visit.addrl')}>
                {ADDRESS.street}
                <br />
                {ADDRESS.district}
              </Row>
              <Row label={t('visit.menh')}>
                {t('visit.daily')}{' '}
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>{HOURS.men}</span>
              </Row>
              <Row label={t('visit.womenh')}>
                {t('visit.daily')}{' '}
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>{HOURS.women}</span>
              </Row>
              <Row label={t('visit.phonel')}>
                <a
                  className="lnk"
                  href={`tel:${CONTACT.phone}`}
                  style={{ color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}
                >
                  {CONTACT.phoneDisplay}
                </a>
              </Row>
              <Row label={t('visit.maill')}>
                <a
                  className="lnk"
                  href={`mailto:${CONTACT.email}`}
                  style={{ color: 'var(--ink)', wordBreak: 'break-word' }}
                >
                  {CONTACT.email}
                </a>
              </Row>
              <Row label={t('visit.transitl')}>{t('visit.transit')}</Row>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
              <a
                className="btn btn-wa"
                href={waLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13.5, padding: '14px 26px' }}
              >
                <WhatsAppIcon size={17} />
                <span>{t('cta.whatsapp2')}</span>
              </a>
              <a
                className="btn btn-outline-dark"
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13.5, padding: '14px 26px' }}
              >
                {t('cta.directions')}
              </a>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              border: '1px solid var(--line-3)',
              background: 'var(--bg)',
              overflow: 'hidden',
              borderRadius: 2,
            }}
          >
            <iframe
              title="Tarihi Mihrimah Sultan Hamamı konumu"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                width: '100%',
                height: 'clamp(360px,52vh,520px)',
                border: 0,
                display: 'block',
                filter: 'grayscale(0.2) contrast(1.04)',
              }}
            />
            <a
              className="mapcard"
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                bottom: 18,
                insetInlineStart: 18,
                insetInlineEnd: 18,
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: 'rgba(253,251,247,0.96)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                border: '1px solid var(--line-2)',
                borderRadius: 14,
                padding: '14px 18px',
                color: 'var(--ink)',
                boxShadow: '0 12px 30px rgba(20,17,14,0.16)',
              }}
            >
              <PinIcon size={22} />
              <span style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
                <span style={{ fontSize: 14.5, fontWeight: 400 }}>{t('map.go')}</span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 300,
                    color: 'var(--muted)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {t('map.sub')}
                </span>
              </span>
              <span style={{ marginInlineStart: 'auto', fontSize: 17, color: 'var(--gold)' }}>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
