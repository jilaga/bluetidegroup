import Image from 'next/image';
function page() {
  return (
    <div className="p-4 pt-36 max-w-[1100px] mx-auto">
      <div className="grid grid-rows-[repeat(6,_auto)] grid-cols-[repeat(3,_auto)]">
        <p className="col-start-1 col-end-2 row-start-1 row-end-2 uppercase font-medium text-[#B9B9B9]">
          pictures would convince you
        </p>
        <Image
          src="/gallery/img1.png"
          className="col-start-2 col-end-4 row-start-1 row-end-2"
          alt="factory"
          width={853}
          height={600}
        />
        <Image
          src="/gallery/img2.png"
          className="col-start-1 col-end-2 row-start-2 row-end-3"
          alt="factory"
          width={427}
          height={300}
        />
        <Image
          src="/gallery/img3.png"
          className="col-start-3 col-end-4 row-start-3 row-end-4"
          alt="factory"
          width={428}
          height={300}
        />
        <Image
          src="/gallery/img4.png"
          className="col-start-2 col-end-3 row-start-4 row-end-5"
          alt="factory"
          width={428}
          height={600}
        />
        <Image
          src="/gallery/img5.png"
          className="col-start-3 col-end-4 row-start-5 row-end-6"
          alt="factory"
          width={427}
          height={300}
        />
        <Image
          src="/gallery/img6.png"
          className="col-start-1 col-end-2 row-start-5 row-end-7"
          alt="factory"
          width={427}
          height={600}
        />
      </div>
    </div>
  );
}

export default page;
