// app/not-found.tsx
import type { Metadata } from 'next';

import Link from 'next/link';

import { OptimizedImage } from './components/OptimizedImage';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Bluetide Group',
  description: 'Sorry, the page you are looking for could not be found. Browse our marine services or return to the homepage.',
  robots: {
    index: false,
    follow: true,
  },
}

// Structured data for 404 page
function NotFoundSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '404 Error Page',
    description: 'Page not found - Bluetide Group Marine Services',
    url: 'https://bluetidegroup.com/404',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Bluetide Group',
      url: 'https://bluetidegroup.com'
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://bluetidegroup.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '404 Error',
          item: 'https://bluetidegroup.com/404'
        }
      ]
    }
  }

  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {JSON.stringify(schema)}
    </script>
  )
}

export default function NotFound() {
  // Popular pages for navigation
  const popularPages = [
    { href: '/Services/1', label: 'ROV Inspection Services' },
    { href: '/Services/2', label: 'Air Diving Services' },
    { href: '/Services/3', label: 'Hull Cleaning Services' },
    { href: '/about', label: 'About Bluetide Group' },
    { href: '/gallery', label: 'Our Work Gallery' },
    { href: '/stories', label: 'Project Stories' }
  ]

  return (
    <>
      <NotFoundSchema />

      <div className="min-h-screen flex items-center justify-center bg-primary-blue px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Error illustration */}
          <div className="mb-8">
            <OptimizedImage
              src="/hero.webp"
              alt="Bluetide Group Marine Services"
              width={200}
              height={120}
              className="mx-auto rounded-lg opacity-50"
              priority={false}
            />
          </div>

          <h1 className="text-6xl font-bold text-gray mb-4 font-clash">404</h1>
          <h2 className="text-2xl font-semibold text-gray mb-4 font-clash">Page Not Found</h2>
          <p className="text-foundation-white-white-900 mb-8 max-w-md mx-auto text-lg">
            The page you&apos;re looking for might have been moved, deleted, or the URL was typed incorrectly.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-block bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors text-lg"
            >
              Return Home
            </Link>
            <Link
              href="/Services/1"
              className="inline-block border-2 border-accent text-accent px-8 py-4 rounded-full font-medium hover:bg-accent hover:text-white transition-colors text-lg"
            >
              View Our Services
            </Link>
          </div>

          {/* Popular pages */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray mb-6 text-center font-clash">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="block p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-foundation-white-white-900 hover:text-white"
                >
                  <span className="text-sm font-medium">{page.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact information */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-foundation-white-white-900 mb-4">
              Need help finding something specific?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/+2347065382326"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white font-medium transition-colors"
              >
                Contact us on WhatsApp
              </a>
              <span className="hidden sm:block text-white/40">|</span>
              <a
                href="tel:+2347065382326"
                className="text-accent hover:text-white font-medium transition-colors"
              >
                Call +234 706 538 2326
              </a>
            </div>
          </div>

          {/* SEO footer */}
          <div className="mt-8 text-xs text-white/60">
            <p>Bluetide Group - Leading Marine Services in Nigeria</p>
            <p>ROV Inspection • Hull Cleaning • Diving Services • Subsea Positioning</p>
          </div>
        </div>
      </div>
    </>
  )
}