import React from 'react';
import { Users, PenTool, Calendar, BookOpen, GraduationCap, MapPin } from 'lucide-react';

const features = [
  {
    title: "Interactive & collaborative learning",
    icon: Users,
  },
  {
    title: "Skill-based training environment",
    icon: PenTool,
  },
  {
    title: "Student activities & campus events",
    icon: Calendar,
  },
  {
    title: "A balanced academic experience",
    icon: BookOpen,
  }
];

export function CampusLife() {
  return (
    <section id="campus-life" className="bg-[#10102b] font-sans relative overflow-hidden w-full py-20 md:py-28">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f59e0b] rounded-full blur-[120px] opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-5 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10 w-full">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-[50%] relative z-10 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 w-max mb-6">
              <MapPin className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-[12px] font-semibold tracking-wider uppercase">Campus Life</span>
            </div>
            
            <h2 className="text-[34px] md:text-[46px] lg:text-[52px] font-black text-white leading-[1.1] tracking-tight mb-8">
              An Environment That Supports <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]">Learning & Growth</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="bg-white/[0.03] border border-white/[0.08] rounded-[16px] p-5 flex items-start gap-4 transition-colors hover:bg-white/[0.06]">
                    <div className="w-10 h-10 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-[#fbbf24]">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <span className="text-white/90 text-[15px] font-medium leading-snug pt-1.5">
                      {feature.title}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Bottom Quote Banner */}
            <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-[16px] p-[2px] w-full sm:w-max">
               <div className="bg-[#10102b] rounded-[14px] px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
                 <div className="w-8 h-8 shrink-0 bg-white/5 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-[#fbbf24]" />
                 </div>
                 <p className="text-white/90 font-light text-[15px]">
                   Because growth happens both <span className="text-white font-semibold block sm:inline">inside and outside the classroom.</span>
                 </p>
               </div>
            </div>
          </div>
          
          {/* Right Side: Images Composition */}
          <div className="w-full lg:w-[50%] relative z-10 h-[450px] md:h-[550px] mt-10 lg:mt-0">
            
            {/* Primary Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-[24px] overflow-hidden border-[6px] border-[#10102b] z-10 shadow-2xl">
              <img 
                src="https://i.postimg.cc/gjfbSmcV/PMV08344.jpg" 
                alt="Campus learning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* Secondary Image Overlapping */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-[24px] overflow-hidden border-[6px] border-[#10102b] z-20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:scale-105 hover:-translate-y-2">
              <img 
                src="https://i.postimg.cc/1zx4n1pf/PMV08413.jpg" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
