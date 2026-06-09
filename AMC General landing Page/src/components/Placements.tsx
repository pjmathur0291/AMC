import React from "react";
import { PLACEMENTS_SECTION } from "../data";
import { TrendingUp, Users, Award, Briefcase, ChevronRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface PlacementsProps {
  onOpenApply: () => void;
}

export default function Placements({ onOpenApply }: PlacementsProps) {
  // Safe icon provider based on metric label
  const getMetricIcon = (label: string) => {
    if (label.includes("Rate")) {
      return <TrendingUp className="w-5 h-5 text-[#00bc7d]" />;
    } else if (label.includes("Companies")) {
      return <Users className="w-5 h-5 text-[#00bc7d]" />;
    } else if (label.includes("Highest")) {
      return <Award className="w-5 h-5 text-[#00bc7d]" />;
    } else {
      return <Briefcase className="w-5 h-5 text-[#00bc7d]" />;
    }
  };

  const recruiters = PLACEMENTS_SECTION.recruiters;
  // Shuffled balanced distributions across 3 rows for mobile view
  const row1 = [recruiters[0], recruiters[2], recruiters[4], recruiters[1], recruiters[5], recruiters[3], recruiters[6]];
  const row2 = [recruiters[3], recruiters[1], recruiters[6], recruiters[2], recruiters[0], recruiters[5], recruiters[4]];
  const row3 = [recruiters[5], recruiters[4], recruiters[1], recruiters[6], recruiters[3], recruiters[0], recruiters[2]];

  // Repeat sufficiently to guarantee seamless infinite scroll on smaller widths
  const repeatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const repeatedRow2 = [...row2, ...row2, ...row2, ...row2];
  const repeatedRow3 = [...row3, ...row3, ...row3, ...row3];

  return (
    <section id="placements" className="py-20 bg-[#161D4A] text-white relative overflow-hidden">
      {/* Visual background pattern decorations */}
      <div className="absolute inset-x-0 bottom-0 top-0 bg-mesh-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-[10%] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amc-yellow bg-white/10 px-3 py-1.5 rounded-full inline-block border border-white/5">
              {PLACEMENTS_SECTION.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans leading-none">
              {PLACEMENTS_SECTION.title}
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans max-w-2xl border-l-2 border-amc-lightblue pl-4 py-1">
              {PLACEMENTS_SECTION.body}
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <button
              onClick={onOpenApply}
              className="group px-6 py-4 bg-[#FED304] text-[#161D4A] font-extrabold text-sm tracking-wider uppercase rounded-xl hover:bg-white hover:text-amc-navy transition-all duration-300 shadow-lg flex items-center gap-2 transform active:scale-95 duration-100"
            >
              Access Placement Portal
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Live Metrics Grid Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PLACEMENTS_SECTION.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 text-center hover:border-[#FED304]/30 hover:bg-white/10 transition-all group"
            >
              <div className="mx-auto w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#FED304] group-hover:text-[#161D4A] transition-all">
                {getMetricIcon(stat.label)}
              </div>
              
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                {stat.value}
              </div>

              <div className="text-[11px] sm:text-xs text-white/70 uppercase tracking-widest font-bold mt-2 font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recruiters Scrolling Marquee Block - PAUSE ON HOVER implementation */}
        <div className="space-y-6 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-mono font-bold tracking-widest text-[#FED304] uppercase flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              Corporate Hiring Network
            </span>
            <span className="text-[10px] text-white/50 hidden sm:inline-block">Hover over logos to pause marquee</span>
          </div>

          {/* Mobile View: Single container containing three marquee sliders */}
          <div className="block md:hidden relative w-full bg-white/5 backdrop-blur-xs py-6 rounded-2xl border border-white/5 overflow-hidden select-none space-y-4">
            {/* Ambient mask gradients for alpha-blending */}
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#161D4A] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#161D4A] to-transparent z-10 pointer-events-none" />

            {/* Row 1: Left to right */}
            <div className="relative w-full overflow-hidden flex">
              <div className="flex gap-4 animate-marquee-ltr shrink-0">
                {repeatedRow1.map((recruiter, idx) => (
                  <div
                    key={`r1-${idx}`}
                    className="flex items-center justify-center bg-white px-3 py-2 rounded-xl h-10 w-28 shrink-0 shadow-sm border border-neutral-150"
                  >
                    <img
                      src={recruiter.logo}
                      alt={recruiter.name}
                      className="max-h-full max-w-full object-contain pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Right to left */}
            <div className="relative w-full overflow-hidden flex">
              <div className="flex gap-4 animate-marquee-rtl shrink-0">
                {repeatedRow2.map((recruiter, idx) => (
                  <div
                    key={`r2-${idx}`}
                    className="flex items-center justify-center bg-white px-3 py-2 rounded-xl h-10 w-28 shrink-0 shadow-sm border border-neutral-150"
                  >
                    <img
                      src={recruiter.logo}
                      alt={recruiter.name}
                      className="max-h-full max-w-full object-contain pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Left to right */}
            <div className="relative w-full overflow-hidden flex">
              <div className="flex gap-4 animate-marquee-ltr shrink-0">
                {repeatedRow3.map((recruiter, idx) => (
                  <div
                    key={`r3-${idx}`}
                    className="flex items-center justify-center bg-white px-3 py-2 rounded-xl h-10 w-28 shrink-0 shadow-sm border border-neutral-150"
                  >
                    <img
                      src={recruiter.logo}
                      alt={recruiter.name}
                      className="max-h-full max-w-full object-contain pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop/Tablet View: Single large scrollable marquee */}
          <div className="hidden md:block relative w-full overflow-hidden bg-white/5 backdrop-blur-xs py-5 rounded-2xl border border-white/5 pause-on-hover select-none">
            {/* Ambient mask gradient left is translucent and right is translucent */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#161D4A] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#161D4A] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 animate-marquee-ltr shrink-0">
              {/* Double or triple items array for seamless scroll loops */}
              {[
                ...PLACEMENTS_SECTION.recruiters,
                ...PLACEMENTS_SECTION.recruiters,
                ...PLACEMENTS_SECTION.recruiters,
                ...PLACEMENTS_SECTION.recruiters
              ].map((recruiter, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center bg-white px-5 py-3 rounded-[1rem] h-12 w-32 sm:h-16 sm:w-40 transition-transform hover:scale-105 shrink-0 shadow-sm border border-neutral-150"
                >
                  <img
                    src={recruiter.logo}
                    alt={recruiter.name}
                    className="max-h-full max-w-full object-contain pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
