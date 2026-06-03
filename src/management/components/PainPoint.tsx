import React from 'react';

export function PainPoint() {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-brand-dark overflow-hidden">
      {/* Left Content */}
      <div className="text-white flex-1 flex items-center p-8 sm:p-10 lg:p-12 xl:pl-[15%] justify-center lg:justify-start">
        <div className="max-w-[480px] w-full">
          <div className="inline-block border border-brand-yellow text-brand-yellow px-3 py-1 mb-6 text-[11px] font-bold tracking-widest uppercase">
            Our Projects
          </div>
          <h2 className="text-2xl md:text-[28px] lg:text-3xl font-display font-medium leading-[1.25] mb-6">
            Still Searching for the Right Degree College in Bangalore?
          </h2>
          <div className="text-white/80 space-y-3 text-[14px] leading-[1.6]">
            <p>Choosing the right course after 12th can be confusing.</p>
            <ul className="space-y-2 mt-3 list-none">
              <li className="flex items-start">
                <span className="mr-2 text-brand-yellow font-medium">•</span>
                Some students want a strong foundation in business and management.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-yellow font-medium">•</span>
                Some are looking for commerce and finance-focused careers.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-yellow font-medium">•</span>
                Some are searching for the best BBA, BCom, or MBA colleges in Bangalore.
              </li>
            </ul>
            <p className="font-semibold text-white/90 mt-6 leading-[1.5]">
              At AMC Degree College, we help you turn your interests into real skills and career opportunities.
            </p>
          </div>
          <button className="mt-8 bg-brand-yellow hover:bg-[#e5bd03] text-brand-dark text-[13px] font-bold py-2.5 px-6 transition-colors">
            Read More
          </button>
        </div>
      </div>
      
      {/* Right Content - Video Embed */}
      <div className="flex-1 min-h-[300px] lg:min-h-[500px] relative w-full flex items-center justify-center p-8 sm:p-10 lg:p-12 xl:pr-[15%]">
        <div className="w-full h-full max-h-[400px] lg:max-h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            src="https://video.wixstatic.com/video/174df9_34e76e912ff9406a8ba3b01dd93fcde6/720p/mp4/file.mp4" 
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
