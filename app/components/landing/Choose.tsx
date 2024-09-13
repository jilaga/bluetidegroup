import * as motion from 'framer-motion/client';
import CustomButton from '../Button';
import ScrollFade from '@/utils/SlideFade';

export default function Choose() {
  return (
    <ScrollFade className="w-full relative overflow-hidden flex flex-col items-center justify-center py-20 sm:pt-60 px-5 md:px-20 box-border animate-fade-in-up max-w-[1440px] mx-auto">
      <div className="self-stretch flex flex-col items-start justify-start gap-8">
        <div className="relative flex flex-col gap-2 sm:gap-5 lg:gap-7 font-semibold text-left text-gray">
          <ScrollFade className="m-0 font-clash text-3xl sm:text-7xl lg:text-8xl">
            Let&apos;s support your operations with expert care and precision.
          </ScrollFade>
        </div>
        <ScrollFade>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-max"
          >
            <CustomButton
              bgColor=""
              borderColor="border-accent"
              textColor="text-accent"
              iconColor="text-accent"
              buttonText="Let's Talk"
            />
          </motion.div>
        </ScrollFade>
      </div>
    </ScrollFade>
  );
}
