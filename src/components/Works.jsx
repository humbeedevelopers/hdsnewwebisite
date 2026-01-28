"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import SlideButton from "./Utils/SlideButton";
import WordReveal from "@/Animations/WordReveal";
import ParagraphTextReveal from "@/Animations/ParagraphTextReveal";

const Works = () => {
  const [activeId, setActiveId] = useState(1);
  const containerRef = useRef(null);

  const pillars = [
    { id: 1, title: "Website & Web Apps", color: "bg-[#FFD978]", image: "./mat.png", content: "Join our curated collection of digital masterpieces where each project showcases our expertise in designing visually stunning, strategically driven experiences proven to achieve results." },
    { id: 2, title: "UI/UX & Design Systems", color: "bg-[#B0FF87]", image: "./mat.png", content: "We create intuitive interfaces and scalable design systems that ensure consistency and delight users across every touchpoint of your digital product." },
    { id: 3, title: "Branding & Social Media", color: "bg-[#93D1FF]", image: "./mat.png", content: "Our branding experts craft unique identities that resonate with your audience and stand out in a crowded social landscape." },
    { id: 4, title: "Apps & SaaS Development", color: "bg-[#FFF773]", image: "./mat.png", content: "From concept to deployment, we build robust SaaS platforms and mobile applications tailored to your specific business needs and goals." },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      const index = Math.min(Math.floor(latest * pillars.length), pillars.length - 1);
      const newActiveId = pillars[index].id;
      if (newActiveId !== activeId) setActiveId(newActiveId);
    }
  });

  return (
    <section ref={containerRef} className="relative h-auto lg:h-[400vh] pt-12 md:pt-20">
      <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen flex items-center px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full items-center">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
            <div className="flex flex-col gap-4 md:gap-5">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-instrument tracking-snug">
                <WordReveal>Core Offerings</WordReveal>
              </h2>
              <ParagraphTextReveal>
                <p className="text-text-muted w-full md:w-5/6 lg:w-2/3 font-open-sans text-base sm:text-lg md:text-xl leading-relaxed">
                  Join our curated collection of digital masterpieces where each project showcases our expertise.
                </p>
              </ParagraphTextReveal>
            </div>

            <div className="relative hidden lg:block lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeId}
                  src={pillars.find(p => p.id === activeId)?.image}
                  alt="Pillar visual"
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-0">
            {pillars.map((pillar) => {
              const isActive = activeId === pillar.id;

              return (
                <motion.div
                  key={pillar.id}
                  layout
                  initial={false}
                  onClick={() => setActiveId(pillar.id)}
                  animate={{
                    height: isActive 
                      ? (typeof window !== "undefined" && window.innerWidth >= 1024 ? "clamp(400px, 70vh, 550px)" : "clamp(400px, 70vh, 550px)") 
                      : (typeof window !== "undefined" && window.innerWidth >= 768 ? 60 : 60),
                  }}
                  transition={{
                    height: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    scale: { duration: 0.4, ease: "easeOut" },
                    layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className={`${pillar.color} rounded-xl md:rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer`}
                >
                  <motion.div layout="position" className="p-4">
                    <h3 className="text-md px-2 sm:text-lg md:text-xl font-montserrat text-black/90">
                      {pillar.id}. {pillar.title}
                    </h3>
                  </motion.div>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        className="px-5 sm:px-8 lg:px-10 pb-8 md:pb-10 flex flex-col"
                      >
                        <p className="text-black/75 font-open-sans text-sm sm:text-md md:text-lg leading-relaxed mb-6 md:mb-8 max-w-sm">
                          {pillar.content}
                        </p>
                        <div className="w-fit">
                           <SlideButton bgColor={pillar.color} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;