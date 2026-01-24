"use client";

import React, { useRef } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useVelocity,
  useMotionValue,
} from "framer-motion";
import { useLenis } from "lenis/react"; 

const images = [
  "https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/9699293/pexels-photo-9699293.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const ParallaxImage = ({ src, skewY }) => (
  <motion.div
    style={{ skewY }}
    className="w-full mb-6 overflow-hidden rounded-[20px] shadow-xl"
  >
    <motion.img
      src={src}
      alt="Gallery item"
      className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
      whileHover={{ scale: 1.1 }}
    />
  </motion.div>
);

export default function ParallaxGallery() {
  const containerRef = useRef(null);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useLenis(({ scroll, progress }) => {
    scrollY.set(scroll);
    scrollYProgress.set(progress);
  });

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const skewY = useTransform(smoothVelocity, [-2000, 0, 2000], [-6, 0, 6]);

  const yUp = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const yDown = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const tripledImages = [...images, ...images, ...images];

  return (
    <section
      ref={containerRef}
      className="relative py-20 min-h-[200vh] overflow-hidden"
    >
      <div className="flex gap-4 md:gap-10 max-w-[1400px] mx-auto px-6">
        {/* Column 1 */}
        <motion.div style={{ y: yUp }} className="flex-1 flex flex-col">
          {tripledImages.slice(0, 6).map((src, i) => (
            <ParallaxImage key={`col1-${i}`} src={src} skewY={skewY} />
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: yDown }} className="flex-1 flex flex-col">
          {tripledImages.slice(2, 8).map((src, i) => (
            <ParallaxImage key={`col2-${i}`} src={src} skewY={skewY} />
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: yUp }} className="flex-1 flex flex-col">
          {tripledImages.slice(4, 10).map((src, i) => (
            <ParallaxImage key={`col3-${i}`} src={src} skewY={skewY} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}