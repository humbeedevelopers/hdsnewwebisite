import React from "react";

import Image from "next/image";

import portfolio1 from "../../../public/portfolio-1.jpg";
import portfolio2 from "../../../public/portfolio-2.jpg";
import portfolio3 from "../../../public/portfolio-3.jpg";
import portfolio4 from "../../../public/portfolio-4.jpg";
import portfolio5 from "../../../public/portfolio-5.jpg";
import portfolio6 from "../../../public/portfolio-6.jpg";

const portfolioItems = [
  { id: 1, image: portfolio2, title: "Living Room", category: "Interior Design" },
  { id: 2, image: portfolio3, title: "Ceramic Forms", category: "Product Design" },
  { id: 3, image: portfolio6, title: "Modern Lamp", category: "Product Design" },
  { id: 4, image: portfolio1, title: "Geometric Spaces", category: "Architecture" },
  { id: 5, image: portfolio4, title: "Editorial Fashion", category: "Photography" },
  { id: 6, image: portfolio5, title: "Brutalist Detail", category: "Architecture" },
  { id: 7, image: portfolio2, title: "Living Room", category: "Interior Design" },
  { id: 8, image: portfolio1, title: "Geometric Spaces", category: "Architecture" },
];

const PortfolioGrid = () => {
  return (
    <div className="columns-2 md:columns-3 gap-10 px-6 space-y-10 mt-16">
      {portfolioItems.map((item) => (
        <div key={item.id} className="break-inside-avoid group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-sm">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;