import { ADDRESS, CONTACT, SCHEMA_IMAGE, SITE_URL } from '@/lib/site'
import { faqsTr } from '@/lib/content'

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: ADDRESS.streetAddress,
  addressLocality: ADDRESS.locality,
  addressRegion: ADDRESS.region,
  postalCode: ADDRESS.postalCode,
  addressCountry: ADDRESS.country,
}

const geo = {
  '@type': 'GeoCoordinates',
  latitude: ADDRESS.lat,
  longitude: ADDRESS.lng,
}

const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['HealthAndBeautyBusiness', 'TouristAttraction'],
  name: 'Tarihi Mihrimah Sultan Hamamı',
  description:
    "Mimar Sinan'ın 16. yüzyılda inşa ettiği Edirnekapı'daki otantik Osmanlı hamamı.",
  url: SITE_URL,
  image: `${SITE_URL}${SCHEMA_IMAGE}`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  priceRange: '600–1600 TRY',
  address: postalAddress,
  geo,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: allDays,
      opens: '07:00',
      closes: '23:00',
      name: 'Erkekler Bölümü',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: allDays,
      opens: '09:00',
      closes: '20:00',
      name: 'Kadınlar Bölümü',
    },
  ],
  makesOffer: [
    { '@type': 'Offer', name: 'Standart Hamam', price: '600', priceCurrency: 'TRY' },
    { '@type': 'Offer', name: 'Geleneksel Hamam Paketi', price: '900', priceCurrency: 'TRY' },
    { '@type': 'Offer', name: 'Mihrimah Sultan Paketi', price: '1600', priceCurrency: 'TRY' },
  ],
  mainEntity: faqsTr.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  )
}
