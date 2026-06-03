import React from 'react';

const testimonials = [
  {
    image: "https://i.postimg.cc/qqxw5dTs/F-P09745-(2).jpg",
    quote: "AMC helped me build the confidence to enter the corporate world.",
    name: "Sneha P",
    batch: "Fourth Year, Batch 2022"
  },
  {
    image: "https://i.postimg.cc/26Gy3HFk/PMV08512.jpg",
    quote: "The practical learning approach made concepts easy to understand.",
    name: "Pratheek K",
    batch: "Fourth Year, Batch 2022"
  },
  {
    image: "https://i.postimg.cc/0jS4c4tB/F-P09751.jpg",
    quote: "A great place to develop business and communication skills.",
    name: "Abdul Wahab",
    batch: "Fourth Year, Batch 2022"
  }
];

export function SocialProof() {
  return (
    <section className="py-20 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 w-full">
        {/* Headers */}
        <div className="mb-14 text-center md:text-left pl-2">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#351b5c] leading-[1.2] tracking-tight">
            What Our Students Say
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-16 gap-x-8 xl:gap-x-0 flex-wrap lg:flex-nowrap">
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative w-[340px] sm:w-[380px] xl:w-[410px] h-[360px] shrink-0 mx-auto lg:mx-0 overflow-visible">
              
              {/* Image Container (Left) */}
              <div className="absolute left-0 top-0 w-[180px] sm:w-[200px] xl:w-[220px] h-[340px] z-0">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-full h-full object-cover object-top" 
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
              
              {/* Text Box Container (Right overlap) */}
              <div className="absolute right-0 top-[60px] w-[190px] sm:w-[220px] xl:w-[240px] h-[250px] bg-[#f7f7f7] shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-10 flex flex-col justify-center items-center px-4 sm:px-6">
                
                {/* Quote Text */}
                <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed text-center italic mt-auto mb-auto">
                  "{t.quote}"
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

