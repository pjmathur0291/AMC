import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Calendar, GraduationCap, AlertCircle, Trophy, FileText, Sparkles } from "lucide-react";
import { PROGRAMS } from "../data";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramId?: string;
}

export default function ApplyModal({ isOpen, onClose, defaultProgramId }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultProgramId || PROGRAMS[0].id,
    stream: "Science",
    academicScore: "",
    message: "",
    newsletter: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const selectedProgram = PROGRAMS.find((p) => p.id === formData.course) || PROGRAMS[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl text-amc-navy border border-amc-lightblue/30"
          >
            {/* Header background accents */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amc-yellow via-indigo-600 to-amc-lightblue" />

            <button
              onClick={onClose}
              id="close-modal-btn"
              className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-amc-navy hover:bg-neutral-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="p-3 bg-[#FED304]/10 rounded-xl text-amc-navy border border-[#FED304]/20 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#161D4A] uppercase bg-[#ADDDF1]/30 px-2.5 py-1 rounded">
                      Admissions Open 2026-27
                    </span>
                    <h3 className="text-2xl font-bold mt-2 text-amc-navy tracking-tight font-sans">
                      Start Your Journey at AMC
                    </h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      Fill out the details below to secure your counseling session and join Bangalore&apos;s Top College.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Grid Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-neutral-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Arjun Kumar"
                        className="w-full text-sm px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#161D4A] transition-all bg-neutral-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-neutral-700">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full text-sm px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#161D4A] transition-all bg-neutral-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-neutral-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="arjun@example.com"
                        className="w-full text-sm px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#161D4A] transition-all bg-neutral-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-neutral-700">
                        Target UG / PG Course
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full text-sm px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#161D4A] transition-all bg-neutral-50 focus:bg-white"
                      >
                        {PROGRAMS.map((program) => (
                          <option key={program.id} value={program.id}>
                            {program.title.split(" (")[0]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Program Bullet Helper View */}
                  <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200/60 text-xs">
                    <p className="font-bold text-neutral-700 mb-1 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amc-yellow fill-amc-yellow" /> Program Specializations & Tracks:
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {selectedProgram.bullets.map((b, idx) => (
                        <span key={idx} className="bg-white px-2 py-1 rounded border border-neutral-200 text-neutral-600 font-medium">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-neutral-700">
                        Academic Stream (Last Qualification)
                      </label>
                      <div className="flex gap-2">
                        {["Science", "Commerce", "Arts", "Other"].map((stream) => (
                          <button
                            key={stream}
                            type="button"
                            onClick={() => setFormData({ ...formData, stream })}
                            className={`flex-1 py-1.5 text-xs rounded border transition-all font-medium ${
                              formData.stream === stream
                                ? "bg-amc-navy text-white border-amc-navy shadow-sm"
                                : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100"
                            }`}
                          >
                            {stream}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-neutral-700">
                        Aggregate Score (%) / SGPA
                      </label>
                      <input
                        type="text"
                        value={formData.academicScore}
                        onChange={(e) => setFormData({ ...formData, academicScore: e.target.value })}
                        placeholder="e.g. 85% or 8.9 CGPA"
                        className="w-full text-sm px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#161D4A] transition-all bg-neutral-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Info Notice about Limited Seats */}
                  <div className="flex gap-2 p-3 bg-red-50/70 rounded-lg border border-red-100 text-xs text-red-800">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                    <div>
                      <span className="font-bold">Important Admission Update:</span> Limited seats are remaining for the 2026-27 academic session. All applications are prioritized in order of receipt.
                    </div>
                  </div>

                  {/* Submission and Action Buttons */}
                  <div className="pt-2 flex items-center justify-between gap-4">
                    <label className="flex items-center gap-2 select-none cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                        className="w-4 h-4 text-amc-navy rounded border-neutral-300 focus:ring-amc-navy"
                      />
                      <span className="text-xs text-neutral-500">I agree to receive admission updates & counselor callbacks.</span>
                    </label>

                    <button
                      type="submit"
                      disabled={loading}
                      id="submit-inquiry-btn"
                      className="px-6 py-3 bg-[#161D4A] text-white hover:bg-[#FED304] hover:text-[#161D4A] rounded-lg font-bold text-sm transition-all shadow-md focus:outline-none duration-300 shrink-0 flex items-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200 shadow-inner">
                  <Check className="w-8 h-8 text-green-600 stroke-[3]" />
                </div>
                
                <span className="text-xs font-mono font-bold uppercase py-1 px-2.5 bg-green-50 text-green-700 rounded border border-green-200">
                  Application Logged Successfully
                </span>

                <h3 className="text-2xl font-bold mt-4 text-amc-navy font-sans">
                  Thank you, {formData.name}!
                </h3>
                
                <p className="text-sm text-neutral-600 max-w-md mx-auto mt-2">
                  Your inquiry and preference for <strong className="text-amc-navy font-semibold">{selectedProgram.title.split(" (")[0]}</strong> has been recorded. Our admissions advisor will contact you at <span className="font-bold">{formData.phone}</span> within 24 hours.
                </p>

                <div className="my-6 p-4 bg-neutral-50 rounded-xl border border-neutral-200/50 text-left max-w-sm mx-auto space-y-2.5 text-xs">
                  <div className="flex justify-between border-b pb-1.5">
                    <span className="text-neutral-500 font-medium">Temporary App ID</span>
                    <strong className="text-neutral-800 font-mono">AMC-2026-{(Math.floor(Math.random() * 9000) + 1000)}</strong>
                  </div>
                  <div className="flex justify-between border-b pb-1.5">
                    <span className="text-neutral-500 font-medium">Selected Course</span>
                    <strong className="text-neutral-800 trim-text">{selectedProgram.title.split(" (")[0]}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-medium">Academic Stream</span>
                    <strong className="text-neutral-800">{formData.stream}</strong>
                  </div>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        course: PROGRAMS[0].id,
                        stream: "Science",
                        academicScore: "",
                        message: "",
                        newsletter: true
                      });
                    }}
                    className="px-4 py-2 text-xs border border-neutral-200 rounded-lg font-semibold hover:bg-neutral-50 text-neutral-500 hover:text-neutral-700 transition-colors"
                  >
                    Submit Another Application
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 bg-amc-navy hover:bg-[#FED304] hover:text-[#161D4A] text-white text-xs rounded-lg font-bold transition-all"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
