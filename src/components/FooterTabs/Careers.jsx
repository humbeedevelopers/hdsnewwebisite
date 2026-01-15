"use client";

import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  const AvailablePositions = [
    { title: 'Web Developer | GSAP Master | Web Animation', url: '/careers/web-developer-gsap' },
    { title: 'Social Media Manager', url: '/careers/social-media-manager' },
    { title: 'Senior Business Development Executive | Middle East Market', url: '/careers/business-development-middle-east' },
    { title: 'Sr. UI/UX Designer | Figma Expert', url: '/careers/ui-ux-designer-figma' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } }
  };

  return (
    <motion.div 
      className='flex flex-col md:flex-row w-full font-montserrat justify-between mt-10 border-t border-b'
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Left Section */}
      <div className='w-full md:w-1/2 flex flex-col gap-10 md:gap-32 p-6 md:p-8'>
        <div className='flex flex-col gap-6'>
          <motion.div variants={itemVariants} className="text-4xl md:text-5xl font-thin leading-tight">
            <h3>Join Our</h3>
            <h3 className='line-through decoration-primary'>Workplace</h3>
            <h3>family.</h3>
          </motion.div>
          <motion.p variants={itemVariants} className="w-full md:w-4/5 text-base md:text-lg text-black/60">
            We believe in creating an environment where you’ll look forward to showing up every day (even though when it’s a MONDAY!)
          </motion.p>
        </div>
        <motion.div variants={itemVariants} className='w-full text-right'>
          <h4 className='text-lg font-thin'>We're Building</h4>
          <h2 className='text-3xl font-bold'>#TheTalentAPI</h2>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 border-l-0 md:border-l border-t md:border-t-0'>
        <motion.h1 variants={itemVariants} className="text-2xl md:text-3xl font-black p-5">
          Current Openings
        </motion.h1>
        <div className="flex flex-col border-t border-black">
          {AvailablePositions.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link 
                href={post.url}
                className="group flex justify-between items-center border-b transition-all hover:bg-primary hover:text-bg-light hover:pl-6 py-4 px-5"
              >
                <span className="text-md md:text-lg font-light">{post.title}</span>
                <FontAwesomeIcon icon={faShareFromSquare} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Careers;