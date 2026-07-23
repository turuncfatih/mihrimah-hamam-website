import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mihrimahsultanhamami.com'
  
  // Tek sayfa (single-page) sitedir; bölümler anasayfa içinde anchor olarak yer alır.
  // Var olmayan alt sayfalara link vermek 404 üretip SEO'ya zarar verdiğinden yalnızca anasayfa listelenir.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
