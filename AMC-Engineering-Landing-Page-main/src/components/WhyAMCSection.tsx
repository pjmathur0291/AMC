import { Award, Compass, Heart, GraduationCap, ShieldAlert, Cpu } from 'lucide-react';

export default function WhyAMCSection() {
  const points = [
    {
      title: "Recognized Ranking",
      description: "Featured among Top 5 Engineering Colleges in Bangalore (TOI)",
      details: "A testament to our relentless pursuit of scholastic rigor representing premium pedagogy frameworks in India.",
      icon: Award
    },
    {
      title: "Industry-Relevant Learning",
      description: "Courses aligned with current industry needs",
      details: "Curriculums are continuously parsed alongside technical enterprises to ensure immediate employability upon graduation.",
      icon: Compass
    },
    {
      title: "Hands-On Training",
      description: "Focus on practical learning and real projects",
      details: "Equipped with advanced labs and micro-testing rigs where digital code blocks convert into physical mechanism variables.",
      icon: Cpu
    },
    {
      title: "Placement Support",
      description: "Focused on engineering placements in Bangalore and worldwide career opportunities",
      details: "Establishing strong multi-lateral partnerships with prominent conglomerates to anchor reliable career start pathways.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="why-amc" className="py-20 md:py-28 bg-[#FFFFFF] text-[#161D4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#161D4A] border-b-2 border-[#FED304] pb-1">
            Institutional Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#161D4A]">
            Why Choose a Top Engineering College in Bangalore
          </h2>
          <p className="text-sm sm:text-base text-[#161D4A]/70 leading-relaxed font-sans">
            AMC Engineering College merges intensive physical lab experiences with a robust syllabus, crafting leaders of tomorrow.
          </p>
        </div>

        {/* Split Grid: 5 columns image card, 7 columns 2x2 grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Large Campus Presentation (Left Column) */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-3xl border border-gray-150 shadow-md flex flex-col justify-end p-8 min-h-[380px] text-left">
            <img 
              src="https://i.postimg.cc/HLM9k2Kq/Rectangle-1.png" 
              alt="AMC Campus Infrastructure" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
            {/* Dark glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A] via-[#161D4A]/40 to-transparent z-10"></div>
            
            <div className="relative z-20 space-y-3.5">
              <span className="inline-block text-[10px] font-bold text-white bg-[#FED304]/20 border border-[#FED304]/30 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
                52-Acre Modern Campus
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-tight">
                An Inspiring Space to Learn
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed font-sans">
                Experience tree-lined avenues, a high-tech central library, research cells, recreation hubs, and advanced mechanical/computing setups designed for complete focus.
              </p>
            </div>
          </div>

          {/* Value Cards 2x2 Grid (Right Column) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-6 bg-gradient-to-b from-gray-50 to-gray-100/60 hover:from-[#161D4A] hover:to-[#161D4A] rounded-2xl border-[0.5px] border-gray-200/80 hover:border-transparent hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between"
                  id={`why-card-${index}`}
                >
                  <div className="space-y-4">
                    {/* Icon Accent */}
                    <div className="w-12 h-12 rounded-xl bg-[#161D4A]/5 group-hover:bg-white/10 flex items-center justify-center text-[#161D4A] group-hover:text-[#FED304] border border-[#161D4A]/10 group-hover:border-white/10 transition-colors shadow-sm">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-[#161D4A]/60 group-hover:text-[#ADDDF1]/80">
                        {point.title}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-[#161D4A] group-hover:text-white leading-snug">
                        {point.description}
                      </h4>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-[#161D4A]/10 group-hover:border-white/15">
                    <p className="text-xs text-[#161D4A]/70 group-hover:text-white/75 leading-relaxed font-sans">
                      {point.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
