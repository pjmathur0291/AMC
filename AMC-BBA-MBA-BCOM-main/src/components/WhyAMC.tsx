import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [

  {
    title: "Industry-Relevant Learning",
    description: "Programs aligned with current business and industry needs",
    image: "https://i.postimg.cc/PqJpkfCK/PMV07731.jpg"
  },
  {
    title: "Practical Learning Approach",
    description: "Focus on real-world applications and case-based learning",
    image: "https://i.postimg.cc/QxLg3wzx/PMV08250.jpg"
  },
  {
    title: "Skill Development",
    description: "Emphasis on communication, leadership, and career readiness",
    image: "https://i.postimg.cc/ZqyK472d/PMV08411.jpg"
  },
  {
    title: "Career Support",
    description: "Focused on building opportunities in corporate and business sectors",
    image: "https://i.postimg.cc/zDdm2wP1/PMV08320.jpg"
  }
];

export function WhyAMC() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 680;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="why-amc" className="py-12 md:py-16 bg-[#fafafa] overflow-hidden w-full relative">
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
      <div className="max-w-[1280px] mx-auto px-5 w-full relative">
        <h2 className="text-[22px] md:text-[26px] lg:text-[28px] text-center font-serif text-[#111] mb-8 md:mb-10 tracking-tight font-bold w-full">
          Why Choose AMC Degree College in Bangalore
        </h2>

        <div 
          ref={scrollRef}
          className="flex gap-5 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-10 pt-2 hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0 scroll-smooth"
        >
          {features.map((feature, idx) => (
            <div key={idx} className="relative w-[300px] md:w-[650px] flex-shrink-0 snap-start flex flex-col md:flex-row items-center md:items-stretch py-2">
              {/* Image */}
              <div className="w-full md:w-[60%] h-[200px] md:h-[300px] rounded-md md:rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Box */}
              <div className="md:absolute right-0 top-1/2 md:-translate-y-1/2 w-[90%] md:w-[45%] bg-white rounded-lg shadow-[0_15px_50px_rgba(0,0,0,0.06)] p-5 md:p-8 z-10 -mt-12 md:mt-0 relative border border-gray-50 flex flex-col justify-center min-h-[140px] md:min-h-[180px]">
                <h3 className="text-base md:text-[18px] font-medium text-gray-900 mb-2 md:mb-3 leading-snug tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-2">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-brand-dark transition-all active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-brand-dark transition-all active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
