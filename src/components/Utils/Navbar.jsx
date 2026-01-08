"use client"

import React, { useState } from 'react';
import { Plus, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-1/2 z-50 w-[90%] -translate-x-1/2 sm:w-[80%] md:w-[70%] lg:w-[45%] xl:w-[35%]">
      
    {/* Main Navbar Bar */}
      <nav className="flex items-center justify-between rounded-full bg-bg-soft/95 backdrop-blur-md px-4 py-2 shadow-lg border border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <div className="h-2 w-2 rounded-full bg-white" />
          </div>
          
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.img 
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-5 w-auto md:h-6" 
                src="/logo.png" 
                alt="Agency Logo" 
              />
            ) : (
              <motion.span 
                key="text"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="font-instrument text-sm md:text-base text-surface"
              >
                Our clients love working with us
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex font-instrument items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-white active:scale-95 md:px-5 md:text-sm">
            Book a call <ArrowUpRight size={14} />
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-full border-2 p-1.5 hover:border-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 md:p-2 ${
              isOpen ? 'bg-primary border-primary text-white rotate-90' : 'border-surface text-surface'
            }`}
          >
            {isOpen ? <X size={18} /> : <Plus size={18} />}
          </button>
        </div>
      </nav>

    {/* Navbar options Dialogue box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: "inset(0% 0% 100% 0% round 40px)", opacity: 0 }}
            animate={{ 
                clipPath: "inset(0% 0% 0% 0% round 40px)", 
                opacity: 1,
                transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
            }}
            exit={{ 
                clipPath: "inset(0% 0% 100% 0% round 40px)", 
                opacity: 0,
                transition: { duration: 0.4 }
            }}
            className="mt-4 w-full bg-bg-soft p-10 shadow-2xl border border-white/5"
          >
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-instrument text-lg text-surface/80">We are</p>
                <h3 className="font-instrument text-2xl text-primary font-medium">Humbee Design Studio</h3>
              </div>

              <ul className="flex flex-col gap-4 text-2xl font-open-sans tracking-tight md:text-2xl">
                <li className="cursor-pointer transition-all text-text-main hover:translate-x-2">Home</li>
                <li className="text-surface/60 cursor-pointer transition-all hover:text-text-main hover:translate-x-2">Services</li>
                <li className="text-surface/60 cursor-pointer transition-all hover:text-text-main hover:translate-x-2">Portfolio</li>
                <li className="text-surface/60 cursor-pointer transition-all hover:text-text-main hover:translate-x-2">About us</li>
              </ul>

              <div className="flex flex-col justify-between gap-8 pt-6 border-t border-surface/10 sm:flex-row sm:items-end">
                <div className="font-open-sans">
                  <a href="mailto:hello@humbeestudio.com" className="text-surface/60 hover:text-primary transition-colors text-md">
                    hello@humbeestudio.com
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg uppercase text-end text-surface/60">
                  <a href="#" className="hover:text-text-main transition-colors">Instagram</a>
                  <a href="#" className="hover:text-text-main transition-colors">Dribbble</a>
                  <a href="#" className="hover:text-text-main transition-colors">Linkedin</a>
                  <a href="#" className="hover:text-text-main transition-colors">Behance</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Navbar;