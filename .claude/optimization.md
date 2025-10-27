# Technical SEO Implementation Guide for Next.js
## Expert Code Standards & Best Practices

*Based on 10+ years of SEO success + Next.js performance optimization*

**Tech Stack:** Next.js 14+ (App Router & Pages Router examples included)

---

## 1. PROJECT SETUP & NEXT.CONFIG.JS

### Priority: CRITICAL | Timeline: Day 1

### Optimized next.config.js:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    domains: ['yoursite.com', 'cdn.yoursite.com'], // Add your image domains
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Internationalization (if needed)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  
  // Trailing slash consistency (choose one)
  trailingSlash: true, // or false - be consistent
  
  // Redirects for SEO
  async redirects() {
    return [
      // Force www (or non-www)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'yoursite.com',
          },
        ],
        destination: 'https://www.yoursite.com/:path*',
        permanent: true,
      },
      // Old URL redirects
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/articles/:slug',
        permanent: true,
      },
    ]
  },
  
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // Compression (Next.js does this by default, but ensure it's on)
  compress: true,
  
  // Power optimizations
  swcMinify: true, // Use SWC for faster minification
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    optimizePackageImports: ['@/components', 'lucide-react'],
  },
  
  // Production source maps (disable for security)
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
```

---

## 2. ROBOTS.TXT & SITEMAP

### Priority: CRITICAL | Timeline: Day 1

### Static robots.txt (public/robots.txt):

```txt
# public/robots.txt

# Allow all crawlers
User-agent: *
Allow: /

# Disallow admin and api routes
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /checkout/
Disallow: /cart/
Disallow: /thank-you/

# Allow Next.js static assets
Allow: /_next/static/
Allow: /_next/image

# Sitemap
Sitemap: https://yoursite.com/sitemap.xml
Sitemap: https://yoursite.com/sitemap-0.xml
```

### Dynamic Sitemap Generation (app/sitemap.ts - App Router):

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yoursite.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]
  
  // Dynamic blog posts
  const posts = await getBlogPosts() // Your data fetching function
  const postPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  
  // Dynamic service pages
  const services = await getServices() // Your data fetching function
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [...staticPages, ...postPages, ...servicePages]
}

// Helper functions (example)
async function getBlogPosts() {
  // Fetch from your CMS, database, or files
  // Return array of { slug, updatedAt }
  return [
    { slug: 'seo-tips-2025', updatedAt: '2025-10-15' },
    { slug: 'nextjs-performance', updatedAt: '2025-10-10' },
  ]
}

async function getServices() {
  return [
    { slug: 'seo-services', updatedAt: '2025-09-20' },
    { slug: 'web-development', updatedAt: '2025-09-15' },
  ]
}
```

### Pages Router Alternative (pages/api/sitemap.xml.ts):

```typescript
// pages/api/sitemap.xml.ts
import { NextApiRequest, NextApiResponse } from 'next'

function generateSiteMap(posts: any[], services: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Static pages -->
     <url>
       <loc>https://yoursite.com</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://yoursite.com/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://yoursite.com/services</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     
     <!-- Dynamic blog posts -->
     ${posts
       .map(({ slug, updatedAt }) => {
         return `
       <url>
           <loc>${`https://yoursite.com/blog/${slug}`}</loc>
           <lastmod>${new Date(updatedAt).toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.6</priority>
       </url>
     `
       })
       .join('')}
     
     <!-- Dynamic service pages -->
     ${services
       .map(({ slug, updatedAt }) => {
         return `
       <url>
           <loc>${`https://yoursite.com/services/${slug}`}</loc>
           <lastmod>${new Date(updatedAt).toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.8</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Fetch your data
  const posts = await getBlogPosts()
  const services = await getServices()
  
  const sitemap = generateSiteMap(posts, services)
  
  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(sitemap)
  res.end()
}

// Helper functions
async function getBlogPosts() {
  // Your data fetching logic
  return []
}

async function getServices() {
  // Your data fetching logic
  return []
}
```

---

## 3. METADATA & SEO TAGS (APP ROUTER)

### Priority: CRITICAL | Timeline: Day 2-5

### Root Layout Metadata (app/layout.tsx):

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Default metadata for all pages (can be overridden)
export const metadata: Metadata = {
  metadataBase: new URL('https://yoursite.com'),
  title: {
    default: 'Nexprove Limited - Expert SEO & Digital Marketing Services in Lagos',
    template: '%s | Nexprove Limited', // Page title | Brand
  },
  description: 'Leading digital marketing and SEO agency in Lagos, Nigeria. Proven strategies to rank #1 on Google. Free consultation. ⭐ Rated 4.8/5 by 150+ clients.',
  keywords: ['SEO services Lagos', 'digital marketing Nigeria', 'web development Lagos', 'Google ranking services'],
  authors: [{ name: 'Nexprove Limited' }],
  creator: 'Nexprove Limited',
  publisher: 'Nexprove Limited',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoursite.com',
    siteName: 'Nexprove Limited',
    title: 'Nexprove Limited - Expert SEO & Digital Marketing Services',
    description: 'Leading digital marketing and SEO agency in Lagos, Nigeria. Proven strategies to rank #1 on Google.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexprove Limited - Digital Marketing Agency',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Nexprove Limited - Expert SEO & Digital Marketing Services',
    description: 'Leading digital marketing and SEO agency in Lagos, Nigeria.',
    creator: '@nexprove',
    images: ['/images/twitter-card.jpg'],
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Other
  category: 'Digital Marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

### Page-Specific Metadata (app/services/seo/page.tsx):

```typescript
// app/services/seo/page.tsx
import { Metadata } from 'next'

// Static metadata
export const metadata: Metadata = {
  title: 'SEO Services Lagos - Rank #1 on Google',
  description: 'Professional SEO services in Lagos, Nigeria. Guaranteed first page rankings. Technical SEO, local SEO, and content optimization. Free audit! ✓ 10+ years experience.',
  keywords: ['SEO services Lagos', 'search engine optimization Nigeria', 'Google ranking Lagos', 'local SEO'],
  
  openGraph: {
    title: 'SEO Services Lagos - Rank #1 on Google | Nexprove',
    description: 'Professional SEO services in Lagos, Nigeria. Guaranteed first page rankings.',
    url: 'https://yoursite.com/services/seo',
    images: [
      {
        url: '/images/seo-services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Services in Lagos Nigeria',
      },
    ],
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services Lagos - Rank #1 on Google',
    description: 'Professional SEO services in Lagos, Nigeria. Guaranteed first page rankings.',
    images: ['/images/seo-services-twitter.jpg'],
  },
  
  alternates: {
    canonical: 'https://yoursite.com/services/seo',
  },
}

export default function SEOServicesPage() {
  return (
    <div>
      {/* Your page content */}
    </div>
  )
}
```

### Dynamic Metadata for Blog Posts:

```typescript
// app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    
    authors: [{ name: post.author.name }],
    
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      url: `https://yoursite.com/blog/${post.slug}`,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
    
    alternates: {
      canonical: `https://yoursite.com/blog/${post.slug}`,
    },
  }
}

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

// Helper functions
async function getPostBySlug(slug: string) {
  // Fetch from CMS or database
  return {
    slug,
    title: '10 SEO Tips for 2025',
    excerpt: 'Learn the latest SEO strategies...',
    content: '<p>Content here...</p>',
    author: { name: 'John Doe' },
    publishedAt: '2025-10-15',
    updatedAt: '2025-10-19',
    featuredImage: '/images/seo-tips-2025.jpg',
    keywords: ['SEO', 'Google ranking', 'SEO tips 2025'],
  }
}

async function getAllPosts() {
  // Fetch all posts
  return []
}
```

---

## 4. METADATA & SEO TAGS (PAGES ROUTER)

### Priority: CRITICAL | Timeline: Day 2-5

### Using next-seo Package (Recommended):

```bash
npm install next-seo
```

```typescript
// pages/_app.tsx
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle="Nexprove Limited - Expert SEO & Digital Marketing"
        titleTemplate="%s | Nexprove Limited"
        description="Leading digital marketing and SEO agency in Lagos, Nigeria. Proven strategies to rank #1 on Google."
        canonical="https://yoursite.com"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://yoursite.com',
          siteName: 'Nexprove Limited',
          images: [
            {
              url: 'https://yoursite.com/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Nexprove Limited',
            },
          ],
        }}
        twitter={{
          handle: '@nexprove',
          site: '@nexprove',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'SEO services Lagos, digital marketing Nigeria',
          },
          {
            name: 'author',
            content: 'Nexprove Limited',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}
```

```typescript
// pages/services/seo.tsx
import { NextSeo, BreadcrumbJsonLd, LocalBusinessJsonLd } from 'next-seo'

export default function SEOServicesPage() {
  return (
    <>
      <NextSeo
        title="SEO Services Lagos - Rank #1 on Google"
        description="Professional SEO services in Lagos, Nigeria. Guaranteed first page rankings. Free audit!"
        canonical="https://yoursite.com/services/seo"
        openGraph={{
          url: 'https://yoursite.com/services/seo',
          title: 'SEO Services Lagos - Rank #1 on Google',
          description: 'Professional SEO services in Lagos, Nigeria.',
          images: [
            {
              url: 'https://yoursite.com/images/seo-services.jpg',
              width: 1200,
              height: 630,
              alt: 'SEO Services',
            },
          ],
        }}
      />
      
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: 'https://yoursite.com',
          },
          {
            position: 2,
            name: 'Services',
            item: 'https://yoursite.com/services',
          },
          {
            position: 3,
            name: 'SEO Services',
            item: 'https://yoursite.com/services/seo',
          },
        ]}
      />
      
      {/* Your page content */}
    </>
  )
}
```

### Manual Head Component (Alternative):

```typescript
// pages/services/seo.tsx
import Head from 'next/head'

export default function SEOServicesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'SEO Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Nexprove Limited',
      url: 'https://yoursite.com',
    },
  }
  
  return (
    <>
      <Head>
        {/* Title & Description */}
        <title>SEO Services Lagos - Rank #1 on Google | Nexprove Limited</title>
        <meta 
          name="description" 
          content="Professional SEO services in Lagos, Nigeria. Guaranteed first page rankings. Free audit!" 
        />
        <meta 
          name="keywords" 
          content="SEO services Lagos, search engine optimization Nigeria" 
        />
        
        {/* Canonical */}
        <link rel="canonical" href="https://yoursite.com/services/seo" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com/services/seo" />
        <meta property="og:title" content="SEO Services Lagos - Rank #1 on Google" />
        <meta property="og:description" content="Professional SEO services in Lagos, Nigeria." />
        <meta property="og:image" content="https://yoursite.com/images/seo-services.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Services Lagos - Rank #1 on Google" />
        <meta name="twitter:description" content="Professional SEO services in Lagos, Nigeria." />
        <meta name="twitter:image" content="https://yoursite.com/images/seo-services.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      {/* Your page content */}
    </>
  )
}
```

---

## 5. STRUCTURED DATA / SCHEMA MARKUP

### Priority: HIGH | Timeline: Day 3-7

### Schema Components (Reusable):

```typescript
// components/schema/OrganizationSchema.tsx
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexprove Limited',
    alternateName: 'Nexprove',
    url: 'https://yoursite.com',
    logo: 'https://yoursite.com/images/logo.png',
    description: 'Full-service digital marketing and SEO agency in Lagos, Nigeria',
    email: 'info@yoursite.com',
    telephone: '+234-XXX-XXXX-XXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Your Street',
      addressLocality: 'Alimosho',
      addressRegion: 'Lagos',
      postalCode: '100001',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '6.5244',
      longitude: '3.3792',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/yourpage',
      'https://twitter.com/yourhandle',
      'https://www.linkedin.com/company/yourcompany',
      'https://www.instagram.com/yourhandle',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

```typescript
// components/schema/LocalBusinessSchema.tsx
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://yoursite.com/#localbusiness',
    name: 'Nexprove Limited',
    image: 'https://yoursite.com/images/storefront.jpg',
    priceRange: '$$',
    url: 'https://yoursite.com',
    telephone: '+234-XXX-XXXX-XXX',
    email: 'info@yoursite.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Your Street',
      addressLocality: 'Alimosho',
      addressRegion: 'Lagos State',
      postalCode: '100001',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '6.5244',
      longitude: '3.3792',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

```typescript
// components/schema/BreadcrumbSchema.tsx
interface BreadcrumbItem {
  name: string
  url: string
}

interface Props {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

```typescript
// components/schema/ArticleSchema.tsx
interface Props {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  url: string
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nexprove Limited',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yoursite.com/images/logo.png',
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

```typescript
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### Using Schema Components:

```typescript
// app/page.tsx (Homepage)
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      
      {/* Your page content */}
    </>
  )
}
```

```typescript
// app/blog/[slug]/page.tsx
import { ArticleSchema } from '@/components/schema/ArticleSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        image={post.featuredImage}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        author={post.author.name}
        url={`https://yoursite.com/blog/${post.slug}`}
      />
      
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://yoursite.com' },
          { name: 'Blog', url: 'https://yoursite.com/blog' },
          { name: post.title, url: `https://yoursite.com/blog/${post.slug}` },
        ]}
      />
      
      <article>
        <h1>{post.title}</h1>
        {/* Rest of content */}
      </article>
    </>
  )
}
```

---

## 6. IMAGE OPTIMIZATION WITH NEXT/IMAGE

### Priority: HIGH | Timeline: Day 5-8

### Optimized Image Component:

```typescript
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
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  fill = false,
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      quality={85} // 85 is optimal for most images
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={className}
      loading={priority ? 'eager' : 'lazy'}
    />
  )
}
```

### Usage Examples:

```tsx
// Hero image (above fold - high priority)
<OptimizedImage
  src="/images/hero-banner.jpg"
  alt="Professional SEO services team in Lagos Nigeria"
  width={1920}
  height={1080}
  priority={true} // Load immediately
  className="w-full h-auto"
/>

// Below fold images (lazy load)
<OptimizedImage
  src="/images/service-image.jpg"
  alt="Digital marketing strategy planning session"
  width={800}
  height={600}
  priority={false} // Lazy load
  className="rounded-lg"
/>

// Background image with fill
<div className="relative w-full h-96">
  <OptimizedImage
    src="/images/background.jpg"
    alt="Office background"
    fill={true}
    className="object-cover"
  />
</div>
```

### Remote Images (from CMS):

```typescript
// next.config.js - Add remote domains
module.exports = {
  images: {
    domains: [
      'yourdomain.com',
      'cdn.yourdomain.com',
      'images.unsplash.com', // If using Unsplash
      'res.cloudinary.com', // If using Cloudinary
    ],
  },
}
```

```tsx
// Using remote images
<Image
  src="https://yourdomain.com/uploads/image.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={800}
  quality={85}
/>
```

### Static Image with Blur Placeholder:

```tsx
import Image from 'next/image'
import heroImage from '@/public/images/hero.jpg'

<Image
  src={heroImage}
  alt="Hero image"
  placeholder="blur" // Automatic blur placeholder
  quality={85}
/>
```

---

## 7. FONT OPTIMIZATION

### Priority: HIGH | Timeline: Day 3-4

### Using next/font (Recommended):

```typescript
// app/layout.tsx
import { Inter, Poppins } from 'next/font/google'

// Primary font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // CRITICAL for performance
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

// Secondary font
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  )
}
```

```css
/* globals.css */
:root {
  --font-inter: '__Inter_1234'; /* Automatically injected */
  --font-poppins: '__Poppins_5678';
}

body {
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1, h2, h3 {
  font-family: var(--font-poppins), var(--font-inter), sans-serif;
}
```

### Local Fonts:

```typescript
// app/layout.tsx
import localFont from 'next/font/local'

const customFont = localFont({
  src: [
    {
      path: '../public/fonts/custom-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/custom-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-custom',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={customFont.variable}>
      <body>{children}</body>
    </html>
  )
}
```

---

## 8. SCRIPT OPTIMIZATION

### Priority: HIGH | Timeline: Day 4-6

### Using next/script Component:

```typescript
// app/layout.tsx or pages/_app.tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* Google Analytics - afterInteractive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
        
        {/* Google Tag Manager - afterInteractive */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        
        {/* Facebook Pixel - lazyOnload (non-critical) */}
        <Script
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="lazyOnload"
        />
        <Script id="fb-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        
        {/* Critical inline script - beforeInteractive */}
        <Script id="theme-detection" strategy="beforeInteractive">
          {`
            // Dark mode detection or critical functionality
            (function() {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
```

**Script Strategy Options:**
- `beforeInteractive` - Loads before page is interactive (use sparingly)
- `afterInteractive` - Loads after page becomes interactive (default, best for most scripts)
- `lazyOnload` - Loads during idle time (best for non-critical scripts)
- `worker` - Loads in a web worker (experimental)

---

## 9. INTERNAL LINKING & NAVIGATION

### Priority: HIGH | Timeline: Day 6-10

### Dynamic Breadcrumbs Component:

```typescript
// components/Breadcrumbs.tsx
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface Props {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol
        className="flex items-center space-x-2 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <li
              key={item.href}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              {!isLast ? (
                <>
                  <Link
                    href={item.href}
                    itemProp="item"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 1)} />
                  <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                </>
              ) : (
                <>
                  <span
                    itemProp="name"
                    className="text-gray-600 font-medium"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                  <meta itemProp="position" content={String(index + 1)} />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
```

### Internal Link Component:

```typescript
// components/InternalLink.tsx
import Link from 'next/link'

interface Props {
  href: string
  children: React.ReactNode
  title?: string
  className?: string
}

export function InternalLink({ href, children, title, className }: Props) {
  return (
    <Link
      href={href}
      title={title}
      className={className}
      prefetch={true} // Prefetch on hover for faster navigation
    >
      {children}
    </Link>
  )
}
```

### Related Content Component:

```typescript
// components/RelatedContent.tsx
import Link from 'next/link'
import Image from 'next/image'

interface RelatedItem {
  title: string
  slug: string
  excerpt: string
  image: string
}

interface Props {
  items: RelatedItem[]
  type: 'posts' | 'services'
}

export function RelatedContent({ items, type }: Props) {
  const baseUrl = type === 'posts' ? '/blog' : '/services'
  
  return (
    <aside className="mt-12">
      <h2 className="text-2xl font-bold mb-6">
        Related {type === 'posts' ? 'Articles' : 'Services'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`${baseUrl}/${item.slug}`}
            className="group block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            title={`Read more about ${item.title}`}
          >
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
```

---

## 10. PERFORMANCE OPTIMIZATIONS

### Priority: CRITICAL | Timeline: Day 7-14

### Code Splitting & Dynamic Imports:

```typescript
// app/page.tsx
import dynamic from 'next/dynamic'

// Lazy load heavy components
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false, // Disable SSR for client-only components
})

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64" />,
})

export default function HomePage() {
  return (
    <div>
      {/* Critical content loads normally */}
      <h1>Welcome to Our Site</h1>
      
      {/* Heavy components load on demand */}
      <HeavyChart />
      <VideoPlayer />
    </div>
  )
}
```

### Suspense Boundaries:

```typescript
// app/blog/page.tsx
import { Suspense } from 'react'

async function BlogPosts() {
  const posts = await getPosts()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map(post => (
        <article key={post.id}>...</article>
      ))}
    </div>
  )
}

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      
      <Suspense fallback={<div>Loading posts...</div>}>
        <BlogPosts />
      </Suspense>
    </div>
  )
}
```

### Loading States:

```typescript
// app/blog/[slug]/loading.tsx
export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      </div>
    </div>
  )
}
```

### Middleware for Redirects:

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  
  // Force trailing slash (or remove it - be consistent)
  if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
    url.pathname += '/'
    return NextResponse.redirect(url, 301)
  }
  
  // Force www
  if (url.hostname === 'yoursite.com') {
    url.hostname = 'www.yoursite.com'
    return NextResponse.redirect(url, 301)
  }
  
  // Old URL redirects
  if (url.pathname === '/old-services') {
    return NextResponse.redirect(new URL('/services', request.url), 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
```

---

## 11. TESTING & VALIDATION

### Priority: HIGH | Timeline: Ongoing

### Testing Script (package.json):

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "analyze": "ANALYZE=true next build",
    "lighthouse": "lighthouse http://localhost:3000 --view"
  }
}
```

### Install Lighthouse CI:

```bash
npm install -g @lhci/cli
```

```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000",
        "http://localhost:3000/services",
        "http://localhost:3000/blog"
      ],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

---

## 12. DEPLOYMENT CHECKLIST

### Before Production:

```
Environment Variables (.env.production):
☐ NEXT_PUBLIC_SITE_URL=https://yoursite.com
☐ NEXT_PUBLIC_GA_ID=G-XXXXXXX
☐ DATABASE_URL (if applicable)

Build Optimization:
☐ Run `npm run build` successfully
☐ Check bundle size analyzer
☐ Verify no console errors
☐ Test production build locally

SEO Validation:
☐ All pages have unique titles
☐ All pages have meta descriptions
☐ Sitemap generates correctly at /sitemap.xml
☐ robots.txt accessible at /robots.txt
☐ Schema validates at schema.org/validator
☐ Google Rich Results Test passes
☐ All images have alt text

Performance:
☐ Lighthouse score 90+ (all categories)
☐ Core Web Vitals pass
☐ Images optimized and using next/image
☐ Fonts optimized with next/font
☐ Scripts loaded with next/script

Security:
☐ HTTPS enforced
☐ Security headers configured
☐ Environment secrets not in code
☐ Content Security Policy set

Post-Deploy:
☐ Submit sitemap to Google Search Console
☐ Submit sitemap to Bing Webmaster Tools
☐ Verify Google Analytics tracking
☐ Check for broken links
☐ Test on real mobile devices
```

---

## IMPLEMENTATION TIMELINE

### Week 1 - Foundation (Days 1-7):
1. Setup next.config.js with all optimizations
2. Create robots.txt and sitemap
3. Setup metadata (App Router) or next-seo (Pages Router)
4. Add Organization and LocalBusiness schema
5. Configure Google Analytics and tracking

### Week 2 - Pages & Content (Days 8-14):
6. Optimize all page metadata
7. Implement next/image for all images
8. Add breadcrumb navigation
9. Optimize fonts with next/font
10. Add Article schema to blog posts

### Week 3 - Performance (Days 15-21):
11. Implement dynamic imports for heavy components
12. Add loading states and Suspense
13. Optimize scripts with next/script
14. Setup middleware for redirects
15. Run Lighthouse audits and fix issues

### Week 4 - Polish & Launch (Days 22-30):
16. Add related content sections
17. Implement FAQ schema where applicable
18. Final testing and validation
19. Deploy to production
20. Submit to search engines

---

## HELPFUL COMMANDS

```bash
# Development
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Analyze bundle size
npm run analyze

# Run Lighthouse audit
npm run lighthouse

# Type checking
npm run type-check

# Linting
npm run lint

# Fix linting issues
npm run lint:fix
```

---

**Next.js is SEO-optimized by default!** This guide leverages Next.js built-in features for maximum performance and search visibility. Follow the examples above for production-ready, Google-friendly implementations.