'use client';
import React from 'react';
import { CardComponent } from './CardComponent';
import { servicesData } from './data';

const ServicePage: React.FC = () => {
  return (
    <div className="w-full relative grid grid-cols-2 md:grid-cols-3 items-start justify-center content-start box-border gap-[1.25rem] py-10 px-5 md:px-16 ">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="max-w-[400px] flex flex-col items-start justify-center"
        >
          <CardComponent
            id={service.id}
            imgUrl={service.imgUrl}
            title={service.title}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
