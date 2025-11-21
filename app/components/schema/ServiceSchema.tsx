// components/schema/ServiceSchema.tsx
interface Props {
  serviceName: string
  description: string
  url: string
  image?: string
}

export function ServiceSchema({ serviceName, description, url, image }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    url: url,
    image: image || 'https://bluetidegroup.com/hero.webp',
    provider: {
      '@type': 'Organization',
      name: 'Bluetide Group',
      url: 'https://bluetidegroup.com',
      telephone: '+2347065382326',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressRegion: 'Lagos State',
        addressCountry: 'NG',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    serviceType: 'Marine Services',
    category: 'Marine and Offshore Services',
  }

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
