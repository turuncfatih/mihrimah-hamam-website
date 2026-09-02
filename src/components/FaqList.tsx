'use client'

import { useState } from 'react'
import type { Faq } from '@/lib/content'

/**
 * Açılır-kapanır soru listesi. Tasarımdaki gibi birden fazla soru
 * aynı anda açık kalabilir.
 */
export function FaqList({ items, compact = false }: { items: Faq[]; compact?: boolean }) {
  const [openSet, setOpenSet] = useState<ReadonlySet<number>>(() => new Set())

  return (
    <>
      {items.map((faq, i) => {
        const isOpen = openSet.has(i)
        return (
          <details
            key={i}
            data-faq="1"
            onToggle={(e) => {
              const isNowOpen = e.currentTarget.open
              setOpenSet((cur) => {
                const next = new Set(cur)
                if (isNowOpen) next.add(i)
                else next.delete(i)
                return next
              })
            }}
            style={{
              borderRadius: 16,
              padding: compact ? '20px 24px' : '22px 26px',
              border: `1px solid ${isOpen ? 'var(--gold-line)' : 'var(--line)'}`,
              background: isOpen ? 'var(--card)' : 'var(--card-soft)',
            }}
          >
            <summary
              style={{
                cursor: 'pointer',
                listStyle: 'none',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: compact ? 18 : 20,
                fontSize: compact ? 16.5 : 17,
                fontWeight: 400,
                lineHeight: 1.45,
                color: 'var(--ink)',
              }}
            >
              <span>{faq.q}</span>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 200,
                  lineHeight: 1,
                  flexShrink: 0,
                  color: isOpen ? 'var(--gold)' : 'var(--gold-soft)',
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                marginTop: compact ? 13 : 14,
                fontSize: 15.5,
                fontWeight: 300,
                lineHeight: 1.72,
                color: 'var(--body-soft)',
                maxWidth: '44em',
              }}
            >
              {faq.a}
            </p>
          </details>
        )
      })}
    </>
  )
}
