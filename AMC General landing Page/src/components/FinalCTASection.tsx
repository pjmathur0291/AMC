import React from 'react';

export default function FinalCTASection() {
  return (
    <section id="cta-form" className="py-20 md:py-28 bg-[#FFFFFF] text-[#161D4A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#161D4A] border-b-2 border-[#FED304] pb-1">
            Explore AMC Campus Life
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#161D4A]">
            Experience AMC of Institutions
          </h2>
          <p className="text-base sm:text-lg text-[#161D4A]/75 font-sans leading-relaxed">
            Take a virtual tour of our state-of-the-art campus, class infrastructure, and student laboratories.
          </p>
        </div>

        {/* Dynamic split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          
          {/* Instructions Block (Left Column) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono font-black text-[#161D4A]/50 bg-[#ADDDF1]/20 px-2.5 py-1 rounded">
                Campus Admission Tour
              </span>
              <h3 className="text-2xl font-black font-display text-[#161D4A] leading-tight">
                Watch Our Official Institutional Highlights
              </h3>
              <p className="text-sm text-[#161D4A]/70 leading-relaxed font-sans">
                Experience outstanding academic ecosystems, high-tech engineering facilities, campus greenery, and student life under the AMC Group of Institutions in Bangalore.
              </p>
            </div>

            <div className="space-y-2.5 bg-gradient-to-tr from-[#161D4A] to-[#161D4A] text-white p-5 rounded-2xl border border-transparent shadow-inner">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#FED304] font-mono">Admissions Metrics Hotline:</h4>
              <p className="text-xs text-[#ADDDF1]/90 font-mono leading-relaxed">
                Direct Counseling Office: +91 9902044113<br />
                General Academic Query: admissions@amceducation.in
              </p>
            </div>
          </div>

          {/* Form & Calendar Container (Right Column) -> NOW YOUTUBE VIDEO CONTAINER */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#161D4A] text-white rounded-2xl p-3 sm:p-4 border border-[#ADDDF1]/15 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-1/4 w-32 h-32 bg-[#FED304]/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-black">
                <iframe
                  src="https://www.youtube.com/embed/_cW3s4hAFP4"
                  title="AMC Group of Institutions Campus Video Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

