'use client'

import { useEffect } from 'react'
import { useI18n } from '@/contexts/I18nContext'

export function LanguageProvider() {
  const { currentLocale } = useI18n()

  useEffect(() => {
    // Update the HTML lang attribute based on current locale
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLocale === 'ar' ? 'ar' : 
                                     currentLocale === 'es' ? 'es' : 
                                     currentLocale === 'en' ? 'en' : 'tr'
    }
  }, [currentLocale])

  return null
}
