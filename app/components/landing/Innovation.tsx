import React from 'react';

export default function Innovation() {
  return (
    <div className="w-full relative overflow-hidden flex flex-row items-center justify-start gap-[5rem] text-center text-[3.25rem] text-foundation-rust-accent-rust-accent-200 font-h2">
      <div className="w-[90rem] bg-gray h-[48.75rem] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[12.5rem] px-[4rem] box-border">
        <div className="flex flex-col items-center justify-start gap-[0.5rem]">
          <div className="self-stretch relative leading-[140%]">
            To our clients and partners
          </div>
          <div className="self-stretch relative text-[4.5rem] leading-[140%] font-semibold text-foundation-rust-accent-rust-accent-500">{` we offer COMPETENCE & INTEGRITY`}</div>
        </div>
      </div>
      <div className="w-[90rem] bg-gray h-[48.75rem] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[12.5rem] px-[4rem] box-border">
        <div className="flex flex-col items-center justify-start gap-[0.5rem]">
          <div className="self-stretch relative leading-[140%]">
            a section that slides out its content
          </div>
          <div className="self-stretch relative text-[4.5rem] leading-[140%] font-semibold text-foundation-rust-accent-rust-accent-500">
            from right to left
          </div>
        </div>
      </div>
      <div className="w-[90rem] bg-gray h-[48.75rem] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[12.5rem] px-[4rem] box-border">
        <div className="flex flex-col items-center justify-start gap-[0.5rem]">
          <div className="self-stretch relative leading-[140%]">
            avoid overflows
          </div>
          <div className="self-stretch relative text-[4.5rem] leading-[140%] font-semibold text-foundation-rust-accent-rust-accent-500">{`would make the whole screen shift `}</div>
          <div className="self-stretch relative leading-[140%]">
            from left to right
          </div>
        </div>
      </div>
    </div>
  );
}
