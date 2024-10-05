'use client';

import {
  useMotionValue,
  useTransform,
  animate,
  motion,
  useInView,
} from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

function Why() {
  return (
    <div className="w-full p-6 text-[#1E1E1E] mx-auto md:flex md:justify-center gap-4 lg:gap-10 md:px-[40px] lg:px-[80px] bg-white relative">
      <div className="md:w-1/3 lg:gap-10 flex flex-col max-w-[500px] md:max-w-[unset] mx-auto md:mx-0">
        <div className="bg-[#FF6700] p-6 w-full font-thin text-white min-h-80 md:min-h-[220px] lg:min-h-80 grid place-content-center rounded-3xl text-5xl md:text-[2.25rem] text-center">
          <p>Why</p>
          <p>us?</p>
        </div>
        <QuoteCard>Unmatched safety record</QuoteCard>
        <StatCard description="years of experience" stat={8} />
      </div>
      <div className="md:w-1/3 md:mt-62  lg:gap-10 flex flex-col self-center max-w-[500px] md:max-w-[unset] mx-auto md:mx-0">
        <StatCard description="projects completed" stat={34} />
        <QuoteCard>State-of-the-art ROV technology</QuoteCard>
      </div>
      <div className="md:w-1/3 md:mt-20 lg:gap-10 flex flex-col max-w-[500px] md:max-w-[unset] mx-auto md:mx-0">
        <QuoteCard>Customized inspection solutions</QuoteCard>
        <StatCard description="equipment leased" stat={300} />
        <QuoteCard>Real-time data delivery</QuoteCard>
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
  const rounded = useTransform(
    count,
    (latest) => `${Math.round(latest)}`.padStart(2, '0') + '+'
  );
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
      animate(count, stat, { duration: 3 });
    }
  }, [isPInView, isInView]);

  return (
    <div
      ref={ref}
      className="bg-[#E6F1FD] p-6 sm:p-8 md:p-4 lg:p-8 w-full font-clash min-h-80 md:min-h-[220px] lg:min-h-80 grid place-content-center rounded-3xl text-5xl md:text-sm lg:text-5xl tracking-[0.03em] leading-[140%] text-center mt-4"
    >
      <motion.p
        ref={pRef}
        className="text-[#FF6700] text-7xl md:text-6xl lg:text-7xl font-semibold"
      >
        {rounded}
      </motion.p>
      <p className="uppercase mt-3">{description}</p>
    </div>
  );
};

const QuoteCard = function ({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#B0D3FA] p-6 sm:p-8 md:p-5 lg:p-8 w-full min-h-80 md:min-h-[220px] lg:min-h-80 flex justify-center items-center text-center rounded-3xl text-5xl md:text-sm lg:text-5xl mt-4 ">
      <p className="font-medium font-clash text-[1.3rem] md:text-[1.rem] lg:text-[2.38rem] tracking-[0.03em] leading-[140%]">
        &quot;{children}&quot;
      </p>
    </div>
  );
};

export default Why;
