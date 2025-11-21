import React from 'react';
import { Metadata } from 'next';
import Leading from '../components/about/Leading';
import { Text } from '../components/about/Text';
import { Team } from '../components/about/Team';
import HeroSec from '../components/about/hero/page';
import Brands from '../components/about/Awards';

export const metadata: Metadata = {
  title: 'About Us - Leading Marine Services Provider',
  description: 'Discover Bluetide Group, Nigeria\'s premier marine services company. Learn about our mission to deliver innovative subsea solutions and exceptional offshore industry support.',
  keywords: [
    'about Bluetide Group',
    'marine services company Nigeria',
    'offshore industry support',
    'subsea solutions provider',
    'marine operations team',
    'diving services company',
    'ROV services Nigeria',
    'underwater services provider',
    'marine industry expertise',
    'offshore operations Nigeria'
  ],
  openGraph: {
    title: 'About Us - Leading Marine Services Provider | Bluetide Group',
    description: 'Discover Bluetide Group, Nigeria\'s premier marine services company. Learn about our mission to deliver innovative subsea solutions and exceptional offshore industry support.',
    url: 'https://bluetidegroup.com/about',
    images: [
      {
        url: '/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Bluetide Group - About Our Marine Services Team',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Leading Marine Services Provider | Bluetide Group',
    description: 'Discover Bluetide Group, Nigeria\'s premier marine services company. Our mission: innovative subsea solutions and exceptional offshore support.',
    images: ['/hero.webp'],
  },
  alternates: {
    canonical: 'https://bluetidegroup.com/about',
  },
};

export default function page() {
  return (
    <main className="w-full  relative max-w-[1440px] mx-auto flex flex-col justify-center items-center">
      <HeroSec />
      <Leading />
      <Text />
      <Team />
      <Brands /> 
    </main>
  );
}
