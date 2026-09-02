'use client'

import { useI18n } from '@/contexts/I18nContext'
import { waLink } from '@/lib/site'
import { WhatsAppIcon } from './icons'

export function WhatsAppButton() {
  const { t, lang } = useI18n()

  return (
    <a
      className="btn msh-fab"
      href={waLink(lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      style={{
        position: 'fixed',
        bottom: 24,
        insetInlineEnd: 24,
        zIndex: 70,
        gap: 11,
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: '0.03em',
        padding: '14px 22px',
      }}
    >
      <WhatsAppIcon size={21} />
      <span>{t('cta.wafab')}</span>
    </a>
  )
}
