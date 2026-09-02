import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { HomePage } from '@/components/HomePage'
import { LANG_CODES } from '@/lib/i18n'
import { homeMetadata, isLang } from '@/lib/seo'

/** Türkçe kökte (/) yayınlandığı için burada yalnızca diğer diller üretilir. */
export function generateStaticParams() {
  return LANG_CODES.filter((code) => code !== 'tr').map((lang) => ({ lang }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang) || params.lang === 'tr') return {}
  return homeMetadata(params.lang)
}

export default function Page({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang) || params.lang === 'tr') notFound()
  return <HomePage />
}
