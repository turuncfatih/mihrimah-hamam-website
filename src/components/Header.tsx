'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useI18n } from '@/contexts/I18nContext'
import { LANGS } from '@/lib/i18n'
import { localePath } from '@/lib/seo'
import { waLink } from '@/lib/site'
import { WhatsAppIcon } from './icons'

const SECTIONS = ['ritual', 'packages', 'gallery', 'visit'] as const
const SECTION_KEYS: Record<(typeof SECTIONS)[number], string> = {
  ritual: 'nav.ritual',
  packages: 'nav.prices',
  gallery: 'nav.gallery',
  visit: 'nav.visit',
}

/**
 * @param onHome Anasayfadayken bölüm bağlantıları düz anchor olur; diğer
 * sayfalarda anasayfaya dönüp ilgili bölüme kayacak şekilde `/#bolum` olur.
 */
export function Header({ onHome = true }: { onHome?: boolean }) {
  const { t, lang } = useI18n()
  const home = localePath(lang)
  const [menuOpen, setMenuOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [menuOpen])

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(247,244,239,0.9)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        className="msh-shell msh-header-row"
        style={{ paddingBlock: 14, display: 'flex', alignItems: 'center', gap: 28 }}
      >
        <Link
          href={home}
          style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink)', flexShrink: 0 }}
        >
          <span
            style={{
              width: 48,
              height: 48,
              flexShrink: 0,
              border: '1px solid var(--gold-line)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 17,
              fontWeight: 300,
              letterSpacing: '0.05em',
              color: 'var(--gold)',
            }}
          >
            MS
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 4, lineHeight: 1.12 }}>
            <span style={{ fontSize: 18, fontWeight: 400, letterSpacing: '0.01em' }}>
              Mihrimah Sultan
            </span>
            <span
              className="msh-brand-sub"
              style={{
                fontSize: 10,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'var(--muted-2)',
              }}
            >
              {t('brand.sub')}
            </span>
          </span>
        </Link>

        <nav className="msh-nav" style={{ marginInlineStart: 'auto' }}>
          {onHome ? (
            <a className="lnk" href="#top">
              {t('nav.home')}
            </a>
          ) : (
            <Link className="lnk" href={home}>
              {t('nav.home')}
            </Link>
          )}
          <Link
            className="lnk"
            href="/mihrimah-sultan-tarihi"
            style={onHome ? undefined : { color: 'var(--gold)' }}
          >
            {t('nav.history')}
          </Link>
          {SECTIONS.map((id) =>
            onHome ? (
              <a key={id} className="lnk" href={`#${id}`}>
                {t(SECTION_KEYS[id])}
              </a>
            ) : (
              <Link key={id} className="lnk" href={`${home}#${id}`}>
                {t(SECTION_KEYS[id])}
              </Link>
            )
          )}
        </nav>

        <div ref={boxRef} style={{ position: 'relative', flexShrink: 0 }}>
          <button
            type="button"
            className="langbtn"
            aria-haspopup="listbox"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              border: '1px solid var(--line-2)',
              background: 'var(--card)',
              borderRadius: 999,
              padding: '7px 13px 7px 11px',
              font: 'inherit',
              fontSize: 12,
              letterSpacing: '0.08em',
              color: 'var(--body)',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>{current.flag}</span>
            <span>{current.code.toUpperCase()}</span>
            <span style={{ fontSize: 9, color: 'var(--gold-soft)' }}>▾</span>
          </button>

          {menuOpen && (
            <div
              role="listbox"
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                insetInlineEnd: 0,
                background: 'var(--card)',
                border: '1px solid var(--line-2)',
                borderRadius: 14,
                padding: 6,
                minWidth: 172,
                boxShadow: '0 18px 42px rgba(36,31,25,0.14)',
                zIndex: 80,
                animation: 'msh-rise 0.22s ease both',
              }}
            >
              {LANGS.map((l) => (
                <a
                  key={l.code}
                  className="lang-item"
                  href={localePath(l.code)}
                  hrefLang={l.code}
                  aria-current={l.code === lang ? 'true' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 11,
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'var(--ink-soft)',
                    padding: '9px 12px',
                    borderRadius: 9,
                  }}
                >
                  <span style={{ fontSize: 17, lineHeight: 1 }}>{l.flag}</span>
                  <span>{l.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <a
          className="btn btn-dark"
          href={waLink(lang)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ flexShrink: 0, gap: 9, fontSize: 13, padding: '11px 20px' }}
        >
          <WhatsAppIcon size={16} />
          <span>{t('cta.whatsapp')}</span>
        </a>
      </div>
    </header>
  )
}
