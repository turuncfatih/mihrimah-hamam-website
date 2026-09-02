import type { Metadata, Viewport } from 'next'
import '../globals.css'
import { I18nProvider } from '@/contexts/I18nContext'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { fontVars } from '@/lib/fonts'

/** Her iki dil kökü için ortak: uygulama manifestosu ve tarayıcı tema rengi. */
export const metadata: Metadata = { manifest: '/site.webmanifest' }

export const viewport: Viewport = {
  themeColor: '#f7f4ef',
  colorScheme: 'light',
}

export default function TurkishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" dir="ltr" className={fontVars}>
      <body>
        <I18nProvider lang="tr">{children}</I18nProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
