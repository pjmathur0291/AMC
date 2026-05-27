import { Users, Workflow, Calendar, Landmark, BookOpen, Sparkles, Smile } from 'lucide-react';

export default function CampusLifeSection() {
  const experiences = [
    {
      title: "Technical clubs and communities",
      subtitle: "Code, Wire, Create",
      description: "Students congregate in specialized bodies (like Coding Clubs, Robotics Societies, Maker Labs, and Aerodesign Forums) to solve engineering problems collaboratively.",
      icon: Users,
      badge: "8+ Active Clubs",
      image: "https://i.postimg.cc/qRW22C3w/PMV08411.jpg"
    },
    {
      title: "Collaborative project culture",
      subtitle: "Shared Milestones",
      description: "A continuous loop of group prototypes, collaborative sandbox modules, and cross-disciplinary research builds that cultivate industrial soft skills.",
      icon: Workflow,
      badge: "Peer-to-Peer Labs",
      image: "https://i.postimg.cc/qBtLgpKV/PMV07963.jpg"
    },
    {
      title: "Campus events and activities",
      subtitle: "Vibrant Fests",
      description: "Host to annual national hackathons, collegiate tech expos, computing forums, and sporting tournaments to celebrate student potential.",
      icon: Calendar,
      badge: "Year-Round Calendar",
      image: "https://i.postimg.cc/BvCkv4RR/PMV07865.jpg"
    },
    {
      title: "A balanced academic environment",
      subtitle: "Serene Focus",
      description: "Framed by massive reading libraries, recreational centers, outdoor sports arenas, and quiet botanical zones favoring contemplative focus.",
      icon: Landmark,
      badge: "State of Art Infrastructure",
      image: "https://i.postimg.cc/wMJL2T51/PMV08250.jpg"
    }
  ];

  return (
    <section id="campus-life" className="py-20 md:py-28 bg-[#ADDDF1]/5 text-[#161D4A] relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#ADDDF1]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#161D4A] border-b-2 border-[#FED304] pb-1">
            Student Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#161D4A]">
            An Experience That Shapes Your Future
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#161D4A]/70 leading-relaxed font-sans max-w-xl mx-auto">
            At AMC Engineering College, students experience:
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16" id="campus-life-grid">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div 
                key={idx}
                className="group bg-white border border-gray-150 rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-left"
                id={`campus-item-${idx}`}
              >
                {/* Image panel */}
                <div className="w-full sm:w-52 aspect-square relative overflow-hidden shrink-0">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#161D4A]/10 group-hover:bg-[#161D4A]/0 transition-colors"></div>
                </div>

                {/* Text blocks & elements */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  {/* Top Meta header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-[10px] font-bold text-[#161D4A]/50 font-mono uppercase tracking-widest leading-none">
                        {exp.subtitle}
                      </span>
                      <span className="text-[10px] font-extrabold text-[#161D4A] bg-[#ADDDF1]/30 border border-[#ADDDF1]/40 py-1 px-2.5 rounded-full leading-none">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 rounded-lg bg-[#161D4A]/5 text-[#161D4A] border border-[#161D4A]/10 group-hover:bg-[#FED304] transition-all">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-[#161D4A] leading-tight mt-0.5">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#161D4A]/75 leading-relaxed font-sans">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing text exactly from PDF page 7 */}
        <div className="p-8 bg-[#161D4A] rounded-2xl border border-[#ADDDF1]/20 shadow-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5 max-w-xl">
            <h4 className="text-sm font-bold text-[#FED304] tracking-widest font-mono uppercase">
              Balanced Academic Development
            </h4>
            <p className="text-lg font-black text-[#FFFFFF] font-display">
              Because growth happens both inside and outside the classroom.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('cta-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#FED304] hover:bg-[#FED304]/90 text-[#161D4A] rounded-xl font-bold uppercase tracking-widest text-xs shadow-md shrink-0 transition-transform hover:-translate-y-0.5"
          >
            Schedule Campus Visit
          </button>
        </div>

      </div>
    </section>
  );
}
