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
        <div className="relative flex flex-col gap-2 sm:gap-5 lg:gap-7 font-semibold text-left text-gray">
          <ScrollFade className="m-0 text-xl sm:text-5xl lg:text-7xl">
            Choose efficiency,
          </ScrollFade>
          <ScrollFade className="m-0 text-xl sm:text-5xl lg:text-7xl">
            become our valued partner.
          </ScrollFade>
        </div>
        <ScrollFade>
          <CustomButton
            bgColor=""
            borderColor="border-accent"
            textColor="text-accent"
            iconColor="text-accent"
            buttonText="Let's Talk"
          />
        </ScrollFade>
      </div>
    </ScrollFade>
  );
}
