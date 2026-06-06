import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlacementsSection from './components/PlacementsSection';
import PainPointsSection from './components/PainPointsSection';
import ProgramsSection from './components/ProgramsSection';
import WhyAMCSection from './components/WhyAMCSection';
import StudentWorkSection from './components/StudentWorkSection';
import IndustryExposureSection from './components/IndustryExposureSection';
import CampusLifeSection from './components/CampusLifeSection';
import SocialProofSection from './components/SocialProofSection';
import FinalCTASection from './components/FinalCTASection';
import { Phone, Mail, MapPin, ChevronUp, CheckCircle } from 'lucide-react';

export default function EngineeringLanding() {
  const [notification, setNotification] = useState<string | null>(null);

  const notifyUserFromFormSubmit = (data: { name: string; course: string }) => {
    setNotification(`Successfully registered counseling session for ${data.name} (${data.course})!`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] relative selection:bg-[#FED304] selection:text-[#161D4A] flex flex-col">
      {notification && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#FED304] text-[#161D4A] px-5 py-4 rounded-xl shadow-2xl border border-[#161D4A]/10 flex items-center space-x-3 max-w-sm animate-in slide-in-from-bottom-6 duration-300">
          <CheckCircle className="w-5 h-5 shrink-0 text-[#161D4A]" />
          <p className="text-xs font-bold leading-snug">{notification}</p>
        </div>
      )}

      <Navbar />

      <div className="relative flex-1 flex flex-col">
        <main className="relative flex flex-col">
          <HeroSection onSuccessSubmit={notifyUserFromFormSubmit} />
          <PlacementsSection />
          <PainPointsSection />
          <ProgramsSection />
          <WhyAMCSection />
          <StudentWorkSection />
          <IndustryExposureSection />
          <CampusLifeSection />
          <SocialProofSection />
          <FinalCTASection />
        </main>
      </div>

      <footer className="bg-[#161D4A] text-white pt-16 pb-8 border-t border-[#ADDDF1]/15 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FED304]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-[#ADDDF1]/10 pb-12 mb-10 text-left">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="https://i.postimg.cc/jSp3qGDG/institute-png-01-1.png"
                  alt="AMC Logo"
                  className="h-12 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-[#ADDDF1]/80 leading-relaxed max-w-sm">
                AMC Engineering College is committed to creating deep technical competency, high research productivity,
                and robust industry integrations for engineering professionals.
              </p>
              <div className="pt-2 text-xs text-[#FED304] font-mono uppercase tracking-widest">
                Approved by AICTE | Affiliated to VTU BENGALURU
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase font-extrabold text-[#FED304] tracking-widest font-mono border-b border-[#ADDDF1]/15 pb-2">
                Curricular Fastpaths
              </h4>
              <ul className="space-y-2.5 text-xs">
                {['Overview', 'Placements', 'Programs', 'Why AMC', 'Student Work', 'Campus Life'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(item.toLowerCase().replace(' ', '-'));
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-[#ADDDF1]/80 hover:text-white transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-4 text-xs">
              <h4 className="text-xs uppercase font-extrabold text-[#FED304] tracking-widest font-mono border-b border-[#ADDDF1]/15 pb-2">
                AMC Campus Location
              </h4>
              <div className="space-y-3.5">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#FED304] mt-0.5 shrink-0" />
                  <p className="text-[#ADDDF1]/90 leading-relaxed">
                    AMC Campus, 18th K.M. Bannerghatta Road,
                    <br />
                    Kalkere, Bengaluru, Karnataka 560083
                  </p>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#FED304] shrink-0" />
                  <span className="text-[#ADDDF1]/90"><a href="tel:+919902044114">+91 9902044114</a></span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-[#FED304] shrink-0" />
                  <span className="text-[#ADDDF1]/90">admissions@amceducation.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ADDDF1]/60">
            <p className="font-mono">&copy; {new Date().getFullYear()} AMC Engineering College Bengaluru. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <button onClick={scrollToTop} className="flex items-center space-x-1.5 hover:text-white">
                <span>Back to Top</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
