import React from 'react';
import Image from 'next/image';
// import { GetStaticProps, GetStaticPaths } from 'next';
import * as servicesData from '../data.json';
import { notFound } from 'next/navigation';
import ScrollFade from '@/utils/SlideFade';
import Smallie from '@/app/components/Smallie';
import Markdown from 'react-markdown';

import '../../stories/[id]/markdown.css';
import { twMerge } from 'tailwind-merge';

type ServicePageProps = {
  params: {
    id: string;
  };
};

const Page = ({ params }: ServicePageProps) => {
  const { id } = params;

  const service = servicesData.find((service) => service.id === +id);

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
      <div>
        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="w-full gap-3 sm:gap-10 pt-32 pb-10 flex flex-col sm:flex-row"
        >
          <Smallie text={service.title.tag} />
          <h2
            className="w-full text-[1.25rem] sm:text-[2rem] lg:text-[3.25rem] font-semibold  leading-[140%]
            text-foundation-grey-grey-500"
          >
            {service.title.title}
          </h2>
        </ScrollFade>
        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="w-full max-w-7xl"
        >
          <Image
            src={service.img}
            alt="First service related Image"
            width={1280}
            height={780}
            className="w-full rounded-xl sm:rounded-3xl object-cover h-auto lg:h-[48.75rem] sm:h-[28.806rem] "
          />
        </ScrollFade>
        {/* <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="mt-10 lg:mt-20 flex flex-col sm:flex-row items-start justify-between gap-10 md:gap-10"
        >
          <Smallie text={service.sections} />

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
        </ScrollFade> */}
      </div>
      <div>
        {service.sections.map((section, idx) => (
          <div
            key={idx}
            className={twMerge(
              'w-full font-montserrat flex flex-col gap-8 sm:flex-row sm:gap-10 pt-16 pb-14',
              idx !== 0 ? 'border-t border-[#B2B2B2]' : ''
            )}
          >
            <Smallie className="max-w-[236px]" text={section.tag} />
            <ScrollFade
              threshold={0.1}
              duration={0.2}
              delay={0.2}
              className="text-[#151515]"
            >
              <Markdown className="markdown-wrapper">
                {section.content}
              </Markdown>
            </ScrollFade>
          </div>
        ))}
      </div>
    </ScrollFade>
  );
};

// Generate paths for each service based on the `id`
export function generateStaticParams() {
  const articleCount = 6; //NOTE this should always be the same length as the articles array
  const ids = Array(articleCount)
    .fill('')
    .map((_, idx) => ({ id: `${idx + 1}` }));
  return ids;
}

export default Page;
