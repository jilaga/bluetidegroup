// components/schema/LocalBusinessSchema.tsx
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://bluetidegroup.com/#localbusiness',
    name: 'Bluetide Group',
    image: 'https://bluetidegroup.com/hero.webp',
    url: 'https://bluetidegroup.com',
    telephone: '+2347065382326',
    email: 'info@bluetidegroup.com',
    description: 'Expert marine services including underwater hull cleaning, diving, ROV inspection, and subsea positioning',
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
    knowsAbout: [
      'Underwater Hull Cleaning',
      'ROV Inspection',
      'Marine Diving Services',
      'Subsea Positioning',
      'Marine Equipment',
      'Offshore Services',
      'Underwater Maintenance',
      'Marine Safety',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+2347065382326',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  )
}