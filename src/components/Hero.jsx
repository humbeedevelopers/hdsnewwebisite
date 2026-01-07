import React from 'react';
import { Plus, ArrowUpRight, Mouse } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full p-3 md:p-4 font-instrument">
      <div className="relative flex min-h-[90vh] w-full flex-col items-center justify-between overflow-hidden rounded-hero bg-primary shadow-2xl">
        
        {/* Navigation Bar */}
        <nav className="z-20 mt-6 flex w-[90%] items-center justify-between rounded-full bg-bg-soft/95 backdrop-blur-md px-4 py-2 shadow-lg sm:w-[80%] md:w-[70%] lg:w-[45%] xl:w-[35%]">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
            <img className="h-5 w-auto md:h-6" src="/logo.png" alt="Agency Logo" />
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-white active:scale-95 md:px-5 md:text-sm">
              Book a call <ArrowUpRight size={14} />
            </button>
            <button className="rounded-full border-2 border-surface p-1.5 md:p-2 text-surface">
              <Plus size={18} />
            </button>
          </div>
        </nav>

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
        <div className="relative z-10 mb-[-1px]">
          <div className="flex h-12 w-20 items-center justify-center rounded-t-full bg-bg-soft md:h-16 md:w-28">
            <Mouse size={24} className="rotate-180 text-primary" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;