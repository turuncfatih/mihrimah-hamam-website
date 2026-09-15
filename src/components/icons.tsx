export function PhoneIcon({ size = 16, stroke = 'currentColor' }: { size?: number; stroke?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={stroke}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.6 3.6h3l1.6 4.2-2.1 1.8a13.6 13.6 0 0 0 5.3 5.3l1.8-2.1 4.2 1.6v3a1.8 1.8 0 0 1-1.9 1.8A17.6 17.6 0 0 1 4.8 5.5a1.8 1.8 0 0 1 1.8-1.9Z" />
    </svg>
  )
}

export function GoogleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.27-4.74 3.27-8.09Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.76c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.29 9.14 5.38 12 5.38Z" />
    </svg>
  )
}

export function Stars({ size = 15 }: { size?: number }) {
  return (
    <span style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" width={size} height={size} fill="#FBBC04" aria-hidden="true">
          <path d="M12 2l2.9 6.26 6.85.77-5.1 4.62 1.42 6.72L12 16.9l-6.07 3.47 1.42-6.72-5.1-4.62 6.85-.77z" />
        </svg>
      ))}
    </span>
  )
}

export function PinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path fill="#EA4335" d="M12 2a7.5 7.5 0 0 0-7.5 7.5C4.5 15.5 12 22 12 22s7.5-6.5 7.5-12.5A7.5 7.5 0 0 0 12 2Z" />
      <circle cx="12" cy="9.5" r="2.9" fill="#FDFBF7" />
    </svg>
  )
}
