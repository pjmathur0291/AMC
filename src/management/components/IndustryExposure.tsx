import React from 'react';

const HIGHLIGHTS = [
  {
    id: 1,
    title: 'Guest lectures from industry professionals',
  },
  {
    id: 2,
    title: 'Workshops and training sessions',
  },
  {
    id: 3,
    title: 'Internship opportunities',
  },
  {
    id: 4,
    title: 'Industry interactions and exposure',
  }
];

export function IndustryExposure() {
  return (
    <section id="industry-exposure" className="bg-white py-16 md:py-24 font-sans border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-5 w-full">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-start">
          {/* Left: Image */}
          <div className="w-full lg:w-[60%]">
             <img 
               src="https://i.postimg.cc/L6sfkSGn/PMV08296.jpg" 
               alt="Industry Exposure" 
               className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover rounded-[4px]"
             />
          </div>
          
          {/* Right: Content List */}
          <div className="w-full lg:w-[40%] flex flex-col pt-2 lg:pt-4">
             <h2 className="text-[32px] md:text-[36px] font-bold text-[#3d185e] mb-1 font-sans tracking-tight">
               Learn Beyond the Classroom
             </h2>
             
             <div className="flex flex-col w-full mt-4">
               {HIGHLIGHTS.map((item) => {
                 return (
                   <div
                     key={item.id}
                     className="py-4 md:py-5 border-b-[1.5px] border-gray-200 text-gray-800"
                   >
                     <h3 className="text-[17px] md:text-[19px] font-medium flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-[#9e1c6b] block"></span>
                       {item.title}
                     </h3>
                   </div>
                 );
               })}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
