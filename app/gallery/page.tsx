import Image from 'next/image';
import ImageReveal from './ImageReveal';
import ScrollFade from '@/utils/SlideFade';
import Smallie from '../components/Smallie';

function page() {
  return (
    <div
      className="pt-[20rem] px-[1.5rem] md:px-[2.5rem] lg:px-[5rem] pb-[2rem] sm:pb-[2.5rem] md:pb-[4rem]
       max-w-[1440px] w-full mx-auto gap-[2rem] sm:gap-[2.55rem] lg:gap-[7.5rem] text-left"
    >
      <div className="sm:grid grid-rows-[repeat(9,_auto)] grid-cols-[repeat(3,_auto)]">
        <Smallie
          text="pictures would convince you"
          className="col-start-1 col-end-2 row-start-1 row-end-2 "
        />
        <ImageReveal className="col-start-2 col-end-4 row-start-1 row-end-2">
          <ScrollFade>
            <Image
              className="w-full mt-6"
              src="/gallery/img1.png"
              alt="factory"
              width={853}
              height={600}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-1 col-end-2 row-start-2 row-end-3">
          <ScrollFade>
            <Image
              className="w-full mt-6"
              src="/gallery/img2.png"
              alt="factory"
              width={427}
              height={300}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-3 col-end-4 row-start-3 row-end-4">
          <ScrollFade>
            <Image
              className="w-full mt-6"
              src="/gallery/img3.png"
              alt="factory"
              width={428}
              height={300}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-2 col-end-3 row-start-4 row-end-5">
          <ScrollFade>
            <Image
              className="w-full mt-6"
              src="/gallery/img4.png"
              alt="factory"
              width={428}
              height={600}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-3 col-end-4 row-start-5 row-end-6">
          <ScrollFade>
            <Image
              className="w-full mt-6"
              src="/gallery/img5.png"
              alt="factory"
              width={427}
              height={300}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-1 col-end-2 row-start-5 row-end-7">
          <ScrollFade>
            <Image
              className="w-full mt-6"
              src="/gallery/img6.png"
              alt="factory"
              width={427}
              height={600}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-2 col-end-3 row-start-7 row-end-8">
          <ScrollFade>
            <Image
              className="w-full mt-6"
              src="/gallery/img4.png"
              alt="factory"
              width={428}
              height={600}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-1 col-end-2 row-start-8 row-end-9">
          <ScrollFade>
            <Image
              className="w-full mt-6"
              src="/gallery/img2.png"
              alt="factory"
              width={427}
              height={300}
            />
          </ScrollFade>
        </ImageReveal>
        <ImageReveal className="col-start-3 col-end-4 row-start-9 row-end-10">
          <ScrollFade>
            <Image
              className="w-full mt-6"
              src="/gallery/img3.png"
              alt="factory"
              width={428}
              height={300}
            />
          </ScrollFade>
        </ImageReveal>
      </div>
    </div>
  );
}

export default page;
