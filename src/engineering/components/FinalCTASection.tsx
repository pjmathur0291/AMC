import EdmissionFormIframe from './EdmissionFormIframe';

export default function FinalCTASection() {
  return (
    <section id="cta-form" className="py-20 md:py-28 bg-[#FFFFFF] text-[#161D4A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#161D4A] border-b-2 border-[#FED304] pb-1">
            Enrolment Intake Open
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#161D4A]">
            Apply to AMC
          </h2>
          <p className="text-base sm:text-lg text-[#161D4A]/75 font-sans leading-relaxed">
            Start your journey at one of the top engineering colleges in Bangalore with strong placements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono font-black text-[#161D4A]/50 bg-[#ADDDF1]/20 px-2.5 py-1 rounded">
                Free Academic Advisory Session
              </span>
              <h3 className="text-2xl font-black font-display text-[#161D4A] leading-tight">
                Book Your Free Engineering Career Counseling Session
              </h3>
              <p className="text-sm text-[#161D4A]/70 leading-relaxed font-sans">
                Our senior academic advisors will evaluate your high school scores or bachelor degrees, trace your
                engineering interests, and outline the ideal career paths.
              </p>
            </div>

            <div className="space-y-2.5 bg-gradient-to-tr from-[#161D4A] to-[#161D4A] text-white p-5 rounded-2xl border border-transparent shadow-inner">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#FED304] font-mono">
                Admissions Metrics Hotline:
              </h4>
              <p className="text-xs text-[#ADDDF1]/90 font-mono leading-relaxed">
                Direct Counseling Office: +91 9902044114
                <br />
                General Academic Query: admissions@amceducation.in
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <EdmissionFormIframe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
