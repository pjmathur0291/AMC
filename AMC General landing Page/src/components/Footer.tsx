import React, { useState } from "react";
import { OUTRO_SECTION } from "../data";
import { Mail, Phone, MapPin, GraduationCap, ArrowUp, Calendar, AlertTriangle, Sparkles, Send, Check } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  onOpenApply: () => void;
  onExploreCourses: () => void;
}

export default function Footer({ onOpenApply, onExploreCourses }: FooterProps) {
  const [callbackNumber, setCallbackNumber] = useState("");
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackNumber) return;
    setCallbackSubmitted(true);
    setTimeout(() => {
      setCallbackNumber("");
    }, 4000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-mesh-pattern overflow-hidden text-white pt-20 pb-8">
      {/* Visual glowing highlights */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amc-lightblue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-amc-yellow/10 rounded-full blur-2xl pointer-events-none" />

      {/* Main CTA Outro Card Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card section */}
        <div className="relative p-6 sm:p-12 md:p-16 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl text-center max-w-5xl mx-auto mb-16 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amc-yellow via-indigo-600 to-amc-lightblue" />

          {/* Sparkle decorative element */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase text-amc-yellow border border-white/10 mb-6 antialiased">
            <Sparkles className="w-3.5 h-3.5 text-amc-yellow animate-pulse" />
            Limited seats remaining for 2026-27
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-white font-sans">
            {OUTRO_SECTION.title1}
            <span className="block mt-1 text-[#FED304]">{OUTRO_SECTION.title2}</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto mt-6 leading-relaxed font-sans">
            {OUTRO_SECTION.desc}
          </p>

          {/* Action CTAs Verbatim as ordered by prompt */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={onOpenApply}
              id="outro-apply-btn"
              className="w-full sm:w-auto px-8 py-4 bg-[#FED304] hover:bg-white text-[#161D4A] font-extrabold text-sm tracking-widest uppercase rounded-xl shadow-lg transition-all duration-300 transform active:scale-95 duration-100 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{OUTRO_SECTION.actions.apply}</span>
            </button>

            <button
              onClick={onExploreCourses}
              id="outro-explore-btn"
              className="w-full sm:w-auto px-8 py-4 bg-white/15 hover:bg-[#161D4A] border border-white/20 text-white font-extrabold text-sm tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{OUTRO_SECTION.actions.explore}</span>
            </button>
          </div>
        </div>

        {/* Informative directories block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-16 pb-12 items-stretch">
          
          {/* Column 1: Institutional description (Span 4) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-white/95 px-3 py-2 rounded-xl inline-flex items-center justify-center shadow-lg border border-white/10">
                <img
                  src="https://i.postimg.cc/jSp3qGDG/institute-png-01-1.png"
                  alt="AMC Group Bangalore Logo"
                  referrerPolicy="no-referrer"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-sans max-w-sm mt-3">
              Established in 1993, AMC Group Bangalore comprises prestigious institutions AMCEC & AMC college, holds NAAC A+ and NBA accreditation, delivering industry-integrated degrees in Engineering, Technology, Commerce, and Management.
            </p>

            {/* Simulated Live Hotline Block */}
            <div className="flex items-center gap-1.5 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-amc-yellow font-medium max-w-xs">
              <span>Campus counselling runs daily from 9 AM - 5 PM.</span>
            </div>
          </div>

          {/* Column 2: Direct Contact Coordinates (Span 3) */}
          <div className="md:col-span-3 space-y-4">
            <strong className="block text-xs uppercase tracking-widest text-[#FED304] font-mono">
              Campus Coordinates
            </strong>

            <ul className="space-y-3 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FED304] shrink-0 mt-0.5" />
                <span>AMC Group of Institutions, Bannerghatta Main Road, Bangalore, Karnataka 560083</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FED304] shrink-0" />
                <span className="font-mono text-xs">+91 9902044113</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FED304] shrink-0" />
                <span className="hover:text-[#FED304] transition-colors">admissions@amceducation.in</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Callback Request Tracker Sub-Form (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <strong className="block text-xs uppercase tracking-widest text-[#FED304] font-mono">
              Request Instant Counselor Calls
            </strong>
            <p className="text-xs text-white/70">
              Provide your phone number to get a counseling advisor callback instantly.
            </p>

            {!callbackSubmitted ? (
              <form onSubmit={handleCallbackSubmit} className="flex gap-2">
                <input
                  type="tel"
                  required
                  value={callbackNumber}
                  onChange={(e) => setCallbackNumber(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/15 focus:bg-white focus:text-[#161D4A] outline-none text-xs rounded-xl border border-white/10 focus:ring-2 focus:ring-[#FED304] transition-all"
                />
                <button
                  type="submit"
                  aria-label="Send callback request"
                  className="px-4 py-3 bg-[#FED304] text-[#161D4A] rounded-xl hover:bg-white hover:text-amc-navy transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3.5 bg-green-500/10 text-green-300 rounded-xl border border-green-500/20 text-xs"
              >
                <Check className="w-4 h-4 text-green-400 stroke-[3]" />
                <span>Advisor calling back shortly! Thank you.</span>
              </motion.div>
            )}
          </div>

        </div>

        {/* Lower row with legal declarations and scroll up */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <div>
            <span>© 2026 AMC Group of Institutions, Bangalore. All Rights Reserved. Registered Under Educational Trust.</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white/10 hover:bg-[#FED304] hover:text-[#161D4A] border border-white/10 rounded-xl shadow-md transition-all self-center shrink-0 flex items-center gap-1 cursor-pointer font-bold uppercase tracking-wider text-[10px]"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
