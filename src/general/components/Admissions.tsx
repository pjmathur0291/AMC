import React, { useState } from "react";
import { ADMISSIONS_SECTION } from "../data";
import { ShieldCheck, ArrowRight, ClipboardCheck, Sparkles, AlertCircle, HelpCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AdmissionsProps {
  onOpenApply: () => void;
}

export default function Admissions({ onOpenApply }: AdmissionsProps) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  // Add supplementary helper materials to enrich context organically without modifying PDF words
  const stepPrerequisites = [
    ["Email Verification", "Mobile OTP Validation", "Portal Password Creation"],
    ["Academic score records", "Personal Address info", "Preferred branch selection"],
    ["Original Marksheets", "Transfer Certificate (TC)", "Conduct/Migration Certificate"],
    ["Online fee payment slip", "Seat allotment proof", "Scholarship merit approval"],
    ["Orientation Kit", "Class Schedule handbook", "Student Identity card"]
  ];

  return (
    <section id="admissions" className="py-20 bg-mesh-light text-amc-navy relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amc-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#161D4A] font-extrabold text-xs uppercase tracking-widest bg-amc-lightblue/35 px-4.5 py-1.5 rounded-full inline-block">
            Admission Pipeline 2026-27
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-amc-navy font-sans">
            {ADMISSIONS_SECTION.title}
          </h2>
          <div className="w-16 h-1.5 bg-amc-yellow mx-auto rounded-full mt-4" />
        </div>

        {/* Steps Tracker Pipeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Steps list selector (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <span className="text-[10px] font-mono tracking-widest text-[#161D4A]/50 uppercase font-black px-2 mt-1">
              Select Steps to View Details
            </span>
            
            {ADMISSIONS_SECTION.steps.map((step, idx) => {
              const isActive = idx === activeStepIdx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group cursor-pointer ${
                    isActive
                      ? "bg-[#161D4A] border-[#161D4A] text-white shadow-md font-sans"
                      : "bg-white border-neutral-100/80 hover:bg-amc-gray/50 hover:border-amc-lightblue/35 text-neutral-500"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold font-mono text-sm shrink-0 transition-transform ${
                    isActive
                      ? "bg-[#FED304] text-[#161D4A]"
                      : "bg-amc-navy/5 text-amc-navy group-hover:scale-105"
                  }`}>
                    0{step.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <strong className={`block text-xs uppercase tracking-wider ${isActive ? "text-[#FED304]" : "text-neutral-400 group-hover:text-amc-navy"}`}>
                      Stage 0{step.number}
                    </strong>
                    <span className={`block font-extrabold text-sm truncate uppercase mt-0.5 ${isActive ? "text-white" : "text-amc-navy text-[#161D4A]"}`}>
                      {step.title}
                    </span>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isActive ? "text-[#FED304] translate-x-1" : "text-neutral-300 group-hover:translate-x-1"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Interactive display panel (Span 7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {ADMISSIONS_SECTION.steps.map((step, idx) => {
                if (idx !== activeStepIdx) return null;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-white rounded-2xl p-6 sm:p-8 border border-neutral-100 shadow-lg flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Top corner design badge */}
                    <div className="absolute top-0 right-0 p-4 sm:p-5 bg-amc-navy/5 rounded-bl-2xl border-l border-b border-neutral-100 text-[#161D4A]/10 select-none text-4xl sm:text-5xl font-sans font-black">
                      0{step.number}
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-amc-yellow" />
                        <span className="text-xs font-mono font-bold tracking-widest text-[#161D4A] uppercase bg-[#ADDDF1]/30 py-0.5 px-2 rounded">
                          Admissions Pathway Stage {step.number}
                        </span>
                      </div>

                      {/* Step Header */}
                      <h3 className="text-2xl sm:text-3xl font-black text-amc-navy tracking-tight font-sans">
                        {step.title}
                      </h3>

                      {/* Precise OCR Word Translation Block */}
                      <div className="p-4 bg-amc-gray/90 rounded-xl border border-neutral-200/50">
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-sans font-medium">
                          {step.desc}
                        </p>
                      </div>

                      {/* Associated Checklist prerequisites for high engagement */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold uppercase block">
                          Required Documents Checklist:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {stepPrerequisites[idx].map((doc, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-600 bg-amc-gray/50 px-3 py-2 rounded-lg border border-neutral-100">
                              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                              <span className="font-medium truncate">{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick callout footer action and help */}
                    <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-neutral-600">
                        <AlertCircle className="w-4 h-4 text-[#FED304]" />
                        <span>Counselor callback validation is available online.</span>
                      </div>
                      
                      <button
                        onClick={onOpenApply}
                        className="px-5 py-3.5 bg-amc-navy hover:bg-[#FED304] hover:text-[#161D4A] text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 duration-100 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Start Online Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
