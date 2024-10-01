import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SmallieProps {
  text: string;
  className?: string;
}

function Smallie({ text, className = '' }: SmallieProps) {
  return (
    <div className={twMerge('w-[362px]', className)}>
      <p className=" text-[0.875rem] sm:text-[1rem] sm:tracking-[0.03em] uppercase font-medium font-clash text-foundation-grey-grey-100 text-left ">
        {text}
      </p>
    </div>
  );
}

export default Smallie;
