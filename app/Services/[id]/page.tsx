import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ScrollFade from '@/utils/SlideFade';
import Smallie from '@/app/components/Smallie';
import Markdown from 'react-markdown';
import fs from 'fs/promises';
import path from 'path';

import '../../stories/[id]/markdown.css';
import { twMerge } from 'tailwind-merge';

type ServicePageProps = {
  params: {
    id: string;
  };
};

interface Service {
  id: number;
  title: {
    tag: string;
    title: string;
  };
  img: string;
  sections: {
    tag: string;
    content: string;
  }[];
}

const Page = async ({ params }: ServicePageProps) => {
  const url = path.join('./', 'app/Services/data.json');
  const file = await fs.readFile(url, 'utf-8');
  const services: Service[] = JSON.parse(file);

  const service = services.find((service) => `${service.id}` === params.id);

  if (!service) {
    return notFound();
  }

  return (
    <ScrollFade
      threshold={0.1}
      duration={0.2}
      delay={0.2}
      className="w-full max-w-[1440px] relative flex flex-col justify-start 
      pt-[10rem] px-[1.5rem] md:px-[2.5rem] lg:px-[5rem] pb-[2rem] 
      gap-[2rem] sm:gap-[2.55rem] lg:gap-[7.5rem] text-left text-foundation-grey-grey-100
      font-body-1sm:flex-row items-start 
      md:gap-[2.55rem]  font-clash"
    >
      <div>
        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="w-full gap-3 sm:gap-10 pt-32 pb-10 flex flex-col sm:flex-row "
        >
          <Smallie
            text={service.title.tag}
            className="mt-5 max-w-[232px]  uppercase font-medium"
          />
          <h2 className="w-full text-[1.25rem] sm:text-[2rem] lg:text-[3.25rem] font-semibold  leading-[140%] text-foundation-grey-grey-500 font-clash">
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
      </div>
      <div>
        {service.sections.map((section, idx) => (
          <div
            key={idx}
            className={twMerge(
              'w-full flex flex-col gap-8 sm:flex-row sm:gap-10 pt-16 pb-12',
              idx !== 0 ? 'border-t border-[#B2B2B2]' : ''
            )}
          >
            <Smallie
              className="max-w-[238px] lg:max-w-[322px] shrink-0"
              text={section.tag}
            />
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
