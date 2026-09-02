'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

/**
 * Görünüm alanına girince içeriği yumuşakça belirtir.
 * IntersectionObserver yoksa içerik doğrudan görünür kalır.
 */
export function Reveal({
  children,
  style,
  delay = 0,
}: {
  children: ReactNode
  style?: CSSProperties
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={visible ? 'reveal is-visible' : 'reveal'}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  )
}
