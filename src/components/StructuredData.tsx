const SITE_URL = 'https://mihrimahsultanhamami.com'

// Güncel paket fiyatları (TRY). Görünen fiyatlarla (PackagesSection) senkron tutulmalıdır.
const offers = [
  {
    name: 'Standart Hamam (Erkek)',
    description: 'Hamam kullanımı — geleneksel Türk hamamı deneyimi.',
    price: '600',
    audience: 'Erkek',
  },
  {
    name: 'Geleneksel Hamam Paketi (Erkek)',
    description: 'Geleneksel kese, köpük masajı ve hamam kullanımı.',
    price: '900',
    audience: 'Erkek',
  },
  {
    name: 'Mihrimah Sultan Paketi (Erkek)',
    description: 'Yağ masajı, geleneksel kese, köpük masajı ve hamam kullanımı.',
    price: '1600',
    audience: 'Erkek',
  },
  {
    name: 'Standart Hamam (Kadın)',
    description: 'Hamam kullanımı — geleneksel Türk hamamı deneyimi.',
    price: '600',
    audience: 'Kadın',
  },
  {
    name: 'Geleneksel Hamam Paketi (Kadın)',
    description: 'Geleneksel kese, köpük masajı ve hamam kullanımı.',
    price: '1000',
    audience: 'Kadın',
  },
  {
    name: 'Mihrimah Sultan Paketi (Kadın)',
    description: 'Kahve veya yağ masajı, geleneksel kese, köpük masajı, kil maskesi ve hamam kullanımı.',
    price: '1600',
    audience: 'Kadın',
  },
]

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['HealthAndBeautyBusiness', 'LocalBusiness', 'TouristAttraction'],
    '@id': `${SITE_URL}/#business`,
    name: 'Tarihi Mihrimah Sultan Hamamı',
    alternateName: ['Mihrimah Sultan Hamamı', 'Mihrimah Sultan Hamam', 'Mihrimah Sultan Bath'],
    description:
      "Mimar Sinan'ın 16. yüzyılda inşa ettiği, Edirnekapı Fatih'te yer alan otantik Osmanlı hamamı. Erkek ve kadın bölümleriyle geleneksel kese, köpük masajı ve masaj paketleri sunar.",
    url: SITE_URL,
    telephone: '+90-212-521-54-59',
    email: 'info@mihrimahsultanhamami.com',
    currenciesAccepted: 'TRY',
    priceRange: '600–1600 TRY',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fevzi Paşa Cd. No:33',
      addressLocality: 'Fatih',
      addressRegion: 'İstanbul',
      postalCode: '34083',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Edirnekapı / Fatih yaklaşık konum — Google İşletme profilindeki kesin konumla teyit edilmeli.
      latitude: '41.0294',
      longitude: '28.9395',
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Tarihi+Mihrimah+Sultan+Hamam%C4%B1',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    image: [
      `${SITE_URL}/images/gallery/gobektas.jpg`,
      `${SITE_URL}/images/gallery/te2.jpg`,
      `${SITE_URL}/images/gallery/gelin-hamami.jpg`,
    ],
    sameAs: [
      'https://www.instagram.com/mihrimahsultanhamam',
      'https://www.facebook.com/mihrimahsultanhamam',
    ],
    makesOffer: offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      price: offer.price,
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: offer.price,
        priceCurrency: 'TRY',
        valueAddedTaxIncluded: true,
      },
      itemOffered: {
        '@type': 'Service',
        name: offer.name,
        description: offer.description,
        serviceType: 'Hamam / Türk Hamamı',
        audience: {
          '@type': 'PeopleAudience',
          suggestedGender: offer.audience === 'Erkek' ? 'Male' : 'Female',
        },
      },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hamam Paketleri',
      itemListElement: offers.map((offer) => ({
        '@type': 'Offer',
        price: offer.price,
        priceCurrency: 'TRY',
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Ayşe K.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Mükemmel bir deneyim! Tarihi atmosfer ve profesyonel hizmet.',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
