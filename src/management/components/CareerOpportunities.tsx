import { Building2, GraduationCap, Sparkles } from 'lucide-react';

export function CareerOpportunities() {
  return (
    <section className="bg-brand-blue py-12 lg:py-16 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-5 2xl:px-0 w-full">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <h2 className="text-white font-display text-[28px] md:text-[32px] font-bold mb-3 tracking-tight leading-tight">
              Career Opportunities
            </h2>
            <p className="text-[#a0a8d6] text-[15px] md:text-[16px] leading-[1.6]">
              Students at AMC Degree College step into the hospitality industry with practical<br className="hidden md:block" />
              skills, hands-on experience, and dedicated placement support.
            </p>
          </div>
          
          <div className="bg-brand-yellow rounded-xl px-6 py-4 min-w-[200px] text-center shrink-0 shadow-lg">
            <div className="font-display font-black text-[36px] leading-none text-brand-dark mb-1 tracking-tight">
              20k+
            </div>
            <div className="text-brand-dark text-[10px] font-semibold tracking-[0.1em] uppercase">
              Alumni Network
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-10"></div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {/* Card 1 */}
          <div className="bg-[#1c2254]/80 border border-white/5 rounded-xl p-6 md:p-8 hover:bg-[#20275e] transition-colors duration-300">
            <Building2 className="w-[24px] h-[24px] text-brand-yellow mb-5" strokeWidth={1.5} />
            <h3 className="text-white font-display text-[18px] font-bold mb-3 tracking-wide">
              Global Pathways
            </h3>
            <p className="text-[#98a1cc] text-[14px] leading-[1.6]">
              Extensive career pathways across luxury hotels, airlines, and international global events.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1c2254]/80 border border-white/5 rounded-xl p-6 md:p-8 hover:bg-[#20275e] transition-colors duration-300">
            <GraduationCap className="w-[24px] h-[24px] text-brand-yellow mb-5" strokeWidth={1.5} />
            <h3 className="text-white font-display text-[18px] font-bold mb-3 tracking-wide">
              Guaranteed Internships
            </h3>
            <p className="text-[#98a1cc] text-[14px] leading-[1.6]">
              Access guaranteed internships with leading global hotels along with dedicated professional training.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1c2254]/80 border border-white/5 rounded-xl p-6 md:p-8 hover:bg-[#20275e] transition-colors duration-300">
            <Sparkles className="w-[24px] h-[24px] text-brand-yellow mb-5" strokeWidth={1.5} />
            <h3 className="text-white font-display text-[18px] font-bold mb-3 tracking-wide">
              Industry Exposure
            </h3>
            <p className="text-[#98a1cc] text-[14px] leading-[1.6]">
              Gain hands-on exposure and insights from top-tier hospitality brands through immersive industry tie-ups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
