import Image from 'next/image'

interface LogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function Logo({ 
  width = 200, 
  height = 60, 
  className = '', 
  priority = false 
}: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/logo/portrait-logo.png"
        alt="Mihrimah Sultan Hamamı - Mimar Sinan Eseri"
        width={width}
        height={height}
        priority={priority}
        className="object-contain"
        sizes="(max-width: 768px) 120px, 200px"
      />
    </div>
  )
}

export function FaviconLogo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/images/logo/favicon-32x32.png"
      alt="Mihrimah Sultan Hamamı"
      width={size}
      height={size}
      className="object-contain"
    />
  )
}
