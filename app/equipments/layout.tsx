import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marine Equipment & Technology - Advanced Subsea Tools',
  description: 'Explore our comprehensive range of marine equipment including ROVs, AUVs, multibeam sonars, diving gear, and subsea construction tools for offshore operations.',
  keywords: [
    'marine equipment Nigeria',
    'ROV equipment rental',
    'subsea tools',
    'diving equipment',
    'multibeam sonars',
    'AUV systems',
    'underwater cameras',
    'subsea construction equipment',
    'marine technology',
    'offshore equipment Nigeria',
    'cavit blasters',
    'oceanographic instruments',
    'subsea sensors',
    'underwater communication systems'
  ],
  openGraph: {
    title: 'Marine Equipment & Technology - Advanced Subsea Tools | Bluetide Group',
    description: 'Explore our comprehensive range of marine equipment including ROVs, AUVs, multibeam sonars, diving gear, and subsea construction tools for offshore operations.',
    url: 'https://bluetidegroup.com/equipments',
    images: [
      {
        url: '/service/equipment/image.webp',
        width: 1200,
        height: 630,
        alt: 'Bluetide Group Marine Equipment and Subsea Technology',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marine Equipment & Technology - Advanced Subsea Tools | Bluetide Group',
    description: 'Comprehensive marine equipment: ROVs, AUVs, multibeam sonars, diving gear, and subsea construction tools for offshore operations.',
    images: ['/service/equipment/image.webp'],
  },
  alternates: {
    canonical: 'https://bluetidegroup.com/equipments',
  },
};

export default function EquipmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
