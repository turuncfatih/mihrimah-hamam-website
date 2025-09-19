'use client'

import { useState } from 'react'
import { useI18n } from '@/contexts/I18nContext'
import { Logo } from './Logo'

export function Header() {
  const { t, currentLocale, changeLocale, getCurrentLocale, locales } = useI18n()
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

  const handleLanguageChange = (locale: string) => {
    changeLocale(locale)
    setIsLanguageMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo 
            width={120} 
            height={36} 
            className="h-8 w-auto"
            priority={true}
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a className="hover:text-primary transition-colors" href="#home">{t('home')}</a>
          <a className="hover:text-primary transition-colors" href="#about">{t('about')}</a>
          <a className="hover:text-primary transition-colors" href="#services">{t('services')}</a>
          <a className="hover:text-primary transition-colors" href="#gallery">{t('gallery')}</a>
          <a className="hover:text-primary transition-colors" href="#contact">{t('contact')}</a>
        </nav>
        
        <div className="flex items-center gap-2">
          <div className="relative inline-block text-left group">
            <button 
              className="bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm"
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              <span>{t('language')}</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  d="M19 9l-7 7-7-7" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2"
                />
              </svg>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1" role="menu">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        currentLocale === locale.code ? 'text-primary font-medium' : 'text-gray-700'
                      }`}
                      onClick={() => handleLanguageChange(locale.code)}
                      role="menuitem"
                    >
                      <span className="mr-2">{locale.flag}</span>
                      {locale.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
