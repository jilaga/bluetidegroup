// page.tsx
import Company from './components/landing/Company';
import Partners from './components/landing/Partners';
import Brands from './components/landing/Brands';
import FAQ from './components/landing/Faqs';
import Newsec from './components/Newsec';
import OurServicesPage from './components/landing/Services';
import Innovation from './components/landing/Innovation';
import { OrganizationSchema } from './components/schema/OrganizationSchema';
import { LocalBusinessSchema } from './components/schema/LocalBusinessSchema';
import { FAQSchema } from './components/schema/FAQSchema';
import { faqData } from './components/landing/index';

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqData} />
      <main className="antialiased w-full sm:max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-4">
        <Newsec />
        <Company />
        <Partners />
        <OurServicesPage />
        <Innovation />
        <Brands />
        <FAQ />
      </main>
    </>
  );
}
