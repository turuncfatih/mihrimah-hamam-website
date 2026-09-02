'use client'

import Link from 'next/link'
import { useI18n } from '@/contexts/I18nContext'
import { ADDRESS, CONTACT, HOURS, MAPS_LINK, waLink } from '@/lib/site'
import { WhatsAppIcon } from './icons'

const colTitle = {
  fontSize: 10,
  letterSpacing: '0.26em',
  textTransform: 'uppercase' as const,
  color: 'var(--muted-2)',
}

const colBody = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 12,
  fontSize: 14.5,
  fontWeight: 300,
}

export function Footer({ onHome = true }: { onHome?: boolean }) {
  const { t, lang } = useI18n()
  const section = (id: string) => (onHome ? `#${id}` : `/#${id}`)

  return (
    <footer
      style={{
        background: 'var(--darker)',
        color: 'rgba(247,244,239,0.66)',
        borderTop: '1px solid rgba(222,201,165,0.16)',
      }}
    >
      <div
        className="msh-shell"
        style={{
          paddingTop: 'clamp(58px,6vw,92px)',
          paddingBottom: 'clamp(38px,4vw,54px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(260px,1.35fr) repeat(auto-fit,minmax(170px,1fr))',
          gap: 'clamp(38px,5vw,72px)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 15, color: 'var(--bg)' }}>
            <span
              style={{
                width: 52,
                height: 52,
                flexShrink: 0,
                border: '1px solid rgba(222,201,165,0.5)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 17,
                fontWeight: 300,
                letterSpacing: '0.04em',
                color: 'var(--sand)',
              }}
            >
              MS
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 6, lineHeight: 1.1 }}>
              <span style={{ fontSize: 18, fontWeight: 400, letterSpacing: '0.01em', color: 'var(--bg)' }}>
                Tarihi Mihrimah Sultan Hamamı
              </span>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-soft)',
                }}
              >
                {t('footer.est')}
              </span>
            </span>
          </Link>
          <p style={{ fontSize: 14.5, fontWeight: 300, lineHeight: 1.72, maxWidth: '30em' }}>
            {t('footer.tag')}
          </p>
          <a
            className="btn btn-wa-ghost"
            href={waLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ alignSelf: 'flex-start', gap: 9, fontSize: 13, padding: '12px 22px' }}
          >
            <WhatsAppIcon size={16} />
            <span>{t('cta.whatsapp')}</span>
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={colTitle}>{t('footer.explore')}</p>
          <div style={colBody}>
            <Link className="lnk-sand" href="/mihrimah-sultan-tarihi">
              {t('nav.history2')}
            </Link>
            <a className="lnk-sand" href={section('ritual')}>
              {t('nav.ritual2')}
            </a>
            <a className="lnk-sand" href={section('packages')}>
              {t('nav.prices2')}
            </a>
            <a className="lnk-sand" href={section('gallery')}>
              {t('nav.gallery2')}
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={colTitle}>{t('footer.contact')}</p>
          <div style={colBody}>
            <a
              className="lnk-sand"
              href={`tel:${CONTACT.phone}`}
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {CONTACT.phoneDisplay}
            </a>
            <a className="lnk-sand" href={`mailto:${CONTACT.email}`} style={{ wordBreak: 'break-word' }}>
              {CONTACT.email}
            </a>
            <span style={{ lineHeight: 1.6 }}>
              {ADDRESS.street}
              <br />
              Karagümrük, 34091 Fatih
            </span>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sand)' }}>
              {t('cta.directions')}
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={colTitle}>{t('footer.hours')}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 14.5, fontWeight: 300 }}>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: 'rgba(247,244,239,0.55)', fontSize: 12.5, letterSpacing: '0.1em' }}>
                {t('visit.menh')}
              </span>
              <span style={{ color: 'var(--bg)', fontVariantNumeric: 'tabular-nums' }}>{HOURS.men}</span>
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: 'rgba(247,244,239,0.55)', fontSize: 12.5, letterSpacing: '0.1em' }}>
                {t('visit.womenh')}
              </span>
              <span style={{ color: 'var(--bg)', fontVariantNumeric: 'tabular-nums' }}>{HOURS.women}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Sabit WhatsApp butonu sağ altta durduğu için künye satırına fazladan alt boşluk. */}
      <div className="msh-shell" style={{ paddingBottom: 'clamp(64px,6vw,84px)' }}>
        <div
          style={{
            borderTop: '1px solid rgba(247,244,239,0.12)',
            paddingTop: 24,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px 34px',
            alignItems: 'center',
            fontSize: 12,
            letterSpacing: '0.08em',
            color: 'rgba(247,244,239,0.42)',
          }}
        >
          <span>© {new Date().getFullYear()} Tarihi Mihrimah Sultan Hamamı</span>
          <span>{t('footer.rights')}</span>
          <a
            className="lnk-sand"
            href="https://turuncsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginInlineStart: 'auto', color: 'rgba(247,244,239,0.55)' }}
          >
            Turunc Soft
          </a>
        </div>
      </div>
    </footer>
  )
}
