"use client";

import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faDribbble,
  faPinterest,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const switch_button = ["All Services Links", "Contact Info", "FAQs", "Career"];
  const branch_details = [
    { city: "US", address: "11029 Tahiti isle ln, Tampa, 33647, Florida, United States", contact: "+1 (813) 545-0878" },
    { city: "India", address: "724, Shivalik Shilp, S.G Highway, 380015, Ahmedabad, Gujarat", contact: "+91 98245-97524" },
    { city: "Canada", address: "1490 Tecumseh Rd E Windsor, ON N8W 1C1", contact: "+1 (813) 545-0878" }
  ];
  const items = [1, 2, 3, 4];

  const socialLinks = [
    { icon: faFacebook, href: "#", label: "Facebook" },
    { icon: faInstagram, href: "#", label: "Instagram" },
    { icon: faLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: faYoutube, href: "#", label: "YouTube" },
    { icon: faDribbble, href: "#", label: "Dribbble" },
    { icon: faPinterest, href: "#", label: "Pinterest" },
    { icon: faBehance, href: "#", label: "Behance" },
  ];

  return (
    <footer className="w-full relative min-h-150 flex flex-col gap-3 mt-5">

      {/* footer switch buttons */}
      <div className="w-full md:w-2/5 py-2 px-5 flex flex-wrap text-md gap-5">
        {switch_button.map((text, index) => (
          <button key={index} className="rounded-full inline-block bg-bg-light shadow-md cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-bg-light py-1.5 px-3">
            {text}
          </button>
        ))}
      </div>

      {/* branch information */}
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-10 md:gap-0 mt-10">
        {branch_details.map((object, index) => (
          <div key={index} className="text-montserrat flex flex-col items-center gap-3 w-full md:w-1/5">
            <h3 className="text-3xl font-thin">{object.city}</h3>
            <p className="font-light text-center w-2/3">{object.address}</p>
            <a href={`tel:${object.contact.replace(/\D/g, '')}`} className="font-bold hover:text-primary transition-colors">
              {object.contact}
            </a>
          </div>
        ))}
      </div>

      {/* mail-us@ */}
      <div className="px-5 md:px-40 mt-10">
        <a href="mailto:hello@humbeestudio.com" className="block text-center text-xl font-bold border py-4">
          hello@humbeestudio.com
        </a>
      </div>

      {/* socials */}
      <div className="w-full mt-10 flex flex-wrap">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex-1 min-w-[33.33%] md:min-w-0 border flex items-center justify-center p-10 hover:bg-primary hover:text-white transition-all"
          >
            <FontAwesomeIcon icon={social.icon} className="text-[40px] md:text-[50px]" />
          </a>
        ))}
      </div>

      {/* let's talk */}
      <div className="relative overflow-hidden mt-10 border-y py-6">
        <div className="flex animate-scroll-left w-max items-center">
          {[...items, ...items].map((_, index) => (
            <div key={index} className="flex items-center gap-6 px-8">
              <h1 className="text-5xl tracking-wide md:text-7xl font-thin flex items-center gap-6 whitespace-nowrap">
                Let's talk
                <span className="bg-black text-white p-3 md:p-4 rounded-full">
                  <ArrowUpRight size={40} strokeWidth={2.5} />
                </span>
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* closure */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center py-6 px-5 mb-5 text-2xl">
        <h4 className="text-montserrat text-center md:text-left">&copy; 2026</h4>
        <h4 className="text-montserrat text-center whitespace-nowrap">Made with Love</h4>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-montserrat text-center md:text-right flex items-center justify-center md:justify-end gap-2 hover:text-primary transition-colors"
        >
          Go all the Way up <ArrowUp className="inline" />
        </button>
      </div>
      
    </footer>
  );
};

export default Footer;