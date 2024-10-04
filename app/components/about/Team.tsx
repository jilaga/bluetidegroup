import React from 'react';
import Image from 'next/image';
import ScrollFade from '@/utils/SlideFade';
import Smallie from '../Smallie';

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
  reverse?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  imageSrc,
  reverse = false,
}) => (
  <div
    className={`flex w-full flex-col lg:flex-row items-start justify-end  p-2  ${reverse ? 'lg:flex-row-reverse' : ''} mb-10 sm:mb-0`}
  >
    <ScrollFade className="w-full ">
      <Image
        src={imageSrc}
        alt={name}
        width={462}
        height={600}
        className="w-full rounded-3xl object-cover h-[600px]"
      />
    </ScrollFade>
    <div className="txt w-full sm:w-full h-auto lg:h-[600px] no-wrap p-1 sm:p-10 flex flex-col items-start justify-end">
      <div className={`text-left ${reverse ? 'lg:text-right' : ''} w-full`}>
        <ScrollFade className="text-3xl font-semibold text-foundation-grey-grey-500 mb-2">
          {name}
        </ScrollFade>
        <ScrollFade className="text-xl uppercase font-medium text-accent">
          {position}
        </ScrollFade>
      </div>
    </div>
  </div>
);

export function Team() {
  return (
    <div
      className="w-full flex-col sm:flex-row relative flex gap-4 lg:gap-[7.75rem] items-start justify-start py-[2.5rem] px-[1.5rem] sm:px-[2.5rem] sm:py-[5rem] lg:py-[7.5rem] lg:px-[5rem] 
      text-foundation-grey-grey-100 font-title-1-semibold "
    >
      <Smallie text="our core team" />
      <div className="w-full max-w-[1000px] mx-auto">
        <TeamMember
          name="Ifeanyi Enyia"
          position="Founder and CEO"
          imageSrc="/about/image.png"
        />
        <TeamMember
          name="Chris Davis"
          position="survey operations director"
          imageSrc="/about/Chris.png"
          reverse
        />

        <TeamMember
          name="Udoka Okuofu"
          position="Business Development Manager"
          imageSrc="/about/image-2.png"
        />
        <TeamMember
          name="Nwamaka Ndukwe"
          position="Operations Manager"
          imageSrc="/about/image-1.png"
          reverse
        />
        <TeamMember
          name="Ibiwari Jack"
          position="finance Manager"
          imageSrc="/about/ibiwari.png"
        />
        <TeamMember
          name="Wodo-Charles Lifefest Edna"
          position="Corporate affairs officer"
          imageSrc="/about/Wodo.png"
          reverse
        />
      </div>
    </div>
  );
}
