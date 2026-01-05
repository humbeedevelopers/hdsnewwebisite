import React from 'react'

const About = () => {
  return (
    <section className="about w-full relative z-2">

        {/* Top */}
        <div className="about__top mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-20
                        md:flex-row md:gap-10
                        lg:gap-16 lg:py-24">

            {/*Top Left */}
            <div className="about__top-left flex w-full justify-center md:w-1/2 md:justify-end">
            <h2
                className="
                w-full max-w-xl
                font-instrument
                leading-[1.1]
                tracking-tight
                text-[2.4rem]
                md:text-[2.8rem]
                lg:text-6xl
                "
            >
                A Forward Thinking
                <span
                className="
                    inline-block align-middle mx-3
                    h-9 w-9
                    md:h-10 md:w-10
                    lg:h-12 lg:w-12
                "
                aria-hidden="true"
                >
                <img src="/brain.png" alt="" className="h-full w-full object-contain" />
                </span>
                <br />

                digital agency, that helps
                <br />

                clients world-wide
                <span
                className="
                    inline-block align-middle mx-3
                    h-9 w-9
                    md:h-10 md:w-10
                    lg:h-12 lg:w-12
                "
                aria-hidden="true"
                >
                <img src="/globe.png" alt="" className="h-full w-full object-contain" />
                </span>
                <br />

                build stronger digital
                <br />

                presence that people
                <br />

                remember
                <span
                className="
                    inline-block align-middle mx-3
                    h-9 w-9
                    md:h-10 md:w-10
                    lg:h-12 lg:w-12
                "
                aria-hidden="true"
                >
                <img src="/thumb.png" alt="" className="h-full w-full object-contain" />
                </span>
            </h2>
            </div>

            {/* Top Right */}
            <div className="about__top-right flex w-full justify-center md:w-1/2 md:justify-start">
            <div
                className="
                aspect-[621/578]
                w-full
                max-w-[520px]
                md:max-w-[560px]
                lg:max-w-[621px]
                rounded-[18px]
                bg-[#D9D9D9]
                "
            />
            </div>

        </div>

        {/* Bottom */}
        <div className='about__bottom flex items-center justify-evenly h-[50vh] w-full px-20 py-10'>
            {/* Bottom Left */}
            <div className='about__bottom-left items-start flex flex-col gap-8 p-2 h-full w-1/3'>
                <h2 className='font-instrument text-6xl'>Our Edge <br /> in <span className='text-[#0039C8]'> Excellence </span></h2>
                <p className='w-2/3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aut veniam maiores officia quae, nihil quidem minima beatae explicabo porro esse expedita similique quasi in? Nihil minima eaque harum quasi!</p>
                <button className='relative bg-[#0039C8] text-[#fff] px-4 py-2 rounded-3xl'> <span> More About Us </span> </button>
            </div>

            {/* Bottom Right */}
            <div className='about__bottom-right flex h-full text-[#fff] w-1/3 justify-evenly'>
                <div className='about__bottom-single-card flex items-center h-full w-2/5'>
                    <div className="card relative h-[45%] p-5 w-full bg-[#12244A] rounded-xl flex flex-col justify-between after:content-[''] after:absolute after:top-0 after:-right-2 after:h-full after:w-4 
                after:bg-[#1759FF] after:rounded-r-2xl after:-z-10">
                        <h3 className='text-xl'>Projects Delivered</h3>

                        <h1 className='text-4xl'>100+</h1>
                    </div>
                </div>
                <div className='about__bottom-multiple-card items-center justify-center gap-5 w-2/5 h-full flex flex-col'>
                    <div className="card relative h-[45%] p-5 w-full bg-[#12244A] rounded-xl flex flex-col justify-between after:content-[''] after:absolute after:top-0 after:-right-2 after:h-full after:w-4 
                after:bg-[#1759FF] after:rounded-r-2xl after:-z-10">
                        <h3 className='text-xl'>Brands & Counting</h3>

                        <h1 className='text-4xl'>50+</h1>
                    </div>
                    <div className="card relative h-[45%] p-5 w-full bg-[#12244A] rounded-xl flex flex-col justify-between after:content-[''] after:absolute after:top-0 after:-right-2 after:h-full after:w-4 
                after:bg-[#1759FF] after:rounded-r-2xl after:-z-10">
                        <h3 className='text-xl'>Creators & Growing</h3>

                        <h1 className='text-4xl'>15</h1>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default About
