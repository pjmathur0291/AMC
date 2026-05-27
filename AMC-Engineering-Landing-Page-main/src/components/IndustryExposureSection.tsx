import { Presentation, Laptop, Flame, CalendarRange, Sparkles } from 'lucide-react';

export default function IndustryExposureSection() {
  const experiences = [
    {
      title: "Guest lectures",
      desc: "Regular interfaces with technology leaders, chief researchers, and corporate executives to track market shifts.",
      icon: Presentation,
      bannerText: "Executive Speeches",
      image: "https://i.postimg.cc/7YWTpzhY/PMV08350.jpg"
    },
    {
      title: "Workshops",
      desc: "Intensive training bootcamps on bleeding-edge developer tools, CAD frameworks, and mechanical machinery rigs.",
      icon: Laptop,
      bannerText: "Bootcamp Training",
      image: "https://i.postimg.cc/C1SZjHPZ/PMV08141.jpg"
    },
    {
      title: "Internships",
      desc: "Structural work listings in prominent research divisions and commercial enterprises during breaks to garner real experience.",
      icon: CalendarRange,
      bannerText: "Professional Placements",
      image: "https://i.postimg.cc/zB8LnStv/PMV08333.jpg"
    },
    {
      title: "Hackathons",
      desc: "High-octane collective building events pushing cohorts to code, wire, and present functional solutions within strict time limits.",
      icon: Flame,
      bannerText: "Active Competitions",
      image: "https://i.postimg.cc/rmMdSCnD/PMV08371.jpg"
    }
  ];

  return (
    <section id="industry-exposure" className="py-20 md:py-28 bg-[#FFFFFF] text-[#161D4A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#161D4A] border-b-2 border-[#FED304] pb-1">
            Global Networking
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#161D4A]">
            Best Engineering Colleges in Bangalore with Industry Exposure
          </h2>
          <p className="text-base text-[#161D4A]/70 leading-relaxed font-sans max-w-xl mx-auto">
            Our curriculum isn't quarantined inside school halls. We bridge the distance between theoretical studies and commercial deployment.
          </p>
        </div>

        {/* 4-Column Interlocking Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="group relative bg-white hover:bg-[#161D4A] border border-gray-150 hover:border-transparent rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 text-left"
                id={`exposure-card-${index}`}
              >
                <div>
                  {/* Image Header with Referrer Policy */}
                  <div className="h-40 w-full relative overflow-hidden">
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-full object-cover group-hover:scale-105 duration-350 transition-all filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white bg-[#161D4A]/80 border border-white/10 py-1 px-2.5 rounded-md leading-none backdrop-blur-sm shadow-sm group-hover:bg-[#FED304] group-hover:text-[#161D4A]">
                      {exp.bannerText}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-[#161D4A]/5 text-[#161D4A] group-hover:bg-[#FFFFFF]/10 group-hover:text-[#FED304] flex items-center justify-center transition-colors shadow-sm shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-black text-[#161D4A] group-hover:text-[#FFFFFF] transition-colors leading-tight">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#161D4A]/75 group-hover:text-[#FFFFFF]/80 transition-colors leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-2">
                  <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wide text-[#161D4A]/80 group-hover:text-[#FED304] group-hover:underline cursor-pointer">
                    <span>Explore schedule</span>
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
