import { User, Phone, BookOpen, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

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

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Name</label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Enter your full name" required className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 pl-10 pr-4 text-brand-blue placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(254,211,4,0.5)] focus:border-brand-yellow focus:bg-white transition-all shadow-sm" />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Phone</label>
            <div className="relative">
              <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="tel" placeholder="10-digit mobile number" required className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 pl-10 pr-4 text-brand-blue placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(254,211,4,0.5)] focus:border-brand-yellow focus:bg-white transition-all shadow-sm" />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Course Interest</label>
            <div className="relative">
              <BookOpen className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 z-10" />
              <select defaultValue="" required className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 pl-10 pr-4 text-brand-blue appearance-none focus:outline-none focus:ring-2 focus:ring-[rgba(254,211,4,0.5)] focus:border-brand-yellow focus:bg-white transition-all shadow-sm relative z-0">
                <option value="" disabled className="text-gray-400">Select a program</option>
                <option value="BBA">BBA (Bachelor of Business Administration)</option>
                <option value="BCom">BCom (Bachelor of Commerce)</option>
                <option value="MBA">MBA (Master of Business Administration)</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">City</label>
            <div className="relative">
              <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Select your city" required className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 pl-10 pr-4 text-brand-blue placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgba(254,211,4,0.5)] focus:border-brand-yellow focus:bg-white transition-all shadow-sm" />
            </div>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full bg-brand-yellow hover:bg-[#e5bd03] text-[#0f131f] font-bold tracking-wide text-lg py-4 rounded-md shadow-[0_4px_14px_0_rgba(254,211,4,0.39)] transition-all transform hover:-translate-y-0.5">
              APPLY NOW
            </button>
          </div>
        </form>

        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-center gap-2">
          <ShieldCheck className="w-[14px] h-[14px] text-amber-600 shrink-0" />
          <span className="text-[11px] text-gray-500 font-medium">Your private details are secure with AMC Admissions.</span>
        </div>
      </div>
    </div>
  );
}
