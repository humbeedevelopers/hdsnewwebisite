import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFillText = ({ text = "", pin = true }) => {
  if (!text) return null;

  const containerRef = useRef(null);
  const lettersRef = useRef([]);

  lettersRef.current = [];

  useEffect(() => {
    const letters = lettersRef.current;

    const tween = gsap.to(letters, {
      color: "var(--color-primary)",
      stagger: 0.03,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: pin ? "top top" : "top 80%",
        end: pin ? "+=100%" : "top 30%",
        scrub: true,
        pin,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text]);

  return (
    <section
      ref={containerRef}
      className={`${pin ? "min-h-screen px-4" : "min-h-[30vh] px-10"} flex items-center justify-center`}
    >
      <p className="text-5xl font-montserrat font-semibold leading-relaxed flex flex-wrap justify-center text-center scaleY-[1.15]">
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="whitespace-nowrap mr-4">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                ref={(el) => el && lettersRef.current.push(el)}
                className="text-text-muted"
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
