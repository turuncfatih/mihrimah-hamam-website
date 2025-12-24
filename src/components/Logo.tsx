import Image from 'next/image'

interface LogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function Logo({ 
  width = 300, 
  height = 120, 
  className = '', 
  priority = false 
}: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/logo/logos/logos.png"
        alt="Mihrimah Sultan Hamamı - Mimar Sinan Eseri"
        width={width}
        height={height}
        priority={priority}
        className="object-cover w-full h-full"
        sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
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
