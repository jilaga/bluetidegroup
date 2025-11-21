import type { Metadata } from 'next';

import fs from 'node:fs/promises';
import path from 'node:path';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import { twMerge } from 'tailwind-merge';

import { BreadcrumbSchema } from '@/app/components/schema/BreadcrumbSchema';
import { ServiceSchema } from '@/app/components/schema/ServiceSchema';
import Smallie from '@/app/components/Smallie';
import ScrollFade from '@/utils/SlideFade';

import '../../stories/[id]/markdown.css';

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

// Helper function to get service data
async function getServiceData(id: string) {
  const url = path.join('./', 'app/Services/data.json');
  const file = await fs.readFile(url, 'utf-8');
  const services: Service[] = JSON.parse(file);
  return services.find((service) => `${service.id}` === id);
}

// Generate metadata dynamically
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getServiceData(params.id);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const serviceNames: { [key: string]: string } = {
    '1': 'ROV Inspection Services',
    '2': 'Air Diving Services',
    '3': 'Subsea Survey and Positioning',
    '4': 'Hull Cleaning Services',
    '5': 'IMCA ROV and Diving System Audits',
    '6': 'Electrical Instrumentation Services'
  };

  const serviceName = serviceNames[params.id] || service.title.tag;
  const description = `Professional ${serviceName.toLowerCase()} by Bluetide Group. Expert marine services in Nigeria including ${service.title.title}`;

  return {
    title: `${serviceName} - Expert Marine Solutions`,
    description: description,
    keywords: [
      serviceName.toLowerCase(),
      'marine services Nigeria',
      'underwater services',
      'offshore services',
      'Bluetide Group',
      service.title.tag.toLowerCase()
    ],

    openGraph: {
      title: `${serviceName} | Bluetide Group`,
      description: description,
      url: `https://bluetidegroup.com/Services/${params.id}`,
      images: [
        {
          url: service.img,
          width: 1200,
          height: 630,
          alt: `${serviceName} by Bluetide Group`,
        },
      ],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: `${serviceName} | Bluetide Group`,
      description: description,
      images: [service.img],
    },

    alternates: {
      canonical: `https://bluetidegroup.com/Services/${params.id}`,
    },
  };
}

const Page = async ({ params }: ServicePageProps) => {
  const service = await getServiceData(params.id);

  if (!service) {
    return notFound();
  }

  const serviceNames: { [key: string]: string } = {
    '1': 'ROV Inspection Services',
    '2': 'Air Diving Services',
    '3': 'Subsea Survey and Positioning',
    '4': 'Hull Cleaning Services',
    '5': 'IMCA ROV and Diving System Audits',
    '6': 'Electrical Instrumentation Services'
  };

  const serviceName = serviceNames[params.id] || service.title.tag;

  return (
    <>
      <ServiceSchema
        serviceName={serviceName}
        description={service.title.title}
        url={`https://bluetidegroup.com/Services/${params.id}`}
        image={service.img}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://bluetidegroup.com' },
          { name: 'Services', url: 'https://bluetidegroup.com/Services' },
          { name: serviceName, url: `https://bluetidegroup.com/Services/${params.id}` },
        ]}
      />
    <ScrollFade
      threshold={0.1}
      duration={0.2}
      delay={0.2}
      className="w-full max-w-[1440px] relative flex flex-col justify-start 
      pt-[10rem] px-[1.5rem] md:px-[2.5rem] lg:px-[5rem] pb-[2rem] 
      gap-[2rem] sm:gap-[2.55rem] lg:gap-[7.5rem] text-left text-foundation-grey-grey-100
      font-body-1sm:flex-row items-start 
      md:gap-[2.55rem] "
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
            alt={`${serviceName} - Professional marine and offshore operations by Bluetide Group`}
            width={1280}
            height={780}
            className="w-full rounded-xl sm:rounded-3xl object-cover h-auto lg:h-[48.75rem] sm:h-[28.806rem] "
          />
        </ScrollFade>
      </div>
      <div>
        {service.sections.map((section, idx) => (
          <div
            key={section.tag}
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
    </>
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
