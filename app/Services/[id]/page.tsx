import { GetStaticPaths, GetStaticProps } from 'next';
import { servicesData, ServiceData } from '../data';

const ServicePage = ({ params }: { params: { id: string } }) => {
  const service = servicesData.find((service) => service.id === params.id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <img src={service.imgUrl} alt={service.title} />
      <p>{service.description}</p>
      <p>{service.intro}</p>
      <p>{service.paragraph}</p>
      <img src={service.imgUrl2} alt={`${service.title} Image 2`} />
      <p>{service.paragraph2}</p>
      <img src={service.imgUrl3} alt={`${service.title} Image 3`} />
      <p>{service.paragraph3}</p>
      <p>Author: {service.author}</p>
      <p>Date: {service.date?.toLocaleDateString()}</p>
    </div>
  );
};

export default ServicePage;
