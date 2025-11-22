// components/schema/FAQSchema.tsx
interface FAQItem {
  question: string
  answer: string
}

interface Props {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  )
}