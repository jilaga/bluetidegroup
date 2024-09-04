'use client';
import React, { useEffect, useRef } from 'react';
import ScrollFade from '@/utils/SlideFade.jsx';
import TiltImage from '../Assets/TiltCard';

const TitleCard = ({ title }: { title: string }) => (
  <div className="w-full h-80 bg-foundation-rust-accent-rust-accent-500 rounded-3xl p-6 flex items-center justify-center">
    <h2 className="text-4xl font-semibold text-foundation-rust-accent-rust-accent-50">
      {title}
    </h2>
  </div>
);

const QuoteCard = ({
  quote,
  author,
  company,
}: {
  quote: string;
  author: string;
  company: string;
}) => (
  <div className="w-full h-80 bg-foundation-rust-accent-rust-accent-100 rounded-3xl p-6 flex flex-col justify-between">
    <p className="text-[1.25rem] leading-[140%] font-body-1 text-foundation-grey-grey-500 text-left inline-block">
      {quote}
    </p>
    <div>
      <p className="text-[1.25rem] tracking-[0.03em] leading-[140%] uppercase font-medium font-title-1-semibold text-foundation-grey-grey-500 text-left flex items-end">
        {author},
      </p>
      <p className="text-[1.25rem] tracking-[0.03em] leading-[140%] uppercase font-medium font-title-1-semibold text-foundation-grey-grey-500 text-left flex items-end">
        {company}
      </p>
    </div>
  </div>
);

const StatCard = ({
  stat,
  description,
}: {
  stat: string;
  description: string;
}) => (
  <div className="w-full h-80 bg-foundation-rust-accent-rust-accent-50 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
    <p className=" text-[5.375rem] leading-[140%] font-semibold font-hx-semibold text-accent text-center">
      {stat}
    </p>
    <p className="text-lg uppercase text-foundation-grey-grey-500">
      {description}
    </p>
  </div>
);

const Why: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, root: null }
    );

    const children = containerRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  const boxes = [
    { type: 'title', title: 'Why us?' },
    {
      type: 'quote',
      quote:
        "They're a reliable partner, delivering exceptional results every time.",
      author: 'John Doe',
      company: 'CEO of Marine Ltd.',
    },
    { type: 'stat', stat: '08+', description: 'years of experience' },
    { type: 'stat', stat: '300+', description: 'Projects completed' },
    {
      type: 'quote',
      quote:
        "They're a reliable partner, delivering exceptional results every time.",
      author: 'John Doe',
      company: 'CEO of Marine Ltd.',
    },
    {
      type: 'quote',
      quote:
        "They're a reliable partner, delivering exceptional results every time.",
      author: 'John Doe',
      company: 'CEO of Marine Ltd.',
    },
    {
      type: 'quote',
      quote:
        "They're a reliable partner, delivering exceptional results every time.",
      author: 'John Doe',
      company: 'CEO of Marine Ltd.',
    },
    { type: 'stat', stat: '300+', description: 'Equipment leased' },
    {
      type: 'quote',
      quote:
        "They're a reliable partner, delivering exceptional results every time.",
      author: 'John Doe',
      company: 'CEO of Marine Ltd.',
    },
  ];

  const renderBox = (box: any, index: number) => {
    const rowIndex = Math.floor(index / 3);
    const colIndex = index % 3;
    let paddingClass = '';

    switch (colIndex) {
      case 0:
        paddingClass = 'pb-20';
        break;
      case 1:
        paddingClass = 'pt-20';
        break;
      case 2:
        paddingClass = 'py-10';
        break;
    }

    return (
      <div
        key={index}
        className={`opacity-0 transform translate-y-4 transition-all duration-300 ease-in-out ${paddingClass}`}
      >
        {box.type === 'title' && <TitleCard title={box.title} />}
        {box.type === 'quote' && (
          <QuoteCard
            quote={box.quote}
            author={box.author}
            company={box.company}
          />
        )}
        {box.type === 'stat' && (
          <StatCard stat={box.stat} description={box.description} />
        )}
      </div>
    );
  };

  return (
    <ScrollFade className="w-full py-12 px-4 sm:px-8 lg:px-20">
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {boxes.map((box, index) => renderBox(box, index))}
      </div>
    </ScrollFade>
  );
};

export default Why;
