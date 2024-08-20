// page.tsx
import Company from './components/landing/Company';
import Why from './components/landing/Why';
import Innovation from './components/landing/Innovation';
import Partners from './components/landing/Partners';
import Services from './components/landing/Services';
import Brands from './components/landing/Brands';
import FAQ from './components/landing/Faqs';
import Choose from './components/landing/Choose';
import Newsec from './components/Newsec';


export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-4 ">
      {/* <Hero /> */}
      <Newsec />
      <Company />
      <Partners />
      <Innovation />
      <Why />
      <Brands />
      <FAQ />
      <Choose />
    </main>
  );
}