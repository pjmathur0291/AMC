import React from "react";

const GALLERY_IMAGES = [
  "https://i.postimg.cc/x1gbR2Kb/DSC02416.jpg",
  "https://i.postimg.cc/PJqjHPJT/PMV08017.jpg",
  "https://i.postimg.cc/fTcdVXyv/DSC02470.jpg",
  "https://i.postimg.cc/mg9GTxLh/PMV08157.jpg",
  "https://i.postimg.cc/ZK8NW3n8/DSC02503.jpg",
  "https://i.postimg.cc/wMbdjgR6/PMV07698.jpg",
  "https://i.postimg.cc/59FLMDVd/DSC02544.jpg",
  "https://i.postimg.cc/bY5Mr6Fn/PMV08050.jpg",
  "https://i.postimg.cc/pVnzt3tw/DSC02572.jpg",
  "https://i.postimg.cc/C1LtB9gB/PMV07795.jpg",
  "https://i.postimg.cc/50DzCS88/GPH05181.jpg",
  "https://i.postimg.cc/ryHbshYx/PMV08135.jpg",
  "https://i.postimg.cc/0j4LqnhN/PMV08478.jpg",
  "https://i.postimg.cc/BvCkv4RR/PMV07865.jpg",
  "https://i.postimg.cc/15fQYnbN/PMV08028.jpg",
  "https://i.postimg.cc/zfWD2bbV/PMV07825.jpg",
  "https://i.postimg.cc/3xXbL3r8/PMV08167.jpg",
  "https://i.postimg.cc/RhbzZ4Jq/PMV08000.jpg",
  "https://i.postimg.cc/htmqKFD4/PMV08188.jpg",
  "https://i.postimg.cc/j22G9m3C/PMV08689.jpg",
  "https://i.postimg.cc/hv3qtcQG/PMV08188-1.jpg",
  "https://i.postimg.cc/hGqRjCvX/PMV08435.jpg",
  "https://i.postimg.cc/sgWR3Fjr/PMV08090.jpg"
];

export default function StudentWorkSection() {
  // Fisher-Yates stable dynamic shuffle to mix up the images on initial mount
  const shuffledImages = React.useMemo(() => {
    const list = [...GALLERY_IMAGES];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    return list;
  }, []);

  // Helper to double/repeat images to ensure continuous sliding track
  const getMarqueeItems = (images: string[]) => {
    const minRequiredCount = 20; // Ensure enough for a fully smooth sliding loop
    const repeatCount = Math.ceil(minRequiredCount / images.length) * 2;
    const result: string[] = [];
    for (let i = 0; i < repeatCount; i++) {
      result.push(...images);
    }
    return result;
  };

  const marqueeItems = getMarqueeItems(shuffledImages);


  return (
    <section id="student-work" className="py-20 md:py-24 bg-[#161D4A] relative overflow-hidden text-center">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ADDDF1]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FED304]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 relative z-10 space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight">
          From Concepts to Real Projects
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-medium text-[#ADDDF1]/90 max-w-2xl mx-auto">
          Students at AMC build practical experience through real projects, exhibitions, and industry workshops.
        </p>
      </div>

      {/* INFINITE RUNNING HORIZONTAL SLIDER WRAPPER */}
      <div className="w-full relative overflow-hidden select-none">
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#161D4A] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#161D4A] to-transparent z-20 pointer-events-none"></div>

        {/* Sliding track moving left to right */}
        <div className="flex flex-row flex-nowrap space-x-6 min-w-max animate-marquee-ltr-slow hover:[animation-play-state:paused]">
          {marqueeItems.map((image, idx) => (
            <div 
              key={idx}
              className="w-80 h-80 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border border-[#ADDDF1]/15 relative bg-black/20 flex-shrink-0 aspect-square shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={image} 
                alt={`Exhibition piece ${idx + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
