import { Quote } from 'lucide-react';
import { STUDENT_QUOTES } from '../data';

export default function SocialProofSection() {
  return (
    <section id="social-proof" className="py-20 md:py-24 bg-[#161D4A] text-[#FFFFFF] relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-10 left-10 w-44 h-44 bg-[#ADDDF1]/5 rounded-full pointer-events-none blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#FED304]/5 rounded-full pointer-events-none blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FED304] bg-[#FED304]/10 border border-[#FED304]/20 px-3 py-1 rounded">
            Student Testimonies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#FFFFFF]">
            What Our Students Say
          </h2>
          <p className="text-sm sm:text-base text-[#ADDDF1] leading-relaxed font-sans max-w-md mx-auto">
            Authentic career and learning insights shared directly from graduates who passed through our programs.
          </p>
        </div>

        {/* Testimonials Grid Layout showing all three at once in white containers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="quotes-grid">
          {STUDENT_QUOTES.map((quoteItem, idx) => (
            <div 
              key={idx}
              className="bg-[#FFFFFF] text-[#161D4A] border border-slate-100 rounded-3xl p-8 relative shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote Icon watermark */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-[#161D4A]/5 stroke-[3] pointer-events-none" />

              <div className="space-y-4 flex-1">
                {/* Quote Text */}
                <p className="text-base sm:text-lg font-bold italic tracking-tight font-sans text-[#161D4A] leading-relaxed">
                  {quoteItem.quote}
                </p>
              </div>

              {/* Student Info footer */}
              <div className="border-t border-slate-100 mt-6 pt-6 flex justify-between items-end">
                <div className="space-y-1 min-w-0 flex-1">
                  <h4 className="text-sm font-extrabold text-[#161D4A] tracking-tight truncate">
                    {quoteItem.author}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider line-clamp-2 leading-tight">
                    {quoteItem.course}
                  </p>
                </div>
                <div className="pl-4 shrink-0 text-right">
                  <p className="text-[10px] text-slate-400 font-mono font-bold">
                    {quoteItem.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
