import { Jost, Noto_Kufi_Arabic } from 'next/font/google'

export const jost = Jost({
  subsets: ['latin', 'latin-ext'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const kufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500'],
  variable: '--font-kufi',
  display: 'swap',
})

export const fontVars = `${jost.variable} ${kufi.variable}`
