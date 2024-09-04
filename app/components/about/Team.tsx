import React from 'react';
import Image from 'next/image';
import ScrollFade from '@/utils/SlideFade';

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
    className={`flex w-full flex-col sm:flex-row items-start justify-end  p-2 lg:p-10  ${reverse ? 'sm:flex-row-reverse' : ''} mb-10 sm:mb-0`}
  >
    <div className="image w-full sm:w-1/2">
      <Image
        src={imageSrc}
        alt={name}
        width={462}
        height={600}
        className="w-full rounded-3xl object-cover h-[600px]"
      />
    </div>
    <div className="txt w-full sm:w-1/2 h-auto sm:h-[600px] no-wrap p-1 sm:p-10 flex flex-col items-start justify-end">
      <div className={`text-left ${reverse ? 'sm:text-right' : ''} w-full`}>
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
    <ScrollFade
      threshold={0.2}
      duration={0.2}
      delay={0.2}
      className="w-full relative flex gap-4 flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start py-10 lg:py-30 px-6 lg:px-20 text-foundation-grey-grey-100 font-title-1-semibold"
    >
      <div className="w-full flex text-center py-2 flex-col lg:w-1/4 mb-10 sm:mb-0">
        <h2 className="text-sm sm:text-xl tracking-wider uppercase font-medium">
          our core team
        </h2>
      </div>
      <div className="w-full lg:w-1/2">
        <TeamMember
          name="Ifeanyi Enyia"
          position="Founder and CEO"
          imageSrc="/about/image.png"
        />
        <TeamMember
          name="Nwamaka Ndukwe"
          position="Operations Manager"
          imageSrc="/about/image-1.png"
          reverse
        />
        <TeamMember
          name="Udoka Okuofu"
          position="Business Development Manager"
          imageSrc="/about/image-2.png"
        />
      </div>
    </ScrollFade>
  );
}
