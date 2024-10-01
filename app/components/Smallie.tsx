import React from 'react'

interface SmallieProps {
  text: string
}

function Smallie({ text }: SmallieProps) {
  return (
    <div className="w-[362px] ">
      <p className=" text-[0.875rem] sm:text-[1rem] sm:tracking-[0.03em] uppercase font-medium font-clash text-foundation-grey-grey-100 text-left ">
        {text}
      </p>
    </div>
  );
}

export default Smallie