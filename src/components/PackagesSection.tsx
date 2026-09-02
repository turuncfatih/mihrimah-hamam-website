'use client'

import { useState, type CSSProperties } from 'react'
import { useI18n } from '@/contexts/I18nContext'
import { SEGMENT_HOURS } from '@/lib/i18n'
import { PRICES, waLink, type Segment } from '@/lib/site'
import { Reveal } from './Reveal'

const tabStyle = (active: boolean): CSSProperties => ({
  border: 0,
  font: 'inherit',
  fontSize: 13,
  letterSpacing: '0.06em',
  padding: '9px 22px',
  borderRadius: 999,
  cursor: 'pointer',
  transition: 'background .25s ease,color .25s ease',
  background: active ? 'var(--dark)' : 'transparent',
  color: active ? 'var(--bg)' : '#6B6459',
})

const listStyle: CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 11,
  fontSize: 15,
  fontWeight: 300,
}

export function PackagesSection() {
  const { t, lang } = useI18n()
  const [seg, setSeg] = useState<Segment>('men')
  const prices = PRICES[seg]

  return (
    <section
      id="packages"
      className="msh-shell"
      style={{ scrollMarginTop: 90, paddingBlock: 'clamp(72px,9vw,130px)' }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 24,
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
            {t('pkg.k')}
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
            {t('pkg.title')}
          </h2>
        </div>
        <p
          style={{
            fontSize: 14,
            fontWeight: 300,
            lineHeight: 1.6,
            color: 'var(--muted)',
            maxWidth: '26em',
          }}
        >
          {t('pkg.note')}
        </p>
      </div>

      <div
        role="tablist"
        style={{
          marginTop: 36,
          display: 'inline-flex',
          gap: 3,
          padding: 4,
          border: '1px solid var(--line-2)',
          borderRadius: 999,
          background: 'var(--card)',
        }}
      >
        <button
          type="button"
          role="tab"
          aria-selected={seg === 'men'}
          onClick={() => setSeg('men')}
          style={tabStyle(seg === 'men')}
        >
          {t('tab.men')}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={seg === 'women'}
          onClick={() => setSeg('women')}
          style={tabStyle(seg === 'women')}
        >
          {t('tab.women')}
        </button>
      </div>

      <p style={{ marginTop: 16, fontSize: 13.5, letterSpacing: '0.06em', color: 'var(--muted-2)' }}>
        {SEGMENT_HOURS[seg][lang]}
      </p>

      <Reveal
        style={{
          marginTop: 'clamp(28px,3vw,42px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 20,
        }}
      >
        {/* Standart */}
        <div
          className="card-outline"
          style={{
            padding: '36px 32px 34px',
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
          }}
        >
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 400 }}>{t('pkg1.name')}</h3>
            <p style={{ marginTop: 14, fontSize: 34, fontWeight: 200, color: 'var(--ink)' }}>
              {prices[0]}
              <span style={{ fontSize: '0.42em', letterSpacing: '0.1em', marginInlineStart: 6 }}>
                TL
              </span>
            </p>
          </div>
          <ul style={{ ...listStyle, color: 'var(--body-soft)' }}>
            <li>{t('f.bath')}</li>
            <li>{t('f.kit')}</li>
          </ul>
          <a
            className="btn btn-outline-dark"
            href={waLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 'auto',
              justifyContent: 'center',
              fontSize: 13.5,
              padding: '13px 20px',
            }}
          >
            {t('cta.ask')}
          </a>
        </div>

        {/* Geleneksel — öne çıkan */}
        <div
          style={{
            border: '1px solid var(--dark)',
            background: 'var(--dark)',
            color: 'var(--bg)',
            padding: '36px 32px 34px',
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
            position: 'relative',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: -11,
              left: 32,
              background: 'var(--sand)',
              color: 'var(--ink)',
              fontSize: 10.5,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '5px 12px',
              borderRadius: 999,
            }}
          >
            {t('pkg.popular')}
          </span>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 400 }}>{t('pkg2.name')}</h3>
            <p style={{ marginTop: 14, fontSize: 34, fontWeight: 200 }}>
              {prices[1]}
              <span style={{ fontSize: '0.42em', letterSpacing: '0.1em', marginInlineStart: 6 }}>
                TL
              </span>
            </p>
          </div>
          <ul style={{ ...listStyle, color: 'rgba(247,244,239,0.82)' }}>
            <li>{t('f.scrub')}</li>
            <li>{t('f.foam')}</li>
            <li>{t('f.bath2')}</li>
            <li>{t('f.kit2')}</li>
          </ul>
          <a
            className="btn btn-sand"
            href={waLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 'auto',
              justifyContent: 'center',
              fontSize: 13.5,
              padding: '13px 20px',
            }}
          >
            {t('cta.reserve2')}
          </a>
        </div>

        {/* Mihrimah Sultan */}
        <div
          className="card-outline"
          style={{
            padding: '36px 32px 34px',
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
          }}
        >
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 400 }}>{t('pkg3.name')}</h3>
            <p style={{ marginTop: 14, fontSize: 34, fontWeight: 200, color: 'var(--ink)' }}>
              {prices[2]}
              <span style={{ fontSize: '0.42em', letterSpacing: '0.1em', marginInlineStart: 6 }}>
                TL
              </span>
            </p>
          </div>
          <ul style={{ ...listStyle, color: 'var(--body-soft)' }}>
            <li>{t('f.oil')}</li>
            <li>{t('f.scrub2')}</li>
            <li>{t('f.foam2')}</li>
            <li>{t('f.bath3')}</li>
          </ul>
          <a
            className="btn btn-outline-dark"
            href={waLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 'auto',
              justifyContent: 'center',
              fontSize: 13.5,
              padding: '13px 20px',
            }}
          >
            {t('cta.ask2')}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
