'use client'

import { useI18n } from '@/contexts/I18nContext'
import { telLink } from '@/lib/site'
import { PhoneIcon } from './icons'

export function CallButton() {
  const { t } = useI18n()

  return (
    <a
      className="btn msh-fab"
      href={telLink()}
      aria-label={t('cta.callfab')}
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
      <PhoneIcon size={21} />
      <span>{t('cta.callfab')}</span>
    </a>
  )
}
