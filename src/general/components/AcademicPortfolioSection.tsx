import React from "react";
import { HERO_DATA } from "../data";
import { GraduationCap, ArrowRight, Sparkles, BookOpen } from "lucide-react";

interface AcademicPortfolioSectionProps {
  onExploreCourses: () => void;
  onOpenApply: () => void;
}

export default function AcademicPortfolioSection({ onExploreCourses, onOpenApply }: AcademicPortfolioSectionProps) {
  const coursePills = HERO_DATA.courses.split(" | ");

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-b from-[#F8FAFC] to-white border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-1/2 -right-64 w-96 h-96 bg-[#ADDDF1]/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title / Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#161D4A] bg-[#161D4A]/5 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#FED304]" />
              Courses Offered Under AMC Group
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-sans text-[#161D4A] tracking-tight">
              Academic Portfolio
            </h2>
            <p className="text-slate-650 leading-relaxed font-sans text-sm md:text-base">
              Offering a wide array of premium undergraduate & postgraduate courses, built collaboratively alongside leading tech councils & chambers of commerce in Bengaluru.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono bg-white p-3 rounded-xl border border-slate-150 shadow-sm shrink-0">
            <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
            <span>Admissions Status: <strong className="text-[#161D4A]">Seats Are Running Out</strong></span>
          </div>
        </div>

        {/* Portfolio Content: Showcase as a premium Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual/Highlight Panel */}
          <div className="lg:col-span-4 bg-[#161D4A] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-transparent shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#FED304]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#FED304]/10 rounded-xl flex items-center justify-center text-[#FED304] border border-[#FED304]/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Why Pick AMC?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Our degrees are affiliated with Bangalore University & Visvesvaraya Technological University (VTU), holding prestigious NAAC A+ and NBA accreditation.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 space-y-4">
              <button
                onClick={onOpenApply}
                className="w-full py-3 px-4 bg-[#FED304] hover:bg-white text-[#161D4A] font-extrabold rounded-xl transition-all duration-300 text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow cursor-pointer"
              >
                Reserve Seat Quick
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Grid of Academic Programs (Pills/Cards) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {coursePills.map((course, i) => (
                <button
                  key={i}
                  onClick={onExploreCourses}
                  className="group/pill p-5 bg-white hover:bg-[#FED304] text-[#161D4A] rounded-2xl border border-slate-200 hover:border-transparent transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg flex flex-col items-center justify-center text-center space-y-2 h-32 relative"
                >
                  <div className="font-black text-lg md:text-xl font-sans text-[#161D4A]">
                    {course}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono group-hover/pill:text-[#161D4A]/70 uppercase font-black tracking-widest mt-1">
                    Degree Program
                  </div>
                  
                  {/* Small absolute top right dot indicator */}
                  <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#161D4A]/10 group-hover/pill:bg-[#161D4A]/40 transition-colors" />
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-dashed border-slate-250 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-600 text-center sm:text-left">
                <BookOpen className="w-4 h-4 text-[#161D4A]" />
                <span>Click any degree program to explore entry pathways, syllabus, and course fees.</span>
              </div>
              
              <button
                onClick={onExploreCourses}
                className="font-black text-xs text-[#161D4A] hover:text-[#161D4A]/80 transition-colors inline-flex items-center gap-1 group font-mono uppercase tracking-wider whitespace-nowrap"
              >
                Explore Syllabus
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
