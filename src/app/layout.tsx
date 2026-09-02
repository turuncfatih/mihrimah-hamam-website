import type { Metadata } from 'next'
import { Jost, Noto_Kufi_Arabic } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/contexts/I18nContext'
import { OG_IMAGE, SITE_URL } from '@/lib/site'

const jost = Jost({
  subsets: ['latin', 'latin-ext'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

const kufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500'],
  variable: '--font-kufi',
  display: 'swap',
})

const SITE_TITLE =
  'Tarihi Mihrimah Sultan Hamamı | Mimar Sinan Eseri — Edirnekapı, Fatih İstanbul'
const SITE_DESCRIPTION =
  "Mimar Sinan'ın 16. yüzyılda inşa ettiği Edirnekapı'daki otantik Osmanlı hamamı. Kadın ve erkek bölümleri, geleneksel kese, köpük masajı, yağ masajı. Fiyatlar: 600 TL'den başlar. Günlük 07:00–23:00."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'mihrimah sultan hamamı',
    'edirnekapı hamam',
    'fatih hamam',
    'istanbul tarihi hamam',
    'mimar sinan hamamı',
    'türk hamamı',
    'turkish bath istanbul',
    'hammam istanbul',
    'kese köpük masajı',
    'kadınlar hamamı istanbul',
  ],
  authors: [{ name: 'Tarihi Mihrimah Sultan Hamamı' }],
  applicationName: 'Tarihi Mihrimah Sultan Hamamı',
  category: 'Health & Beauty',
  alternates: { canonical: '/' },
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
    alternateLocale: ['en_US', 'ar_AR', 'ru_RU', 'es_ES'],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Tarihi Mihrimah Sultan Hamamı iç mekân',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  formatDetection: { telephone: true, address: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" dir="ltr" className={`${jost.variable} ${kufi.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8c6a3f" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f7f4ef" />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
