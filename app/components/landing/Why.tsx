'use client';

import {
  useMotionValue,
  useTransform,
  animate,
  motion,
  useInView,
} from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

const boxes = [
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
function Why() {
  return (
    <div className="w-full p-4 text-[#1E1E1E] max-w-[500px] mx-auto md:flex md:max-w-[unset] gap-4 md:px-[80px]">
      <div className="md:w-1/3">
        <div className="bg-[#FF6700] p-4 w-full text-white min-h-80 grid place-content-center rounded-3xl text-5xl text-center">
          <p>Why</p>
          <p>us?</p>
        </div>
        <QuoteCard author="john doe" position="CEO of Marine  Ltd">
          They&apos;re a reliable partner, delivering exceptional results every
          time.
        </QuoteCard>
        <StatCard description="years of experience" stat={8} />
      </div>
      <div className="md:w-1/3 md:mt-60">
        <StatCard description="projects completed" stat={34} />
        <QuoteCard author="john doe" position="CEO of Marine  Ltd">
          They&apos;re a reliable partner, delivering exceptional results every
          time.
        </QuoteCard>
      </div>
      <div className="md:w-1/3 md:mt-40">
        <QuoteCard author="john doe" position="CEO of Marine  Ltd">
          They&apos;re a reliable partner, delivering exceptional results every
          time.
        </QuoteCard>
        <StatCard description="equipment leased" stat={300} />
        <QuoteCard author="john doe" position="CEO of Marine  Ltd">
          They&apos;re a reliable partner, delivering exceptional results every
          time.
        </QuoteCard>
      </div>
    </div>
  );
}

const StatCard = function ({
  stat,
  description,
}: {
  stat: number;
  description: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + '+');
  const ref = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { amount: 'all' });
  const isPInView = useInView(ref);

  useEffect(() => {
    if (!isPInView) {
      count.set(0);
      return;
    }
    if (isInView) {
      const controls = animate(count, stat, { duration: 3 });

      return () => controls.stop();
    }
  }, [isPInView, isInView]);

  return (
    <div
      ref={ref}
      className="bg-[#E6F1FD] p-4 md:p-8 w-full font-clash min-h-80 grid place-content-center rounded-3xl text-5xl text-center mt-4"
    >
      <motion.p ref={pRef} className="text-[#FF6700] text-7xl font-semibold">
        {rounded}
      </motion.p>
      <p className="uppercase mt-3">{description}</p>
    </div>
  );
};

const QuoteCard = function ({
  children,
  author,
  position,
}: {
  children: ReactNode;
  author: string;
  position: string;
}) {
  return (
    <div className="bg-[#B0D3FA] p-4 md:p-8 w-full min-h-80 grid grid-rows-[1fr_auto_auto] rounded-3xl text-5xl font-clash mt-4 ">
      <p className="font-normal">&quot;{children}&quot;</p>
      <p className="uppercase font-medium">{author},</p>
      <p className="uppercase font-medium">{position}.</p>
    </div>
  );
};

export default Why;
