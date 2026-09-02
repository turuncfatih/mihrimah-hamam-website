'use client'

import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { translate, type Lang } from '@/lib/i18n'

type I18nValue = {
  lang: Lang
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const I18nContext = createContext<I18nValue | null>(null)

/**
 * Dil artık URL'den gelir (/ = tr, /en, /ar, /ru, /es). Böylece her dil
 * sunucuda kendi diliyle render edilir ve arama motorları tarafından ayrı
 * ayrı indekslenebilir; tarayıcı tarafında dil tespiti yapılmaz.
 */
export function I18nProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const value = useMemo<I18nValue>(
    () => ({
      lang,
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      t: (key: string) => translate(lang, key),
    }),
    [lang]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n, I18nProvider içinde kullanılmalıdır.')
  return ctx
}
