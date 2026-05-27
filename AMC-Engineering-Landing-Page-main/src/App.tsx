import { useState, useRef, useEffect, FormEvent } from 'react';
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
import { 
  Phone, Mail, MapPin, GraduationCap, 
  MessageSquare, Send, X, ShieldAlert,
  ChevronUp, CheckCircle, Headphones
} from 'lucide-react';

export default function App() {
  // Support state for floating admissions counselor chat helper
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'counselor'; text: string; time: string }>>([
    { 
      sender: 'counselor', 
      text: "Welcome to AMC Engineering College Admissions Desk! I'm Prof. Swetha. How may I assist you with your BTech or MTech choices today?",
      time: "Just now"
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isStickyVisible, setIsStickyVisible] = useState(true);
  
  // Custom states for notifications
  const [notification, setNotification] = useState<string | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Quick reply options for students
  const quickQuestions = [
    "What is the average package?",
    "Tell me about lab equipment",
    "Are admissions currently open?",
    "Where is the campus located?"
  ];

  const handleQuickQuestion = async (question: string) => {
    if (isTyping) return;

    const userMsg = { 
      sender: 'user' as const, 
      text: question, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: question,
          history: messages
        })
      });

      if (!response.ok) {
        throw new Error('Failed to reach counselor');
      }

      const data = await response.json();
      const counselorMsg = {
        sender: 'counselor' as const,
        text: data.response,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, counselorMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg = {
        sender: 'counselor' as const,
        text: "I am having connection issues reaching the admissions database. Please register using the form on this page so our admissions team can call you directly!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isTyping) return;

    const currentInput = userInput.trim();
    setUserInput('');

    const userMsg = { 
      sender: 'user' as const, 
      text: currentInput, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: currentInput,
          history: messages
        })
      });

      if (!response.ok) {
        throw new Error('Failed to reach counselor');
      }

      const data = await response.json();
      const counselorMsg = {
        sender: 'counselor' as const,
        text: data.response,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, counselorMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg = {
        sender: 'counselor' as const,
        text: "I am having connection issues reaching the admissions database. Please register using the form on this page so our admissions team can call you directly!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

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
      
      {/* Dynamic Pop notification bar */}
      {notification && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#FED304] text-[#161D4A] px-5 py-4 rounded-xl shadow-2xl border border-[#161D4A]/10 flex items-center space-x-3 max-w-sm animate-in slide-in-from-bottom-6 duration-300">
          <CheckCircle className="w-5 h-5 shrink-0 text-[#161D4A]" />
          <p className="text-xs font-bold leading-snug">{notification}</p>
        </div>
      )}

      {/* Floating Messenger Widget */}
      <div className={`fixed transition-all duration-300 right-6 z-50 ${isStickyVisible ? 'bottom-22 sm:bottom-24' : 'bottom-6'}`}>
        {isChatOpen ? (
          <div className="w-80 sm:w-85 bg-[#161D4A] text-white rounded-2xl shadow-2xl border border-[#ADDDF1]/20 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header chat block */}
            <div className="bg-[#161D4A] border-b border-[#ADDDF1]/15 p-4.5 flex items-center justify-between">
              <div className="flex items-center space-x-3 text-left">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#FED304]">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80" 
                      alt="Prof Swetha" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#161D4A]"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">Prof. Swetha Acharya</h4>
                  <span className="text-[10px] text-green-400 font-mono font-bold uppercase tracking-widest leading-none block mt-1">● Admissions Desk</span>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-1 hover:bg-[#FFFFFF]/10 rounded-md text-gray-400 hover:text-white"
                id="close-chat-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages pane */}
            <div className="flex-1 p-4 space-y-4 max-h-64 overflow-y-auto text-left" id="chat-messages-container">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`p-3 rounded-xl text-xs max-w-[85%] leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-[#FED304] text-[#161D4A] rounded-br-none font-bold' 
                      : 'bg-[#FFFFFF]/10 text-[#FFFFFF] rounded-bl-none border border-[#FFFFFF]/5'
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-[#ADDDF1]/50 mt-1 font-mono tracking-widest uppercase">
                    {msg.time}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex flex-col items-start animate-pulse">
                  <div className="p-3 rounded-xl text-xs max-w-[85%] bg-[#FFFFFF]/10 text-[#FFFFFF]/70 rounded-bl-none border border-[#FFFFFF]/5 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick action buttons */}
            <div className="p-3 bg-[#161D4A]/90 border-t border-[#ADDDF1]/10 text-left">
              <span className="text-[9px] font-mono text-[#ADDDF1] uppercase tracking-widest block mb-2 font-bold">Frequently Asked:</span>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-[10px] font-semibold bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/15 border border-[#FFFFFF]/10 hover:border-[#FED304] text-[#FFFFFF]/90 hover:text-[#FED304] rounded-lg py-1 px-2 cursor-pointer transition-all whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-[#ADDDF1]/15 bg-[#161D4A] flex items-center space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your academic query..."
                className="flex-1 bg-[#FFFFFF]/5 border border-[#ADDDF1]/10 rounded-xl py-2 px-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FED304]"
              />
              <button 
                type="submit"
                className="p-2.5 bg-[#FED304] text-[#161D4A] rounded-xl hover:bg-[#FED304]/90 hover:scale-105 transition-all text-center shrink-0 cursor-pointer"
                id="send-message-btn"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        ) : (
          <button
            onClick={() => {
              setIsChatOpen(true);
            }}
            className="flex items-center space-x-2 px-4 py-3.5 bg-[#FED304] text-[#161D4A] hover:bg-[#FED304]/90 rounded-full shadow-2xl tracking-wider font-extrabold text-xs uppercase duration-200 transform hover:scale-105 select-none shrink-0 group border border-[#161D4A]/10 cursor-pointer"
            id="chat-trigger-btn"
          >
            <Headphones className="w-5 h-5 animate-pulse text-[#161D4A]" />
            <span className="font-sans">Admissions Help</span>
          </button>
        )}
      </div>

      {/* Primary Fixed Content structure */}
      <Navbar />

      {/* Main wrapper for content and sticky footer */}
      <div className="relative flex-1 flex flex-col">
        <main className="relative flex flex-col">
          {/* Hero Area */}
          <HeroSection onSuccessSubmit={notifyUserFromFormSubmit} />

          {/* Placements area */}
          <PlacementsSection />

          {/* Pain points area */}
          <PainPointsSection />

          {/* Academia courses area */}
          <ProgramsSection />

          {/* Value metrics area */}
          <WhyAMCSection />

          {/* Prototyping sandbox area */}
          <StudentWorkSection />

          {/* Global exposure area */}
          <IndustryExposureSection />

          {/* Campus life grid area */}
          <CampusLifeSection />

          {/* Testimonials area */}
          <SocialProofSection />

          {/* Final lead capture intake area */}
          <FinalCTASection />
        </main>

        {/* Sticky Event Registration Footer */}
        {isStickyVisible && (
          <div className="sticky bottom-0 z-40 w-full bg-[#161D4A] border-t-2 border-[#FED304] shadow-[0_-8px_30px_rgba(0,0,0,0.2)]">
            <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3.5 min-w-0">
                {/* 1:1 Aspect Ratio Image */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-[#FED304]/30 shrink-0 bg-gray-100 flex items-center justify-center shadow-inner">
                  <img 
                    src="https://openday.amcgroup.edu.in/_components/v2/a84344c2237668234c2cf1a425a740b02e1984aa/Screenshot_2026-05-24_at_1.27.53_PM.389c6241.png" 
                    alt="AMC Open Day Screenshot" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Text Content */}
                <div className="text-left min-w-0">
                  <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase font-display leading-tight truncate">
                    Registration for OPEN Days
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#FED304] font-bold mt-0.5 uppercase tracking-wider font-mono">
                    May 30th, Time 4:00 PM
                  </p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
                <button
                  onClick={() => {
                    const el = document.getElementById('cta-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-1.5 sm:px-5 sm:py-2 text-[9px] sm:text-xs font-black uppercase tracking-widest rounded-lg bg-[#FED304] text-[#161D4A] hover:bg-[#FED304]/90 active:scale-95 transition-all shadow-md cursor-pointer border border-[#FED304]"
                >
                  Register
                </button>
                <button
                  onClick={() => setIsStickyVisible(false)}
                  className="p-1.5 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close open day registration footer"
                >
                  <X className="w-4 h-4 sm:w-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Area */}
      <footer className="bg-[#161D4A] text-white pt-16 pb-8 border-t border-[#ADDDF1]/15 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FED304]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-[#ADDDF1]/10 pb-12 mb-10 text-left">
            
            {/* Logo and metadata info */}
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
                AMC Engineering College is committed to creating deep technical competency, high research productivity, and robust industry integrations for engineering professionals.
              </p>
              <div className="pt-2 text-xs text-[#FED304] font-mono uppercase tracking-widest">
                Approved by AICTE | Affiliated to VTU BENGALURU
              </div>
            </div>

            {/* Quick Links Column */}
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

            {/* Quick admissions address */}
            <div className="lg:col-span-4 space-y-4 text-xs">
              <h4 className="text-xs uppercase font-extrabold text-[#FED304] tracking-widest font-mono border-b border-[#ADDDF1]/15 pb-2">
                AMC Campus Location
              </h4>
              <div className="space-y-3.5">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#FED304] mt-0.5 shrink-0" />
                  <p className="text-[#ADDDF1]/90 leading-relaxed">
                    AMC Campus, 18th K.M. Bannerghatta Road,<br />
                    Kalkere, Bengaluru, Karnataka 560083
                  </p>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#FED304] shrink-0" />
                  <span className="text-[#ADDDF1]/90">+91 9902044114</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-[#FED304] shrink-0" />
                  <span className="text-[#ADDDF1]/90">admissions@amceducation.in</span>
                </div>
              </div>
            </div>

          </div>

          {/* Clean Academic footnotes representation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ADDDF1]/60">
            <p className="font-mono">
              &copy; {new Date().getFullYear()} AMC Engineering College Bengaluru. All rights reserved.
            </p>
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

