'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ScrollFade from '@/utils/SlideFade';

const Brands: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containers = scrollContainerRef.current?.children;
    if (containers) {
      Array.from(containers).forEach((container: Element) => {
        const firstChild = container.children[0] as HTMLElement;
        const containerWidth =
          firstChild.clientWidth * container.children.length +
          parseFloat(getComputedStyle(container as HTMLElement).gap) *
            (container.children.length - 1);

        (container as HTMLElement).style.setProperty(
          '--container-width',
          `${containerWidth}px`
        );
      });
    }
  }, []);

  const items = [
    '/brands/Allison.png',
    '/brands/CESL.png',
    '/brands/Coat.png',
    '/brands/desicon.png',
    '/brands/Exon.png',
    '/brands/Hydrodive.png',
    '/brands/Kreuz.png',
    '/brands/petrostuff.png',
    '/brands/TElogo.png',
  ];

  const scrollRows = [
    { reverse: false, duration: '30s' },
    { reverse: true, duration: '50s' },
    { reverse: false, duration: '70s' },
  ];

  return (
    <ScrollFade>
      <div ref={scrollContainerRef} className="overflow-hidden py-4">
        {scrollRows.map((row, index) => (
          <div
            key={index}
            className={`flex gap-4 py-4 ${row.reverse ? 'translate-x-full' : '-translate-x-full'}`}
            style={{
              animation: `scroll ${row.duration} linear infinite ${
                row.reverse ? 'reverse' : ''
              }`,
            }}
          >
            {[...items, ...items].map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative"
              >
                <Image
                  src={src}
                  alt={`Brand ${idx + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </ScrollFade>
  );
};

export default Brands;
