// components/OptimizedImage.tsx
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fill?: boolean
  sizes?: string
}

// Blue blur placeholder that matches Bluetide brand colors
const createBlueBlurDataURL = () => {
  // Create a 16x16 blue gradient that matches the hero background
  const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0050AA;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#0040AA;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#003080;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="16" height="16" fill="url(#blueGradient)" />
    </svg>
  `
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  fill = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      quality={90} // Increased quality for better visuals
      placeholder="blur"
      blurDataURL={createBlueBlurDataURL()}
      sizes={sizes}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      // Enhanced Next.js 14 optimizations
      unoptimized={false} // Use Next.js optimization
      style={{
        objectFit: fill ? 'cover' : undefined,
        objectPosition: 'center',
      }}
    />
  )
}