/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Headset } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoint } from './components/PainPoint';
import { CareerOpportunities } from './components/CareerOpportunities';
import { TopRecruiters } from './components/TopRecruiters';
import { Accreditations } from './components/Accreditations';
import { Programs } from './components/Programs';
import { WhyAMC } from './components/WhyAMC';
import { StudentExperience } from './components/StudentExperience';
import { IndustryExposure } from './components/IndustryExposure';
import { Careers } from './components/Careers';
import { SocialProof } from './components/SocialProof';
import { CampusLife } from './components/CampusLife';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyFooterBanner } from './components/StickyFooterBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-blue font-sans selection:bg-brand-yellow selection:text-brand-dark flex flex-col relative w-full overflow-x-hidden">
      <Header />
      <Hero />
      <CareerOpportunities />
      <TopRecruiters />
      <Accreditations />
      <PainPoint />
      <Programs />
      <WhyAMC />
      <StudentExperience />
      <IndustryExposure />
      <Careers />
      <SocialProof />
      <CampusLife />
      <FinalCTA />
      <Footer />

      {/* Fixed Sticky Footer Banner */}
      <StickyFooterBanner />

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-5 md:bottom-28 md:right-8 bg-brand-yellow hover:bg-[#e5bd03] text-brand-dark font-bold px-[22px] py-3.5 rounded-full shadow-[0_10px_25px_rgba(254,211,4,0.35)] flex items-center gap-2.5 z-50 transition-transform hover:-translate-y-1 hover:scale-105 border-[3px] border-white">
        <Headset className="w-[18px] h-[18px]" />
        <span className="tracking-wide text-[13px] uppercase">Admissions Help</span>
      </button>
    </div>
  );
}
