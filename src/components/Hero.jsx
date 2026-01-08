import React from 'react';
import { Mouse } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full p-3 md:p-4 font-instrument">
      <div className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden rounded-hero bg-primary shadow-2xl">
         
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <h1 className="max-w-6xl font-instrument text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-[88px] xl:text-[96px]">
            Award winning <br className="hidden md:block" />
            <span className="opacity-90">Design agency bridging</span> <br className="hidden md:block" />
            <span>product, brand & people</span>
          </h1>
          
          <p className="mt-6 max-w-2xl font-sans text-base tracking-wide text-blue-100/80 md:mt-10 md:text-xl">
            Transforming Bold Ideas into Exceptional Digital Experiences
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
          <div className="flex h-12 w-20 items-center justify-center rounded-t-full bg-bg-soft md:h-16 md:w-28">
            <Mouse size={24} className="rotate-180 text-primary" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;