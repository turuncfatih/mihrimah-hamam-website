export interface SlideItem {
  id: string
  title: string
  subtitle: string
  image: string
  fallbackImage: string
  alt: string
}

export interface SliderProps {
  slides: SlideItem[]
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
}
