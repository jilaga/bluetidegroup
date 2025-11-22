// components/schema/OrganizationSchema.tsx
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bluetide Group',
    alternateName: 'Bluetide',
    url: 'https://bluetidegroup.com',
    logo: 'https://bluetidegroup.com/logo 6.svg',
    description: 'Leading marine services company specializing in underwater hull cleaning, diving services, ROV inspection, and subsea positioning in Nigeria',
    email: 'info@bluetidegroup.com',
    telephone: '+2347065382326',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos State',
      addressCountry: 'NG',
    },
    serviceArea: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    sameAs: [
      'https://wa.me/+2347065382326',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marine Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ROV Inspection Services',
            description: 'Professional ROV inspection and maintenance services for underwater infrastructure',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Air Diving Services',
            description: 'Professional air diving services for salvage operations, jetty inspections, and underwater maintenance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Subsea Survey and Positioning',
            description: 'Expert subsea positioning and survey solutions for underwater operations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hull Cleaning Services',
            description: 'Professional underwater hull cleaning services for vessels to improve fuel efficiency',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IMCA ROV and Diving System Audits',
            description: '3rd party IMCA ROV and diving system audits for compliance and safety',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical Instrumentation',
            description: 'Marine electrical instrumentation installation, calibration, and maintenance services',
          },
        },
      ],
    },
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  )
}