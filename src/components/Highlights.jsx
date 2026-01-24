import Image from "next/image";
import React from "react";
import ScrollFillText from "./Utils/ScrollFillText";
import SlideReveal from "@/Animations/SlideReveal";
import ParagraphTextReveal from "@/Animations/ParagraphTextReveal";

const Highlights = () => {
  const Htext = "We're not just numbers—we're a supportive team and passionate people who love web, apps, social media, animations and thrive in making the experience more fun & meaningful.";
  const Ftext = "We exist to deliver 360° approach from design to development"

  return (
    <section className="relative w-full overflow-hidden py-16">
      <div className="container mx-auto max-w-7xl px-6 flex flex-col gap-16">
        
        {/* Header Text */}
        <header className="max-w-4xl mx-auto text-center">
          <ScrollFillText text={Htext} />
        </header>

        {/* About Section */}
        <article className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 py-12">
          
          {/* Text Content Column */}
          <div className="w-1/2 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            
            <div className="group">              
              <blockquote className="relative font-instrument font-light text-2xl md:text-4xl leading-[1.15] text-text-main">
                “In a world where every second counts, we design with intention to maximize dwell time”
              </blockquote>
            </div>

            <ParagraphTextReveal delay={0.1}>
              <p className="font-open-sans text-text-muted text-base md:text-lg leading-relaxed max-w-xl border-l-2 border-gray-100 lg:pl-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                assumenda a iste repellendus aspernatur praesentium porro dolor
                magnam distinctio perferendis sunt libero placeat quibusdam soluta
                amet quam impedit nobis officia.
              </p>
            </ParagraphTextReveal>

            <footer className="space-y-1">
              <ParagraphTextReveal delay={0.3}>
                <h4 className="font-semibold text-xl tracking-tight text-text-main">
                  Jay Patel
                </h4>
                <p className="text-gray-400 font-light text-sm uppercase tracking-widest">
                  The one with the steering wheel
                </p>
              </ParagraphTextReveal>
            </footer>
          </div>

          {/* Image Column */}
          <div className="relative w-1/2 max-w-md aspect-square order-1 lg:order-2">
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              <SlideReveal>
                <img
                src='/portfolio-2.jpg'
                alt="Jay Patel - Founder and Creative Lead"
                className="object-cover transition-all duration-1000 ease-out group-hover:scale-110"
              />

              </SlideReveal>
            </div>
          </div>

        </article>

        {/* Footer Text */}
        <footer className="max-w-4xl mx-auto text-center">
          <ScrollFillText text={Ftext} />
        </footer>

      </div>
    </section>
  );
};

export default Highlights;
