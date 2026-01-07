import Image from 'next/image';
import React from 'react';
import profileImage from "../../public/portfolio-2.jpg"

const Highlights = () => {
  return (
    <section className="flex flex-col gap-16 items-center relative w-full py-10 md:py-20 overflow-hidden">
      
      {/* Text Headers */}
      <div className="text-center w-full lg:w-3/5 xl:w-2/5 px-6">
        <p className="text-4xl md:text-5xl font-montserrat font-bold text-[#E0E0E0] leading-tight md:leading-normal">
          <span className="text-[#023E8A]">
            We’re not just numbers—we’re a supportive team and passionate &nbsp;
          </span>
          people who love web, apps, social media, animations and thrive in making the experience more fun & meaningful
        </p>
      </div>

      {/* About Jay Sir */}
      <div className="flex flex-col lg:flex-row mt-5 items-center justify-center gap-10 lg:gap-20 w-full px-6 md:px-10 max-w-7xl mx-auto">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-10 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
          <h3 className="font-instrument font-light text-2xl md:text-3xl italic lg:not-italic">
            “In a world where every second counts, we design with intention to maximize dwell time”
          </h3>
          <p className="font-open-sans w-full xl:w-3/4 text-gray-600 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur assumenda a iste repellendus aspernatur praesentium porro dolor magnam distinctio perferendis sunt libero placeat quibusdam soluta amet quam, impedit nobis officia!
          </p>
          <div className="font-open-sans">
            <h4 className="font-semibold text-xl">Jay Patel</h4>
            <p className="font-light text-gray-500">The one with the steering wheel</p>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl order-1 lg:order-2 w-full max-w-[350px] md:max-w-[400px]">
          <Image
            alt="Jay Patel - Profile Image"
            width={400}
            height={400}
            src={profileImage}
            className="bg-[#D9D9D9] object-cover w-full h-auto"
            priority={false}
          />
        </div>
      </div>

      {/* Text Headers */}
      <div className="text-center w-full mt-5 lg:w-3/5 xl:w-2/5 px-6">
        <p className="text-4xl md:text-5xl font-montserrat font-bold text-[#E0E0E0] leading-tight md:leading-normal">
          <span className="text-[#023E8A]">
            We exist to Deliver 360 approach &nbsp;
          </span>
          from design to development
        </p>
      </div>
      
    </section>
  );
};

export default Highlights;