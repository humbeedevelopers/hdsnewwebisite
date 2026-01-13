import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "How much time will it take to build my website?",
    answer: "Answer to this question depends on the type of website needed to fulfill the goal and purpose. Unlike others, our approach is more strategic and creative. It includes several rounds of meetings and brainstorming with business. You can expect the first creative draft within 15 days after the confirmation."
  },
  { id: 2, question: "How much time will it take to build my website?", answer: "This is a shorter answer example." },
  { id: 3, question: "How much time will it take to build my website?", answer: "This is a medium length answer to demonstrate how the container height responds to different content lengths while maintaining a smooth feel." },
  { id: 4, question: "How much time will it take to build my website?", answer: "Another short one." },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 md:px-20 mt-10 font-sans">
      <ul className="w-full flex flex-col gap-3 min-h-[450px] transition-all duration-500 ease-in-out">
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;
          
          return (
            <li 
              key={item.id}
              className={`w-full rounded-lg border border-transparent cursor-pointer overflow-hidden transition-colors duration-300
                ${isActive ? 'bg-[#A2E485]/40 border-[#d1fae5]' : 'bg-[#FACABF]/40'}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-start py-5 px-6">
                <div className="flex gap-4">
                  <span className="font-medium min-w-[20px] text-gray-700 mt-1">{isActive ? 'A :' : 'Q :'}</span>
                  <div className="flex flex-col">
                    <p className="text-gray-800 text-lg font-medium">{item.question}</p>

                    <div className={`grid transition-all duration-500 ease-in-out ${
                      isActive ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    }`}>
                      <div className="overflow-hidden text-gray-600 leading-relaxed max-w-3xl">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-gray-800 ml-4 shrink-0 mt-1">
                  {isActive ? <EyeOff size={24} className="opacity-70" /> : <Eye size={24} />}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQs;