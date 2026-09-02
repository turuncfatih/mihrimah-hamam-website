import { MetadataRoute } from 'next'
import { LANG_CODES } from '@/lib/i18n'
import { localePath } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Her dil sürümü ayrı adres olarak listelenir. Diller arası hreflang bağı
  // sayfaların <head>'indeki link etiketleriyle veriliyor (Next 14.0'ın sitemap
  // API'si xhtml:link üretmiyor; Google iki yöntemden birini yeterli sayar).
  const home: MetadataRoute.Sitemap = LANG_CODES.map((code) => ({
    url: `${SITE_URL}${localePath(code)}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: code === 'tr' ? 1 : 0.8,
  }))

  return [
    ...home,
    {
      url: `${SITE_URL}/mihrimah-sultan-tarihi`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
