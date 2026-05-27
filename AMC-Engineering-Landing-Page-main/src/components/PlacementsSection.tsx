import { useState, useMemo } from 'react';
import { Globe, Award, TrendingUp, DollarSign, ArrowRight, ShieldCheck, HelpCircle, Building2 } from 'lucide-react';
import { CAREER_PATHS, TOP_RECRUITERS, ACCREDITATIONS } from '../data';

export default function PlacementsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDegree, setActiveDegree] = useState<'B.Tech' | 'M.Tech'>('B.Tech');
  const [activeCourse, setActiveCourse] = useState('All');

  // When degree changes, reset course to 'All'
  const handleDegreeChange = (degree: 'B.Tech' | 'M.Tech') => {
    setActiveDegree(degree);
    setActiveCourse('All');
  };

  // Derive courses for the active degree
  const courses = useMemo(() => {
    const degreePaths = CAREER_PATHS.filter(path => path.degree === activeDegree);
    const courseSet = new Set(degreePaths.map((path) => path.category));
    return ['All', ...Array.from(courseSet)];
  }, [activeDegree]);

  // Filter career paths based on selected degree, course, and search input
  const filteredCareerPaths = useMemo(() => {
    return CAREER_PATHS.filter((path) => {
      const matchDegree = path.degree === activeDegree;
      const matchSearch = path.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCourse = activeCourse === 'All' || path.category === activeCourse;
      return matchDegree && matchSearch && matchCourse;
    });
  }, [searchTerm, activeDegree, activeCourse]);

  return (
    <section id="placements" className="py-20 md:py-28 bg-[#FFFFFF] text-[#161D4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Placements Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#161D4A] border-b-2 border-[#FED304] pb-1">
            Placements & Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#161D4A]">
            Strong Placements That Turn Learning Into Careers
          </h2>
          <p className="text-base sm:text-lg text-[#161D4A]/75 font-sans leading-relaxed">
            Students at AMC Engineering College step into real-world careers with the right skills and guidance.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-20">
          {[
            { metric: "20000+", label: "Alumni Network", icon: Globe },
            { metric: "95%", label: "Students Placed", icon: Award },
            { metric: "₹33 LPA", label: "Highest Package", icon: TrendingUp },
            { metric: "₹5.5 LPA", label: "Median Salary", icon: DollarSign },
            { metric: "50+", label: "Recruiters from Fortune 500 Companies", icon: Building2 }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between bg-[#161D4A] text-[#FFFFFF] shadow-xl border border-white/5 ${i === 4 ? 'col-span-2 md:col-span-1' : ''
                  }`}
                id={`stat-card-${i}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 rounded-xl bg-[#FED304]/10 border border-[#FED304]/20">
                      <Icon className="w-5 fill-none stroke-[2] text-[#FED304]" />
                    </div>
                  </div>
                  <div className="font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-none mb-2 font-display text-white">
                    {stat.metric}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ADDDF1]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <hr className="border-[#ADDDF1]/20 my-16" />

        {/* Career Paths Explorer */}
        <div className="space-y-10" id="career-paths">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#161D4A]">
                Career Paths
              </h3>
              <p className="text-xs sm:text-sm text-[#161D4A]/70 max-w-xl">
                Explore the professional trajectories mapped for our engineering cohorts. Filter by stream.
              </p>
            </div>
          </div>

          {/* Degree and Course Filters */}
          <div className="space-y-4">
            {/* Degree Switch */}
            <div className="flex space-x-3">
              {(['B.Tech', 'M.Tech'] as const).map((degree) => (
                <button
                  key={degree}
                  onClick={() => handleDegreeChange(degree)}
                  className={`px-8 py-3 rounded-xl text-sm font-black tracking-widest uppercase transition-all duration-200 cursor-pointer ${activeDegree === degree
                    ? 'bg-[#FED304] text-[#161D4A] border-[0.5px] border-[#FED304] shadow-md transform -translate-y-0.5'
                    : 'bg-white text-[#161D4A]/70 border-[0.5px] border-[#161D4A]/30 sm:border-[#161D4A]/10 hover:border-[#161D4A]/30 hover:bg-gray-50'
                    }`}
                >
                  {degree}
                </button>
              ))}
            </div>

            {/* Course Switch */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
              {courses.map((course) => (
                <button
                  key={course}
                  onClick={() => setActiveCourse(course)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-250 cursor-pointer whitespace-nowrap ${activeCourse === course
                    ? 'bg-[#161D4A] text-[#FFFFFF] shadow-sm'
                    : 'bg-[#ADDDF1]/15 text-[#161D4A]/80 hover:bg-[#ADDDF1]/30'
                    }`}
                >
                  {course}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Career Paths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCareerPaths.length > 0 ? (
              filteredCareerPaths.map((path, idx) => (
                <div
                  key={idx}
                  className="group relative p-5 bg-[#FFFFFF] rounded-xl border-[0.5px] border-[#161D4A]/30 sm:border-[#ADDDF1]/35 hover:border-[#161D4A] hover:shadow-md transition-all duration-200 flex items-center justify-between text-left"
                  id={`career-path-card-${idx}`}
                >
                  <div className="space-y-1.5 flex-1 pr-4">
                    <span className="text-[10px] font-bold text-[#161D4A]/50 uppercase tracking-widest font-mono">
                      {path.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#161D4A] leading-snug group-hover:text-[#161D4A]">
                      {path.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#ADDDF1]/10 flex items-center justify-center border border-[#ADDDF1]/20 group-hover:bg-[#FED304] transition-all duration-255 shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-[#161D4A] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-12 bg-[#ADDDF1]/10 rounded-2xl">
                <p className="text-sm font-semibold text-[#161D4A]/60">
                  No career paths matched your query "{searchTerm}". Try another keywords!
                </p>
              </div>
            )}
          </div>
        </div>

        <hr className="border-[#ADDDF1]/20 my-20" />

        {/* Recruiters & Accreditations (Three-Column Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">

          {/* Recruiters Column */}
          <div className="lg:col-span-4 space-y-5 text-left md:col-span-2 lg:col-span-4">
            <h3 className="text-xl font-bold font-display text-[#161D4A] border-b-2 border-[#FED304] inline-block pb-1">
              Top Recruiters
            </h3>
            <p className="text-sm text-[#161D4A]/70 leading-relaxed font-sans">
              Our graduates are routinely recruited by tier-one global technology enterprises and conglomerates.
            </p>

            {/* 3-Row Infinite Logo Slider Track */}
            <div className="slider-container relative space-y-3 overflow-hidden py-3 bg-gray-50/60 rounded-2xl border border-gray-150 p-3 shadow-inner">
              <style>{`
                @keyframes marqueeLeft {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                @keyframes marqueeRight {
                  0% { transform: translateX(-50%); }
                  100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                  display: flex;
                  width: max-content;
                  animation: marqueeLeft 18s linear infinite;
                }
                .animate-marquee-right {
                  display: flex;
                  width: max-content;
                  animation: marqueeRight 18s linear infinite;
                }
                .slider-container:hover .animate-marquee-left,
                .slider-container:hover .animate-marquee-right {
                  animation-play-state: paused;
                }
              `}</style>

              {/* Row 1: Leftward */}
              <div className="overflow-hidden flex">
                <div className="animate-marquee-left">
                  {[
                    "https://i.postimg.cc/cJzG0DQC/image-8.png",
                    "https://i.postimg.cc/pdSMR0Dm/image-8-3.png",
                    "https://i.postimg.cc/QMCrLLWZ/image-8-6.png",
                    "https://i.postimg.cc/wBrYgWhJ/image-8-5.png",
                    "https://i.postimg.cc/TPsvfkrp/image-8-1.png",
                    "https://i.postimg.cc/YSPBMX14/image-8-4.png",
                    "https://i.postimg.cc/Pq7nT6mp/image-8-2.png",
                    "https://i.postimg.cc/cJzG0DQC/image-8.png",
                    "https://i.postimg.cc/pdSMR0Dm/image-8-3.png",
                    "https://i.postimg.cc/QMCrLLWZ/image-8-6.png",
                    "https://i.postimg.cc/wBrYgWhJ/image-8-5.png",
                    "https://i.postimg.cc/TPsvfkrp/image-8-1.png",
                    "https://i.postimg.cc/YSPBMX14/image-8-4.png",
                    "https://i.postimg.cc/Pq7nT6mp/image-8-2.png"
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 mx-1.5 w-24 h-12 bg-white border-[0.5px] border-[#161D4A]/15 sm:border-gray-150 rounded-xl flex items-center justify-center p-2 shadow-xs hover:border-[#161D4A]/15 hover:shadow-sm transition-all duration-200"
                    >
                      <img
                        src={logo}
                        alt="Recruiter Logo"
                        className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Rightward */}
              <div className="overflow-hidden flex">
                <div className="animate-marquee-right">
                  {[
                    "https://i.postimg.cc/TPsvfkrp/image-8-1.png",
                    "https://i.postimg.cc/QMCrLLWZ/image-8-6.png",
                    "https://i.postimg.cc/YSPBMX14/image-8-4.png",
                    "https://i.postimg.cc/Pq7nT6mp/image-8-2.png",
                    "https://i.postimg.cc/wBrYgWhJ/image-8-5.png",
                    "https://i.postimg.cc/cJzG0DQC/image-8.png",
                    "https://i.postimg.cc/pdSMR0Dm/image-8-3.png",
                    "https://i.postimg.cc/TPsvfkrp/image-8-1.png",
                    "https://i.postimg.cc/QMCrLLWZ/image-8-6.png",
                    "https://i.postimg.cc/YSPBMX14/image-8-4.png",
                    "https://i.postimg.cc/Pq7nT6mp/image-8-2.png",
                    "https://i.postimg.cc/wBrYgWhJ/image-8-5.png",
                    "https://i.postimg.cc/cJzG0DQC/image-8.png",
                    "https://i.postimg.cc/pdSMR0Dm/image-8-3.png"
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 mx-1.5 w-24 h-12 bg-white border-[0.5px] border-[#161D4A]/15 sm:border-gray-150 rounded-xl flex items-center justify-center p-2 shadow-xs hover:border-[#161D4A]/15 hover:shadow-sm transition-all duration-200"
                    >
                      <img
                        src={logo}
                        alt="Recruiter Logo"
                        className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3: Leftward */}
              <div className="overflow-hidden flex">
                <div className="animate-marquee-left">
                  {[
                    "https://i.postimg.cc/wBrYgWhJ/image-8-5.png",
                    "https://i.postimg.cc/Pq7nT6mp/image-8-2.png",
                    "https://i.postimg.cc/cJzG0DQC/image-8.png",
                    "https://i.postimg.cc/YSPBMX14/image-8-4.png",
                    "https://i.postimg.cc/pdSMR0Dm/image-8-3.png",
                    "https://i.postimg.cc/QMCrLLWZ/image-8-6.png",
                    "https://i.postimg.cc/TPsvfkrp/image-8-1.png",
                    "https://i.postimg.cc/wBrYgWhJ/image-8-5.png",
                    "https://i.postimg.cc/Pq7nT6mp/image-8-2.png",
                    "https://i.postimg.cc/cJzG0DQC/image-8.png",
                    "https://i.postimg.cc/YSPBMX14/image-8-4.png",
                    "https://i.postimg.cc/pdSMR0Dm/image-8-3.png",
                    "https://i.postimg.cc/QMCrLLWZ/image-8-6.png",
                    "https://i.postimg.cc/TPsvfkrp/image-8-1.png"
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 mx-1.5 w-24 h-12 bg-white border-[0.5px] border-[#161D4A]/15 sm:border-gray-150 rounded-xl flex items-center justify-center p-2 shadow-xs hover:border-[#161D4A]/15 hover:shadow-sm transition-all duration-200"
                    >
                      <img
                        src={logo}
                        alt="Recruiter Logo"
                        className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#161D4A]/50 font-sans italic pt-1">
              Placements vary based on skills, branch, and performance.
            </p>
          </div>

          {/* New Center Visual Placement Card */}
          <div className="lg:col-span-4 space-y-4 text-left self-stretch flex flex-col justify-between">
            <div className="relative group overflow-hidden rounded-2xl border border-gray-150 shadow-sm flex-1 min-h-[250px] flex flex-col justify-end p-5">
              <img
                src="https://i.postimg.cc/6qq7y6qy/PMV08413.jpg"
                alt="Corporate training at AMC"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A] via-[#161D4A]/35 to-transparent z-10"></div>

              <div className="relative z-20 space-y-2">
                <span className="text-[9px] font-bold text-[#FED304] bg-[#FED304]/10 border border-[#FED304]/30 px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                  Corporate Readiness
                </span>
                <h4 className="text-sm sm:text-base font-black text-white leading-tight">
                  Intensive Pre-Placement Bootcamps & Training
                </h4>
                <p className="text-[11px] text-white/90 leading-relaxed font-sans">
                  From resume-building to deep-tech mock interviews, we align every student's core potential to corporate requisites.
                </p>
              </div>
            </div>
          </div>

          {/* Accreditations Column */}
          <div className="lg:col-span-4 space-y-5 text-left md:col-span-2 lg:col-span-4">
            <h3 className="text-xl font-bold font-display text-[#161D4A] border-b-2 border-[#FED304] inline-block pb-1">
              Accreditations
            </h3>
            <p className="text-sm text-[#161D4A]/70 leading-relaxed font-sans">
              AMC Engineering College is strictly regulated and certified by India's apex academic councils, verifying high operational margins and curricular standards.
            </p>
            <div className="space-y-3 pt-1">
              {ACCREDITATIONS.map((accred, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3 bg-gray-50 border border-gray-200/80 rounded-xl transition-all hover:translate-x-1 duration-150"
                  id={`accreditation-${idx}`}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#161D4A]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#161D4A]/90">
                    {accred}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
