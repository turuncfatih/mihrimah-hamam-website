import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/contexts/I18nContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tarihi Mihrimah Sultan Hamamı',
  description: 'Mimar Sinan\'ın 16. yüzyılda inşa ettiği, Osmanlı mimarisinin inceliklerini taşıyan otantik bir mekanda arının.',
  keywords: 'hamam, mihrimah sultan, istanbul, mimar sinan, osmanlı, geleneksel',
  authors: [{ name: 'Mihrimah Sultan Hamamı' }],
  openGraph: {
    title: 'Tarihi Mihrimah Sultan Hamamı',
    description: 'Mimar Sinan\'ın 16. yüzyılda inşa ettiği, Osmanlı mimarisinin inceliklerini taşıyan otantik bir mekanda arının.',
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
          crossOrigin=""
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin=""
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900&display=swap" 
          rel="stylesheet"
        />
        <link 
          rel="icon" 
          href="/favicon.svg" 
          type="image/svg+xml"
        />
        <link 
          rel="icon" 
          href="/favicon.ico" 
          type="image/x-icon"
        />
      </head>
      <body className={`${inter.className} bg-stone-50 text-gray-800`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
