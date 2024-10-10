'use client';
import React from 'react';
import { CardComponent } from './CardComponent';
import { servicesData } from './data';
import Hero from './hero';

const Service: React.FC = () => {
  return (
    <div className=" w-full grid grid-cols-2 lg:grid-cols-3 justify-center items-center pt-[2rem] px-[1.5rem] md:px-[2.5rem] lg:px-[5rem] pb-[2rem] sm:pb-[2.5rem] md:pb-[4rem]  box-border gap-[0.5rem] text-left text-[1rem] text-foundation-grey-grey-500 font-caption-semibold">
      {servicesData.map((service, index) => (
        <div key={index} className="flex flex-col items-start justify-center">
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
    <section className="antialiased w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-4">
      <Hero />
      <Service />
    </section>
  );
}
