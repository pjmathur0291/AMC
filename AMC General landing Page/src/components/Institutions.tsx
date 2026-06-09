import React from "react";
import { OUR_INSTITUTIONS } from "../data";
import { Building, Award, ShieldCheck, ChevronRight, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

interface InstitutionsProps {
  onSelectInstitution: (instituteId: string) => void;
  onOpenApply: () => void;
}

export default function Institutions({ onSelectInstitution, onOpenApply }: InstitutionsProps) {
  return (
    <section id="institutions" className="py-20 bg-mesh-light text-amc-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#161D4A] font-extrabold text-xs uppercase tracking-widest bg-amc-lightblue/35 px-4.5 py-1.5 rounded-full inline-block">
            {OUR_INSTITUTIONS.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-amc-navy font-sans">
            {OUR_INSTITUTIONS.title}
          </h2>
          <div className="w-16 h-1.5 bg-[#FED304] mx-auto rounded-full mt-4" />
        </div>

        {/* Two Campus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OUR_INSTITUTIONS.institutions.map((inst, index) => {
            const isAmcec = inst.id === "amcec";

            return (
              <motion.div
                key={inst.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-neutral-100 shadow-lg hover:shadow-xl hover:border-amc-lightblue/40 transition-all duration-400 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amc-navy via-amc-lightblue to-amc-yellow opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon and Tag Badge Block */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 bg-amc-navy/5 text-amc-navy rounded-2xl group-hover:bg-[#161D4A] group-hover:text-white transition-all duration-300">
                      <Building className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    
                    <span className="text-[10px] font-bold font-mono uppercase bg-[#ADDDF1]/30 text-[#161D4A] px-2.5 py-1 rounded">
                      {isAmcec ? "Engineering & Tech" : "Management & Commerce"}
                    </span>
                  </div>

                  {/* Title of Institution */}
                  <h3 className="text-xl sm:text-2xl font-black text-amc-navy font-sans leading-snug group-hover:text-[#161D4A]/90 transition-colors">
                    {inst.name}
                  </h3>

                  {/* Accreditation & Stats Labels Row */}
                  <div className="flex flex-wrap gap-2 my-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                      <Award className="w-3.5 h-3.5 text-amc-yellow" />
                      {isAmcec ? "VTU Affiliated" : "Bangalore University Affiliated"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                      NAAC Accredited
                    </span>
                    {isAmcec && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#161D4A] bg-[#ADDDF1]/20 px-2 py-0.5 rounded border border-[#ADDDF1]/40">
                        NBA Accredited
                      </span>
                    )}
                  </div>

                  {/* Exact description from standard PDF */}
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans mt-2">
                    {inst.desc}
                  </p>
                </div>

                {/* Card footer details & action */}
                <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectInstitution(inst.id)}
                    className="text-sm font-bold text-[#161D4A] hover:text-[#FED304] transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>{inst.action}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={onOpenApply}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-amc-navy hover:bg-[#FED304] hover:text-[#161D4A] text-white rounded-lg transition-colors text-center"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
