import React, { useState } from "react";
import { HERO_DATA } from "../data";
import { BookOpen, GraduationCap, ChevronRight, Award, Compass, Sparkles, Send, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onExploreCourses: () => void;
  onOpenApply: () => void;
}

export default function Hero({ onExploreCourses, onOpenApply }: HeroProps) {
  // Course tags from string
  const coursePills = HERO_DATA.courses.split(" | ");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    stateLoc: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.phone) {
      setIsSubmitted(true);
    }
  };

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
      {/* Background Banner Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* The main background banner photo */}
        <img 
          src="https://i.postimg.cc/85J01NHt/Image-Dithering-2x.webp" 
          alt="AMC Campus Background" 
          className="w-full h-full object-cover object-center filter opacity-90 contrast-105"
          referrerPolicy="no-referrer"
        />

        {/* Overlay Layer 1: Smooth horizontal gradient ensuring crisp left-side text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/75 to-transparent"></div>

        {/* Overlay Layer 2: Subtle vertical gradient fading to white at the bottom for section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-white/10"></div>
      </div>

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#ADDDF1]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FED304]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Visual/Highlight Panel */}
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

            {/* Quick Accreditation Badges */}
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

            {/* CTA Buttons */}
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

          {/* Right Column: Dummy Admission Inquiry Form */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-2xl relative overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#FED304] text-[#161D4A] font-mono text-[9px] font-black uppercase rounded-bl-xl tracking-widest">
                FAST TRACK ADMISSION
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 text-left">
                    <h3 className="text-xl font-black text-[#161D4A] font-sans">
                      Start Campus Enquiry
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      Reserve your seat and schedule a campus tour model under Bannerghatta.
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {/* Full Name */}
                    <div className="text-left">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#161D4A] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        id="hero-name-input"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A] outline-none transition-all bg-slate-50/50"
                      />
                    </div>

                    {/* Email and Phone side by side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#161D4A] mb-1">
                          Email ID
                        </label>
                        <input
                          type="email"
                          placeholder="rahul@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A] outline-none transition-all bg-slate-50/50"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#161D4A] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          placeholder="10-digit mobile"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A] outline-none transition-all bg-slate-50/50"
                        />
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div className="text-left">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#161D4A] mb-1">
                        Desired Course Program
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A] outline-none transition-all bg-slate-50/50"
                      >
                        <option value="">-- Choose Specializations --</option>
                        <option value="CSE">B.E. Computer Science & Engineering</option>
                        <option value="CSE-DS">B.E. CSE (Data Science)</option>
                        <option value="CSE-AIML">B.E. CSE (Artificial Intelligence & ML)</option>
                        <option value="ISE">B.E. Information Science & Engineering</option>
                        <option value="Aero">B.E. Aeronautical Engineering</option>
                        <option value="Biotech">B.Sc. / M.Sc. Biotechnology</option>
                        <option value="MBA">MBA Program</option>
                        <option value="MCA">MCA Program</option>
                        <option value="BBA">BBA / BBA Aviation Management</option>
                        <option value="BCom">B.Com / B.Com with ACCA</option>
                      </select>
                    </div>

                    {/* State Location */}
                    <div className="text-left">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#161D4A] mb-1">
                        State of Residence
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Karnataka"
                        value={formData.stateLoc}
                        onChange={(e) => setFormData({ ...formData, stateLoc: e.target.value })}
                        className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A] outline-none transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-[#161D4A] text-white hover:bg-[#FED304] hover:text-[#161D4A] font-extrabold rounded-xl transition-all duration-300 text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow cursor-pointer mt-4"
                  >
                    Submit Enquiry
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-[10px] text-slate-400 font-mono text-center">
                    🔒 Secure Admissions Gateway — 2026 Batch
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full mx-auto flex items-center justify-center text-emerald-500 border border-emerald-100">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-black text-[#161D4A] font-sans">
                      Enquiry Submitted successfully!
                    </h3>
                    <p className="text-xs text-slate-650 font-sans max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#161D4A]">{formData.fullName}</strong>. An academic counselor will contact you at <strong className="text-[#161D4A]">{formData.phone}</strong> shortly to discuss options.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: "", email: "", phone: "", course: "", stateLoc: "" });
                    }}
                    className="mt-6 text-xs text-[#161D4A] font-bold font-mono uppercase bg-slate-100 hover:bg-[#FED304] hover:text-[#161D4A] transition-all px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 border border-slate-200 shadow-sm"
                  >
                    Submit another Response
                  </button>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

