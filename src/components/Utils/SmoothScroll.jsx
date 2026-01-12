"use client";
import { ReactLenis as Lenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
  return (
    <Lenis
      root
      options={{
        lerp: 0.5, 
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        easing: (t) => t * (2 - t),
        infinite: false,
      }}
    >
      {children}
    </Lenis>
  );
}