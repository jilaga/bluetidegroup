// page.tsx
import Company from './components/landing/Company';
import Why from './components/landing/Why';
import Partners from './components/landing/Partners';
import Brands from './components/landing/Brands';
import FAQ from './components/landing/Faqs';
import Newsec from './components/Newsec';
import OurServicesPage from './components/landing/Services';
import Innovation from './components/landing/Innovation';

export default function Home() {
  return (
    <main className="antialiased w-full sm:max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-4">
      <Newsec />
      <Company />
      <Partners />
      <OurServicesPage />
      <Innovation />
      <Why />
      <Brands />
      <FAQ />
    </main>
  );
}
