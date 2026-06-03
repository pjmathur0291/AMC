import React from 'react';
import { Building2, Landmark, LineChart, Users, Lightbulb, Award } from 'lucide-react';

const careers = [
  {
    icon: Building2,
    iconBg: 'bg-[#fef6e0]',
    iconColor: 'text-[#f59e0b]',
    title: 'Corporate Roles',
  },
  {
    icon: Landmark,
    iconBg: 'bg-[#fce7f3]',
    iconColor: 'text-[#ec4899]',
    title: 'Finance & Accounting',
  },
  {
    icon: LineChart,
    iconBg: 'bg-[#e0f2fe]',
    iconColor: 'text-[#0ea5e9]',
    title: 'Marketing & Sales',
  },
  {
    icon: Users,
    iconBg: 'bg-[#f3e8ff]',
    iconColor: 'text-[#a855f7]',
    title: 'Human Resources',
  },
  {
    icon: Lightbulb,
    iconBg: 'bg-[#dcfce7]',
    iconColor: 'text-[#22c55e]',
    title: 'Entrepreneurship',
  }
];

export function Careers() {
  return (
    <section className="py-12 md:py-16 bg-[#f8f9fc] font-sans border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-5 w-full">
        {/* Headers */}
        <div className="text-center mb-10 flex flex-col items-center">
          <span className="text-[#1a1a4b] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
            Careers
          </span>
          <h2 className="text-[26px] md:text-[32px] font-black text-[#1a1a4b] leading-[1.2] tracking-tight mb-4 max-w-2xl">
            Career Opportunities After BBA, BCom, and MBA
          </h2>
          <div className="h-[2px] w-[100px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-70"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10 max-w-[1100px] mx-auto">
          {careers.map((career, idx) => {
            const Icon = career.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-[16px] p-5 w-full shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center justify-center min-h-[140px] group transition-all duration-300 hover:border-[#f59e0b]/50 hover:shadow-[0_12px_25px_rgba(245,158,11,0.12)] hover:-translate-y-1.5 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${career.iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                  <Icon className={`w-5 h-5 ${career.iconColor}`} strokeWidth={2.5} />
                </div>
                <h3 className="text-[#1a1a4b] text-[15px] font-bold leading-snug transition-colors duration-300">
                  {career.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="max-w-[700px] mx-auto bg-[#26255c] rounded-[16px] p-5 flex flex-col sm:flex-row items-center gap-4 shadow-[0_10px_30px_rgba(38,37,92,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-50"></div>
          <div className="w-12 h-12 shrink-0 rounded-full bg-[#ffb703] shadow-sm flex items-center justify-center">
            <Award className="w-6 h-6 text-[#1a1a4b]" strokeWidth={2.5} />
          </div>
          <p className="text-white/90 text-[14px] leading-relaxed font-light text-center sm:text-left">
            Every student graduates with practical hospitality skills, not just theoretical knowledge. <span className="font-medium text-white inline-block mt-0.5">Graduates can build careers across multiple industries and domains.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
