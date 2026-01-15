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
        <article className="flex flex-col lg:flex-row items-center justify-between gap-20">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
            <blockquote className="font-instrument font-light text-2xl md:text-3xl leading-tight text-text-main">
              “In a world where every second counts, we design with intention to maximize dwell time”
            </blockquote>

            <p className="font-open-sans text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              assumenda a iste repellendus aspernatur praesentium porro dolor
              magnam distinctio perferendis sunt libero placeat quibusdam soluta
              amet quam impedit nobis officia.
            </p>

            <footer>
              <h4 className="font-semibold text-xl text-text-main">
                Jay Patel
              </h4>
              <p className="text-gray-500 font-light">
                The one with the steering wheel
              </p>
            </footer>
          </div>

          <div className="relative w-full max-w-md aspect-square">
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
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

        {/* Footer Text */}
        <footer className="max-w-4xl mx-auto text-center">
          <ScrollFillText text={Ftext} pin={false} />
        </footer>

      </div>
    </section>
  );
};

export default Highlights;
