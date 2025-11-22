// components/schema/ArticleSchema.tsx
interface Props {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  url: string
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  url
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'Bluetide Group',
      url: 'https://bluetidegroup.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bluetide Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bluetidegroup.com/logo 6.svg',
      },
      url: 'https://bluetidegroup.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  )
}
