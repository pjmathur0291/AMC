/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  Sparkles,
  Check,
  Phone,
  User,
  MapPin,
  BookOpen,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  Search,
  ChefHat,
  Hotel,
  Briefcase,
  Utensils,
  Award,
  Plane,
  Calendar,
  Globe,
  Mail,
  CheckCircle2,
  Headphones,
  ChevronUp,
  Building2,
  TrendingUp,
  Ship,
  Coffee,
  Laptop,
  Map,
  Leaf,
  BriefcaseBusiness,
  Clock,
} from "lucide-react";
import LeadForm from "./components/LeadForm";

const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }: { end: number, duration?: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = React.useState(0);
  const counterRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={counterRef}>{prefix}{count}{suffix}</span>;
};

const placementsData = [
  {
    brand: "Taj",
    images: [
      "https://i.postimg.cc/6517rxcG/hq720.jpg",
      "https://i.postimg.cc/2yBTF7vY/pexels-vidit-goel-2136806-15227142.webp",
      "https://i.postimg.cc/gJtBK0TZ/pexels-fahadputhawala-32261194.jpg",
      "https://i.postimg.cc/XYSWS2Y4/Taj-ADDS-featured-image-1366x768-(1).jpg",
      "https://i.postimg.cc/MKkZqZ9b/mumbai-bombay.jpg",
    ],
    logoBg: "bg-white",
    customLogo: (
      <img
        src="https://i.postimg.cc/FzDcSfCz/ac082f37737c8c2740e5db1f7413453d.jpg"
        alt="Taj Hotels Logo"
        className="w-[80%] h-auto object-contain"
      />
    ),
  },
  {
    brand: "Marriott",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=600",
      "https://i.postimg.cc/xjLZW9hx/istockphoto-1412521055-612x612.jpg",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600",
      "https://i.postimg.cc/9Msj11Dk/images-(2).jpg",
    ],
    logoBg: "bg-white",
    customLogo: (
      <img
        src="https://i.postimg.cc/PqGrrXfp/Marriott-Logo-svg.png"
        alt="Marriott Hotels Logo"
        className="w-[80%] h-auto object-contain"
      />
    ),
  },
  {
    brand: "Hilton",
    images: [
      "https://i.postimg.cc/cHhnng6X/images-(3).jpg",
      "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&q=80&w=600",
      "https://i.postimg.cc/xjkmCCnj/hotel-exterior.avif",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600",
    ],
    logoBg: "bg-white",
    customLogo: (
      <img
        src="https://i.postimg.cc/rFF9Qckx/Hilton-Portland-Hotel-Logo-wine.png"
        alt="Hilton Hotels Logo"
        className="w-[80%] h-auto object-contain"
      />
    ),
  },
  {
    brand: "Hyatt",
    images: [
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=600",
      "https://i.postimg.cc/d3DjQmnC/hyatt-plans-to-open-11-new-hotels-in-india-by-2020-end.webp",
      "https://i.postimg.cc/wByzNSvm/images-(4).jpg",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80&w=600",
    ],
    logoBg: "bg-white",
    customLogo: (
      <img
        src="https://i.postimg.cc/Jh2nVNy2/images-(1).png"
        alt="Hyatt Hotels Logo"
        className="w-[80%] h-auto object-contain"
      />
    ),
  },
  {
    brand: "ITC Hotels",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600",
      "https://i.postimg.cc/bw6br2D9/images-(5).jpg",
      "https://i.postimg.cc/Pf8M7Kpk/itc-grand-bharat.png",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    ],
    logoBg: "bg-white",
    customLogo: (
      <img
        src="https://i.postimg.cc/cHCnf13F/images-(2).png"
        alt="ITC Hotels Logo"
        className="w-[80%] h-auto object-contain"
      />
    ),
  },
];

export default function App() {
  const [activeProgramTab, setActiveProgramTab] = React.useState<
    "bhm" | "core" | "learn" | "careers"
  >("bhm");
  const [activeCareerTab, setActiveCareerTab] = React.useState<
    "hotel" | "chef" | "airlines" | "hospitality"
  >("hotel");
  const [currentCampusSlide, setCurrentCampusSlide] = React.useState<number>(0);
  const [currentPlacementSlide, setCurrentPlacementSlide] =
    React.useState<number>(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCampusSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-slate-800 flex flex-col font-secondary select-none antialiased">
      <div className="flex-1 flex flex-col w-full">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-4">
        <div className="max-w-[1280px] mx-auto px-[20px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://static.wixstatic.com/media/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png/v1/fill/w_476,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png"
              alt="AMC Group of Institutions"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[11px] font-bold text-[#161D4A] uppercase tracking-widest bg-[#ADDDF1]/30 px-3.5 py-1.5 rounded-full">
              BHM Batch 2026
            </span>
            <a
              href="#apply-lead-form"
              onClick={(e) => {
                e.preventDefault();
                const formElement = document.getElementById("apply-lead-form");
                if (formElement) {
                  formElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-[#FED304] hover:bg-[#FED304] text-[#161D4A] px-5 py-2 text-[11.5px] font-black uppercase tracking-widest rounded-none transition-all duration-300 active:scale-95 shadow-sm inline-block"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </header>

      {/* 2. Main Hero Section / Landing Content with custom college campus background overlay */}
      <main
        className="flex-grow flex items-center justify-center text-white py-12 lg:py-20 relative overflow-hidden bg-[#161D4A]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(22, 29, 74, 0.92) 0%, rgba(22, 29, 74, 0.8) 45%, rgba(22, 29, 74, 0.3) 80%, rgba(22, 29, 74, 0.2) 100%), url('https://i.postimg.cc/bNqND6Bk/hero-img.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Visual accents for authentic designer feel */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FED304]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ADDDF1]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(254,211,4,0.05),transparent)] pointer-events-none" />

        <div className="max-w-[1280px] w-full mx-auto px-[20px] flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-center justify-between relative z-10">
          {/* Left Column: Hero Content */}
          <div className="w-full lg:w-1/2 flex flex-col text-left justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FED304] rounded-full w-fit mb-5 text-[#161D4A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[12px] font-bold tracking-wide font-secondary leading-none pb-[1px]">
                Leading Hotel Management College • Bangalore
              </span>
            </div>

            {/* Headline matching image */}
            <h1 className="text-[36px] sm:text-[42px] lg:text-[46px] font-bold tracking-tight leading-[1.1] text-white font-sans flex flex-col items-start">
              <span>Build Your Future in Hospitality at</span>
              <span className="inline-block bg-[#FED304] text-[#161D4A] px-4 py-1 lg:py-2 text-[52px] sm:text-[60px] lg:text-[72px] mt-2 mb-2 lg:mt-3 lg:mb-3 rounded-sm leading-none tracking-tight">
                AMC
              </span>
              <span>Degree College</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-200 text-[15px] sm:text-base leading-relaxed mt-5 max-w-lg font-secondary">
              Start your Bachelor of Hotel Management (BHM) journey at AMC
              Degree College, a leading hotel management college in Bangalore,
              with industry-focused training, practical exposure, and strong
              career support.
            </p>

            {/* Small yellow line */}
            <div className="w-12 h-1 bg-[#FED304] mt-6 mb-8 rounded-full" />

            {/* 2x2 Grid of Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 max-w-xl">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-[#FED304] flex items-center justify-center shrink-0 text-[#FED304] mt-0.5 text-[10px] font-black">
                  ✓
                </div>
                <p className="text-[13px] sm:text-[14px] text-white/90 leading-snug font-secondary">
                  Industry-focused hotel management courses
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-[#FED304] flex items-center justify-center shrink-0 text-[#FED304] mt-0.5 text-[10px] font-black">
                  ✓
                </div>
                <p className="text-[13px] sm:text-[14px] text-white/90 leading-snug font-secondary">
                  Practical training in kitchens, service, and hotel operations
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-[#FED304] flex items-center justify-center shrink-0 text-[#FED304] mt-0.5 text-[10px] font-black">
                  ✓
                </div>
                <p className="text-[13px] sm:text-[14px] text-white/90 leading-snug font-secondary">
                  Internship exposure with leading hospitality brands
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-[#FED304] flex items-center justify-center shrink-0 text-[#FED304] mt-0.5 text-[10px] font-black">
                  ✓
                </div>
                <p className="text-[13px] sm:text-[14px] text-white/90 leading-snug font-secondary">
                  Career support for hospitality roles in India and globally
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-10">
              <button className="bg-[#FED304] hover:bg-[#ffe145] text-[#161D4A] px-8 py-3.5 font-bold font-secondary text-[15px] rounded-md transition-all duration-300 active:scale-95 shadow-lg flex items-center gap-3 w-fit">
                Admissions Open — Apply Now
                <ChevronRight className="w-5 h-5 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* Right Column: Mandated Lead Form */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-[480px]">
              <LeadForm />
            </div>
          </div>
        </div>
      </main>

      {/* CAREER OPPORTUNITIES SECTION - MINIMAL */}
      <section className="bg-[#161D4A] py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-[20px] relative z-10">
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between border-b border-white/10 pb-10 mb-10">
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight font-sans">
                Career Opportunities
              </h2>
              <p className="mt-3 text-white/70 font-secondary text-sm md:text-base leading-relaxed">
                Students at AMC Degree College step into the hospitality industry with practical skills, hands-on experience, and dedicated placement support.
              </p>
            </div>
            
            <div className="shrink-0 bg-[#FED304] rounded-xl p-5 text-center shadow-lg w-full md:w-auto">
              <h3 className="text-3xl md:text-4xl font-black text-[#161D4A] tracking-tighter leading-none mb-1">
                20k+
              </h3>
              <p className="text-[#161D4A] font-medium text-[10px] tracking-widest uppercase">
                Alumni Network
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col gap-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#FED304]" />
                <h4 className="text-base md:text-lg font-bold text-white leading-tight">International Internships</h4>
              </div>
              
              <div className="flex flex-wrap gap-1.5 my-1">
                {["Mauritius", "Dubai", "Maldives", "Europe"].map((tab) => (
                  <span
                    key={tab}
                    className="px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-[#FED304] text-[#161D4A] shadow-sm"
                  >
                    {tab}
                  </span>
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed">
                Extensive career pathways across luxury hotels, airlines, and international global events.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col gap-3 hover:bg-white/10 transition-colors">
              <GraduationCap className="w-6 h-6 text-[#ADDDF1]" />
              <h4 className="text-base md:text-lg font-bold text-white leading-tight">Guaranteed Internships</h4>
              <p className="text-white/60 text-sm leading-relaxed">Access guaranteed internships with leading global hotels along with dedicated professional training.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col gap-3 hover:bg-white/10 transition-colors">
              <Sparkles className="w-6 h-6 text-[#FED304]" />
              <h4 className="text-base md:text-lg font-bold text-white leading-tight">Industry Exposure</h4>
              <p className="text-white/60 text-sm leading-relaxed">Gain hands-on exposure and insights from top-tier hospitality brands through immersive industry tie-ups.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 10.5 - TOP PLACEMENTS */}
      <section
        className="bg-white py-16 md:py-20 border-b border-gray-100"
        id="top-placements"
      >
        <div className="max-w-[1000px] mx-auto px-[20px] md:px-0 relative">
          {/* Header */}
          <div className="mb-6 md:mb-10 text-left">
            <h2 className="text-[28px] md:text-[40px] font-bold text-[#161D4A] tracking-tight font-sans leading-tight mb-1 md:mb-2">
              Top Placements
            </h2>
            <p className="text-[13px] md:text-[15px] text-gray-700 font-secondary tracking-wide">
              And industry interactions.
            </p>
          </div>

          <div className="relative w-full">
            {/* Carousel */}
            <div className="w-full relative overflow-hidden pb-4">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentPlacementSlide * 100}%)`,
                }}
              >
                {placementsData.map((placement, idx) => (
                  <div
                    key={idx}
                    className="w-full flex-shrink-0 px-2 sm:px-4 cursor-grab active:cursor-grabbing"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-10 md:grid-rows-2 gap-3 sm:gap-4 lg:gap-5 md:h-[380px] lg:h-[420px]">
                      {/* Left 0 */}
                      <div className="col-span-1 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-1 rounded-xl md:rounded-2xl overflow-hidden shadow-sm aspect-square md:aspect-auto md:order-none order-2 hover:shadow-md transition-shadow">
                        <img
                          src={placement.images[0]}
                          alt={`${placement.brand} view 1`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Left 1 */}
                      <div className="col-span-1 md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-1 rounded-xl md:rounded-2xl overflow-hidden shadow-sm aspect-square md:aspect-auto md:order-none order-3 hover:shadow-md transition-shadow">
                        <img
                          src={placement.images[1]}
                          alt={`${placement.brand} view 2`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Center Box */}
                      <div className="col-span-2 md:col-start-3 md:col-span-4 md:row-start-1 md:row-span-2 rounded-xl md:rounded-2xl overflow-hidden shadow-lg aspect-square md:aspect-auto md:order-none order-1 relative group">
                        <img
                          src={placement.images[2]}
                          alt={`${placement.brand} main`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                      </div>

                      {/* Right Top Left */}
                      <div className="col-span-1 md:col-start-7 md:col-span-2 md:row-start-1 md:row-span-1 rounded-xl md:rounded-2xl overflow-hidden shadow-sm aspect-square md:aspect-auto md:order-none order-4 hover:shadow-md transition-shadow">
                        <img
                          src={placement.images[3]}
                          alt={`${placement.brand} view 3`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Right Top Right */}
                      <div className="col-span-1 md:col-start-9 md:col-span-2 md:row-start-1 md:row-span-1 rounded-xl md:rounded-2xl overflow-hidden shadow-sm aspect-square md:aspect-auto md:order-none order-5 hover:shadow-md transition-shadow">
                        <img
                          src={placement.images[4]}
                          alt={`${placement.brand} view 4`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Right Bottom Logo */}
                      <div
                        className={`col-span-2 md:col-start-7 md:col-span-4 md:row-start-2 md:row-span-1 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 ${placement.logoBg} flex items-center justify-center p-4 overflow-hidden aspect-[2/1] md:aspect-auto md:order-none order-6 hover:shadow-md transition-shadow`}
                      >
                        {placement.customLogo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button
              onClick={() =>
                setCurrentPlacementSlide(
                  (prev) =>
                    (prev - 1 + placementsData.length) % placementsData.length,
                )
              }
              className="hidden md:flex absolute left-[-60px] lg:left-[-80px] top-[calc(50%-8px)] -translate-y-1/2 w-10 h-10 rounded-full bg-[#161D4A] text-white items-center justify-center hover:bg-[#161D4A] hover:scale-105 active:scale-95 transition-all shadow-md z-20 outline-none"
              aria-label="Previous Placement"
            >
              <ChevronLeft className="w-5 h-5 pr-0.5" />
            </button>
            <button
              onClick={() =>
                setCurrentPlacementSlide(
                  (prev) => (prev + 1) % placementsData.length,
                )
              }
              className="hidden md:flex absolute right-[-60px] lg:right-[-80px] top-[calc(50%-8px)] -translate-y-1/2 w-10 h-10 rounded-full bg-[#161D4A] text-white items-center justify-center hover:bg-[#161D4A] hover:scale-105 active:scale-95 transition-all shadow-md z-20 outline-none"
              aria-label="Next Placement"
            >
              <ChevronRight className="w-5 h-5 pl-0.5" />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden justify-center items-center gap-4 mt-2">
            <button
              onClick={() =>
                setCurrentPlacementSlide(
                  (prev) =>
                    (prev - 1 + placementsData.length) % placementsData.length,
                )
              }
              className="w-10 h-10 rounded-full bg-[#161D4A] text-white flex items-center justify-center hover:bg-[#161D4A] active:scale-95 transition-all shadow-md z-20 outline-none"
              aria-label="Previous Placement"
            >
              <ChevronLeft className="w-5 h-5 pr-0.5" />
            </button>
            <button
              onClick={() =>
                setCurrentPlacementSlide(
                  (prev) => (prev + 1) % placementsData.length,
                )
              }
              className="w-10 h-10 rounded-full bg-[#161D4A] text-white flex items-center justify-center hover:bg-[#161D4A] active:scale-95 transition-all shadow-md z-20 outline-none"
              aria-label="Next Placement"
            >
              <ChevronRight className="w-5 h-5 pl-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* COLLEGE INFRASTRUCTURE SECTION */}
      <section className="bg-gradient-to-b from-[#161D4A] via-[#101538] to-[#0A0D26] py-16 md:py-20 text-white relative overflow-hidden">
        {/* Soft designer lighting / glow effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#FED304]/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#ADDDF1]/12 rounded-full blur-[130px] pointer-events-none" />
        
        {/* Subtle mesh/radial light source reflection */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(254,211,4,0.06),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(173,221,241,0.08),transparent_55%)] pointer-events-none" />

        {/* Grid Texture Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-[1000px] mx-auto px-[20px] relative z-10">
          <div className="mb-6 md:mb-10 text-center mx-auto max-w-xl">
            <h2 className="text-[28px] md:text-[40px] font-bold text-white tracking-tight font-sans leading-tight mb-1 md:mb-2">
              Campus Infrastructure
            </h2>
            <p className="text-[13px] md:text-[15px] text-white/70 font-secondary tracking-wide">
              Explore our world-class hospitality training facilities.
            </p>
          </div>

          {/* Wide video container stretching to the container width */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(22,29,74,0.5)] border border-white/10 bg-black/45 aspect-video hover:border-white/20 transition-all duration-500">
            <video 
              className="w-full h-full object-cover"
              src="https://video.wixstatic.com/video/174df9_34e76e912ff9406a8ba3b01dd93fcde6/720p/mp4/file.mp4"
              controls
              muted
              loop
              autoPlay
              playsInline
            />
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS SECTION (Logos) */}
      <section className="bg-[#FDF9F9] py-12 border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto px-[20px] md:px-0">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {/* AICTE Logo */}
            <div className="bg-white rounded-md shadow-sm border border-red-50 p-0 w-[140px] h-[100px] md:w-[180px] md:h-[120px] flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.postimg.cc/VSzVDbxT/image-28.png" 
                alt="AICTE Approved" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* NAAC Logo */}
            <div className="bg-white rounded-md shadow-sm border border-red-50 p-0 w-[140px] h-[100px] md:w-[180px] md:h-[120px] flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.postimg.cc/sB3NwZkk/image-30.png" 
                alt="NAAC Accredited" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Bangalore University Logo */}
            <div className="bg-white rounded-md shadow-sm border border-red-50 p-0 w-[140px] h-[100px] md:w-[180px] md:h-[120px] flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.postimg.cc/NLBJsr90/image-29.png" 
                alt="Bangalore University" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – PAIN POINT (DESIGNED EXACTLY AS THE REFERENCE IMAGE UI) */}
      <section className="bg-white py-14 border-b border-gray-100 relative">
        <div className="max-w-[1280px] mx-auto px-[20px]">
          {/* Header layout exactly as in the reference */}
          <div className="mb-10 lg:mb-14">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2421] tracking-tight leading-snug max-w-4xl font-sans">
              Still Searching for the Right Hotel <br className="hidden sm:block" />
              Management Course in Bangalore?
            </h2>
          </div>

          {/* Grid Layout of the main row and content columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] items-start">
            {/* Left Box: Elegant Cocktail / Beverage strainer pouring visual with overlay buttons matching reference */}
            <div className="col-span-1 lg:col-span-7 relative rounded border border-gray-100 shadow-md aspect-[16/10] overflow-hidden bg-gray-50">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"
                alt="Hospitality Service & Strainer Pouring"
                className="w-full h-full object-cover rounded"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Box: Poised Text paragraphs with clean typography matching reference */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-between h-full pt-1">
              <div className="space-y-5 font-secondary text-[14px] md:text-[15px] leading-relaxed text-gray-700">
                <p className="font-medium text-gray-900">
                  Choosing the right career after 12th can feel uncertain.
                </p>

                <ul className="space-y-4 border-l-2 border-slate-100 pl-4 text-gray-600">
                  <li className="relative">
                    <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-[#FED304]" />
                    Some students aspire to build a career in premium luxury hotels, focusing on <span className="font-semibold text-gray-900">international travel</span> and global hospitality management, where they can interact with diverse cultures and work in top-tier environments.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-[#FED304]" />
                    Many are drawn to highly rewarding <span className="font-semibold text-gray-900">cruise ship jobs</span> with elite global fleets, offering substantial tax-free income, exceptional saving potential, and the unique opportunity to voyage around the world.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-[#FED304]" />
                    Others aim to capture booming <span className="font-semibold text-gray-900">food-tech (like Zomato) and culinary entrepreneurship</span> opportunities, launching their own innovative cloud kitchens, fine-dining ventures, or modern restaurant startups.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-[#FED304]" />
                    Strategic thinkers recognize the massive <span className="font-semibold text-gray-900">industry growth numbers</span>, with hospitality hiring hitting record highs post-pandemic, guaranteeing long-term job security, competitive salaries, and rapid career progression.
                  </li>
                </ul>

                <p className="pt-4 mt-2 border-t border-gray-100 font-semibold text-[#161D4A] text-[15px]">
                  At AMC Degree College, we help you turn your interest in
                  hospitality into real-world skills and career opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - POWERFUL STATS & OPPORTUNITIES */}
      <section className="relative py-16 lg:py-24 bg-[#161D4A] overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="World Map Abstract" 
            className="w-full h-full object-cover mix-blend-overlay grayscale"
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FED304]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#ADDDF1]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-[20px] relative z-10">
          
          {/* Header & Stats Row */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-center">
              The Future of <span className="text-[#FED304]">Hospitality</span>
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto font-secondary text-[15px] md:text-base leading-relaxed mb-12">
              The hospitality and tourism industry is experiencing explosive global growth. From luxury cruises to culinary entrepreneurship, the demand for skilled professionals has never been higher.
            </p>

            {/* Counters Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { end: 30, suffix: 'M+', label: 'Global Cruise Travelers' },
                { end: 100, suffix: 'K+', label: 'Hospitality Jobs Added' },
                { end: 70, suffix: '%', label: 'Growth in Tourism' },
                { end: 2030, prefix: '', label: 'Future Demand Rising' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center shadow-lg hover:bg-white/10 transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-[#FED304] mb-2 font-sans tracking-tighter">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <div className="text-white/80 text-xs md:text-sm font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tri-Pillar Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {/* Column 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FED304] to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Ship className="w-7 h-7 text-[#161D4A]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Cruise Industry</h3>
              <ul className="space-y-3 text-white/70 font-secondary text-sm md:text-[15px]">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FED304] shrink-0 mt-0.5" />
                  <span>Millions of international travelers increasing every year</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FED304] shrink-0 mt-0.5" />
                  <span>Cruise tourism projected to grow massively by 2030</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FED304] shrink-0 mt-0.5" />
                  <span>Rising demand for hospitality, chefs, and cruise staff worldwide</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-[#ADDDF1] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-[#161D4A]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">International Careers</h3>
              <ul className="space-y-3 text-white/70 font-secondary text-sm md:text-[15px]">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#ADDDF1] shrink-0 mt-0.5" />
                  <span>Massive job growth in Dubai, Singapore, Canada, Europe</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#ADDDF1] shrink-0 mt-0.5" />
                  <span>Increasing salary brackets and premium global placements</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-[#ADDDF1] shrink-0 mt-0.5" />
                  <span>High demand for multilingual luxury hotel managers</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Coffee className="w-7 h-7 text-[#161D4A]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Startup Opportunities</h3>
              <ul className="space-y-3 text-white/70 font-secondary text-sm md:text-[15px]">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Booming digital food brands, cloud kitchens & cafes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Zomato/Swiggy ecosystems creating huge delivery market growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Young entrepreneurs succeeding as content creator chefs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Future by 2030 Timeline Grid */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <TrendingUp className="text-[#FED304]" /> 
              Future by 2030 Horizon
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: <Laptop className="w-5 h-5" />, label: 'AI-Powered Hotels' },
                { icon: <Utensils className="w-5 h-5" />, label: 'Smart Restaurants' },
                { icon: <Ship className="w-5 h-5" />, label: 'Luxury Cruise Boom' },
                { icon: <Leaf className="w-5 h-5" />, label: 'Sustainable Tourism' },
                { icon: <BriefcaseBusiness className="w-5 h-5" />, label: 'Global Entrepreneurship' },
                { icon: <Map className="w-5 h-5" />, label: 'Remote International Work' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#161D4A]/50 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/10 transition-colors cursor-default group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FED304] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 – PROGRAMS (DESIGNED EXACTLY AS THE REFERENCE IMAGE UI) */}
      <section className="bg-white py-14 border-b border-gray-100 relative">
        <div className="max-w-[1280px] mx-auto px-[20px]">
          {/* Section Heading matching reference */}
          <div className="mb-6 lg:mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#161D4A] to-[#3B4CA8] tracking-tight leading-snug font-sans pb-1">
              Bachelor of Hotel Management (BHM) Program
            </h2>
          </div>

          {/* Interactive Tab Switcher Bar */}
          <div className="mb-10 lg:mb-14">
            <div className="flex flex-col sm:flex-row select-none gap-1 sm:gap-2 p-1.5 bg-gray-100/80 sm:rounded-xl rounded-lg border border-gray-200/60 shadow-sm w-full sm:w-max sm:max-w-full sm:overflow-x-auto">
              <button
                onClick={() => setActiveProgramTab("bhm")}
                className={`px-5 py-2 text-[13px] md:text-sm font-semibold tracking-tight relative transition-all duration-300 shrink-0 font-sans cursor-pointer outline-none rounded-lg ${
                  activeProgramTab === "bhm"
                    ? "text-[#161D4A] bg-[#FED304] shadow-md ring-1 ring-[#FED304]/50"
                    : "text-gray-500 hover:text-[#161D4A] hover:bg-white/50"
                }`}
              >
                <span>Undergraduate Programmes (BHM)</span>
              </button>

              <button
                onClick={() => setActiveProgramTab("core")}
                className={`px-5 py-2 text-[13px] md:text-sm font-semibold tracking-tight relative transition-all duration-300 shrink-0 font-sans cursor-pointer outline-none rounded-lg ${
                  activeProgramTab === "core"
                    ? "text-[#161D4A] bg-[#FED304] shadow-md ring-1 ring-[#FED304]/50"
                    : "text-gray-500 hover:text-[#161D4A] hover:bg-white/50"
                }`}
              >
                <span>Core Areas of Study</span>
              </button>

              <button
                onClick={() => setActiveProgramTab("learn")}
                className={`px-5 py-2 text-[13px] md:text-sm font-semibold tracking-tight relative transition-all duration-300 shrink-0 font-sans cursor-pointer outline-none rounded-lg ${
                  activeProgramTab === "learn"
                    ? "text-[#161D4A] bg-[#FED304] shadow-md ring-1 ring-[#FED304]/50"
                    : "text-gray-500 hover:text-[#161D4A] hover:bg-white/50"
                }`}
              >
                <span>What You Learn</span>
              </button>

              <button
                onClick={() => setActiveProgramTab("careers")}
                className={`px-5 py-2 text-[13px] md:text-sm font-semibold tracking-tight relative transition-all duration-300 shrink-0 font-sans cursor-pointer outline-none rounded-lg ${
                  activeProgramTab === "careers"
                    ? "text-[#161D4A] bg-[#FED304] shadow-md ring-1 ring-[#FED304]/50"
                    : "text-gray-500 hover:text-[#161D4A] hover:bg-white/50"
                }`}
              >
                <span>Career Paths</span>
              </button>
            </div>
          </div>

          {/* Grid Split matching the style of the research block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] items-stretch">
            {/* Left Box: Commercial culinary/kitchen team training photograph */}
            <div className="col-span-1 lg:col-span-7 relative rounded border border-gray-150 shadow-md aspect-[16/10] w-full overflow-hidden bg-gray-50 flex items-center justify-center">
              <img
                src="https://i.postimg.cc/j28RZW52/DSC09747-copy-(1).jpg"
                alt="BHM Culinary Lab Practical Training"
                className="w-full h-full object-cover rounded"
                referrerPolicy="no-referrer"
              />
              {/* Subtle visual gradient on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-lg py-1.5 px-3 flex items-center gap-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#161D4A] font-mono">
                  Culinary Lab Active Session
                </span>
              </div>
            </div>

            {/* Right Box: Tab Content */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-between py-2">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#161D4A] tracking-tight leading-tight">
                  Hospitality Career Pathways & Core Competency Maps
                </h3>

                {/* Dynamic Content Pane based on selected tab */}
                <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100 min-h-[220px] flex flex-col justify-center transition-all duration-300">
                  {activeProgramTab === "bhm" && (
                    <div className="space-y-4">
                      <h4 className="text-md font-bold text-[#161D4A] flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#161D4A]" />
                        BHM (Bachelor of Hotel Management)
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed font-secondary">
                        A structured bachelor degree in hotel management
                        designed to build skills across all hospitality
                        functions.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-2">
                        <span className="text-[10px] bg-[#161D4A]/5 text-[#161D4A] font-medium tracking-wider uppercase px-2 py-0.5 rounded">
                          4 Years Bachelor
                        </span>
                        <span className="text-[10px] bg-[#FED304]/5 text-[#161D4A] font-medium tracking-wider uppercase px-2 py-0.5 rounded">
                          Bangalore University
                        </span>
                      </div>
                    </div>
                  )}

                  {activeProgramTab === "core" && (
                    <div className="space-y-4">
                      <h4 className="text-md font-bold text-[#161D4A] flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-500" />
                        Core Areas of Study
                      </h4>
                      <ul className="space-y-2.5">
                        {[
                          "Food Production (Kitchen Training)",
                          "Food & Beverage Service",
                          "Front Office Operations",
                          "Housekeeping Management",
                          "Hospitality Marketing & Management",
                        ].map((area, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs md:text-sm text-gray-700"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FED304] mt-2 shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeProgramTab === "learn" && (
                    <div className="space-y-4">
                      <h4 className="text-md font-bold text-[#161D4A] flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#161D4A]" />
                        What You Learn
                      </h4>
                      <ul className="space-y-2.5">
                        {[
                          "Professional cooking and kitchen operations",
                          "Guest service and hospitality skills",
                          "Hotel management and operations",
                          "Communication and personality development",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs md:text-sm text-gray-700"
                          >
                            <span className="text-emerald-500 font-bold shrink-0">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeProgramTab === "careers" && (
                    <div className="space-y-4">
                      <h4 className="text-md font-bold text-[#161D4A] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-indigo-500" />
                        Career Paths — Hotel Management
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Chef / Culinary Specialist",
                          "Front Office Executive",
                          "Cabin Crew (with additional training)",
                          "Event Manager",
                          "Hospitality Entrepreneur",
                        ].map((path, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs md:text-sm text-gray-700"
                          >
                            <span className="h-1 w-2 bg-[#FED304] mt-2 shrink-0 rounded" />
                            <span className="font-semibold text-gray-800">
                              {path}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Apply action link */}
              <div className="mt-6">
                <a
                  href="#apply-lead-form"
                  onClick={(e) => {
                    e.preventDefault();
                    const formElement =
                      document.getElementById("apply-lead-form");
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#161D4A] hover:text-[#161D4A] transition-colors"
                >
                  <span>Explore detailed BHM curriculum maps</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – WHY AMC (DESIGNED ACCORDING TO REFERENCE IMAGE UI) */}
      <section className="bg-white py-14 border-b border-gray-100 relative">
        <div className="max-w-[1280px] mx-auto px-[20px]">
          <div className="flex flex-col xl:flex-row gap-[20px] items-stretch">
            {/* Left Box */}
            <div 
              className="w-full xl:w-96 shrink-0 flex flex-col rounded shadow-md overflow-hidden min-h-[420px] bg-cover bg-center relative"
              style={{ backgroundImage: "url('https://images.shiksha.com/mediadata/images/1594035255phpqoBZey.jpeg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A] via-[#161D4A]/80 to-[#161D4A]/30 pointer-events-none" />
              
              {/* Upper Section */}
              <div className="p-8 flex-grow flex flex-col justify-center relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide leading-snug font-sans">
                  AMC Degree College Bangalore
                </h3>
              </div>

              {/* Lower Section */}
              <div className="p-8 pb-10 flex flex-col justify-between relative z-10">
                <div>
                  <span className="text-white text-5xl font-extrabold tracking-tighter block mb-3 drop-shadow-md">
                    4
                  </span>
                  <span className="text-white text-lg font-bold uppercase tracking-wider block mb-8 leading-tight drop-shadow-sm">
                    Institutional Pillars
                  </span>
                </div>

                {/* View button matched exactly from reference image */}
                <div>
                  <a
                    href="#apply-lead-form"
                    onClick={(e) => {
                      e.preventDefault();
                      const formElement =
                        document.getElementById("apply-lead-form");
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-xs uppercase tracking-widest px-5 py-3.5 hover:bg-white hover:text-[#161D4A] transition-all w-full text-center"
                  >
                    <span>VIEW ADMISSION INFO →</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Box: Dynamic Study grid */}
            <div className="flex-grow flex flex-col pt-0 xl:pt-2 xl:pl-6">
              {/* Header inside right column */}
              <div className="border-b border-gray-100 pb-6 mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#161D4A] tracking-tight">
                  Why Choose AMC for Hotel Management in Bangalore
                </h2>
              </div>

              {/* Grid of the 4 Key Program Features exactly matching style elements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {/* Pillar 1 */}
                <div className="flex flex-col p-6 md:p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FED304]/20 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-[#161D4A] group-hover:bg-[#161D4A] group-hover:text-[#FED304] transition-colors duration-300">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
                    Industry-Focused Learning
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal mb-8 flex-grow">
                    Curriculum aligned with modern hospitality management
                    courses ensuring you learn what the industry needs today.
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-[13px] font-bold text-[#161D4A] uppercase tracking-wider group-hover:text-[#161D4A]/80 transition-colors">
                    Explore Learnings <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex flex-col p-6 md:p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ADDDF1]/30 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-[#161D4A] group-hover:bg-[#161D4A] group-hover:text-[#ADDDF1] transition-colors duration-300">
                    <ChefHat className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
                    Practical Training
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal mb-8 flex-grow">
                    Hands-on experience in kitchens, service suites, and hotel
                    simulations modeled after 5-star properties.
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-[13px] font-bold text-[#161D4A] uppercase tracking-wider group-hover:text-[#161D4A]/80 transition-colors">
                    View Facilities <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex flex-col p-6 md:p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#161D4A]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-[#161D4A] group-hover:bg-[#161D4A] group-hover:text-white transition-colors duration-300">
                    <Hotel className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
                    Internship Opportunities
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal mb-8 flex-grow">
                    Mandatory exposure to real hotels and premium hospitality environments during your final semesters.
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-[13px] font-bold text-[#161D4A] uppercase tracking-wider group-hover:text-[#161D4A]/80 transition-colors">
                    See Partners <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="flex flex-col p-6 md:p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#A6275A]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-[#161D4A] group-hover:bg-[#161D4A] group-hover:text-pink-400 transition-colors duration-300">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
                    Career Support
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal mb-8 flex-grow">
                    Focused on matching your talent with premium hospitality placements in Bangalore and global markets.
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-[13px] font-bold text-[#161D4A] uppercase tracking-wider group-hover:text-[#161D4A]/80 transition-colors">
                    Placement Stats <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – STUDENT EXPERIENCE */}
      <section className="py-20 border-b border-gray-100 relative overflow-hidden bg-slate-50 z-0">
        <div className="max-w-[1280px] mx-auto px-[20px] relative z-10">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#161D4A] font-mono tracking-widest block mb-2.5 uppercase">
              STUDENT EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#161D4A] tracking-tight leading-tight mb-4 font-sans">
              From Training to Real Hospitality Skills
            </h2>
            <p className="text-sm md:text-base text-gray-650 font-secondary font-medium max-w-2xl mx-auto relative inline-block">
              Students at AMC Degree College gain practical exposure through:
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FED304] to-transparent block rounded-full" />
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-12">
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4 group cursor-default relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between w-full">
                  <div className="h-11 w-11 rounded-lg bg-orange-50 border border-orange-100/50 text-orange-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <ChefHat className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2">
                  <h4 className="text-[15px] font-bold text-gray-900 font-sans leading-snug">
                    Kitchen & Culinary
                  </h4>
                  <p className="mt-1 text-[13px] text-gray-500 font-medium">Hands-on culinary training</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4 group cursor-default relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between w-full">
                  <div className="h-11 w-11 rounded-lg bg-rose-50 border border-rose-100/50 text-rose-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                    <Utensils className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2">
                  <h4 className="text-[15px] font-bold text-gray-900 font-sans leading-snug">
                    Service Simulations
                  </h4>
                  <p className="mt-1 text-[13px] text-gray-500 font-medium">Restaurant practicals</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4 group cursor-default relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between w-full">
                  <div className="h-11 w-11 rounded-lg bg-cyan-50 border border-cyan-100/50 text-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <Hotel className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2">
                  <h4 className="text-[15px] font-bold text-gray-900 font-sans leading-snug">
                    Hotel Operations
                  </h4>
                  <p className="mt-1 text-[13px] text-gray-500 font-medium">Real-world practice</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4 group cursor-default relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between w-full">
                  <div className="h-11 w-11 rounded-lg bg-violet-50 border border-violet-100/50 text-violet-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                    <Briefcase className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2">
                  <h4 className="text-[15px] font-bold text-gray-900 font-sans leading-snug">
                    Industrial Training
                  </h4>
                  <p className="mt-1 text-[13px] text-gray-500 font-medium">Internship exposure</p>
                </div>
              </div>

            </div>

            <div className="bg-gradient-to-r from-[#161D4A] to-indigo-900 p-5 md:p-6 max-w-2xl mx-auto rounded-xl flex items-center justify-center gap-4 border border-indigo-500/30 shadow-lg shadow-indigo-900/20 group hover:shadow-indigo-500/30 transition-all duration-300">
              <div className="h-10 w-10 shrink-0 bg-gradient-to-br from-[#FED304] to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5 text-[#161D4A]" />
              </div>
              <p className="text-white text-[15px] sm:text-base font-medium">
                Every student graduates with practical hospitality skills, not just theoretical knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 – INDUSTRY EXPOSURE (DESIGNED TO MATCH LANDING PAGE THEME) */}
      <section className="bg-white py-16 border-b border-gray-100 relative">
        <div className="max-w-[1280px] mx-auto px-[20px]">
          {/* Tag and Headings */}
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3.5xl font-extrabold text-[#1F2421] tracking-tight leading-tight mb-4 font-sans">
              Learn from the Real Hospitality Industry
            </h2>
          </div>

          {/* Grids - containing EXACTLY and ONLY the four points provided by the user with highly relatable hospitality images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] items-stretch">
            {/* 1. Guest lectures from industry professionals */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-150 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600"
                  alt="Guest lectures from industry professionals"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105 group-hover:saturate-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 h-9 w-9 bg-[#FED304] text-[#161D4A] rounded-lg flex items-center justify-center shadow-md border border-white/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <h4 className="text-sm md:text-[15px] font-extrabold text-gray-900 tracking-tight font-sans leading-snug">
                  Guest lectures from industry professionals
                </h4>
              </div>
            </div>

            {/* 2. Hotel internships and training */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-150 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600"
                  alt="Hotel internships and training"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105 group-hover:saturate-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 h-9 w-9 bg-[#FED304] text-[#161D4A] rounded-lg flex items-center justify-center shadow-md border border-white/20">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <h4 className="text-sm md:text-[15px] font-extrabold text-gray-900 tracking-tight font-sans leading-snug">
                  Hotel internships and training
                </h4>
              </div>
            </div>

            {/* 3. Workshops and live demonstrations */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-150 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600"
                  alt="Workshops and live demonstrations"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105 group-hover:saturate-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 h-9 w-9 bg-[#FED304] text-[#161D4A] rounded-lg flex items-center justify-center shadow-md border border-white/20">
                  <Utensils className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <h4 className="text-sm md:text-[15px] font-extrabold text-gray-900 tracking-tight font-sans leading-snug">
                  Workshops and live demonstrations
                </h4>
              </div>
            </div>

            {/* 4. Exposure to hospitality operations */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-150 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600"
                  alt="Exposure to hospitality operations"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105 group-hover:saturate-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 h-9 w-9 bg-emerald-600 text-white rounded-lg flex items-center justify-center shadow-md border border-white/20">
                  <Hotel className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <h4 className="text-sm md:text-[15px] font-extrabold text-gray-900 tracking-tight font-sans leading-snug">
                  Exposure to hospitality operations
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – CAREERS (Designed exactly like reference image, matching landing theme) */}
      <section className="bg-[#FDFDFE] py-16 border-b border-gray-100 relative">
        <div className="max-w-[1280px] mx-auto px-[20px]">
          {/* Main Core Title at the very top center */}
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#161D4A] tracking-tight font-sans">
              Career Opportunities After BHM in Bangalore
            </h2>
          </div>

          {/* Interactive Tab Switcher Bar - exact Facilities layout with Career tabs */}
          <div className="border-b border-gray-200/85 mb-12">
            <div className="flex justify-center max-w-5xl mx-auto overflow-x-auto select-none gap-6 md:gap-11 px-4 scrollbar-none pb-0">
              {[
                { id: "hotel", label: "Hotel Operations" },
                { id: "chef", label: "Chef / Culinary Roles" },
                { id: "airlines", label: "Airlines & Cabin Crew" },
                { id: "hospitality", label: "Hospitality & Tourism" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCareerTab(tab.id as any)}
                  className={`pb-4 text-[13px] md:text-base font-medium tracking-tight relative transition-all duration-200 shrink-0 font-sans cursor-pointer ${
                    activeCareerTab === tab.id
                      ? "text-[#161D4A] font-bold scale-[1.02]"
                      : "text-gray-500 hover:text-gray-800 hover:scale-[1.01]"
                  }`}
                >
                  <span>{tab.label}</span>
                  {activeCareerTab === tab.id && (
                    <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#FED304] rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Information Details & Double Image Block EXACT layout */}
          <div className="max-w-6xl mx-auto">
            {/* Active Tab Headline Content with EXACT original wording */}
            <div className="text-left mb-10">
              <h3 className="text-3.5xl md:text-4.5xl font-black text-slate-900 tracking-tight leading-none font-sans">
                {activeCareerTab === "hotel" && "Hotel Operations"}
                {activeCareerTab === "chef" && "Chef / Culinary Roles"}
                {activeCareerTab === "airlines" && "Airlines & Cabin Crew"}
                {activeCareerTab === "hospitality" && "Hospitality & Tourism"}
              </h3>
            </div>

            {/* Double Column Image Panel exact to Reference details layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] relative">
              {/* Card 1: Left Image block */}
              <div className="relative rounded-lg overflow-hidden border border-gray-150 shadow-sm aspect-[16/10] md:aspect-[4/3] bg-gray-50 group">
                <img
                  src={
                    activeCareerTab === "hotel"
                      ? "https://i.postimg.cc/qqzBmzMk/d44bcfe90063ce374a403a708aa752b2.jpg"
                      : activeCareerTab === "chef"
                        ? "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1200"
                        : activeCareerTab === "airlines"
                          ? "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200"
                          : "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200"
                  }
                  alt="AMC Careers Left path view"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Floating WhatsApp indicator near left bottom */}
                <div className="absolute left-4 bottom-4 z-20">
                  <a
                    href="#apply-lead-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("apply-lead-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="h-9 w-9 md:h-10 md:w-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-md hover:bg-[#128C7E] transition-transform duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5 md:w-5.5 md:h-5.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.896 0c3.181.001 6.171 1.242 8.425 3.499c2.253 2.257 3.491 5.253 3.491 8.432c-0.003 6.574-5.329 11.9-11.897 11.9c-2.003-.001-3.974-.509-5.719-1.479L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.805 1.453c5.334 0 9.675-4.347 9.678-9.686c0-2.585-1.006-5.015-2.834-6.845C16.471 2.247 14.04 1.242 11.45 1.242c-5.337 0-9.677 4.348-9.68 9.688c0 1.696.444 3.353 1.284 4.8l-.291 1.063l1.196-1.163z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card 2: Right Image block */}
              <div className="relative rounded-lg overflow-hidden border border-gray-150 shadow-sm aspect-[16/10] md:aspect-[4/3] bg-gray-50 group">
                <img
                  src={
                    activeCareerTab === "hotel"
                      ? "https://i.postimg.cc/Dw7mMZt6/582129b8bee014d2074fecb0686bf3b4.jpg"
                      : activeCareerTab === "chef"
                        ? "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200"
                        : activeCareerTab === "airlines"
                          ? "https://i.postimg.cc/qMT7NqBP/6cd851f931f797186f93b0c24812c9ce.jpg"
                          : "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200"
                  }
                  alt="AMC Careers Right professional perspective"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Sparkling circular purple badge on bottom right */}
                <div className="absolute right-4 bottom-4 z-20">
                  <div className="h-9 w-9 md:h-10 md:w-10 bg-[#7B46CE] rounded-full flex items-center justify-center shadow-lg text-white">
                    <Sparkles className="w-4.5 h-4.5 md:w-5 md:h-5 animate-pulse" />
                  </div>
                </div>

                {/* Glassmorphic conversation chat dialogue styled nicely on top right */}
                <div className="absolute right-4 top-4 z-20 select-none pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md text-[10px] md:text-[11px] font-bold text-[#2A1054] px-3 py-1.5 rounded-lg shadow-md border border-gray-150 flex items-center gap-1.5">
                    <span>Explore Global Careers</span>
                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtext info panel exact to reference */}
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-[#161D4A] uppercase tracking-wider font-secondary bg-[#FED304]/5 py-2.5 px-6 rounded-full inline-block">
              The hospitality industry offers global career opportunities for
              skilled professionals.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9 – SOCIAL PROOF (Designed exactly like reference image) */}
      <section className="bg-white py-16 border-b border-gray-100 relative">
        <div className="max-w-[1280px] mx-auto px-[20px]">
          <div className="text-left mb-16">
            <h2 className="text-3.5xl md:text-5xl font-black text-[#2A1054] tracking-tight leading-none font-sans mb-2">
              Testimonials
            </h2>
            <p className="text-base text-gray-500 font-secondary font-medium">
              What Our Students Say
            </p>
          </div>

          {/* Testimonials staggered overlapping card layout based strictly on the reference photo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mx-auto">
            {[
              {
                name: "Pratheek K",
                role: "Fourth Year, Batch 2022",
                quote:
                  "“AMC helped me build confidence and practical skills for the hospitality industry.”",
                image: "https://i.postimg.cc/MptPDG5h/PMV08523.jpg",
              },
              {
                name: "Abdul Wahab",
                role: "Fourth year, Batch 2022",
                quote:
                  "“The training and internships gave me real exposure to hotel operations.”",
                image: "https://i.postimg.cc/mgTpC9YN/F-P09745-(1).jpg",
              },
              {
                name: "Sneha Sharma",
                role: "Fourth Year, Batch 2022",
                quote:
                  "“A great environment to learn hospitality and service skills.”",
                image: "https://i.postimg.cc/jqJ1btqD/F-P09755.jpg",
              },
            ].map((student, idx) => (
              <div
                key={idx}
                className="relative w-full max-w-[430px] h-[360px] sm:h-[400px] mx-auto select-none group"
              >
                {/* Left Portrait Photo (Stands tall on the left, top-aligned) */}
                <div className="absolute left-0 top-0 w-[54%] h-[85%] rounded-sm overflow-hidden border border-gray-150 shadow-sm bg-gray-50 z-0 select-none">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right Overlapping Card (Staggers offset to the right, bottom-aligned) */}
                <div className="absolute right-0 bottom-0 w-[56%] h-[85%] bg-[#F9F9FB] rounded-sm shadow-xl border border-gray-150/90 p-5 sm:p-6 flex flex-col justify-between items-center text-center z-10">
                  {/* Huge Black Double Quotes Symbol exactly centered at card top */}
                  <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 leading-none select-none z-20">
                    <span className="text-7xl sm:text-8xl font-serif font-extrabold text-black tracking-tighter opacity-100">
                      “
                    </span>
                  </div>

                  {/* Quote Message (Beautifully centered, elegant italic style) */}
                  <div className="flex-grow flex items-center justify-center pt-2 sm:pt-4">
                    <p className="text-[11px] sm:text-xs md:text-[13px] text-gray-800 tracking-wide font-secondary leading-relaxed font-semibold antialiased italic">
                      {student.quote}
                    </p>
                  </div>

                  {/* Student Title / Identity Card Footer */}
                  <div className="w-full border-t border-gray-200/70 pt-3 mt-3">
                    <p className="text-[10px] sm:text-xs text-gray-500 font-secondary font-medium mt-1.5 whitespace-nowrap">
                      {student.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 – CAMPUS LIFE (Designed as an interactive carousel) */}
      <section className="bg-slate-50 py-16 border-b border-gray-100 relative">
        <div className="max-w-[1280px] mx-auto px-[20px]">
          <div className="text-left mb-12">
            <h2 className="text-3.5xl md:text-5xl font-black text-[#2A1054] tracking-tight leading-none font-sans mb-2">
              A Learning Environment That Builds Confidence
            </h2>
            <p className="text-base text-gray-500 font-secondary font-medium">
              At AMC Degree College, students experience:
            </p>
          </div>

          {/* Interactive Split Carousel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] mx-auto items-center">
            {/* Left Column: Interactive State Indicators & Feature Highlights */}
            <div className="lg:col-span-5 space-y-4 select-none">
              {[
                {
                  title: "Interactive and practical learning",
                  desc: "Learn via dynamic real-world simulation, mock operations, and deep peer communication under professional guidance.",
                },
                {
                  title: "Skill-based training environment",
                  desc: "Gain technical masteries in culinary excellence, resort management, cabin crew hospitality, and frontend execution.",
                },
                {
                  title: "Collaborative student culture",
                  desc: "Create strong professional networks, engage in joint business initiatives, and organize stellar college fests.",
                },
                {
                  title: "Balanced academic and practical exposure",
                  desc: "Acquire theoretical excellence balanced perfectly with comprehensive hand-crafted global internship placements.",
                },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCampusSlide(idx)}
                  className={`w-full text-left p-5 rounded-lg border-l-4 transition-all duration-300 ${
                    currentCampusSlide === idx
                      ? "border-[#FED304] bg-white shadow-md translate-x-1"
                      : "border-transparent bg-transparent hover:bg-slate-100/60"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${
                        currentCampusSlide === idx
                          ? "bg-[#FED304] border-[#FED304] text-[#161D4A]"
                          : "border-slate-300 text-slate-500"
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <h4
                        className={`text-base font-bold tracking-tight font-sans ${
                          currentCampusSlide === idx
                            ? "text-[#161D4A]"
                            : "text-slate-800"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-xs mt-1 leading-relaxed font-sans ${
                          currentCampusSlide === idx
                            ? "text-slate-600 font-medium"
                            : "text-slate-500 font-normal"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column: Premium Slide Frame with Controls */}
            <div className="lg:col-span-7">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] shadow-2xl border border-gray-150 bg-slate-100 group select-none">
                {/* Images Array map for pre-rendered stacked views */}
                {[
                  "https://i.postimg.cc/qvLKswXp/DSC09736-(2).jpg",
                  "https://i.postimg.cc/j28RZW52/DSC09747-copy-(1).jpg",
                  "https://i.postimg.cc/6pQxM5JR/DSC09746.jpg",
                  "https://i.postimg.cc/q7PfBshT/DSC09757-copy-(1).jpg",
                ].map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentCampusSlide === idx
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`AMC Campus Experience ${idx + 1}`}
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                    {/* Soft gradient overlay for caption readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  </div>
                ))}

                {/* Left/Right Action Arrows (Overlay on Hover) */}
                <button
                  onClick={() =>
                    setCurrentCampusSlide((prev) => (prev === 0 ? 3 : prev - 1))
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 bg-white/95 hover:bg-[#FED304] hover:text-[#161D4A] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 text-slate-800 opacity-90 group-hover:opacity-100 active:scale-95"
                  aria-label="Previous campus slide"
                >
                  <ChevronLeft className="w-5 h-5 shrink-0" />
                </button>

                <button
                  onClick={() =>
                    setCurrentCampusSlide((prev) => (prev + 1) % 4)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 bg-white/95 hover:bg-[#FED304] hover:text-[#161D4A] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 text-slate-800 opacity-90 group-hover:opacity-100 active:scale-95"
                  aria-label="Next campus slide"
                >
                  <ChevronRight className="w-5 h-5 shrink-0" />
                </button>

                {/* Overlaid Active Card Info Tag */}
                <div className="absolute left-6 bottom-6 right-6 z-20 text-white select-none hidden sm:block">
                  <span className="text-[10px] bg-[#FED304] font-black font-mono px-2.5 py-1 rounded-full uppercase tracking-widest text-[#161D4A]">
                    Experience Pillar {currentCampusSlide + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-black mt-2 tracking-tight drop-shadow-sm font-sans">
                    {currentCampusSlide === 0 &&
                      "Interactive and practical learning"}
                    {currentCampusSlide === 1 &&
                      "Skill-based training environment"}
                    {currentCampusSlide === 2 &&
                      "Collaborative student culture"}
                    {currentCampusSlide === 3 &&
                      "Balanced academic and practical exposure"}
                  </h3>
                </div>

                {/* Action Arrows continue to be overlaid above */}
              </div>
              
              {/* Dots Navigation indicator row moved outside below the image container */}
              <div className="flex items-center justify-center gap-2 select-none mt-4">
                {[0, 1, 2, 3].map((dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentCampusSlide(dotIdx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentCampusSlide === dotIdx
                        ? "w-6 bg-[#FED304]"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 – FINAL CALL TO ACTION (CTA) */}
      <section
        className="bg-white py-12 relative overflow-hidden"
        id="final-cta-section"
      >
        <div className="max-w-[1000px] mx-auto px-[20px] relative z-10">
          <div className="bg-[#161D4A] rounded-[2rem] overflow-hidden flex flex-col relative min-h-[320px] shadow-[0_20px_50px_rgba(22,29,74,0.15)]">
            
            {/* Decorative graphics */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-[#ADDDF1]/10 rounded-full blur-[100px]" />
            </div>

            <div className="lg:w-[50%] p-8 md:p-10 lg:p-12 lg:pr-24 relative z-20 flex flex-col justify-center min-h-[320px]">
              <div className="inline-flex w-max px-3 py-1 bg-white/10 rounded-full border border-white/20 mb-4 backdrop-blur-md items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#FED304] animate-pulse" />
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                  Admissions Open
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.1] font-sans mb-4">
                Ready to lead in <span className="text-[#FED304] italic">Hospitality?</span>
              </h3>
              <p className="text-sm md:text-base text-white/80 font-secondary leading-relaxed max-w-sm mb-8">
                Join the BHM program in Bangalore at AMC and step into a growing global industry with endless career opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#apply-lead-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("apply-lead-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#FED304] text-[#161D4A] hover:bg-[#ffe14f] px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#FED304]/20 flex items-center justify-center gap-2 group"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#apply-lead-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("apply-lead-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white/5 hover:bg-white/15 text-white border border-white/20 px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  Placement Records
                </a>
              </div>
            </div>

            {/* Right Image Container - Desktop */}
            <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[55%] bg-[#FED304] [clip-path:polygon(0_0,100%_0,100%_100%,15%_100%)] z-0 -translate-x-[6px]" />
            <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[55%] [clip-path:polygon(0_0,100%_0,100%_100%,15%_100%)] z-10">
              <img
                src="https://i.postimg.cc/qvLKswXp/DSC09736-(2).jpg"
                alt="AMC Hospitality Graduates Professional Walk"
                className="absolute inset-0 w-full h-full object-cover object-center -scale-x-100"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Right Image Container - Mobile */}
            <div className="lg:hidden w-full h-[250px] relative z-10 border-t-[6px] border-[#FED304]">
              <img
                src="https://i.postimg.cc/qvLKswXp/DSC09736-(2).jpg"
                alt="AMC Hospitality Graduates Professional Walk"
                className="absolute inset-0 w-full h-full object-cover object-center -scale-x-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A] to-transparent opacity-80" />
            </div>

          </div>
        </div>
      </section>

      {/* STICKY FOOTER CTA */}
      <div className="sticky bottom-0 z-[45] w-full bg-white/95 backdrop-blur-md shadow-[0_-4px_25px_rgba(0,0,0,0.1)] border-t border-gray-200 transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-[20px] py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <img 
                src="https://openday.amcgroup.edu.in/_components/v2/a84344c2237668234c2cf1a425a740b02e1984aa/Screenshot_2026-05-24_at_1.27.53_PM.389c6241.png" 
                alt="Open Days" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-[13px] sm:text-[16px] md:text-[18px] font-black text-[#161D4A] leading-tight font-sans tracking-tight">
                Registration for OPEN Days
              </h4>
              <p className="text-[11px] sm:text-[13px] text-gray-600 font-medium mt-0.5 sm:mt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="flex items-center gap-1 bg-gray-100 px-1.5 sm:px-2 py-0.5 rounded text-gray-700">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#161D4A]" /> May 30th
                </span>
                <span className="flex items-center gap-1 bg-[#FED304]/20 px-1.5 sm:px-2 py-0.5 rounded text-[#161D4A] font-bold">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> 4:00 PM
                </span>
              </p>
            </div>
          </div>
          
          <div className="shrink-0 flex items-center">
            <a
              href="#apply-lead-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("apply-lead-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#FED304] hover:bg-[#ffe14f] text-[#161D4A] px-4 sm:px-6 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-black uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_14px_rgba(254,211,4,0.3)] active:scale-95 flex items-center gap-1 sm:gap-2 border border-[#FED304]"
            >
              <span className="hidden sm:inline">Register Now</span>
              <span className="sm:hidden">Register</span>
              <ChevronRight className="w-4 h-4 hidden sm:block" />
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* 3. Footer */}
      <footer className="bg-[#141A3D] text-white pt-16 pb-6 select-none relative border-t border-[#141A3D]">
        <div className="max-w-[1280px] mx-auto px-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 mb-16">
            
            {/* Column 1: Info (Left) */}
            <div className="md:col-span-12 lg:col-span-6 pr-0 lg:pr-12">
              <div className="mb-6">
                <img src="https://static.wixstatic.com/media/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png/v1/fill/w_476,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png" alt="AMC Logo" className="h-[72px] bg-white p-2 rounded-md object-contain" />
              </div>
              <p className="text-[#aab2c8] text-[13px] leading-relaxed mb-6 font-secondary">
                AMC Engineering College is committed to creating deep technical
                competency, high research productivity, and robust industry
                integrations for engineering professionals.
              </p>
              <div className="text-[#FED304] text-[11px] font-bold uppercase tracking-wider font-secondary">
                APPROVED BY AICTE | AFFILIATED TO VTU BENGALURU
              </div>
            </div>

            {/* Column 2: Links (Middle) */}
            <div className="md:col-span-6 lg:col-span-3">
              <h4 className="text-[#FED304] text-[11px] font-bold uppercase tracking-wider mb-6 font-sans">
                CURRICULAR FASTPATHS
              </h4>
              <ul className="space-y-3 font-secondary text-[13px] text-[#aab2c8]">
                <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Placements</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Why AMC</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campus Life</a></li>
              </ul>
            </div>

            {/* Column 3: Contact (Right) */}
            <div className="md:col-span-6 lg:col-span-3">
              <h4 className="text-[#FED304] text-[11px] font-bold uppercase tracking-wider mb-6 font-sans">
                AMC CAMPUS LOCATION
              </h4>
              <ul className="space-y-4 font-secondary text-[12px] text-[#aab2c8] leading-relaxed">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FED304] shrink-0 mt-0.5" />
                  <span>AMC Campus, 18th K.M. Bannerghatta Road,<br />Bengaluru – 560083</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FED304] shrink-0" />
                  <span>+91 99020 44114</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FED304] shrink-0" />
                  <span>admissions@amceducation.in</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-[#ffffff1a] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-secondary text-[11px] text-[#aab2c8]">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <p>
                © 2026 AMC Engineering College Bengaluru. All rights reserved.
              </p>
              <span className="hidden md:inline-block">|</span>
              <p>
                Design and Developed By Mediagarh
              </p>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider font-semibold"
            >
              Back to Top <ChevronUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Admissions Help Button */}
        <div className="fixed bottom-[100px] md:bottom-[110px] right-6 z-50">
          <button className="bg-[#FED304] text-[#161D4A] hover:bg-[#ffe14f] px-5 py-3 rounded-full font-bold text-[11px] uppercase tracking-wider shadow-[0_10px_20px_rgba(254,211,4,0.2)] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 group">
            <div className="relative">
              <Headphones className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-[#FED304] hidden"></span>
            </div>
            ADMISSIONS HELP
          </button>
        </div>
      </footer>
    </div>
  );
}
