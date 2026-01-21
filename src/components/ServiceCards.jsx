import React from 'react';
import { MoveRight } from 'lucide-react';
import RevealCards from '@/Animations/RevealCards';

const services = [
  {
    title: "3D Design & Animation",
    description: "Websites that don't just look stunning—they lead, persuade, and convert. Each journey mapped for delight.",
    bgColor: "bg-[#FFE8E2]",
    gridColor: "bg-[#FFD8CC]",
    image: "/service_card-2.svg",
  },
  {
    title: "Motion Design & Animation",
    description: "Seamlessly elegant apps your users will love. Fluid. Intuitive. Loyal to your brand, loyal to their needs.",
    bgColor: "bg-[#E6FFD9]",
    gridColor: "bg-[#D9F9B1]",
    image: "/service_card-2.svg",
  },
  {
    title: "Startup Branding",
    description: "Scroll-stopping visuals that spark engagement and define your digital presence.",
    bgColor: "bg-[#CEEBFF]",
    gridColor: "bg-[#C2E5FF]",
    image: "/service_card-3.svg",
  },
  {
    title: "MVP Development",
    description: "Striking graphics—crafted to connect, resonate, and elevate your brand's story above the noise.",
    bgColor: "bg-[#FFFBB7]",
    gridColor: "bg-[#FFF4B1]",
    image: "/service_card-4.svg",
  }
];

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col">
      {/* Top Card Section */}
      <div className={`${service.bgColor} py-10 h-90 flex flex-col`}>
        <h3 className="text-2xl font-montserrat max-w-3/4 px-4 text-gray-900 mb-6 w-3/4 leading-tight">
          {service.title}
        </h3>
        
        {/* BG Grid Area */}
        <div 
          className={`flex-grow ${service.gridColor} flex items-center justify-center`}
          style={{ 
            backgroundImage: 'linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)', 
            backgroundSize: '15px 15px' 
          }}
        >
          {/* Image Placeholder */}
          <div className="text-6xl opacity-80">
            <img src={service.image} alt="" />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-5 px-1">
        <p className="text-md text-text-muted leading-snug mb-4">
          {service.description}
        </p>
        <MoveRight className="text-black w-6 h-6" />
      </div>
    </div>
  );
};

const ServiceCards = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </RevealCards>
      </div>
    </section>
  );
};

export default ServiceCards;