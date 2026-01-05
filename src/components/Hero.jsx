import React from 'react';
import { Plus, ArrowUpRight, Mouse } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen w-full p-4 bg-white font-instrument">
      {/* Blue Container */}
      <div className="relative w-full h-[92vh] rounded-[40px] bg-[#0039C8] flex flex-col items-center justify-between overflow-hidden shadow-2xl">
        
        {/* Navigation Bar */}
        <nav className="mt-8 flex items-center justify-between lg:w-1/3 bg-[#E6E6E6] backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#0039C8] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="font-sans font-medium text-gray-900 tracking-tight">H/DS</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="bg-[#0039C8] text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
              Book a call <ArrowUpRight size={16} />
            </button>
            <button className="p-2 rounded-full border-2 border-gray-800 transition-colors">
              <Plus size={20} className="text-gray-800" />
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center z-10 px-6">
          <h1 className="text-white max-w-5xl text-4xl tracking-normal md:text-7xl md:scale-y-110 lg:text-[84px]">
            Award winning <br className="hidden md:block" />
            Design agency bridging <br className="hidden md:block" />
            product, brand & people
          </h1>
          
          <p className="mt-8 font-sans text-blue-100 text-base md:text-xl tracking-wide max-w-2xl">
            Transforming Bold Ideas into Exceptional Digital Experiences
          </p>
        </div>

        {/* Scroll */}
        <div className="mb-[-1px] z-10">
          <div className="bg-[#E6E6E6] px-8 py-4 rounded-t-full flex items-center justify-center">
              <Mouse size={24} className="rotate-180 text-blue-600" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;