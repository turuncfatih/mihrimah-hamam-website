'use client'

import { useI18n } from '@/contexts/I18nContext'
import { getFaqs } from '@/lib/content'
import { waLink } from '@/lib/site'
import { FaqList } from './FaqList'
import { Reveal } from './Reveal'

export function FaqSection() {
  const { t, lang } = useI18n()
  const faqs = getFaqs(lang)

  return (
    <section
      id="faq"
      className="msh-shell"
      style={{ scrollMarginTop: 90, paddingBlock: 'clamp(72px,9vw,120px)' }}
    >
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
            {t('faq.k')}
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
            {t('faq.title')}
          </h2>
        </div>
        <a
          href={waLink(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="lnk"
          style={{
            fontSize: 14,
            letterSpacing: '0.04em',
            color: 'var(--gold)',
            borderBottom: '1px solid var(--gold-line)',
            paddingBottom: 5,
          }}
        >
          {t('faq.more')}
        </a>
      </div>

      <Reveal
        style={{
          marginTop: 'clamp(36px,4vw,54px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(390px,1fr))',
          gap: 16,
          // Kapalı kartlar sorunun yüksekliği kadar dursun; aksi hâlde satırdaki
          // en uzun soruya göre gerilip boş kutu gibi görünüyorlar.
          alignItems: 'start',
        }}
      >
        {/* Dil değişince liste yeniden kurulsun ki açık/kapalı durum tutarlı kalsın. */}
        <FaqList key={lang} items={faqs} />
      </Reveal>
    </section>
  )
}
