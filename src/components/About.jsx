"use client";
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useLenis } from 'lenis/react';
import WordReveal from '@/Animations/WordReveal';
import SlideReveal from '@/Animations/SlideReveal';
import ParagraphTextReveal from '@/Animations/ParagraphTextReveal';

gsap.registerPlugin(ScrollTrigger, SplitText);

const STATS_DATA = [
  { id: 1, label: 'Projects Delivered', value: '100+', primary: true },
  { id: 2, label: 'Brands & Counting', value: '50+', primary: false },
  { id: 3, label: 'Creators & Growing', value: '15', primary: false },
];

const About = () => {
  const componentRef = useRef(null);
  const textRef = useRef(null);
  const lenis = useLenis();

  useLayoutEffect(() => {
    const updateScroll = () => ScrollTrigger.update();
    if (lenis) lenis.on("scroll", updateScroll);

    let ctx = gsap.context(() => {
      // 1. Split Text Color Scrubber
      const mainSplit = new SplitText(textRef.current, { type: "words, chars" });
      gsap.fromTo(mainSplit.chars, 
        { color: "#E0E0E0" },
        {
          color: "#000",
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // 2. Inline Image Reveal Logic
      const words = gsap.utils.toArray(".text-animation__word");
      words.forEach((word) => {
        const wrapper = word.querySelector(".text-animation__image-wrapper");
        const revealLeft = word.querySelector(".text-animation__reveal.left");
        const revealRight = word.querySelector(".text-animation__reveal.right");

        if (!wrapper || !revealLeft || !revealRight) return;

        gsap.set(wrapper, { width: 0 });
        gsap.set([revealLeft, revealRight], { xPercent: 0 });

        ScrollTrigger.create({
          trigger: word,
          start: "top 72%",
          onEnter: () => {
            gsap.to(wrapper, { width: "7vw", duration: 0.5, ease: "power2.out" });
            gsap.to(revealLeft, { xPercent: -100, duration: 0.5, ease: "power2.out" });
            gsap.to(revealRight, { xPercent: 100, duration: 0.5, ease: "power2.out" });
          },
          onLeaveBack: () => {
            gsap.to(wrapper, { width: 0, duration: 0.5, ease: "power2.inOut" });
            gsap.to(revealLeft, { xPercent: 0, duration: 0.5, ease: "power2.inOut" });
            gsap.to(revealRight, { xPercent: 0, duration: 0.5, ease: "power2.inOut" });
          }
        });
      });
    }, componentRef);

    return () => {
      if (lenis) lenis.off("scroll", updateScroll);
      ctx.revert();
    };
  }, [lenis]);

  return (
    <section ref={componentRef} className="relative z-10 w-full overflow-hidden selection:bg-blue-100">
      
      {/* Top Section */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-[4vw] px-6 py-16 md:flex-row lg:px-[5vw] lg:py-24">
        
        {/* Left: Text Animation Content */}
        <div className="w-full md:w-1/2">
          <h2 
            ref={textRef}
            className="font-instrument text-[2.4rem] leading-[1.3] tracking-tight text-text-main md:text-[2.8rem] lg:text-[4vw]"
          >
            A Forward Thinking
            <AnimatedImage src="/brain.png" alt="Intelligence" />
            <br className="hidden lg:block" />
            digital agency, that helps clients world-wide
            <AnimatedImage src="/globe.png" alt="Global Reach" />
            <br className="hidden lg:block" />
            build stronger digital presence that people remember
            <AnimatedImage src="/thumb.png" alt="Quality" />
          </h2>
        </div>

        {/* Right: Demo Image Container */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <div className="aspect-[621/578] w-full max-w-[520px] rounded-card md:max-w-[560px] lg:max-w-[621px] overflow-hidden">
          <SlideReveal>
            <img src="https://images.unsplash.com/photo-1768463852001-811ead5844fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="Demo" className="h-full w-full object-cover block" />
          </SlideReveal>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-12 md:flex-row lg:px-20 lg:py-20">
        <div className="flex w-full flex-col items-start gap-8 md:w-1/2 lg:w-1/3">
          <h2 className="font-instrument text-5xl leading-tight lg:text-6xl">
            <WordReveal>
              Our Edge 
            <br /> 
            in<span className='text-primary'>Excellence </span>
            </WordReveal>
          </h2>
          <ParagraphTextReveal delay={0.2}>
            <p className="max-w-md text-text-muted leading-relaxed">
              Helping you build a stronger digital presence that captivates audiences and drives meaningful growth through innovative design.
            </p>
          </ParagraphTextReveal>
          <button className="group relative overflow-hidden rounded-full bg-primary px-8 py-3 text-white">
            <span className="relative z-10 font-medium">
              <WordReveal>
                More About Us
              </WordReveal>
            </span>
          </button>
        </div>

        <div className="flex w-full flex-row gap-4 md:w-1/2 lg:w-[45%] h-[400px] md:h-[350px]">
          <div className="flex flex-1 items-center">
            <StatCard {...STATS_DATA[0]} />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <StatCard {...STATS_DATA[1]} />
            <StatCard {...STATS_DATA[2]} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal Helper: Animated Image with Blur and Reveal Panels
const AnimatedImage = ({ src, alt }) => (
  <span className="text-animation__word relative mx-2 inline-block align-middle lg:mx-3">
    <span className="text-animation__blur relative inline-block before:absolute before:left-1/2 before:top-0 before:z-0 before:h-full before:w-full before:max-w-[13.75vw] before:max-h-[5.6vw] before:-translate-x-1/2 before:rounded-full before:bg-blue-400/20 before:blur-[3vw] before:content-['']">
      <span className="text-animation__image-wrapper relative flex h-[1.1em] items-center justify-center overflow-hidden rounded-md">
        <img className="h-full w-auto object-contain" src={src} alt={alt} />
        {/* These panels must match your bg-bg-light color to "hide" the image */}
        <div className="text-animation__reveal left absolute left-0 top-0 z-10 h-full w-1/2 bg-bg-light" />
        <div className="text-animation__reveal right absolute right-0 top-0 z-10 h-full w-1/2 bg-bg-light" />
      </span>
    </span>
  </span>
);

const StatCard = ({ label, value }) => (
  <article className="card relative h-1/2 p-5 w-full bg-[#12244A] rounded-xl flex flex-col justify-between after:content-[''] after:absolute after:top-0 after:-right-2 after:h-full after:w-4 after:bg-[#1759FF] after:rounded-r-2xl after:-z-10 text-white">
    <h3 className="text-sm font-medium opacity-80 lg:text-lg">{label}</h3>
    <h1 className="text-3xl font-bold lg:text-4xl">{value}</h1>
  </article>
);

export default About;