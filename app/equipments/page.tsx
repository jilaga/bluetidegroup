'use client';
import React from 'react';
import { CardComponent } from './CardComponent';
import { servicesData } from './data';
import HeroSec from '../components/about/hero/page';

const Service: React.FC = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center flex-wrap  py-[2.5rem] px-[1.5rem] box-border gap-[0.5rem] text-left text-[1rem] text-foundation-grey-grey-500 font-caption-semibold">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="max-w-[400px] flex flex-col items-start justify-center"
        >
          <CardComponent
            imgUrl={service.imgUrl}
            title={service.title}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
};

export default function Services() {
  return (
    <section className="antialiased w-full mx-auto flex flex-col justify-center items-center gap-4">
      <HeroSec />
      <Service />
    </section>
  );
}