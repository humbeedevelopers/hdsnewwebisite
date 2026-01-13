"use client";
import React, { useState } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Added
import ContactInformation from "./FooterTabs/ContactInformation";
import ServicesLinks from "./FooterTabs/ServicesLinks";
import Careers from "./FooterTabs/Careers";
import FAQs from "./FooterTabs/FAQs";

const Footer = () => {
  const filters = [
    { label: "All Services Links", key: "services" },
    { label: "Contact Info", key: "contact" },
    { label: "FAQs", key: "faqs" },
    { label: "Career", key: "careers" },
  ];

  const [activeFilter, setActiveFilter] = useState("contact");
  const items = [1, 2, 3, 4];

  const renderActiveComponent = () => {
    switch (activeFilter) {
      case "services": return <ServicesLinks />;
      case "faqs": return <FAQs />;
      case "careers": return <Careers />;
      case "contact":
      default: return <ContactInformation />;
    }
  };

  return (
    <footer className="w-full relative flex flex-col gap-3 mt-5 overflow-hidden">
      
      {/* 1. Filter Tray */}
      <div className="w-full md:w-3/5 py-2 px-5 flex flex-wrap text-md gap-3 md:gap-5">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`relative rounded-full inline-block shadow-lg bg-bg-light cursor-pointer py-1.5 px-4 z-10 transition-colors duration-500
              ${activeFilter === filter.key ? "text-white" : "text-black hover:bg-primary hover:text-bg-light"}`}
          >
            <span className="relative z-20">{filter.label}</span>
            {activeFilter === filter.key && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-primary rounded-full z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Components */}
      <div className="relative min-h-[400px]"> 
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {renderActiveComponent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Email Box */}
      <div className="px-5 md:px-20 mt-10">
        <motion.a
          whileHover={{ scale: 0.99 }}
          href="mailto:hello@humbeestudio.com"
          className="block text-center text-xl md:text-2xl border py-4 hover:bg-primary hover:text-white transition-all duration-300"
        >
          hello@humbeestudio.com
        </motion.a>
      </div>

      {/* Let's Talk */}
      <div className="relative overflow-hidden mt-10 border-y py-6">
        <div className="flex animate-scroll-left w-max items-center">
          {[...items, ...items, ...items].map((_, index) => (
            <div key={index} className="flex items-center gap-6 px-8">
              <h1 className="text-4xl md:text-7xl font-thin flex items-center gap-6 whitespace-nowrap uppercase">
                Let's talk
                <span className="bg-black text-white p-2 md:p-4 rounded-full">
                  <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10" />
                </span>
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Closure */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center py-6 px-5 mb-5 text-lg md:text-2xl font-montserrat">
        <h4 className="text-center md:text-left opacity-60">© 2026</h4>
        <h4 className="text-center whitespace-nowrap">Made with Love</h4>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center justify-center cursor-pointer md:justify-end gap-2 hover:text-primary transition-colors"
        >
          Go all the way up 
          <motion.div whileHover={{ y: -5 }}>
            <ArrowUp />
          </motion.div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;