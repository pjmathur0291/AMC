import React from 'react';

export function StudentExperience() {
  return (
    <section className="relative w-full py-16 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://i.postimg.cc/fbjXMR6Y/PMV08487.jpg" 
          alt="Student Experience" 
          className="w-full h-full object-cover"
        />
        {/* Blur Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 lg:to-transparent lg:from-transparent lg:via-black/20 lg:backdrop-blur-sm backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1280px] mx-auto w-full relative z-10 flex flex-col lg:flex-row justify-center items-center px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row w-full lg:w-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-md overflow-hidden">
          {/* First Box */}
          <div className="bg-brand-yellow text-brand-dark p-8 md:p-12 lg:w-[340px] xl:w-[400px] flex flex-col justify-center min-h-[300px]">
            <h2 className="text-[26px] md:text-[32px] font-display font-bold leading-[1.2] mb-5">
              From Classroom Learning to Career-Ready Skills
            </h2>
            <p className="text-brand-dark/90 font-medium text-[15px] leading-relaxed">
              Students at AMC Degree College gain experience through:
            </p>
          </div>

          {/* Second Box */}
          <div className="bg-brand-dark text-white p-8 md:p-12 lg:w-[420px] xl:w-[480px] flex flex-col justify-center min-h-[300px]">
            <ul className="space-y-4 mb-4">
              <li className="flex items-start">
                <span className="mr-3 text-brand-yellow font-bold text-lg leading-none mt-0.5">•</span>
                <span className="text-white/90 font-medium text-[15px] leading-[1.4]">Case studies and business simulations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-brand-yellow font-bold text-lg leading-none mt-0.5">•</span>
                <span className="text-white/90 font-medium text-[15px] leading-[1.4]">Presentations and group projects</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-brand-yellow font-bold text-lg leading-none mt-0.5">•</span>
                <span className="text-white/90 font-medium text-[15px] leading-[1.4]">Internships and industry exposure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-brand-yellow font-bold text-lg leading-none mt-0.5">•</span>
                <span className="text-white/90 font-medium text-[15px] leading-[1.4]">Skill-based training programs</span>
              </li>
            </ul>
            <div className="pt-6 mt-6 border-t border-white/10">
              <p className="font-semibold text-brand-yellow text-[15px] leading-relaxed">
                Every student graduates with practical knowledge and career-ready skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
