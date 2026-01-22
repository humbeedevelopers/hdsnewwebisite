import Image from "next/image";
import React from "react";
import profileImage from "../../public/portfolio-2.jpg";
import ScrollFillText from "./Utils/ScrollFillText";

const Highlights = () => {
  const Htext = "We're not just numbers—we're a supportive team and passionate people who love web, apps, social media, animations and thrive in making the experience more fun & meaningful.";
  const Ftext = "We exist to deliver 360° approach from design to development"

  return (
    <section className="relative w-full overflow-hidden py-16">
      <div className="container mx-auto max-w-7xl px-6 md:px-10 flex flex-col gap-32">
        
        {/* Header Text */}
        <header className="max-w-4xl mx-auto text-center">
          <ScrollFillText text={Htext} pin />
        </header>

        {/* About Section */}
        <article className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 py-12">
          
          {/* Text Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            
            <div className="group">              
              <blockquote className="relative font-instrument font-light text-2xl md:text-4xl leading-[1.15] text-text-main">
                “In a world where every second counts, we design with intention to maximize dwell time”
              </blockquote>
            </div>

            <p className="font-open-sans text-text-muted text-base md:text-lg leading-relaxed max-w-xl border-l-2 border-gray-100 lg:pl-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              assumenda a iste repellendus aspernatur praesentium porro dolor
              magnam distinctio perferendis sunt libero placeat quibusdam soluta
              amet quam impedit nobis officia.
            </p>

            <footer className="space-y-1">
              <h4 className="font-semibold text-xl tracking-tight text-text-main">
                Jay Patel
              </h4>
              <p className="text-gray-400 font-light text-sm uppercase tracking-widest">
                The one with the steering wheel
              </p>
            </footer>
          </div>

          {/* Image Column */}
          <div className="relative w-full max-w-md aspect-square order-1 lg:order-2">
            {/* Background Decorative Element (The "Enhancement") */}
            <div className="absolute -inset-4 bg-gray-50 rounded-[2.5rem] -rotate-3 transition-transform duration-700 group-hover:rotate-0" />
            
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              <Image
                src={profileImage}
                alt="Jay Patel - Founder and Creative Lead"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                placeholder="blur"
                priority
              />
              
              {/* Subtle Overlay Gradient for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

        </article>

        {/* Footer Text */}
        <footer className="max-w-4xl mx-auto text-center">
          <ScrollFillText text={Ftext} pin={false} />
        </footer>

      </div>
    </section>
  );
};

export default Highlights;
