import React, { useState, useMemo } from "react";
import { PROGRAMS, PROGRAMS_HEADER, Program } from "../data";
import { Search, Sparkles, BookOpen, Clock, Users, ArrowRight, Star, AlertCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProgramsProps {
  onOpenApply: (programId?: string) => void;
  selectedFilterId?: string; // allow external trigger
}

export default function Programs({ onOpenApply, selectedFilterId }: ProgramsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | "UG" | "PG">("ALL");

  // Filter programs based on tabs & search term
  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((program) => {
      // Category match
      const categoryMatch =
        selectedCategory === "ALL" ||
        (selectedCategory === "UG" && (program.category === "UG" || program.category === "UG-PG")) ||
        (selectedCategory === "PG" && (program.category === "PG" || program.category === "UG-PG"));

      // Search match
      const titleMatch = program.title.toLowerCase().includes(searchTerm.toLowerCase());
      const descMatch = program.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const bulletsMatch = program.bullets.some((b) =>
        b.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return categoryMatch && (titleMatch || descMatch || bulletsMatch);
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="programs" className="py-20 bg-amc-gray text-amc-navy relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amc-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ADDDF1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#161D4A] bg-[#ADDDF1]/40 px-4 py-1.5 rounded-full inline-block">
              {PROGRAMS_HEADER.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amc-navy tracking-tight font-sans">
              {PROGRAMS_HEADER.title}
            </h2>
            <p className="text-[#161D4A]/85 text-base sm:text-lg font-medium leading-relaxed font-sans">
              {PROGRAMS_HEADER.description}
            </p>
          </div>

          {/* Interactive Search Tool */}
          <div className="relative w-full max-w-sm shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
              <Search className="w-5 h-5 pointer-events-none" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search branches e.g. Computer, AI..."
              className="w-full pl-11 pr-4 py-3 bg-white hover:bg-neutral-50/50 focus:bg-white text-sm border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amc-navy transition-all shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-3 text-[10px] bg-neutral-200 text-neutral-600 font-bold px-1.5 py-0.5 rounded uppercase hover:bg-neutral-300 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-neutral-200 pb-4">
          <div className="flex bg-neutral-100 p-1.5 rounded-xl border border-neutral-200/50">
            {(["ALL", "UG", "PG"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs font-bold tracking-wider uppercase rounded-lg transition-all ${
                  selectedCategory === cat
                    ? "bg-amc-navy text-white shadow-md"
                    : "text-neutral-500 hover:text-[#161D4A]"
                }`}
              >
                {cat === "ALL" ? "All Programs" : cat === "UG" ? "Undergraduate (UG)" : "Postgraduate (PG)"}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="inline-block w-2.5 h-2.5 bg-[#FED304] rounded-full animate-pulse" />
            <span>Found <strong>{filteredPrograms.length}</strong> Program Streams</span>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((prog) => (
              <motion.div
                key={prog.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-2xl p-6 border border-neutral-100 shadow-md hover:shadow-xl hover:border-amc-lightblue/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Label */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#161D4A] uppercase bg-[#ADDDF1]/30 py-1 px-2.5 rounded">
                      {prog.category === "UG" ? "Undergraduate" : prog.category === "PG" ? "Postgraduate" : "UG & PG Hub"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-amc-navy font-sans mb-3 line-clamp-2 leading-snug group-hover:text-[#161D4A]/90">
                    {prog.title}
                  </h3>

                  {/* Program description */}
                  <p className="text-xs text-neutral-600 mb-5 leading-relaxed">
                    {prog.desc}
                  </p>

                  {/* List of Specializations (exactly from source) */}
                  <div className="space-y-2 border-t pt-4 mb-6">
                    {prog.id === "bba" ? (
                      <>
                        <span className="text-[10px] font-mono tracking-widest uppercase block text-neutral-400 font-bold">
                          Courses Available
                        </span>
                        <ul className="space-y-1.5 mb-4">
                          {prog.bullets.slice(0, 4).map((bullet, index) => (
                            <li key={index} id={`prog-${prog.id}-course-${index}`} className="flex items-start gap-2 text-xs">
                              {/* Round point styled exactly to prompt specs */}
                              <span className="w-1.5 h-1.5 bg-[#FED304] rounded-full mt-1.5 shrink-0" />
                              <span className="text-neutral-700 font-medium group-hover:text-[#161D4A] transition-colors">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <span className="text-[10px] font-mono tracking-widest uppercase block text-neutral-400 font-bold pt-2 border-t border-dashed border-neutral-100">
                          Specialisations Available
                        </span>
                        <ul className="space-y-1.5">
                          {prog.bullets.slice(4).map((bullet, index) => (
                            <li key={index} id={`prog-${prog.id}-spec-${index}`} className="flex items-start gap-2 text-xs">
                              {/* Round point styled exactly to prompt specs */}
                              <span className="w-1.5 h-1.5 bg-[#FED304] rounded-full mt-1.5 shrink-0" />
                              <span className="text-neutral-700 font-medium group-hover:text-[#161D4A] transition-colors">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : prog.id === "bcom" ? (
                      <>
                        <span className="text-[10px] font-mono tracking-widest uppercase block text-neutral-400 font-bold">
                          Courses Available
                        </span>
                        <ul className="space-y-1.5 mb-4">
                          {prog.bullets.slice(0, 4).map((bullet, index) => (
                            <li key={index} id={`prog-${prog.id}-course-${index}`} className="flex items-start gap-2 text-xs">
                              {/* Round point styled exactly to prompt specs */}
                              <span className="w-1.5 h-1.5 bg-[#FED304] rounded-full mt-1.5 shrink-0" />
                              <span className="text-neutral-700 font-medium group-hover:text-[#161D4A] transition-colors">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <span className="text-[10px] font-mono tracking-widest uppercase block text-neutral-400 font-bold pt-2 border-t border-dashed border-neutral-100">
                          Specialisation Available
                        </span>
                        <ul className="space-y-1.5">
                          {prog.bullets.slice(4).map((bullet, index) => (
                            <li key={index} id={`prog-${prog.id}-spec-${index}`} className="flex items-start gap-2 text-xs">
                              {/* Round point styled exactly to prompt specs */}
                              <span className="w-1.5 h-1.5 bg-[#FED304] rounded-full mt-1.5 shrink-0" />
                              <span className="text-neutral-700 font-medium group-hover:text-[#161D4A] transition-colors">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : prog.id === "bca" ? (
                      <>
                        <span className="text-[10px] font-mono tracking-widest uppercase block text-neutral-400 font-bold">
                          Courses Available
                        </span>
                        <ul className="space-y-1.5 mb-4">
                          {prog.bullets.slice(0, 4).map((bullet, index) => (
                            <li key={index} id={`prog-${prog.id}-course-${index}`} className="flex items-start gap-2 text-xs">
                              {/* Round point styled exactly to prompt specs */}
                              <span className="w-1.5 h-1.5 bg-[#FED304] rounded-full mt-1.5 shrink-0" />
                              <span className="text-neutral-700 font-medium group-hover:text-[#161D4A] transition-colors">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <span className="text-[10px] font-mono tracking-widest uppercase block text-neutral-400 font-bold pt-2 border-t border-dashed border-neutral-100">
                          Specialisation Available
                        </span>
                        <ul className="space-y-1.5">
                          {prog.bullets.slice(4).map((bullet, index) => (
                            <li key={index} id={`prog-${prog.id}-spec-${index}`} className="flex items-start gap-2 text-xs">
                              {/* Round point styled exactly to prompt specs */}
                              <span className="w-1.5 h-1.5 bg-[#FED304] rounded-full mt-1.5 shrink-0" />
                              <span className="text-neutral-700 font-medium group-hover:text-[#161D4A] transition-colors">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <span className="text-[10px] font-mono tracking-widest uppercase block text-neutral-400 font-bold">
                          Courses Available
                        </span>
                        <ul className="space-y-1.5">
                          {prog.bullets.map((bullet, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs">
                              {/* Round point styled exactly to prompt specs */}
                              <span className="w-1.5 h-1.5 bg-[#FED304] rounded-full mt-1.5 shrink-0" />
                              <span className="text-neutral-700 font-medium group-hover:text-[#161D4A] transition-colors">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>

                {/* Application Trigger CTA */}
                <button
                  onClick={() => onOpenApply(prog.id)}
                  id={`apply-prog-btn-${prog.id}`}
                  className="w-full mt-auto py-3 px-4 bg-amc-navy text-white font-extrabold text-xs tracking-wider uppercase rounded-xl hover:bg-[#FED304] hover:text-[#161D4A] flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow transition-all duration-300"
                >
                  <span>Apply Now</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Zero search results state */}
          {filteredPrograms.length === 0 && (
            <div className="col-span-full bg-white rounded-2xl p-12 text-center border shadow-inner max-w-md mx-auto space-y-4">
              <div className="p-4 bg-amber-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto text-amber-500 border border-amber-100">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-amc-navy">No matches found</h4>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                No courses match standard search entry &quot;<strong>{searchTerm}</strong>&quot; under selected tab filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("ALL");
                }}
                className="inline-flex items-center gap-1 px-4 py-2 bg-[#161D4A] text-white hover:bg-neutral-800 rounded-lg text-xs font-bold transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
