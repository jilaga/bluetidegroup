'use client';

import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import ScrollFade from '@/utils/SlideFade';

interface RelatedService {
  id: string;
  title: string;
  description: string;
}

interface RelatedServicesProps {
  currentServiceId: string;
}

const allServices: RelatedService[] = [
  {
    id: '1',
    title: 'ROV Inspection Services',
    description: 'Specialized inspection and maintenance services for Remotely Operated Vehicles.',
  },
  {
    id: '2',
    title: 'Air Diving Services',
    description: 'Comprehensive air diving services tailored to meet unique client needs.',
  },
  {
    id: '3',
    title: 'Subsea Survey and Positioning',
    description: 'Expert subsea positioning and survey solutions for accurate underwater operations.',
  },
  {
    id: '4',
    title: 'Hull Cleaning Services',
    description: 'Expert hull cleaning for vessels ensuring optimal performance and efficiency.',
  },
  {
    id: '5',
    title: 'IMCA ROV and Diving System Audits',
    description: 'Professional audits ensuring compliance with IMCA standards.',
  },
  {
    id: '6',
    title: 'Electrical Instrumentation Services',
    description: 'Comprehensive electrical and instrumentation services for marine operations.',
  },
];

export default function RelatedServices({ currentServiceId }: RelatedServicesProps) {
  // Filter out the current service and show 3 related services
  const relatedServices = allServices
    .filter(service => service.id !== currentServiceId)
    .slice(0, 3);

  return (
    <section className="w-full py-16 px-4 md:px-10 border-t border-[#B2B2B2]">
      <ScrollFade>
        <h2 className="text-[1.75rem] md:text-[2.5rem] font-clash font-semibold text-foundation-grey-grey-500 mb-8">
          Related Services
        </h2>
      </ScrollFade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedServices.map((service, index) => (
          <ScrollFade key={service.id} delay={0.1 * (index + 1)}>
            <Link href={`/Services/${service.id}`}>
              <div className="bg-primary-blue hover:bg-[#d5daf5] transition-colors duration-300 rounded-xl p-6 h-full flex flex-col justify-between group cursor-pointer">
                <div>
                  <h3 className="text-[1.25rem] font-clash font-semibold text-foundation-grey-grey-700 mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foundation-grey-grey-600 leading-[140%]">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </ScrollFade>
        ))}
      </div>

      <ScrollFade delay={0.4}>
        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-[#c74f0f] font-medium transition-colors">
            View all services
            <HiArrowRight className="transition-transform hover:translate-x-1" />
          </Link>
        </div>
      </ScrollFade>
    </section>
  );
}
