import React from 'react';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ServiceData, servicesData } from '../data';
import { notFound } from 'next/navigation';
import ScrollFade from '@/utils/SlideFade';

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
      className="w-full flex flex-col items-center justify-start px-4 sm:px-20 pb-20 pt-[3rem] sm:py-30 text-left font-body-1 gap-10 sm:gap-20"
    >
      <div className="w-full max-w-7xl ">
        <h1 className="w-full pt-32 pb-10 text-center text-[1.25rem] tracking-[0.03em] leading-[140%] uppercase font-medium font-title-1-semibold text-foundation-grey-grey-100 ">
          {service.title}
        </h1>
        <ScrollFade threshold={0.1} duration={0.2} delay={0.2}>
          <Image
            src={service.imgUrl}
            alt="About image"
            width={1280}
            height={780}
            className="w-full rounded-xl sm:rounded-3xl object-cover h-[280px] sm:h-[780px]"
          />
        </ScrollFade>

        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="mt-10 sm:mt-20 flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-40"
        >
          <h2 className="text-[1.25rem] sm:text-4xl body-2 font-semibold leading-tight sm:w-1/2 text-foundation-grey-grey-500">
            {service.paragraph && <p>{service.paragraph}</p>}
          </h2>

          <ScrollFade
            threshold={0.1}
            duration={0.2}
            delay={0.2}
            className="text-[1.25rem] sm:text-xl leading-relaxed text-foundation-grey-grey-500 sm:w-1/2"
          >
            <p className="mb-4">
              {service.paragraph2 && <p>{service.paragraph2}</p>}
            </p>
            <p className="mb-4">
              {service.paragraph3 && <p>{service.paragraph3}</p>}
            </p>
            <p>{service.paragraph && <p>{service.paragraph}</p>}</p>
          </ScrollFade>
        </ScrollFade>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center items-center">
        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="w-1/2"
        >
          <Image
            src={service.imgUrl}
            alt="About image"
            width={1280}
            height={780}
            className=" h-[35rem] rounded-xl sm:rounded-3xl object-cover "
          />
        </ScrollFade>
        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="text-[1.25rem] sm:text-xl leading-relaxed text-foundation-grey-grey-500 w-1/2"
        >
          <p className="mb-4">
            {service.paragraph2 && <p>{service.paragraph2}</p>}
          </p>
          <p className="mb-4">
            {service.paragraph3 && <p>{service.paragraph3}</p>}
          </p>
          <p>{service.paragraph && <p>{service.paragraph}</p>}</p>
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
