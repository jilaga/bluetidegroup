// components/schema/LocalBusinessSchema.tsx
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.bluetidegroup.com/#localbusiness',
    name: 'Bluetide Group',
    image: 'https://www.bluetidegroup.com/hero.webp',
    url: 'https://www.bluetidegroup.com',
    telephone: '+2347065382326',
    email: 'info@bluetidegroup.com',
    description: 'Expert marine services including underwater hull cleaning, diving, ROV inspection, and subsea positioning',
    foundingDate: '2013',
    numberOfEmployees: '20-70',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot 9 Flat 5, Oba Elegusi Road',
      addressLocality: 'Ikoyi, Lagos',
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