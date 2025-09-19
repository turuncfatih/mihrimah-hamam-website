import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/contexts/I18nContext'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Tarihi Mihrimah Sultan Hamamı | Mimar Sinan Eseri | İstanbul',
    template: '%s | Mihrimah Sultan Hamamı'
  },
  description: 'Mimar Sinan\'ın 16. yüzyılda inşa ettiği, Osmanlı mimarisinin inceliklerini taşıyan otantik Mihrimah Sultan Hamamı\'nda geleneksel hamam deneyimi yaşayın. İstanbul\'un tarihi yarımadasında eşsiz bir atmosfer.',
  keywords: [
    'hamam',
    'mihrimah sultan hamamı',
    'istanbul hamam',
    'mimar sinan hamamı',
    'osmanlı hamamı',
    'geleneksel hamam',
    'tarihi hamam',
    'istanbul hamam deneyimi',
    'sultanahmet hamam',
    'fatih hamam',
    'türk hamamı',
    'hamam kültürü',
    'istanbul turizm',
    'tarihi yarımada hamam'
  ],
  authors: [{ name: 'Mihrimah Sultan Hamamı', url: 'https://mihrimahsultanhamami.com' }],
  creator: 'Mihrimah Sultan Hamamı',
  publisher: 'Mihrimah Sultan Hamamı',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mihrimahsultanhamami.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://mihrimahsultanhamami.com',
    siteName: 'Mihrimah Sultan Hamamı',
    title: 'Tarihi Mihrimah Sultan Hamamı | Mimar Sinan Eseri',
    description: 'Mimar Sinan\'ın 16. yüzyılda inşa ettiği, Osmanlı mimarisinin inceliklerini taşıyan otantik Mihrimah Sultan Hamamı\'nda geleneksel hamam deneyimi yaşayın.',
    images: [
      {
        url: '/images/hero-slider/mihrimah-sultan-hamam-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Mihrimah Sultan Hamamı - Mimar Sinan Eseri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarihi Mihrimah Sultan Hamamı | Mimar Sinan Eseri',
    description: 'Mimar Sinan\'ın 16. yüzyılda inşa ettiği, Osmanlı mimarisinin inceliklerini taşıyan otantik hamam deneyimi.',
    images: ['/images/hero-slider/mihrimah-sultan-hamam-main.jpg'],
    creator: '@mihrimahsultanhamam',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'preconnect': 'https://fonts.googleapis.com',
    'preconnect-gstatic': 'https://fonts.gstatic.com',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#8B4513' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-stone-50 text-gray-800`}>
        <GoogleAnalytics />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
