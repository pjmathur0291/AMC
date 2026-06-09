import React from "react";
import { GraduationCap, MapPin, ChevronRight, HeartHandshake, Award } from "lucide-react";

interface WhyStudyProps {
  onOpenApply: () => void;
}

export default function WhyStudy({ onOpenApply }: WhyStudyProps) {
  return (
    <section id="why-study" className="py-20 bg-gradient-to-b from-white to-[#F8FAFC] text-[#161D4A] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#FED304]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[#ADDDF1]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#161D4A] font-extrabold text-xs uppercase tracking-widest bg-[#161D4A]/5 px-4.5 py-1.5 rounded-full inline-block border border-[#161D4A]/10">
            WHY AMC IS DIFFERENT FROM OTHER COLLEGES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-amc-navy font-sans">
            Legacy Of Excellence. A Future Of Innovation.
          </h2>
          <div className="w-16 h-1.5 bg-[#FED304] mx-auto rounded-full mt-4" />
        </div>

        {/* Bento Grid Layout - Academic Quality Bento Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1 */}
          <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-[#FED304] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#161D4A]/5 group-hover:bg-[#161D4A] flex items-center justify-center text-[#161D4A] group-hover:text-[#FED304] border border-[#161D4A]/10 transition-all duration-300 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-extrabold text-base text-[#161D4A] tracking-tight mb-2">
                  Academic Excellence
                </h4>
                <ul className="space-y-2 text-xs text-slate-650 font-sans list-disc pl-4 leading-relaxed">
                  <li>Autonomous college rank with prestigious NAAC A+ Grade and NBA accredited degrees</li>
                  <li>Advanced project-focused, choice-based curriculum aligned with future global technologies</li>
                  <li>Integrated professional industry skill modules, certifications, and regular internships</li>
                  <li>Engaging technical seminars, global student exchange insights, and hands-on capstone projects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-[#FED304] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#161D4A]/5 group-hover:bg-[#161D4A] flex items-center justify-center text-[#161D4A] group-hover:text-[#FED304] border border-[#161D4A]/10 transition-all duration-300 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-extrabold text-base text-[#161D4A] tracking-tight mb-2">
                  Green Campus Ecosystem
                </h4>
                <ul className="space-y-2 text-xs text-slate-650 font-sans list-disc pl-4 leading-relaxed">
                  <li>Breathtaking 52-acre lush green campus based inside Bengaluru's central technology zone</li>
                  <li>State-of-the-art startup incubation units, research groups, and interactive student activity zones</li>
                  <li>Secure, comfortable separate on-campus hostels for boys & girls with high-speed internet</li>
                  <li>Grand sports complexes, athletics arena, gymnasiums, and multiple dining/food-court choices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-[#FED304] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-[#161D4A]/5 group-hover:bg-[#161D4A] flex items-center justify-center text-[#161D4A] group-hover:text-[#FED304] border border-[#161D4A]/10 transition-all duration-300 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-extrabold text-base text-[#161D4A] tracking-tight mb-2">
                  Hi-Tech Infrastructure
                </h4>
                <ul className="space-y-2 text-xs text-slate-650 font-sans list-disc pl-4 leading-relaxed">
                  <li>3500+ high-end computer workstations and fully licensed advanced industry software suites</li>
                  <li>Modern specialized labs: Aeronautical aerodynamics, Robotics, EEE, CS & AI, and Biotech research</li>
                  <li>Direct hands-on experience with CNC machines, 3D printing equipment, and advanced IoT arrays</li>
                  <li>Active expert-led workshops and research collaborations in association with Global Tech Councils</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Help Assistance Bar */}
        <div className="mt-16 p-6 rounded-2xl bg-[#FED304]/10 border border-[#FED304]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 text-sm">
            <HeartHandshake className="w-5 h-5 text-[#161D4A] shrink-0" />
            <span>Need personalized course advisory to make up your head? Our academic guidance team is here to assist out.</span>
          </div>
          <button
            onClick={onOpenApply}
            className="px-5 py-2.5 bg-[#161D4A] hover:bg-[#FED304] hover:text-[#161D4A] text-white text-xs font-extrabold uppercase rounded-lg transition-colors whitespace-nowrap active:scale-95 duration-100 cursor-pointer"
          >
            Talk to Advisor
          </button>
        </div>

      </div>
    </section>
  );
}

