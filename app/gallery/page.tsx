import type { Metadata } from 'next';

import Image from 'next/image';

import ScrollFade from '@/utils/SlideFade';
import Smallie from '../components/Smallie';
import ImageReveal from './ImageReveal';

export const metadata: Metadata = {
  title: 'Gallery - Marine Operations & Project Showcase',
  description: 'View our extensive gallery of marine operations, underwater projects, and offshore services. See Bluetide Group\'s ROV inspections, diving services, and hull cleaning work in action.',
  keywords: [
    'marine operations gallery',
    'underwater services photos',
    'ROV inspection images',
    'diving services gallery',
    'hull cleaning photos',
    'offshore operations Nigeria',
    'subsea projects gallery',
    'marine services showcase',
    'underwater inspection photos',
    'Bluetide Group projects'
  ],
  openGraph: {
    title: 'Gallery - Marine Operations & Project Showcase | Bluetide Group',
    description: 'View our extensive gallery of marine operations, underwater projects, and offshore services. See Bluetide Group\'s ROV inspections, diving services, and hull cleaning work in action.',
    url: 'https://www.bluetidegroup.com/gallery',
    images: [
      {
        url: 'https://www.bluetidegroup.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bluetide Group Marine Operations Gallery',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - Marine Operations & Project Showcase | Bluetide Group',
    description: 'View our marine operations, underwater projects, and offshore services gallery. ROV inspections, diving, and hull cleaning work showcased.',
    images: ['https://www.bluetidegroup.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.bluetidegroup.com/gallery',
  },
};

function page() {
  return (
    <div
      className="pt-[20rem] px-[1.5rem] md:px-[2.5rem] lg:px-[5rem] pb-[2rem] sm:pb-[2.5rem] md:pb-[4rem]
       max-w-[1440px] w-full mx-auto gap-[2rem] sm:gap-[2.55rem] lg:gap-[7.5rem] text-left"
    >
      <div className="sm:grid grid-rows-[repeat(9,_auto)] grid-cols-[repeat(3,_auto)] gap-y-6">
        <Smallie
          text="pictures would convince you"
          className="col-start-1 col-end-2 row-start-1 row-end-2 w-[unset]"
        />
        <ImageReveal className="col-start-2 col-end-4 row-start-1 row-end-2">
          <ScrollFade>
            <Image
              className="w-full mt-6 sm:mt-0"
              src="/gallery/img1.webp"
              alt="Offshore marine operations platform during subsea inspection work"
              width={853}
              height={600}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-1 col-end-2 row-start-2 row-end-3">
          <ScrollFade>
            <Image
              className="w-full mt-6 sm:mt-0"
              src="/gallery/img2.webp"
              alt="Professional diving team performing underwater hull cleaning service"
              width={427}
              height={300}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-3 col-end-4 row-start-3 row-end-4">
          <ScrollFade>
            <Image
              className="w-full mt-6 sm:mt-0"
              src="/gallery/img3.webp"
              alt="ROV remotely operated vehicle conducting subsea survey operations"
              width={428}
              height={300}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-2 col-end-3 row-start-4 row-end-5">
          <ScrollFade>
            <Image
              className="w-full mt-6 sm:mt-0"
              src="/gallery/img4.webp"
              alt="Underwater positioning and subsea survey equipment in operation"
              width={428}
              height={600}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-3 col-end-4 row-start-5 row-end-6">
          <ScrollFade>
            <Image
              className="w-full mt-6 sm:mt-0"
              src="/gallery/img5.webp"
              alt="Marine vessel undergoing professional maintenance and inspection"
              width={427}
              height={300}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-1 col-end-2 row-start-5 row-end-7">
          <ScrollFade>
            <Image
              className="w-full mt-6 sm:mt-0"
              src="/gallery/img6.webp"
              alt="Offshore oil and gas platform with marine support services"
              width={427}
              height={600}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-2 col-end-3 row-start-7 row-end-8">
          <ScrollFade>
            <Image
              className="w-full mt-6 sm:mt-0"
              src="/gallery/img4.webp"
              alt="Underwater positioning and subsea survey equipment in operation"
              width={428}
              height={600}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-1 col-end-2 row-start-8 row-end-9">
          <ScrollFade>
            <Image
              className="w-full mt-6 sm:mt-0"
              src="/gallery/img2.webp"
              alt="Professional diving team performing underwater hull cleaning service"
              width={427}
              height={300}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-3 col-end-4 row-start-9 row-end-10">
          <ScrollFade>
            <Image
              className="w-full mt-6 sm:mt-0"
              src="/gallery/img3.webp"
              alt="ROV remotely operated vehicle conducting subsea survey operations"
              width={428}
              height={300}
            />
          </ScrollFade>
        </ImageReveal>
      </div>
    </div>
  );
}

export default page;
