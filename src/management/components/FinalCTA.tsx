import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="w-full py-8 md:py-12 bg-[#fafafa] font-sans px-5">
      <div className="max-w-[1280px] mx-auto bg-[#10102b] rounded-[32px] md:rounded-[40px] relative overflow-hidden shadow-[0_40px_80px_rgba(16,16,43,0.15)] flex flex-col items-center text-center px-6 py-12 md:py-16">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/TPrqN6Gk/PMV08578.jpg" 
            alt="Campus Background"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[#10102b]/70 mix-blend-multiply"></div>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#fbbf24] rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>


        <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-black text-white leading-[1.1] tracking-tight mb-5 relative z-10 max-w-4xl">
          Apply to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]">AMC Degree College</span>
        </h2>
        
        <p className="text-white/70 text-[16px] md:text-[18px] font-light leading-relaxed mb-8 max-w-2xl relative z-10">
          Start your journey in one of the leading degree colleges in Bangalore and build a successful career in business, commerce, or management.
        </p>
        
        <button className="group relative flex items-center justify-center gap-3 bg-[#fbbf24] text-[#10102b] px-8 py-4 rounded-full text-[16px] md:text-[17px] font-bold transition-all duration-300 hover:bg-white hover:shadow-[0_20px_40px_rgba(251,191,36,0.3)] hover:-translate-y-1 z-10 overflow-hidden">
          <span className="relative z-10">Start Your Application</span>
          <div className="w-7 h-7 rounded-full bg-[#10102b]/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 relative z-10">
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
        </button>
        
      </div>
    </section>
  );
}
