export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mihrimah Sultan Hamamı",
    "description": "Mimar Sinan'ın 16. yüzyılda inşa ettiği, Osmanlı mimarisinin inceliklerini taşıyan otantik hamam deneyimi.",
    "url": "https://mihrimahsultanhamami.com",
    "telephone": "+90-212-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mihrimah Sultan Mahallesi",
      "addressLocality": "Fatih",
      "addressRegion": "İstanbul",
      "postalCode": "34000",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "openingHours": "Mo-Su 08:00-22:00",
    "priceRange": "$$",
    "image": [
      "https://mihrimahsultanhamami.com/images/hero-slider/mihrimah-sultan-hamam-main.jpg",
      "https://mihrimahsultanhamami.com/images/gallery/gobektas.jpg",
      "https://mihrimahsultanhamami.com/images/gallery/te2.jpg"
    ],
    "sameAs": [
      "https://www.instagram.com/mihrimahsultanhamam",
      "https://www.facebook.com/mihrimahsultanhamam"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hamam Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Geleneksel Hamam Paketi",
            "description": "Geleneksel Osmanlı hamam deneyimi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lüks Hamam Paketi",
            "description": "Premium hamam deneyimi"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ayşe K."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Mükemmel bir deneyim! Tarihi atmosfer ve profesyonel hizmet."
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
