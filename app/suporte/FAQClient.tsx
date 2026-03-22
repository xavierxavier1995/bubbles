'use client';

import { useState } from 'react';
import { Plus, X, ChevronRight } from 'lucide-react';
import { faqData } from './data';

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState<string>(faqData[0].id);
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    setOpenQuestionIndex(null); // Reset open question when changing category
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const currentCategoryData = faqData.find(c => c.id === activeCategory);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
      {/* Sidebar Categories */}
      <div className="w-full lg:w-1/3 flex flex-col gap-3">
        {faqData.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`w-full flex flex-col md:flex-row items-center md:justify-between p-6 rounded-[20px] transition-all duration-300 text-left
                ${isActive 
                  ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100' 
                  : 'bg-transparent hover:bg-white/50 border border-transparent hover:border-gray-100'
                }
              `}
            >
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors
                  ${isActive ? 'bg-[#F4CDD4]/20 text-[#1A1A1A]' : 'bg-gray-100 text-gray-500'}
                `}>
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className={`text-lg font-semibold transition-colors text-center md:text-left
                  ${isActive ? 'text-[#1A1A1A]' : 'text-gray-500'}
                `}>
                  {cat.category}
                </h2>
              </div>
              <ChevronRight className={`hidden md:block w-5 h-5 shrink-0 transition-colors
                ${isActive ? 'text-[#1A1A1A]' : 'text-gray-300'}
              `} />
            </button>
          );
        })}
      </div>

      {/* Accordions Area */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        {currentCategoryData?.questions.map((q, idx) => {
          const isOpen = openQuestionIndex === idx;
          
          return (
            <div 
              key={idx}
              className={`bg-white rounded-[20px] transition-all duration-300 overflow-hidden
                ${isOpen 
                  ? 'shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100' 
                  : 'shadow-sm border border-gray-100 hover:shadow-md'
                }
              `}
            >
              <button
                onClick={() => toggleQuestion(idx)}
                className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-6 focus:outline-none"
              >
                <div className="flex flex-col gap-2 pr-4">
                  <span className="text-[11px] font-bold tracking-wider text-[#1A1A1A]/50 uppercase">
                    [{q.tag}]
                  </span>
                  <h3 className={`text-lg md:text-xl font-semibold leading-snug transition-colors
                    ${isOpen ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/80'}
                  `}>
                    {q.question}
                  </h3>
                </div>
                <div className="shrink-0 mt-1">
                  {isOpen ? (
                    <X className="w-6 h-6 text-[#1A1A1A]" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out
                  ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                `}
              >
                <div className="overflow-hidden">
                  <div className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed text-base md:text-lg">
                    {q.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
