import { motion, AnimatePresence } from "motion/react";
import { X, GraduationCap } from "lucide-react";
import AdmissionForm from "./AdmissionForm";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramId?: string;
}

export default function ApplyModal({ isOpen, onClose, defaultProgramId }: ApplyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl text-amc-navy border border-amc-lightblue/30"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amc-yellow via-indigo-600 to-amc-lightblue" />

            <button
              onClick={onClose}
              id="close-modal-btn"
              className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-amc-navy hover:bg-neutral-100 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

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

              <AdmissionForm
                formId="modal-admission-form"
                nameInputId="modal-name-input"
                defaultProgramId={defaultProgramId}
                showHeader={false}
                submitLabel="Submit Form"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
