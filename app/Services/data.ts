export interface ServiceData {
  id: string;
  imgUrl: string;
  imgUrl2?: string;
  imgUrl3?: string;
  title: string;
  description: string;
  link?: string;
  author?: string;
  date?: Date;
  intro?: string;
  paragraph?: string;
  paragraph2?: string;
  paragraph3?: string;
}

export const servicesData: ServiceData[] = [
  {
    id: '1',
    imgUrl: '/service/serv2.png',
    title: 'Multibeam Sonars',
    description: 'For detailed mapping and imaging of the seabed.',
    link: '/services/multibeam-sonars',
    author: 'John Doe',
    date: new Date('2024-09-01'),
    imgUrl2: '/services/Multibeam2.png',
    imgUrl3: '/services/Multibeam3.png',
    intro:
      'Multibeam sonars are essential tools in oceanography and marine research.',
    paragraph:
      'Multibeam sonar technology uses multiple sound beams to map the seabed in high detail. This method allows for the creation of precise bathymetric maps, which are critical for marine exploration, underwater construction, and resource management.',
    paragraph2:
      'In addition to mapping, multibeam sonars are used for habitat studies, pipeline inspections, and archaeological surveys. Their versatility and accuracy make them indispensable tools in both scientific and industrial applications.',
    paragraph3:
      'With advancements in sonar technology, modern systems can now provide real-time, high-resolution imaging, enhancing the capabilities of marine researchers and engineers around the world.',
  },
  {
    id: '2',
    imgUrl: '/service/serv3.png',
    title: 'Remotely Operated Vehicles (ROVs)',
    description:
      'Versatile, remotely controlled systems for inspection and intervention tasks.',
    link: '/services/remotely-operated-vehicles',
    author: 'Jane Smith',
    date: new Date('2024-09-01'),
    imgUrl2: '/services/serv1.png',
    imgUrl3: '/services/serv1.png',
    intro:
      'ROVs are pivotal in subsea operations, offering precise control and flexibility.',
    paragraph:
      'Remotely Operated Vehicles (ROVs) are used for a wide range of underwater tasks, including inspections, maintenance, and repairs. Their ability to operate in harsh underwater environments makes them crucial for industries such as oil and gas, marine research, and offshore wind energy.',
    paragraph2:
      'Equipped with cameras, sensors, and manipulators, ROVs provide operators with real-time feedback and the ability to interact with objects in deep-sea environments, making them invaluable in tasks that require human intervention without direct exposure to dangerous conditions.',
    paragraph3:
      'Recent developments in ROV technology have led to greater autonomy and enhanced operational depth, allowing them to carry out complex tasks in challenging underwater environments.',
  },
  {
    id: '3',
    imgUrl: '/service/serv2.png',
    title: 'Mesotec',
    description: 'Advanced tools for precise underwater measurements.',
    link: '/services/serv3.png',
    author: 'Alice Johnson',
    date: new Date('2024-09-01'),
    imgUrl2: '/services/serv2.png',
    imgUrl3: '/services/serv2.png',
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
    description: 'Powerful devices for cleaning and removing marine growth.',
    link: '/services/serv3.png',
    author: 'Bob Williams',
    date: new Date('2024-09-01'),
    imgUrl2: '/service/serv1.png',
    imgUrl3: '/service/serv1.png',
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
    description: 'Autonomous systems for surveying and data collection.',
    link: '/services/serv1.png',
    author: 'Carol Davis',
    date: new Date('2024-09-01'),
    imgUrl2: '/service/serv3.png',
    imgUrl3: '/service/serv3.png',
    intro:
      'AUVs are key players in autonomous underwater exploration and data gathering.',
    paragraph:
      'Autonomous Underwater Vehicles (AUVs) are designed to operate independently, gathering data and performing tasks such as mapping, surveying, and environmental monitoring. These vehicles can operate in areas where it is difficult or dangerous for human divers to reach.',
    paragraph2:
      'AUVs are commonly used in applications such as seabed mapping, resource exploration, and oceanographic studies. They are equipped with various sensors, cameras, and sonar systems to collect detailed data during their missions.',
    paragraph3:
      'With the rise of autonomous technology, AUVs are becoming more efficient, capable of longer missions, deeper dives, and more complex tasks, making them invaluable tools in the future of ocean exploration.',
  },
  //   {
  //     id: '6',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Compressors',
  //     description: 'Essential for diving operations and underwater work.',
  //     link: '/services/compressors',
  //     author: 'David Brown',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Compressors2.png',
  //     imgUrl3: '/services/Compressors3.png',
  //     intro:
  //       'Compressors provide the necessary air supply for diving operations.',
  //     paragraph:
  //       'They are critical in maintaining the safety and efficiency of underwater work.',
  //     paragraph2:
  //       'Compressors are used in various underwater applications, including diving and salvage operations.',
  //     paragraph3:
  //       'Their reliability is crucial in ensuring the success of subsea missions.',
  //   },
  //   {
  //     id: '7',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Subsea Cameras and Lighting',
  //     description: 'High-quality imaging solutions for clear underwater visuals.',
  //     link: '/services/subsea-cameras-and-lighting',
  //     author: 'Eve Martinez',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Subsea2.png',
  //     imgUrl3: '/services/Subsea3.png',
  //     intro:
  //       'Subsea cameras and lighting are essential for underwater inspections.',
  //     paragraph:
  //       'They provide clear and reliable visuals in the challenging conditions of the deep sea.',
  //     paragraph2:
  //       'These tools are used in research, exploration, and industrial inspections.',
  //     paragraph3:
  //       'High-quality imaging is crucial for the success of subsea operations.',
  //   },
  //   {
  //     id: '8',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Underwater Communication Systems',
  //     description: 'Reliable communication tools for underwater operations.',
  //     link: '/services/underwater-communication-systems',
  //     author: 'Frank Wilson',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Underwater2.png',
  //     imgUrl3: '/services/Underwater3.png',
  //     intro: 'Communication is key in underwater operations.',
  //     paragraph:
  //       'These systems enable clear and uninterrupted communication between divers and surface teams.',
  //     paragraph2:
  //       'Underwater communication systems are used in commercial diving, military operations, and research.',
  //     paragraph3:
  //       'Their reliability and clarity are critical for the safety and success of underwater missions.',
  //   },
  //   {
  //     id: '9',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Subsea Winches and Lifting Equipment',
  //     description: 'Robust equipment for handling heavy subsea loads.',
  //     link: '/services/subsea-winches-and-lifting-equipment',
  //     author: 'Grace Hall',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Subsea2.png',
  //     imgUrl3: '/services/Subsea3.png',
  //     intro:
  //       'Subsea winches and lifting equipment are vital in deep-sea operations.',
  //     paragraph:
  //       'They are used to deploy, retrieve, and handle heavy loads in underwater environments.',
  //     paragraph2:
  //       'This equipment is designed to withstand the extreme pressures and conditions of the deep sea.',
  //     paragraph3:
  //       'They play a crucial role in subsea construction, salvage, and exploration.',
  //   },
  //   {
  //     id: '10',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Subsea Valves and Actuators',
  //     description: 'Essential components for controlling subsea systems.',
  //     link: '/services/subsea-valves-and-actuators',
  //     author: 'Hank Lee',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Subsea2.png',
  //     imgUrl3: '/services/Subsea3.png',
  //     intro:
  //       'Subsea valves and actuators control the flow and pressure in underwater systems.',
  //     paragraph:
  //       'They are critical components in the operation of subsea pipelines and production systems.',
  //     paragraph2:
  //       'Their design ensures reliable operation in the harsh conditions of the deep sea.',
  //     paragraph3:
  //       'These components are essential for the safe and efficient operation of subsea infrastructure.',
  //   },
  //   {
  //     id: '11',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Umbilical and Flexible Pipe Solutions',
  //     description:
  //       'Versatile solutions for subsea connections and fluid transfer.',
  //     link: '/services/umbilical-and-flexible-pipe-solutions',
  //     author: 'Ivy Kim',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Umbilical2.png',
  //     imgUrl3: '/services/Umbilical3.png',
  //     intro:
  //       'Umbilicals and flexible pipes are used for fluid transfer and connectivity in subsea systems.',
  //     paragraph:
  //       'They are designed to withstand the extreme pressures and dynamic movements of the deep sea.',
  //     paragraph2:
  //       'These solutions are essential in the operation of subsea production and drilling systems.',
  //     paragraph3:
  //       'Their flexibility and durability are crucial for the success of underwater operations.',
  //   },
  //   {
  //     id: '12',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Seismic Equipment',
  //     description: 'For geophysical exploration and data collection.',
  //     link: '/services/seismic-equipment',
  //     author: 'Jack Nelson',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Seismic2.png',
  //     imgUrl3: '/services/Seismic3.png',
  //     intro:
  //       'Seismic equipment is used in the exploration of underwater geophysical structures.',
  //     paragraph:
  //       'It provides detailed information on the composition and structure of the seabed.',
  //     paragraph2:
  //       'This data is crucial for oil and gas exploration and environmental studies.',
  //     paragraph3:
  //       'Seismic equipment is also used in monitoring seismic activity and assessing geological hazards.',
  //   },
  //   {
  //     id: '13',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Diving Gear and Safety Equipment',
  //     description:
  //       'Full range of safety and diving equipment to support your underwater project.',
  //     link: '/services/diving-gear-and-safety-equipment',
  //     author: 'Laura Scott',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Diving2.png',
  //     imgUrl3: '/services/Diving3.png',
  //     intro: 'Safety is paramount in underwater operations.',
  //     paragraph:
  //       'Diving gear and safety equipment are essential for ensuring the well-being of divers.',
  //     paragraph2:
  //       'This equipment includes everything from wetsuits to oxygen tanks and underwater communication systems.',
  //     paragraph3:
  //       'Reliable gear is crucial for the success and safety of any subsea mission.',
  //   },
  //   {
  //     id: '14',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Subsea Sensors and Monitoring Systems',
  //     description: 'Advanced systems for monitoring and data collection.',
  //     link: '/services/subsea-sensors-and-monitoring-systems',
  //     author: 'Mike Thompson',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Subsea2.png',
  //     imgUrl3: '/services/Subsea3.png',
  //     intro:
  //       'Subsea sensors and monitoring systems collect critical data from underwater environments.',
  //     paragraph:
  //       'They are used in various applications, from environmental monitoring to industrial operations.',
  //     paragraph2:
  //       'These systems provide real-time data that is essential for the safe and efficient operation of subsea infrastructure.',
  //     paragraph3:
  //       'The data collected is used to monitor the condition of subsea equipment and the surrounding environment.',
  //   },
  //   {
  //     id: '15',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Pipe Tracking and Inspection Equipment',
  //     description: 'Tools for tracking and inspecting subsea pipelines.',
  //     link: '/services/pipe-tracking-and-inspection-equipment',
  //     author: 'Nancy Walker',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Pipe2.png',
  //     imgUrl3: '/services/Pipe3.png',
  //     intro:
  //       'Subsea pipelines are critical components of underwater infrastructure.',
  //     paragraph:
  //       'Tracking and inspecting these pipelines ensures their integrity and safe operation.',
  //     paragraph2:
  //       'This equipment is used to detect leaks, corrosion, and other issues that could compromise the pipeline.',
  //     paragraph3:
  //       'Regular inspection is essential for maintaining the safety and efficiency of subsea pipelines.',
  //   },
  //   {
  //     id: '16',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Oceanographic Instruments',
  //     description: 'Tools for measuring and studying oceanographic phenomena.',
  //     link: '/services/oceanographic-instruments',
  //     author: 'Oscar Young',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Oceanographic2.png',
  //     imgUrl3: '/services/Oceanographic3.png',
  //     intro:
  //       'Oceanographic instruments are used to study the physical and chemical properties of the ocean.',
  //     paragraph:
  //       'They provide critical data for understanding ocean currents, temperature, salinity, and more.',
  //     paragraph2:
  //       'This information is essential for climate studies, marine biology, and environmental monitoring.',
  //     paragraph3:
  //       'Oceanographic instruments are also used in the exploration of marine resources.',
  //   },
  //   {
  //     id: '17',
  //     imgUrl: '/service/serv3.png',
  //     title: 'Subsea Construction Equipment',
  //     description:
  //       'All the necessary tools for building and maintaining subsea structures.',
  //     link: '/services/subsea-construction-equipment',
  //     author: 'Paul Clark',
  //     date: new Date('2024-09-01'),
  //     imgUrl2: '/services/Subsea2.png',
  //     imgUrl3: '/services/Subsea3.png',
  //     intro: 'Subsea construction requires specialized equipment.',
  //     paragraph:
  //       'This equipment is designed to operate in the challenging conditions of the deep sea.',
  //     paragraph2:
  //       'It is used for building, repairing, and maintaining subsea structures.',
  //     paragraph3:
  //       'The success of subsea construction projects depends on the reliability and performance of this equipment.',
  //   }
];
