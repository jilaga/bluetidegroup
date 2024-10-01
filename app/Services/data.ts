export interface ServiceData {
  id: string;
  imgUrl: string;
  title: string;
  intro?: string;
  paragraph?: string;
  paragraph2?: string;
  paragraph3?: string;

  services?: string[];
  benefits?: string[];
  equipment?: string[];
  industries?: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: '1',
    imgUrl: '/service/serv1.png',
    title: 'ROV Inspection ',
    intro:
      'we provide specialized inspection and maintenance services for Remotely Operated Vehicles (ROVs).',
    paragraph: 'Benefits',
    paragraph2: 'Inspection Capabilities',
    paragraph3: 'Equipment we use',
    services: [
      'Visual inspections',
      'NDT inspections',
      'Marine growth surveys',
    ],
    benefits: [
      'Enhanced accuracy and efficiency',
      'Improved safety and reduced risk',
    ],
    equipment: [
      'High-definition cameras',
      'Manipulator arms',
      'Sonar and acoustic sensors',
    ],
    industries: [
      'Offshore Oil and Gas',
      'Renewable Energy',
      'Construction and Infrastructure',
    ],
  },

  {
    id: '2',
    imgUrl: '/service/serv3.png',
    title: 'ROV Inspection',
    intro:
      'ROVs are pivotal in subsea operations, offering precise control and flexibility.',
    paragraph: 'Benefits',
    paragraph2: 'Inspection Capabilities',
    paragraph3: 'Equipment we use',
    
    services: [
      'Visual inspections',
      'NDT inspections',
      'Marine growth surveys',
    ],
    benefits: [
      'Enhanced accuracy and efficiency',
      'Improved safety and reduced risk',
    ],
    equipment: [
      'High-definition cameras',
      'Manipulator arms',
      'Sonar and acoustic sensors',
    ],
    industries: [
      'Offshore Oil and Gas',
      'Renewable Energy',
      'Construction and Infrastructure',
    ],
  },
  {
    id: '3',
    imgUrl: '/service/serv2.png',
    title: 'Mesotec',
    intro:
      'Mesotec provides cutting-edge solutions for underwater measurement and analysis.',
    paragraph:
      'Mesotec devices are designed for precise underwater measurement, providing critical data for marine research, construction, and environmental monitoring. These tools measure various parameters such as pressure, temperature, and salinity, giving scientists and engineers the ability to monitor and manage underwater conditions accurately.',
    paragraph2:
      'These systems are used in both shallow and deep-water applications, supporting projects ranging from habitat assessments to underwater infrastructure monitoring. The accuracy and durability of Mesotec tools make them a go-to choice for complex marine operations.',
    paragraph3:
      'With advanced features like real-time data collection and remote monitoring, Mesotec tools ensure efficiency and reliability in critical underwater missions.',
  },
  {
    id: '4',
    imgUrl: '/service/serv1.png',
    title: 'Cavit Blasters',
    intro:
      'Cavit Blasters offer effective solutions for marine cleaning and maintenance.',
    paragraph:
      'Cavit Blasters use high-pressure cavitation to remove marine growth, biofouling, and other unwanted debris from underwater surfaces. These systems are particularly effective in cleaning ship hulls, pipelines, and offshore platforms, improving the efficiency and lifespan of underwater equipment.',
    paragraph2:
      'The high-pressure water jets used in Cavit Blasters can reach areas that are difficult for traditional cleaning methods, ensuring thorough removal of contaminants without damaging the underlying surface.',
    paragraph3:
      'Cavit Blasters are a preferred solution in industries such as shipping, oil and gas, and marine research, where maintaining clean underwater surfaces is essential for optimal performance and safety.',
  },
  {
    id: '5',
    imgUrl: '/service/serv3.png',
    title: 'Autonomous Underwater Vehicles (AUVs)',
    intro:
      'AUVs are key players in autonomous underwater exploration and data gathering.',
    paragraph:
      'Autonomous Underwater Vehicles (AUVs) are designed to operate independently, gathering data and performing tasks such as mapping, surveying, and environmental monitoring. These vehicles can operate in areas where it is difficult or dangerous for human divers to reach.',
    paragraph2:
      'AUVs are commonly used in applications such as seabed mapping, resource exploration, and oceanographic studies. They are equipped with various sensors, cameras, and sonar systems to collect detailed data during their missions.',
    paragraph3:
      'With the rise of autonomous technology, AUVs are becoming more efficient, capable of longer missions, deeper dives, and more complex tasks, making them invaluable tools in the future of ocean exploration.',
  },
  {
    id: '6',
    imgUrl: '/service/serv3.png',
    title: 'Compressors',
    intro:
      'Compressors provide the necessary air supply for diving operations.',
    paragraph:
      'They are critical in maintaining the safety and efficiency of underwater work.',
    paragraph2:
      'Compressors are used in various underwater applications, including diving and salvage operations.',
    paragraph3:
      'Their reliability is crucial in ensuring the success of subsea missions.',
  },
];
