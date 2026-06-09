import React from "react";
import { Sparkles, Briefcase, Award, MapPin, Cpu, TrendingUp, Building2, GraduationCap } from "lucide-react";

export default function EcosystemMarquee() {
  const highlights = [
    {
      text: "Careers with Fortune 500 Companies",
      icon: <Briefcase className="w-4 h-4 text-[#FED304]" />,
      badge: "LATEST"
    },
    {
      text: "Project-Based Learning Powered by Autonomous Excellence",
      icon: <Award className="w-4 h-4 text-[#FED304]" />,
      badge: "ACADEMICS"
    },
    {
      text: "52 Acres of Amazing Lush Green Campus",
      icon: <MapPin className="w-4 h-4 text-[#FED304]" />,
      badge: "INFRASTRUCTURE"
    },
    {
      text: "3500+ Hi-Tech Machines & Advanced Technologies",
      icon: <Cpu className="w-4 h-4 text-[#FED304]" />,
      badge: "HIGH TECH"
    },
    {
      text: "Placements across Engineering, MBA, MCA & Biotech",
      icon: <TrendingUp className="w-4 h-4 text-[#FED304]" />,
      badge: "SUCCESS"
    },
    {
      text: "Recruiters: Infosys, TCS, Wipro, Bosch, Cisco, IBM & more",
      icon: <Building2 className="w-4 h-4 text-[#FED304]" />,
      badge: "PARTNERS"
    },
    {
      text: "Training, mock interviews & internship pathways",
      icon: <GraduationCap className="w-4 h-4 text-[#FED304]" />,
      badge: "CAREER PREP"
    }
  ];

  // Let's create a sufficiently repeated list for seamless infinite looping in single-row layout
  const scrollItems = [...highlights, ...highlights, ...highlights, ...highlights, ...highlights];

  return (
    <div className="relative w-full overflow-hidden bg-[#161D4A] py-5 border-y border-white/10 select-none shadow-inner group">
      {/* Decorative blurred background elements for premium feel */}
      <div className="absolute top-1/2 -left-32 w-64 h-24 bg-[#FED304]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-64 h-24 bg-[#ADDDF1]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Edge shadow fades for smooth overlay blending */}
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#161D4A] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#161D4A] to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-1 text-center justify-center relative z-10 mb-3 px-4">
        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#FED304] uppercase flex items-center justify-center gap-1.5 declaration-id">
          <Sparkles className="w-3 h-3 text-[#FED304] fill-[#FED304]" />
          THE AMC ECOSYSTEM DIRECTORY
        </span>
      </div>

      {/* Responsive single-row web-marquee with items wrapping text internal parameters */}
      <div className="relative flex w-full pause-on-hover">
        {/* Animated Marquee Strip Container */}
        <div className="flex gap-4 md:gap-6 animate-marquee-ltr-slower md:animate-marquee-ltr shrink-0">
          {scrollItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 md:gap-3.5 bg-white/5 backdrop-blur-xs hover:bg-white/10 hover:border-[#FED324]/30 px-4 md:px-5 py-2.5 md:py-3 rounded-2xl border border-white/5 transition-all duration-350 cursor-default shrink-0"
            >
              {/* Highlight Badge */}
              <span className="text-[9px] font-black tracking-widest bg-[#FED304]/15 text-[#FED304] px-1.5 md:px-2 py-0.5 rounded-md border border-[#FED304]/25 shrink-0 uppercase">
                {item.badge}
              </span>

              {/* Icon Container */}
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0 text-[#FED304]">
                {item.icon}
              </div>

              {/* Text - wraps to two lines on mobile, stays single line on desktop */}
              <span className="text-white text-xs md:text-sm font-extrabold pr-1 md:pr-2 tracking-tight whitespace-normal md:whitespace-nowrap w-[150px] md:w-auto leading-tight md:leading-normal">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
