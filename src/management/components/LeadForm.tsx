import { ShieldCheck, Sparkles } from 'lucide-react';
import EdmissionFormIframe from './EdmissionFormIframe';

export function LeadForm() {
  return (
    <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full relative z-20 flex flex-col overflow-hidden">
      {/* Header section (Dark) */}
      <div className="bg-brand-dark pt-8 pb-6 px-8 relative border-b-4 border-brand-yellow">
        <h3 className="text-white font-display text-2xl font-bold">Apply Now</h3>
        <p className="text-gray-400 mt-1.5 text-sm leading-snug">Fill the form to secure your admission & benefits</p>
      </div>

      {/* Form Body (White) */}
      <div className="p-8 border border-gray-100 rounded-b-xl">
        <div className="flex items-center gap-3 p-3.5 mb-6 rounded-md bg-brand-light/15 border border-[#ADDDF1] text-brand-blue">
          <div className="bg-brand-yellow p-1.5 rounded-sm shrink-0 shadow-sm text-brand-blue">
            <Sparkles className="w-[18px] h-[18px]" />
          </div>
          <h4 className="font-bold text-[13px] tracking-tight uppercase">Free Career Counseling Session</h4>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-100">
          <EdmissionFormIframe />
        </div>

        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-center gap-2">
          <ShieldCheck className="w-[14px] h-[14px] text-amber-600 shrink-0" />
          <span className="text-[11px] text-gray-500 font-medium">Your private details are secure with AMC Admissions.</span>
        </div>
      </div>
    </div>
  );
}
