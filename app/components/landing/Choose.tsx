
import { HiOutlineArrowRightCircle } from "react-icons/hi2";

export default function Choose() {
  return (
    <section className="w-full relative overflow-hidden flex flex-col items-center justify-center py-10 px-5 md:px-10 box-border text-left text-4xl md:text-5xl lg:text-6xl text-gray font-h1-semibold animate-fade-in-up">
      <div className="self-stretch flex flex-col items-start justify-start gap-3">
        <div className="max-w-4xl relative leading-[140%] font-medium inline-block">
          <p className="m-0">Choose efficiency,</p>
          <p className="m-0">become our valued partner.</p>
        </div>
		
		<button className=' gap-2 w-full sm:w-[12%] flex justify-between sm:justify-center items-center relative p-4 text-center border rounded-full text-[1rem] text-foundation-rust-accent-rust-accent-500'>
			Read more
			<HiOutlineArrowRightCircle  className="size-12 sm:size-8" 
			style={{ strokeWidth: 0.5 }} />
		</button>
      </div>
    </section>
  );
}
