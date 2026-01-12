import Image from 'next/image';
import React from 'react';
import profileImage from "../../public/portfolio-2.jpg";

const Highlights = () => {
  return (
    <section className="relative w-full overflow-hidden lg:py-16">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl flex flex-col gap-24 md:gap-32">
        {/* Text Header */}
        <header className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#E0E0E0] leading-normal">
            <span className="text-primary">
              We’re not just numbers—we’re a supportive team and passionate people&nbsp;
            </span>
            who love web, apps, social media, animations and thrive in making the experience more fun & meaningful
          </h2>
        </header>

        {/* About Jay Sir */}
        <article className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
            <blockquote className="font-instrument font-light text-2xl md:text-3xl lg:not-italic leading-tight text-text-main">
              “In a world where every second counts, we design with intention to maximize dwell time”
            </blockquote>
            
            <p className="font-open-sans text-gray-600 leading-relaxed text-base md:text-lg max-w-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur assumenda a iste repellendus 
              aspernatur praesentium porro dolor magnam distinctio perferendis sunt libero placeat quibusdam 
              soluta amet quam, impedit nobis officia!
            </p>
            
            <footer>
              <h4 className="font-semibold text-xl text-text-main">Jay Patel</h4>
              <p className="font-light text-gray-500">The one with the steering wheel</p>
            </footer>
          </div>

          <div className="relative order-1 lg:order-2 w-full max-w-md aspect-square lg:aspect-1">
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={profileImage}
                alt="Jay Patel - Founder and Creative Lead"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 hover:scale-105"
                placeholder="blur" 
              />
            </div>
          </div>
        </article>

        {/* Text Footer */}
        <footer className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#E0E0E0] leading-normal">
            <span className="text-primary">
              We exist to Deliver 360 approach&nbsp;
            </span>
            from design to development
          </h2>
        </footer>

      </div>
    </section>
  );
};

export default Highlights;