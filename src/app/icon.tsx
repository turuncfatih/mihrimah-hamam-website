import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/** Tarayıcı sekmesi ikonu — başlıktaki MS monogramının küçük hâli. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#241F19',
          color: '#DEC9A5',
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: '0.02em',
          borderRadius: '50%',
        }}
      >
        MS
      </div>
    ),
    { ...size }
  )
}
