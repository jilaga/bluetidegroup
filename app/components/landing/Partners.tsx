'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Partners: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const firstChild = container.children[0] as HTMLElement;
      const containerWidth =
        firstChild.clientWidth * container.children.length +
        parseFloat(getComputedStyle(container).gap) *
          (container.children.length - 1);

      container.style.setProperty('--container-width', `${containerWidth}px`);
    }
  }, []);

  const items = [
    '/partners/partners-1.png',
    '/partners/partners-2.png',
    '/partners/partners-3.png',
    '/partners/partners-4.png',
    '/partners/partners-5.png',
    '/partners/partners-6.png',
    '/partners/partners.png',
  ];

  return (
    <section className="mx-auto w-full flex flex-col gap-6 sm:gap-10 pb-10 sm:pb-20">
      <p className="text-[0.875rem] sm:text-[1rem] tracking-[0.03em] sm:tracking-[0.05em] leading-[140%] uppercase font-medium font-clash-display text-foundation-grey-grey-100 text-center">
        our partners trust us
      </p>
      <div className="scroll-rows-container overflow-hidden">
        <div
          className="scroll-container reverse"
          ref={scrollContainerRef}
          style={
            {
              '--spacing': '8px',
              '--scroll-duration': '70s',
              '--container-width': 'auto',
              '--height': '148px',
            } as React.CSSProperties
          }
        >
          {items.concat(items).map((src, idx) => (
            <div key={idx} className="scroll-item  ">
              <Image
                src={src}
                alt={`Brand ${idx + 1}`}
                width={400}
                height={148}
                className="w-[60%] sm:w-[90%]  gap-2 sm:gam-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
