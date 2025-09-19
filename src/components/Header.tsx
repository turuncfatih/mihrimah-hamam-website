'use client'

import { useState } from 'react'
import { useI18n } from '@/contexts/I18nContext'
import { Logo } from './Logo'

export function Header() {
  const { t, currentLocale, changeLocale, getCurrentLocale, locales } = useI18n()
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLanguageChange = (locale: string) => {
    changeLocale(locale)
    setIsLanguageMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <Logo 
              width={80} 
              height={80} 
              className="w-full h-full object-cover rounded-full"
              priority={true}
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a className="hover:text-primary transition-colors" href="#home">{t('home')}</a>
          <a className="hover:text-primary transition-colors" href="#about">{t('about')}</a>
          <a className="hover:text-primary transition-colors" href="#services">{t('services')}</a>
          <a className="hover:text-primary transition-colors" href="#gallery">{t('gallery')}</a>
          <a className="hover:text-primary transition-colors" href="#contact">{t('contact')}</a>
        </nav>
        
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
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
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <a 
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md" 
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('home')}
            </a>
            <a 
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md" 
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('about')}
            </a>
            <a 
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md" 
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('services')}
            </a>
            <a 
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md" 
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('gallery')}
            </a>
            <a 
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md" 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('contact')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
