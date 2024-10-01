import React from 'react';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ServiceData, servicesData } from '../data';
import { notFound } from 'next/navigation';
import ScrollFade from '@/utils/SlideFade';
import Smallie from '@/app/components/Smallie';

type ServicePageProps = {
  params: {
    id: string;
  };
};

const Page = ({ params }: ServicePageProps) => {
  const { id } = params;

  const service = servicesData.find((service) => service.id === id);

  if (!service) {
    return notFound();
  }

  return (
    <ScrollFade
      threshold={0.1}
      duration={0.2}
      delay={0.2}
      className="w-full max-w-[1440px] relative flex flex-col items-center justify-start 
      pt-[10rem] px-[1.5rem] md:px-[2.5rem] lg:px-[5rem] pb-[2rem] 
      gap-[2rem] sm:gap-[2.55rem] lg:gap-[7.5rem] text-left text-foundation-grey-grey-100 font-clash
      font-body-1"
    >
      <div className=" ">
        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="w-full gap-3 sm:gap-10 pt-32 pb-10 flex flex-col sm:flex-row "
        >
          <Smallie text={service.title} />
          <h2
            className="w-full text-[1.25rem] sm:text-[2rem] lg:text-[3.25rem] font-semibold  leading-[140%]
            text-foundation-grey-grey-500 "
          >
            {service.paragraph && <div>{service.intro}</div>}
          </h2>
        </ScrollFade>
        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="w-full max-w-7xl"
        >
          <Image
            src={service.imgUrl}
            alt="First service related Image"
            width={1280}
            height={780}
            className="w-full rounded-xl sm:rounded-3xl object-cover h-auto lg:h-[48.75rem] sm:h-[28.806rem] "
          />
        </ScrollFade>

        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="mt-10 lg:mt-20 flex flex-col sm:flex-row items-start justify-between gap-10 md:gap-10"
        >
          <Smallie text={service.title} />

          <ScrollFade
            threshold={0.1}
            duration={0.2}
            delay={0.2}
            className="text-[1rem] leading-[140%] lg:text-xl text-[#1E1E1E] sm:w-1/2 font-montserrat"
          >
            <div className="mb-4">
              {service.paragraph2 && <div>{service.paragraph2}</div>}
            </div>
            <div className="mb-4">
              {service.paragraph3 && <div>{service.paragraph3}</div>}
            </div>
            <div>{service.paragraph && <div>{service.paragraph}</div>}</div>
          </ScrollFade>
        </ScrollFade>
      </div>
      <div className=" w-full mt-10 lg:mt-20 flex flex-col-reverse sm:flex-row items-start justify-between gap-10 sm:gap-12 ">
        <Smallie text={service.title} />
        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="text-[1rem] leading-[140%]  lg:text-xl text-[#1E1E1E] sm:w-1/2 font-montserrat "
        >
          <div className="mb-4">
            {service.services && <div>{service.services}</div>}
          </div>
          <div className="mb-4">
            {service.benefits && <div>{service.benefits}</div>}
          </div>
          <div>{service.equipment && <div>{service.equipment}</div>}
          </div>
        </ScrollFade>
      </div>
    </ScrollFade>
  );
};

// Generate paths for each service based on the `id`
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export default Page;
