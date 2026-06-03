import React from 'react';
import { MapPin, Phone, Mail, Headset, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-blue pt-16 pb-8 border-t border-white/10 text-white font-sans">
      <div className="max-w-[1280px] mx-auto px-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-16">
          {/* Left Column */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className="bg-white rounded-lg p-3 inline-block mb-6">
              <img src="https://static.wixstatic.com/media/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png/v1/fill/w_952,h_496,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png" alt="AMC Engineering College" className="h-14 object-contain" />
            </div>
            
            <p className="text-gray-300 text-sm leading-loose max-w-[480px] mb-8 font-light">
              AMC Engineering College is committed to creating deep technical competency, high research productivity, and robust industry integrations for engineering professionals.
            </p>
            
            <div className="text-brand-yellow text-sm font-bold tracking-widest uppercase">
              APPROVED BY AICTE | AFFILIATED TO VTU BENGALURU
            </div>
          </div>

           {/* Middle Column */}
           <div className="md:col-span-3 lg:col-span-3">
             <h4 className="text-brand-yellow font-bold text-[13px] tracking-wider uppercase mb-6">
               QUICK LINKS
             </h4>
             <ul className="space-y-4">
               {[
                 { label: 'Programs', href: '#programs' },
                 { label: 'Placements', href: '#placements' },
                 { label: 'Why AMC', href: '#why-amc' },
                 { label: 'Campus Life', href: '#campus-life' },
                 { label: 'Accreditations', href: '#accreditations' }
               ].map((item) => (
                 <li key={item.label}>
                   <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm font-light">
                     {item.label}
                   </a>
                 </li>
               ))}
             </ul>
           </div>

           {/* Right Column */}
           <div className="md:col-span-4 lg:col-span-3">
             <h4 className="text-brand-yellow font-bold text-[13px] tracking-wider uppercase mb-6">
               AMC CAMPUS LOCATION
             </h4>
             <ul className="space-y-5">
               <li className="flex items-start gap-4">
                 <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                 <span className="text-gray-300 text-sm font-light leading-relaxed">
                   AMC Campus, 18th K.M. Bannerghatta Road,<br/>Bengaluru – 560083
                 </span>
               </li>
               <li className="flex items-center gap-4">
                 <Phone className="w-5 h-5 text-brand-yellow shrink-0" />
                 <span className="text-gray-300 text-sm font-light leading-relaxed">
                   +91 99020 44114
                 </span>
               </li>
               <li className="flex items-center gap-4">
                 <Mail className="w-5 h-5 text-brand-yellow shrink-0" />
                 <span className="text-gray-300 text-sm font-light leading-relaxed">
                   admissions@amceducation.in
                 </span>
               </li>
             </ul>
             
             <div className="mt-10 flex justify-end md:justify-start lg:justify-end">
               <button className="bg-brand-yellow hover:bg-[#e5bd03] text-brand-dark px-6 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(254,211,4,0.25)] transition-all">
                 <Headset className="w-[18px] h-[18px]" />
                 ADMISSIONS HELP
               </button>
             </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm font-light text-center md:text-left">
            © 2026 AMC Engineering College Bengaluru. All rights reserved. <span className="hidden md:inline mx-4">|</span><br className="md:hidden" /> Design and Developed By Mediagarh
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold tracking-widest text-white hover:text-brand-yellow transition-colors uppercase group"
          >
            BACK TO TOP
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
