'use client';
import React from 'react';
import ServicePage from './ServicePage';
import HeroSec from '../components/about/hero/page';

export default function Services() {
  return (
    <section className="antialiased w-full sm:max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-4">
      <HeroSec />
      <ServicePage />
    </section>
  );
}
