import { Check } from 'lucide-react';

interface HeroProps {
  onSuccessSubmit: (studentData: { name: string; course: string; email?: string }) => void;
}

export default function HeroSection({ onSuccessSubmit }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center bg-gray-50 overflow-hidden text-[#161D4A]"
    >
      {/* Background Banner Image with Relative/Absolute Setup */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="https://i.postimg.cc/85J01NHt/Image-Dithering-2x.webp"
          alt="AMC Campus Background"
          className="w-full h-full object-cover object-center filter opacity-90 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Smooth Left-to-Right Premium Gradient Shade for Optimal Readability & Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-white/10"></div>
      </div>

      {/* Decorative overlays */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ADDDF1]/30 rounded-full blur-3xl pointer-events-none z-10"></div>

      {/* Right-side cutout image sticking to the bottom, shifted slightly left for margins & visual balance */}
      <div className="absolute bottom-0 right-8 md:right-24 lg:right-40 xl:right-80 h-[60%] sm:h-[70%] lg:h-[85%] max-h-[650px] z-10 pointer-events-none select-none hidden md:block">
        <img
          src="https://i.postimg.cc/YCYHfcmx/Cutout.png"
          alt="Student Cutout"
          className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-25 w-full animate-in fade-in duration-700">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 md:space-y-8 text-left">

          {/* TOI Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#161D4A]/5 border border-[#161D4A]/10 px-4 py-2 rounded-full shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FED304] animate-pulse"></span>
            <p className="text-[#161D4A] text-xs font-bold uppercase tracking-wider font-mono">
              Top 5 Engineering Colleges in Bangalore (TOI)
            </p>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight font-display leading-tight text-[#161D4A]">
              Build Your Future at AMC
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#161D4A]/80">
              Top Engineering College in Bangalore
            </h2>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed max-w-2xl">
            Start your <strong className="text-[#161D4A] font-extrabold border-b-2 border-[#FED304]">BTech or MTech</strong> journey at AMC Engineering College, recognized among the <strong className="text-[#161D4A] font-extrabold font-display">Top 5 Engineering Colleges in Bangalore (TOI)</strong>, with industry-ready programs and strong career support.
          </p>

          {/* Highlights Grid */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#161D4A]/60 font-mono">Key Highlights:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "Ranked among Top Engineering Colleges in Bangalore",
                "Industry-focused BTech & MTech programs",
                "Hands-on learning with labs and real projects",
                "Strong placement support and career training"
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 group"
                  id={`hero-bullet-${index}`}
                >
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#161D4A]/5 flex items-center justify-center border border-[#161D4A]/10 group-hover:bg-[#161D4A] group-hover:text-white duration-200 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-[#161D4A] group-hover:text-[#FED304]" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 leading-snug group-hover:text-[#161D4A] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations Logos Container */}
          <div className="bg-white border border-[#161D4A]/10 px-6 py-4.5 rounded-2xl shadow-sm space-y-2.5 max-w-lg">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#161D4A]/60 block">
              Accreditations & Recognitions
            </span>
            <div className="flex flex-row flex-nowrap items-center justify-between gap-2.5">
              {[
                "https://i.postimg.cc/ry3Gx59f/image-28.png",
                "https://i.postimg.cc/ry3Gx597/image-28-1.png",
                "https://i.postimg.cc/NGS8mRxz/image-28-2.png",
                "https://i.postimg.cc/XNmKd9gh/image-28-3.png",
                "https://i.postimg.cc/wxZ5LDkr/image-28-4.png"
              ].map((logo, idx) => (
                <div key={idx} className="h-16 w-16 sm:h-20 sm:w-20 bg-white border border-gray-150 rounded-xl p-2.5 flex items-center justify-center shadow-2xs hover:shadow-xs transition-shadow flex-shrink-0">
                  <img
                    src={logo}
                    alt={`Accreditation Logo ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={() => scrollToSection('cta-form')}
              className="px-8 py-4 text-sm font-black bg-[#FED304] text-[#161D4A] border-2 border-[#FED304] rounded-xl hover:bg-[#FED304]/80 transition-all duration-200 transform hover:-translate-y-0.5 text-center shadow-md font-sans uppercase tracking-widest cursor-pointer"
            >
              Admissions Open — Apply Now
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="px-6 py-4 text-sm font-bold border-[0.5px] border-[#161D4A]/60 sm:border-[#161D4A]/20 text-[#161D4A] hover:border-[#161D4A] rounded-xl hover:bg-[#161D4A]/5 transition-all text-center cursor-pointer uppercase tracking-wider"
            >
              Browse Curriculums
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
