import { useState } from 'react';
import { HelpCircle, ChevronRight, Compass, Rocket, Award, Lightbulb } from 'lucide-react';

export default function PainPointsSection() {
  const [activeConcern, setActiveConcern] = useState<number | null>(0);

  const concerns = [
    {
      problem: "Some students want a strong tech career.",
      solution: "We provide industry-aligned curricula, certified lab infrastructures, and immediate exposure to emerging specialties (such as AI, Robotics, Data Science). Students execute real-world engineering prototypes rather than just memorizing textbook pages.",
      icon: Compass,
      metric: "Industry Aligned"
    },
    {
      problem: "Some are looking for engineering colleges with good placements.",
      solution: "Our dedicated training and placement cell partners directly with global brands like Infosys, Flipkart, Unisys, etc. AMC ensures a stellar 95% placement rate, with highest packages scaling to ₹33 LPA.",
      icon: Award,
      metric: "95% Placed"
    },
    {
      problem: "Some are searching for the best options after 12th.",
      solution: "We host personal guidance sessions to trace your exact interests and map them to our diverse BTech program branches, helping you confidently choose your long-term scientific path.",
      icon: Rocket,
      metric: "Free Counseling"
    }
  ];

  return (
    <section id="pain-points" className="py-20 md:py-24 bg-[#161D4A] text-[#FFFFFF] relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ADDDF1]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FED304]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FED304] bg-[#FED304]/10 border border-[#FED304]/20 px-3 py-1 rounded">
            The Decision Paradigm
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#FFFFFF]">
            Still Searching for the Right Engineering College in Bangalore?
          </h2>
          <p className="text-sm sm:text-base text-[#ADDDF1] font-mono uppercase tracking-widest font-semibold">
            Choosing the right BTech college in Bangalore isn’t easy.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Interactive Concerns Accordion (Left column) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-left text-[#ADDDF1] mb-6 flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-[#FED304]" />
              <span>Core Challenges Faced by Engineering Aspirants</span>
            </h3>
            
            <div className="space-y-4">
              {concerns.map((item, index) => {
                const IconComponent = item.icon;
                const isSelected = activeConcern === index;
                
                return (
                  <div 
                    key={index}
                    onClick={() => setActiveConcern(isSelected ? null : index)}
                    className={`p-5 rounded-xl border-[0.5px] text-left cursor-pointer transition-all duration-300 ${
                      isSelected 
                        ? 'bg-[#FFFFFF]/5 border-[#FED304] shadow-lg shadow-[#FED304]/5 scale-[1.01]' 
                        : 'border-[#ADDDF1]/40 sm:border-[#ADDDF1]/15 hover:border-[#ADDDF1]/40 bg-[#161D4A]/10'
                    }`}
                    id={`concern-accordion-${index}`}
                  >
                    <div className="flex justify-between items-center sm:items-start space-x-4">
                      <div className="flex items-start space-x-4">
                        <div className={`p-2.5 rounded-lg border flex-shrink-0 transition-colors ${
                          isSelected 
                            ? 'bg-[#FED304] text-[#161D4A] border-[#FED304]' 
                            : 'bg-[#ADDDF1]/10 text-[#ADDDF1] border-[#ADDDF1]/20'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className={`text-base font-bold transition-colors ${isSelected ? 'text-[#FED304]' : 'text-[#FFFFFF]'}`}>
                            {item.problem}
                          </h4>
                          {isSelected && (
                            <p className="text-sm text-[#FFFFFF]/85 leading-relaxed mt-2 animate-in fade-in slide-in-from-top-1.5 duration-200">
                              {item.solution}
                            </p>
                          )}
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-[#ADDDF1]/70 flex-shrink-0 transform transition-transform duration-250 ${
                        isSelected ? 'rotate-90 text-[#FED304]' : ''
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solution Highlight Frame (Right column) */}
          <div className="lg:col-span-5 w-full">
            <div className="p-8 bg-gradient-to-br from-[#161D4A] to-[#161D4A]/90 border border-[#ADDDF1]/15 rounded-2xl shadow-xl space-y-6 text-left relative overflow-hidden group">
              <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-[#ADDDF1]/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-501"></div>
              
              <div className="w-12 h-12 rounded-xl bg-[#FED304]/10 border border-[#FED304]/25 flex items-center justify-center text-[#FED304]">
                <Lightbulb className="w-6 h-6" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#FFFFFF]">The AMC Promise</h3>
                <p className="text-sm text-[#FFFFFF]/85 leading-relaxed">
                  We don't just supply lessons; we construct launching pads. By pairing intensive laboratory work with placement mentoring from the outset, we dissolve the uncertainty of college hunting.
                </p>
              </div>

              <div className="border-t border-[#ADDDF1]/10 pt-4 mt-2">
                <blockquote className="text-sm font-semibold text-[#FED304] leading-relaxed">
                  At AMC, we help you turn your interest in engineering into real skills and career opportunities.
                </blockquote>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
