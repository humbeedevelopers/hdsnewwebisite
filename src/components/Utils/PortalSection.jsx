import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortalSection = ({ foregroundImage, nextSectionContent }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.to(imageRef.current, {
        scale: 10,
        opacity: 0,
        duration: 1,
        force3D: true,
        ease: "power2.in",
      });

      tl.from(
        contentRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
        },
        "<"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div ref={contentRef} className="inset-0 z-[1]">
        {nextSectionContent}
      </div>
      
      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
        <img
          ref={imageRef}
          src={foregroundImage.src}
          alt="Portal"
          className="w-full h-screen absolute top-0 object-cover"
          style={{ willChange: "transform" }}
        />
      </div>
    </div>
  );
};

export default PortalSection;