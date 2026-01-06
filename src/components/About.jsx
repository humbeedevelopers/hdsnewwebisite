import React from 'react';

const STATS_DATA = [
  { id: 1, label: 'Projects Delivered', value: '100+', primary: true },
  { id: 2, label: 'Brands & Counting', value: '50+', primary: false },
  { id: 3, label: 'Creators & Growing', value: '15', primary: false },
];

const About = () => {
  return (
    <section className="relative z-10 w-full overflow-hidden selection:bg-blue-100">
      {/* Top Section */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-16 md:flex-row md:gap-10 lg:gap-16 lg:py-24">
        
        <header className="flex w-full justify-center md:w-1/2 md:justify-end">
          <h2 className="max-w-xl font-instrument text-[2.4rem] leading-[1.1] tracking-tight text-text-main md:text-[2.8rem] lg:text-6xl">
            A Forward Thinking
            <EmojiIcon src="/brain.png" alt="Intelligence" />
            <br className="hidden lg:block" />
            digital agency, that helps clients world-wide
            <EmojiIcon src="/globe.png" alt="Global Reach" />
            <br className="hidden lg:block" />
            build stronger digital presence that people remember
            <EmojiIcon src="/thumb.png" alt="Quality" />
          </h2>
        </header>

        <div className="flex w-full justify-center md:w-1/2 md:justify-start">
          <div className="aspect-[621/578] w-full max-w-[520px] rounded-card bg-bg-soft md:max-w-[560px] lg:max-w-[621px]" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-12 md:flex-row lg:px-20 lg:py-20">
        
        <div className="flex w-full flex-col items-start gap-8 md:w-1/2 lg:w-1/3">
          <h2 className="font-instrument text-5xl leading-tight lg:text-6xl">
            Our Edge <br /> in <span className="text-primary">Excellence</span>
          </h2>
          <p className="max-w-md text-text-muted leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aperiam quidem, provident voluptatibus consectetur minima beatae incidunt quibusdam cumque ullam veniam sint natus id. Quas necessitatibus eligendi minima nostrum beatae!
          </p>
          <button className="group relative overflow-hidden rounded-full bg-primary px-8 py-3 text-white">
            <span className="relative z-10 font-medium">More About Us</span>
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

const StatCard = ({ label, value }) => (
  <article className="card relative h-1/2 p-5 w-full bg-[#12244A] rounded-xl flex flex-col justify-between after:content-[''] after:absolute after:top-0 after:-right-2 after:h-full after:w-4 after:bg-[#1759FF] after:rounded-r-2xl after:-z-10 text-white">
    <h3 className="text-sm font-medium opacity-80 lg:text-lg">{label}</h3>
    <h1 className="text-3xl font-bold lg:text-4xl">{value}</h1>
  </article>
);

const EmojiIcon = ({ src, alt }) => (
  <span className="mx-2 inline-block h-9 w-9 align-middle md:h-10 md:w-10 lg:mx-3 lg:h-12 lg:w-12">
    <img src={src} alt={alt} className="h-full w-full object-contain" loading="lazy" />
  </span>
);

export default About;