import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  User, 
  BookOpen, 
  ChevronRight, 
  Lock, 
  Award, 
  Sparkles, 
  ChevronDown,
  CheckCircle2,
  Users,
  Briefcase,
  TrendingUp,
  Banknote,
  CalendarDays,
  GraduationCap,
  Dna,
  FlaskConical,
  ArrowRight,
  Check,
  Building2,
  Layers,
  HelpCircle,
  FileText,
  ShieldCheck,
  Info,
  Microscope,
  Activity,
  Mail,
  ChevronUp
} from 'lucide-react';

import { recruiterLogos } from './assets/recruiterLogos';

export default function App() {
  // Tabs for Career Paths
  const [careerTab, setCareerTab] = React.useState<'bsc'|'msc'>('bsc');
  
  // Interactive Career Sector Accordion State
  const [activeSector, setActiveSector] = React.useState<number>(0);
  
  // Interactive FAQ state
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0);

  // Quick course view filter (for highlight scroll or comparison highlights)
  const [selectedCourseCard, setSelectedCourseCard] = React.useState<'all'|'bsc'|'msc'>('all');

  // Enquiry Form State
  const [formState, setFormState] = React.useState({
    name: '',
    phone: '',
    course: 'Bachelor of Science (B.Sc.) Biotechnology',
    city: ''
  });
  const [formErrors, setFormErrors] = React.useState({
    name: '',
    phone: '',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errors = { name: '', phone: '', city: '' };
    let hasError = false;

    if (!formState.name.trim()) {
      errors.name = 'Please provide your full name.';
      hasError = true;
    }
    if (!formState.phone.trim()) {
      errors.phone = 'Mobile number is required.';
      hasError = true;
    } else if (formState.phone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit number.';
      hasError = true;
    }
    if (!formState.city) {
      errors.city = 'Please select your current city.';
      hasError = true;
    }

    if (hasError) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real high-performing database submittal
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormState({
      name: '',
      phone: '',
      course: 'Bachelor of Science (B.Sc.) Biotechnology',
      city: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col items-stretch overflow-x-hidden antialiased bg-[#14172a] text-slate-100 selection:bg-[#FFD500] selection:text-[#1a1b3a]">
      
      {/* Dynamic Announcement Ticker */}
      <div className="w-full bg-[#1b224c] border-b border-indigo-500/20 py-2.5 px-4 text-center text-xs lg:text-sm font-semibold text-amber-300 flex items-center justify-center gap-2">
        <Sparkles size={14} className="animate-pulse text-[#FFD500]" />
        <span>Admissions Open 2026–27 • Department of Biotechnology Main Campus</span>
        <span className="hidden md:inline-block px-2 py-0.5 bg-red-500/90 text-white rounded text-[10px] font-bold uppercase tracking-wider animate-bounce ml-3">Limited Seats</span>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.15)] sticky top-0 z-50 w-full shrink-0 border-b border-slate-100">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              referrerPolicy="no-referrer"
              src="https://static.wixstatic.com/media/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png/v1/fill/w_476,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png" 
              alt="AMC Engineering College Logo" 
              className="h-11 sm:h-14 lg:h-16 w-auto object-contain" 
            />
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <a 
              href="tel:+919902044113" 
              className="flex items-center gap-2 text-[#1a1b3a] font-bold text-sm bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-full transition-colors duration-200"
              title="Call Admissions Office"
            >
              <Phone size={15} className="text-[#1a1b3a] animate-swing" />
              <span className="hidden sm:inline">Admissions:</span>
              <span>+91 99020 44113</span>
            </a>
            
            <div className="hidden lg:block border-l border-slate-200 h-8"></div>
            
            <div className="hidden md:block text-[11px] font-bold text-[#1a1b3a] uppercase tracking-wider bg-amber-400 px-3 py-1.5 rounded-full">
              Life Sciences Department
            </div>
            
            <a 
              href="#apply-form" 
              className="bg-[#1a1b3a] hover:bg-[#2b2d63] text-white font-bold px-4 sm:px-6 py-2.5 rounded text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wide border border-transparent"
            >
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Main Hero Section with Lab Backdrop */}
      <main className="flex-grow w-full relative flex items-center min-h-[calc(100vh-76px)] py-12 lg:py-0 overflow-hidden border-b border-indigo-900/30">
        
        {/* Background Layers with Real Lab Visuals */}
        <div className="absolute inset-0 z-0">
          <img 
            referrerPolicy="no-referrer"
            src="https://i.postimg.cc/HxcswWv4/Image-Dithering-2x.webp" 
            alt="Biotechnology Advanced Lab" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14172a]/95 via-[#14172a]/70 to-[#14172a]/40"></div>
          {/* Subtle Dotted texture overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center text-white py-4 text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[62px] font-black leading-[1.12] mb-5 tracking-tight font-sans">
              Grow Your Future with <br />
              <span className="text-[#FFD500] font-extrabold">Biotechnology Sciences</span> <br />
              <span className="text-white">at AMC College</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-[16px] text-slate-200/95 mb-6 max-w-[85%] leading-relaxed font-display">
              Join AMC College's Department of Biotechnology — offering <strong className="font-black text-white" id="bold-biotech-heading">B.Sc. and M.Sc. Biotechnology</strong> programs designed to bridge the gap between science and industry, with hands-on lab training and strong career support.
            </p>

            {/* Main highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 mb-8 max-w-xl text-left">
              <FeatureItem text="NAAC A+ Accredited Institution" />
              <FeatureItem text="Affiliated to Bangalore University — Nationally Recognized Degree" />
              <FeatureItem text="State-of-the-Art Biotechnology & Life Science Labs" />
              <FeatureItem text="Strong Placement Support — Pharma, Biotech & Research" highlight={true} />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#apply-form" 
                className="bg-white hover:bg-slate-50 text-[#1a1b3a] font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-lg inline-flex items-center gap-2 shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                Apply Now
                <ChevronRight size={16} />
              </a>
              <a 
                href="#courses" 
                className="border border-white/30 text-white hover:bg-white/10 font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                Explore Programs
              </a>
            </div>
            
          </div>

          {/* Right Form Column */}
          <div id="apply-form" className="lg:col-span-5 xl:col-span-4 flex items-center justify-center lg:justify-end w-full scroll-mt-24">
            <div className="bg-[#181d33]/92 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 w-full max-w-[420px] transition-all duration-300 p-6 lg:p-7">
              
              <h2 className="text-xl lg:text-22px font-extrabold text-white font-sans tracking-tight text-center mb-5">
                Registration Form
              </h2>
              
              <div className="w-full">
                
                {!isSubmitted ? (
                  <>
                    {/* Interactive Form Form */}
                    <form className="space-y-3.5" onSubmit={handleFormSubmit}>
                      
                      {/* Name Input */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User size={16} strokeWidth={2.5} />
                        </div>
                        <input 
                          type="text" 
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Enter Your Full Name" 
                          className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white border rounded-lg text-sm text-[#1a1b3a] font-medium placeholder:text-slate-400 outline-none transition-all shadow-sm ${formErrors.name ? 'border-red-500 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-[#FFD500] focus:ring-2 focus:ring-[#FFD500]/20'}`}
                        />
                        {formErrors.name && <p className="text-red-400 text-[10px] pl-1 mt-1">{formErrors.name}</p>}
                      </div>

                      {/* Phone Input */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone size={16} strokeWidth={2.5} />
                        </div>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          placeholder="Enter Mobile Number" 
                          className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white border rounded-lg text-sm text-[#1a1b3a] font-medium placeholder:text-slate-400 outline-none transition-all shadow-sm ${formErrors.phone ? 'border-red-500 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-[#FFD500] focus:ring-2 focus:ring-[#FFD500]/20'}`}
                        />
                        {formErrors.phone && <p className="text-red-400 text-[10px] pl-1 mt-1">{formErrors.phone}</p>}
                      </div>

                      {/* Dropdowns side-by-side row */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Course Dropdown */}
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <BookOpen size={14} strokeWidth={2.5} />
                          </div>
                          <select 
                            name="course"
                            value={formState.course}
                            onChange={handleInputChange}
                            className="w-full pl-8 pr-6 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-lg text-xs text-[#1a1b3a] font-bold outline-none focus:border-[#FFD500] focus:ring-2 focus:ring-[#FFD500]/20 appearance-none cursor-pointer shadow-sm"
                          >
                            <option value="Bachelor of Science (B.Sc.) Biotechnology">Select B.Sc.</option>
                            <option value="Master of Science (M.Sc.) Biotechnology">Select M.Sc.</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-slate-500">
                            <ChevronDown size={14} />
                          </div>
                        </div>

                        {/* City Dropdown */}
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <MapPin size={14} strokeWidth={2.5} />
                          </div>
                          <select 
                            name="city"
                            value={formState.city}
                            onChange={handleInputChange}
                            className={`w-full pl-8 pr-6 py-2.5 sm:py-3 bg-white border rounded-lg text-xs text-[#1a1b3a] font-medium outline-none transition-all shadow-sm ${formErrors.city ? 'border-red-500 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-[#FFD500] focus:ring-2 focus:ring-[#FFD500]/20'}`}
                          >
                            <option value="" disabled>Select City</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Mysore">Mysore</option>
                            <option value="Mangalore">Mangalore</option>
                            <option value="Hubli">Hubli</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-slate-500">
                            <ChevronDown size={14} />
                          </div>
                          {formErrors.city && <p className="text-red-400 text-[9px] pl-1 mt-1">{formErrors.city}</p>}
                        </div>
                      </div>

                      {/* CAPTCHA validation row */}
                      <div className="grid grid-cols-2 gap-3 items-center">
                        <div className="flex bg-slate-200 text-[#1a1b3a] font-display font-black text-center justify-center items-center h-[38px] sm:h-[44px] rounded-lg tracking-wider text-sm select-none shadow-inner border border-slate-300">
                          <span className="line-through decoration-[#1a1b3a]/30 decoration-2 tracking-widest italic select-none">bIoTeCh4</span>
                        </div>
                        <input 
                          type="text" 
                          placeholder="Enter text as shown" 
                          className="w-full px-3 h-[38px] sm:h-[44px] bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-[#1a1b3a] font-medium placeholder:text-slate-400 outline-none shadow-sm focus:border-[#FFD500] focus:ring-2 focus:ring-[#FFD500]/20"
                        />
                      </div>

                      {/* Agreement Checkbox */}
                      <div className="flex items-start gap-2 pt-1.5">
                        <input 
                          type="checkbox" 
                          id="agree" 
                          defaultChecked 
                          className="mt-0.5 w-3.5 h-3.5 rounded border-slate-300 text-[#FFD500] focus:ring-[#FFD500]/40 accent-[#FFD500] cursor-pointer" 
                        />
                        <label htmlFor="agree" className="text-[10px] leading-snug text-slate-300 font-medium select-none cursor-pointer">
                          I Agree To Receive Information Regarding My Application From <strong className="text-white font-semibold">AMC College</strong>.
                        </label>
                      </div>

                      {/* Form Submission button */}
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#3f51b5] hover:bg-[#34429b] text-white font-extrabold py-2.5 sm:py-3.5 rounded-lg transition-all duration-200 uppercase tracking-wider text-xs mt-3 shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            <span>Verifying...</span>
                          </>
                        ) : (
                          <>
                            <span>Register Now</span>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  // Success State View
                  <div className="py-8 px-2 text-center animate-fade-in flex flex-col items-center text-white">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-5 border-2 border-emerald-400 animate-scale-up">
                      <Check size={36} strokeWidth={3} />
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-2 font-display">Slots Locked!</h3>
                    <p className="text-sm text-slate-300 mb-6 max-w-xs leading-relaxed">
                      Thank you, <strong className="text-white">{formState.name}</strong>. Your inquiry for B.Sc./M.Sc. Biotechnology has been prioritised.
                    </p>

                    {/* Step milestones checklist */}
                    <div className="w-full bg-[#1e233d]/50 rounded-xl p-4 text-left border border-white/10 mb-6 space-y-3">
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                        <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                        <span>Early Application Fee Waiver Applied</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                        <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                        <span>PhD Faculty Career Counseling Session Slot Booked</span>
                      </div>
                    </div>

                    <button 
                      onClick={resetForm} 
                      className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all border border-white/10"
                    >
                      Inquire for another course
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Stats Section */}
      <section className="w-full bg-slate-50 py-14 lg:py-20 relative z-20 border-b border-slate-200">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section banner */}
          <div className="text-center mb-10">
            <span className="text-[10px] lg:text-[11px] font-black tracking-widest text-indigo-950 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-150">
              Key Department Achievements
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full">
            <StatCard 
              value="20000+" 
              label={<>Global Alumni<br />Network</>} 
              icon={
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0.5 rounded-full border border-dashed border-amber-400/50"></div>
                  <div className="absolute -top-1 left-2 w-2 h-2 rounded-full bg-amber-400 border border-white shadow-sm"></div>
                  <div className="absolute bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-white shadow-sm"></div>
                  <div className="absolute bottom-2 -right-1 w-2 h-2 rounded-full bg-amber-400 border border-white shadow-sm"></div>
                  <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shadow-inner">
                    <GraduationCap className="text-amber-500" size={18} strokeWidth={2.5} />
                  </div>
                </div>
              }
              bgColor="bg-[#FAF6EB]" 
              textColor="text-[#0e2a64]"
              labelColor="text-slate-600"
              isLight={true}
            />
            <StatCard 
              value="95%" 
              label={<>Students Placed<br />Since 1984</>} 
              icon={
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#0a1b43] flex items-center justify-center shadow-lg relative">
                    <div className="absolute -bottom-0.5 w-2 h-2 bg-[#0a1b43] rotate-45 rounded-sm"></div>
                    <GraduationCap className="text-[#E6F0FA]" size={18} strokeWidth={2} />
                  </div>
                </div>
              }
              bgColor="bg-[#EAF2F8]" 
              textColor="text-[#0e2a64]"
              labelColor="text-slate-600"
              isLight={true}
            />
            <StatCard 
              value="33 Lakhs" 
              label={<>Per Annum<br />Highest Package</>} 
              icon={
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center shadow-lg relative border border-amber-350">
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 border border-white text-[8px] font-black flex items-center justify-center text-white shadow-sm">
                      ₹
                    </div>
                    <TrendingUp className="text-[#0a1b43]" size={18} strokeWidth={2.5} />
                  </div>
                </div>
              }
              bgColor="bg-[#FAF6EB]" 
              textColor="text-[#0e2a64]"
              labelColor="text-slate-600"
              isLight={true}
            />
            <StatCard 
              value="5.5 Lakhs" 
              label={<>Per Annum<br />Median Salary</>} 
              icon={
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-[#0a1b43] flex items-center justify-center shadow-lg relative border border-[#1e2f5b]">
                    <span className="absolute -top-1 right-1 bg-indigo-200 text-[#0a1b43] text-[7px] font-black px-0.5 rounded-sm rotate-12 border border-indigo-100 leading-none">
                      $
                    </span>
                    <Banknote className="text-indigo-100" size={18} strokeWidth={2} />
                  </div>
                </div>
              }
              bgColor="bg-[#EAF2F8]" 
              textColor="text-[#0e2a64]"
              labelColor="text-slate-600"
              isLight={true}
            />
          </div>
        </div>
      </section>

      {/* Programs Offered Section */}
      <section id="courses" className="w-full bg-[#1c213a] py-16 lg:py-24 relative z-20 scroll-mt-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center mb-10 lg:mb-14">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-indigo-500/20">
              <Dna size={14} className="animate-spin text-amber-400" style={{ animationDuration: '6s' }} />
              <span>Bridge Space Between Science & Industry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight font-display">Programs Offered</h2>
            <p className="text-lg lg:text-xl text-slate-300 font-medium">B.Sc. & M.Sc. Biotechnology — Science Meets Industry</p>


          </div>

          {/* Programs Container - Reference Style Outer Border */}
          <div className="border border-indigo-500/20 p-4 sm:p-6 lg:p-8 rounded-[2rem] lg:rounded-[3rem] bg-[#1a1e3b]/40 shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="flex flex-col gap-8">
              
              {/* B.Sc. Biotechnology Card */}
              {(selectedCourseCard === 'all' || selectedCourseCard === 'bsc') && (
                <div className="bg-[#141830] rounded-[1.5rem] overflow-hidden flex flex-col md:flex-row shadow-lg relative border border-indigo-400/10 transition-all duration-300 hover:border-amber-400/30">
                  {/* Content Side */}
                  <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center relative z-10">
                    <div className="mb-5">
                      <span className="inline-block px-3.5 py-1 bg-[#FFD500]/10 text-amber-400 text-[11px] font-black uppercase tracking-widest rounded-full mb-3 border border-amber-400/30">Undergraduate</span>
                      <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 font-display">B.Sc. Biotechnology</h3>
                      <p className="text-slate-300 leading-relaxed text-sm lg:text-[15px] font-medium max-w-2xl">
                        A comprehensive 3-year program emphasizing molecular biology, genetics, and chemistry — designed to build a strong foundation in life sciences and biotechnology applications across pharma, agriculture, and environmental sectors.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-start gap-6 lg:gap-10 mb-6 pt-5 mt-5 border-t border-indigo-900/40">
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-950 p-2.5 rounded-lg mt-0.5 border border-indigo-500/20">
                          <CalendarDays className="text-[#FFD500]" size={20} />
                        </div>
                        <div>
                          <p className="text-[11px] lg:text-[12px] uppercase font-black text-slate-300 tracking-wider mb-1 animate-pulse">Duration</p>
                          <p className="font-black text-white text-base lg:text-lg">3 Years <span className="text-[#FFD500] font-extrabold">(6 Semesters)</span></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-950 p-2.5 rounded-lg mt-0.5 border border-indigo-500/20">
                          <GraduationCap className="text-[#FFD500]" size={20} />
                        </div>
                        <div>
                          <p className="text-[11px] lg:text-[12px] uppercase font-black text-slate-300 tracking-wider mb-1 animate-pulse">Eligibility</p>
                          <p className="font-black text-white text-base lg:text-lg leading-snug">10+2 with Biology & Chemistry</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Key Subjects Covered:</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['Molecular Biology', 'Genetics', 'Microbiology', 'Biochemistry', 'Cell Biology', 'Bioinformatics'].map((item) => (
                          <span key={item} className="bg-indigo-950/80 text-indigo-200 px-3 py-1.5 rounded-lg border border-indigo-800/45 text-xs font-semibold">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto w-full pt-1">
                      <a href="#apply-form" className="bg-[#FFD500] hover:bg-[#e6c100] text-[#1a1b3a] font-extrabold px-8 py-3.5 rounded-lg text-sm transition-colors shadow-sm w-full sm:w-auto uppercase tracking-wide text-center">
                        Register For B.Sc. Admission
                      </a>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center sm:text-right">
                        Affiliated to Bangalore University
                      </span>
                    </div>
                  </div>

                  {/* Program Image Side */}
                  <div className="md:w-2/5 lg:w-[42%] flex-shrink-0 relative min-h-[250px] md:min-h-auto p-4 md:pl-0">
                    <div className="w-full h-full relative rounded-xl overflow-hidden border-2 border-indigo-950 shadow-xl">
                      <img 
                        referrerPolicy="no-referrer"
                        src="https://i.postimg.cc/wMBKXwjn/PMV08050.jpg" 
                        alt="Students conducting genetics analysis" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#141830] md:from-transparent to-transparent opacity-70"></div>
                      <div className="absolute bottom-4 left-4 right-4 bg-[#141830]/90 backdrop-blur-md p-3.5 rounded-lg border border-indigo-500/20">
                        <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-0.5">Lab Experience</p>
                        <p className="text-white text-xs font-bold leading-normal">Hands-on diagnostic practice and microscopy assays inside molecular labs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* M.Sc. Biotechnology Card */}
              {(selectedCourseCard === 'all' || selectedCourseCard === 'msc') && (
                <div className="bg-[#141830] rounded-[1.5rem] overflow-hidden flex flex-col md:flex-row shadow-lg relative border border-indigo-400/10 transition-all duration-300 hover:border-amber-400/30">
                  {/* Content Side */}
                  <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center relative z-10">
                    <div className="mb-5">
                      <span className="inline-block px-3.5 py-1 bg-indigo-500/10 text-indigo-300 text-[11px] font-black uppercase tracking-widest rounded-full mb-3 border border-indigo-500/20">Postgraduate</span>
                      <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 font-display">M.Sc. Biotechnology</h3>
                      <p className="text-slate-300 leading-relaxed text-sm lg:text-[15px] font-medium max-w-2xl">
                        An advanced 2-year PG program focusing on the latest biotechnology research, bioprocess engineering, genetic engineering, and industrial applications — culminating in a research dissertation in the final semester.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-start gap-6 lg:gap-10 mb-6 pt-5 mt-5 border-t border-indigo-900/40">
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-950 p-2.5 rounded-lg mt-0.5 border border-indigo-500/20">
                          <CalendarDays className="text-[#FFD500]" size={20} />
                        </div>
                        <div>
                          <p className="text-[11px] lg:text-[12px] uppercase font-black text-slate-300 tracking-wider mb-1 animate-pulse">Duration</p>
                          <p className="font-black text-white text-base lg:text-lg">2 Years <span className="text-[#FFD500] font-extrabold">(4 Semesters)</span></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-950 p-2.5 rounded-lg mt-0.5 border border-indigo-500/20">
                          <GraduationCap className="text-[#FFD500]" size={20} />
                        </div>
                        <div>
                          <p className="text-[11px] lg:text-[12px] uppercase font-black text-slate-300 tracking-wider mb-1 animate-pulse">Eligibility</p>
                          <p className="font-black text-white text-base lg:text-lg leading-snug">B.Sc. Biotechnology / Life Sciences, min. 50%</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Key Disciplines Covered:</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['Genetic Engineering', 'Bioprocess Technology', 'Immunology', 'Pharmaceutical Biotech', 'Research Dissertation'].map((item) => (
                          <span key={item} className="bg-indigo-900/60 text-indigo-200 px-3 py-1.5 rounded-lg border border-indigo-800/45 text-xs font-semibold">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive spotlight component detail */}
                    <div className="bg-[#1b224c]/40 border border-[#FFD500]/20 rounded-xl p-4 mb-7 flex items-start gap-3">
                      <div className="bg-[#FFD500]/10 p-1.5 rounded-lg text-amber-400 flex-shrink-0 mt-0.5">
                        <FlaskConical size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#FFD500] uppercase tracking-wider">Research Component Included</h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          The 4th semester of M.Sc. Biotechnology is dedicated exclusively to a research dissertation, providing direct hands-on research expertise in high-tech pharmaceutical & vaccine pipeline environments.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto w-full pt-1">
                      <a href="#apply-form" className="bg-[#FFD500] hover:bg-[#e6c100] text-[#1a1b3a] font-extrabold px-8 py-3.5 rounded-lg text-sm transition-colors shadow-sm w-full sm:w-auto uppercase tracking-wide text-center">
                        Register For M.Sc. Admission
                      </a>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center sm:text-right">
                        Affiliated to Bangalore University
                      </span>
                    </div>
                  </div>

                  {/* Program Image Side */}
                  <div className="md:w-2/5 lg:w-[42%] flex-shrink-0 relative min-h-[250px] md:min-h-auto p-4 md:pl-0">
                    <div className="w-full h-full relative rounded-xl overflow-hidden border-2 border-indigo-950 shadow-xl">
                      <img 
                        referrerPolicy="no-referrer"
                        src="https://i.postimg.cc/15Y5FxMk/PMV08027.jpg" 
                        alt="High precision chemical pipeline analysis" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#141830] md:from-transparent to-transparent opacity-70"></div>
                      <div className="absolute bottom-4 left-4 right-4 bg-[#141830]/90 backdrop-blur-md p-3.5 rounded-lg border border-indigo-500/20">
                        <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-0.5 font-display">Bioprocess Innovation</p>
                        <p className="text-white text-xs font-bold leading-normal">Genetic synthesis, biochemistry pathways & bioreactor mechanics training.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Career Sector Outlook Section: India's Biotechnology Sector */}
      <section id="biotech-sector" className="w-full bg-white py-12 lg:py-16 relative overflow-hidden border-b border-slate-200 text-slate-800">
        
        {/* Abstract background blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-50/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-red-50/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Centered Heading block (as in reference image) */}
          <div id="biotech-heading-group" className="text-center max-w-3xl mx-auto mb-8 lg:mb-10 animate-fade-in">
            <span id="biotech-badge" className="text-[10px] font-black text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 uppercase tracking-widest inline-block mb-3 leading-none shadow-xs">
              Industrial Perspective
            </span>
            <h2 id="biotech-main-title" className="text-3xl sm:text-4xl font-extrabold text-[#1a1b3a] tracking-tight leading-tight mb-2 font-sans">
              Biotechnology Sector in India
            </h2>
            <p id="biotech-subtitle" className="text-slate-600 font-semibold text-base sm:text-lg tracking-tight">
              Driving a Multi-Billion Dollar Bio-Economy
            </p>
            <p id="biotech-description" className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed mt-3 max-w-2xl mx-auto">
              India’s biotechnology sector encompasses major biopharma leaders, vaccine manufacturers, and specialized research firms that drive global healthcare innovation. <span className="text-amber-600 font-bold">[1, 2]</span>
            </p>
          </div>

          {/* Symmetrical 3x2 Grid of 6 Cards - Equalized Heights */}
          <div id="biotech-partners-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {[
              {
                name: "Biocon Limited",
                location: "Bengaluru, Karnataka",
                desc: "Largest publicly traded biopharma company, specializing in biosimilars, complex generics & immunotherapies.",
                tags: ["Biosimilars", "Immunotherapy"],
                citations: "[1, 2, 3]",
                icon: Dna,
                iconColor: "text-indigo-600 bg-indigo-50/50 group-hover:border-indigo-200"
              },
              {
                name: "Serum Institute of India",
                location: "Pune, Maharashtra",
                desc: "The world's largest vaccine manufacturer by volume, and critical producer of key vaccines globally.",
                tags: ["Vaccine Tech", "Infectious Diseases"],
                citations: "[1, 4]",
                icon: Activity,
                iconColor: "text-indigo-600 bg-indigo-50/50 group-hover:border-indigo-200"
              },
              {
                name: "Bharat Biotech International",
                location: "Hyderabad, Telangana",
                desc: "Global vaccine innovator, pioneering indigenous solutions like COVAXIN & emerging therapeutics.",
                tags: ["Global Vaccine", "Indigenous"],
                citations: "[2, 5]",
                icon: Award,
                iconColor: "text-indigo-600 bg-indigo-50/50 group-hover:border-indigo-200"
              },
              {
                name: "Syngene International Ltd.",
                location: "Bengaluru, Karnataka",
                desc: "Premier Contract Research (CRAMS) provider supporting global pharma & biotechnology pipelines.",
                tags: ["CRAMS Support", "Pipelines"],
                citations: "[1, 6, 7]",
                icon: FlaskConical,
                iconColor: "text-indigo-600 bg-indigo-50/50 group-hover:border-indigo-200"
              },
              {
                name: "Dr. Reddy's Laboratories",
                location: "Hyderabad, Telangana",
                desc: "Multinational pharmaceutical leader, investing heavily in biosimilars, biologics & APIs research.",
                tags: ["Biologics", "APIs Research"],
                citations: "[1, 2]",
                icon: ShieldCheck,
                iconColor: "text-indigo-600 bg-indigo-50/50 group-hover:border-indigo-200"
              },
              {
                name: "MedGenome Labs Pvt. Ltd.",
                location: "Bengaluru, Karnataka",
                desc: "Genomics and clinical data pioneer, providing advanced personalized medicine and DNA testing.",
                tags: ["Genomics", "DNA Tech"],
                citations: "[1, 2]",
                icon: Microscope,
                iconColor: "text-indigo-600 bg-indigo-50/50 group-hover:border-indigo-200"
              }
            ].map((leader, idx) => {
              const LeaderIcon = leader.icon;
              return (
                <div 
                  key={idx} 
                  id={`biotech-card-${idx}`}
                  className="bg-slate-50/60 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 border border-slate-100 rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 w-full group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div>
                    {/* Unique Unified Icon Container */}
                    <div className={`w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100/60 flex items-center justify-center mb-4 shrink-0 transition-all duration-300 group-hover:scale-105 ${leader.iconColor.split(' ')[2] || 'group-hover:border-indigo-100'}`}>
                      <LeaderIcon size={18} className={`${leader.iconColor.split(' ')[0]} shrink-0`} />
                    </div>

                    {/* Header and location */}
                    <div className="mb-2">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 id={`biotech-card-title-${idx}`} className="font-extrabold text-[#1a1b3a] group-hover:text-indigo-700 text-sm sm:text-base font-sans transition-colors leading-tight">
                            {leader.name}
                          </h3>
                          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1 flex items-center gap-1">
                            <MapPin size={9} className="text-slate-400 shrink-0" />
                            {leader.location}
                          </p>
                        </div>
                        <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 rounded-md border border-indigo-100/60 px-1.5 py-0.5 shrink-0 select-none">
                          {leader.citations}
                        </span>
                      </div>
                    </div>

                    {/* Compact description */}
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {leader.desc}
                    </p>
                  </div>

                  {/* Tags below bullets */}
                  <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-slate-100">
                    {leader.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100/40 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Recruiters Carousel Section */}
      <section className="w-full bg-[#171c30] py-16 lg:py-24 relative z-20 border-t border-b border-indigo-950/25">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <span className="text-xs font-black text-amber-400 tracking-widest pl-0.5 uppercase">Top Placement Partners</span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-display">Our Corporate Partners</h2>
            </div>
            <div className="px-3.5 py-1.5 bg-indigo-950 text-amber-300 rounded-lg text-xs font-extrabold border border-indigo-805/40">
              Active Corporate Drives
            </div>
          </div>
          
          <div className="bg-[#131730]/70 border border-indigo-500/20 rounded-xl lg:rounded-2xl p-6 lg:p-10 relative overflow-hidden shadow-2xl">
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-xl lg:text-2xl font-extrabold text-[#FFD500] mb-8 text-center tracking-tight font-display">Industry Leaders Partnering with AMC College</h3>
              
              {/* Marquee Loop */}
              <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="flex gap-4 lg:gap-6 animate-marquee">
                  {/* Repeated sets to guarantee screen width is filled on all monitors */}
                  {[...recruiterLogos, ...recruiterLogos, ...recruiterLogos, ...recruiterLogos, ...recruiterLogos, ...recruiterLogos].map((src, i) => (
                    <RecruiterCard key={`set1-${i}`} imgSrc={src} />
                  ))}
                  
                  {/* Duplicated set for seamless infinite loop */}
                  {[...recruiterLogos, ...recruiterLogos, ...recruiterLogos, ...recruiterLogos, ...recruiterLogos, ...recruiterLogos].map((src, i) => (
                    <RecruiterCard key={`set2-${i}`} imgSrc={src} />
                  ))}
                </div>
              </div>
              
            </div>
            {/* Decorative layout accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl translate-x-12 -translate-y-12"></div>
          </div>
        </div>
      </section>

      {/* Why AMC Biotechnology Section: "Why AMC Biotechnology - Everything you need to excel in life sciences" */}
      <section className="w-full bg-white py-12 lg:py-16 relative z-20 overflow-hidden border-t border-b border-slate-200">
        
        {/* Dotted visual decoration */}
        <div className="absolute top-8 left-8 w-32 h-32 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1a1b3a 1.5px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1a1b3a 1.5px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Visual Showcase Artwork - Dominant and balanced with tall heights */}
            <div className="lg:col-span-5 relative w-full h-[340px] sm:h-[420px] lg:h-full lg:min-h-[560px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 shrink-0">
              <div className="absolute -left-6 top-0 w-1/2 h-1/2 bg-amber-100/15 -z-10 rounded-xl blur-lg"></div>
              <div className="absolute right-0 bottom-12 w-1/2 h-1/2 bg-indigo-50/10 -z-10 rounded-xl blur-lg"></div>
              
              <img 
                referrerPolicy="no-referrer"
                src="https://i.postimg.cc/rwyQR85Y/PMV08000.jpg" 
                alt="Students working closely inside AMC laboratory" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Floating Lab Highlight Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0f132f]/95 backdrop-blur-md p-4 rounded-xl border border-amber-400/20 text-white shadow-lg">
                <div className="flex items-center gap-1.5 mb-1">
                  <Award className="text-[#FFD500]" size={14} />
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#FFD500]">Bangalore Main Campus</span>
                </div>
                <h4 className="text-xs font-bold text-white mb-0.5 font-display">A 52-Acre Green Sanctuary</h4>
                <p className="text-[10px] text-slate-300 leading-normal">
                  Nurturing scientists with research amenities, academic facilities and active career mentorship.
                </p>
              </div>
            </div>

            {/* Right Column: Heading directly above 5 Key Content Elements in high-impact scanning grid with CTA */}
            <div className="lg:col-span-7 py-1.5 flex flex-col justify-between h-full">
              
              {/* Heading Section - Redesigned & Shifted to Top-Right inside content column */}
              <div id="why-biotech-heading text-left" className="mb-9">
                <span className="text-[10px] font-black text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-150 uppercase tracking-widest inline-block mb-2.5 leading-none shadow-xs">
                  Academic Excellence
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-3.5xl font-extrabold text-[#1a1b3a] tracking-tight leading-tight mb-1.5 font-sans">
                  Why AMC Biotechnology
                </h2>
                <p className="text-slate-500 font-semibold text-xs tracking-wider uppercase">
                  Everything you need to excel in life sciences
                </p>
                <div className="w-16 h-[2.5px] bg-[#1a1b3a] mt-3 rounded-full"></div>
              </div>

              {/* Grid of the 5 points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 lg:gap-x-6 lg:gap-y-6">
                
                <WhyBiotechItem 
                  idx="01"
                  title="Advanced Biotech Labs"
                  desc="State-of-the-art life science laboratories equipped for molecular biology, microbiology, genetics, and biochemistry practicals."
                  icon={<FlaskConical size={18} />}
                  isLight={true}
                />

                <WhyBiotechItem 
                  idx="02"
                  title="Experienced Faculty"
                  desc="Learn from expert professors and researchers with deep domain focus in molecular biology and gene translation."
                  icon={<Users size={18} />}
                  isLight={true}
                />

                <WhyBiotechItem 
                  idx="03"
                  title="NAAC A+ Accredited"
                  desc="AMC holds one of India's highest institutional quality ratings, ensuring a world-class training environment."
                  icon={<Award size={18} />}
                  isLight={true}
                />

                <WhyBiotechItem 
                  idx="04"
                  title="Industry Curriculum"
                  desc="Curriculums designed to fit growing biotech and pharmaceutical industry trends and emerging sciences."
                  icon={<Layers size={18} />}
                  isLight={true}
                />

                <div className="sm:col-span-2">
                  <WhyBiotechItem 
                    idx="05"
                    title="Placement Support"
                    desc="Dedicated career division connecting students closely with leading pharmaceutical giants, biotech institutes, clinical laboratories, and research chambers across South Asia."
                    icon={<Briefcase size={18} />}
                    isLight={true}
                  />
                </div>

              </div>

              {/* Premium, High-Converting Apply Now CTA Button matching deep landing page theme color */}
              <div className="mt-6 pt-1 text-left">
                <a 
                  href="#apply-form" 
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#1a1b3a] to-[#2b2d63] hover:from-[#2a2c5a] hover:to-[#1a1b3a] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
                >
                  <span>Apply Now for 2026 Batch</span>
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* After Graduation Section */}
      <section className="w-full bg-[#13172e] py-16 lg:py-24 relative z-20 border-b border-indigo-950">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center mb-10 lg:mb-14">
            <span className="text-[10px] lg:text-[11px] font-black tracking-widest text-[#FFD500] uppercase bg-[#FFD500]/10 px-3 py-1 rounded-full">
              Post-Graduation Pathways
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mt-3 text-white font-display">
              After Graduation
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-2">Your biotechnology degree opens doors to a thriving career</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch pt-4">
            
            {/* Left Side: Visual Showcase Banner */}
            <div className="w-full lg:w-5/12 flex flex-col relative rounded-xl border border-amber-500/20 overflow-hidden p-1.5 shadow-2xl shrink-0 bg-slate-900/40">
               <div className="relative w-full h-[280px] lg:h-full min-h-[280px] lg:min-h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-slate-950">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://i.postimg.cc/h4QqYJ0p/PMV07963.jpg" 
                    alt="Scientist analysing cells" 
                    className="absolute inset-0 w-full h-full object-cover opacity-90" 
                  />
                  
                  {/* Glowing custom banner overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 text-white">
                    <p className="text-xs font-black uppercase text-amber-400 tracking-wider mb-1">Career Opportunities</p>
                    <p className="text-base font-bold font-display">Pharma, Research, Bioprocess &amp; Diagnostics Sectors</p>
                  </div>
               </div>
            </div>

            {/* Right Side: Interactive Course Career Tabs */}
            <div className="w-full lg:w-7/12 flex flex-col pt-1">
              
              {/* Tabs Switcher Custom Layout */}
              <div className="grid grid-cols-2 w-full rounded-t-xl overflow-hidden border-b border-indigo-500/20">
                <button 
                  onClick={() => setCareerTab('bsc')}
                  className={`px-6 py-4.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${careerTab === 'bsc' ? 'bg-[#FFD500] text-[#1a1b3a] font-black' : 'bg-[#151935] text-slate-300 hover:bg-[#1f244a]'}`}
                >
                  After B.Sc. Biotechnology
                </button>
                <button 
                  onClick={() => setCareerTab('msc')}
                  className={`px-6 py-4.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${careerTab === 'msc' ? 'bg-[#FFD500] text-[#1a1b3a] font-black' : 'bg-[#151935] text-slate-300 hover:bg-[#1f244a]'}`}
                >
                  After M.Sc. Biotechnology
                </button>
              </div>

              {/* Custom Tab Contents with direct copy from PDF */}
              <div className="bg-[#141830] rounded-b-xl border border-indigo-500/20 p-6 sm:p-10 flex-1 relative flex flex-col justify-center">
                 {careerTab === 'bsc' ? (
                   <div className="space-y-6">
                     <div className="flex items-center gap-2 mb-2">
                       <span className="w-2 h-2 rounded-full bg-[#FFD500]"></span>
                       <span className="text-[11px] font-black uppercase text-amber-400 tracking-widest">Entry-Level Clinical &amp; Industrial Roles</span>
                     </div>
                     <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                       {[
                         'Lab Technician / Research Assistant',
                         'Quality Control Analyst',
                         'Biotech Sales & Marketing',
                         'Agricultural Biotechnologist',
                         'Clinical Research Coordinator',
                         'Pursue M.Sc. / MBA (Biotech)'
                       ].map((role) => (
                         <li key={role} className="flex items-center gap-3 bg-indigo-950/40 p-3 rounded-lg border border-indigo-900/30 hover:border-amber-400/20 transition-all">
                           <div className="w-2 h-2 rounded-full bg-[#FFD500] shrink-0"></div>
                           <span className="text-slate-200 font-semibold text-sm sm:text-[15px]">{role}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 ) : (
                   <div className="space-y-6">
                     <div className="flex items-center gap-2 mb-2">
                       <span className="w-2 h-2 rounded-full bg-[#FFD500]"></span>
                       <span className="text-[11px] font-black uppercase text-amber-400 tracking-widest">High-Value Research &amp; Engineering Specialties</span>
                     </div>
                     <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                       {[
                         'Research Scientist',
                         'Bioprocess Engineer',
                         'Pharmaceutical Researcher',
                         'Genetic Engineer',
                         'Lecturer / Academic Researcher',
                         'Regulatory Affairs Specialist'
                       ].map((role) => (
                         <li key={role} className="flex items-center gap-3 bg-indigo-950/40 p-3 rounded-lg border border-indigo-900/30 hover:border-amber-400/20 transition-all">
                           <div className="w-2 h-2 rounded-full bg-[#FFD500] shrink-0"></div>
                           <span className="text-slate-200 font-semibold text-sm sm:text-[15px]">{role}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Top Sectors to Work In Section - Replaced & Redesigned */}
      <section className="w-full bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f4f9] py-16 lg:py-24 relative z-20 overflow-hidden border-t border-b border-indigo-50/25">
        {/* Abstract background decorative elements for organic technical depth */}
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-indigo-200/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute left-[10%] bottom-0 w-[350px] h-[350px] bg-amber-100/15 rounded-full blur-[90px] -z-10"></div>
        
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Beautiful modern section header replaces the old floating red box */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="text-[10px] lg:text-[11px] font-black tracking-widest text-[#1a1b3a] bg-[#FFD500]/20 px-3.5 py-1 rounded-full border border-[#FFD500]/50 uppercase inline-block mb-3">
              Industry Alignment &amp; Scope
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold tracking-tight text-[#1a1b3a] font-display">
              Career Opportunities After Biotechnology
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base mt-2.5 max-w-2xl mx-auto">
              Unlock prestigious, high-growth pathways across clinical, industrial, research, and technical biopharmaceutics.
            </p>
            <div className="w-16 h-[2.5px] bg-[#1a1b3a] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 lg:items-start items-start">
            
            {/* Left Column: Image Integration - Rigidly locked height to prevent any dynamic resizing */}
            <div className="lg:col-span-6 w-full lg:self-start flex-shrink-0">
              
              {/* Connected high-quality laboratory photo - Strictly static size constraints to match points height */}
              <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[640px] min-h-[350px] sm:min-h-[450px] lg:min-h-[640px] max-h-[350px] sm:max-h-[450px] lg:max-h-[640px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 flex-shrink-0">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://i.postimg.cc/T15LLRmC/PMV07775.jpg" 
                  alt="Biotechnology students executing clinical trials" 
                  className="absolute inset-0 w-full h-full object-cover transition-none" 
                  style={{ transform: 'none' }}
                />
                
                {/* Visual Glassmorphic Accent on top left of the photo */}
                <div className="absolute top-4 left-4 bg-[#1a1b3a]/90 backdrop-blur-md px-4 py-2 border border-white/10 rounded-xl shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FFD500] animate-pulse"></div>
                    <span className="text-white text-[10.5px] font-black uppercase tracking-wider">
                      Industry Placed
                    </span>
                  </div>
                </div>
              </div>
 
            </div>

            {/* Right Column: Modern Interactive Accordions/Cards */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="space-y-3.5">
                {[
                  {
                    title: "Pharmaceuticals & Biomanufacturing",
                    desc: "Lead heavy production runs of advanced biological therapeutics, bulk vaccines, diagnostic kits, and recombinant antibodies inside multi-million dollar pharmaceutical manufacturing clusters.",
                    icon: FlaskConical,
                    pills: ["Cipla", "Biocon", "Vaccine Dev"],
                    highlight: "Highest Hiring Intensity"
                  },
                  {
                    title: "Biotech & Genomics Research",
                    desc: "Conduct high-precision cell line culture, PCR amplification, genetic sequences, transcription experiments, and automated molecular diagnostic audits for oncology research.",
                    icon: Microscope,
                    pills: ["Syngene", "DNA Labs", "Oncology Assays"],
                    highlight: "Research-Heavy"
                  },
                  {
                    title: "Agricultural Biotechnology",
                    desc: "Design climate-resilient transgenic seeds, engineer nitrogen-fixing organic bacterial seeder mediums, and test natural soil microbiome stimulants to double organic food yields.",
                    icon: Dna,
                    pills: ["Hybrid Seeds", "Bio-Fertilizers", "R&D Crops"],
                    highlight: "Eco-Innovation"
                  },
                  {
                    title: "Clinical Trial Research & CROs",
                    desc: "Coordinate global clinical drug trials, ensure absolute regulatory protocol standards, document toxicological profiles, and analyze participant research database records.",
                    icon: Activity,
                    pills: ["Bioclinica", "Trial Data", "Regulatory Compliance"],
                    highlight: "High Growth"
                  },
                  {
                    title: "Environmental Biotechnology",
                    desc: "Develop advanced bio-remediation agents utilizing living micro-organisms to purify industrial waste water and engineer scalable renewable bio-fuel grids for clean energy.",
                    icon: TrendingUp,
                    pills: ["Bio-fuels", "Waste Processing", "Green Auditing"]
                  },
                  {
                    title: "Academia, Teachings & Fellowships",
                    desc: "Transition smoothly into funded international or CSIR fellowship programs, accept university assistant professorships, and construct next-generation biology textbooks.",
                    icon: GraduationCap,
                    pills: ["Post-Doc", "Academic Faculty", "Journal Writing"]
                  }
                ].map((sector, idx) => {
                  const IconComponent = sector.icon;
                  const isOpen = activeSector === idx;
                  return (
                    <div 
                      key={idx}
                      className={`group transition-all duration-300 rounded-xl border ${
                        isOpen 
                          ? "bg-white border-[#1a1b3a]/30 shadow-md ring-1 ring-[#1a1b3a]/5" 
                          : "bg-white/60 hover:bg-white border-slate-150 hover:border-slate-300 shadow-xs"
                      }`}
                    >
                      <button
                        onClick={() => setActiveSector(isOpen ? -1 : idx)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`p-2.5 rounded-lg transition-all duration-300 ${
                            isOpen 
                              ? "bg-[#1a1b3a] text-white" 
                              : "bg-[#1a1b3a]/5 text-[#1a1b3a] group-hover:bg-[#FFD500] group-hover:text-[#1a1b3a]"
                          }`}>
                             <IconComponent size={20} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-[#1a1b3a] font-bold text-sm sm:text-base tracking-tight font-sans">
                                {sector.title}
                              </h4>
                              {sector.highlight && (
                                <span className="bg-[#FFD500]/20 border border-[#FFD500]/50 text-[#1a1b3a] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                                  {sector.highlight}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-slate-400 group-hover:text-[#1a1b3a] transition-colors">
                          <ChevronDown 
                            size={18} 
                            className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-[#1a1b3a]" : ""}`} 
                          />
                        </div>
                      </button>

                      {/* Expanding Accordion Body with super smooth custom motion curve */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: "auto", 
                              opacity: 1,
                              transition: {
                                height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                                opacity: { duration: 0.25, delay: 0.05 }
                              }
                            }}
                            exit={{ 
                              height: 0, 
                              opacity: 0,
                              transition: {
                                height: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
                                opacity: { duration: 0.15 }
                              }
                            }}
                            className="overflow-hidden border-t border-slate-100"
                          >
                            <div className="p-5 bg-slate-50/50">
                              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-semibold">
                                {sector.desc}
                              </p>
                              
                              <div className="flex items-center gap-2 mt-4 flex-wrap">
                                <span className="text-[10px] uppercase font-black tracking-widest text-[#1a1b3a] mr-2">
                                  Target Clusters:
                                </span>
                                {sector.pills.map((pill, pIdx) => (
                                  <span 
                                    key={pIdx} 
                                    className="bg-[#1a1b3a]/5 border border-[#1a1b3a]/10 text-[#1a1b3a] font-bold text-[10.5px] px-2.5 py-0.5 rounded-md"
                                  >
                                    {pill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Recognition & Approvals Section */}
      <section className="w-full bg-[#171c30] py-16 lg:py-20 relative z-20 border-t border-b border-indigo-950/30 text-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center mb-10 lg:mb-12">
            <span className="text-[10px] lg:text-[11px] font-black tracking-widest text-[#FFD500] uppercase bg-[#FFD500]/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              University Affiliation &amp; Status
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-3.5 font-display">Recognised &amp; Approved By</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 w-full">
            <RecognisedCard 
              title="NAAC A+" 
              subtitle="National Accreditation" 
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTG5sofu0OsiskIaa3OXcnUpkOKLNqr5QAw&s"
            />
            <RecognisedCard 
              title="NBA" 
              subtitle="National Board of Accreditation" 
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwPL5ePymXNJuuKTqt69UNiCoXHHt139wjQ&s"
            />
            <RecognisedCard 
              title="AICTE" 
              subtitle="Govt. of India Approved" 
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0EfpIv5zmfeoz5KCSLPwZLlYZlHeG41B8VQ&s"
            />
            <RecognisedCard 
              title="VTU" 
              subtitle="Visvesvaraya Tech. University" 
              imgSrc="https://upload.wikimedia.org/wikipedia/en/a/a0/Visvesvaraya_Technological_University_logo.png"
            />
            <RecognisedCard 
              title="ISO" 
              subtitle="ISO Certified Institution" 
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlla7Hiamqclr7KBR2aAQ59K2azBf6YeGVQg&s"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
              Note: Both B.Sc. and M.Sc. Biotechnology programs at AMC are affiliated to Bangalore University, ensuring a nationally recognized degree.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed FAQ Accordion Section (Integrating 7 complete questions from PDF) */}
      <section className="w-full bg-slate-50 py-16 lg:py-24 relative z-20 text-slate-800 border-b border-slate-200">
        <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center mb-10 lg:mb-14">
            <div className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-indigo-150">
              <HelpCircle size={14} />
              <span>Admissions &amp; Course Queries Resolved</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight font-display text-[#1a1b3a]">
              Biotechnology Program FAQs
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium">
              Have specific questions? Explore direct requirements and details about our Biotechnology courses.
            </p>
          </div>

          {/* Interactive Accordion Cards */}
          <div className="space-y-3.5">
            {BiotechFAQs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-600/30 hover:shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 sm:py-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-[15.5px] cursor-pointer hover:bg-slate-50/50 transition-colors font-display text-slate-800"
                  >
                    <span>{faq.q}</span>
                    <div className={`p-1.5 rounded-lg bg-slate-100 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-700' : ''}`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {/* Animated Disclosure panel */}
                  <div 
                    className={`transition-all duration-300 ${isOpen ? 'max-h-[350px] border-t border-slate-100' : 'max-h-0'}`}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="p-5 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 mt-8 text-center text-xs shadow-sm">
            <p className="text-slate-600 font-medium">
              Still have other inquiries concerning laboratory hours, hostel accommodation or pricing structures?
            </p>
            <a href="#apply-form" className="inline-block text-indigo-700 font-black underline uppercase tracking-wider mt-3 hover:text-[#7A1F24] transition-colors">
              Request Full Counseling Call
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#111425] text-slate-400 py-12 lg:py-16 border-t border-[#1a1e36] z-20 relative">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Styled Logo Badge & Slogan */}
          <div className="md:col-span-6 flex flex-col gap-4">
            {/* White card containing the official corporate logo image */}
            <div className="bg-white rounded-[4px] p-2.5 flex items-center justify-center w-fit border border-slate-200/80 shadow-xs max-w-[280px]">
              <img 
                referrerPolicy="no-referrer"
                src="https://i.postimg.cc/pV6hz1Wr/image.png"
                alt="AMC Engineering College Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-[13px] text-slate-400 mt-2 max-w-md leading-relaxed">
              AMC Engineering College is committed to creating deep technical competency, high research productivity, and robust industry integrations for engineering professionals.
            </p>
            
            <p className="text-[#FFD500] text-[11px] sm:text-xs font-black uppercase tracking-wider mt-2 leading-none">
              APPROVED BY AICTE | AFFILIATED TO VTU BENGALURU
            </p>
          </div>

          {/* Middle Column: Curricular Fastpaths */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[#FFD500] text-xs font-black uppercase tracking-widest">CURRICULAR FASTPATHS</h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <a href="#biotech-sector" className="hover:text-white transition-colors">Overview</a>
              </li>
              <li>
                <a href="#biotech-sector" className="hover:text-white transition-colors">Placements</a>
              </li>
              <li>
                <a 
                  href="#courses" 
                  onClick={() => setSelectedCourseCard('all')} 
                  className="hover:text-white transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a href="#biotech-sector" className="hover:text-white transition-colors">Why AMC</a>
              </li>
              <li>
                <a 
                  href="#courses" 
                  onClick={() => setSelectedCourseCard('all')} 
                  className="hover:text-white transition-colors"
                >
                  Student Work
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">Campus Life</a>
              </li>
            </ul>
          </div>

          {/* Right Column: Campus Location */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[#FFD500] text-xs font-black uppercase tracking-widest">AMC CAMPUS LOCATION</h4>
            <div className="space-y-4 text-xs sm:text-[13px] text-slate-400 leading-normal">
              <div className="flex gap-2.5 items-start">
                <MapPin size={16} className="text-[#FFD500] shrink-0 mt-0.5" />
                <span>
                  AMC Campus, 18th K.M. Bannerghatta Road,<br />
                  Bengaluru — 560083
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone size={16} className="text-[#FFD500] shrink-0" />
                <a href="tel:+919902044113" className="hover:text-white transition-colors">+91 99020 44113</a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail size={16} className="text-[#FFD500] shrink-0" />
                <a href="mailto:admissions@amceducation.in" className="hover:text-white transition-colors">admissions@amceducation.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Flat Divider */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-12">
          <div className="border-t border-[#1a1e36] w-full" />
        </div>

        {/* Footer Bottom Row */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>© 2026 AMC Engineering College Bengaluru. All rights reserved. | Design and Developed By Mediagarh</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-1 hover:text-white transition-colors font-extrabold uppercase tracking-wider text-[11px] cursor-pointer"
          >
            BACK TO TOP <ChevronUp size={14} />
          </button>
        </div>
      </footer>

    </div>
  );
}

// Sub-components mapped exact parameters for consistency
function RecognisedCard({ title, subtitle, imgSrc, isLight = false }: { title: string; subtitle: string; imgSrc?: string; isLight?: boolean; }) {
  return (
    <div className={`${isLight ? 'bg-white border border-slate-200 shadow-sm' : 'bg-[#151a35] border border-indigo-900/40 shadow-lg'} rounded-[1.25rem] p-6 flex flex-col items-center justify-center text-center w-[160px] sm:w-[180px] lg:w-[220px] hover:shadow-md hover:border-[#FFD500]/50 transition-all group duration-200`}>
      <div className={`w-20 h-20 rounded-full ${isLight ? 'bg-white border border-slate-100' : 'bg-white border border-indigo-900/30'} flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-105 overflow-hidden p-1.5 shadow-inner`}>
        {imgSrc ? (
          <img 
            referrerPolicy="no-referrer"
            src={imgSrc} 
            alt={`${title} logo`} 
            className="w-full h-full object-contain" 
          />
        ) : (
          <Award className="text-slate-400 group-hover:text-amber-400 transition-colors" size={36} />
        )}
      </div>
      <h4 className={`font-extrabold ${isLight ? 'text-[#1a1b3a]' : 'text-white'} text-lg lg:text-xl mb-1.5 font-display`}>{title}</h4>
      <p className={`text-[13px] leading-snug ${isLight ? 'text-slate-500 font-medium' : 'text-slate-400'} px-2`}>{subtitle}</p>
    </div>
  );
}

function WhyBiotechItem({ 
  idx, 
  title, 
  desc, 
  isLight = false 
}: { 
  idx: string; 
  title: string; 
  desc: string; 
  icon?: React.ReactNode;
  isLight?: boolean;
}) {
  return (
    <div className="flex gap-3 items-start group">
      {/* Index bubble */}
      <div className={`w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-full ${isLight ? 'bg-indigo-50 border border-indigo-200 text-indigo-700 group-hover:bg-[#FFD500] group-hover:text-[#1a1b3a] group-hover:border-amber-400' : 'bg-[#1b224c] border border-[#FFD500]/40 text-[#FFD500] group-hover:bg-[#FFD500] group-hover:text-[#1a1b3a]'} flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 shadow-xs transition-all duration-300 mt-0.5`}>
        {idx}
      </div>
      {/* Text column */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className={`font-bold ${isLight ? 'text-[#1a1b3a]' : 'text-white'} text-[14.5px] sm:text-[15.5px] tracking-tight font-display`}>{title}</h3>
        </div>
        <p className={`${isLight ? 'text-slate-600 font-medium' : 'text-slate-300'} text-[11px] sm:text-[12.5px] leading-relaxed`}>
          {desc}
        </p>
      </div>
    </div>
  );
}

function RecruiterCard({ imgSrc }: { imgSrc: string; key?: string | number }) {
  const isSmallLogo = (imgSrc.includes('encrypted-tbn0.gstatic.com') || imgSrc.includes('tbn0') || imgSrc.includes('ANd9G')) && !imgSrc.includes('Qgq8yBSoWyphg2f');
  return (
    <div className="shrink-0 bg-white rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.12)] p-2.5 w-[190px] h-[90px] lg:w-[250px] lg:h-[115px] flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default border border-slate-100 overflow-hidden">
      <img 
        referrerPolicy="no-referrer" 
        src={imgSrc} 
        alt="Recruiter Logo Partner" 
        className={`max-h-[92%] max-w-[92%] object-contain mix-blend-multiply transition-transform duration-300 ${isSmallLogo ? 'scale-130 lg:scale-140' : ''}`} 
      />
    </div>
  );
}

function FeatureItem({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <div className="flex items-start gap-2.5 py-1.5 transition-all duration-300">
      <div className="flex-shrink-0 mt-0.5 text-[#FFD500] flex items-center justify-center">
        <CheckCircle2 size={16} strokeWidth={2.5} className="fill-[#FFD500]/10" />
      </div>
      <p className="text-[12.5px] sm:text-[13.5px] leading-snug text-white/90 font-medium">
        {text}
      </p>
    </div>
  );
}

function StatCard({ 
  value, 
  label, 
  icon, 
  bgColor,
  textColor = "text-[#0e2a64]",
  labelColor = "text-slate-650 font-semibold",
  isLight = false
}: { 
  value: string; 
  label: React.ReactNode; 
  icon: React.ReactNode; 
  bgColor: string;
  textColor?: string;
  labelColor?: string;
  isLight?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden min-h-[155px] lg:min-h-[175px] transition-all duration-300 shadow-sm border border-slate-200/50 hover:shadow-md hover:border-amber-400/50 group ${isLight ? bgColor : 'bg-[#10142b]'}`}>
      <div className="relative z-10">
        <h3 className={`text-2xl lg:text-3.5xl font-black mb-1.5 font-display transition-colors ${isLight ? textColor : 'text-white'}`}>
          {value}
        </h3>
        <p className={`text-[12.5px] lg:text-[13.5px] leading-relaxed font-bold tracking-tight ${isLight ? labelColor : 'text-slate-300'}`}>
          {label}
        </p>
      </div>
      <div className="absolute right-4 bottom-4 transition-transform duration-300 group-hover:scale-105 z-0">
        {icon}
      </div>
    </div>
  );
}

// Custom OrgCard for the major industrial leaders
function OrgCard({ 
  name, 
  location, 
  bullets, 
  tags, 
  citations,
  icon,
  isLight = false
}: { 
  name: string; 
  location: string; 
  bullets: string[]; 
  tags: string[]; 
  citations: string;
  icon?: React.ReactNode;
  isLight?: boolean;
}) {
  return (
    <div className={`${isLight ? 'bg-white border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md' : 'bg-[#111424] border border-indigo-900/30 hover:border-[#FFD500]/30 shadow-lg'} rounded-xl p-5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1`}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-[#FFD500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div>
        <div className="flex justify-between items-start mb-3 gap-2">
          <div className="flex gap-2.5 items-start">
            {icon && (
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 group-hover:bg-[#FFD500] group-hover:text-[#1a1b3a] transition-all duration-300 shrink-0">
                {icon}
              </div>
            )}
            <div>
              <h3 className={`font-extrabold ${isLight ? 'text-indigo-950 group-hover:text-[#7A1F24]' : 'text-[#FFD500]'} text-sm sm:text-base font-sans transition-colors leading-tight`}>
                {name}
              </h3>
              <p className={`text-[10px] ${isLight ? 'text-slate-500' : 'text-slate-400'} font-medium italic mt-0.5`}>{location}</p>
            </div>
          </div>
          <span className={`text-[10px] font-black ${isLight ? 'text-amber-700 bg-amber-50 rounded border border-amber-200' : 'text-amber-400 bg-amber-400/5 rounded border border-amber-400/10'} px-2 py-0.5 shrink-0`}>
            {citations}
          </span>
        </div>

        <ul className="space-y-2 mt-3.5">
          {bullets.map((b, i) => (
            <li key={i} className={`flex gap-2 items-start text-xs ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'} leading-relaxed`}>
              <span className="text-amber-500 font-bold shrink-0">&bull;</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`flex flex-wrap gap-1.5 mt-4.5 pt-3 border-t ${isLight ? 'border-slate-100' : 'border-indigo-950'}`}>
        {tags.map((t, i) => (
          <span key={i} className={`text-[9px] font-bold uppercase tracking-widest ${isLight ? 'text-indigo-700 bg-indigo-50' : 'text-indigo-300 bg-indigo-950/40'} px-2 py-0.5 rounded`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// 7 FAQs from Page 5 & Page 6 of the PDF exactly drafted
const BiotechFAQs = [
  {
    q: "What is the eligibility for M.Sc. Biotechnology at AMC?",
    a: "B.Sc. in Biotechnology, Life Sciences, Microbiology, Biochemistry, or related discipline with a minimum of 50% marks."
  },
  {
    q: "What subjects are covered in the Biotechnology programs?",
    a: "B.Sc. covers Molecular Biology, Genetics, Microbiology, Biochemistry, Cell Biology, and Bioinformatics. M.Sc. covers Genetic Engineering, Bioprocess Technology, Immunology, Pharmaceutical Biotechnology, and includes a Research Dissertation."
  },
  {
    q: "Is there a research component in M.Sc. Biotechnology?",
    a: "Yes, the 4th semester of M.Sc. Biotechnology is dedicated to a research dissertation, giving students hands-on research experience in their chosen area of specialization."
  },
  {
    q: "Which university are these programs affiliated to?",
    a: "Both B.Sc. and M.Sc. Biotechnology programs at AMC are affiliated to Bangalore University, ensuring a nationally recognized degree."
  },
  {
    q: "What lab facilities are available for Biotechnology students?",
    a: "AMC has state-of-the-art biotechnology and life science laboratories equipped for molecular biology, microbiology, genetics, biochemistry, and bioprocess technology practicals."
  },
  {
    q: "What career opportunities are available after Biotechnology?",
    a: "Graduates can work in pharmaceutical companies, biotech research labs, clinical research organizations, agricultural biotech firms, hospitals, and environmental sectors. M.Sc. graduates can also pursue PhD or academic careers."
  },
  {
    q: "Does AMC have a placement cell for Biotechnology students?",
    a: "Yes, AMC has a dedicated placement cell that assists students with career guidance, resume building, interview preparation, and placement drives with pharma and biotech companies."
  }
];
