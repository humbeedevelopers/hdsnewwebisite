import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFillText = ({ text = "", pin = false, start, end }) => {
  if (!text) return null;

  const containerRef = useRef(null);
  const lettersRef = useRef([]);

  lettersRef.current = [];

  useEffect(() => {
    const letters = lettersRef.current;

    const ctx = gsap.context(() => {
      gsap.to(letters, {
        color: "var(--color-primary)",
        stagger: 0.03,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: pin ? "top top" : `${start || 'top 85%'}`,
          end: pin ? "+=100%" : `${end || 'top 25%'}`,
          scrub: true,
          pin,
          invalidateOnRefresh: true, 
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text, pin]);

  return (
    <section
      ref={containerRef}
      className={`${
        pin ? "min-h-screen px-4" : "min-h-[20vh] md:min-h-[30vh] px-4 py-8"
      } flex items-center justify-center overflow-hidden`}
    >
      <p className="
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        font-montserrat font-medium
        leading-snug md:leading-relaxed 
        flex flex-wrap justify-center text-center 
        scale-y-[1.15]"
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="whitespace-nowrap mr-[0.3em]">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                ref={(el) => el && lettersRef.current.push(el)}
                className="text-bg-soft transition-colors duration-300"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </p>
    </section>
  );
};

export default ScrollFillText;