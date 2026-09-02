'use client'

import { useI18n } from '@/contexts/I18nContext'
import { Reveal } from './Reveal'

const STEPS = ['1', '2', '3', '4']

export function RitualSection() {
  const { t } = useI18n()

  return (
    <section
      id="ritual"
      style={{
        scrollMarginTop: 90,
        background: 'var(--bg-alt)',
        borderBlock: '1px solid var(--line)',
      }}
    >
      <div className="msh-shell" style={{ paddingBlock: 'clamp(72px,9vw,130px)' }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}
        >
          {t('ritual.k')}
        </p>
        <h2
          style={{
            marginTop: 22,
            fontSize: 'clamp(30px,3.6vw,52px)',
            fontWeight: 200,
            lineHeight: 1.1,
            letterSpacing: '-0.015em',
            maxWidth: '22em',
          }}
        >
          {t('ritual.title')}
        </h2>
        <Reveal
          style={{
            marginTop: 'clamp(44px,5vw,72px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
            gap: 1,
            background: 'var(--line-3)',
          }}
        >
          {STEPS.map((n) => (
            <div
              key={n}
              style={{
                background: 'var(--bg)',
                padding: '34px 30px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <span style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold-soft)' }}>
                0{n}
              </span>
              <h3 style={{ fontSize: 21, fontWeight: 400, letterSpacing: '-0.01em' }}>
                {t(`ritual.${n}t`)}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 300,
                  lineHeight: 1.66,
                  color: 'var(--body-soft)',
                }}
              >
                {t(`ritual.${n}d`)}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
