import WordReveal from '@/Animations/WordReveal';
import React from 'react';

const Clients = () => {
  const CLIENT_LOGOS = [
    { id: 1, name: 'Shivalik', src: '/shivalik.png' },
    { id: 2, name: 'Shivalik', src: '/shivalik.png' },
    { id: 3, name: 'Shivalik', src: '/shivalik.png' },
    { id: 4, name: 'Shivalik', src: '/shivalik.png' },
    { id: 5, name: 'Shivalik', src: '/shivalik.png' },
    { id: 6, name: 'Shivalik', src: '/shivalik.png' },
    { id: 7, name: 'Shivalik', src: '/shivalik.png' },
    { id: 8, name: 'Shivalik', src: '/shivalik.png' },
    { id: 9, name: 'Shivalik', src: '/shivalik.png' },
    { id: 10, name: 'Shivalik', src: '/shivalik.png' },
    { id: 11, name: 'Shivalik', src: '/shivalik.png' },
    { id: 12, name: 'Shivalik', src: '/shivalik.png' },
  ];

  const rows = [
    { logos: CLIENT_LOGOS.slice(0, 4), delay: "0s" },
    { logos: CLIENT_LOGOS.slice(4, 8), delay: "-5s" },
    { logos: CLIENT_LOGOS.slice(8, 12), delay: "-10s" },
  ];

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header Section */}
        <header className="mb-16 md:mb-20">
          <h2 className="font-instrument text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <WordReveal>
              Believed by <br />
              <span className="text-primary">from Global Brands to Start-ups</span>
            </WordReveal>
          </h2>
        </header>

        {/* Animated Logos */}
        <div className="space-y-8">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="relative overflow-hidden"
              style={{ 
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
              }}
            >
              <div
                className="flex animate-scroll-left w-max"
                style={{ animationDelay: row.delay }}
              >
                {[...row.logos, ...row.logos, ...row.logos].map((logo, index) => (
                  <div 
                    key={`${logo.id}-${index}`} 
                    className="flex shrink-0 items-center justify-center grayscale px-12"
                  >
                    <img 
                      src={logo.src} 
                      alt={`${logo.name} logo`} 
                      className="h-8 w-auto object-contain md:h-10 lg:h-12" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;