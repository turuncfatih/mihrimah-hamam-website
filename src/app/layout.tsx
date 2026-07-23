import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { I18nProvider } from '@/contexts/I18nContext'
import { StructuredData } from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://mihrimahsultanhamami.com'
const SITE_TITLE = 'Tarihi Mihrimah Sultan Hamamı | Edirnekapı, Fatih İstanbul'
const SITE_DESCRIPTION =
  "Mimar Sinan'ın 16. yüzyılda inşa ettiği Edirnekapı Fatih'teki otantik Osmanlı hamamı. Erkek ve kadın bölümleri, geleneksel kese, köpük masajı ve masaj paketleri. Güncel fiyatlar: Standart 600 TL, Geleneksel Paket 900–1000 TL, Mihrimah Sultan Paketi 1600 TL."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'mihrimah sultan hamamı',
    'mihrimah sultan hamamı fiyatları',
    'edirnekapı hamam',
    'fatih hamam',
    'istanbul hamam',
    'tarihi hamam',
    'mimar sinan hamam',
    'osmanlı hamamı',
    'türk hamamı',
    'kadınlar hamamı istanbul',
    'erkekler hamamı istanbul',
    'kese köpük masajı',
  ],
  authors: [{ name: 'Tarihi Mihrimah Sultan Hamamı' }],
  applicationName: 'Tarihi Mihrimah Sultan Hamamı',
  category: 'Health & Beauty',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Tarihi Mihrimah Sultan Hamamı',
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US', 'es_ES', 'ar_AR'],
    images: [
      {
        url: '/images/gallery/gobektas.jpg',
        width: 1200,
        height: 630,
        alt: 'Tarihi Mihrimah Sultan Hamamı göbek taşı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/gallery/gobektas.jpg'],
  },
  formatDetection: {
    telephone: true,
    address: true,
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
        <StructuredData />
      </head>
      <body className={`${inter.className} bg-stone-50 text-gray-800`}>
        <Script 
          src="https://player.vimeo.com/api/player.js" 
          strategy="beforeInteractive"
        />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
