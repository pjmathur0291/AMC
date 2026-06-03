import React, { useState } from 'react';
import { BookOpen, TrendingUp, Briefcase, Award, Layers } from 'lucide-react';

const programsData = [
  {
    id: 'bba',
    tab: 'BBA',
    title: 'BBA (Bachelor of Business Administration)',
    image: 'https://i.postimg.cc/c1ktJSBB/PMV08455.jpg',
    imageBadge: 'BUSINESS MANAGEMENT',
    icon: TrendingUp,
    accentClass: 'text-blue-600',
    bgClass: 'bg-blue-600',
    lightBorder: 'border-blue-100',
    lightBg: 'bg-blue-50',
    coreAreas: [
      'Principles of Management',
      'Marketing & Sales',
      'Human Resource Management',
      'Business Analytics',
      'Entrepreneurship'
    ],
    careerPaths: ['Business Executive', 'Marketing Executive', 'HR Executive', 'Entrepreneur']
  },
  {
    id: 'bcom',
    tab: 'BCom',
    title: 'BCom (Bachelor of Commerce)',
    image: 'https://i.postimg.cc/FKK7vCk2/PMV08357.jpg',
    imageBadge: 'COMMERCE & FINANCE',
    icon: Briefcase,
    accentClass: 'text-emerald-600',
    bgClass: 'bg-emerald-600',
    lightBorder: 'border-emerald-100',
    lightBg: 'bg-emerald-50',
    coreAreas: [
      'Financial Accounting',
      'Taxation (Direct & Indirect)',
      'Corporate Accounting',
      'Business Law',
      'Auditing'
    ],
    careerPaths: ['Accountant', 'Auditor', 'Tax Consultant', 'Banking & Finance Roles']
  },
  {
    id: 'mba',
    tab: 'MBA',
    title: 'MBA (Master of Business Administration)',
    image: 'https://i.postimg.cc/dVLbK8tX/PMV08250.jpg',
    imageBadge: 'ADVANCED LEADERSHIP',
    icon: Award,
    accentClass: 'text-purple-600',
    bgClass: 'bg-purple-600',
    lightBorder: 'border-purple-100',
    lightBg: 'bg-purple-50',
    coreAreas: [
      'Marketing',
      'Finance',
      'Human Resources',
      'Business Analytics',
      'Operations'
    ],
    careerPaths: ['Manager', 'Business Analyst', 'Marketing Manager', 'Financial Analyst', 'Consultant']
  },
  {
    id: 'learnings',
    tab: 'What You Learn',
    title: 'What You Learn Across Programs',
    image: 'https://i.postimg.cc/J0hLDSMR/PMV08478.jpg',
    imageBadge: 'CORE COMPETENCIES',
    icon: Layers,
    accentClass: 'text-brand-dark',
    bgClass: 'bg-brand-dark',
    lightBorder: 'border-brand-dark/10',
    lightBg: 'bg-brand-dark/5',
    coreAreas: [
      'Business fundamentals and strategy',
      'Financial and analytical skills',
      'Communication and leadership development',
      'Industry-relevant tools and knowledge'
    ],
    careerPaths: []
  }
];

export function Programs() {
  const [activeTab, setActiveTab] = useState(programsData[0].id);

  const activeContent = programsData.find(p => p.id === activeTab) || programsData[0];
  const Icon = activeContent.icon;

  return (
    <section id="programs" className="py-16 md:py-20 bg-white font-sans">
      <div className="max-w-[1280px] mx-auto px-5 w-full">
        {/* Header and Tabs */}
        <div className="mb-10 text-center">
          <h2 className="text-[#1c2045] font-display text-[26px] md:text-[32px] font-black mb-8 tracking-tight">
            Choose the Right Course for Your Career Path
          </h2>
          
          <div className="bg-gray-50 border border-gray-100 p-1.5 rounded-full inline-flex flex-wrap gap-1 justify-center">
            {programsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 md:px-7 py-2.5 rounded-full text-[13px] md:text-[14px] font-bold tracking-tight transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-brand-yellow text-brand-dark shadow-sm' 
                    : 'text-gray-500 hover:text-brand-dark hover:bg-white'
                }`}
              >
                {tab.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          {/* Left: Image */}
          <div className="lg:w-1/2 w-full relative rounded-[20px] overflow-hidden min-h-[300px] sm:min-h-[360px] lg:h-[420px] order-2 lg:order-1">
             <img 
               key={activeContent.id}
               src={activeContent.image} 
               alt={activeContent.title}
               className="absolute inset-0 w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
             />
             <div className="absolute bottom-5 left-5 bg-white px-4 py-2 rounded-full flex items-center gap-2.5 shadow-md">
                <div className={`w-2.5 h-2.5 rounded-full ${activeContent.bgClass}`}></div>
                <span className="text-[11px] font-bold tracking-widest text-gray-800 uppercase">
                  {activeContent.imageBadge}
                </span>
             </div>
          </div>

          {/* Right: Info */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center order-1 lg:order-2">
             <div className="relative animate-in slide-in-from-right-4 fade-in duration-500">
                <div className="flex items-center gap-3.5 mb-6">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeContent.lightBg} ${activeContent.accentClass}`}>
                     <Icon className="w-6 h-6" />
                   </div>
                   <h4 className="text-[20px] md:text-[24px] font-extrabold text-[#1c2045] tracking-tight">{activeContent.title}</h4>
                </div>

                <div className="mb-6">
                   <p className="text-gray-400 font-bold mb-4 text-[11px] uppercase tracking-widest">Core Areas of Study</p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                     {activeContent.coreAreas.map((area, idx) => (
                       <li key={idx} className="flex items-start text-gray-700 text-[14px] md:text-[15px] font-medium leading-relaxed">
                         <span className={`mr-2.5 font-bold mt-0.5 text-lg leading-none ${activeContent.accentClass}`}>&bull;</span>
                         {area}
                       </li>
                     ))}
                   </ul>
                </div>

                {activeContent.careerPaths.length > 0 && (
                  <div className={`mt-8 p-5 rounded-2xl ${activeContent.lightBg} border ${activeContent.lightBorder} mb-8`}>
                     <p className={`font-bold mb-3 text-[12px] uppercase tracking-widest ${activeContent.accentClass}`}>Career Paths</p>
                     <div className="flex flex-wrap gap-2.5">
                       {activeContent.careerPaths.map((path, idx) => (
                         <span key={idx} className={`bg-white border ${activeContent.lightBorder} text-gray-800 shadow-sm text-[11px] font-bold px-3.5 py-1.5 rounded-md uppercase tracking-wider`}>
                           {path}
                         </span>
                       ))}
                     </div>
                  </div>
                )}

                <button className="bg-brand-dark hover:bg-[#a9181a] text-white font-bold text-[13px] tracking-wide uppercase px-8 py-3.5 rounded-full transition-all hover:shadow-lg">
                  Apply Now
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
