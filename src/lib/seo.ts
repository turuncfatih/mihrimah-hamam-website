import type { Metadata } from 'next'
import { LANG_CODES, type Lang } from './i18n'
import { OG_IMAGE, SITE_URL } from './site'

/** Türkçe ön ek almaz; diğer diller /en, /ar, /ru, /es altında yayınlanır. */
export const localePath = (lang: Lang) => (lang === 'tr' ? '/' : `/${lang}`)

export const isLang = (value: string): value is Lang =>
  (LANG_CODES as readonly string[]).includes(value)

export const dirFor = (lang: Lang): 'ltr' | 'rtl' => (lang === 'ar' ? 'rtl' : 'ltr')

type SeoStrings = {
  title: string
  description: string
  keywords: string[]
  ogLocale: string
  imageAlt: string
}

export const SEO: Record<Lang, SeoStrings> = {
  tr: {
    title: 'Tarihi Mihrimah Sultan Hamamı | Mimar Sinan Eseri — Edirnekapı, Fatih İstanbul',
    description:
      "Mimar Sinan'ın 16. yüzyılda inşa ettiği Edirnekapı'daki otantik Osmanlı hamamı. Kadın ve erkek bölümleri, geleneksel kese, köpük masajı, yağ masajı. Fiyatlar 600 TL'den başlar. Her gün 07:00–23:00.",
    keywords: [
      'mihrimah sultan hamamı',
      'edirnekapı hamam',
      'fatih hamam',
      'istanbul tarihi hamam',
      'mimar sinan hamamı',
      'türk hamamı',
      'kese köpük masajı',
      'kadınlar hamamı istanbul',
    ],
    ogLocale: 'tr_TR',
    imageAlt: 'Tarihi Mihrimah Sultan Hamamı iç mekân',
  },
  en: {
    title: 'Mihrimah Sultan Hammam | 16th-Century Turkish Bath by Mimar Sinan, Istanbul',
    description:
      "An authentic Ottoman bathhouse built in the 1560s by the imperial architect Sinan, in Edirnekapı, Istanbul. Separate men's and women's sections, traditional kese scrub, foam and oil massage. From 600 TRY, open daily.",
    keywords: [
      'turkish bath istanbul',
      'hammam istanbul',
      'historic turkish bath',
      'mimar sinan hammam',
      'ottoman bathhouse',
      'kese scrub foam massage',
      'edirnekapi hammam',
      'fatih istanbul hammam',
    ],
    ogLocale: 'en_US',
    imageAlt: 'Interior of the historic Mihrimah Sultan Hammam',
  },
  ar: {
    title: 'حمّام مهرماه سلطان التاريخي | من أعمال معمار سنان — أدرنة كابي، إستنبول',
    description:
      'حمّام عثماني أصيل بناه المعماري سنان في ستينيات القرن السادس عشر في أدرنة كابي بإستنبول. قسمان منفصلان للرجال والنساء، كيس تقليدي ومساج الرغوة والزيت. تبدأ الأسعار من ٦٠٠ ليرة، مفتوح يومياً.',
    keywords: [
      'حمام تركي إستنبول',
      'حمام تاريخي',
      'معمار سنان',
      'حمام عثماني',
      'مهرماه سلطان',
      'كيس ورغوة',
      'أدرنة كابي',
      'الفاتح إستنبول',
    ],
    ogLocale: 'ar_AR',
    imageAlt: 'المكان الداخلي لحمّام مهرماه سلطان التاريخي',
  },
  ru: {
    title: 'Исторический хаммам Михримах Султан | Творение Мимара Синана, Стамбул',
    description:
      'Подлинный османский хаммам, построенный архитектором Синаном в 1560-х годах в Эдирнекапы, Стамбул. Раздельные мужское и женское отделения, традиционный пилинг кесе, пенный и масляный массаж. От 600 TRY, открыт ежедневно.',
    keywords: [
      'хаммам стамбул',
      'турецкая баня стамбул',
      'исторический хаммам',
      'мимар синан',
      'османский хаммам',
      'пилинг кесе',
      'эдирнекапы',
      'фатих стамбул',
    ],
    ogLocale: 'ru_RU',
    imageAlt: 'Интерьер исторического хаммама Михримах Султан',
  },
  es: {
    title: 'Hammam histórico Mihrimah Sultan | Obra de Mimar Sinan — Estambul',
    description:
      'Baño otomano auténtico construido en la década de 1560 por el arquitecto Sinan, en Edirnekapı, Estambul. Secciones separadas de hombres y mujeres, exfoliación kese tradicional, masaje de espuma y aceite. Desde 600 TRY, abierto todos los días.',
    keywords: [
      'hammam estambul',
      'baño turco estambul',
      'hammam histórico',
      'mimar sinan',
      'baño otomano',
      'exfoliación kese',
      'edirnekapi',
      'fatih estambul',
    ],
    ogLocale: 'es_ES',
    imageAlt: 'Interior del histórico hammam Mihrimah Sultan',
  },
}

/** Tüm dil sürümlerini ve x-default'u işaret eden hreflang haritası. */
export function languageAlternates(): Record<string, string> {
  const map: Record<string, string> = {}
  for (const code of LANG_CODES) map[code] = localePath(code)
  map['x-default'] = '/'
  return map
}

export function homeMetadata(lang: Lang): Metadata {
  const seo = SEO[lang]
  const path = localePath(lang)

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: 'Tarihi Mihrimah Sultan Hamamı' }],
    applicationName: 'Tarihi Mihrimah Sultan Hamamı',
    category: 'Health & Beauty',
    alternates: {
      canonical: path,
      languages: languageAlternates(),
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
    // Doğrulama kodu ortam değişkeninden gelir; yoksa etiket basılmaz.
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: path,
      siteName: 'Tarihi Mihrimah Sultan Hamamı',
      type: 'website',
      locale: seo.ogLocale,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: seo.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [OG_IMAGE],
    },
    formatDetection: { telephone: true, address: true },
  }
}
