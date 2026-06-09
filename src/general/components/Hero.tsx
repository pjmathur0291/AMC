import { HERO_DATA } from "../data";
import { Compass, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import AdmissionForm from "./AdmissionForm";

interface HeroProps {
  onExploreCourses: () => void;
  onOpenApply: () => void;
}

export default function Hero({ onExploreCourses, onOpenApply }: HeroProps) {
  const handleApplyClick = () => {
    const input = document.getElementById("hero-name-input");
    if (input) {
      input.focus();
      input.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      onOpenApply();
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden text-[#161D4A]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="https://i.postimg.cc/85J01NHt/Image-Dithering-2x.webp"
          alt="AMC Campus Background"
          className="w-full h-full object-cover object-center filter opacity-90 contrast-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-white/10"></div>
      </div>

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#ADDDF1]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FED304]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161D4A]/5 border border-[#161D4A]/10 shadow-inner"
            >
              <Sparkles className="w-4 h-4 text-[#FED304] animate-spin-slow" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#161D4A]">
                {HERO_DATA.subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-[#161D4A] font-sans"
            >
              {HERO_DATA.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-750 leading-relaxed font-sans max-w-2xl border-l-4 border-[#FED304] pl-4 py-1.5"
            >
              {HERO_DATA.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 pt-2"
            >
              <div className="flex items-center gap-2 bg-[#161D4A]/5 px-3.5 py-2 rounded-xl border border-[#161D4A]/10 hover:border-[#161D4A]/20 transition-all">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#161D4A]">NAAC A+ accredited</span>
              </div>
              <div className="flex items-center gap-2 bg-[#161D4A]/5 px-3.5 py-2 rounded-xl border border-[#161D4A]/10 hover:border-[#161D4A]/20 transition-all">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#161D4A]">NBA Accredited Degrees</span>
              </div>
              <div className="flex items-center gap-2 bg-[#161D4A]/5 px-3.5 py-2 rounded-xl border border-[#161D4A]/10 hover:border-[#161D4A]/20 transition-all">
                <div className="w-2 h-2 bg-[#FED304] rounded-full" />
                <span className="text-xs font-mono font-bold text-[#161D4A]">100% Placement Support</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full"
            >
              <button
                onClick={onExploreCourses}
                id="explore-courses-btn"
                className="w-full sm:w-auto justify-center px-6 py-4 bg-[#FED304] text-[#161D4A] font-extrabold rounded-xl hover:bg-[#161D4A] hover:text-white transition-all duration-300 shadow-lg text-sm tracking-wide uppercase flex items-center gap-2 group transform active:scale-95 duration-150 cursor-pointer"
              >
                {HERO_DATA.cta}
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>

              <button
                onClick={handleApplyClick}
                id="hero-apply-btn"
                className="w-full sm:w-auto justify-center px-6 py-4 bg-[#161D4A]/10 text-[#161D4A] font-extrabold rounded-xl hover:bg-[#161D4A] hover:text-white border border-[#161D4A]/25 transition-all duration-300 shadow-md text-sm tracking-wide uppercase flex items-center gap-2 group cursor-pointer"
              >
                Apply Online 2026
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#FED304] text-[#161D4A] font-mono text-[9px] font-black uppercase rounded-bl-xl tracking-widest">
                FAST TRACK ADMISSION
              </div>

              <AdmissionForm
                formId="hero-admission-form"
                nameInputId="hero-name-input"
                submitLabel="Submit Form"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
