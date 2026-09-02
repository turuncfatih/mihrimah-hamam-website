// Sitenin tek doğruluk kaynağı: iletişim, konum, saatler ve fiyatlar.
// Tasarımdaki (claude.design) değerlerle birebir aynıdır.

export const SITE_URL = 'https://mihrimahsultanhamami.com'

export const CONTACT = {
  whatsapp: '902125215459',
  phone: '+902125215459',
  phoneDisplay: '0212 521 54 59',
  email: 'info@mihrimahsultanhamami.com',
} as const

export const ADDRESS = {
  street: 'Fevzipaşa Cd. No:333 D:333',
  district: 'Karagümrük, 34091 Fatih / İstanbul',
  streetAddress: 'Fevzipaşa Cd. No:333 D:333, Karagümrük',
  locality: 'Fatih',
  region: 'İstanbul',
  postalCode: '34091',
  country: 'TR',
  lat: 41.0288889,
  lng: 28.9366667,
} as const

export const MAPS_LINK =
  'https://www.google.com/maps/place/Mihrimah+Sultan+Hamam%C4%B1/@41.0288889,28.9340918,17z/data=!4m6!3m5!1s0x14caba16da8adf63:0xc20b8c89289f0873!8m2!3d41.0288889!4d28.9366667'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Mihrimah+Sultan+Hamam%C4%B1,+Fevzipa%C5%9Fa+Cd.+No:333,+Karag%C3%BCmr%C3%BCk,+34091+Fatih/%C4%B0stanbul&ll=41.0288889,28.9366667&z=17&output=embed'

export const HOURS = {
  men: '07:00 — 23:00',
  women: '09:00 — 20:00',
} as const

/** Bölüme göre paket fiyatları: [Standart, Geleneksel, Mihrimah Sultan] */
export const PRICES = {
  men: [600, 900, 1600],
  women: [600, 1000, 1600],
} as const

export type Segment = keyof typeof PRICES

/** public/images/hamam-photos altındaki galeri fotoğrafları. */
export const PHOTOS: ReadonlyArray<{ file: string; alt: string }> = [
  { file: 'image00005', alt: 'iç mekân görünümü 1' },
  { file: 'image00008', alt: 'iç mekân görünümü 2' },
  { file: 'image00015', alt: 'iç mekân görünümü 3' },
  { file: 'image00016', alt: 'iç mekân görünümü 4' },
  { file: 'image00022', alt: 'iç mekân görünümü 5' },
  { file: 'image00023', alt: 'iç mekân görünümü 6' },
  { file: 'image00032', alt: 'iç mekân görünümü 7' },
  { file: 'image00039', alt: 'iç mekân görünümü 8' },
]

export const photoSrc = (i: number) =>
  `/images/hamam-photos/${PHOTOS[i].file}.jpeg`

export const HERO_IMAGE = '/images/hamam-photos/image00015.jpeg'
export const HISTORY_HERO_IMAGE = '/images/hamam-photos/image00016.jpeg'
export const ENTRANCE_IMAGE = '/images/about/giris.webp'
export const OG_IMAGE = '/images/hamam-photos/image00016.jpeg'

const WA_MESSAGES: Record<string, string> = {
  tr: 'Merhaba, hamam paketleri hakkında bilgi almak istiyorum.',
  en: 'Hello, I would like information about your hammam packages.',
  ar: 'مرحباً، أريد معلومات عن باقات الحمّام.',
  ru: 'Здравствуйте, хочу узнать о пакетах хаммама.',
  es: 'Hola, quisiera información sobre los paquetes del hammam.',
}

export function waLink(lang: string = 'tr') {
  const text = WA_MESSAGES[lang] || WA_MESSAGES.tr
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
}
