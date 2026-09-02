import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import '../../globals.css'
import { I18nProvider } from '@/contexts/I18nContext'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { fontVars } from '@/lib/fonts'
import { dirFor, isLang } from '@/lib/seo'

/** Her iki dil kökü için ortak: uygulama manifestosu ve tarayıcı tema rengi. */
export const metadata: Metadata = { manifest: '/site.webmanifest' }

export const viewport: Viewport = {
  themeColor: '#f7f4ef',
  colorScheme: 'light',
}

export default function IntlRootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Türkçe ön eksiz kökte yayınlandığı için /tr geçerli bir adres değil.
  if (!isLang(params.lang) || params.lang === 'tr') notFound()

  return (
    <html lang={params.lang} dir={dirFor(params.lang)} className={fontVars}>
      <body>
        <I18nProvider lang={params.lang}>{children}</I18nProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
