import { useState, FormEvent } from 'react';
import { Calendar, Mail, Phone, User, BookOpen, Send, CheckCircle2, AlertCircle, Clock, Check, ChevronRight } from 'lucide-react';

export default function FinalCTASection() {
  // Form values
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');

  // Status values
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Interactive calendar scheduling state after submission completes
  const [selectedDay, setSelectedDay] = useState<'Tomorrow' | 'Monday' | 'Tuesday'>('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:00 AM - 11:00 AM');
  const [isSlotBooked, setIsSlotBooked] = useState(false);

  const courseOptions = [
    "BTech - Computer Science Engineering",
    "BTech - Electronics & Communication",
    "BTech - Mechanical Engineering",
    "BTech - Civil Engineering",
    "BTech - Electrical & Electronics",
    "BTech - Aeronautical Engineering",
    "BTech - Artificial Intelligence & Machine Learning",
    "BTech - Data Science",
    "BTech - CSE + AI/ML",
    "MTech - Advance Computer Science Engineering",
    "MTech - VLSI & Embedded Systems",
    "MTech - Data Science and Research Methodology",
    "MTech - Digital Electronics",
    "MTech - Machine Design, AI & Machine Learning"
  ];

  const handleApply = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!course) newErrors.course = 'Please select a academic course';
    
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulated API submission pipeline (800ms)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleBookingConfirm = () => {
    setIsSlotBooked(true);
  };

  return (
    <section id="cta-form" className="py-20 md:py-28 bg-[#FFFFFF] text-[#161D4A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading represent Page 7 (Final CTA Heading) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#161D4A] border-b-2 border-[#FED304] pb-1">
            Enrolment Intake Open
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-[#161D4A]">
            Apply to AMC
          </h2>
          <p className="text-base sm:text-lg text-[#161D4A]/75 font-sans leading-relaxed">
            Start your journey at one of the top engineering colleges in Bangalore with strong placements.
          </p>
        </div>

        {/* Dynamic intake console card split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          
          {/* Form instructions/counselor highlight (Left Column) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono font-black text-[#161D4A]/50 bg-[#ADDDF1]/20 px-2.5 py-1 rounded">
                Free Academic Advisory Session
              </span>
              <h3 className="text-2xl font-black font-display text-[#161D4A] leading-tight">
                Book Your Free Engineering Career Counseling Session
              </h3>
              <p className="text-sm text-[#161D4A]/70 leading-relaxed font-sans">
                Our senior academic advisors will evaluate your high school scores or bachelor degrees, trace your engineering interests, and outline the ideal career paths.
              </p>
            </div>

            <div className="space-y-2.5 bg-gradient-to-tr from-[#161D4A] to-[#161D4A] text-white p-5 rounded-2xl border border-transparent shadow-inner">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#FED304] font-mono">Admissions Metrics Hotline:</h4>
              <p className="text-xs text-[#ADDDF1]/90 font-mono leading-relaxed">
                Direct Counseling Office: +91 9902044114<br />
                General Academic Query: admissions@amceducation.in
              </p>
            </div>
          </div>

          {/* Form and interactive calendar selector (Right Column) */}
          <div className="lg:col-span-7">
            <div className="bg-[#161D4A] text-white rounded-2xl p-6 sm:p-8 border border-[#ADDDF1]/15 shadow-2xl relative">
              <div className="absolute top-0 right-1/4 w-32 h-32 bg-[#FED304]/5 rounded-full blur-2xl pointer-events-none"></div>

              {submitted ? (
                <div className="space-y-6 text-left animate-in fade-in duration-300">
                  <div className="flex items-center space-x-3.5 border-b border-[#ADDDF1]/15 pb-4">
                    <div className="w-11 h-11 bg-[#FED304]/10 rounded-full border border-[#FED304]/30 flex items-center justify-center text-[#FED304]">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#FFFFFF]">Counseling Form Logged!</h4>
                      <p className="text-xs text-[#ADDDF1]">Now schedule your live 1-on-1 advisory slot</p>
                    </div>
                  </div>

                  {isSlotBooked ? (
                    <div className="p-6 bg-[#FFFFFF]/5 rounded-xl border border-dashed border-[#FED304]/30 text-center space-y-4 py-8">
                      <CheckCircle2 className="w-12 h-12 text-[#FED304] mx-auto animate-bounce" />
                      <div>
                        <h4 className="text-base font-bold text-[#FFFFFF]">Counseling Session Scheduled!</h4>
                        <p className="text-sm text-[#ADDDF1] mt-1 font-sans">
                          A confirmation calendar invitation was dispatched to <strong className="text-[#FFFFFF]">{email}</strong>.
                        </p>
                        <div className="inline-block mt-4 px-4 py-2 bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 rounded-lg text-xs tracking-wide">
                          Slot: <strong className="text-[#FED304] font-mono uppercase">{selectedDay}, {selectedSlot}</strong>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400">Please have your certificates/bachelor transcripts ready for the call.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase text-[#ADDDF1] font-bold">Step 2: Choose Date & Time Block</span>
                        <h5 className="text-sm font-bold text-[#FFFFFF]">Select Preferred counseling day:</h5>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5">
                        {['Tomorrow', 'Monday', 'Tuesday'].map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day as typeof selectedDay)}
                            className={`py-3 px-3 rounded-lg text-xs font-bold transition-all text-center border cursor-pointer uppercase tracking-wider ${
                              selectedDay === day 
                                ? 'bg-[#FED304] text-[#161D4A] border-[#FED304]' 
                                : 'bg-[#FFFFFF]/5 text-[#FFFFFF] border-[#FFFFFF]/10 hover:bg-[#FFFFFF]/10'
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>

                      <h5 className="text-sm font-bold text-[#FFFFFF] pt-2">Available Time Windows on {selectedDay}:</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          '10:00 AM - 11:00 AM',
                          '11:30 AM - 12:30 PM',
                          '02:00 PM - 03:00 PM',
                          '04:30 PM - 05:30 PM'
                        ].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2.5 px-3 rounded-lg text-xs font-mono transition-all text-center border cursor-pointer ${
                              selectedSlot === slot 
                                ? 'bg-[#ADDDF1] text-[#161D4A] border-[#ADDDF1]' 
                                : 'bg-[#FFFFFF]/5 text-[#FFFFFF]/80 border-[#FFFFFF]/10 hover:border-[#FFFFFF]/20'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={handleBookingConfirm}
                        className="w-full py-3.5 bg-[#FED304] hover:bg-[#FED304]/90 text-[#161D4A] text-xs font-bold uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-lg text-center"
                      >
                        Confirm Time Slot Booking
                      </button>
                    </div>
                  )}

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setIsSlotBooked(false);
                      }}
                      className="text-xs font-bold text-[#ADDDF1]/60 hover:text-[#ADDDF1] underline"
                    >
                      Restart counseling form registrations
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4.5 text-left">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#ADDDF1] mb-1.5">
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#ADDDF1]/40">
                        <User className="w-4.5 h-4.5" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) delete errors.name;
                        }}
                        placeholder="John Doe"
                        className={`w-full bg-[#161D4A]/50 border rounded-xl py-3 pl-11 pr-4 text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:outline-none focus:ring-2 focus:ring-[#FED304]/40 transition-all ${
                          errors.name ? 'border-red-400' : 'border-[#ADDDF1]/20 focus:border-[#FED304]'
                        }`}
                      />
                    </div>
                    {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#ADDDF1] mb-1.5">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#ADDDF1]/40">
                        <Phone className="w-4.5 h-4.5" />
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) delete errors.phone;
                        }}
                        placeholder="e.g. 9876543210"
                        className={`w-full bg-[#161D4A]/50 border rounded-xl py-3 pl-11 pr-4 text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:outline-none focus:ring-2 focus:ring-[#FED304]/40 transition-all ${
                          errors.phone ? 'border-red-400' : 'border-[#ADDDF1]/20 focus:border-[#FED304]'
                        }`}
                      />
                    </div>
                    {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>}
                  </div>

                  {/* Course Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#ADDDF1] mb-1.5">
                      Course
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#ADDDF1]/40">
                        <BookOpen className="w-4.5 h-4.5" />
                      </div>
                      <select
                        value={course}
                        onChange={(e) => {
                          setCourse(e.target.value);
                          if (errors.course) delete errors.course;
                        }}
                        className={`w-full bg-[#161D4A]/90 border rounded-xl py-3.5 pl-11 pr-10 text-sm text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FED304]/40 transition-all cursor-pointer appearance-none ${
                          errors.course ? 'border-red-400' : 'border-[#ADDDF1]/20 focus:border-[#FED304]'
                        }`}
                      >
                        <option value="">-- Choose Program specialty --</option>
                        {courseOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-[#161D4A]">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#ADDDF1]/40 rotate-90">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.course && <span className="text-red-400 text-xs mt-1 block">{errors.course}</span>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#ADDDF1] mb-1.5">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#ADDDF1]/40">
                        <Mail className="w-4.5 h-4.5" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) delete errors.email;
                        }}
                        placeholder="john.doe@gmail.com"
                        className={`w-full bg-[#161D4A]/50 border rounded-xl py-3 pl-11 pr-4 text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/30 focus:outline-none focus:ring-2 focus:ring-[#FED304]/40 transition-all ${
                          errors.email ? 'border-red-400' : 'border-[#ADDDF1]/20 focus:border-[#FED304]'
                        }`}
                      />
                    </div>
                    {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Submission Action */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-3 py-3.5 bg-[#FED304] text-[#161D4A] hover:bg-[#FED304]/90 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Verifying Details...' : 'Book counseling meeting'}</span>
                    {!isSubmitting && <Send className="w-3.5 h-3.5" />}
                  </button>

                  <div className="flex items-center space-x-2 bg-[#FFFFFF]/5 p-3 rounded-lg border border-[#FFFFFF]/5 mt-4 text-[11px] text-gray-300">
                    <Clock className="w-4 h-4 text-[#FED304] shrink-0" />
                    <span>Free service offered directly from AMC Engineering College Bengaluru Admissions Panel.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
