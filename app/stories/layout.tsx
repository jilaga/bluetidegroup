import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories & Insights - Marine Industry Blog',
  description: 'Explore expert insights on underwater hull cleaning, ROV services, marine operations, and offshore industry trends. Stay updated with Bluetide Group\'s marine services blog.',
  keywords: [
    'marine industry blog',
    'underwater hull cleaning guide',
    'ROV services insights',
    'marine operations articles',
    'offshore industry news',
    'subsea services blog',
    'diving services tips',
    'hull cleaning techniques',
    'marine technology trends',
    'oil and gas marine services'
  ],
  openGraph: {
    title: 'Stories & Insights - Marine Industry Blog | Bluetide Group',
    description: 'Explore expert insights on underwater hull cleaning, ROV services, marine operations, and offshore industry trends. Stay updated with Bluetide Group\'s marine services blog.',
    url: 'https://bluetidegroup.com/stories',
    images: [
      {
        url: '/stories/under.webp',
        width: 1200,
        height: 630,
        alt: 'Bluetide Group Marine Industry Blog & Insights',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stories & Insights - Marine Industry Blog | Bluetide Group',
    description: 'Expert insights on underwater hull cleaning, ROV services, and marine operations. Stay updated with industry trends and best practices.',
    images: ['/stories/under.webp'],
  },
  alternates: {
    canonical: 'https://bluetidegroup.com/stories',
  },
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
