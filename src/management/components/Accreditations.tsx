import React from 'react';

const accreditations = [
  {
    name: 'All India Council for Technical Education (AICTE)',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png'
  },
  {
    name: 'Visvesvaraya Technological University (VTU)',
    logoUrl: 'https://vtu.ac.in/wp-content/uploads/2019/03/vtul-291x300.png'
  },
  {
    name: 'Bangalore University (BU)',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShdsovT-rQQV7RvRAJs4n_5L9ek3ACw8boQ&s'
  },
  {
    name: 'National Assessment and Accreditation Council (NAAC)',
    logoUrl: 'https://www.uxdt.nic.in/wp-content/uploads/2024/05/national-assessment-and-accreditation-council-01.jpg'
  },
  {
    name: 'National Board of Accreditation (NBA)',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFjacSLgEx-pJSKTvILH6FVBr6BHnczohDQ&s'
  }
];

export function Accreditations() {
  return (
    <section id="accreditations" className="bg-gray-50 py-14 lg:py-20 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-5 2xl:px-0 w-full mb-12 text-center">
        <h2 className="text-brand-dark font-display text-[28px] md:text-[32px] font-bold mb-4 tracking-tight leading-tight">
          Accreditations
        </h2>
        <div className="w-16 h-1.5 bg-brand-yellow mx-auto rounded-full"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 w-full">
        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-14">
          {accreditations.map((acc, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group w-[160px] md:w-[190px]"
            >
              <div className="bg-white hover:shadow-md transition-all duration-300 w-[130px] h-[130px] md:w-[160px] md:h-[160px] rounded-full flex items-center justify-center p-3 sm:p-4 mb-5 border border-gray-100 shadow-sm">
                <img 
                  src={acc.logoUrl} 
                  alt={acc.name} 
                  className="max-w-[120%] max-h-[120%] object-contain group-hover:scale-110 transition-all duration-300 mix-blend-multiply origin-center scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-center text-[13px] md:text-sm font-medium text-gray-600 leading-[1.4] group-hover:text-brand-dark transition-colors">
                {acc.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
