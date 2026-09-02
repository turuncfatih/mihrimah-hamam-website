'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LANG_CODES, translate, type Lang } from '@/lib/i18n'

const STORAGE_KEY = 'msh-lang'

/** Tarayıcı dilinden desteklenen dile eşleme. */
const BROWSER_MAP: Record<string, Lang> = {
  tr: 'tr',
  en: 'en',
  ar: 'ar',
  ru: 'ru',
  es: 'es',
  de: 'en',
  fr: 'en',
  it: 'es',
  pt: 'es',
  fa: 'ar',
}

type I18nValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  // Sunucu her zaman Türkçe render eder; gerçek dil ilk mount'ta belirlenir.
  const [lang, setLangState] = useState<Lang>('tr')

  useEffect(() => {
    let saved: string | null = null
    try {
      saved = window.localStorage.getItem(STORAGE_KEY)
    } catch {
      // localStorage kapalı olabilir (gizli sekme, izinler)
    }

    if (saved && (LANG_CODES as readonly string[]).includes(saved)) {
      setLangState(saved as Lang)
      return
    }

    const nav = (navigator.language || 'tr').slice(0, 2).toLowerCase()
    const auto = BROWSER_MAP[nav]
    if (auto) setLangState(auto)
  }, [])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // yoksay
    }
  }, [])

  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, dir, t: (key: string) => translate(lang, key) }),
    [lang, setLang, dir]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n, I18nProvider içinde kullanılmalıdır.')
  return ctx
}
