import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import SlideButton from "./Utils/SlideButton";

const Works = () => {
  const [activeId, setActiveId] = useState(1);
  const containerRef = useRef(null);

  const pillars = [
  {
    id: 1,
    title: "Website & Web Apps",
    color: "bg-[#FFD978]",
    image: "./mat.png",
    content:
      "Join our curated collection of digital masterpieces where each project showcases our expertise in designing visually stunning, strategically driven experiences proven to achieve results.",
  },
  {
    id: 2,
    title: "UI/UX & Design Systems",
    color: "bg-[#B0FF87]",
    image: "./mat.png",
    content:
      "We create intuitive interfaces and scalable design systems that ensure consistency and delight users across every touchpoint of your digital product.",
  },
  {
    id: 3,
    title: "Branding & Social Media",
    color: "bg-[#93D1FF]",
    image: "./mat.png",
    content:
      "Our branding experts craft unique identities that resonate with your audience and stand out in a crowded social landscape.",
  },
  {
    id: 4,
    title: "Apps & SaaS Development",
    color: "bg-[#FFF773]",
    image: "./mat.png",
    content:
      "From concept to deployment, we build robust SaaS platforms and mobile applications tailored to your specific business needs and goals.",
  },
];


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * pillars.length),
      pillars.length - 1
    );
    const newActiveId = pillars[index].id;
    if (newActiveId !== activeId) setActiveId(newActiveId);
  });

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-instrument tracking-tight mb-8">
              Our Core <br /> Pillars
            </h2>
            <p className="text-gray-500 font-open-sans text-xl max-w-md">
              Join our curated collection of digital masterpieces where each
              project showcases our expertise.
            </p>

            <div className="relative mt-16 hidden lg:block w-[320px] h-[320px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeId}
                  src={pillars.find(p => p.id === activeId)?.image}
                  alt="Pillar visual"
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -12 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>

          </motion.div>

          {/* RIGHT ACCORDION */}
          <div className="flex flex-col">
            {pillars.map((pillar) => {
              const isActive = activeId === pillar.id;

              return (
                <motion.div
                  key={pillar.id}
                  layout
                  initial={false}
                  animate={{
                    height: isActive ? 500 : 88,
                    scale: isActive ? 1 : 0.985,
                  }}
                  transition={{
                    height: {
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    scale: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                    layout: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className={`${pillar.color} rounded-2xl overflow-hidden flex flex-col justify-between`}
                >
                  {/* HEADER (always visible) */}
                  <motion.div
                    layout="position"
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={"p-6"}
                  >
                    <h3 className="text-2xl font-montserrat text-black/90">
                      {pillar.id}. {pillar.title}
                    </h3>
                  </motion.div>

                  {/* OPEN CONTENT */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.12,
                        }}
                        className="px-10 pb-10 flex flex-col"
                      >
                        <div>
                          <p className="text-black/70 font-open-sans text-md leading-normal mb-6 max-w-sm">
                            {pillar.content}
                          </p>
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
