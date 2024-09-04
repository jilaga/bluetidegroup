import { HiOutlineArrowRightCircle } from 'react-icons/hi2';
import CustomButton from '../Button';
import ScrollFade from '@/utils/SlideFade';

export default function Choose() {
  return (
    <ScrollFade
      className="w-full relative overflow-hidden flex flex-col items-center justify-center py-10 px-5 md:px-20 box-border
        animate-fade-in-up"
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-8">
        <div className="relative leading-[180%] flex flex-col gap-10 font-semibold  text-left text-[4.5rem] md:text-5xl lg:text-6xl text-gray">
          <ScrollFade className="m-0 text-[4.5rem] font-h1-semibold ">
            Choose efficiency,
          </ScrollFade>
          <ScrollFade className="m-0 text-[4.5rem] font-h1-semibold ">
            become our valued partner.
          </ScrollFade>
        </div>
        <ScrollFade>
          <CustomButton
            bgColor=""
            borderColor="border-accent"
            textColor="text-accent"
            iconColor="text-accent"
            buttonText="let’s talk"
          />
        </ScrollFade>
      </div>
    </ScrollFade>
  );
}
