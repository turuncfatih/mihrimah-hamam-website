import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/** iOS ana ekran ikonu — köşeleri sistem tarafından yuvarlatıldığı için kare. */
export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid #C2A87F',
            borderRadius: '50%',
            color: '#DEC9A5',
            fontSize: 54,
            fontWeight: 400,
            letterSpacing: '0.04em',
          }}
        >
          MS
        </div>
      </div>
    ),
    { ...size }
  )
}
