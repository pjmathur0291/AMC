/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EcosystemMarquee from "./components/EcosystemMarquee";
import AcademicPortfolioSection from "./components/AcademicPortfolioSection";
import Institutions from "./components/Institutions";
import Programs from "./components/Programs";
import WhyStudy from "./components/WhyStudy";
import Placements from "./components/Placements";
import Admissions from "./components/Admissions";
import StudentWorkSection from "./components/StudentWorkSection";
import SocialProofSection from "./components/SocialProofSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";
import ApplyModal from "./components/ApplyModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | undefined>(undefined);

  const handleOpenApply = (programId?: string) => {
    setSelectedProgramId(programId);
    setModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleSelectInstitution = (instituteId: string) => {
    // Scroll directly to programs index
    scrollToSection("programs");
  };

  return (
    <div className="min-h-screen bg-white text-amc-navy selection:bg-amc-yellow selection:text-amc-navy font-sans antialiased">
      {/* Dynamic Header Floating Navbar */}
      <Navbar onOpenApply={() => handleOpenApply()} />

      {/* Main Page Elements */}
      <main>
        {/* Section 1: Hero view banner with mesh background */}
        <Hero
          onExploreCourses={() => scrollToSection("programs")}
          onOpenApply={() => handleOpenApply()}
        />

        {/* Seamless scrolling marquee highlighting the AMC Ecosystem benefits and landmarks */}
        <EcosystemMarquee />

        {/* Section 1.5: Academic Portfolio Courses Grid */}
        <AcademicPortfolioSection
          onExploreCourses={() => scrollToSection("programs")}
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 2: Affiliating Institutions */}
        <Institutions
          onSelectInstitution={handleSelectInstitution}
          onOpenApply={() => handleOpenApply()}
        />

        {/* Section 3: Interactive Program Course Explorer */}
        <Programs
          onOpenApply={handleOpenApply}
          selectedFilterId={selectedProgramId}
        />

        {/* Section 4: Academic Quality Bento Dashboard */}
        <WhyStudy onOpenApply={() => handleOpenApply()} />

        {/* Section 5: Placements Track record and recruiter scrolling marquee */}
        <Placements onOpenApply={() => handleOpenApply()} />

        {/* Section 6: Admissions Steps layout Tracker */}
        <Admissions onOpenApply={() => handleOpenApply()} />

        {/* Section 6.5: Infinite marquee showcasing student exhibition and project work */}
        <StudentWorkSection />

        {/* Section 6.6: Social proof cards with student testimonies */}
        <SocialProofSection />

        {/* Section 7: Final counseling and admission application form */}
        <FinalCTASection />
      </main>

      {/* Section 8: Final Outro CTA & coordinates Footer layout */}
      <Footer
        onOpenApply={() => handleOpenApply()}
        onExploreCourses={() => scrollToSection("programs")}
      />

      {/* Interactive Trigger counseling query Modal */}
      <ApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProgramId={selectedProgramId}
      />
    </div>
  );
}
