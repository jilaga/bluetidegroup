import Image from 'next/image';
import ImageReveal from './ImageReveal';

function page() {
  return (
    <div className="p-4 pt-36 max-w-[1100px] mx-auto">
      <div className="sm:grid grid-rows-[repeat(6,_auto)] grid-cols-[repeat(3,_auto)]">
        <p className="col-start-1 col-end-2 row-start-1 row-end-2 uppercase font-medium text-[#B9B9B9]">
          pictures would convince you
        </p>
        <ImageReveal className="col-start-2 col-end-4 row-start-1 row-end-2">
          <Image
            className="w-full mt-6"
            src="/gallery/img1.png"
            alt="factory"
            width={853}
            height={600}
          />
        </ImageReveal>
        <ImageReveal className="col-start-1 col-end-2 row-start-2 row-end-3">
          <Image
            className="w-full mt-6"
            src="/gallery/img2.png"
            alt="factory"
            width={427}
            height={300}
          />
        </ImageReveal>
        <ImageReveal className="col-start-3 col-end-4 row-start-3 row-end-4">
          <Image
            className="w-full mt-6"
            src="/gallery/img3.png"
            alt="factory"
            width={428}
            height={300}
          />
        </ImageReveal>
        <ImageReveal className="col-start-2 col-end-3 row-start-4 row-end-5">
          <Image
            className="w-full mt-6"
            src="/gallery/img4.png"
            alt="factory"
            width={428}
            height={600}
          />
        </ImageReveal>
        <ImageReveal className="col-start-3 col-end-4 row-start-5 row-end-6">
          <Image
            className="w-full mt-6"
            src="/gallery/img5.png"
            alt="factory"
            width={427}
            height={300}
          />
        </ImageReveal>
        <ImageReveal className="col-start-1 col-end-2 row-start-5 row-end-7">
          <Image
            className="w-full mt-6"
            src="/gallery/img6.png"
            alt="factory"
            width={427}
            height={600}
          />
        </ImageReveal>
      </div>
    </div>
  );
}

export default page;
