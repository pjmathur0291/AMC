import React from 'react';
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
  Mail,
  ChevronUp
} from 'lucide-react';

import { recruiterLogos } from './assets/recruiterLogos';

const faqs = [
  {
    question: "What is the eligibility for BCA at AMCEC?",
    answer: "10+2 in any stream with a minimum of 45% marks. Students from Science, Commerce, and Arts backgrounds are all eligible to apply for BCA."
  },
  {
    question: "What is the eligibility for MCA at AMCEC?",
    answer: "BCA or B.Sc. in Computer Science / Mathematics / Statistics / Physics with minimum 50% marks (45% for SC/ST candidates from Karnataka). Admission is based on KPGCET scores followed by counselling."
  },
  {
    question: "Is there a lateral entry option for MCA?",
    answer: "Yes, AMCEC offers MCA Lateral Entry for BCA/B.Sc. graduates, allowing direct admission to the second year of the MCA program."
  },
  {
    question: "What subjects are covered in BCA and MCA?",
    answer: "BCA covers Programming (C, Java, Python), Web Development, DBMS, Networking, and Software Engineering. MCA covers Advanced Java, Python, AI/ML, Cloud Computing, Data Science, and Software Architecture."
  },
  {
    question: "Which university are the BCA and MCA programs affiliated to?",
    answer: "BCA is affiliated to Bangalore University. MCA is affiliated to Visvesvaraya Technological University (VTU), Belagavi, and is approved by AICTE."
  },
  {
    question: "Is hostel facility available at AMCEC?",
    answer: "Yes, hostel facility is available for girls at AMCEC. Hostel fees range from ₹86,000 to ₹1.29 Lakhs per year. Contact the admissions office for current availability."
  },
  {
    question: "Does AMCEC have a placement cell for BCA/MCA students?",
    answer: "Yes, AMCEC has a dedicated placement cell that assists final year students with career guidance, resume building, interview preparation, and placement drives with top IT companies."
  }
];

export default function App() {
  const [careerTab, setCareerTab] = React.useState<'bca'|'mca'>('bca');
  
  return (
    <div className="font-sans min-h-screen flex flex-col items-stretch overflow-x-hidden antialiased text-slate-900 selection:bg-[#FFD500] selection:text-[#1a1b3a]">
      
      {/* Top Announcement Bar */}
      <div className="bg-[#181241] w-full py-2 px-4 sm:px-6 lg:px-10 flex border-b border-[#ffffff10]">
        <div className="w-full max-w-[1400px] mx-auto flex flex-wrap justify-center items-center gap-2 text-center text-[13px] md:text-sm font-semibold tracking-wide">
          <Sparkles size={16} className="text-[#FFD500]" />
          <span className="text-[#FFD500]">Admissions Open 2026—27 • Department of Computer Applications Main Campus</span>
          <span className="text-white text-[10px] font-bold tracking-widest uppercase bg-red-600 px-2 py-0.5 rounded shadow-sm">
            Limited Seats
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#f8fafc] shadow-sm relative z-20 w-full shrink-0 border-b border-slate-200">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-3 lg:py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center">
            <img 
              src="https://static.wixstatic.com/media/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png/v1/fill/w_476,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png" 
              alt="AMC Engineering College Logo" 
              className="h-12 lg:h-16 w-auto object-contain mix-blend-multiply" 
            />
          </div>
          
          <div className="flex items-center gap-3 md:gap-5 flex-wrap justify-center">
            <div className="flex items-center gap-2 text-[#1a1b3a] font-bold text-[13px] lg:text-sm md:bg-white md:px-4 md:py-2 md:rounded-lg md:shadow-sm">
              <Phone size={18} className="text-[#1a1b3a]" />
              <span>Admissions: 099020 44113</span>
            </div>
            
            <div className="hidden md:block border-l-2 border-slate-200 h-8 line-clamp-1"></div>
            
            <div className="hidden sm:block text-[11px] lg:text-xs font-bold text-[#1a1b3a] uppercase tracking-widest bg-[#FFD500] px-3.5 py-2 rounded shadow-sm">
              Computer Applications
            </div>
            
            <button className="bg-[#181241] hover:bg-[#201859] text-white font-extrabold px-6 lg:px-8 py-2.5 rounded text-[13px] shadow transition-colors uppercase tracking-widest">
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main className="flex-grow w-full min-h-[calc(100vh-100px)] lg:min-h-[700px] relative flex items-center py-12 lg:py-16 xl:py-20">
        
        {/* Background Layers */}
        <div className="absolute inset-0 z-0 bg-[#161a35]">
          <img 
            src="https://i.postimg.cc/yxg6ypDX/hero-amc-(Small).jpg" 
            alt="Campus Background" 
            className="w-full h-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b224c]/90 to-[#1b224c]/30"></div>
          {/* Dotted texture simulation over the blue */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-12 gap-12 xl:gap-20 items-stretch">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center items-start text-left text-white py-8 lg:py-16">
            
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.2] lg:leading-[1.15] mb-5 tracking-tight text-white max-w-3xl">
              Launch Your Tech Career with <br className="hidden lg:block" />
              <span className="text-[#FFD500]">BCA & MCA</span> at AMCEC
            </h1>

            <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl leading-[1.6] font-medium drop-shadow-md">
              Join AMC Engineering College — offering industry-aligned BCA and MCA specializations with world-class infrastructure, hands-on practical training, and strong placement support.
            </p>

            <div className="flex flex-col gap-y-3 lg:gap-y-4 mb-10 w-full max-w-2xl">
              <FeatureItem text="NAAC A+ & NBA Accredited — Top Ranked in Karnataka" />
              <FeatureItem text="Interdisciplinary Curriculum — App Dev, AI, Cloud & More" />
              <FeatureItem text="World-class Labs, Incubation Center & Practical Training" />
              <FeatureItem text="33 Lacs - Highest Package in Top Tech Companies" highlight />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="bg-white hover:bg-slate-50 text-[#1e2444] font-bold text-base px-8 py-3.5 flex items-center justify-center gap-2 w-full sm:w-auto transition-colors rounded">
                Apply Now <ChevronRight size={18} />
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border border-white font-bold text-base px-8 py-3.5 flex items-center justify-center w-full sm:w-auto transition-colors rounded">
                Explore Programs
              </button>
            </div>
            
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-5 xl:col-span-4 flex items-center justify-center lg:justify-end w-full">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-700/50 w-full max-w-sm">
              
              {/* Form Header */}
              <div className="bg-[#1e2444] p-4 lg:p-5 text-white relative">
                {/* Decorative subtle pattern in header */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
                <div className="relative z-10">
                  <span className="inline-block bg-[#FFD500] text-[#1a1b3a] text-[10px] font-bold uppercase px-2 py-0.5 rounded-full mb-2 tracking-widest shadow-sm">
                    Admissions Open
                  </span>
                  <h2 className="text-lg font-extrabold mb-1 tracking-tight">Apply Now for 2026</h2>
                  <p className="text-[11px] text-slate-300 leading-relaxed max-w-[95%]">
                    Fill the form to secure standard application fee waiver & early benefits.
                  </p>
                </div>
              </div>
              
              {/* Form Body */}
              <div className="p-4 lg:p-5">
                
                {/* Callout Box */}
                <div className="bg-[#fffdf2] border border-[#fde047] rounded-lg p-2.5 lg:p-3 flex gap-2.5 mb-4 shadow-sm">
                  <div className="bg-[#FFD500] rounded p-1 h-max flex-shrink-0 shadow-sm">
                    <Sparkles size={14} className="text-[#1a1b3a]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#1a1b3a] text-[11px] uppercase tracking-wide">Free Tech Career Counseling</h4>
                    <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed">
                      Included with every application today. Plan your future in Software Dev, AI, or Data Science.
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User size={14} strokeWidth={2.5} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Enter your full name" 
                        className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 hover:border-slate-300 rounded text-[13px] text-[#1a1b3a] font-medium placeholder:text-slate-400 placeholder:font-normal outline-none focus:border-[#FFD500] focus:ring-2 focus:ring-[#FFD500]/20 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Phone</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone size={14} strokeWidth={2.5} />
                      </div>
                      <input 
                        type="tel" 
                        placeholder="10-digit mobile number" 
                        className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 hover:border-slate-300 rounded text-[13px] text-[#1a1b3a] font-medium placeholder:text-slate-400 placeholder:font-normal outline-none focus:border-[#FFD500] focus:ring-2 focus:ring-[#FFD500]/20 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Course Dropdown */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Course Interest</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#1a1b3a]">
                        <BookOpen size={14} strokeWidth={2.5} />
                      </div>
                      <select defaultValue="Bachelor of Computer Apps (BCA)" className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded text-[13px] text-[#1a1b3a] font-bold outline-none focus:border-[#FFD500] focus:ring-2 focus:ring-[#FFD500]/20 appearance-none cursor-pointer shadow-sm">
                        <option value="Bachelor of Computer Apps (BCA)">Bachelor of Computer Apps (BCA)</option>
                        <option value="Master of Computer Apps (MCA)">Master of Computer Apps (MCA)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>

                  {/* City Dropdown */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">City</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <MapPin size={14} strokeWidth={2.5} />
                      </div>
                      <select defaultValue="" className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 hover:border-slate-300 rounded text-[13px] text-slate-500 font-medium outline-none focus:border-[#FFD500] focus:ring-2 focus:ring-[#FFD500]/20 appearance-none cursor-pointer shadow-sm">
                        <option value="" disabled>Select your city</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Mysore">Mysore</option>
                        <option value="Mangalore">Mangalore</option>
                        <option value="Hubli">Hubli</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-[#FFD500] hover:bg-[#e6c100] text-[#1a1b3a] font-extrabold py-2.5 rounded transition-colors uppercase tracking-widest text-xs mt-4 shadow-md">
                    Apply Now
                  </button>

                  <div className="flex items-center justify-center gap-1.5 pt-3 text-[10px] text-slate-400">
                    <Lock size={12} className="text-amber-500"/>
                    <span>Your private details are secure with AMC Admissions.</span>
                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Stats Section */}
      <section className="w-full bg-white py-8 lg:py-12 relative z-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
            <StatCard 
              value="20000+" 
              label={<>Global Alumni<br />Network</>} 
              icon={<Users size={32} className="text-[#FFD500]" />}
              bgColor="bg-[#FCF9EE]" 
            />
            <StatCard 
              value="95%" 
              label={<>Students Placed<br />Since 1984</>} 
              icon={<MapPin size={32} className="text-[#1a1b3a]" />}
              bgColor="bg-[#E5F3F8]" 
            />
            <StatCard 
              value="33 Lakhs" 
              label={<>Per Annum<br />Highest Package</>} 
              icon={<TrendingUp size={32} className="text-[#FFD500]" />}
              bgColor="bg-[#FCF9EE]" 
            />
            <StatCard 
              value="5.5 Lakhs" 
              label={<>Per Annum<br />Median Salary</>} 
              icon={<Banknote size={32} className="text-[#1a1b3a]" />}
              bgColor="bg-[#E5F3F8]" 
            />
          </div>
        </div>
      </section>

      {/* Programs Offered Section */}
      <section className="w-full bg-[#1a1b3a] py-12 lg:py-16 relative z-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-[40px] font-bold text-white mb-4 tracking-tight leading-tight">Programs Offered</h2>
            <p className="text-base lg:text-lg text-slate-300 font-medium">BCA & MCA — Your Path into the Tech World</p>
          </div>

          {/* Programs Container - Reference Style Outer Border */}
          <div className="border border-indigo-400/40 p-4 sm:p-6 rounded-[1.5rem] lg:rounded-[2rem] bg-[#1e2444]/50 shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="flex flex-col gap-4 lg:gap-6">
              
              {/* BCA Program Card (Dark theme) */}
              <div className="bg-[#1e2444] rounded-[1.25rem] overflow-hidden flex flex-col md:flex-row shadow-lg relative border border-white/5 group hover:border-[#FFD500]/50 hover:shadow-[0_10px_40px_rgba(255,213,0,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                {/* Content Side */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center relative z-10">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">Undergraduate</span>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-1">BCA</h3>
                    <p className="text-[#FFD500] font-bold text-base lg:text-lg mb-3">BCA with AIML/Cyber Security/Data Science</p>
                    <p className="text-slate-300 leading-relaxed text-sm font-medium max-w-2xl">
                      Bachelor of Computer Applications — a comprehensive UG program covering programming, web development, database management, networking and software engineering fundamentals.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-start gap-6 lg:gap-10 mb-6 pt-5 mt-5 border-t border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="bg-white/10 p-2 rounded-lg mt-0.5">
                        <CalendarDays className="text-[#FFD500]" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] lg:text-[11px] uppercase font-bold text-slate-300 tracking-wider mb-0.5">Duration</p>
                        <p className="font-extrabold text-white text-sm">3 Years <span className="text-slate-300 font-medium">(6 Semesters)</span></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-white/10 p-2 rounded-lg mt-0.5">
                        <GraduationCap className="text-[#FFD500]" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] lg:text-[11px] uppercase font-bold text-slate-300 tracking-wider mb-0.5">Eligibility</p>
                        <p className="font-extrabold text-white text-sm leading-snug">10+2 any stream <br className="hidden sm:block" /><span className="text-slate-300 font-medium">(min. 45%)</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3 mb-6">
                    {['Programming (C, Java, Python)', 'Web Development', 'DBMS & Networking', 'Software Engineering'].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 size={16} strokeWidth={2.5} className="text-[#FFD500] flex-shrink-0" />
                        <span className="text-[13.5px] font-semibold text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#161a35] rounded-xl p-4 mb-7 border border-white/5">
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-2.5">Specialisations Available:</p>
                    <div className="flex flex-wrap gap-2 text-[11px] uppercase font-bold tracking-wide">
                      <span className="bg-[#1e2444] text-[#FFD500] px-3 py-1.5 rounded-lg border border-[#FFD500]/20">Cyber Security</span>
                      <span className="bg-[#1e2444] text-[#FFD500] px-3 py-1.5 rounded-lg border border-[#FFD500]/20">Data Science</span>
                      <span className="bg-[#1e2444] text-[#FFD500] px-3 py-1.5 rounded-lg border border-[#FFD500]/20">AI & ML</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto w-full pt-1">
                    <button className="bg-white hover:bg-slate-100 text-[#1a1b3a] font-bold px-8 py-3.5 rounded-lg text-sm transition-colors shadow-sm w-full sm:w-auto uppercase tracking-wide">
                      Enquire Now
                    </button>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center sm:text-right">
                      Affiliated to Bangalore University
                    </span>
                  </div>
                </div>
              </div>

              {/* MCA Program Card (Light theme) */}
              <div className="bg-white rounded-[1.25rem] overflow-hidden flex flex-col md:flex-row shadow-lg relative border border-slate-200 group hover:border-[#1a1b3a]/30 hover:shadow-[0_10px_40px_rgba(26,27,58,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                {/* Content Side */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center relative z-10">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#1a1b3a]/10 text-[#1a1b3a] text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">Postgraduate</span>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-[#1a1b3a] mb-2">MCA</h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-medium max-w-2xl">
                      Master of Computer Applications — an advanced PG program in software development, AI, cloud computing and enterprise application development for tech-ready professionals.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-start gap-6 lg:gap-10 mb-6 pt-5 mt-5 border-t border-slate-100">
                    <div className="flex items-start gap-3">
                      <div className="bg-slate-50 p-2 rounded-lg mt-0.5 border border-slate-200">
                        <CalendarDays className="text-[#1a1b3a]" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] lg:text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Duration</p>
                        <p className="font-extrabold text-[#1a1b3a] text-sm">2 Years <span className="text-slate-500 font-medium">(4 Semesters)</span></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-slate-50 p-2 rounded-lg mt-0.5 border border-slate-200">
                        <GraduationCap className="text-[#1a1b3a]" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] lg:text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Eligibility</p>
                        <p className="font-extrabold text-[#1a1b3a] text-sm leading-snug">BCA / B.Sc. CS/Maths <br className="hidden sm:block" /><span className="text-slate-500 font-medium">(min. 50%)</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3 mb-6">
                    {['Advanced Java / Python', 'Artificial Intelligence', 'Cloud Computing', 'Data Science', 'Software Architecture'].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 size={16} strokeWidth={2.5} className="text-[#1a1b3a] flex-shrink-0" />
                        <span className="text-[13.5px] font-bold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 mb-7 border border-slate-200 flex flex-wrap gap-x-8 gap-y-3 items-center">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Entrance Access</p>
                      <p className="text-sm font-extrabold text-[#1a1b3a]">KPGCET / Merit Based</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto w-full pt-1">
                    <button className="bg-[#1a1b3a] hover:bg-[#2a2c5a] text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-colors shadow-sm w-full sm:w-auto uppercase tracking-wide">
                      Enquire Now
                    </button>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center sm:text-right">
                      Affiliated to VTU & Bangalore University
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Recruiters Section */}
      <section className="w-full bg-white py-10 lg:py-16 relative z-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#1a1b3a] tracking-tight mb-4 leading-tight">Our Recruiters</h2>
          </div>
          
          <div className="bg-[#FFD500] rounded-xl p-6 lg:p-8 relative overflow-hidden shadow-md">
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-lg lg:text-xl font-extrabold text-[#1a1b3a] mb-6 text-center tracking-tight">Top Recruiters</h3>
              
              {/* Desktop View Cards Grid-like Flex */}
              <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="flex gap-4 lg:gap-6 animate-marquee">
                  {/* First set */}
                  {recruiterLogos.map((src, i) => (
                    <RecruiterCard key={i} imgSrc={src} />
                  ))}
                  
                  {/* Duplicated set for seamless loop */}
                  {recruiterLogos.map((src, i) => (
                    <RecruiterCard key={`dup-${i}`} imgSrc={src} />
                  ))}
                </div>
              </div>
              
              {/* Pagination Dots Indicator */}
            </div>
          </div>
        </div>
      </section>

      {/* Why AMCEC Section */}
      <section className="w-full bg-[#181241] py-12 lg:py-16 relative z-20 overflow-hidden">
        {/* Decorative dots top left */}
        <div className="absolute top-8 left-8 w-32 h-32 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
        
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* Left Image Side */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[600px] order-2 lg:order-1 mt-8 lg:mt-0">
              {/* Orange box top left */}
              <div className="absolute -left-6 lg:-left-12 top-0 w-[60%] h-[55%] bg-[#d96745] -z-10 rounded-sm"></div>
              {/* Yellow box bottom right */}
              <div className="absolute right-0 bottom-12 lg:bottom-16 w-[80%] h-[40%] bg-[#fcb316] -z-10 rounded-sm"></div>
              
              {/* Decorative line bottom left */}
              <div className="absolute bottom-4 lg:bottom-8 left-0 lg:-left-8 w-2/3 h-[1px] bg-[#fcb316]"></div>
              <div className="absolute bottom-[14px] lg:bottom-[30px] left-[66%] lg:left-[calc(66.666%-2rem)] w-1.5 h-1.5 rounded-full bg-[#fcb316]"></div>
              <div className="absolute bottom-[2px] lg:bottom-[18px] left-0 lg:-left-8 w-1/4 h-[1px] bg-[#d96745]"></div>

              {/* Main Image */}
              <div className="absolute inset-4 sm:inset-6 lg:inset-x-0 lg:left-8 lg:top-8 lg:bottom-24 z-10 shadow-2xl">
                <img 
                  src="https://i.postimg.cc/13k9yr72/PMV08296.jpg" 
                  alt="AMC Campus" 
                  className="w-full h-full object-cover rounded-sm shadow-xl"
                />
              </div>
            </div>

            {/* Right Content Side */}
            <div className="text-white flex flex-col justify-center order-1 lg:order-2 py-4">
              <h2 className="text-3xl lg:text-[40px] font-bold mb-4 tracking-tight leading-tight text-white font-serif">Why AMCEC</h2>
              <div className="w-24 h-1 bg-[#FFD500] rounded-full mb-8"></div>
              
              <div className="mb-8 lg:mb-10">
                <h3 className="text-lg font-bold mb-2">Everything you need to build a tech career</h3>
                <p className="text-slate-300 text-[14px] leading-relaxed max-w-lg">
                  AMC Engineering College holds NAAC A+ accreditation — one of the highest quality ratings awarded to Indian institutions.
                </p>
              </div>

              {/* Items */}
              <div className="space-y-6 sm:space-y-8 lg:space-y-9">
                <WhyItem 
                  number="1." 
                  title="Modern Computer Labs" 
                  desc="State-of-the-art computer labs with the latest hardware, software, and high-speed internet for hands-on practical training." 
                />
                <WhyItem 
                  number="2." 
                  title="Experienced Faculty" 
                  desc="Learn from qualified professors and industry professionals with deep expertise in computer science and application development." 
                />
                <WhyItem 
                  number="3." 
                  title="52-Acre Green Campus" 
                  desc="Sprawling campus on Bannerghatta Road with hostel, library of 75,000+ volumes, sports, Wi-Fi and health facilities." 
                />
                <WhyItem 
                  number="4." 
                  title="Strong Placement Support" 
                  desc="Dedicated placement cell with connections to top IT companies, software firms and tech startups across Bangalore and India." 
                />
                <WhyItem 
                  number="5." 
                  title="Bangalore Advantage" 
                  desc="Located in India's Silicon Valley — direct access to tech giants, startups, internships and networking opportunities" 
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Recognised & Approved By Section */}
      <section className="w-full bg-[#f8fafc] py-12 lg:py-16 relative z-20 border-t border-slate-200">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#1a1b3a] tracking-tight leading-tight mb-4">Recognised & Approved By</h2>
            <div className="w-20 h-1 bg-[#FFD500] mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 w-full">
            <RecognisedCard title="NAAC A+" subtitle="National Accreditation" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlla7Hiamqclr7KBR2aAQ59K2azBf6YeGVQg&s" />
            <RecognisedCard title="NBA" subtitle="National Board of Accreditation" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0EfpIv5zmfeoz5KCSLPwZLlYZlHeG41B8VQ&s" />
            <RecognisedCard title="AICTE" subtitle="Govt. of India Approved" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwPL5ePymXNJuuKTqt69UNiCoXHHt139wjQ&s" />
            <RecognisedCard title="VTU" subtitle="Visvesvaraya Tech. University" imgSrc="https://upload.wikimedia.org/wikipedia/en/a/a0/Visvesvaraya_Technological_University_logo.png" />
            <RecognisedCard title="ISO" subtitle="ISO Certified Institution" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTG5sofu0OsiskIaa3OXcnUpkOKLNqr5QAw&s" />
          </div>
        </div>
      </section>

      {/* After Graduation Section */}
      <section className="w-full bg-[#181241] py-12 lg:py-16 relative z-20 border-t border-white/5">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight mb-4 leading-tight font-serif">
              <span className="text-[#eab308]">After</span> <span className="text-white">Graduation</span>
            </h2>
            <p className="text-slate-300 text-base lg:text-lg">Your degree opens doors to a thriving tech career</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch pt-2">
            {/* Left side Image card */}
            <div className="w-full lg:w-5/12 flex flex-col relative rounded-sm border border-[#eab308] overflow-hidden p-1 shadow-2xl shrink-0">
               <div className="relative w-full h-[300px] lg:h-full min-h-[300px] lg:min-h-[400px] rounded-sm overflow-hidden flex items-center justify-center bg-white">
                  <img src="https://i.postimg.cc/vmfW3X6C/DSC09869-(Small).jpg" alt="Tech Career" className="absolute inset-0 w-full h-full object-cover" />
                  {/* Subtle overlay gradients */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b1121]/80 to-transparent"></div>
               </div>
            </div>

            {/* Right side Tabs */}
            <div className="w-full lg:w-7/12 flex flex-col pt-1">
              {/* Tab Header */}
              <div className="flex w-full overflow-x-auto no-scrollbar rounded-t border-b border-[#eab308]/20">
                <button 
                  onClick={() => setCareerTab('bca')}
                  className={`px-8 py-4 text-sm sm:text-base font-medium transition-colors border-r border-[#eab308]/20 shrink-0 ${careerTab === 'bca' ? 'bg-[#eab308] text-[#0b1121] font-bold' : 'bg-[#0f4a8a] text-white hover:bg-[#1a5a9a]'}`}
                >
                  After BCA
                </button>
                <button 
                  onClick={() => setCareerTab('mca')}
                  className={`px-8 py-4 text-sm sm:text-base font-medium transition-colors border-r border-[#eab308]/20 shrink-0 ${careerTab === 'mca' ? 'bg-[#eab308] text-[#0b1121] font-bold' : 'bg-[#0f4a8a] text-white hover:bg-[#1a5a9a]'}`}
                >
                  After MCA
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-b border border-slate-200 p-6 sm:p-10 flex-1 relative flex flex-col justify-center">
                 {careerTab === 'bca' ? (
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {['Junior Software Developer', 'Web Developer', 'System Analyst', 'IT Support Engineer', 'Database Administrator', 'Network Administrator', 'Pursue MCA / MBA (IT)'].map((role) => (
                       <div key={role} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FFD500] hover:bg-[#fefce8] hover:shadow-md transition-all duration-300 group cursor-default transform hover:-translate-y-1">
                         <div className="w-2.5 h-2.5 rounded-full bg-[#1a1b3a] group-hover:bg-[#FFD500] shrink-0 transition-colors duration-300"></div>
                         <span className="text-[#1a1b3a] font-semibold text-[14px] sm:text-[15px] leading-snug tracking-tight">{role}</span>
                       </div>
                     ))}
                   </div>
                 ) : (
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {['Software Engineer / Developer', 'Full Stack Developer', 'Data Scientist / Analyst', 'Cloud Solutions Architect', 'AI / ML Engineer', 'Project Manager (IT)', 'Lecturer / Research Scholar'].map((role) => (
                       <div key={role} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#FFD500] hover:bg-[#fefce8] hover:shadow-md transition-all duration-300 group cursor-default transform hover:-translate-y-1">
                         <div className="w-2.5 h-2.5 rounded-full bg-[#1a1b3a] group-hover:bg-[#FFD500] shrink-0 transition-colors duration-300"></div>
                         <span className="text-[#1a1b3a] font-semibold text-[14px] sm:text-[15px] leading-snug tracking-tight">{role}</span>
                       </div>
                     ))}
                   </div>
                 )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Top sectors Section */}
      <section className="w-full bg-white py-12 lg:py-16 relative z-20">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row relative">
          
          {/* Desktop Image Offset Space & Overlapping Red Box */}
          <div className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20 bg-[#7A1F24] p-6 xl:p-8 w-[260px] xl:w-[280px] shadow-2xl items-center">
            <p className="text-white text-xl xl:text-2xl font-semibold leading-tight tracking-wide font-sans uppercase">
              Top sectors <br />to work in
            </p>
          </div>

          {/* Left Side: Image */}
          <div className="w-full lg:w-[70%] lg:pl-[120px] xl:pl-[160px]">
            <div className="w-full h-[250px] sm:h-[350px] lg:h-[450px] relative">
              <video 
                src="https://video.wixstatic.com/video/174df9_34e76e912ff9406a8ba3b01dd93fcde6/720p/mp4/file.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Mobile/Tablet Red Box (shifted to sit over the image) */}
            <div className="lg:hidden relative z-20 bg-[#7A1F24] p-5 sm:p-6 w-[85%] sm:w-[250px] shadow-xl -mt-12 sm:-mt-16 ml-4 sm:ml-8">
              <p className="text-white text-lg sm:text-xl font-semibold leading-tight tracking-wide font-sans uppercase">
                Top sectors to work in
              </p>
            </div>
            <div className="hidden lg:block mt-8">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="bg-[#1a1b3a] hover:bg-[#FFD500] text-white hover:text-[#1a1b3a] font-bold text-base px-10 py-4 flex items-center justify-center gap-3 transition-colors shadow-md rounded uppercase tracking-wide group"
              >
                Apply Now
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: List */}
          <div className="w-full lg:w-[30%] px-4 sm:px-8 lg:pr-8 xl:pr-12 lg:pl-10 flex flex-col justify-center mt-12 lg:mt-0">
            <div className="flex flex-col w-full border-t border-slate-200">
              {['IT & Software Companies', 'Cloud & SaaS Firms', 'AI & Data Science', 'Banking & Fintech', 'HealthTech & EdTech', 'Startups & Product Companies', 'Government IT Sector', 'Academia & Research'].map((sector, idx) => (
                <div key={idx} className="py-[14px] lg:py-[18px] border-b border-slate-200 flex items-center justify-between group cursor-default">
                   <h4 className="text-[#1a1b3a] font-bold text-[16px] lg:text-[18px] font-sans tracking-tight group-hover:text-[#7A1F24] transition-colors">{sector}</h4>
                   <ChevronRight className="text-transparent group-hover:text-[#7A1F24] transition-all transform -translate-x-4 group-hover:translate-x-0" size={18} />
                </div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="lg:hidden mt-10">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="bg-[#1a1b3a] hover:bg-[#FFD500] text-white hover:text-[#1a1b3a] font-bold text-base px-8 py-4 flex items-center justify-center gap-3 w-full transition-colors shadow-md rounded uppercase tracking-wide group"
              >
                Apply Now
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-12 lg:py-16 relative z-20">
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-[40px] font-bold text-[#1a1b3a] tracking-tight mb-4 leading-tight">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#FFD500] mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#161a35] py-12 lg:py-16 relative z-20 border-t-2 border-[#1e2444]">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12 gap-10 xl:gap-6 mb-12">
            {/* Logo and Description */}
            <div className="xl:col-span-5 flex flex-col items-start pr-0 xl:pr-12">
              <div className="bg-white rounded-lg p-3 inline-block mb-6 shadow-sm border border-slate-200">
                <img 
                  src="https://static.wixstatic.com/media/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png/v1/fill/w_476,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png" 
                  alt="AMC Engineering College" 
                  className="w-32 lg:w-40 h-auto"
                />
              </div>
              <p className="text-[13px] lg:text-[14px] leading-relaxed mb-6 font-normal text-slate-300">
                AMC Engineering College is committed to creating deep technical competency, high research productivity, and robust industry integrations for engineering professionals.
              </p>
              <p className="text-[#FFD500] font-bold text-[11px] lg:text-xs tracking-wider uppercase drop-shadow-sm">
                APPROVED BY AICTE | AFFILIATED TO VTU BENGALURU
              </p>
            </div>

            <div className="hidden xl:block xl:col-span-2"></div>

            {/* CURRICULAR FASTPATHS */}
            <div className="xl:col-span-2">
              <h4 className="text-[#FFD500] font-bold text-[11px] lg:text-xs uppercase tracking-widest mb-5 lg:mb-6">
                CURRICULAR FASTPATHS
              </h4>
              <ul className="flex flex-col gap-3 lg:gap-4 text-[13px] lg:text-sm text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Placements</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Why AMC</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Student Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campus Life</a></li>
              </ul>
            </div>

            {/* AMC CAMPUS LOCATION */}
            <div className="xl:col-span-3">
              <h4 className="text-[#FFD500] font-bold text-[11px] lg:text-xs uppercase tracking-widest mb-5 lg:mb-6">
                AMC CAMPUS LOCATION
              </h4>
              <ul className="flex flex-col gap-4 lg:gap-5 text-[13px] lg:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#FFD500] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug hover:text-white transition-colors">AMC Campus, 18th K.M. Bannerghatta Road,<br/>Bengaluru – 560083</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#FFD500] flex-shrink-0" />
                  <a href="tel:+919902044113" className="hover:text-white transition-colors">+91 99020 44113</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#FFD500] flex-shrink-0" />
                  <a href="mailto:admissions@amceducation.in" className="hover:text-white transition-colors">admissions@amceducation.in</a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-center md:text-left text-[12px] text-slate-400">
              <span className="font-normal opacity-80">© 2026 AMC Engineering College Bengaluru. All rights reserved.</span>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="font-normal opacity-80">Design and Developed By Mediagarh</span>
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-white hover:text-[#FFD500] font-bold text-[11px] tracking-widest uppercase flex items-center gap-2 transition-colors"
            >
              BACK TO TOP <ChevronUp size={16} className="text-white hover:text-[#FFD500] transition-colors" />
            </button>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

function RecognisedCard({ title, subtitle, imgSrc }: { title: string; subtitle: string; imgSrc?: string }) {
  return (
    <div className="bg-white rounded-[1.25rem] shadow-sm border border-slate-200 p-6 flex flex-col items-center justify-center text-center w-[160px] sm:w-[180px] lg:w-[220px] hover:shadow-md hover:border-[#FFD500]/50 transition-all group">
      {imgSrc ? (
        <div className="h-16 lg:h-20 flex items-center justify-center mb-5 lg:mb-6">
          <img src={imgSrc} alt={title} className="max-h-full max-w-full object-contain scale-[1.3] lg:scale-[1.4] mix-blend-multiply" />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-full bg-slate-50 group-hover:bg-[#FFD500]/10 flex items-center justify-center mb-5 border border-slate-100 transition-colors">
          <Award className="text-slate-400 group-hover:text-[#FFD500] transition-colors" size={32} />
        </div>
      )}
      <h4 className="font-extrabold text-[#1a1b3a] text-lg lg:text-xl mb-1.5">{title}</h4>
      <p className="text-[13px] leading-snug text-slate-500 font-medium px-2">{subtitle}</p>
    </div>
  );
}

function WhyItem({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 w-full sm:w-[85%] md:w-[70%] lg:w-[85%] xl:w-[75%]">
        {/* Number Circle */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fcb316] text-[#1a1b3a] flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0 shadow-sm relative z-10">
          {number}
        </div>
        {/* Title Pill */}
        <div className="bg-[#fcb316] text-[#1a1b3a] font-extrabold px-5 sm:px-6 py-2 rounded-l-full rounded-r-[1rem] shadow-sm flex-1 truncate text-sm sm:text-[15px] -ml-2 pl-4">
          {title}
        </div>
      </div>
      {/* Description */}
      <p className="text-white text-sm sm:text-[15px] leading-relaxed pl-[3.25rem] opacity-95">
        {desc}
      </p>
    </div>
  );
}

function RecruiterCard({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="shrink-0 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-2 lg:p-3 w-[160px] h-[80px] lg:w-[220px] lg:h-[100px] flex items-center justify-center hover:shadow-lg transition-all cursor-default">
      <img src={imgSrc} alt="Recruiter Logo" className="max-h-full max-w-full object-contain mix-blend-multiply" />
    </div>
  );
}

function FeatureItem({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <div className={`flex items-start gap-3 rounded-lg transition-colors ${highlight ? 'bg-white/10 p-2.5 pr-4 -ml-2.5 border border-white/20 shadow-sm inline-flex' : ''}`}>
      <div className="mt-0.5 flex-shrink-0">
        <CheckCircle2 size={18} className="text-[#FFD500]" fill="#FFD500" color="#1a1b3a" strokeWidth={1.5} />
      </div>
      <p className={`text-[15px] lg:text-[16px] leading-[1.4] font-medium ${highlight ? 'text-[#FFD500] font-bold' : 'text-white'}`}>
        {text}
      </p>
    </div>
  );
}

function StatCard({ value, label, icon, bgColor }: { value: string; label: React.ReactNode; icon: React.ReactNode; bgColor: string }) {
  return (
    <div className={`${bgColor} rounded-xl lg:rounded-2xl p-5 lg:p-6 xl:p-8 flex flex-col justify-between relative overflow-hidden min-h-[140px] xl:min-h-[160px]`}>
      <div>
        <h3 className="text-xl lg:text-2xl xl:text-3xl font-extrabold text-[#1a1b3a] mb-1 xl:mb-2">{value}</h3>
        <p className="text-xs xl:text-sm font-bold text-slate-700 leading-snug">{label}</p>
      </div>
      <div className="absolute right-4 bottom-4 lg:right-6 lg:bottom-6 opacity-90">
        {icon}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:border-slate-300 transition-colors">
      <button 
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-[#1a1b3a] text-lg pr-8">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#FFD500] rotate-180' : 'bg-slate-100 rotate-0'}`}>
          <ChevronDown size={20} className={isOpen ? 'text-[#1a1b3a]' : 'text-slate-500'} />
        </div>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="w-full h-px bg-slate-100 mb-4"></div>
        <p className="text-slate-600 leading-relaxed text-[15px]">{answer}</p>
      </div>
    </div>
  );
}
