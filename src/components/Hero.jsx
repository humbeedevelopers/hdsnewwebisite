import React from 'react';
import { Mouse } from 'lucide-react';

const Hero = () => {
  const cutoutRadius = 'clamp(40px, 8vw, 50px)'; 

  return (
    <section className="min-h-screen w-full p-3 font-instrument flex flex-col">
        <div 
          className="relative min-h-[85vh] md:min-h-[110vh] w-full rounded-hero bg-primary flex items-center justify-center px-4"
          style={{
            WebkitMaskImage: `radial-gradient(circle at bottom center, transparent ${cutoutRadius}, black calc(${cutoutRadius} + 1px))`,
            maskImage: `radial-gradient(circle at bottom center, transparent ${cutoutRadius}, black calc(${cutoutRadius} + 1px))`
          }}>
            
            <div className='flex flex-col gap-4 md:gap-5 text-center text-bg-light w-full max-w-6xl'>
              <h1 className='text-[8.5vw] md:text-7xl leading-[1.1] md:leading-tight'>
                <span className='text-head'> Award Winning </span> <br />
                Design Agency bridging <br />
                products, brands and people
              </h1>
              <p className='font-open-sans text-sm md:text-lg max-w-[280px] md:max-w-2xl mx-auto opacity-90'>
                Transforming Bold Ideas into Exceptional Digital Experiences
              </p>
            </div>
          
        </div>

        <div className="flex justify-center -mt-[31px] sm:-mt-[34px] md:-mt-[38px] animate-bounce relative z-10">
          <Mouse 
            size={32} 
            className="text-primary rotate-180" 
          />
        </div>
    </section>
  );
};

export default Hero;