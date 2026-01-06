import React from 'react';
import PortfolioGrid from './Utils/PortfolioGrid';
import SlideButton from './Utils/SlideButton';

const Works = () => {
  const otherPillars = [
    { id: 2, title: "UI/UX & Design Systems", color: "bg-[#B0FF87]" },
    { id: 3, title: "Branding & Social Media", color: "bg-[#93D1FF]" },
    { id: 4, title: "Apps & SaaS Development", color: "bg-[#FFF773]" }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side */}
        <div className="flex flex-col h-full justify-between py-6">
          <div>
            <h2 className="text-5xl md:text-6xl text-[#1A1A1A] mb-8 font-instrument">
              Our Core Pillars
            </h2>
            <p className="text-gray-600 font-open-sans text-xl max-w-md leading-normal">
              Join our curated collection of digital masterpieces where each project showcases our expertise in designing visually stunning, strategically driven experiences proven to achieve results.
            </p>
          </div>
          
          <div className="">
            <img 
              src="/mat.png" 
              alt="Illustration" 
              className="w-full max-w-[320px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col">
          
          {/* Card 1 */}
          <div className="bg-[#FFD978] rounded-2xl p-10 flex flex-col min-h-[500px]">
            <h3 className="text-2xl font-montserrat text-black/90">
              1. Website & Web Apps
            </h3>
            
            <div className="mt-auto">
              <p className="text-black/70 font-open-sans text-md leading-normal mb-6 max-w-sm">
                Join our curated collection of digital masterpieces where each project showcases our expertise in designing visually stunning, strategically driven experiences proven to achieve results.
              </p>
              
              <SlideButton />
            </div>
          </div>

          {/* Other Cards */}
          {otherPillars.map((pillar) => (
            <div 
              key={pillar.id}
              className={`${pillar.color} rounded-2xl p-6`}
            >
              <h3 className="text-2xl font-montserrat text-black/90">
                {pillar.id}. {pillar.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

        <PortfolioGrid />
    </section>
  );
};

export default Works;