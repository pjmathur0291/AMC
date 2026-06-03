import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export function StickyFooterBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      // If the top of the footer is above or equal to the bottom of the viewport, 
      // it means the footer is visible. We hide the sticky banner.
      if (footerRect.top <= window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] py-3 px-4 md:py-4">
        <div className="max-w-[1280px] mx-auto flex flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 md:gap-5 flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 aspect-square rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
              <img 
                src="https://openday.amcgroup.edu.in/_components/v2/a84344c2237668234c2cf1a425a740b02e1984aa/Screenshot_2026-05-24_at_1.27.53_PM.389c6241.png" 
                alt="Open Days Event" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col">
              <h4 className="text-[13px] sm:text-[15px] md:text-lg font-bold text-brand-dark leading-tight md:mb-1">
                Registration for OPEN Days
              </h4>
              <p className="text-[12px] sm:text-[13px] md:text-sm text-gray-600 font-medium">
                May 30th, Time 4:00 PM
              </p>
            </div>
          </div>
          
          <button className="shrink-0 bg-brand-yellow hover:bg-[#e5bd03] text-brand-dark px-4 py-2.5 md:px-6 md:py-3.5 rounded-md text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase transition-colors shadow-sm flex items-center gap-1.5 md:gap-2">
            Register <span className="hidden sm:inline">Now</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          
        </div>
      </div>
    </div>
  );
}
